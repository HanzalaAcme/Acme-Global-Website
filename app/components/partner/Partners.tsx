"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Monitor,
  Layers
} from "lucide-react";

type Partner = {
  name: string;
  logo: string;
  url: string;
};

type PartnerGroup = {
  label: string;
  title: string;
  desc: string;
  icon: React.ReactNode; 
  partners: Partner[];
};

const partnerData: PartnerGroup[] = [
    {
    label: "CLOUD PARTNERS",
    title: "Cloud Partners",
    desc: "Our Cloud Partners enable us to deliver scalable, secure, and high-performance cloud solutions. By leveraging industry-leading cloud platforms, we help businesses modernise their infrastructure, optimise costs, and accelerate digital transformation.",
    icon: <Cloud className="w-4 h-4" />, 
    partners: [
      { name: "AWS", logo: "/media/partners/AWS.png", url: "https://partnercentral.awspartner.com/" },
      { name: "Azure", logo: "/media/partners/Azure.png", url: "https://azure.microsoft.com" },
      { name: "Google Cloud", logo: "/media/partners/GCP.png", url: "https://cloud.google.com" },
      { name: "Oracle Cloud", logo: "/media/partners/OCI.png", url: "https://cloud.oracle.com" },
      { name: "Cisco", logo: "/media/partners/cisco-cloud.jpg", url: "https://www.cisco.com" },
      { name: "Prisma Cloud", logo: "/media/partners/Prisma Cloud.png", url: "https://www.paloaltonetworks.com/prisma/cloud" },
      { name: "Citrix", logo: "/media/partners/Citrix.png", url: "https://www.citrix.com" },
      { name: "Veeam", logo: "/media/partners/Veeam.png", url: "https://www.veeam.com" },
      { name: "Red Hat", logo: "/media/partners/Red Hat.png", url: "https://www.redhat.com" },
      { name: "Veritas", logo: "/media/partners/Veritas.png", url: "https://www.veritas.com" },
      { name: "Microsoft", logo: "/media/partners/Microsoft1.png", url: "https://marketplace.microsoft.com/en-us/marketplace/partner-dir/f4e94f2b-e374-4227-b306-34954b6bc37f/overview" },
      { name: "VMware AWS", logo: "/media/partners/VMWare.png", url: "https://www.vmware.com/products/aws.html" },
      { name: "Platformatory", logo: "/media/partners/platformatory.png", url: "https://platformatory.io/" },
    ],
  },
  {
    label: "SOFTWARE PARTNERS",
    title: "Software Partners",
    desc: "Our Software Partners provide cutting-edge technologies and platforms that power innovation and efficiency. These partnerships allow us to deliver robust, reliable, and customised software solutions tailored to diverse business needs.",
    icon: <Code className="w-4 h-4" />, 
    partners: [
      { name: "Oracle", logo: "/media/partners/OCI.png", url: "https://www.oracle.com" },
      { name: "Microsoft Dynamics", logo: "/media/partners/MSDynamics 365.png", url: "https://dynamics.microsoft.com" },
      { name: "Microsoft Power Platform", logo: "/media/partners/Microsoft-Power-Platform1.png", url: "https://powerplatform.microsoft.com" },
      { name: "Adobe", logo: "/media/partners/Adobe.png", url: "https://www.adobe.com/" },
      { name: "CyberArk", logo: "/media/partners/CyberArk.png", url: "https://www.cyberark.com" },
      { name: "Trend Micro", logo: "/media/partners/TrendMicro.png", url: "https://www.trendmicro.com" },
      { name: "Cohesity", logo: "/media/partners/Cohesity.png", url: "www.cohesity.com" },
      { name: "DevRev", logo: "/media/partners/DevRev.png", url: "https://devrev.ai/" },
      { name: "Creatio", logo: "/media/partners/Creatio.webp", url: "https://www.creatio.com/" },
      { name: "OutSystems", logo: "/media/partners/Outsystems.jpg", url: "https://www.outsystems.com" },
      { name: "Confluent", logo: "/media/partners/Confluent.png", url: "https://www.confluent.io/" },
      { name: "Cognite", logo: "/media/partners/cognite.jpg", url: "www.cognite.com" },
      { name: "Unified Apps", logo: "/media/partners/UnifyApps.png", url: "	https://www.unifyapps.com/" },
      { name: "Jumio", logo: "/media/partners/Jumio.webp", url: "https://www.jumio.com" },
      { name: "BDB", logo: "/media/partners/BDB.jpg", url: "https://bdb.ai/" },
    ],
  },

  
  {
    label: "INFRASTRUCTURE PARTNERS",
    title: "Infrastructure Partners",
    desc: "Our Infrastructure Partners form the backbone of our technology solutions, offering reliable networking, security, and hardware capabilities. Together, we ensure high availability, performance, and secure enterprise environments for our clients.",
    icon: <Monitor className="w-4 h-4" />, 
    partners: [
      { name: "Hewlett Packard Enterprise", logo: "/media/partners/Hewlett_Packard_Enterprise.png", url: "https://www.hpe.com/emea_europe/en/home.html" },
      { name: "VMware", logo: "/media/partners/VMWare.png", url: "https://www.vmware.com" },
      { name: "Oracle", logo: "/media/partners/OCI.png", url: "https://www.oracle.com" },
      { name: "Red Hat", logo: "/media/partners/Red Hat.png", url: "https://www.redhat.com" },
      { name: "Manage Engine", logo: "/media/partners/ManageEngine.png", url: "https://www.manageengine.com" },
      { name: "Solar Winds", logo: "/media/partners/Solarwinds1.png", url: "https://www.solarwinds.com" },
      { name: "Nutanix", logo: "/media/partners/Nutanix.png", url: "https://www.nutanix.com" },
      { name: "Palo Alto", logo: "/media/partners/Palo Alto.png", url: "https://www.paloaltonetworks.com" },
      { name: "Fortinet", logo: "/media/partners/Fortinet.png", url: "https://www.fortinet.com" },
      { name: "Radix", logo: "/media/partners/Radix.jpg", url: "https://www.radixeng.com" },
      { name: "Exclusive Networks", logo: "/media/partners/Exclusive Network.png", url: "https://www.exclusive-networks.ae " },
      { name: "Gulf IT", logo: "/media/partners/Gulf IT.png", url: "https://www.gulfitd.com/" },
    ],
  },

  {
    label: "APPLICATION PARTNERS",
    title: "Application Partners",
    desc: "Our Application Partners help us build intelligent, user-centric solutions that enhance business processes and customer experiences. Through these collaborations, we deliver scalable applications that drive growth and operational excellence.",
    icon: <Layers className="w-4 h-4" />, 
    partners: [
      { name: "Runitas", logo: "/media/partners/Runitas.jpg", url: "https://www.runitas.com/" },
      { name: "icogz", logo: "/media/partners/icogz.jpg", url: "https://www.icogz.com" },
      { name: "NVSSoft", logo: "/media/partners/NVSSoft.jpeg", url: "	https://www.nvssoft.com" },
      { name: "Multiverse", logo: "/media/partners/multiverse.jpg", url: "https://multiversetech.com/" },
      { name: "Yethi", logo: "/media/partners/Yethi.png", url: "https://yethi.in/" },
      { name: "TechensGlobal", logo: "/media/partners/TechensGlobal.png", url: "https://techensglobal.com/#home" },
      { name: "EECServices", logo: "/media/partners/eecservices.png", url: "https://eecservices.com/" },
      { name: "SupportSages", logo: "/media/partners/SupportSages.jpg", url: "https://www.supportsages.com/" },
      { name: "RenoSystems", logo: "/media/partners/RenoSystems.jpg", url: "https://reno.systems/" },
      { name: "AriaTech", logo: "/media/partners/Aria Tech.png", url: "https://www.ariatechglobal.com/" },
    ],
  },

  
];

