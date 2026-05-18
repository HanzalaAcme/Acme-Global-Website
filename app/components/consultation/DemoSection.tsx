"use client";

import { useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  "Application Services",
  "Cybersecurity Services",
  "Remote Infrastructure Management",
  "Global Capability Center (GCC)",
  "Staff Augmentation Services",
  "ERP & Business Platforms",
  "Managed IT Services",
  "Recruitment-as-a-Service (RaaS)",
  "AI & Generative AI Services",
  "StaffDynamics",
  "PayDynamics",
];

export default function ConsultationForm() {

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

    setSuccess(false);

    const formData =
      new FormData(e.target);

    try {

      const res = await fetch(
        "/api/consultation",
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (data.success) {

        setSuccess(true);

        e.target.reset();

      } else {

        setError(
          data.message ||
          "Something went wrong."
        );
      }

    } catch (err) {

      setError(
        "Failed to submit request."
      );
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#F4F7FC] py-20 px-6 lg:px-20">

      <div className="max-w-[900px] mx-auto">

        <div
          className="
            bg-white

            rounded-[32px]

            border
            border-[#E4EAF5]

            p-6
            md:p-10

            shadow-[0_10px_40px_rgba(0,0,0,0.03)]
          "
        >

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[34px]
              md:text-[42px]

              leading-[1.1]

              font-bold

              text-[#0B1120]

              mb-5
            "
          >
            Request a Consultation
          </h2>

          <p
            className="
              text-[#5E6E90]

              leading-[30px]

              text-[15px]

              mb-10
            "
          >
            Speak with our enterprise experts and discover
            how ACME Global can help accelerate your
            digital transformation journey.
          </p>

          {/* SUCCESS */}
          {success && (

            <div
              className="
                mb-8

                rounded-2xl

                border
                border-green-200

                bg-green-50

                px-5
                py-4

                flex
                items-start
                gap-3
              "
            >

              <CheckCircle2
                className="
                  text-green-600

                  w-6
                  h-6

                  shrink-0
                "
              />

              <div>

                <h4 className="font-semibold text-[#0B1120] mb-1">
                  Consultation Request Submitted
                </h4>

                <p className="text-[#5E6E90] text-sm leading-[26px]">
                  Our sales team will contact you shortly.
                </p>

              </div>

            </div>
          )}

          {/* ERROR */}
          {error && (

            <div
              className="
                mb-8

                rounded-2xl

                border
                border-red-200

                bg-red-50

                px-5
                py-4

                text-red-600
                text-sm
              "
            >
              {error}
            </div>
          )}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="block font-semibold text-[#0B1120] mb-3">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="full_name"
                  required

                  className="
                    w-full

                    h-[52px]

                    px-4

                    rounded-xl

                    border
                    border-[#E3E8F3]

                    bg-[#F7F9FD]

                    text-[#0B1120]

                    outline-none

                    focus:border-[#1A4FD6]
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />

              </div>

              <div>

                <label className="block font-semibold text-[#0B1120] mb-3">
                  Company Name *
                </label>

                <input
                  type="text"
                  name="company"
                  required

                  className="
                    w-full

                    h-[52px]

                    px-4

                    rounded-xl

                    border
                    border-[#E3E8F3]

                    bg-[#F7F9FD]

                    text-[#0B1120]

                    outline-none

                    focus:border-[#1A4FD6]
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />

              </div>

            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="block font-semibold text-[#0B1120] mb-3">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  required

                  className="
                    w-full

                    h-[52px]

                    px-4

                    rounded-xl

                    border
                    border-[#E3E8F3]

                    bg-[#F7F9FD]

                    text-[#0B1120]

                    outline-none

                    focus:border-[#1A4FD6]
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />

              </div>

              <div>

                <label className="block font-semibold text-[#0B1120] mb-3">
                  Phone Number *
                </label>

                <input
                  type="text"
                  name="phone"
                  required

                  className="
                    w-full

                    h-[52px]

                    px-4

                    rounded-xl

                    border
                    border-[#E3E8F3]

                    bg-[#F7F9FD]

                    text-[#0B1120]

                    outline-none

                    focus:border-[#1A4FD6]
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />

              </div>

            </div>

            
            {/* SERVICE */}
            <div>

              <label className="block font-semibold text-[#0B1120] mb-3">
                Service Type *
              </label>

              <select
                name="service_type"
                required

                className="
                  w-full

                  h-[52px]

                  px-4

                  rounded-xl

                  border
                  border-[#E3E8F3]

                  bg-[#F7F9FD]

                  text-[#0B1120]

                  outline-none

                  focus:border-[#1A4FD6]
                  focus:ring-4
                  focus:ring-blue-100
                "
              >

                <option value="">
                  Select a service
                </option>

                {services.map((service) => (

                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>

                ))}

              </select>

            </div>

            {/* REQUIREMENTS */}
            <div>

              <label className="block font-semibold text-[#0B1120] mb-3">
                Requirements
              </label>

              <textarea
                rows={3}
                name="requirements"

                placeholder="Tell us about your business requirements or challenges..."

                className="
                  w-full

                  px-4
                  py-4

                  rounded-2xl

                  border
                  border-[#E3E8F3]

                  bg-[#F7F9FD]

                  text-[#0B1120]

                  outline-none

                  resize-none

                  focus:border-[#1A4FD6]
                  focus:ring-4
                  focus:ring-blue-100
                "
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}

              className="
                w-full

                h-[56px]

                bg-[#1A4FD6]
                hover:bg-[#2E66FF]

                rounded-2xl

                text-white
                font-semibold

                flex
                items-center
                justify-center
                gap-3

                transition-all
                duration-300

                disabled:opacity-70

                shadow-[0_12px_30px_rgba(26,79,214,0.25)]
              "
            >

              {loading
                ? "Submitting Request..."
                : "Request Consultation"}

              {!loading && (
                <ArrowRight className="w-5 h-5" />
              )}

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}