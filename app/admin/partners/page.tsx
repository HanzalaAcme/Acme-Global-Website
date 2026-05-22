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

  approved:
    "bg-green-100 text-green-700",

  rejected:
    "bg-red-100 text-red-700",
};

export default function PartnersPage() {

  const router =
    useRouter();

  const [loading, setLoading] =
    useState(true);

  const [partners, setPartners] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");

  // AUTH
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

      fetchPartners();
    };

    checkUser();

  }, []);

  // FETCH
  const fetchPartners =
    async () => {

      setLoading(true);

      const {
        data,
      } =
        await supabase
          .from(
            "partner_applications"
          )
          .select("*")
          .order(
            "created_at",
            {
              ascending: false,
            }
          );

      if (data) {

        setPartners(data);
      }

      setLoading(false);
    };

  // FILTER
  const filteredPartners =
    useMemo(() => {

      return partners.filter(
        (item) => {

          const matchesSearch =

            item.company_name
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            item.email
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            item.contact_person
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
      partners,
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
        Loading partners...
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
            Partner Requests
          </h1>

          <p className="text-gray-500">
            Review partnership inquiries
            and brochures.
          </p>

        </div>

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

        <input
          type="text"

          placeholder="
            Search company,
            contact or email
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

          <option value="approved">
            Approved
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
                Company
              </th>

              <th className="text-left p-5 text-sm font-semibold text-[#0B1120]">
                Contact
              </th>

              <th className="text-left p-5 text-sm font-semibold text-[#0B1120]">
                Partnership
              </th>

              <th className="text-left p-5 text-sm font-semibold text-[#0B1120]">
                Status
              </th>

              <th className="text-left p-5 text-sm font-semibold text-[#0B1120]">
                Brochure
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredPartners
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
                  No partner requests found.
                </td>

              </tr>

            ) : (

              filteredPartners.map(
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

                    {/* COMPANY */}
                    <td className="p-5">

                      <div>

                        <p
                          className="
                            font-semibold

                            text-[#0B1120]
                          "
                        >
                          {item.company_name}
                        </p>

                        <p
                          className="
                            text-sm

                            text-gray-500

                            mt-1
                          "
                        >
                          {item.headquarters_location}
                        </p>

                      </div>

                    </td>

                    {/* CONTACT */}
                    <td className="p-5">

                      <div>

                        <p className="text-[#0B1120]">
                          {item.contact_person}
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

                    {/* TYPE */}
                    <td className="p-5">

                      <p className="text-[#0B1120]">
                        {item.partnership_type}
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
                        {item.status}
                      </span>

                    </td>

                    {/* BROCHURE */}
                    <td className="p-5">

                      {item.brochure_url ? (

                        <a
                          href={
                            item.brochure_url
                          }

                          target="_blank"

                          className="
                            text-[#1A4FD6]

                            font-medium

                            hover:underline
                          "
                        >
                          View Brochure
                        </a>

                      ) : (

                        <span className="text-gray-400">
                          No Brochure
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