export default function PartnersSection() {
  return (
    <section className="bg-[#FFFFFF] py-[96px] px-6 lg:px-20">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-[100px]">

        {partnerData.map((group, i) => (
          <div key={i} className="text-center">

            {/* LABEL WITH ICON */}
            <div className="flex justify-center items-center gap-2 text-[#2E66FF] text-[13px] tracking-[2px] uppercase mb-4">
              <span className="flex items-center justify-center">
                {group.icon}
              </span>
              <span>{group.label}</span>
            </div>

            {/* TITLE */}
            <h2 className="font-playfair text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0B1120] mb-6">
              {group.title}
            </h2>

            {/* DESC */}
            <p className="text-[#5E6E90] max-w-[750px] mx-auto text-[15px] sm:text-[16px] leading-[30px] mb-12">
              {group.desc}
            </p>

            {/* LOGO WALL */}
            <div
              className="
                grid

                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5
                xl:grid-cols-6

                gap-x-10
                gap-y-12

                items-center
              "
            >

              {group.partners.map((partner, index) => (
                <motion.a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.22 }}
                  className="
                    group

                    relative

                    flex
                    items-center
                    justify-center

                    h-[72px]

                    opacity-70

                    hover:opacity-100

                    transition-all
                    duration-300
                  "
                >

                  {/* HOVER GLOW */}
                  <div
                    className="
                      absolute
                      inset-0

                      opacity-0
                      group-hover:opacity-100

                      bg-[radial-gradient(circle,rgba(46,102,255,0.10)_0%,transparent_70%)]

                      blur-xl

                      transition-all
                      duration-500
                    "
                  />

                  {/* LOGO */}
                  <div
                    className="
                      relative

                      w-[120px]
                      h-[44px]

                      sm:w-[130px]
                      sm:h-[48px]

                      grayscale-[20%]

                      transition-all
                      duration-300

                      group-hover:grayscale-0
                      group-hover:scale-[1.05]
                    "
                  >

                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="140px"
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
        ))}

      </div>
    </section>
  );
}