"use client";

import {
  Server,
  Clock3,
  Shield,
  RotateCcw,
  Activity,
  Database,
  BarChart3,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    icon: <Server className="w-6 h-6 text-[#2E66FF]" />,
    title: "Remote Infrastructure Management (RIM)",
    desc: "End-to-end management of servers, storage, networks, and cloud environments.",
  },

  {
    icon: <Clock3 className="w-6 h-6 text-[#2E66FF]" />,
    title: "24X7 Monitoring & Support",
    desc: "Continuous monitoring to detect, prevent, and resolve issues before they impact business operations.",
  },

  {
    icon: <Shield className="w-6 h-6 text-[#2E66FF]" />,
    title: "Patch Management & Security Updates",
    desc: "Automated patching to enhance security, reduce vulnerabilities, and ensure compliance.",
  },

  {
    icon: <RotateCcw className="w-6 h-6 text-[#2E66FF]" />,
    title: "Backup & Disaster Recovery (DRaaS)",
    desc: "Robust data protection strategies with rapid recovery capabilities to ensure business continuity.",
  },

  {
    icon: <Activity className="w-6 h-6 text-[#2E66FF]" />,
    title: "Cloud & Multi-Cloud Management",
    desc: "Manage and optimize workloads across AWS, Azure, GCP, and OCI environments.",
  },

  {
    icon: <Database className="w-6 h-6 text-[#2E66FF]" />,
    title: "Database & Application Management",
    desc: "Performance tuning, maintenance, and support for critical business applications and databases.",
  },

  {
    icon: <BarChart3 className="w-6 h-6 text-[#2E66FF]" />,
    title: "Performance Optimization & Analytics",
    desc: "Continuous analysis and tuning to improve system efficiency and user experience.",
  },
];

export default function ManagedServicesPortfolio() {
  return (
    <section className="bg-[#F5F7FC] py-20 md:py-20 px-6 lg:px-10">

      <div className="max-w-[1400px] mx-auto">

        {/* EYEBROW */}
        <div className="flex justify-center mb-5">

          <div className="flex items-center gap-3">

              <BriefcaseBusiness className="w-4 h-4 text-[#2E66FF]" />
            

            <span
              className="
                uppercase
                tracking-[0.1em]

                text-[12px]
                font-bold

                text-[#2E66FF]
              "
            >
              Full-Spectrum It Coverage
            </span>

          </div>

        </div>

        {/* HEADING */}
        <h2
          className="
            text-center

            font-playfair

            text-[#0B1120]

            text-[38px]
            md:text-[42px]

            leading-[1.08]

            font-bold

            mb-16
          "
        >
          Our Managed Services{" "}

          <span className="text-[#3B63FF]">
            Portfolio
          </span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-4">

          {services.map((item, index) => (

            <div
              key={index}

              className="
                bg-white

                rounded-[28px]

                border border-[#E5EAF4]

                p-7 md:p-8

                hover:border-[#2E66FF]/20
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]

                transition-all duration-300

                hover:-translate-y-1
              "
            >

              {/* ICON */}
              <div
                className="
                  w-14 h-14

                  rounded-2xl

                  bg-[#EEF3FF]

                  flex items-center justify-center

                  mb-4
                "
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3
                className="
                  font-playfair

                  text-[#0B1120]

                  text-[16px]

                  leading-[1.25]

                  font-bold

                  mb-4
                "
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  text-[#64748B]

                  text-[14px]

                  leading-[22px]
                "
              >
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}