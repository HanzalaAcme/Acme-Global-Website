"use client";

import { useState } from "react";

import {

  Building2,

  User,

  Mail,

  Phone,

  Globe,

  Briefcase,

  MessageSquare,

  Upload,

} from "lucide-react";

export default function PartnerApply() {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");
 
    const [brochure, setBrochure] =
  useState<File | null>(null);

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
          data.message
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

  return (

    <div
      className="
        bg-white

        rounded-[28px]

        p-8
        md:p-10

        shadow-sm

        border
        border-[#E8EEF9]
      "
    >

      {success ? (

        <div className="text-center py-16">

          <div className="text-5xl mb-5">
            ✅
          </div>

          <h3
            className="
              text-2xl

              font-bold

              text-[#0B1120]

              mb-3
            "
          >
            Partnership Request Submitted
          </h3>

          <p className="text-gray-500">
            Our team will review your request
            and contact you shortly.
          </p>

        </div>

      ) : (

        <form
          onSubmit={handleSubmit}

          className="space-y-6"
        >

          {/* COMPANY */}
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

              <Building2 className="w-4 h-4 text-[#1A4FD6]" />

              Company Name *

            </label>

            <input
              type="text"
              name="company_name"
              required

              placeholder="ABC Technologies"

              className="
                w-full
                h-[54px]

                border
                border-[#E6EAF2]

                rounded-xl

                px-4

                outline-none

                text-[#0B1120]

                placeholder:text-[#9BA8C0]

                focus:border-[#1A4FD6]
                focus:ring-4
                focus:ring-blue-100

                transition-all
              "
            />

          </div>

          {/* CONTACT */}
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

              Contact Person *

            </label>

            <input
              type="text"
              name="contact_person"
              required

              placeholder="John Doe"

              className="
                w-full
                h-[54px]

                border
                border-[#E6EAF2]

                rounded-xl

                px-4

                outline-none

                text-[#0B1120]

                placeholder:text-[#9BA8C0]

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

              Business Email *

            </label>

            <input
              type="email"
              name="email"
              required

              placeholder="company@email.com"

              className="
                w-full
                h-[54px]

                border
                border-[#E6EAF2]

                rounded-xl

                px-4

                outline-none

                text-[#0B1120]

                placeholder:text-[#9BA8C0]

                focus:border-[#1A4FD6]
                focus:ring-4
                focus:ring-blue-100

                transition-all
              "
            />

          </div>

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

              Phone Number *

            </label>

            <input
              type="text"
              name="phone"
              required

              placeholder="+91 9876543210"

              className="
                w-full
                h-[54px]

                border
                border-[#E6EAF2]

                rounded-xl

                px-4

                outline-none

                text-[#0B1120]

                placeholder:text-[#9BA8C0]

                focus:border-[#1A4FD6]
                focus:ring-4
                focus:ring-blue-100

                transition-all
              "
            />

          </div>

          {/* COUNTRY */}
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

              Headquarter Location *

            </label>

            <input
              type="text"
              name="country"
              required

              placeholder="Hyderabad, India"

              className="
                w-full
                h-[54px]

                border
                border-[#E6EAF2]

                rounded-xl

                px-4

                outline-none

                text-[#0B1120]

                placeholder:text-[#9BA8C0]

                focus:border-[#1A4FD6]
                focus:ring-4
                focus:ring-blue-100

                transition-all
              "
            />

          </div>

          {/* WEBSITE */}
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

              Website

            </label>

            <input
              type="url"
              name="website"

              placeholder="https://company.com"

              className="
                w-full
                h-[54px]

                border
                border-[#E6EAF2]

                rounded-xl

                px-4

                outline-none

                text-[#0B1120]

                placeholder:text-[#9BA8C0]

                focus:border-[#1A4FD6]
                focus:ring-4
                focus:ring-blue-100

                transition-all
              "
            />

          </div>

          {/* TYPE */}
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

              <Briefcase className="w-4 h-4 text-[#1A4FD6]" />

              Partnership Interest *

            </label>

            <select
              name="partnership_type"
              required

              className="
                w-full
                h-[54px]

                border
                border-[#E6EAF2]

                rounded-xl

                px-4

                outline-none

                bg-white

                text-[#0B1120]

                focus:border-[#1A4FD6]
                focus:ring-4
                focus:ring-blue-100

                transition-all
              "
            >

              <option value="">
                Select Partnership Type
              </option>

              <option value="Technology Partner">
                Technology Partner
              </option>

              <option value="Channel Partner">
                Channel Partner
              </option>

              <option value="Referral Partner">
                Referral Partner
              </option>

              <option value="Staffing Partner">
                Staffing Partner
              </option>

              <option value="Delivery Partner">
                Delivery Partner
              </option>

              <option value="Strategic Alliance">
                Strategic Alliance
              </option>

            </select>

          </div>



          {/* COMPANY OVERVIEW */}
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

                        <MessageSquare className="w-4 h-4 text-[#1A4FD6]" />

                        Company Overview

                    </label>

                    <textarea
                        name="company_overview"

                        rows={3}

                        placeholder="
                        Briefly describe your company,
                        services, expertise, markets,
                        and partnership interests.
                        "

                        className="
                        w-full

                        border
                        border-[#E6EAF2]

                        rounded-xl

                        px-4
                        py-4

                        outline-none

                        text-[#0B1120]

                        placeholder:text-[#9BA8C0]

                        resize-none

                        focus:border-[#1A4FD6]
                        focus:ring-4
                        focus:ring-blue-100

                        transition-all
                        "
                    />

                    </div>

                    {/* COMPANY BROCHURE */}
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

    <Upload className="w-4 h-4 text-[#1A4FD6]" />

    Company Brochure

  </label>

  {!brochure ? (

    <label
      className="
        w-full
        h-[100px]

        border
        border-[#E6EAF2]

        rounded-xl

        px-4

        bg-white

        flex
        items-center
        justify-between

        cursor-pointer

        transition-all
        duration-300

        hover:border-[#1A4FD6]

        group
      "
    >

      {/* LEFT */}
      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <div
          className="
            w-9
            h-9

            rounded-lg

            bg-[#1A4FD6]/10

            flex
            items-center
            justify-center
          "
        >

          <Upload
            className="
              w-4
              h-4

              text-[#1A4FD6]
            "
          />

        </div>

        <span
          className="
            text-sm

            text-gray-400
          "
        >
          Upload company brochure
        </span>

      </div>

      {/* BUTTON */}
      <span
        className="
          text-sm

          font-medium

          text-[#1A4FD6]

          group-hover:text-[#2E66FF]

          transition-all
        "
      >
        Browse
      </span>

      <input
        type="file"

        name="brochure"

        accept="
          .pdf,
          .ppt,
          .pptx,
          .doc,
          .docx
        "

        className="hidden"

        onChange={(e: any) => {

          const selected =
            e.target.files[0];

          if (selected) {

            setBrochure(selected);
          }
        }}
      />

    </label>

  ) : (

    <div
      className="
        h-[100px]

        border
        border-[#DCE6FA]

        rounded-xl

        px-4

        bg-[#F8FBFF]

        flex
        items-center
        justify-between
      "
    >

      {/* FILE INFO */}
      <div
        className="
          flex
          items-center
          gap-3

          min-w-0
        "
      >

        <div
          className="
            w-9
            h-9

            rounded-lg

            bg-[#1A4FD6]/10

            flex
            items-center
            justify-center

            shrink-0
          "
        >

          <Upload
            className="
              w-4
              h-4

              text-[#1A4FD6]
            "
          />

        </div>

        <div className="min-w-0">

          <p
            className="
              text-sm

              font-medium

              text-[#0B1120]

              truncate
            "
          >
            {brochure.name}
          </p>

          

        </div>

      </div>

      {/* REMOVE */}
      <button
        type="button"

        onClick={() =>
          setBrochure(null)
        }

        className="
          text-sm

          text-red-500

          hover:text-red-600

          transition-all

          cursor-pointer
        "
      >
        Remove
      </button>

    </div>

  )}

</div>

          {/* ERROR */}
          {error && (

            <p className="text-red-500 text-sm">
              {error}
            </p>

          )}

          {/* BUTTON */}
          <button
            type="submit"

            disabled={loading}

            className="
              w-full

              h-[56px]

              bg-[#1A4FD6]
              hover:bg-[#2E66FF]

              text-white

              font-semibold

              rounded-xl

              transition-all
              duration-300

              cursor-pointer

              disabled:opacity-50
            "
          >

            {loading
              ? "Submitting..."
              : "Partner With Us"}

          </button>

        </form>

      )}

    </div>
  );
}