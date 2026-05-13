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

        px-5
        sm:px-6
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

          z-0

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

          z-0

          bg-[radial-gradient(circle_at_0%_50%,rgba(0,180,255,0.22),transparent_42%)]

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

          z-0

          bg-[radial-gradient(circle_at_100%_100%,rgba(46,102,255,0.12),transparent_45%)]

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

            gap-[60px]
            xl:gap-[90px]

            items-center
          "
        >

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}

            className="
              max-w-[620px]

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

              {/* DOT */}
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

                  tracking-[2px]

                  text-[#7AADFF]

                  font-semibold

                  uppercase
                "
              >
                XaaS-First Technology Partner
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
                lg:text-[66px]
                xl:text-[74px]
              "
            >
              Solutions that{" "}
              <br />

              <span
                className="
                  text-[#7AADFF]
                  italic
                "
              >
                Power
              </span>{" "}

              <br />

              <span className="italic">
                Your Growth
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                text-white/65

                mt-7

                text-[15px]
                sm:text-[17px]

                leading-[30px]

                max-w-[540px]

                mx-auto
                lg:mx-0
              "
            >
              Enterprise-grade technology services designed
              to transform operations, reduce risk, and
              unlock sustainable digital growth —
              delivered as a service.
            </p>

            {/* CTA */}
            <Link
              href="#services"

              className="
                inline-flex
                items-center
                justify-center

                mt-9

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
              Explore Services
            </Link>

            {/* BREADCRUMB */}
            <div
              className="
                mt-7

                flex
                items-center

                gap-3

                justify-center
                lg:justify-start

                text-sm

                text-white/50
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

              <span className="text-white/35">
                Services
              </span>

            </div>

          </motion.div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}
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

                bg-[radial-gradient(circle,rgba(46,102,255,0.22),transparent_60%)]

                pointer-events-none
              "
            />

            {/* IMAGE WRAPPER */}
            <div
              className="
                relative

                w-full
                max-w-[620px]

                rounded-[28px]

                overflow-hidden

                border
                border-white/10

                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              "
            >

              <Image
                src="/media/Image 1 (720x720px).png"
                alt="Enterprise Technology Services"

                width={720}
                height={720}

                priority

                className="
                  w-full
                  h-auto

                  object-cover

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