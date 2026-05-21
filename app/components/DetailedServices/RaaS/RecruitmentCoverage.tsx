"use client";

import {
  CircleCheckBig,
} from "lucide-react";

const recruitmentCoverage = [
  {
    number: "01",
    title:
      "Talent Sourcing (Active & Passive Candidates)",
  },

  {
    number: "02",
    title:
      "Technical & Cultural Screening",
  },

  {
    number: "03",
    title:
      "Background Verification & Compliance Checks",
  },

  {
    number: "04",
    title:
      "Interview Coordination & Shortlisting",
  },

  {
    number: "05",
    title:
      "Offer Management & Negotiation",
  },

  {
    number: "06",
    title:
      "Onboarding Support",
  },
];

export default function ComprehensiveRecruitmentCoverage() {
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

          <CircleCheckBig
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
            FROM SOURCING TO ONBOARDING
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
          Comprehensive Recruitment{" "}

          <span className="text-[#3F6BFF]">
            Coverage
          </span>
        </h2>

        {/* SUBTEXT */}
        <p
          className="
            text-center

            mt-6

            text-[#667394]

            text-[16px]
            md:text-[16px]

            leading-[25px]
          "
        >
          Our RaaS solution covers the entire hiring lifecycle:
        </p>

        {/* GRID */}
        <div
          className="
            mt-10

            grid
            md:grid-cols-3
            xl:grid-cols-3

            gap-5
          "
        >

          {recruitmentCoverage.map((item, index) => (

            <div
              key={index}

              className="
                group

                rounded-[24px]

                border border-[#E2E8F5]

                bg-white

                px-6 md:px-4
                py-4

                flex items-center gap-5

                transition-all duration-300 ease-out

                hover:border-[#3F6BFF]/35

                hover:translate-x-[4px]

                hover:shadow-[0_18px_45px_rgba(63,107,255,0.10)]
              "
            >

              {/* NUMBER */}
              <div
                className="
                  w-12 h-12

                  rounded-2xl

                  bg-[#EEF3FF]

                  flex items-center justify-center

                  shrink-0
                "
              >

                <span
                  className="
                    text-[#2F6BFF]

                    text-[18px]

                    font-bold
                  "
                >
                  {item.number}
                </span>

              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[#111827]

                  text-[18px]
                  md:text-[16px]

                  leading-[25px]

                  font-medium
                "
              >
                {item.title}
              </h3>

            </div>

          ))}

        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-10

            rounded-[24px]

            border border-[#E2E8F5]

            bg-white

            px-6 md:px-10
            py-4

            relative

            overflow-hidden
          "
        >

          {/* LEFT ACCENT */}
          <div
            className="
              absolute

              left-0 top-0 bottom-0

              w-[5px]

              bg-[#00D1B2]
            "
          />

          <p
            className="
              text-center

              text-[#667394]

              text-[15px]
              md:text-[16px]

              leading-[25px]
            "
          >
            Additional services such as psychometric testing, aptitude assessments, and executive search for leadership roles can be integrated based on business needs.
          </p>

        </div>

      </div>

    </section>
  );
}