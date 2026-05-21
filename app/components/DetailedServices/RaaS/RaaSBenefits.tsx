"use client";

import {
  Check,
  ChevronRight,
  Globe,
  Circle,
} from "lucide-react";

const businessBenefits = [
  "Scalable Hiring Models aligned to growth",

  "Faster Time-to-Hire with structured processes",

  "Cost Optimization through efficient sourcing",

  "Access to Top Talent Pools across technologies",

  "Reduced Hiring Risk with replacement guarantees",

  "Customized Screening for better candidate fit",

  "Expertise On-Demand without internal overhead",
];

const gccBenefits = [
  "Build strong IT and digital teams",

  "Support large-scale transformation programs",

  "Address niche and emerging skill gaps",

  "Improve hiring quality and retention",

  "Align workforce strategy with business growth",
];

const whyAcme = [
  "Strong GCC market expertise",

  "Deep IT and technology hiring specialization",

  "Extensive candidate network",

  "Proven delivery models with measurable outcomes",

  "Flexible engagement structures tailored to your needs",
];

export default function RaaSBusinessBenefits() {
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

          w-[650px]
          h-[700px]

          bg-[radial-gradient(circle_at_0%_50%,rgba(0,180,255,0.18),transparent_55%)]

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-[1450px] mx-auto">

        {/* TOP */}
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

                tracking-[0.1em]

                text-[11px]
                md:text-[12px]

                font-bold

                text-[#00D1B2]
              "
            >
              HIRING THAT WORKS FOR YOUR BUSINESS
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-white

              text-[36px]
              sm:text-[52px]
              lg:text-[40px]

              leading-[1.05]

              font-bold
            "
          >
            Key Business{" "}

            <span className="text-[#00D1B2]">
              Benefits
            </span>
          </h2>

          {/* BENEFITS GRID */}
          <div
            className="
              mt-8

              grid
              sm:grid-cols-2
              lg:grid-cols-4

              gap-5
            "
          >

            {businessBenefits.map((item, index) => (

              <div
                key={index}

                className="
                  group

                  rounded-[22px]

                  border border-white/10

                  bg-[rgba(20,28,50,0.88)]

                  px-3
                  py-3

                  flex items-start gap-4

                  transition-all duration-300 ease-out

                  hover:border-[#00D1B2]/35

                  hover:translate-x-[4px]

                  hover:shadow-[0_18px_45px_rgba(0,209,178,0.10)]
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-8 h-8

                    rounded-[10px]

                    bg-[#063C47]

                    flex items-center justify-center

                    shrink-0
                  "
                >

                  <Check
                    className="
                      w-3 h-3

                      text-[#00D1B2]
                    "
                  />

                </div>

                {/* TEXT */}
                <p
                  className="
                    text-white/88

                    text-[15px]
                    md:text-[14px]

                    leading-[30px]

                    font-medium
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 my-16 md:my-20" />

        {/* BOTTOM GRID */}
        <div
          className="
            grid
            lg:grid-cols-2

            gap-14 lg:gap-20
          "
        >

          {/* LEFT */}
          <div>

            {/* EYEBROW */}
            <div className="flex items-center gap-3 mb-5">

              <Globe
                className="
                  w-4 h-4

                  text-[#7AAFFF]
                "
              />

              <span
                className="
                  uppercase

                  tracking-[0.1em]

                  text-[11px]
                  md:text-[12px]

                  font-bold

                  text-[#7AAFFF]
                "
              >
                DESIGNED FOR YOUR REGION
              </span>

            </div>

            {/* HEADING */}
            <h2
              className="
                font-playfair

                text-white

                text-[34px]
                sm:text-[48px]
                lg:text-[40px]

                leading-[1.08]

                font-bold
              "
            >
              Built for{" "}

              <span className="text-[#7AAFFF]">
                GCC Enterprises
              </span>
            </h2>

            {/* PARAGRAPH */}
           {/* <p
              className="
                mt-5

                text-white/55

                text-[16px]
                md:text-[18px]

                leading-[36px]
              "
            >
              ACME Global understands the unique hiring challenges across Bahrain, Saudi Arabia, UAE, Qatar, Kuwait, and Oman.
            </p> */}

          {/*  <p
              className="
                mt-4

                text-white/55

                text-[16px]
                md:text-[18px]

                leading-[36px]
              "
            >
              We help organizations:
            </p> */}

            {/* LIST */}
            <div className="mt-8 space-y-5">

              {gccBenefits.map((item, index) => (

                <div
                  key={index}

                  className="
                    group

                    rounded-[22px]

                    border border-white/10

                    bg-[rgba(20,28,50,0.88)]

                    px-3
                    py-3

                    flex items-center gap-4

                    transition-all duration-300 ease-out

                    hover:border-[#7AAFFF]/40

                    hover:translate-x-[4px]

                    hover:shadow-[0_18px_45px_rgba(0,209,178,0.10)]
                  "
                >

                  <div
                    className="
                      w-8 h-8

                      rounded-xl

                      bg-[#102C68]

                      flex items-center justify-center

                      shrink-0
                    "
                  >

                    <ChevronRight
                      className="
                        w-4 h-4

                        text-[#7AAFFF]
                      "
                    />

                  </div>

                  <p
                    className="
                      text-white/88

                      text-[15px]
                      md:text-[16px]

                      leading-[30px]

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
          <div>

            {/* EYEBROW */}
            <div className="flex items-center gap-3 mb-5">

              <Circle
                className="
                  w-4 h-4

                  text-[#00B89C]
                "
              />

              <span
                className="
                  uppercase

                  tracking-[0.1em]

                  text-[11px]
                  md:text-[12px]

                  font-bold

                  text-[#00B89C]
                "
              >
                OUR EDGE
              </span>

            </div>

            {/* HEADING */}
            <h2
              className="
                font-playfair

                text-white

                text-[34px]
                sm:text-[48px]
                lg:text-[40px]

                leading-[1.08]

                font-bold
              "
            >
              Why {""}
              <span className="text-[#00B89C]">
                ACME Global HUB
              </span>
            </h2>

            {/* LIST */}
            <div className="mt-8 space-y-5">

              {whyAcme.map((item, index) => (

                <div
                  key={index}

                  className="
                    group

                    rounded-[22px]

                    border border-white/10

                    bg-[rgba(20,28,50,0.88)]

                    px-3
                    py-3

                    flex items-center gap-4

                    transition-all duration-300 ease-out

                    hover:border-[#00B89C]/40

                    hover:translate-x-[4px]

                    hover:shadow-[0_18px_45px_rgba(122,175,255,0.12)]
                  "
                >

                  <div
                    className="
                      w-8 h-8

                      rounded-xl

                      bg-[#00B89C]/30

                      flex items-center justify-center

                      shrink-0
                    "
                  >

                    <ChevronRight
                      className="
                        w-4 h-4

                        text-[#00B89C]
                      "
                    />

                  </div>

                  <p
                    className="
                      text-white/88

                      text-[15px]
                      md:text-[16px]

                      leading-[30px]

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

      </div>

    </section>
  );
}