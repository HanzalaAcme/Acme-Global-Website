"use client";

import Image from "next/image";
import { MapPin, Mail, Phone,  } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-[#9CA3AF] pt-[60px] pb-[40px] px-6 lg:px-20">
  
  <div className="max-w-[1300px] mx-auto">

    {/* TOP GRID */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-[100px]">

      {/* LEFT SECTION */}
      <div className="max-w-[360px]">

        {/* LOGO */}
        <div className="flex items-center gap-4 mb-3">
          <Image
            src="/media/acme_logo.png"
            alt="ACME"
            width={170}
            height={60}
          />
        </div>

        {/* DESCRIPTION */}
        <p className="text-[13px] leading-[24px] mb-3 w-[300px]">
          Enabling enterprises to access critical digital 
          capabilities as scalable, subscription-based 
          services — across cloud, security, and IT 
          operations.
        </p>

        {/* ADDRESS */}
        <div className="flex gap-3 mb-2 w-[300px]">
          <MapPin className="w-10 h-10 text-[#7AADFF] mt-1" />
          <p className="text-[13px] leading-[22px]">
            504 & 506, 4th Floor, KTC Illumination, HITEC City, Madhapur, Hyderabad, Telangana 500081, India
          </p>
        </div>

        {/* EMAIL */}
        <div className="flex items-center gap-3 mb-2">
          <Mail className="w-5 h-5 text-[#7AADFF]" />
          <span className="text-[13px]">support@acmeglobal.tech</span>
        </div>

        {/* PHONE */}
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[#7AADFF]" />
          <span className="text-[13px]">+91 4040117942</span>
        </div>

      </div>

      {/* QUICK LINKS (➡ moved right) */}
      <div className="ml-10">
        <h3 className="text-[#FFFFFF] font-extrabold text-[11px] tracking-[2px] uppercase mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3 text-[13px]">
          <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
          <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
          <li><Link href="/blogs" className="hover:text-white transition">Blogs</Link></li>
          <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
          <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
          <li><Link href="/partners" className="hover:text-white transition">Partners</Link></li>
        </ul>
      </div>

      {/* GLOBAL PRESENCE (⬅ moved left) */}
      <div className="-ml-10">
        <h3 className="text-[#FFFFFF] font-extrabold text-[11px] tracking-[2px] uppercase mb-5">
          Our Global Presence
        </h3>

        <ul className="space-y-3 text-[13px] leading-[24px]">
          <li><Link href="/locations/india" className="hover:text-white transition">ACME Global Hub, India</Link></li>
          <li><Link href="/locations/bahrain" className="hover:text-white transition">Almoayyed Computers Middle East, <br/> Bahrain</Link></li>
          <li><Link href="/locations/kuwait" className="hover:text-white transition">Alghanim & Almoayyed Computer <br /> Solutions, Kuwait</Link></li>
        </ul>
      </div>

    </div>

    {/* DIVIDER */}
    <div className="border-t border-[#1C274C] mt-[15px] pt-[15px] flex flex-col md:flex-row items-center justify-between">

      {/* COPYRIGHT */}
      <p className="text-[13px]">
         © {new Date().getFullYear()} ACME Global. All rights reserved.
      </p>

      {/* LINKEDIN ICON */}
      <div className="mt-3 md:mt-0">
        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1C274C] hover:bg-[#1A4FD6] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
      </div>

    </div>

  </div>
</footer>
  );
}