"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#FFFFFF] py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGES */}
        <div className="relative w-full h-[520px]">

          {/* BIG IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-0 w-[340px] h-[340px] rounded-3xl overflow-hidden"
          >
            <Image
              src="/media/About_us1.avif"
              alt="about"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* SMALL OVERLAY IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 left-[40%] w-[285px] h-[260px] rounded-2xl overflow-hidden border-[4px] border-white shadow-xl"
          >
            <Image
              src="/media/About_us2.avif"
              alt="about"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* TOP LABEL */}
          <div className="flex items-center gap-2 text-[#2E66FF] text-[12px] font-semibold mb-4">
          
            <Shield className="w-5 h-5 text-[#2E66FF]" />
            <span>ABOUT ACME GLOBAL HUB</span>
          </div>

          {/* HEADING */}
          <h2 className="font-playfair text-[35px] leading-[1.2] font-bold text-gray-900">
            A Smarter Way to Consume
          </h2>

          <h2 className="font-playfair text-[35px] leading-[1.2] font-bold text-[#2E66FF] mt-2">
            Enterprise IT Services
          </h2>

          {/* DESCRIPTION */}
          <p className="font-Dm_Sans text-[#5E6E90] text-Regular mt-6 text-[16px] leading-[28px] max-w-xl">
            ACME Global Hub enables organizations to access critical digital
            capabilities as scalable, subscription-based services. Our XaaS
            approach replaces rigid IT models with flexible solutions that
            support cloud adoption, operational efficiency, and long-term
            digital transformation across regional and global markets.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-8 text-Regular text-[#0B1120] text-[14px] leading-[24px]">

            {/* ITEM */}
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[6px] bg-[#00B89C]/12 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#00B89C]" />
              </div>
              <p>Everything-as-a-Service (XaaS) delivery</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[6px] bg-[#00B89C]/12 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#00B89C]" />
              </div>
              <p>Cloud-first and security-driven architecture</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[6px] bg-[#00B89C]/12 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#00B89C]" />
              </div>
              <p>Flexible pricing with scalable service plans</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[6px] bg-[#00B89C]/12 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#00B89C]" />
              </div>
              <p>Global delivery backed by regional expertise</p>
            </div>

          </div>

          {/* BUTTON */}
          <Link
            href="/about"
            className="inline-block mt-6 px-6 py-3 rounded-lg text-white 
            bg-[#1A4FD6]

            shadow-[0_4px_12px_rgba(26,79,214,0.25)]

            hover:bg-[#2E66FF]
            hover:-translate-y-[2px]
            hover:shadow-[0_12px_30px_rgba(26,79,214,0.45)]

            transition-all duration-300"
          >
            Learn More About Us
          </Link>

        </div>

      </div>
    </section>
  );
}