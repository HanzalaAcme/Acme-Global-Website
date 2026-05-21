"use client";

import {
  CircleCheckBig,
  BriefcaseBusiness,
} from "lucide-react";

const deliverCards = [
  {
    title:
      "Virtual Machines and Infrastructure Services",
       icon: CircleCheckBig,
  },

  {
    title:
      "Azure Kubernetes Service (AKS)",
        icon: CircleCheckBig,
  },

  {
    title:
      "Azure SQL Database and Managed Databases",
        icon: CircleCheckBig,
  },

  {
    title:
      "Storage, Backup, and Disaster Recovery",
        icon: CircleCheckBig,
  },

  {
    title:
      "Identity and Access Management (Microsoft Entra ID)",
        icon: CircleCheckBig,
  },

  {
    title:
      "Analytics and Data Platform",
        icon: CircleCheckBig,
  },

  {
    title:
      "Artificial Intelligence and Machine Learning",
        icon: CircleCheckBig,
  },

  {
    title:
      "Azure DevOps and CI/CD Automation",
        icon: CircleCheckBig,
  },

  {
    title:
      "Security, Governance, and Compliance",
        icon: CircleCheckBig,
  },
];

export default function AzureDeliver() {
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

              text-[#2E66FF]
            "
          />

          <span
            className="
              uppercase

              tracking-[0.18em]

              text-[11px]
              md:text-[12px]

              font-bold

              text-[#2E66FF]
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
          Key Microsoft Azure Cloud Services{" "}

          <span className="text-[#2E66FF]">
            We Deliver
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

                  rounded-[20px]

                  border border-[#E2E8F5]

                  bg-white

                  p-8 md:p-6

                  transition-all duration-300 ease-out

                  hover:border-[#0078D4]/35

                  hover:translate-x-[4px]

                  hover:shadow-[0_18px_45px_rgba(0,120,212,0.1)]
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-[50px]
                    h-[50px]

                    rounded-2xl

                    bg-[#0078D4]/10

                    flex items-center justify-center
                  "
                >

                  <Icon
                    className="
                      w-6 h-6

                      text-[#0078D4]
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
                    md:text-[17px]

                    leading-[1.2]

                    font-bold
                  "
                >
                  {card.title}
                </h3>


              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}