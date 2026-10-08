"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Landmark,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Building,
  Cpu,
  ArrowRight,
} from "lucide-react";

interface Industry {
  title: string;
  highlight: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
}

const industries: Industry[] = [
  {
    title: "GOVERNMENT & CIVIC SERVICES",
    highlight: "Better technology for citizens.",           
    description: "Digital solutions that help infrastructure organizations improve connectivity, strengthen security, and create smarter environments.",
    tags: [
      "Digital Government Solutions",
      "Citizen Service Platforms",
      "Government Cloud Solutions",
      "Enterprise Networking",
      "Cybersecurity",
      "Digital Transformation",
      "Data Management",
      "Workflow Automation",
    ],
    icon: Landmark,
  },
  {
    title: "BANKING & FINANCE",
    highlight: "Secure. Scalable. Always connected.",
    description:
      "Technology solutions for banks and financial institutions focused on secure digital banking, customer experiences, modernization, and operational efficiency.",
    tags: [
      "Core Banking",
      "Digital Banking",
      "Mobile Banking",
      "Payment Solutions",
      "Fraud Prevention",
      "Customer Onboarding",
      "Financial Data Platforms",
      "Cloud Modernization",
      "Cybersecurity",
    ],
    icon: Building2,
  },
  {
    title: "LIFE SCIENCES",
    highlight: "Healthcare that keeps moving.",
    description:
      "Secure technology solutions that help healthcare organizations improve services, strengthen security, and deliver reliable care.",
    tags: [
      "Healthcare Cloud Solutions",
      "Healthcare Data Management",
      "Cybersecurity",
      "Network Security",
      "Cloud Hosting",
      "Digital Health Platforms",
      "Data Centres",
      "Infrastructure Management",
    ],
    icon: HeartPulse,
  },
  {
    title: "EDUCATION",
    highlight: "Technology that enables better learning.",
    description:
      "Digital platforms and infrastructure that help schools, universities, and learning organizations create connected, accessible, and engaging experiences.",
    tags: [
      "Campus Networking",
      "Wi-Fi Infrastructure",
      "Digital Learning Platforms",
      "Smart Classrooms",
      "Education Cloud",
      "Collaboration Tools",
      "Digital Libraries",
      "Learning Management",
    ],
    icon: GraduationCap,
  },
  {
    title: "CONSUMER SOLUTIONS",
    highlight: "Better experiences for customers.",
    description:
      "Technology solutions that help retailers improve operations, customer engagement, digital experiences, and connected commerce across channels.",
    tags: [
      "Retail Management Solutions",
      "Point of Sale Systems",
      "Customer Experience",
      "Digital Commerce",
      "Inventory Management",
      "Customer Loyalty",
      "Cloud Retail Solutions",
    ],
    icon: ShoppingBag,
  },
  {
    title: "SMART INFRASTRUCTURE",
    highlight: "Smart and connected environments.",
    description:
      "Smart solutions for real estate and infrastructure, covering connectivity, security, communications, and intelligent environments.",
    tags: [
      "Structured Cabling",
      "Wireless Infrastructure",
      "Building Management",
      "Unified Communications",
      "Security & Access Control",
      "IoT Infrastructure",
      "Data Integration",
    ],
    icon: Building,
  },
  {
    title: "TECHNOLOGY",
    highlight: "Engineering a smarter future.",
    description:
      "Advanced solutions across cloud, AI, software, cybersecurity, data, and digital engineering for technology-driven organizations.",
    tags: [
      "Cloud Computing",
      "Artificial Intelligence",
      "Software Engineering",
      "Cybersecurity",
      "Data Platforms",
      "DevOps",
      "Digital Engineering",
      "Automation",
    ],
    icon: Cpu,
  },
];

