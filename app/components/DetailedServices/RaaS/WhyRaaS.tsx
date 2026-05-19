"use client";

import Image from "next/image";

import {
  Search,
  Check,
} from "lucide-react";

const benefits = [
  "Access to pre-vetted, high-quality IT talent",

  "Faster time-to-hire with structured sourcing models",

  "Flexible engagement aligned to hiring volume and urgency",

  "Reduced hiring risk with guaranteed replacement models",

  "Data-driven recruitment insights and market intelligence",

  "End-to-end support from sourcing to onboarding",
];

export default function WhyRaaS() {
  return (
    <section
      className="
        bg-[#F5F7FC]

        py-16 md:py-24 lg:py-28

        px-5 sm:px-6 lg:px-10

        overflow-hidden
      "
    >

      <div
        className="
          max-w-[1400px]
          mx-auto

          grid
          lg:grid-cols-2

          gap-14 lg:gap-20

          items-center
        "
      >

        {/* IMAGE */}
        <div className="relative">

          <div
            className="
              relative

              w-full

              h-[320px]
              sm:h-[420px]
              md:h-[520px]
              lg:h-[650px]

              rounded-[32px]

              overflow-hidden

              shadow-[0_24px_60px_rgba(0,0,0,0.08)]
            "
          >

            <Image
              src="/media/raas-team.jpg"
              alt="RaaS Team"
              fill
              className="object-cover"
            />

          </div>

        </div>

        {/* CONTENT */}
        <div>

          {/* EYEBROW */}
          <div className="flex items-center gap-3 mb-5">

            <Search
              className="
                w-4 h-4

                text-[#3F6BFF]
              "
            />

            <span
              className="
                uppercase

                tracking-[0.18em]

                text-[11px]
                md:text-[12px]

                font-bold

                text-[#3F6BFF]
              "
            >
              WHY RAAS WITH ACME GLOBAL HUB?
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[#0B1120]

              text-[38px]
              sm:text-[52px]
              lg:text-[32px]

              leading-[1.05]

              font-bold
            "
          >
            Why RaaS with{" "}

            <span className="text-[#3F6BFF]">
              ACME Global Hub?
            </span>
          </h2>

          {/* INTRO */}
          <div
            className="
              mt-8

              border-l-[4px]
              border-[#3F6BFF]

              pl-6
            "
          >

            <p
              className="
                text-[#667394]

                text-[16px]
                md:text-[16px]

                leading-[30px]
              "
            >
              We go beyond traditional recruitment by delivering end-to-end talent acquisition as a managed service:
            </p>

          </div>

          {/* BENEFITS */}
          <div className="mt-10 space-y-5">

            {benefits.map((item, index) => (

              <div
                key={index}

                className="
                  group

                  flex items-center gap-5

                  rounded-[22px]

                  border border-[#E4EAF7]

                  bg-white

                  px-5 md:px-4
                  py-3

                  transition-all duration-300 ease-out

                  hover:border-[#3F6BFF]/35

                  hover:translate-x-[4px]

                  hover:shadow-[0_18px_45px_rgba(63,107,255,0.10)]
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-10 h-10

                    rounded-2xl

                    bg-[#EEF3FF]

                    flex items-center justify-center

                    shrink-0
                  "
                >

                  <Check
                    className="
                      w-5 h-5

                      text-[#2F6BFF]
                    "
                  />

                </div>

                {/* TEXT */}
                <p
                  className="
                    text-[#111827]

                    text-[15px]
                    md:text-[15px]

                    leading-[20px]

                    font-medium
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}