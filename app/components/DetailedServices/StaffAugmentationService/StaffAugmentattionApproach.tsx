"use client";

import Image from "next/image";

import {
  Clock3,
  Sparkles,
  Users,
  RefreshCcw,
  Blocks,
  Database,
} from "lucide-react";

const approaches = [
  {
    icon: Sparkles,

    title: "Expert Talent On-Demand",

    description:
      "Access highly skilled professionals across cloud, ERP, cybersecurity, infrastructure, and application development.",
  },

  {
    icon: Users,

    title: "Seamless Workforce Integration",

    description:
      "Ensure minimal disruption with structured onboarding, governance, and collaboration models.",
  },

  {
    icon: RefreshCcw,

    title: "Re-badging & Transition Services",

    description:
      "Smoothly transition employees during mergers, outsourcing, or restructuring initiatives while preserving business continuity.",
  },

  {
    icon: Blocks,

    title: "Flexible Engagement Models",

    description:
      "Scale teams up or down based on project needs, timelines, and budgets.",
  },

  {
    icon: Database,

    title: "Knowledge Retention & Continuity",

    description:
      "Maintain critical institutional knowledge during workforce changes and transitions.",
  },
];

export default function StaffAugmentationApproach() {
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

          items-start
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
              lg:h-[530px]

              rounded-[32px]

              overflow-hidden

              shadow-[0_24px_60px_rgba(0,0,0,0.08)]
            "
          >

            <Image
              src="/media/StaffAug_App.png"
              alt="Our Approach"
              fill
              className="object-cover"
            />

          </div>

        </div>

        {/* CONTENT */}
        <div>

          {/* EYEBROW */}
          <div className="flex items-center gap-3 mb-5">

            <Clock3
              className="
                w-4 h-4

                text-[#3F6BFF]
              "
            />

            <span
              className="
                uppercase

                tracking-[0.1em]

                text-[11px]
                md:text-[12px]

                font-bold

                text-[#3F6BFF]
              "
            >
              How WE WORK
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
              Approach
            </span>
          </h2>

          {/* CARDS */}
          <div className="mt-10 space-y-3">

            {approaches.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}

                  className="
                    group

                    flex items-start gap-5

                    rounded-[24px]

                    border border-[#E2E8F5]

                    bg-white

                    px-5 md:px-6
                    py-5 md:py-3

                    transition-all duration-300 ease-out

                    hover:border-[#3F6BFF]/35

                    hover:translate-x-[4px]

                    hover:shadow-[0_18px_45px_rgba(63,107,255,0.10)]
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      w-12 h-12

                      rounded-[10px]

                      bg-[#EEF3FF]

                      flex items-center justify-center

                      shrink-0
                    "
                  >

                    <Icon
                      className="
                        w-6 h-6

                        text-[#2E5BFF]
                      "
                    />

                  </div>

                  {/* TEXT */}
                  <div>

                    <h3
                      className="
                        font-playfair

                        text-[#111827]

                        text-[24px]
                        md:text-[16px]

                        leading-[1.2]

                        font-bold
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        text-[#667394]

                        text-[15px]
                        md:text-[14px]

                        leading-[21px]
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}