export default function IndustriesSection() {
  return (
    <main className="bg-white">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B1120]">

        {/* RIGHT SIDE VISUAL */}
        <div className="absolute right-0 top-0 h-full w-[48%] overflow-hidden">

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-l
              from-[#111827]
              via-[#0B1120]
              to-[#0B1120]
            "
          />

          {/* ABSTRACT BLUE LIGHT */}
          <div
            className="
              absolute
              right-[-120px]
              top-[-100px]
              w-[520px]
              h-[520px]
              rounded-full
              bg-[#2563EB]
              opacity-20
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              right-[-100px]
              bottom-[-150px]
              w-[450px]
              h-[450px]
              rounded-full
              bg-[#3B82F6]
              opacity-10
              blur-[100px]
            "
          />

          {/* BLUE GEOMETRIC SHAPE */}
          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[45%]
              bg-[#2563EB]
              opacity-[0.06]
              skew-x-[-18deg]
              translate-x-[80px]
            "
          />

        </div>
{/* RIGHT SIDE IMAGE */}
<div className="absolute right-0 top-0 h-full w-[52%] overflow-hidden">

  <Image
    src="/media/focus/industries-hero.jpg"
    alt="Modern city skyline"
    fill
    priority
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 52vw"
  />

  {/* DARK OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#0B1120]
      via-[#0B1120]/55
      to-transparent
    "
  />

</div>
        {/* HERO CONTENT */}
        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            py-[105px]
            md:py-[125px]
          "
        >

          <div className="max-w-[650px]">

            {/* LABEL */}
            <p
  className="
    font-Dm_Sans
    text-[12px]
    font-bold
    tracking-[0.2em]
    uppercase
    text-[#60A5FA]
    mb-6
  "
>
  Our Focus
</p>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                font-playfair
                text-[42px]
                md:text-[58px]
                leading-[0.98]
                font-bold
                text-white
              "
            >
              INDUSTRIES
              <br />
              <span className="text-[#60A5FA]">
                WE SERVE.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                max-w-[620px]
                font-Dm_Sans
                text-[14px]
                md:text-[15px]
                leading-7
                text-[#CBD5E1]
              "
            >
              We deliver technology solutions designed around the unique
              needs of every industry. From secure digital infrastructure
              to intelligent platforms, our expertise helps organizations
              modernize, connect, and grow.
            </p>

          </div>

        </div>

        {/* BOTTOM BLUE LINE */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2563EB]" />

      </section>


      {/* ===================================================== */}
      {/* TAILORED FOR EVERY SECTOR */}
      {/* ===================================================== */}

      <section className="px-6 lg:px-10 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-3 mb-5">

                <span className="w-8 h-[2px] bg-[#2563EB]" />

                <p
                  className="
                    font-Dm_Sans
                    text-[11px]
                    font-semibold
                    tracking-[0.2em]
                    uppercase
                    text-[#2563EB]
                  "
                >
                  Tailored for every sector
                </p>

              </div>

              <h2
                className="
                  font-playfair
                  text-[40px]
                  md:text-[46px]
                  leading-[1]
                  font-bold
                  text-[#0B1120]
                "
              >
                Across every
                <br />
                <span className="text-[#2563EB] italic">
                  sector.
                </span>
              </h2>

            </div>

            {/* RIGHT */}
            <div>

              <p
  className="
    max-w-xl
    font-Dm_Sans
    text-[14px]
    leading-7
    text-[#64748B]
  "
>
  From improving customer experiences to strengthening operations,
  we bring the right expertise to solve complex challenges and
  create lasting business value.
</p>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="mt-12 h-px bg-[#E2E8F0]" />

        </div>

      </section>


      {/* ===================================================== */}
      {/* INDUSTRY CARDS */}
      {/* ===================================================== */}

      <section className="px-6 lg:px-10 pb-24">

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
            items-stretch
          "
        >

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="
                  group
                  flex
                  flex-col
                 
                  bg-white
                  border
                  border-[#E2E8F0]
                  rounded-xl
                  p-6
                  transition-all
                  duration-300
                  hover:border-[#2563EB]
                  hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]
                "
              >

                {/* TOP CONTENT */}
                <div>

                  {/* ICON + TITLE */}
                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-14
                        h-14
                        shrink-0
                        rounded-xl
                        bg-[#EFF6FF]
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        group-hover:bg-[#2563EB]
                      "
                    >
                      <Icon
                        className="
                          w-7
                          h-7
                          text-[#2563EB]
                          group-hover:text-white
                        "
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3
                      className="
                        font-playfair
                        text-[17px]
                        leading-[1.2]
                        font-bold
                        text-[#0B1120]
                      "
                    >
                      {industry.title}
                    </h3>

                  </div>

                  {/* HIGHLIGHT */}
                  <p
                    className="
                      mt-4
                      font-Dm_Sans
                      text-[13px]
                      leading-6
                      font-semibold
                      text-[#2563EB]
                    "
                  >
                    {industry.highlight}
                  </p>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      font-Dm_Sans
                      text-[13px]
                      leading-7
                      text-[#64748B]
                    "
                  >
                    {industry.description}
                  </p>

                </div>

                {/* STRAIGHT LINE */}
                <div
                  className="
                    w-full
                    h-px
                    bg-[#E2E8F0]
                    my-3
                    shrink-0
                  "
                />

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 content-start">

                  {industry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        inline-flex
                        items-center
                        px-3
                        py-1.5
                        rounded-md
                        border
                        border-[#DBEAFE]
                        bg-[#F8FAFC]
                        font-Dm_Sans
                        text-[10px]
                        leading-4
                        text-[#64748B]
                      "
                    >
                      {tag}
                    </span>
                  ))}

                  <span
                    className="
                      px-1
                      py-1.5
                      font-Dm_Sans
                      text-[11px]
                      font-semibold
                      italic
                      text-[#2563EB]
                    "
                  >
                    and more
                  </span>

                </div>

              </motion.article>
            );
          })}


          {/* ================================================= */}
          {/* WORK WITH US */}
          {/* ================================================= */}

          <motion.article
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              relative
              flex
              flex-col
              rounded-xl
              bg-[#0B1120]
              p-7
              overflow-hidden
            "
          >

            {/* DECORATION */}
            <div
              className="
                absolute
                right-[-100px]
                top-[-100px]
                w-[300px]
                h-[300px]
                rounded-full
                bg-[#2563EB]
                opacity-20
                blur-[70px]
              "
            />

            <div className="relative z-10">

              <div
  className="
    w-14
    h-14
    rounded-xl
    bg-[#1E40AF]
    flex
    items-center
    justify-center
    mb-8
    overflow-hidden
  "
>
  <Image src="/media/acme_logo.png"
    // src="media/focus/Acme1.logo.png"
    alt="ACME Global"
    width={42}
    height={42}
    className="object-contain"
  />
</div>

              {/* TITLE */}
              <h3
                className="
                  font-playfair
                  text-[23px]
                  font-bold
                  text-white
                "
              >
                WORK WITH US.
              </h3>

              {/* HIGHLIGHT */}
              <p
                className="
                  mt-6
                  font-Dm_Sans
                  text-[14px]
                  leading-6
                  font-semibold
                  text-[#60A5FA]
                "
              >
                Your industry. Our expertise.
              </p>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6
                  font-Dm_Sans
                  text-[13px]
                  leading-7
                  text-[#CBD5E1]
                "
              >
                Tell us about your business challenge and our specialists
                will work with you to identify the right technology
                approach and solution.
              </p>

              {/* BUTTON */}
              <Link
                href="/contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  rounded-lg
                  bg-[#2563EB]
                  text-white
                  font-Dm_Sans
                  text-[13px]
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-[#3B82F6]
                  hover:-translate-y-1
                "
              >
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
            {/* CONTACT DETAILS */}
<div className="mt-6 space-y-2">
  <a
    href="mailto:sales@acmeglobal.tech"
    className="block font-Dm_Sans text-[13px] text-[#CBD5E1] hover:text-white transition-colors"
  >
    sales@acmeglobal.tech
  </a>

  <p className="font-Dm_Sans text-[13px] text-[#CBD5E1]">
  +91 4040117942
</p>
</div>

            </div>

          </motion.article>

        </div>

      </section>

    </main>
  );
}