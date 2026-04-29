"use client";

import Image from "next/image";
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
      { name: "AWS", logo: "/media/partners/AWS.png", url: "https://www.amazon.in/" },
      { name: "Azure", logo: "/media/partners/Azure.png", url: "https://azure.microsoft.com" },
      { name: "Google Cloud", logo: "/media/partners/Google_Cloud.png", url: "https://cloud.google.com" },
      { name: "Oracle Cloud", logo: "/media/partners/Oracle.png", url: "https://cloud.oracle.com" },
      { name: "Cisco", logo: "/media/partners/Cisco.png", url: "https://www.cisco.com" },
      { name: "Prisma Cloud", logo: "/media/partners/prisma.avif", url: "https://www.paloaltonetworks.com/prisma/cloud" },
      { name: "Citrix", logo: "/media/partners/Citrix.png", url: "https://www.citrix.com" },
      { name: "Veeam", logo: "/media/partners/Veeam.jpg", url: "https://www.veeam.com" },
      { name: "Forti Cloud", logo: "/media/partners/FortiCloud.png", url: "https://www.fortinet.com/products/forticloud" },
      { name: "Red Hat", logo: "/media/partners/Red_Hat.png", url: "https://www.redhat.com" },
      { name: "Veritas", logo: "/media/partners/Veritas_Technologies.png", url: "https://www.veritas.com" },
      { name: "Microsoft", logo: "/media/partners/Microsoft.png", url: "https://www.microsoft.com" },
      { name: "VMware AWS", logo: "/media/partners/vmware aws.png", url: "https://www.vmware.com/products/aws.html" },
      { name: "Platformatory", logo: "/media/partners/Platformatory.png", url: "https://www.platformatory.com" },
      { name: "Commvault", logo: "/media/partners/Commvault.png", url: "https://www.commvault.com" },
    ],
  },
  {
    label: "SOFTWARE PARTNERS",
    title: "Software Partners",
    desc: "Our Software Partners provide cutting-edge technologies and platforms that power innovation and efficiency. These partnerships allow us to deliver robust, reliable, and customised software solutions tailored to diverse business needs.",
    icon: <Code className="w-4 h-4" />, 
    partners: [
      { name: "Oracle", logo: "/media/partners/Oracle.png", url: "https://www.oracle.com" },
      { name: "Microsoft Dynamics", logo: "/media/partners/Microsoft_Dynamics.png", url: "https://dynamics.microsoft.com" },
      { name: "Microsoft Power Platform", logo: "/media/partners/Microsoft_Power_Platforms.png", url: "https://powerplatform.microsoft.com" },
      { name: "Adobe", logo: "/media/partners/Adobe.png", url: "https://www.adobe.com" },
      { name: "CyberArk", logo: "/media/partners/CyberArk.png", url: "https://www.cyberark.com" },
      { name: "Trend Micro", logo: "/media/partners/Trend_Micro.png", url: "https://www.trendmicro.com" },
      { name: "Cohesity", logo: "/media/partners/Cohesity.png", url: "https://www.cohesity.com" },
      { name: "DevRev", logo: "/media/partners/DevRev.png", url: "https://www.devrev.ai" },
      { name: "Creatio", logo: "/media/partners/Creatio.webp", url: "https://www.creatio.com" },
      { name: "OutSystems", logo: "/media/partners/OutSystems.jpg", url: "https://www.outsystems.com" },
      { name: "Confluent", logo: "/media/partners/Confluent.png", url: "https://www.confluent.io" },
      { name: "Cognite", logo: "/media/partners/cognite.jpg", url: "https://www.cognite.com" },
      { name: "Unified Apps", logo: "/media/partners/UnifyApps.png", url: "https://www.unifyapps.com" },
      { name: "Jumio", logo: "/media/partners/Jumio.webp", url: "https://www.jumio.com" },
      { name: "BDB", logo: "/media/partners/BDB.jpg", url: "https://www.bdb.com" },
    ],
  },

  
  {
    label: "INFRASTRUCTURE PARTNERS",
    title: "Infrastructure Partners",
    desc: "Our Infrastructure Partners form the backbone of our technology solutions, offering reliable networking, security, and hardware capabilities. Together, we ensure high availability, performance, and secure enterprise environments for our clients.",
    icon: <Monitor className="w-4 h-4" />, 
    partners: [
      { name: "Hewlett Packard Enterprise", logo: "/media/partners/Hewlett_Packard_Enterprise.png", url: "https://www.hpe.com" },
      { name: "VMware", logo: "/media/partners/vmware.jpg", url: "https://www.vmware.com" },
      { name: "Oracle", logo: "/media/partners/Oracle.png", url: "https://www.oracle.com" },
      { name: "Red Hat", logo: "/media/partners/Red_Hat.png", url: "https://www.redhat.com" },
      { name: "Manage Engine", logo: "/media/partners/Manage_Engine.png", url: "https://www.manageengine.com" },
      { name: "Solar Winds", logo: "/media/partners/SolarWinds.png", url: "https://www.solarwinds.com" },
      { name: "Nutanix", logo: "/media/partners/Nutanix.png", url: "https://www.nutanix.com" },
      { name: "Palo Alto", logo: "/media/partners/Palo_Alto.webp", url: "https://www.paloaltonetworks.com" },
      { name: "Fortinet", logo: "/media/partners/Fortinet.png", url: "https://www.fortinet.com" },
      { name: "Radix", logo: "/media/partners/Radix.jpg", url: "https://www.radix.ai" },
      { name: "Exclusive Networks", logo: "/media/partners/Exclusive_Network.png", url: "https://www.exclusivenetworks.com" },
      { name: "Gulf IT", logo: "/media/partners/Gulf_IT.png", url: "https://www.gulfit.com" },
    ],
  },

  {
    label: "APPLICATION PARTNERS",
    title: "Application Partners",
    desc: "Our Application Partners help us build intelligent, user-centric solutions that enhance business processes and customer experiences. Through these collaborations, we deliver scalable applications that drive growth and operational excellence.",
    icon: <Layers className="w-4 h-4" />, 
    partners: [
      { name: "Runitas", logo: "/media/partners/Runitas.jpg", url: "https://www.runitas.com" },
      { name: "icogz", logo: "/media/partners/icogz.jpg", url: "https://www.icogz.com" },
      { name: "NVSSoft", logo: "/media/partners/NVSSoft.jpeg", url: "https://www.nvssoft.com" },
      { name: "Multiverse", logo: "/media/partners/multiverse.jpg", url: "https://www.multiverse.com" },
      { name: "Yethi", logo: "/media/partners/Yethi.png", url: "https://www.yethi.com" },
      { name: "CCI", logo: "/media/partners/CCI.png", url: "https://www.cci.com" },
      { name: "TechensGlobal", logo: "/media/partners/TechensGlobal.png", url: "https://www.techensglobal.com" },
      { name: "EECServices", logo: "/media/partners/eecservices.png", url: "https://www.eecservices.com" },
      { name: "SupportSages", logo: "/media/partners/SupportSages.jpg", url: "https://www.supportsages.com" },
      { name: "RenoSystems", logo: "/media/partners/RenoSystems.jpg", url: "https://www.renosystems.com" },
      { name: "AriaTech", logo: "/media/partners/AriaTech.png", url: "https://www.ariat tech.com" },
    ],
  },

  
];

export default function PartnersSection() {
  return (
    <section className="bg-[#F4F6FA] py-[96px] px-6 lg:px-20">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-[80px]">

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
            <h2 className="font-playfair text-[38px] font-extrabold text-[#0B1120] mb-6">
              {group.title}
            </h2>

            {/* DESC */}
            <p className="text-[#5E6E90] max-w-[750px] mx-auto text-[16px] leading-[28px] mb-12">
              {group.desc}
            </p>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-[20px]">

              {group.partners.map((partner, index) => (
  <a
    key={index}
    href={partner.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-[16px] border border-[#E6EAF2] 
    p-5 flex flex-col items-center justify-center 
    transition-all duration-300 cursor-pointer
    hover:border-[#2E66FF]
    hover:shadow-[0_10px_25px_rgba(46,102,255,0.12)]"
  >
    {/* LOGO */}
    <div className="relative w-[80px] h-[40px] mb-4">
      <Image
        src={partner.logo}
        alt={partner.name}
        fill
        className="object-contain"
      />
    </div>

    {/* NAME */}
    <p className="text-[13px] text-[#6B7280]">
      {partner.name}
    </p>
  </a>
))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}