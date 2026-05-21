"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

export default function ApplicationHero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#030B1F]

        min-h-[92vh]

        flex
        items-center

        px-5
        sm:px-6
        lg:px-20

        pt-[120px]
        pb-[80px]
      "
    >

      {/* GRID BACKGROUND */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.08]

          bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]

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

          bg-[radial-gradient(circle_at_0%_45%,rgba(0,180,255,0.22),transparent_45%)]

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

          bg-[radial-gradient(circle_at_100%_100%,rgba(46,102,255,0.10),transparent_45%)]

          pointer-events-none
        "
      />

      {/* MAIN CONTENT */}
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

            gap-[60px]
            xl:gap-[90px]

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

            {/* TAG */}
            <div
              className="
                inline-flex
                items-center

                gap-3

                px-5
                py-2.5

                rounded-full

                border
                border-[#00D1B2]/20

                bg-[linear-gradient(135deg,rgba(0,209,178,0.16),rgba(14,165,233,0.14))]

                backdrop-blur-md

                shadow-[0_0_30px_rgba(14,165,233,0.08)]

                mb-7
              "
            >

              {/* ICON */}
              <div
                className="
                  w-7
                  h-7

                  rounded-full

                  bg-[#00D1B2]/15

                  flex
                  items-center
                  justify-center
                "
              >

                <DollarSign
                  className="
                    w-4
                    h-4

                    text-[#00D1B2]
                  "
                />

              </div>

              {/* TEXT */}
              <span
                className="
                  text-[11px]
                  sm:text-[12px]

                  tracking-[1px]

                  text-[#7CEEDC]

                  font-semibold

                  uppercase
                "
              >
                PayDynamics
              </span>

            </div>

            {/* HEADING */}
            <h1
              className="
                font-playfair

                text-white

                font-bold

                leading-[1.08]

                text-[38px]
                sm:text-[52px]
                lg:text-[48px]
              "
            >
              Revolutionizing
              <br />

              

              <span
                className="
                  text-[#7AAFFF]
                  italic
                "
              >
                Payroll Automation
              </span>

            </h1>

            {/* SMALL LINE */}
            <div
              className="
                w-14
                h-[3px]

                bg-[linear-gradient(90deg,#00D1B2,#0EA5E9)]

                rounded-full

                mt-7
                mb-7

                mx-auto
                lg:mx-0
              "
            />

            {/* DESCRIPTION */}
            <p
              className="
                text-white/70

                text-[15px]
                sm:text-[16px]

                leading-[30px]

                max-w-[560px]

                mx-auto
                lg:mx-0
              "
            >
              PayDynamics is an advanced payroll automation platform designed to eliminate manual effort, reduce errors, and accelerate salary processing.
            </p>

            <p
              className="
                text-white/70

                text-[15px]
                sm:text-[16px]

                leading-[30px]

                max-w-[560px]

                mt-5

                mx-auto
                lg:mx-0
              "
            >
              It transforms payroll operations into a highly efficient, controlled, and auditable process, ensuring every payroll cycle is accurate, timely, and fully traceable.
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-wrap

                items-center

                gap-4

                justify-center
                lg:justify-start

                mt-9
              "
            >

              {/* PRIMARY 
              <Link
                href="/consultation"

                className="
                  inline-flex
                  items-center
                  justify-center

                  px-7
                  py-4

                  rounded-xl

                  text-white
                  font-semibold

                  bg-[#2E66FF]

                  shadow-[0_6px_20px_rgba(46,102,255,0.35)]

                  hover:bg-[#4F8CFF]
                  hover:-translate-y-[2px]

                  hover:shadow-[0_14px_35px_rgba(46,102,255,0.5)]

                  transition-all
                  duration-300
                "
              >
                Request Consultation
              </Link> */}

              {/* SECONDARY */}
              <Link
                href="/contact"

                className="
                  inline-flex
                  items-center
                  justify-center

                  px-7
                  py-4

                  rounded-xl

                  text-white
                  font-semibold

                  border
                  border-white/20

                  bg-white/5

                  backdrop-blur-sm

                  hover:border-white/40
                  hover:bg-white/10

                  transition-all
                  duration-300
                "
              >
                Talk to an Expert
              </Link>

            </div>

            {/* BREADCRUMB */}
            <div
              className="
                mt-7

                text-sm

                text-white/60

                flex
                items-center

                gap-2

                justify-center
                lg:justify-start
              "
            >

              <Link
                href="/"

                className="
                  hover:text-white
                  transition-colors
                "
              >
                Home
              </Link>

              <span>/</span>

              <Link
                href="/services"

                className="
                  hover:text-white
                  transition-colors
                "
              >
                Services
              </Link>

              <span>/</span>

              <span className="text-white/40">
               PayDynamics
              </span>

            </div>

          </motion.div>

          {/* RIGHT IMAGE*/}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
            "
          >

            {/* IMAGE GLOW */}
            <div
              className="
                absolute

                inset-0

                blur-[100px]

                bg-[radial-gradient(circle,rgba(46,102,255,0.18),transparent_60%)]

                pointer-events-none
              "
            />

            {/* IMAGE CONTAINER */}
            <div
              className="
                relative

                w-full
                max-w-[620px]

                h-[260px]
                sm:h-[360px]
                lg:h-[440px]

                rounded-[30px]

                overflow-hidden

                border
                border-white/10

                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              "
            >

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-r
                  from-[#030B1F]/55
                  via-transparent
                  to-transparent

                  z-10
                "
              />

              <Image
                src="/media/Paydynamics.jpg"
                alt="Paydynamics Services"

                fill

                priority

                className="
                  object-cover
                "
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}