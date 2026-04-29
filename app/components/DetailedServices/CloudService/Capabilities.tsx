"use client";

import {
  Shield,
  Lock,
  Activity,
  Zap,
  Cloud,
  FileText,
  Users,
} from "lucide-react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const data = [
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    desc: "Identify, prioritize, and remediate vulnerabilities across your IT landscape using advanced platforms like Qualys and Tenable, ensuring continuous risk visibility and compliance.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Privileged Access Management (PAM)",
    desc: "Protect critical systems by controlling and monitoring privileged access, reducing insider threats and unauthorized access risks.",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    title: "Threat Protection & Security Posture",
    desc: "Microsoft Defender for Cloud — Unified threat protection across hybrid environments. AWS Security Hub — Centralized security posture management.",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    title: "Incident Response & Endpoint Detection",
    desc: "Rapidly detect, contain, and recover from cyber incidents using AI-driven platforms such as CrowdStrike Falcon and Sophos Cloud Optix.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Cloud Security & Workload Protection",
    desc: "Secure your multi-cloud and hybrid environments with best-in-class solutions like Prisma Cloud, Trend Micro, and Zscaler.",
    icon: <Cloud className="w-5 h-5" />,
  },
  {
    title: "Compliance, Governance & Risk Management",
    desc: "Ensure adherence to GCC regulatory frameworks with continuous monitoring and compliance enforcement using Qualys and Microsoft tools.",
    icon: <FileText className="w-5 h-5" />,
  },
];

export default function CloudCapabilities() {
  return (
    
    <section className="bg-[#F4F6FA] py-[96px] px-6 lg:px-20">
      <div className="max-w-[1300px] mx-auto">

        {/* LABEL */}
        <div className="flex justify-center items-center gap-2 text-[#2E66FF] text-[12px] tracking-[2px] uppercase mb-4">
          <Shield className="w-4 h-4" />
          <span>Our Core Cloud Capabilities</span>
        </div>

        {/* HEADING */}
        <h2 className="text-center font-playfair text-[40px] font-bold text-[#0B1120] mb-16">
          Our Core{" "}
          <span className="text-[#2E66FF]">
            Cloud Capabilities
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[18px] p-6 
              border border-[#E6EAF2]
              transition-all duration-300 cursor-pointer
              hover:shadow-[0_12px_30px_rgba(46,102,255,0.15)]"
            >

              {/* 🔵 TOP BORDER EFFECT */}
              <div className="absolute inset-0 rounded-[18px] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#2E66FF] transition-all duration-300"></div>
                <div className="absolute inset-0 border border-transparent group-hover:border-[#2E66FF] rounded-[18px] transition-all duration-300"></div>
              </div>

              {/* ICON */}
              <div className="w-12 h-12 rounded-[12px] bg-[#2E66FF]/10 flex items-center justify-center mb-5 text-[#2E66FF]">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-playfair text-[18px] font-semibold text-[#0B1120] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-[14px] text-[#5E6E90] leading-[24px]">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* FULL WIDTH LAST CARD */}
        <div className="mt-6">
          <div className="group relative bg-white rounded-[18px] p-6 
            border border-[#E6EAF2]
            transition-all duration-300 cursor-pointer
            hover:shadow-[0_12px_30px_rgba(46,102,255,0.15)]"
          >

            {/* BORDER EFFECT */}
            <div className="absolute inset-0 rounded-[18px] pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#2E66FF] transition-all duration-300"></div>
              <div className="absolute inset-0 border border-transparent group-hover:border-[#2E66FF] rounded-[18px] transition-all duration-300"></div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[12px] bg-[#2E66FF]/10 flex items-center justify-center text-[#2E66FF]">
                <Users className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-playfair text-[18px] font-semibold text-[#0B1120] mb-2">
                  Security Awareness & Training
                </h3>
                <p className="text-[14px] text-[#5E6E90]">
                  Empower your workforce with best practices to mitigate human risks and strengthen your organization’s security culture.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}