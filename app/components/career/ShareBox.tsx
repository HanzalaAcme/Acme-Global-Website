"use client";

export default function ShareBox({ url }: { url: string }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold mb-4">Share this job</h3>

      <div className="flex gap-4">
        <button
          onClick={() => navigator.clipboard.writeText(url)}
          title="Copy Link"
          className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 cursor-pointer"
        >
          🔗
        </button>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(url)}`}
          target="_blank"
          title="Share on WhatsApp"
          className="p-3 bg-gray-100 rounded-lg hover:bg-green-100 cursor-pointer"
        >
          🟢
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          title="Share on Facebook"
          className="p-3 bg-gray-100 rounded-lg hover:bg-blue-200 cursor-pointer"
        >
          📘
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          title="Share on LinkedIn"
          className="p-3 bg-gray-100 rounded-lg hover:bg-blue-200 cursor-pointer"
        >
          💼
        </a>
      </div>
    </div>
  );
}