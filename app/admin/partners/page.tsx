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

  "on-hold":
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

  useEffect(() => {

    checkUser();

  }, []);

  const checkUser =
    async () => {

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

  const filteredPartners =
    useMemo(() => {

      return partners.filter(
        (item) => {

          const matchesSearch =

            item.legal_company_name
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            item.email_address
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            item.contact_person_name
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
        Loading Partners...
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

          gap-5

          mb-10
        "
      >

        <div>

          <p
            className="
              text-sm

              uppercase

              tracking-[2px]

              text-[#1A4FD6]

              font-semibold

              mb-3
            "
          >
            ACME Global ATS
          </p>

          <h1
            className="
              text-4xl

              font-bold

              text-[#0B1120]
            "
          >
            Partner Applications
          </h1>

        </div>

        <Link
          href="/admin"

          className="
            h-[52px]

            px-6

            rounded-2xl

            border
            border-[#E6EAF2]

            bg-white

            flex
            items-center

            hover:border-[#1A4FD6]

            transition-all
          "
        >
          Dashboard
        </Link>

      </div>

      {/* FILTERS */}
      <div
        className="
          flex
          flex-col
          lg:flex-row

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
            flex-1

            h-[54px]

            border
            border-[#E6EAF2]

            rounded-2xl

            bg-white

            px-5

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

            rounded-2xl

            bg-white

            px-5

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

          <option value="on-hold">
            On Hold
          </option>

          <option value="approved">
            Approved
          </option>

          <option value="rejected">
            Rejected
          </option>

        </select>

      </div>

      {/* CARDS */}
      <div
        className="
          grid

          md:grid-cols-2
          xl:grid-cols-3

          gap-6
        "
      >

        {filteredPartners.map(
          (item) => (

            <div
              key={item.id}

              onClick={() =>
                router.push(
                  `/admin/partners/${item.id}`
                )
              }

              className="
                bg-white

                rounded-3xl

                border
                border-[#E8EEF9]

                p-7

                cursor-pointer

                hover:border-[#1A4FD6]

                hover:-translate-y-1

                transition-all
                duration-300
              "
            >

              {/* TOP */}
              <div
                className="
                  flex
                  items-start
                  justify-between

                  gap-5

                  mb-6
                "
              >

                <div>

                  <h2
                    className="
                      text-xl

                      font-bold

                      text-[#0B1120]

                      leading-[32px]
                    "
                  >
                    {item.legal_company_name}
                  </h2>

                  <p
                    className="
                      text-gray-500

                      mt-2
                    "
                  >
                    {item.headquarters_location}
                  </p>

                </div>

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
                      ]
                    }
                  `}
                >
                  {item.status}
                </span>

              </div>

              {/* INFO */}
              <div className="space-y-4">

                <InfoRow
                  label="Contact"
                  value={
                    item.contact_person_name
                  }
                />

                <InfoRow
                  label="Email"
                  value={
                    item.email_address
                  }
                />

                <InfoRow
                  label="Partnership"
                  value={
                    item.partnership_type
                  }
                />

                <InfoRow
                  label="Employees"
                  value={
                    item.number_of_employees
                  }
                />

              </div>

            </div>

          )
        )}

      </div>

    </main>
  );
}

function InfoRow({
  label,
  value,
}: any) {

  return (

    <div
      className="
        flex
        items-center
        justify-between

        gap-4
      "
    >

      <span
        className="
          text-gray-500

          text-sm
        "
      >
        {label}
      </span>

      <span
        className="
          text-[#0B1120]

          text-sm

          font-medium

          text-right
        "
      >
        {value || "-"}
      </span>

    </div>
  );
}