"use client";

import {
  CircleCheckBig,
  BriefcaseBusiness,
} from "lucide-react";

const deliverCards = [
  {
    title:
      "Compute Engine",
       icon: CircleCheckBig,
  },

  {
    title:
      "Google Kubernetes Engine (GKE)",
        icon: CircleCheckBig,
  },

  {
    title:
      "Cloiud Storage",
        icon: CircleCheckBig,
  },

  {
    title:
      "Cloud SQL and Managed Databases",
        icon: CircleCheckBig,
  },

  {
    title:
      "BigQuery Analytics",
        icon: CircleCheckBig,
  },

  {
    title:
      "Vertex AI and Machine Learning",
        icon: CircleCheckBig,
  },

  {
    title:
      "Identity and Access Management (IAM)",
        icon: CircleCheckBig,
  },

  {
    title:
      "Backup and Disaster Recovery",
        icon: CircleCheckBig,
  },

  {
    title:
      "DevOps and Automation",
        icon: CircleCheckBig,
  },
];

export default function GCPDeliver() {
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
          Key Google Cloud Services{" "}

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

                  hover:border-[#FF9900]/35

                  hover:translate-x-[4px]

                  hover:shadow-[0_18px_45px_rgba(255,153,0,0.08)]
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-[50px]
                    h-[50px]

                    rounded-2xl

                    bg-[#FF9900]/10

                    flex items-center justify-center
                  "
                >

                  <Icon
                    className="
                      w-6 h-6

                      text-[#FF9900]
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