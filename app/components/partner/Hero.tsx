"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        w-full

        min-h-[70vh]

        bg-[#07142A]

        pt-[110px]
        pb-[70px]

        flex
        items-center
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

          bg-[radial-gradient(circle_at_0%_45%,rgba(0,180,255,0.22),transparent_42%)]

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

          px-5
          sm:px-6
          lg:px-20
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2

            gap-[50px]
            lg:gap-[80px]

            items-center
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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

            {/* EYEBROW */}
            <div
              className="
                inline-flex
                items-center

                gap-3

                px-5
                py-2.5

                rounded-full

                border
                border-[#1A4FD6]/25

                bg-[#1A4FD6]/10

                backdrop-blur-md

                mb-7
              "
            >

              {/* PULSE DOT */}
              <span
                className="
                  relative

                  flex
                  items-center
                  justify-center
                "
              >

                <span
                  className="
                    absolute

                    w-3
                    h-3

                    rounded-full

                    bg-[#00B89C]/30

                    animate-ping
                  "
                />

                <span
                  className="
                    relative

                    w-2.5
                    h-2.5

                    rounded-full

                    bg-[#00B89C]
                  "
                />

              </span>

              {/* TEXT */}
              <span
                className="
                  text-[11px]
                  sm:text-[12px]

                  tracking-[1.5px]

                  text-[#7AADFF]

                  font-semibold

                  uppercase
                "
              >
                Trusted Technology Alliances
              </span>

            </div>

            {/* HEADING */}
            <h1
              className="
                font-playfair

                text-white

                font-extrabold

                leading-[1.08]

                text-[42px]
                sm:text-[54px]
                lg:text-[64px]
              "
            >
              Our{" "}

              <span
                className="
                  text-[#7AADFF]
                  italic
                "
              >
                Strategic
              </span>

              <br />

              <span className="italic">
                Partner
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                text-[15px]
                sm:text-[16px]

                text-white/70

                leading-[30px]

                max-w-[540px]

                mt-7
                mb-10

                mx-auto
                lg:mx-0
              "
            >
              We work with leading technology providers to deliver
              secure, scalable, and high-performance solutions
              across cloud, infrastructure, and software.
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

                mb-4
              "
            >

              {/* PRIMARY 
              <Link
                href="#req-form"

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
                href="/partnerapply"

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
                Become Our Partner
              </Link>

            </div>

            {/* BREADCRUMB */}
            <div
              className="
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

              <span className="text-white/40">
                Partners
              </span>

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
            "
          >

            {/* IMAGE GLOW */}
            <div
              className="
                absolute

                inset-0

                blur-[90px]

                bg-[radial-gradient(circle,rgba(46,102,255,0.2),transparent_60%)]

                pointer-events-none
              "
            />

            {/* IMAGE WRAPPER */}
            <div
              className="
                relative

                w-full
                max-w-[560px]

                h-[240px]
                sm:h-[320px]
                lg:h-[340px]

                rounded-[28px]

                overflow-hidden

                border
                border-white/10

                shadow-[0_25px_70px_rgba(0,0,0,0.35)]
              "
            >

              <Image
                src="/media/Partner_Hero.jpg"
                alt="Strategic Partners"

                fill

                priority

                className="
                  object-cover
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#07142A]/25
                  to-transparent
                "
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}