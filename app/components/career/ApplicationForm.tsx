"use client";

import { useState } from "react";

export default function ApplicationForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: any) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    if (file) formData.set("resume", file);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Something went wrong");

      setSuccess(true);

      setTimeout(() => {
        onClose();
      }, 4000);
    } catch (err) {
      setError("Failed to submit. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <h3 className="text-gray-900 text-xl font-semibold mb-6">
        Apply / Submit Your Profile
      </h3>

      {success ? (
        <div className="text-center py-10">
          <div className="text-green-600 text-4xl mb-3">✔</div>
          <p className="text-gray-800 font-medium">
            Application submitted successfully!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            We’ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* INPUTS */}
          <input
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            className="w-full border p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
          />

          <input
            name="role"
            placeholder="Role you're interested in"
            className="w-full border p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
          />

          {/* FILE UPLOAD BOX */}
          <div className="border-2 border-dashed rounded-xl p-5 text-center bg-gray-50 relative">

            {!file ? (
              <>
                <p className="text-gray-500 mb-2">
                  Drag & drop your resume here
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  PDF only, max 5MB
                </p>

                <label className="cursor-pointer text-blue-600 font-medium">
                  Browse File
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </>
            ) : (
              <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                <span className="text-sm text-gray-700 truncate">
                  📄 {file.name}
                </span>

                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-red-500 hover:text-red-600 text-sm"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>

        </form>
      )}
    </div>
  );
}