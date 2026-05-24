"use client";

import { motion } from "framer-motion";
import { Layers3 } from "lucide-react";

const services = [
  "Cloud Consulting & Readiness Assessments",
  "Cloud Migration & Datacenter Exit Programs",
  "Managed Cloud Services (24x7)",

  "Backup, DR & Business Continuity",
  "Cloud Security & Compliance",
  "DevOps & Automation",

  "FinOps / Cost Optimization",
  "Hybrid & Multi-Cloud Integration",
  "Cloud Modernization & Application Transformation",
];

export default function CloudPortfolioSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#030B1F]

        py-[90px]
        md:py-[110px]

        px-5
        sm:px-6
        lg:px-20
      "
    >
      {/* GRID BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          left-[-120px]
          top-[20%]

          w-[500px]
          h-[500px]

          bg-[radial-gradient(circle,rgba(0,209,178,0.16),transparent_70%)]

          blur-3xl
          pointer-events-none
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-[-120px]
          top-0

          w-[500px]
          h-[500px]

          bg-[radial-gradient(circle,rgba(46,102,255,0.14),transparent_70%)]

          blur-3xl
          pointer-events-none
        "
      />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            border border-[#00D1B2]/20

            bg-[#00D1B2]/8

            text-[#00D1B2]

            uppercase
            tracking-[2px]

            text-[11px]
            sm:text-[12px]

            font-semibold

            mb-6
          "
        >
          <Layers3 className="w-4 h-4" />

          <span>
            Multi-Cloud Transformation Services
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="
            font-playfair

            text-white

            text-[34px]
            sm:text-[42px]
            lg:text-[54px]

            leading-[1.08]

            font-extrabold

            max-w-[650px]

            mb-12
            md:mb-14
          "
        >
          ACME Global Hub Cloud
          <br />

          <span className="text-[#00D1B2]">
            Services Portfolio
          </span>
        </motion.h2>

        {/*GRID */}
        <div
          className="
            grid

            grid-cols-1
            md:grid-cols-3
            xl:grid-cols-3

            gap-5
            lg:gap-6
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -4,
              }}

              className="
                group

                relative

                min-h-[60px]

                rounded-[24px]

                border border-white/10

                bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))]

                backdrop-blur-xl

                px-6
                lg:px-3

                py-7

                overflow-hidden

                transition-all
                duration-300

                hover:border-[#00D1B2]/35

                hover:shadow-[0_18px_50px_rgba(0,209,178,0.10)]
              "
            >
              {/* HOVER GLOW */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500

                  bg-[radial-gradient(circle_at_left,rgba(0,209,178,0.10),transparent_60%)]
                "
              />

              {/* CONTENT */}
              <div className="relative z-10 flex items-start gap-4">

                {/* DOT */}
                <div
                  className="
                    w-[11px]
                    h-[11px]

                    rounded-full

                    bg-[#00D1B2]

                    mt-[6px]

                    shrink-0

                    shadow-[0_0_12px_rgba(0,209,178,0.6)]
                  "
                />

                {/* TEXT */}
                <p
                  className="
                    text-white/85

                    text-[14px]
                    lg:text-[14px]

                    leading-[1.5]

                    font-medium
                  "
                >
                  {service}
                </p>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}