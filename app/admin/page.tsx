"use client";

import {
  useEffect,
  useState,
} from "react";

import Link
from "next/link";

import {
  BriefcaseBusiness,
  Users,
  XCircle,
  CalendarDays,
  ArrowRight,
  Clock3,
} from "lucide-react";

import { supabase }
from "@/lib/supabase/client";

export default function AdminPage() {

  const [stats, setStats] =
    useState<any>(null);

  const [recentApplications, setRecentApplications] =
    useState<any[]>([]);

  const [upcomingInterviews, setUpcomingInterviews] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard =
    async () => {

      try {

        // ========================================
        // APPLICATIONS
        // ========================================

        const {
          data: applications,
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

        // ========================================
        // STATS
        // ========================================

        const total =
          applications?.length || 0;

        const shortlisted =
          applications?.filter(
            (item) =>
              item.status ===
              "shortlisted"
          ).length || 0;

        const rejected =
          applications?.filter(
            (item) =>
              item.status ===
              "rejected"
          ).length || 0;

        const interviews =
          applications?.filter(
            (item) =>
              item.status ===
              "interview scheduled"
          ).length || 0;

        setStats({

          total,

          shortlisted,

          rejected,

          interviews,
        });

        // ========================================
        // RECENT APPLICATIONS
        // ========================================

        setRecentApplications(
          applications?.slice(0, 5) || []
        );

        // ========================================
        // UPCOMING INTERVIEWS
        // ========================================

        const upcoming =
          applications?.filter(
            (item) =>
              item.interview_date
          ) || [];

        setUpcomingInterviews(
          upcoming.slice(0, 5)
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);
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
        Loading Dashboard...
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
              md:text-5xl

              font-bold

              text-[#0B1120]
            "
          >
            HR Dashboard
          </h1>

        </div>

        <Link
          href="/admin/applications"

          className="
            h-[56px]

            px-6

            rounded-2xl

            bg-[#1A4FD6]

            text-white

            font-semibold

            flex
            items-center
            gap-3

            hover:bg-[#2E66FF]

            transition-all
          "
        >

          Open ATS

          <ArrowRight
            className="
              w-5
              h-5
            "
          />

        </Link>

      </div>

      {/* STATS */}
      <div
        className="
          grid

          sm:grid-cols-2
          xl:grid-cols-4

          gap-6

          mb-10
        "
      >

        <StatCard
          title="Applications"
          value={stats?.total || 0}
          icon={
            <BriefcaseBusiness
              className="
                w-6
                h-6
              "
            />
          }
        />

        <StatCard
          title="Shortlisted"
          value={stats?.shortlisted || 0}
          icon={
            <Users
              className="
                w-6
                h-6
              "
            />
          }
        />

        <StatCard
          title="Rejected"
          value={stats?.rejected || 0}
          icon={
            <XCircle
              className="
                w-6
                h-6
              "
            />
          }
        />

        <StatCard
          title="Interviews"
          value={stats?.interviews || 0}
          icon={
            <CalendarDays
              className="
                w-6
                h-6
              "
            />
          }
        />

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

          {/* ATS CARD */}
          <Link
            href="/admin/applications"

            className="
              block

              bg-white

              rounded-3xl

              p-8

              border
              border-[#E8EEF9]

              hover:border-[#1A4FD6]

              transition-all
              duration-300
            "
          >

            <div
              className="
                flex
                items-start
                justify-between
              "
            >

              <div>

                <h2
                  className="
                    text-2xl

                    font-bold

                    mb-3

                    text-[#0B1120]
                  "
                >
                  Applications ATS
                </h2>

                <p
                  className="
                    text-gray-500

                    leading-[28px]

                    max-w-[500px]
                  "
                >
                  Manage candidate applications,
                  interview pipelines,
                  recruiter notes,
                  hiring status,
                  resumes and interview scheduling.
                </p>

              </div>

              <div
                className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-[#EEF4FF]

                  flex
                  items-center
                  justify-center

                  text-[#1A4FD6]
                "
              >

                <BriefcaseBusiness
                  className="
                    w-8
                    h-8
                  "
                />

              </div>

            </div>

          </Link>

          {/* RECENT APPLICATIONS */}
          <div
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
                items-center
                justify-between

                mb-8
              "
            >

              <h2
                className="
                  text-2xl

                  font-bold

                  text-[#0B1120]
                "
              >
                Recent Applications
              </h2>

              <Link
                href="/admin/applications"

                className="
                  text-[#1A4FD6]

                  font-medium

                  hover:underline
                "
              >
                View All
              </Link>

            </div>

            <div className="space-y-4">

              {recentApplications.map(
                (item) => (

                  <Link
                    key={item.id}

                    href={`/admin/applications/${item.id}`}

                    className="
                      flex
                      items-center
                      justify-between

                      p-5

                      rounded-2xl

                      bg-[#FAFBFD]

                      hover:bg-[#F4F8FF]

                      transition-all
                    "
                  >

                    <div>

                      <h3
                        className="
                          font-semibold

                          text-[#0B1120]
                        "
                      >
                        {item.full_name}
                      </h3>

                      <p
                        className="
                          text-sm

                          text-gray-500

                          mt-1
                        "
                      >
                        {item.role ||
                          "General Application"}
                      </p>

                    </div>

                    <StatusBadge
                      status={item.status}
                    />

                  </Link>

                )
              )}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* UPCOMING INTERVIEWS */}
          <div
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
                items-center
                gap-3

                mb-8
              "
            >

              <Clock3
                className="
                  w-6
                  h-6

                  text-[#1A4FD6]
                "
              />

              <h2
                className="
                  text-2xl

                  font-bold

                  text-[#0B1120]
                "
              >
                Upcoming Interviews
              </h2>

            </div>

            {upcomingInterviews.length > 0 ? (

              <div className="space-y-5">

                {upcomingInterviews.map(
                  (item) => (

                    <Link
                      key={item.id}

                      href={`/admin/applications/${item.id}`}

                      className="
                        block

                        p-5

                        rounded-2xl

                        bg-[#FAFBFD]

                        hover:bg-[#F4F8FF]

                        transition-all
                      "
                    >

                      <h3
                        className="
                          font-semibold

                          text-[#0B1120]
                        "
                      >
                        {item.full_name}
                      </h3>

                      <p
                        className="
                          text-sm

                          text-gray-500

                          mt-1
                        "
                      >
                        {item.role}
                      </p>

                      <p
                        className="
                          text-sm

                          text-[#1A4FD6]

                          font-medium

                          mt-3
                        "
                      >
                        {item.interview_date
                          ? new Date(
                              item.interview_date
                            ).toLocaleString(
                              "en-IN",
                              {

                                dateStyle: "medium",

                                timeStyle: "short",
                              }
                            )

                          : "Interview Pending"}
                      </p>

                    </Link>

                  )
                )}

              </div>

            ) : (

              <div
                className="
                  text-center

                  py-12

                  text-gray-500
                "
              >
                No interviews scheduled yet.
              </div>

            )}

          </div>

          {/* PIPELINE */}
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

                text-[#0B1120]

                mb-8
              "
            >
              Hiring Pipeline
            </h2>

            <div className="space-y-4">

              <PipelineItem
                label="New Applications"
                value={
                  stats?.total || 0
                }
              />

              <PipelineItem
                label="Shortlisted"
                value={
                  stats?.shortlisted || 0
                }
              />

              <PipelineItem
                label="Interview Scheduled"
                value={
                  stats?.interviews || 0
                }
              />

              <PipelineItem
                label="Rejected"
                value={
                  stats?.rejected || 0
                }
              />

            </div>

          </div>

          {/*
          =======================================
          PARTNERS MODULE (COMING LATER)
          =======================================

          <Link
            href="/admin/partners"
          >
            Partners Card
          </Link>
          */}

        </div>

      </div>

    </main>
  );
}

function StatCard({
  title,
  value,
  icon,
}: any) {

  return (

    <div
      className="
        bg-white

        rounded-3xl

        p-8

        border
        border-[#E8EEF9]
      "
    >

      <div
        className="
          flex
          items-center
          justify-between

          mb-6
        "
      >

        <div
          className="
            w-14
            h-14

            rounded-2xl

            bg-[#EEF4FF]

            flex
            items-center
            justify-center

            text-[#1A4FD6]
          "
        >
          {icon}
        </div>

      </div>

      <p className="text-gray-500">
        {title}
      </p>

      <h2
        className="
          text-4xl

          font-bold

          mt-3

          text-[#0B1120]
        "
      >
        {value}
      </h2>

    </div>
  );
}

function PipelineItem({
  label,
  value,
}: any) {

  return (

    <div
      className="
        flex
        items-center
        justify-between

        p-4

        rounded-2xl

        bg-[#FAFBFD]
      "
    >

      <p className="text-[#0B1120]">
        {label}
      </p>

      <span
        className="
          min-w-[36px]
          h-[36px]

          rounded-full

          bg-[#1A4FD6]

          text-white

          text-sm

          font-semibold

          flex
          items-center
          justify-center
        "
      >
        {value}
      </span>

    </div>
  );
}

function StatusBadge({
  status,
}: any) {

  const colors: any = {

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

  return (

    <div
      className={`
        px-4
        py-2

        rounded-full

        text-xs
        font-semibold

        ${colors[status]}
      `}
    >
      {status}
    </div>
  );
}