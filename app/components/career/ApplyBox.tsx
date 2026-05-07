"use client";

export default function ApplyBox({ url }: { url: string }) {
  return (
     <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-xl shadow-md">

        <h3 className="text-xl font-semibold mb-2">
          Ready to apply?
        </h3>

        <p className="text-sm opacity-90 mb-4">
          Take the next step in your career. We’d love to hear from you.
        </p>

        <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
          Apply Now →
        </button>

      </div>
  );
}