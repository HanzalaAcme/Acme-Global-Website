"use client";

import {
  Check,
  Circle,
  Target,
} from "lucide-react";

const benefits = [
  "Modernize legacy applications and infrastructure",

  "Improve resilience, scalability, and performance",

  "Strengthen cybersecurity and regulatory compliance",

  "Accelerate AI and analytics initiatives",

];

const idealFor = [
  "Certified Azure architects and engineers",

  "Expertise in Microsoft workloads and hybrid cloud",

  "End-to-end migration, implementation, and managed services",

  "24x7 monitoring, optimization, and support",

  "Proven delivery across diverse industries in the GCC",
];

export default function AzureBenefits() {
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


      {/* LEFT GLOW */}
      <div
        className="
          absolute

          left-0 top-0

          w-[600px]
          h-[700px]

          bg-[radial-gradient(circle_at_0%_50%,rgba(0,180,255,0.18),transparent_55%)]

          pointer-events-none
        "
      />

      <div
        className="
          relative z-10

          max-w-[1400px]
          mx-auto

          grid
          lg:grid-cols-2

          gap-14 lg:gap-20
        "
      >

        {/* LEFT */}
        <div>

          {/* EYEBROW */}
          <div className="flex items-center gap-3 mb-5">

            <Check
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
              HOW IT HELPS YOU
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-white

              text-[38px]
              sm:text-[46px]
              lg:text-[32px]

              leading-[1.05]

              font-bold
            "
          >
            Business{" "}

            <span className="text-[#00D1B2]">
              Benefits
            </span>
          </h2>

          {/* BENEFITS */}
          <div className="mt-8 space-y-5">

            {benefits.map((item, index) => (

              <div
                key={index}

                className="
                  group

                  flex items-center gap-5

                  rounded-[20px]

                  border border-white/10

                  bg-[rgba(20,28,50,0.88)]

                  px-5 md:px-6
                  py-5 md:py-2

                  transition-all duration-300 ease-out

                  hover:border-[#00D1B2]/35

                  hover:translate-x-[4px]

                  hover:shadow-[0_18px_45px_rgba(0,209,178,0.10)]
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-10 h-10

                    rounded-[10px]

                    bg-[#063C47]

                    flex items-center justify-center

                    shrink-0
                  "
                >

                  <Check
                    className="
                      w-5 h-5

                      text-[#00D1B2]
                    "
                  />

                </div>

                {/* TEXT */}
                <p
                  className="
                    text-white/90

                    text-[16px]
                    md:text-[16px]

                    leading-[25px]

                    font-medium
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div
          className="
            lg:pl-10

            lg:border-l

            lg:border-white/10
          "
        >

          {/* EYEBROW */}
          <div className="flex items-center gap-3 mb-5">

            <Target
              className="
                w-4 h-4

                text-[#6EA8FF]
              "
            />

            <span
              className="
                uppercase

                tracking-[0.18em]

                text-[11px]
                md:text-[12px]

                font-bold

                text-[#6EA8FF]
              "
            >
              THE ACME ADVANTAGE
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-white

              text-[38px]
              sm:text-[46px]
              lg:text-[32px]

              leading-[1.05]

              font-bold
            "
          >
            Why Choose {" "}

            <span className="text-[#7AAFFF]">
              ACME Global Hub
            </span>
          </h2>

          {/* CARDS */}
          <div className="mt-8 space-y-5">

            {idealFor.map((item, index) => (

              <div
                key={index}

                className="
                  group

                  flex items-center gap-5

                  rounded-[20px]

                  border border-white/10

                  bg-[rgba(20,28,50,0.88)]

                  px-5 md:px-6
                  py-5 md:py-2

                  transition-all duration-300 ease-out

                  hover:border-[#6EA8FF]/35

                  hover:translate-x-[4px]

                  hover:shadow-[0_18px_45px_rgba(110,168,255,0.10)]
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-10 h-10

                    rounded-[10px]

                    bg-[#102C68]

                    flex items-center justify-center

                    shrink-0
                  "
                >

                  <span
                    className="
                      text-[#7AAFFF]

                      text-[22px]

                      leading-none
                    "
                  >
                    ›
                  </span>

                </div>

                {/* TEXT */}
                <p
                  className="
                    text-white/90

                    text-[16px]
                    md:text-[16px]

                    leading-[25px]

                    font-medium
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}