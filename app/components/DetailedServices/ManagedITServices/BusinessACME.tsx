"use client";

import {
  Check,
  ChevronRight,
  BadgeCheck,
  Target,
} from "lucide-react";

const benefits = [
  "Reduced downtime and improved uptime",
  "Lower IT operational costs",
  "Enhanced cybersecurity posture",
  "Predictable IT performance and SLA-driven delivery",
  "Scalable IT operations aligned to business growth",
];

const whyAcme = [
  "GCC-focused delivery expertise",
  "Certified multi-cloud and infrastructure specialists",
  "Proven methodologies and automation-driven operations",
  "Customer-centric and outcome-focused approach",
];

export default function BusinessBenefits() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#020B24]

        py-16 md:py-20
        px-5 md:px-8 lg:px-10
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          left-0
          bottom-0

          w-[420px]
          h-[420px]

          bg-[radial-gradient(circle,rgba(0,200,180,0.12),transparent_70%)]

          blur-3xl
        "
      />

      <div className="relative z-10 max-w-[1450px] mx-auto">

        <div
          className="
            grid
            lg:grid-cols-2

            gap-14 lg:gap-16

            relative
          "
        >

          {/* VERTICAL LINE DESKTOP */}
          <div
            className="
              hidden lg:block

              absolute
              left-1/2
              top-0

              -translate-x-1/2

              w-[1px]
              h-full

              bg-white/10
            "
          />

          {/* LEFT */}
          <div>

            {/* EYEBROW */}
            <div className="flex items-center gap-3 mb-5">

              <BadgeCheck className="w-4 h-4 text-[#00C8B4]" />

              <span
                className="
                  uppercase
                  tracking-[0.1em]

                  text-[11px]
                  md:text-[12px]

                  font-bold

                  text-[#00C8B4]
                "
              >
                THE IMPACT WE CREATE
              </span>

            </div>

            {/* HEADING */}
            <h2
              className="
                font-playfair

                text-white

                text-[34px]
                md:text-[40px]

                leading-[1.08]

                font-bold

                mb-8 md:mb-10
              "
            >
              Business{" "}

              <span className="text-[#00D5C0]">
                Benefits
              </span>
            </h2>

            {/* CARDS */}
            <div className="space-y-4">

              {benefits.map((item, index) => (

                <div
                  key={index}

                 className="
                    group

                    flex items-center gap-4

                    rounded-[22px]

                    border border-white/10

                    bg-white/[0.04]

                    backdrop-blur-sm

                    px-4 md:px-5
                    py-3

                    transition-all duration-300 ease-out

                    hover:border-[#00D5C0]/40

                    hover:bg-[#0A1D2D]

                    hover:translate-x-[4px]

                    hover:shadow-[0_12px_35px_rgba(0,213,192,0.12)]
                    "
                >

                  {/* ICON */}
                  <div
                    className="
                      w-11 h-11
                      md:w-12 md:h-12

                      rounded-xl

                      bg-[#003F4A]

                      flex items-center justify-center

                      shrink-0
                    "
                  >
                    <Check className="w-5 h-5 text-[#00D5C0]" />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      text-white/85

                      text-[15px]
                      md:text-[17px]

                      leading-[28px]
                    "
                  >
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* HORIZONTAL LINE MOBILE */}
          <div
            className="
              lg:hidden

              w-full
              h-[1px]

              bg-white/10
            "
          />

          {/* RIGHT */}
          <div>

            {/* EYEBROW */}
            <div className="flex items-center gap-3 mb-5">

              <Target className="w-4 h-4 text-[#3B63FF]" />

              <span
                className="
                  uppercase
                  tracking-[0.18em]

                  text-[11px]
                  md:text-[12px]

                  font-bold

                  text-[#7AAFFF]
                "
              >
                WHAT SETS US APART
              </span>

            </div>

            {/* HEADING */}
            <h2
              className="
                font-playfair

                text-white

                text-[34px]
                md:text-[40px]

                leading-[1.08]

                font-bold

                mb-8 md:mb-10
              "
            >
              Why{" "}

              <span className="text-[#7AAFFF]">
                ACME Global Hub
              </span>
            </h2>

            {/* CARDS */}
            <div className="space-y-4">

              {whyAcme.map((item, index) => (

                <div
                  key={index}

                  className="
                group

                flex items-center gap-4

                rounded-[22px]

                border border-white/10

                bg-white/[0.04]

                backdrop-blur-sm

                px-4 md:px-5
                py-3

                transition-all duration-300 ease-out

                hover:border-[#3B63FF]/40

                hover:bg-[#0B1736]

                
                hover:translate-x-[4px]

                hover:shadow-[0_12px_35px_rgba(59,99,255,0.14)]
                "
                >

                  {/* ICON */}
                  <div
                    className="
                      w-11 h-11
                      md:w-12 md:h-12

                      rounded-xl

                      bg-[#11275F]

                      flex items-center justify-center

                      shrink-0
                    "
                  >
                    <ChevronRight className="w-5 h-5 text-[#7AAFFF]" />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      text-white/85

                      text-[15px]
                      md:text-[17px]

                      leading-[28px]
                    "
                  >
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}