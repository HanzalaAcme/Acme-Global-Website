"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileRenderOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
  theme: "light";
  size: "normal";
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: TurnstileRenderOptions,
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
  resetKey: number;
};

export default function TurnstileWidget({
  onTokenChange,
  resetKey,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  const [scriptReady, setScriptReady] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    if (!scriptReady || !siteKey || !containerRef.current || !window.turnstile) {
      return;
    }

    const widgetId = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "light",
      size: "normal",
      callback: (token) => onTokenChangeRef.current(token),
      "expired-callback": () => onTokenChangeRef.current(""),
      "error-callback": () => onTokenChangeRef.current(""),
    });

    return () => {
      window.turnstile?.remove(widgetId);
    };
  }, [resetKey, scriptReady, siteKey]);

  if (!siteKey) {
    return (
      <p className="text-sm text-red-600" role="alert">
        Human verification is not configured. Please try again later.
      </p>
    );
  }

  return (
    <div className="my-5">
      <Script
        id="cloudflare-turnstile-script"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
        onError={() => {
          setScriptError(true);
          onTokenChangeRef.current("");
        }}
      />
      <div ref={containerRef} />
      {scriptError && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          Human verification could not load. Please refresh and try again.
        </p>
      )}
    </div>
  );
}
