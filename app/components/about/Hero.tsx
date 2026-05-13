"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        w-full

        min-h-[420px]
        lg:min-h-[520px]

        bg-[#07142A]

        pt-[110px]
        pb-[60px]

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

          bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]

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

          w-[600px]
          h-[600px]

          bg-[radial-gradient(circle_at_0%_40%,rgba(0,180,255,0.22),transparent_40%)]

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

            gap-[40px]
            lg:gap-[70px]

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

            {/* HEADING */}
            <h1
              className="
                font-playfair

                text-white

                font-bold

                leading-[1.08]

                text-[40px]
                sm:text-[52px]
                lg:text-[60px]

                mb-6
              "
            >
              About{" "}

              <span className="text-[#7AADFF] italic">
                ACME Global
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                text-white/70

                text-[16px]
                sm:text-[18px]

                leading-[30px]

                max-w-[560px]

                mx-auto
                lg:mx-0

                mb-8
              "
            >
              We empower clients with world-class technology
              services and scalable enterprise solutions
              built for digital transformation.
            </p>

            {/* BREADCRUMB */}
            <div
              className="
                flex
                items-center

                gap-3

                justify-center
                lg:justify-start

                text-sm

                text-white/60
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
                About Us
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

            {/* IMAGE WRAPPER */}
            <div
              className="
                relative

                w-full
                max-w-[560px]

                h-[240px]
                sm:h-[320px]
                lg:h-[340px]

                rounded-[24px]

                overflow-hidden

                border
                border-white/10

                shadow-[0_20px_60px_rgba(0,0,0,0.3)]
              "
            >

              <Image
                src="/media/hero.jpeg"
                alt="About ACME Global"

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
                  from-[#07142A]/30
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