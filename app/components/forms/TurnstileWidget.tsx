"use client";

import { useEffect, useRef, useState } from "react";

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
  resetKey?: number;
  className?: string;
};

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
      theme: "light";
      size: "flexible";
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
    __acmeTurnstileScriptPromise?: Promise<void>;
  }
}

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve();
  if (window.__acmeTurnstileScriptPromise) return window.__acmeTurnstileScriptPromise;

  window.__acmeTurnstileScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-acme-turnstile]");
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Turnstile failed to load")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.acmeTurnstile = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Turnstile failed to load"));
    document.head.appendChild(script);
  });

  return window.__acmeTurnstileScriptPromise;
}

export default function TurnstileWidget({ onTokenChange, resetKey = 0, className = "" }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  const [message, setMessage] = useState("Loading human verification…");

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    let cancelled = false;
    let widgetId: string | null = null;

    async function initialize() {
      try {
        const keyResponse = await fetch("/api/turnstile/sitekey", { cache: "no-store" });
        if (!keyResponse.ok) throw new Error("Human verification is not configured yet.");
        const { sitekey } = (await keyResponse.json()) as { sitekey?: string };
        if (!sitekey) throw new Error("Human verification is not configured yet.");

        await loadTurnstileScript();
        if (cancelled || !containerRef.current || !window.turnstile) return;

        setMessage("Complete the human verification to continue.");
        widgetId = window.turnstile.render(containerRef.current, {
          sitekey,
          theme: "light",
          size: "flexible",
          callback: (token) => {
            onTokenChangeRef.current(token);
            setMessage("");
          },
          "expired-callback": () => {
            onTokenChangeRef.current("");
            setMessage("Verification expired. Please verify again.");
          },
          "error-callback": () => {
            onTokenChangeRef.current("");
            setMessage("Verification could not load. Refresh the page and try again.");
          },
        });
        widgetIdRef.current = widgetId;
      } catch (error) {
        if (!cancelled) {
          setMessage(error instanceof Error ? error.message : "Human verification could not load.");
        }
      }
    }

    void initialize();

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
      if (widgetIdRef.current === widgetId) widgetIdRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!resetKey) return;
    onTokenChangeRef.current("");
    if (widgetIdRef.current && window.turnstile) window.turnstile.reset(widgetIdRef.current);
    setMessage("Please complete the human verification again.");
  }, [resetKey]);

  return (
    <div className={`w-full min-w-0 max-w-[270px] ${className}`}>
      <div ref={containerRef} className="min-h-[65px] w-full min-w-0" />
      {message && (
        <p aria-live="polite" className="mt-1 text-xs leading-5 text-slate-600">
          {message}
        </p>
      )}
    </div>
  );
}
