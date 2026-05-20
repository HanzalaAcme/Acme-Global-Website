"use client";

import {
  CircleCheckBig,
  BriefcaseBusiness,
} from "lucide-react";

const deliverCards = [
  {
    title:
      "Oracle Cloud Infrastructure (OCI)",
       icon: CircleCheckBig,
  },

  {
    title:
      "Oracle Autonomous Database",
        icon: CircleCheckBig,
  },

  {
    title:
      "Oracle Database Cloud Service",
        icon: CircleCheckBig,
  },

  {
    title:
      "Oracle Fusion Cloud Applications",
        icon: CircleCheckBig,
  },

  {
    title:
      "Oracle E-Business Suite on OCI",
        icon: CircleCheckBig,
  },

  {
    title:
      "Oracle Analytics Cloud",
        icon: CircleCheckBig,
  },

  {
    title:
      "Oracle APEX Development and Deployment",
        icon: CircleCheckBig,
  },

  {
    title:
      "Backup, Disaster Recovery, and High Availability",
        icon: CircleCheckBig,
  },

];

export default function OCIDeliver() {
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
          Key Oracle Cloud Services{" "}

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