"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import Link from "next/link";

const features = [
  "Everything-as-a-Service (XaaS) delivery",
  "Cloud-first and security-driven architecture",
  "Flexible pricing with scalable service plans",
  "Global delivery backed by regional expertise",
];

export default function AboutSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#FFFFFF]

        py-[80px]
        md:py-[100px]
        lg:py-[120px]

        px-5
        sm:px-6
        lg:px-20
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          right-0
          top-0

          w-[500px]
          h-[500px]

          bg-[radial-gradient(circle_at_100%_0%,rgba(46,102,255,0.06),transparent_45%)]

          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10

          max-w-[1320px]
          mx-auto

          grid
          lg:grid-cols-2

          gap-[70px]
          xl:gap-[90px]

          items-center
        "
      >

        {/* LEFT IMAGE SECTION */}
        <div
          className="
            relative

            w-full

            h-[420px]
            sm:h-[500px]
            lg:h-[560px]

            max-w-[620px]

            mx-auto
            lg:mx-0
          "
        >

          {/* BIG IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}

            viewport={{ once: true }}

            className="
              absolute

              left-0
              top-0

              w-[78%]
              sm:w-[72%]

              h-[280px]
              sm:h-[360px]
              lg:h-[400px]

              rounded-[28px]

              overflow-hidden

              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
          >

            <Image
              src="/media/About_us1.avif"
              alt="ACME Global Enterprise Services"

              fill

              priority

              className="
                object-cover
              "
            />

          </motion.div>

          {/* SMALL IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}

            viewport={{ once: true }}

            className="
              absolute

              bottom-0
              right-0

              w-[68%]
              sm:w-[58%]

              h-[220px]
              sm:h-[260px]
              lg:h-[290px]

              rounded-[24px]

              overflow-hidden

              border-[6px]
              border-white

              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            "
          >

            <Image
              src="/media/About_us2.avif"
              alt="Digital Transformation"

              fill

              className="
                object-cover
              "
            />

          </motion.div>

        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}

          viewport={{ once: true }}

          className="
            w-full
          "
        >

          {/* LABEL */}
          <div
            className="
              flex
              items-center

              gap-2

              text-[#2E66FF]

              text-[12px]

              font-semibold

              tracking-[1.5px]

              uppercase

              mb-5
            "
          >

            <Shield className="w-5 h-5" />

            <span>About ACME Global Hub</span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[#0B1120]

              font-bold

              leading-[1.15]

              text-[34px]
              sm:text-[36px]
              lg:text-[40px]
            "
          >
            A Smarter Way to Consume
          </h2>

          <h2
            className="
              font-playfair

              text-[#2E66FF]

              font-bold

              leading-[1.15]

              mt-2

              text-[34px]
              sm:text-[42px]
              lg:text-[36px]
            "
          >
            Enterprise IT Services
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7

              text-[#5E6E90]

              text-[15px]
              sm:text-[16px]

              leading-[30px]

              max-w-[650px]
            "
          >
            ACME Global Hub enables organizations to access critical
            digital capabilities as scalable, subscription-based
            services. Our XaaS approach replaces rigid IT models
            with flexible solutions that support cloud adoption,
            operational efficiency, and long-term digital
            transformation across regional and global markets.
          </p>

          {/* FEATURES */}
          <div
            className="
              grid
              sm:grid-cols-2

              gap-x-8
              gap-y-5

              mt-10
            "
          >

            {features.map((item, index) => (

              <div
                key={index}

                className="
                  flex
                  items-start

                  gap-3
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-7
                    h-7

                    rounded-[8px]

                    bg-[#00B89C]/12

                    flex
                    items-center
                    justify-center

                    shrink-0

                    mt-[2px]
                  "
                >

                  <Check
                    className="
                      w-4
                      h-4

                      text-[#00B89C]
                    "
                  />

                </div>

                {/* TEXT */}
                <p
                  className="
                    text-[#0B1120]

                    text-[14px]
                    sm:text-[15px]

                    leading-[26px]
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

          {/* BUTTON */}
          <Link
            href="/about"

            className="
              inline-flex
              items-center
              justify-center

              mt-10

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
              hover:shadow-[0_12px_30px_rgba(26,79,214,0.4)]

              hover:-translate-y-[2px]
            "
          >
            Learn More About Us
          </Link>

        </motion.div>

      </div>

    </section>
  );
}