"use client";

import { useState } from "react";

export default function ShareBox({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-white text-[#0B1120] rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold mb-4">Share this job</h3>

      <div className="flex items-center gap-3">
        <button
          onClick={handleCopy}
          title="Copy Link"
          className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer"
        >
          🔗
        </button>

        <span
          className={`text-sm font-medium transition-all duration-200 ${
            copied ? "text-green-400 opacity-100" : "opacity-0"
          }`}
        >
          ✓ Copied!
        </span>
      </div>
    </div>
  );
}