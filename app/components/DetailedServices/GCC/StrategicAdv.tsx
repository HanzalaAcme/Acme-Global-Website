"use client";

import Image from "next/image";

import {
  Star,
  Activity,
} from "lucide-react";

const benefits = [
  "Access deep talent pools across AI, Cloud, Data, and Engineering",

  "Drive innovation at scale with dedicated teams",

  "Optimize operational costs without compromising quality",

  "Enable 24/7 global delivery models",

  "Build long-term strategic capabilities — not just outsource",
];

export default function GCCStrategicAdvantage() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#F4F6FB]

        py-16 md:py-24 lg:py-28

        px-5 sm:px-6 lg:px-10
      "
    >

      {/* CONTAINER */}
      <div
        className="
          max-w-[1400px]
          mx-auto

          grid
          lg:grid-cols-2

          gap-12 lg:gap-20

          items-center
        "
      >

        {/* LEFT IMAGE */}
        <div
          className="
            relative

            order-2 lg:order-1
          "
        >

          {/* IMAGE WRAPPER */}
          <div
            className="
              relative

              w-full
              h-[340px]
              sm:h-[420px]
              md:h-[520px]
              lg:h-[620px]

              rounded-[30px]

              overflow-hidden

              shadow-[0_25px_60px_rgba(0,0,0,0.08)]
            "
          >

            <Image
              src="/media/gcc-team.jpg"
              alt="GCC Strategic Advantage"
              fill
              priority
              className="object-cover"
            />

          </div>

          {/* FLOATING CARD */}
          <div
            className="
              absolute

              left-5
              bottom-5

              md:left-8
              md:bottom-8

              backdrop-blur-xl

              bg-white/20

              border border-white/30

              rounded-[24px]

              px-5 py-4
              md:px-7 md:py-5

              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            "
          >

            <h3
              className="
                text-white

                font-playfair

                text-[34px]
                md:text-[46px]

                leading-none

                font-bold
              "
            >
              1700+
            </h3>

            <p
              className="
                text-white/90

                text-[13px]
                md:text-[16px]

                mt-2

                leading-[24px]
              "
            >
              Global Capability Centers in India
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            order-1 lg:order-2
          "
        >

          {/* EYEBROW */}
          <div
            className="
              flex items-center gap-3

              mb-5
            "
          >

            <Star
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
              WHY GCCS ARE A STRATEGIC ADVANTAGE
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[#0B1120]

              text-[38px]
              sm:text-[40px]
              lg:text-[40px]

              leading-[1.05]

              font-bold
            "
          >
            Why GCCs Are a{" "} <br />

            <span className="text-[#3F6BFF]">
              Strategic Advantage
            </span>
          </h2>

          {/* PARAGRAPH */}
          <p
            className="
              mt-8

              text-[#4B587C]

              text-[15px]
              md:text-[16px]

              leading-[34px]

              max-w-[760px]
            "
          >
            India hosts 1700+ Global Capability Centers,
            making it one of the world's most powerful hubs
            for technology, innovation, and enterprise
            operations.
          </p>

          <p
            className="
              mt-5

              text-[#2C3550]

              text-[17px]
              md:text-[18px]

              font-medium

              leading-[34px]
            "
          >
            By establishing a GCC, organizations can:
          </p>

          {/* LIST */}
          <div
            className="
              mt-8

              space-y-5
            "
          >

            {benefits.map((item, index) => (

              <div
                key={index}

                className="
                  group

                  flex items-start gap-4

                  transition-all duration-300

                  
                "
              >

                {/* DOT */}
                <div
                  className="
                    w-3 h-3

                    rounded-full

                    bg-[#3F6BFF]

                    mt-[10px]

                    shrink-0

                    transition-all duration-300

                    
                    group-hover:shadow-[0_0_18px_rgba(63,107,255,0.45)]
                  "
                />

                {/* TEXT */}
                <p
                  className="
                    text-[#35425E]

                    text-[15px]
                    md:text-[16px]

                    leading-[25px]
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

          {/* BOTTOM HIGHLIGHT BOX */}
          <div
            className="
              mt-10

              rounded-[20px]

              border border-[#9EE2D7]

              bg-[#00B89C]/22

              px-5 py-5
              md:px-5 md:py-5

              flex items-center gap-4

              transition-all duration-300

              hover:shadow-[0_14px_40px_rgba(0,180,150,0.12)]
            "
          >

            {/* ICON */}
            <div
              className="
                w-11 h-11

                rounded-xl

                bg-white/70

                flex items-center justify-center

                shrink-0
              "
            >

              <Activity
                className="
                  w-5 h-5

                  text-[#00A88B]
                "
              />

            </div>

            {/* TEXT */}
            <p
              className="
                text-[#006B58]

                text-[15px]
                md:text-[15px]

                font-bold

                leading-[30px]
              "
            >
              GCCs are no longer cost centers — they are
              innovation engines.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}