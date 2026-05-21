"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sun, Star, Globe } from "lucide-react";

export default function MissionVision() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#F4F6FB]

        py-[70px]
        sm:py-[85px]
        lg:py-[100px]

        px-6
        sm:px-8
        lg:px-12
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-[-180px]
          right-[-180px]

          w-[420px]
          h-[420px]

          bg-[#2E66FF]/5
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-[1180px] mx-auto">

        {/* TOP LABEL */}
        <div
          className="
            flex
            justify-center
            items-center
            gap-2

            text-[#2E66FF]
            text-[12px]
            sm:text-[13px]

            font-semibold
            tracking-[1.5px]
            uppercase

            mb-4
          "
        >

          <Sun className="w-4 h-4 sm:w-5 sm:h-5" />

          <span>Our Approach</span>

        </div>

        {/* HEADING */}
        <h2
          className="
            text-center
            font-playfair

            text-[30px]
            sm:text-[38px]
            lg:text-[48px]

            leading-[1.2]
            font-extrabold

            mb-14
            lg:mb-20
          "
        >

          <span className="text-[#0B1120]">
            Securing Digital Trust,
          </span>

          <br className="hidden sm:block" />

          <span className="text-[#2E66FF]">
            {" "}Empowering Your Business Future
          </span>

        </h2>

        {/* MAIN GRID */}
        <div
          className="
            grid
            lg:grid-cols-[0.95fr_1.05fr]

            gap-10
            lg:gap-[70px]

            items-center
          "
        >

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-5">

            <h4 className="text-[16px] text-[#0B1120]/80 font-semibold leading-[1.4] ">
              We believe technology should do more than solve today's problems; it should create tomorrow's opportunities.  
              Our approach combines strategic thinking, proven delivery, and long-term partnership to help organizations across the GCC modernize with confidence and grow without limits.
            </h4>

            

            {/* CARD 1 */}
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ duration: 0.22 }}
              className="
                group

                bg-white
                border border-[#E6EAF2]

                rounded-[22px]

                p-5
                sm:p-6

                flex
                gap-4
                sm:gap-5

                cursor-pointer

                hover:border-[#1A4FD6]
                hover:shadow-[0_12px_28px_rgba(26,79,214,0.12)]

                transition-all duration-300
              "
            >

              {/* ICON */}
              <div
                className="
                  w-[52px]
                  h-[52px]

                  sm:w-[56px]
                  sm:h-[56px]

                  rounded-2xl

                  bg-[#1A4FD6]/10

                  flex
                  items-center
                  justify-center

                  shrink-0
                "
              >

                <Globe className="w-5 h-5 text-[#1A4FD6]" />

              </div>

              {/* CONTENT */}
              <div>

                <h3
                  className="
                    font-playfair
                    text-[18px]
                    sm:text-[20px]

                    font-bold
                    text-[#0B1120]
                  "
                >
                  Our Vision
                </h3>

                <p
                  className="
                    text-[14px]
                    sm:text-[15px]

                    text-[#5E6E90]

                    mt-2

                    leading-[1.9]

                    max-w-[440px]
                  "
                >
                  To be the regional leader by setting
                  benchmarks for superior quality products,
                  innovative services, long-term partnerships,
                  and customer satisfaction.
                </p>

              </div>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ duration: 0.22 }}
              className="
                group

                bg-white
                border border-[#E6EAF2]

                rounded-[22px]

                p-5
                sm:p-6

                flex
                gap-4
                sm:gap-5

                cursor-pointer

                hover:border-[#1A4FD6]
                hover:shadow-[0_12px_28px_rgba(26,79,214,0.12)]

                transition-all duration-300
              "
            >

              {/* ICON */}
              <div
                className="
                  w-[52px]
                  h-[52px]

                  sm:w-[56px]
                  sm:h-[56px]

                  rounded-2xl

                  bg-[#1A4FD6]/10

                  flex
                  items-center
                  justify-center

                  shrink-0
                "
              >

                <Star className="w-5 h-5 text-[#1A4FD6]" />

              </div>

              {/* CONTENT */}
              <div>

                <h3
                  className="
                    font-playfair
                    text-[18px]
                    sm:text-[20px]

                    font-bold
                    text-[#0B1120]
                  "
                >
                  Our Mission
                </h3>

                <p
                  className="
                    text-[14px]
                    sm:text-[15px]

                    text-[#5E6E90]

                    mt-2

                    leading-[1.9]

                    max-w-[440px]
                  "
                >
                  Our mission is to provide best-in-class
                  innovative solutions that meet client
                  objectives and their evolving business
                  requirements.
                </p>

              </div>

            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative

              w-full

              h-[280px]
              sm:h-[380px]
              lg:h-[460px]

              rounded-[28px]

              overflow-hidden

              shadow-[0_18px_50px_rgba(15,23,42,0.12)]
            "
          >

            <Image
              src="/media/Our_Approach.jpg"
              alt="Mission and Vision"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
                object-cover
                object-center

                transition-transform
                duration-700
              "
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}