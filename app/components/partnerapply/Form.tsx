"use client";

import { useState } from "react";

import {
  Building2,
  User,
  MapPin,
  ShieldCheck,
  Briefcase,
  Upload,
  FileText,
} from "lucide-react";

export default function PartnerApply() {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
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

      const res =
        await fetch(
          "/api/partner",
          {
            method: "POST",
            body: formData,
          }
        );

      const data =
        await res.json();

      if (!res.ok) {

        throw new Error(
          data.error ||
          "Submission failed"
        );
      }

      setSuccess(true);

      e.target.reset();

    } catch (err: any) {

      setError(
        err.message ||
        "Something went wrong."
      );
    }

    setLoading(false);
  };

  const inputClass =
    `
      w-full
      h-[56px]

      border
      border-[#E6EAF2]

      rounded-2xl

      px-5

      outline-none

      bg-white

      text-[#0B1120]

      placeholder:text-[#9BA8C0]

      transition-all
      duration-300

      focus:border-[#1A4FD6]
      focus:ring-4
      focus:ring-[#1A4FD6]/10
    `;

  const textareaClass =
    `
      w-full

      border
      border-[#E6EAF2]

      rounded-2xl

      px-5
      py-4
      mt-3
      outline-none

      bg-white

      text-[#0B1120]

      placeholder:text-[#9BA8C0]

      resize-none

      transition-all
      duration-300

      focus:border-[#1A4FD6]
      focus:ring-4
      focus:ring-[#1A4FD6]/10
    `;

  const sectionTitle =
    `
      text-2xl

      font-bold

      text-[#0B1120]
    `;

  const uploadCard =
    `
      relative

      border
      border-[#E6EAF2]

      rounded-3xl

      p-6

      bg-[#FAFBFD]

      hover:border-[#1A4FD6]

      transition-all
      duration-300
    `;

  return (

    <div
      className="
        bg-white

        rounded-[32px]

        border
        border-[#E8EEF9]

        shadow-sm

        p-6
        md:p-10
        lg:p-12
      "
    >

      {success ? (

        <div className="text-center py-20">

          <div className="text-6xl mb-6">
            ✅
          </div>

          <h3
            className="
              text-4xl

              font-bold

              text-[#0B1120]

              mb-4
            "
          >
            Registration Submitted
          </h3>

          <p className="text-gray-500 text-lg">
            Our alliances team will review
            your profile and contact you soon.
          </p>

        </div>

      ) : (

        <form
          onSubmit={handleSubmit}

          className="space-y-16"
        >

          {/* ================================================= */}
          {/* COMPANY INFORMATION */}
          {/* ================================================= */}

          <section className="space-y-8">

            <div className="flex items-center gap-4">

              <div
                className="
                  w-12
                  h-12

                  rounded-2xl

                  bg-[#1A4FD6]/10

                  flex
                  items-center
                  justify-center
                "
              >

                <Building2
                  className="
                    w-5
                    h-5

                    text-[#1A4FD6]
                  "
                />

              </div>

              <div>

                <h2 className={sectionTitle}>
                  Company Information
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Provide your organization details
                </p>

              </div>

            </div>

            <div
              className="
                grid

                md:grid-cols-2

                gap-3
                mt-3
              "
            >

              <input
                type="text"
                name="legal_company_name"
                required
                placeholder="Legal Company Name *"
                className={inputClass}
              />

              <input
                type="text"
                name="trade_name"
                required
                placeholder="Trade Name *"
                className={inputClass}
              />

              <input
                type="url"
                name="website_url"
                required
                placeholder="Website URL *"
                className={inputClass}
              />

              <input
                type="text"
                name="year_established"
                required
                placeholder="Year Established *"
                className={inputClass}
              />

              <input
                type="text"
                name="headquarters_location"
                required
                placeholder="Headquarters Location *"
                className={inputClass}
              />

              <input
                type="text"
                name="number_of_employees"
                required
                placeholder="Number of Employees *"
                className={inputClass}
              />

              <input
                type="text"
                name="annual_revenue"
                placeholder="Annual Revenue"
                className={inputClass}
              />

            </div>

            <textarea
              name="company_overview"
              rows={3}
              placeholder="Company Overview"
              className={textareaClass}
            />

          </section>

          {/* ================================================= */}
          {/* PRIMARY CONTACT */}
          {/* ================================================= */}

          <section className="space-y-8 mt-5">

            <div className="flex items-center gap-4">

              <div
                className="
                  w-12
                  h-12

                  rounded-2xl

                  bg-[#1A4FD6]/10

                  flex
                  items-center
                  justify-center
                "
              >

                <User
                  className="
                    w-5
                    h-5

                    text-[#1A4FD6]
                  "
                />

              </div>

              <div>

                <h2 className={sectionTitle}>
                  Primary Contact
                </h2>

              </div>

            </div>

            <div
              className="
                grid

                md:grid-cols-2

                gap-3
                mt-3
                mb-7
              "
            >

              <input
                type="text"
                name="contact_person_name"
                required
                placeholder="Contact Person Name *"
                className={inputClass}
              />

              <input
                type="text"
                name="designation"
                required
                placeholder="Designation *"
                className={inputClass}
              />

              <input
                type="email"
                name="email_address"
                required
                placeholder="Email Address *"
                className={inputClass}
              />

              <input
                type="text"
                name="mobile_number"
                required
                placeholder="Mobile Number *"
                className={inputClass}
              />

              <input
                type="url"
                name="linkedin_profile"
                required
                placeholder="LinkedIn Profile *"
                className={inputClass}
              />

            </div>

          </section>

          {/* ================================================= */}
          {/* REGISTERED ADDRESS */}
          {/* ================================================= */}

          <section className="space-y-8 ">

            <div className="flex items-center gap-4">

              <div
                className="
                  w-12
                  h-12

                  rounded-2xl

                  bg-[#1A4FD6]/10

                  flex
                  items-center
                  justify-center
                "
              >

                <MapPin
                  className="
                    w-5
                    h-5

                    text-[#1A4FD6]
                  "
                />

              </div>

              <div>

                <h2 className={sectionTitle}>
                  Registered Address
                </h2>

              </div>

            </div>

            <div
              className="
                grid

                md:grid-cols-2

                gap-3
                mt-3
              "
            >

              <input
                type="text"
                name="street_address"
                required
                placeholder="Street Address *"
                className={inputClass}
              />

              <input
                type="text"
                name="city"
                required
                placeholder="City *"
                className={inputClass}
              />

              <input
                type="text"
                name="state_province"
                required
                placeholder="State / Province *"
                className={inputClass}
              />

              <input
                type="text"
                name="country"
                required
                placeholder="Country *"
                className={inputClass}
              />

              <input
                type="text"
                name="postal_code"
                required
                placeholder="Postal Code *"
                className={inputClass}
              />

            </div>

          </section>

          {/* ================================================= */}
          {/* CORPORATE INFORMATION */}
          {/* ================================================= */}

          <section className="space-y-8 mt-5">

            <div className="flex items-center gap-4">

              <div
                className="
                  w-12
                  h-12

                  rounded-2xl

                  bg-[#1A4FD6]/10

                  flex
                  items-center
                  justify-center
                "
              >

                <ShieldCheck
                  className="
                    w-5
                    h-5

                    text-[#1A4FD6]
                  "
                />

              </div>

              <div>

                <h2 className={sectionTitle}>
                  Corporate Information
                </h2>

              </div>

            </div>

            <div
              className="
                grid

                md:grid-cols-2

                gap-3
                mt-3
              "
            >

              <input
                type="text"
                name="company_registration_number"
                required
                placeholder="Company Registration Number *"
                className={inputClass}
              />

              <input
                type="text"
                name="tax_vat_gst_number"
                required
                placeholder="Tax / VAT / GST Number *"
                className={inputClass}
              />

              <input
                type="text"
                name="duns_number"
                placeholder="DUNS Number"
                className={inputClass}
              />

              <input
                type="text"
                name="certifications"
                placeholder="Certifications"
                className={inputClass}
              />

            </div>

          </section>

          {/* ================================================= */}
          {/* PARTNERSHIP */}
          {/* ================================================= */}

          <section className="space-y-8 mt-5">

            <div className="flex items-center gap-4">

              <div
                className="
                  w-12
                  h-12

                  rounded-2xl

                  bg-[#1A4FD6]/10

                  flex
                  items-center
                  justify-center
                "
              >

                <Briefcase
                  className="
                    w-5
                    h-5

                    text-[#1A4FD6]
                  "
                />

              </div>

              <div>

                <h2 className={sectionTitle}>
                  Partnership Interest
                </h2>

              </div>

            </div>

            <div
              className="
                grid

                md:grid-cols-2

                gap-3
                mt-3
              "
            >

              <select
                name="partnership_type"
                required
                className={inputClass}
              >

                <option value="">
                  Select Partnership Type
                </option>

                <option>
                  Technology
                </option>

                <option>
                  Channel
                </option>

                <option>
                  Referral
                </option>

                <option>
                  Staffing
                </option>

                <option>
                  Delivery
                </option>

                <option>
                  Strategic Alliance
                </option>

              </select>

              <input
                type="text"
                name="target_industries"
                required
                placeholder="Target Industries *"
                className={inputClass}
              />

              <input
                type="text"
                name="geographic_markets"
                required
                placeholder="Geographic Markets Served *"
                className={inputClass}
              />

              <input
                type="text"
                name="key_technology_partnerships"
                required
                placeholder="Key Technology Partnerships *"
                className={inputClass}
              />

            </div>

            <textarea
              name="products_services"
              rows={3}
              required
              placeholder="Products and Services Offered *"
              className={textareaClass}
            />

          </section>

          {/* ================================================= */}
          {/* DOCUMENTS */}
          {/* ================================================= */}

          <section className="space-y-8 mt-5">

            <div className="flex items-center gap-4">

              <div
                className="
                  w-12
                  h-12

                  rounded-2xl

                  bg-[#1A4FD6]/10

                  flex
                  items-center
                  justify-center
                "
              >

                <Upload
                  className="
                    w-5
                    h-5

                    text-[#1A4FD6]
                  "
                />

              </div>

              <div>

                <h2 className={sectionTitle}>
                  Supporting Documents
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Upload company and compliance documents
                </p>

              </div>

            </div>

            <div
              className="
                grid

                lg:grid-cols-3

                gap-3
                mt-3
              "
            >

              {[
                {
                  title:
                    "Company Profile",

                  subtitle:
                    "PDF, DOC, PPT",

                  name:
                    "company_profile",
                },

                {
                  title:
                    "Capability Deck",

                  subtitle:
                    "Presentation or brochure",

                  name:
                    "capability_presentation",
                },

                {
                  title:
                    "Certifications",

                  subtitle:
                    "ISO, CMMI, others",

                  name:
                    "certifications_document",
                },
              ].map((item, i) => (

                <div
                  key={i}

                  className={uploadCard}
                >

                  <div
                    className="
                      w-14
                      h-14

                      rounded-2xl

                      bg-[#1A4FD6]/10

                      flex
                      items-center
                      justify-center

                      mb-5
                    "
                  >

                    <Upload
                      className="
                        w-6
                        h-6

                        text-[#1A4FD6]
                      "
                    />

                  </div>

                  <h3
                    className="
                      text-lg

                      font-semibold

                      text-[#0B1120]

                      mb-2
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-sm

                      text-gray-500

                      mb-5
                    "
                  >
                    {item.subtitle}
                  </p>

                  <input
                    type="file"

                    required

                    name={item.name}

                    accept="
                      .pdf,
                      .doc,
                      .docx,
                      .ppt,
                      .pptx
                    "

                    className="
                      w-full

                      text-sm

                      text-gray-500

                      file:mr-4
                      file:py-3
                      file:px-4

                      file:rounded-xl

                      file:border-0

                      file:bg-[#1A4FD6]

                      file:text-white

                      file:font-medium

                      hover:file:bg-[#2E66FF]

                      file:cursor-pointer

                      cursor-pointer
                    "
                  />

                </div>

              ))}

            </div>

            <textarea
              name="reference_clients"

              rows={2}

              placeholder="
                Reference Clients (Optional)
              "

              className={textareaClass}
            />

          </section>

          {/* ================================================= */}
          {/* DECLARATION */}
          {/* ================================================= */}

          <section className="space-y-8 mt-5">

            <div className="flex items-center gap-4">

              <div
                className="
                  w-12
                  h-12

                  rounded-2xl

                  bg-[#1A4FD6]/10

                  flex
                  items-center
                  justify-center
                "
              >

                <FileText
                  className="
                    w-5
                    h-5

                    text-[#1A4FD6]
                  "
                />

              </div>

              <div>

                <h2 className={sectionTitle}>
                  Declaration
                </h2>

              </div>

            </div>

            <div
              className="
                grid

                md:grid-cols-2

                gap-3
                mt-3
              "
            >

              <input
                type="text"
                name="authorized_signatory_name"
                required
                placeholder="Authorized Signatory Name *"
                className={inputClass}
              />

              <input
                type="text"
                name="authorized_designation"
                required
                placeholder="Authorized Designation *"
                className={inputClass}
              />

            </div>

            {/* SIGNATURE + SEAL */}

            <div
              className="
                grid

                md:grid-cols-2

                gap-6
                mt-3
              "
            >

              {/* SIGNATURE */}

              <div className={uploadCard}>

                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-[#1A4FD6]/10

                    flex
                    items-center
                    justify-center

                    mb-5
                  "
                >

                  <Upload
                    className="
                      w-6
                      h-6

                      text-[#1A4FD6]
                    "
                  />

                </div>

                <h3
                  className="
                    text-lg

                    font-semibold

                    text-[#0B1120]

                    mb-2
                  "
                >
                  Signature Upload
                </h3>

                <p
                  className="
                    text-sm

                    text-gray-500

                    mb-5
                  "
                >
                  PNG, JPG, JPEG or PDF
                </p>

                <input
                  type="file"

                  required

                  name="signature_url"

                  accept="
                    .png,
                    .jpg,
                    .jpeg,
                    .pdf
                  "

                  className="
                    w-full

                    text-sm

                    text-gray-500

                    file:mr-4
                    file:py-3
                    file:px-4

                    file:rounded-xl

                    file:border-0

                    file:bg-[#1A4FD6]

                    file:text-white

                    file:font-medium

                    hover:file:bg-[#2E66FF]

                    file:cursor-pointer

                    cursor-pointer
                  "
                />

              </div>

              {/* COMPANY SEAL */}

              <div className={uploadCard}>

                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-[#1A4FD6]/10

                    flex
                    items-center
                    justify-center

                    mb-5
                  "
                >

                  <Upload
                    className="
                      w-6
                      h-6

                      text-[#1A4FD6]
                    "
                  />

                </div>

                <h3
                  className="
                    text-lg

                    font-semibold

                    text-[#0B1120]

                    mb-2
                  "
                >
                  Company Seal
                </h3>

                <p
                  className="
                    text-sm

                    text-gray-500

                    mb-5
                  "
                >
                  Official seal or stamp
                </p>

                <input
                  type="file"

                  name="company_seal_url"

                  accept="
                    .png,
                    .jpg,
                    .jpeg,
                    .pdf
                  "

                  className="
                    w-full

                    text-sm

                    text-gray-500

                    file:mr-4
                    file:py-3
                    file:px-4

                    file:rounded-xl

                    file:border-0

                    file:bg-[#1A4FD6]

                    file:text-white

                    file:font-medium

                    hover:file:bg-[#2E66FF]

                    file:cursor-pointer

                    cursor-pointer
                  "
                />

              </div>

            </div>

          </section>

          {/* ERROR */}

          {error && (

            <div
              className="
                rounded-2xl

                bg-red-50

                border
                border-red-200

                px-5
                py-4

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

              h-[50px]

              rounded-2xl

              bg-[#1A4FD6]
              hover:bg-[#2E66FF]

              text-white
              mt-10

              text-lg

              font-semibold

              transition-all
              duration-300

              cursor-pointer

              disabled:opacity-50
            "
          >

            {loading
              ? "Submitting..."
              : "Submit Partnership Request"}

          </button>

        </form>

      )}

    </div>
  );
}