"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Sparkles } from "lucide-react";

const partners = [
  {
    name: "AWS",
    logo: "/media/partners/AWS.png",
    url: "https://aws.amazon.com",
  },
  {
    name: "Microsoft",
    logo: "/media/partners/Microsoft1.png",
    url: "https://www.microsoft.com",
  },
  {
    name: "Google Cloud",
    logo: "/media/partners/GCP.png",
    url: "https://cloud.google.com",
  },
  {
    name: "Oracle",
    logo: "/media/partners/OCI.png",
    url: "https://www.oracle.com",
  },
  {
    name: "Adobe",
    logo: "/media/partners/Adobe.png",
    url: "https://www.adobe.com",
  },
  {
    name: "Cisco",
    logo: "/media/partners/cisco-cloud.jpg",
    url: "https://www.cisco.com",
  },
  {
    name: "Red Hat",
    logo: "/media/partners/Red Hat.png",
    url: "https://www.redhat.com",
  },
  {
    name: "VMware",
    logo: "/media/partners/VMWare.png",
    url: "https://www.vmware.com",
  },
  {
    name: "Fortinet",
    logo: "/media/partners/Fortinet.png",
    url: "https://www.fortinet.com",
  },
  {
    name: "Palo Alto",
    logo: "/media/partners/Palo Alto.png",
    url: "https://www.paloaltonetworks.com",
  },
  {
    name: "Nutanix",
    logo: "/media/partners/Nutanix.png",
    url: "https://www.nutanix.com",
  },
  {
    name: "Citrix",
    logo: "/media/partners/Citrix.png",
    url: "https://www.citrix.com",
  },
];

export default function PartnersSection() {

  return (

    <section
      className="
        relative

        overflow-hidden

        bg-white

        py-[120px]
        px-6
        lg:px-20
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          right-0

          w-[700px]
          h-[700px]

          bg-[radial-gradient(circle_at_100%_0%,rgba(46,102,255,0.08),transparent_60%)]
        "
      />

      <div className="max-w-[1300px] mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">

          {/* LABEL */}
          <div
            className="
              inline-flex
              items-center
              gap-2

              text-[#2E66FF]

              text-[12px]
              tracking-[2px]

              font-bold
              uppercase

              mb-5
            "
          >

            <Sparkles className="w-4 h-4" />

            <span>
              Trusted Technology Ecosystem
            </span>

          </div>

          {/* TITLE */}
          <h2
            className="
              font-playfair

              text-[38px]
              md:text-[50px]

              leading-[1.15]

              font-extrabold

              text-[#0B1120]

              mb-6
            "
          >
            Powered by{" "}

            <span className="text-[#2E66FF]">
              Industry Leaders
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-[#5E6E90]

              text-[16px]
              leading-[32px]

              max-w-[850px]
              mx-auto
            "
          >
            We collaborate with globally trusted
            technology leaders to deliver scalable,
            secure, and future-ready enterprise
            solutions across cloud, cybersecurity,
            infrastructure, AI, and digital transformation.
          </p>

        </div>

        {/* LOGOS */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center

            gap-x-14
            gap-y-16
          "
        >

          {partners.map((partner, index) => (

            <motion.a
              key={index}

              href={partner.url}

              target="_blank"
              rel="noopener noreferrer"

              whileHover={{
                y: -4,
              }}

              transition={{
                duration: 0.25,
              }}

              className="
                group

                relative

                flex
                items-center
                justify-center
              "
            >

              {/* GLOW */}
              <div
                className="
                  absolute

                  w-[120px]
                  h-[120px]

                  rounded-full

                  opacity-100
                  group-hover:opacity-100

                  bg-[radial-gradient(circle,rgba(46,102,255,0.16)_0%,transparent_70%)]

                  blur-2xl

                  transition-all
                  duration-500
                "
              />

              {/* LOGO */}
              <div
                className="
                  relative

                  w-[120px]
                  h-[46px]

                  sm:w-[140px]
                  sm:h-[52px]

                  transition-all
                  duration-500

                 
                  
                  group-hover:opacity-100
                  group-hover:scale-[1.08]
                "
              >

                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="160px"
                  className="
                    object-contain
                    object-center
                  "
                />

              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}