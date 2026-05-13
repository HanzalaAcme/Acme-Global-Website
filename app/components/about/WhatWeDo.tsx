"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Shield,
  Clock,
  Users,
  Cloud,
} from "lucide-react";

const data = [
  {
    title: "XaaS-First Approach",
    desc:
      "Delivering Everything-as-a-Service to simplify technology consumption and accelerate digital transformation.",
    icon: <Shield className="w-6 h-6" />,
  },

  {
    title: "Scalable & Secure Solutions",
    desc:
      "Built to support growth while ensuring security, compliance, and business continuity.",
    icon: <Shield className="w-6 h-6" />,
  },

  {
    title: "Cloud & Digital Expertise",
    desc:
      "Delivering Everything-as-a-Service to simplify technology consumption and accelerate digital transformation.",
    icon: <Cloud className="w-6 h-6" />,
  },

  {
    title: "End-to-End Partnership",
    desc:"Supporting enterprises from strategy and design through implementation and ongoing operations.",
    icon: <Users className="w-6 h-6" />,
  },
];

export default function WhatWeDo() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-white

        py-[80px]
        md:py-[100px]
        lg:py-[100px]

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

          bg-[radial-gradient(circle_at_100%_0%,rgba(46,102,255,0.05),transparent_45%)]

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

        {/* =========================
            LEFT IMAGE SECTION
        ========================= */}
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
              alt="What We Do"

              fill

              priority

              className="object-cover"
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
              alt="Enterprise Solutions"

              fill

              className="object-cover"
            />

          </motion.div>

        </div>

        {/* =========================
            RIGHT CONTENT
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}

          viewport={{ once: true }}
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

            <Clock className="w-5 h-5" />

            <span>What We Do</span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[#0B1120]

              font-bold

              leading-[1.15]

              text-[34px]
              sm:text-[42px]
              lg:text-[36px]
            "
          >
            Enabling Agile, Secure, and
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
            Future-Ready Enterprises
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
            ACME Global is a prominent Cloud Service Provider,
            Managed Service Provider and Resource Outsourcing
            Partner, offering transformational solutions across
            different market verticals. Our primary lines of
            business include: Cloud, Application,
            Cybersecurity & Managed IT Services, amongst many
            others. With our comprehensive portfolio of service
            offerings, we efficiently address enterprise-wide
            technology needs by providing one-stop solutions,
            from strategy to execution.
          </p>

          {/* CARDS */}
          <div
            className="
              mt-10

              flex
              flex-col

              gap-4
            "
          >

            {data.map((item, i) => (

              <motion.div
                key={i}

                whileHover={{ x: 8 }}

                transition={{
                  duration: 0.18,
                  ease: "easeOut",
                }}

                className="
                  group
                  relative

                  bg-[#F4F6FB]

                  border
                  border-[#1A4FD6]/10

                  rounded-[22px]

                  p-5

                  flex
                  gap-4

                  cursor-pointer

                  transition-all
                  duration-300

                  hover:border-[#1A4FD6]

                  hover:shadow-[0_10px_30px_rgba(26,79,214,0.12)]
                "
              >

                {/* ICON */}
                <div
                  className="
                    shrink-0

                    w-[52px]
                    h-[52px]

                    rounded-xl

                    bg-[#1A4FD6]/10

                    flex
                    items-center
                    justify-center

                    text-[#1A4FD6]
                  "
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>

                  <h3
                    className="
                      font-playfair

                      text-[#0B1120]

                      font-bold

                      text-[18px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#5E6E90]

                      text-[14px]
                      sm:text-[15px]

                      mt-2

                      leading-[26px]
                    "
                  >
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}