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

      {/* ANIMATED BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          right-0
          top-0

          w-[500px]
          h-[500px]

          bg-[radial-gradient(circle_at_100%_0%,rgba(46,102,255,0.08),transparent_45%)]

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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}

            whileHover={{
              y: -6,
              scale: 1.015,
            }}

            animate={{
              y: [0, -8, 0],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            viewport={{ once: true }}

            className="
              group

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

              shadow-[0_25px_70px_rgba(0,0,0,0.16)]
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                inset-0

                z-10

                opacity-0
                group-hover:opacity-100

                bg-[radial-gradient(circle,rgba(46,102,255,0.12)_0%,transparent_70%)]

                transition-all
                duration-300
              "
            />

            <Image
              src="/media/AboutUs1.jpg"
              alt="ACME Global Enterprise Services"

              fill

              priority

              className="
                object-cover

                transition-transform
                duration-300

                group-hover:scale-[1.05]
              "
            />

          </motion.div>

          {/* SMALL IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            whileHover={{
              y: -6,
              scale: 1.02,
            }}

            animate={{
              y: [0, 10, 0],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            viewport={{ once: true }}

            className="
              group

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

              shadow-[0_25px_60px_rgba(0,0,0,0.18)]
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                inset-0

                z-10

                opacity-0
                group-hover:opacity-100

                bg-[radial-gradient(circle,rgba(0,184,156,0.16)_0%,transparent_70%)]

                transition-all
                duration-300
              "
            />

            <Image
              src="/media/AboutUs2.jpg"
              alt="Digital Transformation"

              fill

              className="
                object-cover

                transition-transform
                duration-300

                group-hover:scale-[1.06]
              "
            />

          </motion.div>

        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}

          viewport={{ once: true }}

          className="
            w-full
          "
        >

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: 0.1,
            }}

            viewport={{ once: true }}

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

          </motion.div>

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: 0.15,
            }}

            viewport={{ once: true }}
          >

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

          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: 0.2,
            }}

            viewport={{ once: true }}

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
          </motion.p>

          {/* FEATURES */}
          <div
            className="
              grid
              sm:grid-cols-2

              gap-x-6
              gap-y-2

              mt-6
            "
          >

            {features.map((item, index) => (

              <motion.div
                key={index}

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.45,
                  
                }}

                whileHover={{
                  x: 4,
                }}

                viewport={{ once: true }}

                className="
                  group

                  flex
                  items-start

                  gap-3

                  rounded-2xl

                  px-4
                  py-2

                  transition-all
                  duration-300

                  hover:bg-[#F8FAFF]
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-8
                    h-8

                    rounded-[10px]

                    bg-[#00B89C]/12

                    flex
                    items-center
                    justify-center

                    shrink-0

                    mt-[2px]

                    transition-all
                    duration-300

                    group-hover:bg-[#00B89C]
                    group-hover:scale-110
                  "
                >

                  <Check
                    className="
                      w-4
                      h-4

                      text-[#00B89C]

                      transition-all
                      duration-300

                      group-hover:text-white
                    "
                  />

                </div>

                {/* TEXT */}
                <p
                  className="
                    text-[#0B1120]

                    text-[14px]
                    sm:text-[14px]

                    leading-[25px]

                    transition-all
                    duration-300

                    group-hover:text-[#OB1120]
                  "
                >
                  {item}
                </p>

              </motion.div>

            ))}

          </div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: 0.35,
            }}

            viewport={{ once: true }}
          >

            <Link
              href="/about"

              className="
                group

                relative

                inline-flex
                items-center
                justify-center

                overflow-hidden

                mt-10

                px-7
                py-4

                rounded-xl

                bg-[#1A4FD6]

                text-white
                font-semibold

                transition-all
                duration-300

                shadow-[0_4px_12px_rgba(26,79,214,0.25)]
                hover:shadow-[0_14px_35px_rgba(26,79,214,0.38)]

                hover:-translate-y-[2px]
              "
            >

              {/* SHIMMER */}
              <span
                className="
                  absolute
                  inset-0

                  translate-x-[-120%]
                  group-hover:translate-x-[120%]

                  bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)]

                  transition-transform
                  duration-500
                "
              />

              <span className="relative z-10">
                Learn More About Us
              </span>

            </Link>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}