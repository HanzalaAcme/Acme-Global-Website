"use client";

import { motion } from "framer-motion";

import {
  Shield,
  Cloud,
  Users,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const data = [
  {
    title: "XaaS-First Approach",

    desc:
      "Delivering Everything-as-a-Service to simplify technology consumption and accelerate digital transformation.",

    icon: Shield,

    glow:
      "hover:shadow-[0_20px_50px_rgba(46,102,255,0.14)]",

    border:
      "hover:border-[#2E66FF]/40",

    iconBg:
      "bg-[#2E66FF]/10",

    iconColor:
      "text-[#2E66FF]",
  },

  {
    title: "Scalable & Secure Solutions",

    desc:
      "Built to support growth while ensuring security, compliance, and business continuity.",

    icon: Shield,

    glow:
      "hover:shadow-[0_20px_50px_rgba(46,102,255,0.14)]",

    border:
      "hover:border-[#2E66FF]/40",

    iconBg:
      "bg-[#2E66FF]/10",

    iconColor:
      "text-[#2E66FF]",
  },

  {
    title: "Cloud & Digital Expertise",

    desc:
      "Deep expertise across AWS, Azure, Google Cloud, and Oracle. Enabling organizations to design, migrate, and manage cloud environments that are secure, scalable, and optimized for performance.",

    icon: Cloud,

    glow:
      "hover:shadow-[0_20px_50px_rgba(46,102,255,0.14)]",

    border:
      "hover:border-[#2E66FF]/40",

    iconBg:
      "bg-[#2E66FF]/10",

    iconColor:
      "text-[#2E66FF]",
  },

  {
    title: "End-to-End Partnership",

    desc:
      "Supporting enterprises from strategy and design through implementation and ongoing operations.",

    icon: Users,

    glow:
      "hover:shadow-[0_20px_50px_rgba(46,102,255,0.14)]",

    border:
      "hover:border-[#2E66FF]/40",

    iconBg:
      "bg-[#2E66FF]/10",

    iconColor:
      "text-[#2E66FF]",
  },
];

export default function WhatWeDo() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-white

        py-16
        md:py-24
        lg:py-28

        px-5
        sm:px-6
        lg:px-10
      "
    >

      {/* BG GLOW */}
      <div
        className="
          absolute
          right-0
          top-0

          w-[600px]
          h-[600px]

          bg-[radial-gradient(circle_at_100%_0%,rgba(46,102,255,0.05),transparent_45%)]

          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10

          max-w-[1400px]
          mx-auto
        "
      >

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}

          viewport={{ once: true }}

          className="
            text-center

            max-w-[900px]

            mx-auto
          "
        >

          {/* LABEL */}
          <div
            className="
              inline-flex
              items-center

              gap-2

              text-[#2E66FF]

              text-[11px]
              md:text-[12px]

              font-bold

              tracking-[0.18em]

              uppercase

              mb-5
            "
          >

            <Layers3 className="w-4 h-4" />

            <span>
              What We Do
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[#0B1120]

              font-bold

              leading-[1.08]

              text-[36px]
              sm:text-[48px]
              lg:text-[40px]
            "
          >
            Enabling Agile, Secure, and
          </h2>

          <h2
            className="
              font-playfair

              text-[#2E66FF]

              font-bold

              leading-[1.08]

              mt-2

              text-[36px]
              sm:text-[48px]
              lg:text-[40px]
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
              lg:text-[16px]

              leading-[30px]
              sm:leading-[32px]

              max-w-[850px]

              mx-auto
            "
          >
            ACME Global Hub is a prominent Cloud Service Provider,
            Managed Service Provider and Resource Outsourcing
            Partner, offering transformational solutions across
            different market verticals. Our primary lines of
            business include Cloud, Application,
            Cybersecurity & Managed IT Services, amongst many
            others. With our comprehensive portfolio of service
            offerings, we efficiently address enterprise-wide
            technology needs by providing one-stop solutions,
            from strategy to execution.
          </p>

        </motion.div>

        {/* CARDS */}
        <div
          className="
            mt-14

            grid
            md:grid-cols-2

            gap-5
            lg:gap-5
          "
        >

          {data.map((item, i) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={i}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                whileHover={{
                  
                  x: 4,
                }}

                transition={{
                  duration: 0.28,
                  ease: "easeOut",
                }}

                viewport={{ once: true }}

                className={`
                  group
                  relative

                  rounded-[24px]

                  border
                  border-[#E6ECF8]

                  bg-[#F8FAFD]

                  p-7
                  sm:p-8
                  lg:p-9

                  min-h-[260px]

                  transition-all
                  duration-300

                  ${item.border}
                  ${item.glow}
                `}
              >

                {/* TOP */}
                <div
                  className="
                    flex
                    items-start
                    justify-between

                    gap-5
                  "
                >

                  {/* ICON */}
                  <div
                    className={`
                      shrink-0

                      w-[55px]
                      h-[55px]

                      rounded-2xl

                      flex
                      items-center
                      justify-center

                      ${item.iconBg}
                    `}
                  >

                    <Icon
                      className={`
                        w-7
                        h-7

                        ${item.iconColor}
                      `}
                    />

                  </div>

                  

                </div>

                {/* CONTENT */}
                <div className="mt-5">

                  <h3
                    className="
                      font-playfair

                      text-[#0B1120]

                      font-bold

                      leading-[1.2]

                      text-[24px]
                      sm:text-[22px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#5E6E90]

                      text-[14px]
                      sm:text-[15px]
                      lg:text-[16px]

                      mt-5

                      leading-[25px]
                    "
                  >
                    {item.desc}
                  </p>

                </div>

                {/* HOVER GRADIENT */}
                <div
                  className="
                    absolute

                    inset-0

                    opacity-0

                    group-hover:opacity-100

                    transition-opacity
                    duration-300

                    rounded-[28px]

                    bg-[linear-gradient(135deg,rgba(46,102,255,0.02),rgba(0,209,178,0.02))]

                    pointer-events-none
                  "
                />

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}