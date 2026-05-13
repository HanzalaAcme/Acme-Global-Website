"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Clock3,
  ShieldCheck,
  Activity,
  Users,
  ArrowRight,
} from "lucide-react";

{/*const services = [
  "Cloud Services",
  "Cybersecurity",
  "Managed IT",
  "RaaS",
  "ERP Platforms",
  "Staff Augmentation",
  "Pact Revenu+",
  "StaffDynamics",
  "PayDynamics",
  "GCC Setup",
]; */}
{/* SERVICES */}
            {/*<div>

              <label className="block text-[#0B1120] font-semibold mb-4">
                Services of Interest
              </label>

              <div className="flex flex-wrap gap-3">

                {services.map((service) => {

                  const active =
                    selectedServices.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"

                      onClick={() =>
                        toggleService(service)
                      }

                      className={`
                        px-3
                        py-3

                        rounded-full

                        border

                        text-[12px]
                        font-medium

                        transition-all
                        duration-300

                        ${
                          active
                            ? `
                              border-[#1A4FD6]
                              bg-[#1A4FD6]/10
                              text-[#1A4FD6]
                              shadow-[0_6px_20px_rgba(26,79,214,0.12)]
                            `
                            : `
                              border-[#E3E8F3]
                              bg-[#F7F9FD]
                              text-[#5E6E90]
                              hover:border-[#1A4FD6]
                              hover:text-[#1A4FD6]
                            `
                        }
                      `}
                    >
                      {service}
                    </button>
                  );
                })}

              </div>

            </div> */}

const features = [
  {
    icon: Clock3,
    title: "Response Within 24 Hours",
    desc: "Our team reviews every request and schedules your demo within one business day.",
  },
  {
    icon: Users,
    title: "Dedicated Solutions Expert",
    desc: "You'll speak directly with a certified specialist matched to your industry and requirements.",
  },
  {
    icon: ShieldCheck,
    title: "No Obligation, Fully Tailored",
    desc: "Every demo is customised to your use case — no generic slideshows, no pressure.",
  },
  
];


export default function DemoSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState(false);

