"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#0B1120] min-h-screen flex items-center overflow-hidden px-6 lg:px-20">

      {/* LEFT SIDE GRID ONLY */}
      <div className="absolute left-0 top-0 w-full h-full z-0
        bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:60px_60px]
        opacity-40 pointer-events-none" />

      {/* LEFT GRADIENT GLOW */}
      <div className="absolute left-0 top-0 w-[600px] h-[700px] z-0
        bg-[radial-gradient(circle_at_0%_60%,rgba(0,180,255,0.25),transparent_50%)]" />

      <div className="relative z-10 pt-[72px] grid lg:grid-cols-2 gap-[60px] items-center w-full max-w-[1300px] mx-auto">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[560px]"
        >

          {/* EYEBROW */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 bg-[#00B89C] font-bold rounded-full animate-pulse"></span>
            <span className="text-[12px] tracking-[2px] text-[#00B89C] font-bold uppercase">
              XaaS-First Technology Partner
            </span>
          </div>

          {/* HEADING */}
          <h1 className="font-playfair text-white text-[52px] leading-[1.15] font-extrabold">
            Solutions that{" "}  <br />
            <span className="text-[#7AADFF] italic font-extrabold">
              Power
            </span>{" "}
            <br />
            <span className="italic">Your Growth</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/60 mt-6 text-[17px] leading-[30px] max-w-[520px]">
            Enterprise-grade technology services designed to transform operations,
            reduce risk, and unlock sustainable digital growth — delivered as a service.
          </p>

          {/* CTA */}
          <Link
            href="/service"
            className="inline-block mt-8 px-6 py-3 rounded-lg text-white 
              bg-[#1A4FD6]
              shadow-[0_4px_12px_rgba(26,79,214,0.25)]
              hover:bg-[#2E66FF]
              hover:-translate-y-[2px]
              hover:shadow-[0_12px_30px_rgba(26,79,214,0.45)]
              transition-all duration-300"
          >
            Explore Services
          </Link>

          {/* BREADCRUMB */}
          <div className="mt-6 text-sm text-white/50 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#ffffff]/42">Services</span>
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex justify-end"
        >
          <div className="w-full  rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <Image
              src="/media/Image 1 (720x720px).png"
              alt="hero"
              width={600}
              height={500}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}