"use client";

import {
  BriefcaseBusiness,
  CircleCheck,
  RefreshCcw,
  Users,
  MoveUpRight,
  ChartColumn,
} from "lucide-react";

const deliverCards = [
  {
    title:
      "End-to-End ERP Implementation",

    description:
      "From consulting and solution design to deployment and user adoption, we ensure seamless ERP rollouts aligned to your business goals.",

    icon: CircleCheck,
  },

  {
    title:
      "ERP Modernization & Migration",

    description:
      "Upgrade legacy systems or transition to cloud-based ERP platforms with minimal disruption and maximum efficiency.",

    icon: RefreshCcw,
  },

  {
    title:
      "CRM & Customer Experience Platforms",

    description:
      "Enhance customer engagement through intelligent CRM solutions integrated with your ERP ecosystem.",

    icon: Users,
  },

  {
    title:
      "Integration & Customization",

    description:
      "Seamlessly integrate ERP with existing systems including HRMS, banking, analytics, and third-party applications.",

    icon: MoveUpRight,
  },

  {
    title:
      "Analytics & Decision Intelligence",

    description:
      "Leverage tools like Power BI and advanced reporting frameworks to gain real-time insights into business performance.",

    icon: ChartColumn,
  },
];

export default function ERPWhatWeDeliver() {
  return (
    <section
      className="
        bg-[#F5F7FC]

        py-16 md:py-24 lg:py-20

        px-5 sm:px-6 lg:px-10

        overflow-hidden
      "
    >

      <div className="max-w-[1450px] mx-auto">

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
            WHAT WE DELIVER
          </span>

        </div>

        {/* HEADING */}
        <h2
          className="
            text-center

            font-playfair

            text-[#0B1120]

            text-[36px]
            sm:text-[52px]
            lg:text-[40px]

            leading-[1.05]

            font-bold
          "
        >
          What We{" "}

          <span className="text-[#00D1B2]">
            Deliver
          </span>
        </h2>

        {/* GRID */}
        <div
          className="
            mt-10

            grid
            md:grid-cols-3
            xl:grid-cols-3

            gap-6
          "
        >

          {deliverCards.map((card, index) => {

            const Icon = card.icon;

            return (

              <div
                key={index}

                className="
                  group

                  rounded-[28px]

                  border border-[#E2E8F5]

                  bg-white

                  p-8 md:p-9

                  min-h-[280px]

                  transition-all duration-300 ease-out

                  hover:border-[#00D1B2]/35

                  hover:translate-x-[4px]

                  hover:shadow-[0_18px_45px_rgba(0,209,178,0.10)]
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-[50px]
                    h-[50px]

                    rounded-2xl

                    bg-[#EEF3FF]

                    flex items-center justify-center
                  "
                >

                  <Icon
                    className="
                      w-6 h-6

                      text-[#3F6BFF]
                    "
                  />

                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-4

                    font-playfair

                    text-[#0B1120]

                    text-[28px]
                    md:text-[18px]

                    leading-[1.1]

                    font-bold
                  "
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5

                    text-[#667394]

                    text-[15px]
                    md:text-[15px]

                    leading-[28px]
                  "
                >
                  {card.description}
                </p>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}