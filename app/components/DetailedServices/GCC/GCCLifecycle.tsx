"use client";

import {
  Shield,
  Monitor,
  Users,
  CheckCircle2,
  Activity,
} from "lucide-react";

const services = [
  {
    number: "01",

    icon: Monitor,

    title: "GCC Build Services",

    subtitle:
      "Lay the foundation for your global operations",

    points: [
      "Office setup and infrastructure readiness",

      "IT infrastructure and cloud platform deployment",

      "Security, compliance, and governance frameworks",

      "Technology environment design and implementation",
    ],

    glow: "hover:shadow-[0_18px_45px_rgba(63,107,255,0.12)]",

    border: "hover:border-[#3F6BFF]/40",
  },

  {
    number: "02",

    icon: Users,

    title: "Talent Build Services",

    subtitle:
      "Create high-impact teams with speed and precision",

    points: [
      "IT talent acquisition (AI, Data, Cloud, Cybersecurity, DevOps)",

      "Enterprise applications expertise (SAP, Oracle, Microsoft, Salesforce)",

      "GCC leadership hiring and strategic roles",

      "Functional hiring (Finance, HR, Procurement, Operations)",
    ],

    glow: "hover:shadow-[0_18px_45px_rgba(63,107,255,0.12)]",

    border: "hover:border-[#3F6BFF]/40",
  },

  {
    number: "03",

    icon: CheckCircle2,

    title: "GCC Operate Services",

    subtitle:
      "Ensure seamless and efficient day-to-day operations",

    points: [
      "HR operations and payroll management",

      "Recruitment engine and talent pipeline management",

      "Managed IT services and infrastructure support",

      "Governance, compliance, and reporting",
    ],

    glow: "hover:shadow-[0_18px_45px_rgba(63,107,255,0.12)]",

    border: "hover:border-[#3F6BFF]/40",
  },

  {
    number: "04",

    icon: Activity,

    title: "GCC Scale Services",

    subtitle:
      "Accelerate growth with agility",

    points: [
      "Rapid team ramp-up for new initiatives",

      "Specialized and niche skill hiring",

      "Expansion of engineering and digital capabilities",

      "Continuous optimization and performance scaling",
    ],

    glow: "hover:shadow-[0_18px_45px_rgba(63,107,255,0.12)]",

    border: "hover:border-[#3F6BFF]/40",
  },
];

export default function GCCLifecycleServices() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#020B24]

        py-16 md:py-24 lg:py-28

        px-5 sm:px-6 lg:px-10
      "
    >

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          left-0
          bottom-0

          w-[500px]
          h-[500px]

          bg-[radial-gradient(circle,rgba(0,200,180,0.12),transparent_70%)]

          blur-3xl
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-0
          top-0

          w-[500px]
          h-[500px]

          bg-[radial-gradient(circle,rgba(63,107,255,0.12),transparent_70%)]

          blur-3xl
        "
      />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* EYEBROW */}
        <div
          className="
            flex items-center gap-3

            mb-5
          "
        >

          <Shield
            className="
              w-4 h-4

              text-[#00D5C0]
            "
          />

          <span
            className="
              uppercase

              tracking-[0.18em]

              text-[11px]
              md:text-[12px]

              font-bold

              text-[#00D5C0]
            "
          >
            ACME GLOBAL Hub – YOUR GCC TRANSFORMATION PARTNER
          </span>

        </div>

        {/* HEADING */}
        <h2
          className="
            font-playfair

            text-white

            text-[38px]
            sm:text-[46px]
            lg:text-[40px]

            leading-[1.05]

            font-bold

            max-w-[920px]
          "
        >
          End-to-End Services Across the{" "} <br />

          <span className="text-[#00D5C0]">
            Entire GCC Lifecycle
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-8

            text-white/65

            text-[16px]
            md:text-[16px]

            leading-[34px]

            max-w-[900px]
          "
        >
          ACME Global Hub is positioned as a GCC Builder,
          not just a staffing provider. We deliver <br />
          end-to-end services 
          across the entire GCC lifecycle.
        </p>

        {/* CARDS */}
        <div
          className="
            mt-14

            grid
            md:grid-cols-2

            gap-6 lg:gap-8
          "
        >

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}

                className={`
                  group

                  relative

                  rounded-[32px]

                  border border-white/10

                  bg-white/[0.04]

                  backdrop-blur-sm

                  p-7 md:p-8 lg:p-9

                  min-h-[360px]

                  transition-all duration-500 ease-out

                  
                  hover:translate-x-[4px]

                  ${service.border}
                  ${service.glow}
                `}
              >

                {/* NUMBER */}
                <span
                  className="
                    text-white/25

                    text-[13px]

                    font-playfair

                    font-bold
                  "
                >
                  {service.number}
                </span>

                {/* ICON */}
                <div
                  className="
                    mt-3

                    w-12 h-12

                    rounded-2xl

                    bg-white/8

                    flex items-center justify-center

                    transition-all duration-300

                    group-hover:scale-110
                    group-hover:bg-white/10
                  "
                >

                  <Icon
                    className="
                      w-6 h-6

                      text-[#7AAFFF]
                    "
                  />

                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-8

                    font-playfair

                    text-white

                    text-[20px]

                    leading-[1]

                    font-bold
                  "
                >
                  {service.title}
                </h3>

                {/* SUBTITLE */}
                <p
                  className="
                    mt-2

                    text-[#00D5C0]

                    text-[16px]
                    md:text-[16px]

                    font-medium

                    leading-[30px]
                  "
                >
                  {service.subtitle}
                </p>

                {/* POINTS */}
                <div
                  className="
                    mt-4

                    space-y-2
                  "
                >

                  {service.points.map((point, idx) => (

                    <div
                      key={idx}

                      className="
                        flex items-start gap-4
                      "
                    >

                      {/* DOT */}
                      <div
                        className="
                          w-2.5 h-2.5

                          rounded-full

                          bg-[#3F6BFF]

                          mt-[10px]

                          shrink-0
                        "
                      />

                      {/* TEXT */}
                      <p
                        className="
                          text-white/60

                          text-[15px]
                          md:text-[14px]

                          leading-[30px]
                        "
                      >
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}