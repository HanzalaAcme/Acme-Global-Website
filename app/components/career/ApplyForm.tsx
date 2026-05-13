"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  Upload,
  FileText,
  X,
  CheckCircle2,
} from "lucide-react";

export default function ApplyForm() {

  const params = useSearchParams();

  const role =
    params.get("role") || "";

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  const [fileName, setFileName] =
    useState("");

  const handleSubmit = async (
    e: any
  ) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    const formData =
      new FormData(e.target);

    try {

      const res = await fetch(
        "/api/apply",
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (data.success) {

        setSuccess(true);

        e.target.reset();

        setFileName("");

      } else {

        setError(
          data.message ||
          "Something went wrong."
        );
      }

    } catch (err) {

      setError(
        "Failed to submit application."
      );
    }

    setLoading(false);
  };

  /* SUCCESS */
  if (success) {

    return (
      <div
        className="
          bg-white
          rounded-[28px]
          border
          border-[#E6EAF2]
          p-12
          text-center
          shadow-sm
        "
      >

        <div className="flex justify-center mb-5">
          <CheckCircle2
            className="
              text-green-500
              w-20
              h-20
            "
          />
        </div>

        <h2
          className="
            font-playfair
            text-3xl
            font-bold
            text-[#0B1120]
            mb-4
          "
        >
          Application Submitted
        </h2>

        <p
          className="
            text-[#5E6E90]
            leading-[30px]
          "
        >
          Thank you for applying.
          Our HR team will review
          your profile and contact
          you if shortlisted.
        </p>

      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        rounded-[28px]
        border
        border-[#E6EAF2]
        shadow-sm

        p-8
        md:p-12
      "
    >

      {/* ROLE */}
      <div className="mb-6">

        <label
          className="
            block
            text-[#0B1120]
            font-semibold
            mb-3
          "
        >
          Position Applying For *
        </label>

        <input
          type="text"
          name="role"
          defaultValue={role}
          required
          readOnly
          className="
            w-full
            placeholder:text-[#9BA8C0]
            text-[#0B1120]
            bg-[#F5F7FB]
            border
            border-[#E6EAF2]
            rounded-xl
            px-5
            py-4
            outline-none
          "
        />

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">

        <div>

          <label className="block font-semibold mb-3 text-[#0B1120]">
            First Name *
          </label>

          <input
            type="text"
            name="firstName"
            required
            className="
              w-full
              placeholder:text-[#9BA8C0]
              text-[#0B1120]
              border
              border-[#E6EAF2]
              rounded-xl
              px-5
              py-4
              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div>

        <div>

          <label className="block font-semibold mb-3 text-[#0B1120]">
            Last Name *
          </label>

          <input
            type="text"
            name="lastName"
            required
            className="
              w-full
              placeholder:text-[#9BA8C0]
              text-[#0B1120]
              border
              border-[#E6EAF2]
              rounded-xl
              px-5
              py-4
              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">

        <div>

          <label className="block font-semibold mb-3 text-[#0B1120]">
            Email Address *
          </label>

          <input
            type="email"
            name="email"
            required
            className="
              w-full
              placeholder:text-[#9BA8C0]
              text-[#0B1120]
              border
              border-[#E6EAF2]
              rounded-xl
              px-5
              py-4
              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div>

        <div>

          <label className="block font-semibold mb-3 text-[#0B1120]">
            Phone Number *
          </label>

          <input
            type="text"
            name="phone"
            required
            className="
              w-full
              placeholder:text-[#9BA8C0]
              text-[#0B1120]
              border
              border-[#E6EAF2]
              rounded-xl
              px-5
              py-4
              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div>

      </div>

      {/* EXPERIENCE */}
      <div className="mb-6">

        <label className="block font-semibold mb-3 text-[#0B1120]">
          Years of Experience *
        </label>

        <input
          type="text"
          name="experience"
          required
          placeholder="4 Years"
          className="
            w-full
            placeholder:text-[#9BA8C0]
            text-[#0B1120]
            border
            border-[#E6EAF2]
            rounded-xl
            px-5
            py-4
            outline-none

            focus:border-[#1A4FD6]
            focus:ring-4
            focus:ring-blue-100

            transition-all
          "
        />

      </div>

      {/* MESSAGE */}
      <div className="mb-8">

        <label className="block font-semibold mb-3 text-[#0B1120]">
          Message
        </label>

        <textarea
          rows={5}
          name="message"
          placeholder="Tell us about yourself and your experience..."
          className="
            w-full
            placeholder:text-[#9BA8C0]
            text-[#0B1120]
            border
            border-[#E6EAF2]
            rounded-xl
            px-5
            py-4
            outline-none
            resize-none

            focus:border-[#1A4FD6]
            focus:ring-4
            focus:ring-blue-100

            transition-all
          "
        />

      </div>

      {/* RESUME */}
      <div className="mb-8">

        <label className="block font-semibold mb-3 text-[#0B1120]">
          Upload Resume *
        </label>

        <label
          className="
            relative

            flex
            flex-col
            items-center
            justify-center

            border-2
            border-dashed
            border-[#D8E1F0]

            rounded-2xl

            px-6
            py-10

            bg-[#FAFBFF]

            hover:border-[#1A4FD6]

            transition-all
            cursor-pointer
          "
        >

          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            className="hidden"

            onChange={(e: any) => {

              if (
                e.target.files[0]
              ) {

                setFileName(
                  e.target.files[0].name
                );
              }
            }}
          />

          {!fileName ? (

            <>
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl

                  bg-blue-100

                  flex
                  items-center
                  justify-center

                  mb-4
                "
              >

                <Upload
                  className="
                    text-[#1A4FD6]
                    w-8
                    h-8
                  "
                />

              </div>

              <p className="font-semibold text-[#0B1120] mb-2">
                Upload your resume
              </p>

              <p className="text-[#5E6E90] text-sm">
                PDF, DOC, DOCX (max 5MB)
              </p>
            </>

          ) : (

            <div
              className="
                flex
                items-center
                gap-4

                bg-white

                border
                border-[#E6EAF2]

                rounded-xl

                px-5
                py-4
              "
            >

              <FileText
                className="
                  text-[#1A4FD6]
                  w-6
                  h-6
                "
              />

              <span
                className="
                  text-[#0B1120]
                  font-medium
                  break-all
                "
              >
                {fileName}
              </span>

              <button
                type="button"

                onClick={(e) => {
                  e.preventDefault();
                  setFileName("");
                }}
              >
                <X
                  className="
                    text-red-500
                    w-5
                    h-5
                  "
                />
              </button>

            </div>
          )}

        </label>

      </div>

      {/* ERROR */}
      {error && (
        <p className="text-red-500 text-sm mb-6">
          {error}
        </p>
      )}

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full

          bg-[#1A4FD6]
          hover:bg-[#2E66FF]

          text-white
          font-semibold

          py-4

          rounded-xl

          transition-all
          duration-300

          disabled:opacity-70
          cursor-pointer
        "
      >
        {loading
          ? "Submitting Application..."
          : "Submit Application"}
      </button>

    </form>
  );
}