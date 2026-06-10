"use client";

import Image from "next/image";
import { Cloud } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const platforms = [
  {
    name: "Amazon Web Services AWS – Innovation at Scale",
    desc: "Leverage the world's most comprehensive cloud platform with:",
    logo: "/media/partners/AWS_Logo.png",
    color: "#F59E0B",
    href: "/services/cloud-services/aws",
    points: [
      "Elastic Compute Cloud (EC2)",
      "Amazon RDS, Aurora & DynamoDB",
      "Kubernetes (EKS)",
      "DR & Business Continuity",
      "AWS VMware / Migration Services",
      "S3 Backup & Archival Storage",
      "AI / ML & Analytics",
    ],
  },

  {
    name: "Microsoft Azure – Enterprise Cloud Transformation",
    desc: "Accelerate Microsoft-centric environments with:",
    logo: "/media/partners/Microsoft_Azure.png",
    color: "#2563EB",
    href: "/services/cloud-services/azure",
    points: [
      "Azure Virtual Machines",
      "Microsoft 365 / Entra ID Integration",
      "Power Platform & AI Services",
      "Security & Compliance",
      "Azure SQL & Managed Databases",
      "Azure Backup & Site Recovery",
      "Hybrid Cloud with Azure Arc",
    ],
  },

  {
    name: "Oracle OCI – Built for Mission-Critical Workloads",
    desc: "Transform enterprise applications with:",
    logo: "/media/partners/Oracle_Logo.png",
    color: "#DC2626",
    href: "/services/cloud-services/oci",
    points: [
      "OCI Compute & Storage",
      "Exadata Cloud Services",
      "High-performance Networking",
      "Oracle Autonomous Database",
      "Oracle ERP / HCM Cloud Hosting",
      "DR & High Availability",
      "Secure Enterprise Cloud Architecture",
    ],
  },

  {
    name: "Google GCP – Data, AI & Modern Applications",
    desc: "Drive innovation through:",
    logo: "/media/partners/Google_Logo.png",
    color: "#2563EB",
    href: "/services/cloud-services/gcp",
    points: [
      "Google Compute Engine",
      "BigQuery Analytics",
      "Cloud Storage & Backup",
      "Google Kubernetes Engine (GKE)",
      "Vertex AI & Machine Learning",
      "API Management",
      "DevOps & Cloud-native Development",
    ],
  },
];

export default function CloudPlatforms() {
  return (
    <section className="bg-[#FFFFFF] py-[80px] sm:py-[90px] lg:py-[110px] px-6 sm:px-8 lg:px-12 overflow-hidden">

      <div className="max-w-[1180px] mx-auto">

        {/* TOP LABEL */}
        <div className="flex justify-center items-center gap-2 mb-4">

          <Cloud className="w-4 h-4 text-[#2E66FF]" />

          <span
            className="
              text-[#2E66FF]
              uppercase
              tracking-[1px]
              text-[12px]
              font-bold
            "
          >
            Strategic Cloud Technology Partners
          </span>

        </div>

        {/* HEADING */}
        <h2
          className="
            text-center
            font-playfair

            text-[32px]
            sm:text-[36px]
            lg:text-[36px]

            leading-[1.15]
            font-extrabold

            mb-14
            lg:mb-16
          "
        >

          <span className="text-[#0B1120]">
            Leading Cloud Platforms
          </span>{" "}

          <span className="text-[#2E66FF]">
            We Deliver
          </span>

        </h2>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {platforms.map((platform, index) => (

            <Link
              key={index}
              href={platform.href}
            >

              <motion.div
                whileHover={{ x: 4}}
                transition={{ duration: 0.25 }}

                className="
                  group

                  bg-white

                  border border-[#DFE7F5]

                  rounded-[24px]

                  p-6
                  sm:p-7

                  cursor-pointer

                  transition-all
                  duration-300

                  hover:border-[#2E66FF]
                  hover:shadow-[0_18px_45px_rgba(46,102,255,0.12)]
                "
              >

        {/* TOP */}
        <div className="flex items-start gap-4 mb-5">

          {/* LOGO */}
          <div
            className="mt-3
            "
           >

            <Image
              src={platform.logo}
              alt={platform.name}
              width={70}
              height={70}
              className="object-contain"
            />

          </div>

          {/* CONTENT */}
          <div>

            <h3
              className="
                font-playfair

                text-[22px]
                leading-[1.2]

                font-extrabold
                text-[#0B1120]

                mb-2
              "
            >
              {platform.name}
            </h3>

            <p
              className="
                text-[14px]
                text-[#64748B]
                leading-[24px]
              "
            >
              {platform.desc}
            </p>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-[#E8EDF7] mb-5" />

        {/* POINTS */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">

          {platform.points.map((point, i) => (

            <div
              key={i}
              className="flex items-start gap-1"
            >

              {/* DOT */}
              <div
                className="w-[6px] h-[6px] rounded-full mt-[9px] shrink-0"
                style={{
                  backgroundColor: platform.color,
                }}
              />

              {/* TEXT */}
              <p
                className="
                  text-[13px]
                  leading-[24px]
                  text-[#334155]
                "
              >
                {point}
              </p>

            </div>

          ))}

        </div>

      </motion.div>

    </Link>

  ))}

</div>

      </div>

    </section>
  );
}