"use client";

import ApplicationForm from "./ApplicationForm";

export default function ApplicationModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">

      {/* MODAL BOX */}
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          ✕
        </button>

        <ApplicationForm onClose={onClose} />

      </div>
    </div>
  );
}