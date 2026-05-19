"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#0B1120]

        min-h-screen

        flex
        items-center

        px-6
        lg:px-20

        pt-[110px]
        pb-[70px]
      "
    >

      {/* GRID BACKGROUND */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.06]

          bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)]

          bg-[size:60px_60px]

          pointer-events-none
        "
      />

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          left-0
          top-0

          w-[700px]
          h-[700px]

          bg-[radial-gradient(circle_at_0%_20%,rgba(0,180,255,0.18),transparent_38%)]

          pointer-events-none
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-0
          bottom-0

          w-[500px]
          h-[500px]

          bg-[radial-gradient(circle_at_100%_100%,rgba(46,102,255,0.14),transparent_40%)]

          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          w-full

          max-w-[1320px]
          mx-auto
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2

            gap-[50px]
            xl:gap-[80px]

            items-center
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}

            className="
              text-center
              lg:text-left
            "
          >

           

            {/* HEADING */}
            <h1
              className="
                font-playfair

                text-white

                font-extrabold

                leading-[1.1]

                text-[40px]
                sm:text-[52px]
                lg:text-[60px]
                xl:text-[68px]
              "
            >

              Transform Your Business with{" "}

              <span
                className="
                  text-[#7AADFF]
                "
              >
                Complete XaaS Solutions
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                text-white/65

                mt-6

                text-[15px]
                sm:text-[17px]

                leading-[30px]

                max-w-[620px]

                mx-auto
                lg:mx-0
              "
            >
              Unlock unlimited potential with our comprehensive
              Everything-as-a-Service platform that revolutionizes
              how you operate, scale, and succeed.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-8

                flex
                flex-wrap

                items-center

                gap-4

                justify-center
                lg:justify-start
              "
            >

              {/* PRIMARY BUTTON */}
              <Link
                href="/services"

                className="
                  inline-flex
                  items-center
                  justify-center

                  px-7
                  py-4

                  rounded-xl

                  bg-[#1A4FD6]
                  hover:bg-[#2E66FF]

                  text-white
                  font-semibold

                  transition-all
                  duration-300

                  shadow-[0_4px_12px_rgba(26,79,214,0.25)]
                  hover:shadow-[0_12px_30px_rgba(26,79,214,0.45)]

                  hover:-translate-y-[2px]
                "
              >
                Explore Solutions
              </Link>

              {/* SECONDARY BUTTON */}
              <Link
                href="/contact"

                className="
                  inline-flex
                  items-center
                  justify-center

                  px-7
                  py-4

                  rounded-xl

                  border
                  border-white/12

                  bg-white/5
                  hover:bg-white/10

                  text-white
                  font-semibold

                  backdrop-blur-sm

                  transition-all
                  duration-300
                "
              >
                Talk to Experts
              </Link>

            </div>

          </motion.div>

         {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                relative

                flex
                justify-center
                lg:justify-end

                w-full
              "
            >

              {/* IMAGE GLOW */}
              <div
                className="
                  absolute

                  inset-0

                  blur-[120px]

                  bg-[radial-gradient(circle,rgba(46,102,255,0.22),transparent_60%)]

                  pointer-events-none
                "
              />

              {/* IMAGE WRAPPER */}
              <div
                className="
                  relative

                  w-full

                  max-w-[520px]
                  sm:max-w-[620px]
                  lg:max-w-[760px]

                  min-h-[320px]
                  sm:min-h-[420px]
                  lg:min-h-[500px]

                  rounded-[28px]

                  overflow-hidden
                "
              >

                <Image
                  src="/media/Hero.jpg"
                  alt="ACME Global XaaS Platform"

                  fill

                  priority

                  className="
                    object-cover

                    rounded-[28px]

                    opacity-95
                  "
                />

              </div>

            </motion.div>

        </div>

      </div>

    </section>
  );
}