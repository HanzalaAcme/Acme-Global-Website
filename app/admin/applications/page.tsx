"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Link
from "next/link";

import { useRouter }
from "next/navigation";

import { supabase }
from "@/lib/supabase/client";

const statusColors: any = {

  new:
    "bg-blue-100 text-blue-700",

  reviewing:
    "bg-yellow-100 text-yellow-700",

  shortlisted:
    "bg-green-100 text-green-700",

  rejected:
    "bg-red-100 text-red-700",

  selected:
    "bg-purple-100 text-purple-700",
};

export default function ApplicationsPage() {

  const router =
    useRouter();

  const [loading, setLoading] =
    useState(true);

  const [applications, setApplications] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");

  // CHECK AUTH
  useEffect(() => {

    const checkUser = async () => {

      const {
        data: { session },
      } =
        await supabase.auth
          .getSession();

      if (!session) {

        router.push(
          "/admin/login"
        );

        return;
      }

      fetchApplications();
    };

    checkUser();

  }, []);

  // FETCH APPLICATIONS
  const fetchApplications =
    async () => {

      setLoading(true);

      const {
        data,
        error,
      } =
        await supabase
          .from("applications")
          .select("*")
          .order(
            "created_at",
            {
              ascending: false,
            }
          );

      if (!error && data) {

        setApplications(data);
      }

      setLoading(false);
    };

  // FILTERED DATA
  const filteredApplications =
    useMemo(() => {

      return applications.filter(
        (item) => {

          const matchesSearch =

            item.full_name
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            item.email
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            item.role
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesStatus =

            statusFilter === "all"
              ? true
              : item.status ===
                statusFilter;

          return (
            matchesSearch &&
            matchesStatus
          );
        }
      );

    }, [
      applications,
      search,
      statusFilter,
    ]);

  // LOADING
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
        Loading applications...
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
          md:flex-row

          md:items-center
          md:justify-between

          gap-5

          mb-10
        "
      >

        <div>

          <h1
            className="
              text-4xl

              font-bold

              text-[#0B1120]

              mb-2
            "
          >
            Applications
          </h1>

          <p className="text-gray-500">
            Manage candidate applications
            and recruitment pipeline.
          </p>

        </div>

        {/* ACTIONS */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <Link
            href="/admin"

            className="
              px-5
              py-3

              rounded-xl

              border
              border-[#E6EAF2]

              bg-white

              text-sm
              font-medium

              hover:border-[#1A4FD6]

              transition-all
            "
          >
            Dashboard
          </Link>

          <button
            onClick={async () => {

              await supabase.auth
                .signOut();

              router.push(
                "/admin/login"
              );
            }}

            className="
              px-5
              py-3

              rounded-xl

              bg-red-500
              hover:bg-red-600

              text-white

              text-sm
              font-medium

              transition-all

              cursor-pointer
            "
          >
            Logout
          </button>

        </div>

      </div>

      {/* FILTERS */}
      <div
        className="
          flex
          flex-col
          md:flex-row

          gap-4

          mb-8
        "
      >

        {/* SEARCH */}
        <input
          type="text"

          placeholder="
            Search candidate,
            email or role
          "

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          className="
            h-[54px]

            flex-1

            border
            border-[#E6EAF2]

            rounded-xl

            bg-white

            px-4

            outline-none

            focus:border-[#1A4FD6]
          "
        />

        {/* STATUS */}
        <select
          value={statusFilter}

          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }

          className="
            h-[54px]

            border
            border-[#E6EAF2]

            rounded-xl

            bg-white

            px-4

            outline-none

            focus:border-[#1A4FD6]
          "
        >

          <option value="all">
            All Status
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

          <option value="selected">
            Selected
          </option>

          <option value="rejected">
            Rejected
          </option>

        </select>

      </div>

      {/* TABLE */}
      <div
        className="
          bg-white

          rounded-3xl

          border
          border-[#E8EEF9]

          overflow-x-auto
        "
      >

        <table className="w-full">

          <thead
            className="
              bg-[#F8FAFC]

              border-b
              border-[#E8EEF9]
            "
          >

            <tr>

              <th className="text-left p-5 text-sm font-semibold text-[#0B1120]">
                Candidate
              </th>

              <th className="text-left p-5 text-sm font-semibold text-[#0B1120]">
                Role
              </th>

              <th className="text-left p-5 text-sm font-semibold text-[#0B1120]">
                Experience
              </th>

              <th className="text-left p-5 text-sm font-semibold text-[#0B1120]">
                Status
              </th>

              <th className="text-left p-5 text-sm font-semibold text-[#0B1120]">
                Resume
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredApplications
              .length === 0 ? (

              <tr>

                <td
                  colSpan={5}

                  className="
                    p-10

                    text-center

                    text-gray-500
                  "
                >
                  No applications found.
                </td>

              </tr>

            ) : (

              filteredApplications.map(
                (item) => (

                  <tr
                    key={item.id}

                    className="
                      border-b
                      border-[#F1F5F9]

                      hover:bg-[#FAFBFD]

                      transition-all
                    "
                  >

                    {/* CANDIDATE */}
                    <td className="p-5">

                      <div>

                        <p
                          className="
                            font-semibold

                            text-[#0B1120]
                          "
                        >
                          {item.full_name}
                        </p>

                        <p
                          className="
                            text-sm

                            text-gray-500

                            mt-1
                          "
                        >
                          {item.email}
                        </p>

                      </div>

                    </td>

                    {/* ROLE */}
                    <td className="p-5">

                      <p className="text-[#0B1120]">
                        {item.role ||
                          "General Application"}
                      </p>

                    </td>

                    {/* EXPERIENCE */}
                    <td className="p-5">

                      <p className="text-[#0B1120]">
                        {item.experience ||
                          "-"}
                      </p>

                    </td>

                    {/* STATUS */}
                    <td className="p-5">

                      <span
                        className={`
                          px-3
                          py-1

                          rounded-full

                          text-xs
                          font-semibold

                          ${
                            statusColors[
                              item.status
                            ] ||
                            "bg-gray-100 text-gray-700"
                          }
                        `}
                      >
                        <select
  value={item.status || "new"}

  onChange={async (e) => {

    const newStatus =
      e.target.value;

    const res =
      await fetch(
        "/api/admin/update-status",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            table:
              "applications",

            id: item.id,

            status:
              newStatus,
          }),
        }
      );

    if (res.ok) {

      setApplications((prev) =>

        prev.map((app) =>

          app.id === item.id

            ? {
                ...app,
                status:
                  newStatus,
              }

            : app
        )
      );
    }
  }}

  className={`
    px-3
    py-2

    rounded-xl

    text-xs
    font-semibold

    border-0

    outline-none

    cursor-pointer

    ${
      statusColors[
        item.status
      ] ||
      "bg-gray-100 text-gray-700"
    }
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

  <option value="interview scheduled">
    Interview Scheduled
  </option>

  <option value="interviewed">
    Interviewed
  </option>

  <option value="selected">
    Selected
  </option>

  <option value="rejected">
    Rejected
  </option>

  <option value="hired">
    Hired
  </option>

</select>
                      </span>

                    </td>

                    {/* RESUME */}
                    <td className="p-5">

                      {item.resume_url ? (

                        <a
                          href={item.resume_url}

                          target="_blank"

                          className="
                            text-[#1A4FD6]

                            font-medium

                            hover:underline
                          "
                        >
                          View Resume
                        </a>

                      ) : (

                        <span className="text-gray-400">
                          No Resume
                        </span>
                      )}

                    </td>

                  </tr>
                )
              )
            )}

          </tbody>

        </table>

      </div>

    </main>
  );
}