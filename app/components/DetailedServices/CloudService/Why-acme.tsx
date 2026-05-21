"use client";

import { Star, Check } from "lucide-react";

const points = [
  "Strategic cloud advisory aligned to business goals",
  "Seamless migration from on-premise to cloud",
  "Multi-cloud and hybrid cloud architecture expertise",
  "24x7 managed cloud operations and support",
  "Security, governance, backup & disaster recovery",
  "Cost optimization and performance management",
  "Industry-specific solutions for BFSI, Retail, Healthcare, Manufacturing & Government",
  "Faster time-to-value with scalable cloud transformation programs",
];

export default function WhyChooseAcme() {
  return (
    <section
      className="
        bg-[#F4F6FB]

        py-[100px]
        px-6
        lg:px-20

        relative
        overflow-hidden
      "
    >

      {/* RIGHT GRADIENT */}
      <div
        className="
          absolute
          right-0
          top-0

          w-[600px]
          h-[600px]

          bg-[radial-gradient(circle_at_100%_20%,rgba(0,180,255,0.18),transparent_60%)]
        "
      />

      <div className="max-w-[1300px] mx-auto relative z-10">

        {/* TOP HEADER */}
        <div className="text-center mb-16">

          {/* LABEL */}
          <div
            className="
              inline-flex
              items-center
              gap-2

              text-[#2E66FF]

              text-[12px]
              tracking-[1px]

              font-bold
              uppercase

              mb-5
            "
          >
            <Star className="w-4 h-4" />

            <span>
              Trusted by Enterprises Across the GCC
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[36px]
              md:text-[42px]

              leading-[1.2]

              font-extrabold

              text-[#0B1120]
            "
          >
            Why{" "}

            <span className="text-[#2E66FF]">
              ACME Global Hub?
            </span>

          </h2>

        </div>

        {/* GRID */}
        <div
          className="
            grid

            md:grid-cols-2
            xl:grid-cols-4

            gap-3
          "
        >

          {points.map((item, i) => (

            <div
              key={i}

              className="
                group


                flex
                items-start
                gap-4

                bg-white

                border
                border-[#E8EEF9]

                rounded-[20px]

                p-4

                transition-all
                duration-300

                hover:border-[#1A4FD6]
                hover:bg-[#F8FBFF]

                hover:shadow-[0_12px_35px_rgba(26,79,214,0.10)]
              "
            >

              {/* ICON */}
              <div
                    className="
                      w-11
                      h-11

                      rounded-[12px]

                      bg-[#1A4FD6]/10

                      flex
                      items-center
                      justify-center

                      shrink-0

                      transition-all
                      duration-300

                      group-hover:bg-[#1A4FD6]/15
                    "
                  >

                <Check
                  className="
                    w-5
                    h-5

                    text-[#1A4FD6]

                    stroke-[3]
                  "
                />

              </div>

              {/* TEXT */}
              <p
                  className="
                    text-[#2C3550]

                    text-[15px]
                    leading-[28px]

                    font-medium

                    pt-[2px]
                  "
                >
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}