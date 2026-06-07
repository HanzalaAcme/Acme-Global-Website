"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "next/navigation";

import Link from "next/link";


const statusColors: any = {

  new:
    "bg-blue-100 text-blue-700",

  reviewing:
    "bg-yellow-100 text-yellow-700",

  shortlisted:
    "bg-green-100 text-green-700",

  "interview scheduled":
    "bg-orange-100 text-orange-700",

  interviewed:
    "bg-purple-100 text-purple-700",

  selected:
    "bg-indigo-100 text-indigo-700",

  hired:
    "bg-emerald-100 text-emerald-700",

  rejected:
    "bg-red-100 text-red-700",
};

const statuses = [

  "new",

  "reviewing",

  "shortlisted",

  "interview scheduled",

  "interviewed",

  "selected",

  "hired",

  "rejected",
];

export default function ApplicationDetailPage() {

  const params =
    useParams();

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [candidate, setCandidate] =
    useState<any>(null);

  useEffect(() => {

    fetchCandidate();

  }, []);

  const fetchCandidate =
  async () => {

    try {

      const res =
        await fetch(

          `/api/admin/applications/${params.id}`
        );

      const result =
        await res.json();

      if (
        result.success
      ) {

        setCandidate(
          result.data
        );
      }

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);
    }
  };

  const handleResumePreview =
  async () => {

    try {

      const res =
        await fetch(

          `/api/admin/resume/${candidate.id}`
        );

      const result =
        await res.json();

      if (
        result.success
      ) {

        window.open(
          result.url,
          "_blank"
        );

      } else {

        alert(
          "Resume not found"
        );
      }

    } catch (err) {

      console.log(err);

      alert(
        "Something went wrong"
      );
    }
  };

  // SAVE ALL ATS DATA
  const saveCandidate =
  async () => {

    try {

      setSaving(true);

      const res =
        await fetch(

          "/api/admin/update-application",

          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              id: candidate.id,

              status:
                candidate.status,

              notes:
                candidate.notes,

              interview_date:
                candidate.interview_date,

              interview_link:
                candidate.interview_link,
            }),
          }
        );

      const data =
        await res.json();

      setSaving(false);

      if (!res.ok) {

        alert(
          data.message ||
          "Update failed"
        );

        return;
      }

      alert(
        "ATS Updated Successfully"
      );

    } catch {

      setSaving(false);

      alert(
        "Something went wrong"
      );
    }
  };

  if (loading) {

    return (

      <div
        className="
          min-h-screen

          flex
          items-center
          justify-center

          bg-[#F5F7FB]
        "
      >
        Loading...
      </div>
    );
  }

  if (!candidate) {

    return (

      <div className="p-10">
        Candidate not found.
      </div>
    );
  }

  return (

    <main
      className="
        min-h-screen

        bg-[#F5F7FB]

        p-6
        md:p-10

        mt-[72px]
      "
    >

      {/* TOP */}
      <div
        className="
          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-6

          mb-10
        "
      >

        <div>

          <Link
            href="/admin/applications"

            className="
              text-[#1A4FD6]

              text-sm

              hover:underline
            "
          >
            ← Back to Applications
          </Link>

          <h1
            className="
              text-4xl

              font-bold

              text-[#0B1120]

              mt-4
            "
          >
            {candidate.full_name}
          </h1>

          <p className="text-gray-500 mt-2">
            {candidate.role ||
              "General Application"}
          </p>

        </div>

        {/* STATUS */}
        <div
          className="
            flex
            flex-col

            gap-3
          "
        >

          <label
            className="
              text-sm

              font-medium

              text-gray-500
            "
          >
            Candidate Status
          </label>

          <select
            value={candidate.status}

            onChange={(e) =>
              setCandidate({
                ...candidate,

                status:
                  e.target.value,
              })
            }

            className={`
              h-[52px]

              px-5

              rounded-2xl

              border-0

              font-semibold

              outline-none

              ${statusColors[candidate.status]}
            `}
          >

            {statuses.map((status) => (

              <option
                key={status}

                value={status}
              >
                {status}
              </option>

            ))}

          </select>

        </div>

      </div>

      {/* GRID */}
      <div
        className="
          grid

          lg:grid-cols-3

          gap-6
        "
      >

        {/* LEFT */}
        <div
          className="
            lg:col-span-2

            space-y-6
          "
        >

          {/* PROFILE */}
          <div
            className="
              bg-white

              rounded-3xl

              border
              border-[#E8EEF9]

              p-8
            "
          >

            <h2
              className="
                text-2xl

                font-bold

                mb-8

                text-[#0B1120]
              "
            >
              Candidate Information
            </h2>

            <div
              className="
                grid

                md:grid-cols-2

                gap-6
              "
            >

              <Info
                label="Full Name"
                value={candidate.full_name}
              />

              <Info
                label="Email"
                value={candidate.email}
              />

              <Info
                label="Phone"
                value={candidate.phone}
              />

              <Info
                label="Location"
                value={candidate.location}
              />

              <Info
                label="Experience"
                value={candidate.experience}
              />

              <Info
                label="LinkedIn"
                value={candidate.linkedin_url}
              />

            </div>

            {/* COMMENTS */}
            <div className="mt-10">

              <h3
                className="
                  font-semibold

                  mb-3

                  text-[#0B1120]
                "
              >
                Additional Comments
              </h3>

              <div
                className="
                  bg-[#F8FAFC]

                  rounded-2xl

                  

                  text-gray-700

                  leading-[28px]
                "
              >
                {candidate.cover_letter ||
                  "No comments provided"}
              </div>

            </div>

          </div>

          <button

              onClick={
                handleResumePreview
              }

              className="
                bg-[#1A4FD6]

                text-white

                px-5
                py-3

                rounded-xl

                font-medium
                cursor-pointer
              "
            >

              View Resume

            </button>

         {/* RESUME */}
{/*<div
  className="
    bg-white

    rounded-3xl

    border
    border-[#E8EEF9]

    p-8
  "
>

  <div
    className="
      flex
      flex-col
      md:flex-row

      md:items-center
      md:justify-between

      gap-5

      mb-8
    "
  >

    <div>

      <h2
        className="
          text-2xl

          font-bold

          text-[#0B1120]
        "
      >
        Resume
      </h2>

      <p
        className="
          text-gray-500

          mt-2
        "
      >
        View or download candidate
        resume and attachments.
      </p>

    </div>

    {/* ACTIONS 
    <div
      className="
        flex
        flex-wrap

        gap-3
      "
    >

      {/* OPEN 
      <a
        href={candidate.resume_url}

        target="_blank"

        className="
          h-[48px]

          px-5

          rounded-xl

          bg-[#1A4FD6]

          text-white

          font-medium

          flex
          items-center
          justify-center

          hover:bg-[#2E66FF]

          transition-all
        "
      >
        Open Resume
      </a>

      {/* DOWNLOAD 
      <a
        href={candidate.resume_url}

        download={`${candidate.full_name}-Resume`}

        target="_blank"

        rel="noopener noreferrer"

        className="
          h-[48px]

          px-5

          rounded-xl

          border
          border-[#E6EAF2]

          bg-white

          text-[#0B1120]

          font-medium

          flex
          items-center
          justify-center

          hover:border-[#1A4FD6]

          transition-all
        "
      >
        Download Resume
      </a>

    </div>

  </div>

  {/* PDF PREVIEW 
  {candidate.resume_url
    ?.toLowerCase()
    .includes(".pdf") && (

    <iframe
      src={candidate.resume_url}

      className="
        w-full

        h-[700px]

        rounded-2xl

        border
        border-[#E8EEF9]
      "
    />
  )}

  {/* DOC/DOCX UI 
  {(candidate.resume_url
    ?.toLowerCase()
    .includes(".doc") ||

    candidate.resume_url
      ?.toLowerCase()
      .includes(".docx")) && (

    <div
      className="
        bg-[#F8FAFC]

        rounded-2xl

        border
        border-[#E8EEF9]

        p-8

        text-center
      "
    >

      <div
        className="
          w-16
          h-16

          rounded-2xl

          bg-[#EEF4FF]

          flex
          items-center
          justify-center

          text-3xl

          mx-auto

          mb-5
        "
      >
        📄
      </div>

      <h3
        className="
          text-xl

          font-semibold

          text-[#0B1120]

          mb-3
        "
      >
        Document Resume
      </h3>

      <p
        className="
          text-gray-500

          leading-[28px]

          max-w-[500px]

          mx-auto
        "
      >
        DOC and DOCX files cannot
        be previewed directly
        inside browser.
        Use open or download.
      </p>

    </div>
  )}

  {/* NO RESUME 
  {!candidate.resume_url && (

    <div
      className="
        bg-[#F8FAFC]

        rounded-2xl

        border
        border-[#E8EEF9]

        p-8

        text-center

        text-gray-500
      "
    >
      Resume not uploaded.
    </div>
  )}

</div> */}

        

        </div>
        

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* INTERVIEW */}
          <div
            className="
              bg-white

              rounded-3xl

              border
              border-[#E8EEF9]

              p-8
            "
          >

            <h2
              className="
                text-xl

                font-bold

                mb-6

                text-[#0B1120]
              "
            >
              Interview
            </h2>

            <div className="space-y-4">

              <input
                type="datetime-local"

                value={
                  candidate.interview_date
                    ?.slice(0, 16) || ""
                }

                onChange={(e) =>
                  setCandidate({
                    ...candidate,

                    interview_date:
                      e.target.value,
                  })
                }

                className="
                  w-full

                  h-[52px]
                  text-gray-400

                  rounded-xl

                  border
                  border-[#E6EAF2]

                  px-4

                  outline-none

                  focus:border-[#1A4FD6]
                "
              />

              <input
                type="text"

                placeholder="Google Meet / Zoom Link"

                value={
                  candidate.interview_link || ""
                }

                onChange={(e) =>
                  setCandidate({
                    ...candidate,

                    interview_link:
                      e.target.value,
                  })
                }

                className="
                  w-full

                  h-[52px]
                  text-gray-500

                  rounded-xl

                  border
                  border-[#E6EAF2]

                  px-4

                  outline-none

                  focus:border-[#1A4FD6]
                "
              />

            </div>

          </div>

          {/* NOTES */}
          <div
            className="
              bg-white

              rounded-3xl

              border
              border-[#E8EEF9]

              p-8
            "
          >

            <h2
              className="
                text-xl

                font-bold

                mb-6

                text-[#0B1120]
              "
            >
              Recruiter Notes
            </h2>

            <textarea
              placeholder="Add recruiter notes..."

              value={
                candidate.notes || ""
              }

              onChange={(e) =>
                setCandidate({
                  ...candidate,

                  notes:
                    e.target.value,
                })
              }

              className="
                w-full

                h-[180px]

                rounded-2xl
                text-gray-500

                border
                border-[#E6EAF2]

                p-4

                resize-none

                outline-none

                focus:border-[#1A4FD6]
              "
            />

          </div>

          {/* SAVE */}
          <button
            onClick={saveCandidate}

            disabled={saving}

            className="
              w-full

              h-[56px]

              rounded-2xl

              bg-[#1A4FD6]

              text-white

              font-semibold

              hover:bg-[#2E66FF]

              transition-all

              disabled:opacity-50

              cursor-pointer
            "
          >
            {saving
              ? "Saving..."
              : "Save ATS Updates"}
          </button>

        </div>

      </div>

    </main>
  );
}

function Info({
  label,
  value,
}: any) {

  return (

    <div>

      <p
        className="
          text-sm

          text-gray-500

          mb-2
        "
      >
        {label}
      </p>

      <p
        className="
          text-[#0B1120]

          font-medium

          break-words
        "
      >
        {value || "-"}
      </p>

    </div>
  );
}