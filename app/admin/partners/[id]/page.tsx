"use client";

import {
  useEffect,
  useState,
} from "react";

import Link
from "next/link";

import { useParams }
from "next/navigation";

import { supabase }
from "@/lib/supabase/client";

const statuses = [
  "new",
  "on-hold",
  "approved",
  "rejected",
];

export default function PartnerDetailPage() {

  const { id } =
    useParams();

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [partner, setPartner] =
    useState<any>(null);

  useEffect(() => {

    fetchPartner();

  }, []);

  const fetchPartner =
    async () => {

      const {
        data,
      } =
        await supabase

          .from(
            "partner_applications"
          )

          .select("*")

          .eq("id", id)

          .single();

      if (data) {

        setPartner(data);
      }

      setLoading(false);
    };

  const saveATS =
    async () => {

      try {

        setSaving(true);

        const res =
          await fetch(
            "/api/admin/update-partner",
            {

              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                id,

                status:
                  partner.status,

                reviewed_by:
                  partner.reviewed_by,

                comments:
                  partner.comments,
              }),
            }
          );

        const data =
          await res.json();

        if (!data.success) {

          alert(
            data.message
          );

          return;
        }

        alert(
          "Partner ATS Updated"
        );

        fetchPartner();

      } catch (err) {

        console.log(err);

      } finally {

        setSaving(false);
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
        Loading Partner...
      </div>
    );
  }

  return (

    <main
      className="
        min-h-screen

        bg-[#F5F7FB]

        p-6
        lg:p-10

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
            Partner ATS
          </p>

          <h1
            className="
              text-4xl

              font-bold

              text-[#0B1120]
            "
          >
            {
              partner
                .legal_company_name
            }
          </h1>

        </div>

        <Link
          href="/admin/partners"

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
          Back
        </Link>

      </div>

      <div
        className="
          grid

          lg:grid-cols-2

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

          {/* COMPANY */}
          <Section
            title="Company Information"
          >

            <Grid
              data={[
                [
                  "Legal Name",
                  partner.legal_company_name,
                ],

                [
                  "Trade Name",
                  partner.trade_name,
                ],

                [
                  "Website",
                  partner.website_url,
                ],

                [
                  "Year Established",
                  partner.year_established,
                ],

                [
                  "Employees",
                  partner.number_of_employees,
                ],

                [
                  "Revenue",
                  partner.annual_revenue,
                ],

                [
                  "Headquarters",
                  partner.headquarters_location,
                ],
              ]}
            />

          </Section>

          {/* CONTACT */}
          <Section
            title="Primary Contact"
          >

            <Grid
              data={[
                [
                  "Contact Person",
                  partner.contact_person_name,
                ],

                [
                  "Designation",
                  partner.designation,
                ],

                [
                  "Email",
                  partner.email_address,
                ],

                [
                  "Mobile",
                  partner.mobile_number,
                ],

                [
                  "LinkedIn",
                  partner.linkedin_profile,
                ],
              ]}
            />

          </Section>

          {/* PARTNERSHIP */}
          <Section
            title="Partnership Details"
          >

            <Grid
              data={[
                [
                  "Partnership Type",
                  partner.partnership_type,
                ],

                [
                  "Products/Services",
                  partner.products_services,
                ],

                [
                  "Target Industries",
                  partner.target_industries,
                ],

                [
                  "Markets",
                  partner.geographic_markets,
                ],

                [
                  "Technology Partners",
                  partner.key_technology_partnerships,
                ],
              ]}
            />

          </Section>

          {/* DOCUMENTS */}
        {/* <Section
            title="Documents"
          >

            <div
              className="
                grid

                md:grid-cols-2

                gap-4
              "
            >

              <DocumentCard
                title="Company Profile"

                url={
                  partner.company_profile_url
                }
              />

              <DocumentCard
                title="Capability Deck"

                url={
                  partner.capability_presentation_url
                }
              />

              <DocumentCard
                title="Certifications"

                url={
                  partner.certifications_document_url
                }
              />

              <DocumentCard
                title="Signature"

                url={
                  partner.signature_url
                }
              />

              {partner.company_seal_url && (

                <DocumentCard
                  title="Company Seal"

                  url={
                    partner.company_seal_url
                  }
                />

              )}

            </div>

          </Section> */}

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* ATS */}
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
              Partner ATS
            </h2>

            {/* STATUS */}
            <div className="mb-6">

              <label
                className="
                  block

                  text-sm

                  font-semibold

                  mb-3

                  text-[#0B1120]
                "
              >
                Status
              </label>

              <select
                value={
                  partner.status
                }

                onChange={(e) =>
                  setPartner({
                    ...partner,

                    status:
                      e.target.value,
                  })
                }

                className="
                  w-full

                  h-[52px]

                  rounded-xl

                  border
                  border-[#E6EAF2]

                  px-4

                  outline-none

                  focus:border-[#1A4FD6]
                "
              >

                {statuses.map(
                  (item) => (

                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>

                  )
                )}

              </select>

            </div>

            {/* REVIEWED BY */}
            <div className="mb-6">

              <label
                className="
                  block

                  text-sm

                  font-semibold

                  mb-3

                  text-[#0B1120]
                "
              >
                Reviewed By
              </label>

              <input
                type="text"

                value={
                  partner.reviewed_by || ""
                }

                onChange={(e) =>
                  setPartner({
                    ...partner,

                    reviewed_by:
                      e.target.value,
                  })
                }

                className="
                  w-full

                  h-[52px]

                  rounded-xl

                  border
                  border-[#E6EAF2]

                  px-4

                  outline-none

                  focus:border-[#1A4FD6]
                "
              />

            </div>

            {/* COMMENTS */}
            <div className="mb-8">

              <label
                className="
                  block

                  text-sm

                  font-semibold

                  mb-3

                  text-[#0B1120]
                "
              >
                Comments
              </label>

              <textarea
                rows={6}

                value={
                  partner.comments || ""
                }

                onChange={(e) =>
                  setPartner({
                    ...partner,

                    comments:
                      e.target.value,
                  })
                }

                className="
                  w-full

                  rounded-2xl

                  border
                  border-[#E6EAF2]

                  p-4

                  outline-none

                  resize-none

                  focus:border-[#1A4FD6]
                "
              />

            </div>

            {/* BUTTON */}
            <button
              onClick={saveATS}

              disabled={saving}

              className="
                w-full

                h-[54px]

                rounded-2xl

                bg-[#1A4FD6]

                hover:bg-[#2E66FF]

                text-white

                font-semibold

                transition-all

                disabled:opacity-50
              "
            >
              {
                saving
                  ? "Saving..."
                  : "Save ATS Updates"
              }
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

function Section({
  title,
  children,
}: any) {

  return (

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
        {title}
      </h2>

      {children}

    </div>
  );
}

function Grid({
  data,
}: any) {

  return (

    <div
      className="
        grid

        md:grid-cols-2

        gap-6
      "
    >

      {data.map(
        ([label, value]: any) => (

          <div key={label}>

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

                leading-[30px]
              "
            >
              {value || "-"}
            </p>

          </div>

        )
      )}

    </div>
  );
}

function DocumentCard({
  title,
  url,
}: any) {

  return (

    <div
      className="
        border
        border-[#E8EEF9]

        rounded-2xl

        p-5
      "
    >

      <h3
        className="
          font-semibold

          text-[#0B1120]

          mb-4
        "
      >
        {title}
      </h3>

      <div
        className="
          flex

          gap-3
        "
      >

        <a
          href={url}

          target="_blank"

          className="
            h-[42px]

            px-4

            rounded-xl

            bg-[#1A4FD6]

            text-white

            text-sm
            font-medium

            flex
            items-center
            justify-center
          "
        >
          Open
        </a>

        <a
          href={`${url}?fl_attachment=true`}

          target="_blank"

          className="
            h-[42px]

            px-4

            rounded-xl

            border
            border-[#E6EAF2]

            bg-white

            text-sm
            font-medium

            flex
            items-center
            justify-center
          "
        >
          Download
        </a>

      </div>

    </div>
  );
}