const [error, setError] = useState("");

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(
        selectedServices.filter((s) => s !== service)
      );
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <section className="bg-[#F4F7FC] py-[90px] px-6 lg:px-20 overflow-hidden">

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-[60px] items-start">

        {/* LEFT SIDE */}
        <div>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] md:h-[360px] rounded-[30px] overflow-hidden mb-10">

            <Image
              src="/media/Why_acme.avif"
              alt="Demo"
              fill
              className="object-cover"
            />

          </div>

          {/* FEATURE CARDS */}
          <div className="space-y-5">

            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="
                    group

                    bg-white

                    border
                    border-[#E4EAF5]

                    rounded-[24px]

                    px-3
                    py-3

                    transition-all
                    duration-300

                    hover:border-[#1A4FD6]
                    hover:shadow-[0_14px_40px_rgba(26,79,214,0.12)]
                    hover:translate-x-[8px]
                  "
                >

                  <div className="flex gap-5 items-start">

                    {/* ICON */}
                    <div
                      className="
                        w-[52px]
                        h-[52px]

                        rounded-2xl

                        bg-[#1A4FD6]/10

                        flex
                        items-center
                        justify-center

                        shrink-0
                      "
                    >

                      <Icon
                        className="
                          text-[#1A4FD6]
                          w-6
                          h-6
                        "
                      />

                    </div>

                    {/* TEXT */}
                    <div>

                      <h3
                        className="
                          text-[#0B1120]
                          font-semibold
                          text-[20px]
                          mb-2
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          text-[#5E6E90]
                          leading-[28px]
                          text-[15px]
                        "
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/*RIGHT SIDE FORM*/}
        <div
          className="
            bg-white

            rounded-[34px]

            border
            border-[#E4EAF5]

            p-8
            md:p-10

            shadow-[0_10px_40px_rgba(0,0,0,0.03)]
          "
        >

          {/* HEADING */}
          <h2
            className="
              font-playfair
              text-[42px]
              leading-[1.1]
              font-bold
              text-[#0B1120]
              mb-5
            "
          >
            Book Your Demo
          </h2>

          {/* TEXT */}
          <p
            className="
              text-[#5E6E90]
              leading-[30px]
              text-[15px]
              mb-10
            "
          >
            Fill in your details and one of our experts will
            reach out within 24 hours to schedule your
            personalized walkthrough.
          </p>

          {/* FORM */}
          {/* FORM */}
<form
  className="space-y-7"

  onSubmit={async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    setSuccess(false);

    const form =
      e.currentTarget;

    const formData =
      new FormData(form);

    try {

      const res = await fetch(
        "/api/demo",
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (data.success) {

        setSuccess(true);

        form.reset();

      } else {

        setError(
          data.message ||
          "Something went wrong."
        );
      }

    } catch (err) {

      setError(
        "Failed to submit form."
      );
    }

    setLoading(false);
  }}
>

  {/* SUCCESS MESSAGE */}
  {success && (

    <div
      className="
        rounded-[24px]

        border
        border-green-200

        bg-gradient-to-r
        from-green-50
        to-emerald-50

        px-6
        py-5

        shadow-[0_10px_30px_rgba(34,197,94,0.08)]

        animate-in
        fade-in
        slide-in-from-top-2
        duration-500
      "
    >

      <div className="flex items-start gap-4">

        {/* ICON */}
        <div
          className="
            w-12
            h-12

            rounded-2xl

            bg-green-100

            flex
            items-center
            justify-center

            shrink-0
          "
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>

        </div>

        {/* TEXT */}
        <div>

          <h3
            className="
              text-[#0B1120]
              font-semibold
              text-[18px]
              mb-1
            "
          >
            Demo Request Submitted
          </h3>

          <p
            className="
              text-[#5E6E90]
              leading-[28px]
              text-[14px]
            "
          >
            Thank you for contacting ACME Global.
            Our enterprise solutions team will
            reach out within 24 hours.
          </p>

        </div>

      </div>

    </div>
  )}

  {/* ERROR MESSAGE */}
  {error && (

    <div
      className="
        rounded-[20px]

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

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-5">

    <div>

      <label className="block text-[#0B1120] font-semibold mb-3">
        Name *
      </label>

      <input
        type="text"
        name="name"
        placeholder="Your full name"
        required

        className="
          w-full
          placeholder:text-[#9BA8C0]
          text-[#0B1120]
          bg-[#F7F9FD]

          border
          border-[#E3E8F3]

          rounded-2xl

          px-5
          py-4

          outline-none

          transition-all
          duration-300

          focus:border-[#1A4FD6]
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>

    <div>

      <label className="block text-[#0B1120] font-semibold mb-3">
        Company Name *
      </label>

      <input
        type="text"
        name="company"
        placeholder="Your organisation"
        required

        className="
          w-full
          placeholder:text-[#9BA8C0]
          text-[#0B1120]
          bg-[#F7F9FD]

          border
          border-[#E3E8F3]

          rounded-2xl

          px-5
          py-4

          outline-none

          transition-all
          duration-300

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

      <label className="block text-[#0B1120] font-semibold mb-3">
        Phone Number
      </label>

      <input
        type="text"
        name="phone"
        placeholder="+91 / +973 / +965"

        className="
          w-full
          placeholder:text-[#9BA8C0]
          text-[#0B1120]
          bg-[#F7F9FD]

          border
          border-[#E3E8F3]

          rounded-2xl

          px-5
          py-4

          outline-none

          transition-all
          duration-300

          focus:border-[#1A4FD6]
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>

    <div>

      <label className="block text-[#0B1120] font-semibold mb-3">
        Email Address *
      </label>

      <input
        type="email"
        name="email"
        placeholder="you@company.com"
        required

        className="
          w-full
          placeholder:text-[#9BA8C0]
          text-[#0B1120]
          bg-[#F7F9FD]

          border
          border-[#E3E8F3]

          rounded-2xl

          px-5
          py-4

          outline-none

          transition-all
          duration-300

          focus:border-[#1A4FD6]
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>

  </div>

  {/* REQUIREMENTS */}
  <div>

    <label className="block text-[#0B1120] font-semibold mb-3">
      Requirements
    </label>

    <textarea
      rows={3}
      name="requirements"
      placeholder="Briefly describe your current challenges or what you'd like to see in the demo..."

      className="
        w-full
        placeholder:text-[#9BA8C0]
        text-[#0B1120]
        bg-[#F7F9FD]

        border
        border-[#E3E8F3]

        rounded-[24px]

        px-5
        py-5

        outline-none
        resize-none

        transition-all
        duration-300

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

      bg-[#1A4FD6]
      hover:bg-[#2E66FF]

      text-white
      font-semibold
      text-[17px]

      py-5

      rounded-2xl

      flex
      items-center
      justify-center
      gap-3

      transition-all
      duration-300

      disabled:opacity-70
      disabled:cursor-not-allowed

      shadow-[0_12px_30px_rgba(26,79,214,0.25)]
      hover:shadow-[0_18px_40px_rgba(26,79,214,0.35)]
    "
  >

    {loading
      ? "Submitting Request..."
      : "Submit Request"}

    {!loading && (
      <ArrowRight className="w-5 h-5" />
    )}

  </button>

  {/* FOOTER TEXT */}
  <p
    className="
      text-center
      text-[#6B7280]
      text-[12px]
      mt-5
    "
  >
    🔒 Your information is kept confidential and never shared with third parties.
  </p>

</form>

        </div>

      </div>

    </section>
  );
}