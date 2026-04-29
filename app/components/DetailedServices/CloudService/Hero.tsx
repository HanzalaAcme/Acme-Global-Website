"use client";

import Image from "next/image";
import Link from "next/link";

export default function CloudHero() {
  return (
    <section
      className="
      pt-[72px] relative bg-[#030B1F] min-h-[90vh] flex items-center 
      px-6 lg:px-20 overflow-hidden pb-20
    "

      
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* LEFT GLOW */}
      <div className="absolute left-0 top-0 w-[600px] h-[600px] 
        bg-[radial-gradient(circle_at_0%_50%,rgba(0,180,255,0.25),transparent_60%)] pointer-events-none">
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1300px] mx-auto w-full grid lg:grid-cols-2 gap-10 items-center pt-[72px]">

        {/* LEFT SIDE */}
        <div>

          {/* TAG */}
          <div className="mb-6 inline-block px-6 py-2 rounded-full 
            bg-gradient-to-r from-[#00D1B2] to-[#0EA5E9]
            text-[12px] text-white tracking-[2px] uppercase">
            Cloud Services
          </div>

          {/* HEADING */}
          <h1 className="font-playfair text-[52px] leading-[1.1] text-white font-bold">
            Protect. Detect. <br />
            Respond. <br />
            <span className="text-[#7AAFFF] italic font-medium">
              Secure Your Digital <br /> Enterprise.
            </span>
          </h1>

          {/* SMALL LINE */}
          <div className="w-12 h-[3px] bg-[#00D1B2] mt-6 mb-6 rounded-full"></div>

          {/* DESCRIPTION */}
          <p className="text-white/70 text-[16px] leading-[28px] max-w-[520px]">
            Cloud services unlocks unmatched scalability, cost savings, and agility to drive your business forward.
          </p>

         {/* <p className="text-white/70 text-[16px] leading-[28px] max-w-[520px] mt-4">
            ACME Global delivers end-to-end cybersecurity services powered by
            industry-leading platforms and advanced threat intelligence to safeguard
            your digital ecosystem across cloud, applications, networks, and endpoints.
          </p> */}

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mt-8">

            {/* PRIMARY */}
            <Link
              href="/contact"
              className="
              px-7 py-3 rounded-xl text-white 
              bg-[#2E66FF]
              shadow-[0_6px_20px_rgba(46,102,255,0.35)]

              hover:bg-[#4F8CFF]
              hover:-translate-y-[2px]
              hover:shadow-[0_14px_35px_rgba(46,102,255,0.5)]

              transition-all duration-300
            "
            >
              Request a Demo
            </Link>

            {/* SECONDARY */}
            <Link
              href="/contact"
              className="
              px-7 py-3 rounded-xl text-white border border-white/40

              hover:border-white
              hover:bg-white/10

              transition-all duration-300
            "
            >
              Talk to an Expert
            </Link>

          </div>

          {/* BREADCRUMB */}
          <div className="mt-6 text-sm text-white/60 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>›</span>
            <span className="text-white">Cyber Security Services</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          {/* IMAGE CONTAINER */}
          <div className="relative w-full h-[420px] rounded-[24px] overflow-hidden">

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030B1F] via-transparent to-transparent z-10"></div>

            <Image
              src="/media/Service_Hero.jpg" 
              alt="cybersecurity"
              fill
              className="object-cover"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}