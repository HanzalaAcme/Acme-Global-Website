"use client";

import {
  Layers3,
  Brain,
  Cloud,
  Shield,
  Code2,
} from "lucide-react";

const models = [
  {
    icon: Brain,

    title: "AI & Data GCCs",

    description:
      "Machine Learning, Analytics, and AI-driven innovation",
  },

  {
    icon: Cloud,

    title: "Cloud Engineering GCCs",

    description:
      "AWS, Azure, DevOps, and cloud-native teams",
  },

  {
    icon: Shield,

    title: "Cybersecurity GCCs",

    description:
      "SOC operations, threat management, and compliance",
  },

  {
    icon: Code2,

    title: "Product Engineering GCCs",

    description:
      "Digital product development and innovation",
  },
];

export default function SpecializedGCCModels() {
  return (
    <section
      className="
        bg-[#F4F6FB]

        py-16 md:py-24 lg:py-20

        px-5 sm:px-6 lg:px-10

        overflow-hidden
      "
    >

      <div className="max-w-[1400px] mx-auto">

        {/* EYEBROW */}
        <div className="flex items-center gap-3 mb-5">

          <Layers3
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
            SPECIALIZED GCC MODELS
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
          Specialized{" "}

          <span className="text-[#3F6BFF]">
            GCC Models
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-8

            text-[#667394]

            text-[17px]
            md:text-[16px]

            leading-[38px]

            max-w-[920px]
          "
        >
          ACME Global also enables organizations to build
          domain-focused GCCs:
        </p>

        {/* CARDS */}
        <div
          className="
            mt-14

            grid
            md:grid-cols-2

            gap-6 lg:gap-4
          "
        >

          {models.map((model, index) => {
            const Icon = model.icon;

            return (
              <div
                key={index}

                className="
                  group

                  rounded-[24px]

                  border border-[#E3E8F5]

                  bg-white

                  px-6 md:px-8
                  py-7 md:py-8

                  flex items-start gap-5

                  transition-all duration-300 ease-out

                  hover:border-[#3F6BFF]/30

                  hover:translate-x-[4px]

                  hover:shadow-[0_18px_40px_rgba(63,107,255,0.08)]
                "
              >

                {/* ICON BOX */}
                <div
                  className="
                    w-14 h-14

                    rounded-2xl

                    bg-[#EEF3FF]

                    flex items-center justify-center

                    shrink-0
                  "
                >

                  <Icon
                    className="
                      w-7 h-7

                      text-[#2E5BFF]
                    "
                  />

                </div>

                {/* CONTENT */}
                <div>

                  <h3
                    className="
                      font-playfair

                      text-[#111827]

                      text-[18px]

                      leading-[1.2]

                      font-bold
                    "
                  >
                    {model.title}
                  </h3>

                  <p
                    className="
                      mt-3

                      text-[#667394]

                      text-[16px]
                      md:text-[14px]

                      leading-[25px]
                    "
                  >
                    {model.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}