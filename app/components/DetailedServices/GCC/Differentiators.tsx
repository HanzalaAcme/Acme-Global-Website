"use client";

import Image from "next/image";

import {
  Check,
  BadgeCheck,
} from "lucide-react";

const differentiators = [
  "End-to-End GCC Lifecycle Ownership (Build → Operate → Scale)",

  "Strong Talent Engine across high-demand IT and enterprise skills",

  "Multi-Cloud & Digital Transformation Expertise",

  "Proven GCC Enablement Approach for GCC Region Enterprises",

  "Faster Time-to-Value with Scalable Delivery Models",
];

export default function Differentiators() {
  return (
    <section
      className="
        bg-[#FFFFFF]

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

        {/* LEFT */}
        <div>

          {/* EYEBROW */}
          <div className="flex items-center gap-3 mb-5">

            <BadgeCheck
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
              OUR DIFFERENTIATORS
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[#0B1120]

              text-[38px]
              sm:text-[46px]
              lg:text-[40px]

              leading-[1.05]

              font-bold
            "
          >
            Our{" "}

            <span className="text-[#3F6BFF]">
              Differentiators
            </span>
          </h2>

          {/* CARDS */}
          <div className="mt-10 space-y-5">

            {differentiators.map((item, index) => (

              <div
                key={index}

                className="
                  group

                  flex items-center gap-3

                  rounded-[24px]

                  border border-[#E3E8F5]

                  bg-[#F4F6FB]

                  px-5 md:px-7
                  py-5 md:py-4

                  transition-all duration-300 ease-out

                  hover:border-[#3F6BFF]/30

                  hover:translate-x-[4px]

                  hover:shadow-[0_16px_40px_rgba(63,107,255,0.08)]
                "
              >

                {/* ICON BOX */}
                <div
                  className="
                    w-12 h-12

                    rounded-2xl

                    bg-[#EEF3FF]

                    flex items-center justify-center

                    shrink-0
                  "
                >

                  <Check
                    className="
                      w-6 h-6

                      text-[#2E5BFF]
                    "
                  />

                </div>

                {/* TEXT */}
                <p
                  className="
                    text-[#111827]

                    text-[16px]
                    md:text-[14px]

                    leading-[34px]

                    font-medium
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div
            className="
              relative

              w-full

              h-[340px]
              sm:h-[420px]
              md:h-[520px]
              lg:h-[620px]

              rounded-[32px]

              overflow-hidden

              shadow-[0_25px_60px_rgba(0,0,0,0.08)]
            "
          >

            <Image
              src="/media/gcc-differentiators.jpg"
              alt="Differentiators"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}