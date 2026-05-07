"use client";

import { useState } from "react";

export default function ApplicationForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    await fetch("/api/apply", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    onClose();
  };

  return (
    <>
      <h3 className="text-xl font-semibold mb-6">
        Apply / Submit Your Profile
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="role"
          placeholder="Role you're interested in"
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="resume"
          type="file"
          accept=".pdf"
          className="w-full"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </>
  );
}