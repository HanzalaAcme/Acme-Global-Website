"use client";

export default function ShareBox({ url }: { url: string }) {
  return (
    <div className="bg-white text-[#0B1120]  rounded-xl p-6 shadow-sm ">
      <h3 className="font-semibold mb-4">Share this job</h3>

      <div className="flex gap-4">
        <button
          onClick={() => navigator.clipboard.writeText(url)}
          title="Copy Link"
          className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 cursor-pointer"
        >
          🔗
        </button>

        
      </div>
    </div>
  );
}