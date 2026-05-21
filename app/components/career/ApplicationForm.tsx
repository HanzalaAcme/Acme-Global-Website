"use client";

import { useState } from "react";
import { useRouter } from "next/router";

import {
  Briefcase,
  FileText,
  MapPin,
  Star,
  MessageSquare,
  Phone,
  UploadCloud,
  User,
  Mail,
} from "lucide-react";


export default function ApplicationForm()  {

  const [loading, setLoading] =
    useState(false);

  const [file, setFile] =
    useState<File | null>(null);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

 

  const handleFileChange = (
    e: any
  ) => {

    const selected =
      e.target.files[0];

    if (selected) {

      // MAX 5MB
      if (
        selected.size >
        5 * 1024 * 1024
      ) {

        setError(
          "File size must be under 5MB."
        );

        return;
      }

      setError("");

      setFile(selected);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = async (
    e: any
  ) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    const formData =
      new FormData(e.target);

    if (file) {
      formData.set("resume", file);
    }

    try {

      const res = await fetch(
        "/api/apply",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(
          "Something went wrong"
        );
      }

      setSuccess(true);

      

    } catch (err) {

      setError(
        "Failed to submit application. Please try again."
      );
    }

    setLoading(false);
  };

  const inputStyles = `
    w-full
    rounded-xl

    border
    border-gray-200

    bg-white

    px-4
    py-3.5

    text-[15px]
    text-gray-800

    outline-none

    transition-all
    duration-300

    placeholder:text-gray-400

    focus:border-[#2563EB]
    focus:ring-4
    focus:ring-blue-100
  `;

  return (

    <div>


      {success ? (

        <div className="text-center py-12">

          <div
            className="
              w-16
              h-16

              rounded-full

              bg-green-100

              flex
              items-center
              justify-center

              mx-auto
              mb-5
            "
          >
            <span className="text-3xl">
              ✓
            </span>
          </div>

          <h4
            className="
              text-xl
              font-semibold
              text-gray-900
            "
          >
            Application Submitted
          </h4>

          <p
            className="
              text-gray-500
              mt-2
            "
          >
            We’ll review your profile and
            reach out if there’s a match.
          </p>

        </div>

      ) : (

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* FULL NAME */}
            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                  flex
                  items-center
                  gap-2
                "
              >
                <User className="w-4 h-4 text-[#2563EB]" />
                Full Name *
              </label>

              <input
                name="full_name"
                placeholder="John Doe"
                required
                className={inputStyles}
              />

            </div>

            {/* EMAIL */}
            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                  flex
                  items-center
                  gap-2
                "
              >
                <Mail  className="w-4 h-4 text-[#2563EB]"/>
                Email Address *
              </label>

              <input
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                className={inputStyles}
              />

            </div>

            {/* PHONE */}
            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                  flex
                  items-center
                  gap-2
                "
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                Mobile Number *
              </label>

              <input
                name="phone"
                placeholder="+91 9876543210"
                required
                className={inputStyles}
              />

            </div>

            {/* LOCATION */}
            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                  flex
                  items-center
                  gap-2
                "
              >
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                Current Location *
              </label>

              <input
                name="location"
                placeholder="Kolkata, India"
                required
                className={inputStyles}
              />

            </div>

            {/* ROLE */}
            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                  flex
                  items-center
                  gap-2
                "
              >
                <Briefcase className="w-4 h-4 text-[#2563EB]" />
                Preferred Role / Technology *
              </label>

              <input
                name="preferred_role"
                placeholder="Frontend Developer / React.js"
                required
                className={inputStyles}
              />

            </div>

            {/* EXPERIENCE */}
            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-gray-700
                  mb-2
                  flex
                  items-center
                  gap-2
                "
              >
                <FileText className="w-4 h-4 text-[#2563EB]" />
                Total Experience *
              </label>

              <input
                name="experience"
                placeholder="2 Years"
                required
                className={inputStyles}
              />

            </div>

          </div>

          {/* LINKEDIN */}
          <div>

            <label
              className="
                text-sm
                font-medium
                text-gray-700
                mb-2
                flex
                items-center
                gap-2
              "
            >
              <Star className="w-4 h-4 text-[#2563EB]" />
              LinkedIn Profile
              
            </label>

            <input
              name="linkedin"
              placeholder="https://linkedin.com/in/username"
              className={inputStyles}
            />

          </div>

          {/* COMMENTS */}
          <div>

            <label
              className="
                text-sm
                font-medium
                text-gray-700
                mb-2
                flex
                items-center
                gap-2
              "
            >
              <MessageSquare className="w-4 h-4 text-[#2563EB]" />
              Additional Comments
            </label>

            <textarea
              name="comments"
              rows={3}
              placeholder="Tell us more about your skills, interests, or availability..."
              className={`${inputStyles} resize-none`}
            />

          </div>

          {/* FILE UPLOAD */}
          <div>

            <label
              className="
                text-sm
                font-medium
                text-gray-700
                mb-3
                flex
                items-center
                gap-2
              "
            >
              <UploadCloud className="w-4 h-4 text-[#2563EB]" />
              Upload Resume *
            </label>

            <div
              className="
                border-2
                border-dashed
                border-gray-200

                rounded-2xl

                p-8

                text-center

                bg-[#F8FAFC]

                transition-all
                duration-300

                hover:border-[#2563EB]
                hover:bg-blue-50
              "
            >

              {!file ? (

                <>

                  <div
                    className="
                      w-14
                      h-14

                      rounded-full

                      bg-blue-100

                      flex
                      items-center
                      justify-center

                      mx-auto
                      mb-4
                    "
                  >
                    <UploadCloud className="w-7 h-7 text-[#2563EB]" />
                  </div>

                  <p className="text-gray-700 font-medium">
                    Drag & drop your resume
                  </p>

                  <p
                    className="
                      text-sm
                      text-gray-400
                      mt-2
                    "
                  >
                    PDF, DOC, DOCX — max 5MB
                  </p>

                  <label
                    className="
                      inline-flex
                      mt-5

                      cursor-pointer

                      rounded-lg

                      bg-[#2563EB]

                      px-5
                      py-2.5

                      text-sm
                      font-medium
                      text-white

                      hover:bg-[#1D4ED8]

                      transition-all
                    "
                  >
                    Browse File

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                      required
                    />

                  </label>

                </>

              ) : (

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    bg-white

                    border
                    border-gray-200

                    rounded-xl

                    p-4
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        w-11
                        h-11

                        rounded-lg

                        bg-blue-100

                        flex
                        items-center
                        justify-center
                      "
                    >
                      📄
                    </div>

                    <div className="text-left">

                      <p
                        className="
                          text-sm
                          font-medium
                          text-gray-800
                        "
                      >
                        {file.name}
                      </p>

                      <p
                        className="
                          text-xs
                          text-gray-400
                        "
                      >
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>

                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="
                      text-red-500
                      hover:text-red-600
                      text-sm
                      font-medium
                    "
                  >
                    Remove
                  </button>

                </div>

              )}

            </div>

          </div>

          {/* ERROR */}
          {error && (

            <div
              className="
                rounded-xl

                border
                border-red-200

                bg-red-50

                px-4
                py-3

                text-sm
                text-red-600
              "
            >
              {error}
            </div>

          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}

            className="
              w-full

              rounded-xl

              bg-[#2563EB]

              py-4

              text-white
              font-medium

              flex
              items-center
              justify-center
              gap-2

              hover:bg-[#1D4ED8]

              disabled:opacity-70

              transition-all
              duration-300

              cursor-pointer
            "
          >

            {loading ? (

              <>

                <span
                  className="
                    w-5
                    h-5

                    border-2
                    border-white
                    border-t-transparent

                    rounded-full

                    animate-spin
                  "
                />

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

