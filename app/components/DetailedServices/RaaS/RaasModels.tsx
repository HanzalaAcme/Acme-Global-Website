"use client";

import {
  BriefcaseBusiness,
  Check,
  Star,
  ChevronRight,
} from "lucide-react";

const models = [
  {
    type: "FLEXIBLE",

    icon: Check,

    title: "Pay for Success Model",

    description:
      "A low-risk, cost-effective approach for organizations with occasional or urgent hiring needs.",

    points: [
      "No upfront investment",
      "Pay only on successful placement",
      "Rapid sourcing for individual or project-based roles",
      "Ideal for budget-conscious hiring",
    ],

    border: "hover:border-[#2F6BFF]/40",

    shadow:
      "hover:shadow-[0_20px_45px_rgba(47,107,255,0.12)]",

    glow:
      "from-[#0B2C88]/25 via-[#112B63]/10 to-transparent",

    tagBg: "bg-[#17337A]",

    tagText: "text-[#7AAFFF]",
  },

  {
    type: "PREMIUM",

    icon: Star,

    title: "Committed Model",

    description:
      "A premium, high-performance recruitment model designed for organizations with ongoing or large-scale hiring needs.",

    points: [
      "Dedicated recruitment resources",
      "Faster turnaround and priority sourcing",
      "Access to both active and passive candidates",
      "Enhanced screening (technical + cultural fit)",
      "Lower cost per hire for high-volume recruitment",
    ],

    border: "hover:border-[#00D1B2]/40",

    shadow:
      "hover:shadow-[0_20px_45px_rgba(0,209,178,0.12)]",

    glow:
      "from-[#00D1B2]/20 via-[#0C3A47]/10 to-transparent",

    tagBg: "bg-[#083F48]",

    tagText: "text-[#00D1B2]",
  },
];

export default function RaaSModels() {
  return (
    <section
      className="
        relative

        bg-[#030B1F]

        py-16 md:py-24 lg:py-20

        px-5 sm:px-6 lg:px-10

        overflow-hidden
      "
    >


      {/* GLOW */}
      <div
        className="
          absolute

          left-0 top-0

          w-[650px]
          h-[700px]

          bg-[radial-gradient(circle_at_0%_50%,rgba(0,180,255,0.16),transparent_55%)]

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* EYEBROW */}
        <div className="flex items-center justify-center gap-3 mb-5">

          <BriefcaseBusiness
            className="
              w-4 h-4

              text-[#00D1B2]
            "
          />

          <span
            className="
              uppercase

              tracking-[0.18em]

              text-[11px]
              md:text-[12px]

              font-bold

              text-[#00D1B2]
            "
          >
            OUR RAAS MODELS
          </span>

        </div>

        {/* HEADING */}
        <h2
          className="
            text-center

            font-playfair

            text-white

            text-[38px]
            sm:text-[52px]
            lg:text-[40px]

            leading-[1.05]

            font-bold
          "
        >
          Our RaaS{" "}

          <span className="text-[#00D1B2]">
            Models
          </span>
        </h2>

        {/* CARDS */}
        <div
          className="
            mt-12

            grid
            lg:grid-cols-2

            gap-8
          "
        >

          {models.map((model, index) => {
            const Icon = model.icon;

            return (
              <div
                key={index}

                className={`
                  relative

                  rounded-[24px]

                  border border-white/10

                  bg-[rgba(15,24,48,0.92)]

                  p-7 md:p-10

                  overflow-hidden

                  transition-all duration-300 ease-out

                  hover:translate-x-[4px]

                  ${model.border}
                  ${model.shadow}
                `}
              >

                {/* INNER GLOW */}
                <div
                  className={`
                    absolute inset-0

                    bg-gradient-to-br
                    ${model.glow}

                    opacity-100

                    pointer-events-none
                  `}
                />

                <div className="relative z-10">

                  {/* TAG */}
                  <div
                    className={`
                      inline-flex

                      items-center gap-2

                      rounded-xl

                      px-4 py-2

                      ${model.tagBg}
                    `}
                  >

                    <Icon
                      className={`
                        w-4 h-4

                        ${model.tagText}
                      `}
                    />

                    <span
                      className={`
                        text-[12px]

                        tracking-[0.18em]

                        font-bold

                        uppercase

                        ${model.tagText}
                      `}
                    >
                      {model.type}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-7

                      font-playfair

                      text-white

                      text-[34px]
                      md:text-[28px]

                      leading-[1.1]

                      font-bold
                    "
                  >
                    {model.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                      mt-3

                      max-w-[95%]

                      text-white/60

                      text-[15px]
                      md:text-[15px]

                      leading-[25px]
                    "
                  >
                    {model.description}
                  </p>

                  {/* POINTS */}
                  <div className="mt-8 space-y-4">

                    {model.points.map((point, idx) => (

                      <div
                        key={idx}

                        className="
                          flex items-start gap-4
                        "
                      >

                        <div
                          className="
                            w-7 h-7

                            rounded-[10px]

                            bg-white/5

                            border border-white/5

                            flex items-center justify-center

                            shrink-0

                            mt-[1px]
                          "
                        >

                          <ChevronRight
                            className={`
                              w-4 h-4

                              ${model.tagText}
                            `}
                          />

                        </div>

                        <p
                          className="
                            text-white/78

                            text-[15px]
                            md:text-[14px]

                            leading-[20px]
                          "
                        >
                          {point}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}