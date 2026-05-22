"use client";

import { useEffect, useState }
from "react";

import { supabase }
from "@/lib/supabase/client";

type Application = {

  id: string;

  application_type: string;

  role: string;

  full_name: string;

  email: string;

  phone: string;

  location: string;

  experience: string;

  linkedin: string;

  comments: string;

  resume_url: string;

  status: string;

  created_at: string;
};

export default function ApplicationsPage() {

  const [applications, setApplications] =
    useState<Application[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [filter, setFilter] =
    useState("all");

  // FETCH APPLICATIONS
  useEffect(() => {

    const fetchApplications =
      async () => {

        const { data, error } =
          await supabase

            .from("applications")

            .select("*")

            .order("created_at", {
              ascending: false,
            });

        if (!error && data) {

          setApplications(data);
        }

        setLoading(false);
      };

    fetchApplications();

  }, []);

  // FILTER LOGIC
  const filteredApplications =
    applications.filter((app) => {

      if (filter === "all")
        return true;

      return app.status === filter;
    });

  // STATUS COLOR
  const getStatusStyles = (
    status: string
  ) => {

    switch (status) {

      case "new":
        return "bg-blue-100 text-blue-700";

      case "reviewing":
        return "bg-yellow-100 text-yellow-700";

      case "shortlisted":
        return "bg-green-100 text-green-700";

      case "rejected":
        return "bg-red-100 text-red-700";

      case "hired":
        return "bg-purple-100 text-purple-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // UPDATE STATUS
  const updateStatus = async (
    id: string,
    status: string
  ) => {

    await supabase

      .from("applications")

      .update({ status })

      .eq("id", id);

    setApplications((prev) =>

      prev.map((item) =>

        item.id === id

          ? {
              ...item,
              status,
            }

          : item
      )
    );
  };

  if (loading) {

    return (

      <div
        className="
          min-h-screen

          flex
          items-center
          justify-center
        "
      >
        Loading...
      </div>
    );
  }

  return (

    <main
      className="
        min-h-screen

        bg-[#F5F7FB]
        mt-[72px]

        p-8
      "
    >

      {/* HEADER */}
      <div
        className="
          flex
          flex-col
          md:flex-row

          md:items-center
          md:justify-between

          gap-4

          mb-8
        "
      >

        <div>

          <h1
            className="
              text-4xl

              font-bold

              text-[#0B1120]
            "
          >
            Applications
          </h1>

          <p className="text-gray-500 mt-2">
            Track and manage all candidate applications.
          </p>

        </div>

        {/* FILTER */}
        <select
          value={filter}

          onChange={(e) =>
            setFilter(e.target.value)
          }

          className="
            border

            bg-white

            px-4
            py-3

            rounded-xl

            outline-none
          "
        >

          <option value="all">
            All
          </option>

          <option value="new">
            New
          </option>

          <option value="reviewing">
            Reviewing
          </option>

          <option value="shortlisted">
            Shortlisted
          </option>

          <option value="rejected">
            Rejected
          </option>

          <option value="hired">
            Hired
          </option>

        </select>

      </div>

      {/* TABLE */}
      <div
        className="
          bg-white

          rounded-2xl

          overflow-x-auto

          shadow-sm
        "
      >

        <table className="w-full">

          <thead
            className="
              bg-[#F8FAFC]

              border-b
            "
          >

            <tr>

              <th className="text-left px-6 py-4">
                Candidate
              </th>

              <th className="text-left px-6 py-4">
                Role
              </th>

              <th className="text-left px-6 py-4">
                Type
              </th>

              <th className="text-left px-6 py-4">
                Experience
              </th>

              <th className="text-left px-6 py-4">
                Status
              </th>

              <th className="text-left px-6 py-4">
                Resume
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredApplications.map((app) => (

              <tr
                key={app.id}

                className="
                  border-b

                  hover:bg-[#FAFBFD]
                "
              >

                {/* NAME */}
                <td className="px-6 py-5">

                  <div>

                    <p className="font-semibold">
                      {app.full_name}
                    </p>

                    <p
                      className="
                        text-sm
                        text-gray-500
                      "
                    >
                      {app.email}
                    </p>

                  </div>

                </td>

                {/* ROLE */}
                <td className="px-6 py-5">
                  {app.role}
                </td>

                {/* TYPE */}
                <td className="px-6 py-5 capitalize">
                  {app.application_type}
                </td>

                {/* EXPERIENCE */}
                <td className="px-6 py-5">
                  {app.experience || "-"}
                </td>

                {/* STATUS */}
                <td className="px-6 py-5">

                  <select
                    value={app.status}

                    onChange={(e) =>
                      updateStatus(
                        app.id,
                        e.target.value
                      )
                    }

                    className={`
                      px-3
                      py-2

                      rounded-full

                      text-sm

                      font-medium

                      outline-none

                      ${getStatusStyles(app.status)}
                    `}
                  >

                    <option value="new">
                      New
                    </option>

                    <option value="reviewing">
                      Reviewing
                    </option>

                    <option value="shortlisted">
                      Shortlisted
                    </option>

                    <option value="rejected">
                      Rejected
                    </option>

                    <option value="hired">
                      Hired
                    </option>

                  </select>

                </td>

                {/* RESUME */}
                <td className="px-6 py-5">

                  <a
                    href={app.resume_url}

                    target="_blank"

                    className="
                      text-[#1A4FD6]

                      font-medium

                      hover:underline
                    "
                  >
                    View Resume
                  </a>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}