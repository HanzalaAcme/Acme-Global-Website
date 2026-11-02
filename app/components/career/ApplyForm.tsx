"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  Upload,
  FileText,
  X,
  CheckCircle2,
  MapPin,
  Star,
  MessageSquare,
  Phone,
  Mail,
  User,
  Briefcase,
  Globe,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

export default function ApplyForm() {

  const params = useSearchParams();

  const role =
    params.get("role") || "";

    const jobSlug =
  params.get("job_slug") || "";

  const jobId =
  params.get("job_id") || "";

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

          p-8
          md:p-12

          text-center

          shadow-sm
        "
      >

        <div className="flex justify-center mb-5">

          <CheckCircle2
            className="
              text-green-500
              w-16
              h-16
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
            max-w-[600px]
            mx-auto
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

        p-6
        md:p-10
      "
    >
      <input
        type="hidden"
        name="application_type"
        value="job"
      />

  <input
    type="hidden"
    name="job_slug"
    value={jobSlug}
  />

      {/* ROLE + JOB ID */}

      <div className="grid md:grid-cols-2 gap-5 mb-5">  
       <div>

        <label
          className="
            flex
            items-center
            gap-2

            text-[#0B1120]
            font-semibold

            mb-3
          "
        >

          <User className="w-4 h-4 text-[#1A4FD6]" />

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

            h-[52px]

            placeholder:text-[#9BA8C0]
            text-[#0B1120]

            bg-[#F5F7FB]

            border
            border-[#E6EAF2]

            rounded-xl

            px-4

            outline-none
          "
        />

      </div>

      {/* JOB ID */}
      <div>

        <label 
          className="
            flex
            items-center
            gap-2

            text-[#0B1120]
            font-semibold

            mb-3
          "
        >

          <Briefcase className="w-4 h-4 text-[#1A4FD6]" />

          Job ID *

        </label>

        <input
          type="text"
          name="job_id"
          defaultValue={jobId}
          required
          readOnly

          className="
            w-full

            h-[52px]

            placeholder:text-[#9BA8C0]
            text-[#0B1120]

            bg-[#F5F7FB]

            border
            border-[#E6EAF2]

            rounded-xl

            px-4

            outline-none
          "
        />
          </div>

      </div>

      {/* NAME + EMAIL */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">

        {/* NAME */}
        <div>

          <label
            className="
              flex
              items-center
              gap-2

              font-semibold

              mb-3

              text-[#0B1120]
            "
          >

            <User className="w-4 h-4 text-[#1A4FD6]" />

            Full Name *

          </label>

          <input
            type="text"
            name="full_name"
            required

            placeholder="Enter your full name"

            className="
              w-full

              h-[52px]

              placeholder:text-[#9BA8C0]
              text-[#0B1120]

              border
              border-[#E6EAF2]

              rounded-xl

              px-4

              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div>

        {/* EMAIL */}
        <div>

          <label
            className="
              flex
              items-center
              gap-2

              font-semibold

              mb-3

              text-[#0B1120]
            "
          >

            <Mail className="w-4 h-4 text-[#1A4FD6]" />

            Email Address *

          </label>

          <input
            type="email"
            name="email"
            required

            placeholder="Enter your email"

            className="
              w-full

              h-[52px]

              placeholder:text-[#9BA8C0]
              text-[#0B1120]

              border
              border-[#E6EAF2]

              rounded-xl

              px-4

              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div>

      </div>

      {/* PHONE + CITY */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">

        {/* PHONE */}
        <div>

          <label
            className="
              flex
              items-center
              gap-2

              font-semibold

              mb-3

              text-[#0B1120]
            "
          >

            <Phone className="w-4 h-4 text-[#1A4FD6]" />

            Mobile Number *

          </label>

          <input
            type="text"
            name="phone"
            required

            placeholder="Enter your mobile number"

            className="
              w-full

              h-[52px]

              placeholder:text-[#9BA8C0]
              text-[#0B1120]

              border
              border-[#E6EAF2]

              rounded-xl

              px-4

              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div>

        {/* CITY 
        <div>

          <label
            className="
              flex
              items-center
              gap-2

              font-semibold

              mb-3

              text-[#0B1120]
            "
          >

            <MapPin className="w-4 h-4 text-[#1A4FD6]" />

            City *

          </label>

          <input
            type="text"
            name="city"
            required

            placeholder="Enter your city"

            className="
              w-full

              h-[52px]

              placeholder:text-[#9BA8C0]
              text-[#0B1120]

              border
              border-[#E6EAF2]

              rounded-xl

              px-4

              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div> */}
        {/* LOCATION */}
<div className="mb-5">

  <label
    className="
      flex
      items-center
      gap-2

      font-semibold

      mb-3

      text-[#0B1120]
    "
  >

    <MapPin className="w-4 h-4 text-[#1A4FD6]" />

    Current Location *

  </label>

  <input
    type="text"
    name="location"
    required

    placeholder="Kolkata, India"

    className="
      w-full

      h-[52px]

      placeholder:text-[#9BA8C0]
      text-[#0B1120]

      border
      border-[#E6EAF2]

      rounded-xl

      px-4

      outline-none

      focus:border-[#1A4FD6]
      focus:ring-4
      focus:ring-blue-100

      transition-all
    "
  />

</div>

      </div>

      {/* STATE + COUNTRY 
      <div className="grid md:grid-cols-2 gap-5 mb-5">

        {/* STATE 
        <div>

          <label
            className="
              flex
              items-center
              gap-2

              font-semibold

              mb-3

              text-[#0B1120]
            "
          >

            <MapPin className="w-4 h-4 text-[#1A4FD6]" />

            State *

          </label>

          <input
            type="text"
            name="state"
            required

            placeholder="Enter your state"

            className="
              w-full

              h-[52px]

              placeholder:text-[#9BA8C0]
              text-[#0B1120]

              border
              border-[#E6EAF2]

              rounded-xl

              px-4

              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div>

        {/* COUNTRY 
        <div>

          <label
            className="
              flex
              items-center
              gap-2

              font-semibold

              mb-3

              text-[#0B1120]
            "
          >

            <Globe className="w-4 h-4 text-[#1A4FD6]" />

            Country *

          </label>

          <input
            type="text"
            name="country"
            required

            placeholder="Enter your country"

            className="
              w-full

              h-[52px]

              placeholder:text-[#9BA8C0]
              text-[#0B1120]

              border
              border-[#E6EAF2]

              rounded-xl

              px-4

              outline-none

              focus:border-[#1A4FD6]
              focus:ring-4
              focus:ring-blue-100

              transition-all
            "
          />

        </div>

      </div> */}

      {/* LINKEDIN */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">

        <div>

        <label
          className="
            flex
            items-center
            gap-2

            font-semibold

            mb-3

            text-[#0B1120]
          "
        >

          <FaLinkedin className="w-4 h-4 text-[#1A4FD6]" />

          LinkedIn Profile URL
          

        </label>

        <input
          type="url"
          name="linkedin"

          placeholder="https://linkedin.com/in/yourprofile"

          className="
            w-full

            h-[52px]

            placeholder:text-[#9BA8C0]
            text-[#0B1120]

            border
            border-[#E6EAF2]

            rounded-xl

            px-4

            outline-none

            focus:border-[#1A4FD6]
            focus:ring-4
            focus:ring-blue-100

            transition-all
          "
        />

      </div>

      <div className="mb-5">

  <label
    className="
      flex
      items-center
      gap-2

      font-semibold

      mb-3

      text-[#0B1120]
    "
  >

    <FileText className="w-4 h-4 text-[#1A4FD6]" />

    Total Experience *

  </label>

  <input
    type="text"
    name="experience"
    required

    placeholder="2 Years"

    className="
      w-full

      h-[52px]

      placeholder:text-[#9BA8C0]
      text-[#0B1120]

      border
      border-[#E6EAF2]

      rounded-xl

      px-4

      outline-none

      focus:border-[#1A4FD6]
      focus:ring-4
      focus:ring-blue-100

      transition-all
    "
  />

</div>

      </div>
      

      {/* COVER LETTER */}
      <div className="mb-8">

        <label
          className="
            flex
            items-center
            gap-2

            font-semibold

            mb-3

            text-[#0B1120]
          "
        >

          <MessageSquare className="w-4 h-4 text-[#1A4FD6]" />

          Cover Letter / Comments
          

        </label>

        <textarea
          rows={3}
          name="comments"

          placeholder="Tell us about your experience, skills, or anything you'd like us to know..."

          className="
            w-full

            placeholder:text-[#9BA8C0]
            text-[#0B1120]

            border
            border-[#E6EAF2]

            rounded-xl

            px-4
            py-3

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

        <label
          className="
            block
            font-semibold
            mb-3
            text-[#0B1120]
          "
        >
          Upload Resume / JD *
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
            py-8

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
                  w-14
                  h-14

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
                    w-7
                    h-7
                  "
                />

              </div>

              <p className="font-semibold text-[#0B1120] mb-1">
                Upload Resume
              </p>

              <p className="text-[#5E6E90] text-sm text-center">
                PDF, DOC, DOCX supported (Max 5MB)
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
                py-3
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

        <div
          className="
            mb-6

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

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}

        className="
          w-full

          h-[52px]

          bg-[#1A4FD6]
          hover:bg-[#2E66FF]

          text-white
          font-semibold

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