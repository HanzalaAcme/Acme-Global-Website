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
  Building2,
  Handshake,
  PauseCircle,
  CheckCircle2,
} from "lucide-react";

import { supabase }
from "@/lib/supabase/client";

export default function AdminPage() {

  const [stats, setStats] =
    useState<any>(null);

  const [partnerStats, setPartnerStats] =
    useState<any>(null);

  const [recentApplications, setRecentApplications] =
    useState<any[]>([]);

  const [recentPartners, setRecentPartners] =
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
        // PARTNERS
        // ========================================

        const {
          data: partners,
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

        // ========================================
        // APPLICATION ATS STATS
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
        // PARTNER ATS STATS
        // ========================================

        const totalPartners =
          partners?.length || 0;

        const approvedPartners =
          partners?.filter(
            (item) =>
              item.status ===
              "approved"
          ).length || 0;

        const rejectedPartners =
          partners?.filter(
            (item) =>
              item.status ===
              "rejected"
          ).length || 0;

        const onHoldPartners =
          partners?.filter(
            (item) =>
              item.status ===
              "on-hold"
          ).length || 0;

        setPartnerStats({

          totalPartners,

          approvedPartners,

          rejectedPartners,

          onHoldPartners,
        });

        // ========================================
        // RECENT APPLICATIONS
        // ========================================

        setRecentApplications(
          applications?.slice(0, 5) || []
        );

        // ========================================
        // RECENT PARTNERS
        // ========================================

        setRecentPartners(
          partners?.slice(0, 5) || []
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
            ACME Global Hub ATS
          </p>

          <h1
            className="
              text-4xl
              md:text-5xl

              font-bold

              text-[#0B1120]
            "
          >
            Admin Dashboard
          </h1>

        </div>

      </div>

      {/* APPLICATION ATS */}
      <div className="mb-14">

        <div
          className="
            flex
            items-center
            justify-between

            mb-6
          "
        >

          <h2
            className="
              text-2xl

              font-bold

              text-[#0B1120]
            "
          >
            Recruitment ATS
          </h2>

          <Link
            href="/admin/applications"

            className="
              text-[#1A4FD6]

              font-semibold
            "
          >
            Open ATS
          </Link>

        </div>

        <div
          className="
            grid

            sm:grid-cols-2
            xl:grid-cols-4

            gap-6
          "
        >

          <StatCard
            title="Applications"
            value={stats?.total || 0}
            icon={
              <BriefcaseBusiness
                className="w-6 h-6"
              />
            }
          />

          <StatCard
            title="Shortlisted"
            value={
              stats?.shortlisted || 0
            }
            icon={
              <Users
                className="w-6 h-6"
              />
            }
          />

          <StatCard
            title="Rejected"
            value={
              stats?.rejected || 0
            }
            icon={
              <XCircle
                className="w-6 h-6"
              />
            }
          />

          <StatCard
            title="Interviews"
            value={
              stats?.interviews || 0
            }
            icon={
              <CalendarDays
                className="w-6 h-6"
              />
            }
          />

        </div>

      </div>

      {/* PARTNER ATS */}
      <div className="mb-14">

        <div
          className="
            flex
            items-center
            justify-between

            mb-6
          "
        >

          <h2
            className="
              text-2xl

              font-bold

              text-[#0B1120]
            "
          >
            Partner ATS
          </h2>

          <Link
            href="/admin/partners"

            className="
              text-[#1A4FD6]

              font-semibold
            "
          >
            Open Partner ATS
          </Link>

        </div>

        <div
          className="
            grid

            sm:grid-cols-2
            xl:grid-cols-4

            gap-6
          "
        >

          <StatCard
            title="Partners"
            value={
              partnerStats
                ?.totalPartners || 0
            }
            icon={
              <Building2
                className="w-6 h-6"
              />
            }
          />

          <StatCard
            title="Approved"
            value={
              partnerStats
                ?.approvedPartners || 0
            }
            icon={
              <CheckCircle2
                className="w-6 h-6"
              />
            }
          />

          <StatCard
            title="Rejected"
            value={
              partnerStats
                ?.rejectedPartners || 0
            }
            icon={
              <XCircle
                className="w-6 h-6"
              />
            }
          />

          <StatCard
            title="On Hold"
            value={
              partnerStats
                ?.onHoldPartners || 0
            }
            icon={
              <PauseCircle
                className="w-6 h-6"
              />
            }
          />

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

          {/* APPLICATIONS */}
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
                "
              >
                Recent Applications
              </h2>

              <Link
                href="/admin/applications"

                className="
                  text-[#1A4FD6]

                  font-medium
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

                    </div>

                    <StatusBadge
                      status={item.status}
                    />

                  </Link>

                )
              )}

            </div>

          </div>

          {/* PARTNERS */}
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
                "
              >
                Recent Partner Requests
              </h2>

              <Link
                href="/admin/partners"

                className="
                  text-[#1A4FD6]

                  font-medium
                "
              >
                View All
              </Link>

            </div>

            <div className="space-y-4">

              {recentPartners.map(
                (item) => (

                  <Link
                    key={item.id}

                    href={`/admin/partners/${item.id}`}

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
                        "
                      >
                        {
                          item.legal_company_name
                        }
                      </h3>

                      <p
                        className="
                          text-sm

                          text-gray-500

                          mt-1
                        "
                      >
                        {
                          item.partnership_type
                        }
                      </p>

                    </div>

                    <PartnerStatusBadge
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

          {/* INTERVIEWS */}
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
                "
              >
                Upcoming Interviews
              </h2>

            </div>

            {upcomingInterviews.length > 0 ? (

              <div className="space-y-4">

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
                      "
                    >

                      <h3
                        className="
                          font-semibold
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

                    </Link>

                  )
                )}

              </div>

            ) : (

              <div
                className="
                  py-10

                  text-center

                  text-gray-500
                "
              >
                No interviews scheduled.
              </div>

            )}

          </div>

          {/* PARTNER PIPELINE */}
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

              <Handshake
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
                "
              >
                Partner Pipeline
              </h2>

            </div>

            <div className="space-y-4">

              <PipelineItem
                label="New"
                value={
                  partnerStats
                    ?.totalPartners || 0
                }
              />

              <PipelineItem
                label="Approved"
                value={
                  partnerStats
                    ?.approvedPartners || 0
                }
              />

              <PipelineItem
                label="On Hold"
                value={
                  partnerStats
                    ?.onHoldPartners || 0
                }
              />

              <PipelineItem
                label="Rejected"
                value={
                  partnerStats
                    ?.rejectedPartners || 0
                }
              />

            </div>

          </div>

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
          w-14
          h-14

          rounded-2xl

          bg-[#EEF4FF]

          flex
          items-center
          justify-center

          text-[#1A4FD6]

          mb-6
        "
      >
        {icon}
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

      <p>{label}</p>

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

function PartnerStatusBadge({
  status,
}: any) {

  const colors: any = {

    new:
      "bg-blue-100 text-blue-700",

    approved:
      "bg-green-100 text-green-700",

    "on-hold":
      "bg-yellow-100 text-yellow-700",

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