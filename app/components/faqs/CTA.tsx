"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <motion.section
      id="contact"
      className="py-20 text-white text-center"
      style={{
      background:
      "linear-gradient(30deg, #1A4FD6 0%, #1060F0 50%, #2E80FF 100%)",
   }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-[38px] font-extrabold mb-4">Still Have Questions?</h2>
        <p className="text-lg mb-10 text-[#FFFFFF]/75">
          Our team is ready to answer anything not covered here. <br />
          Reach out and we'll respond within one business day.
        </p>
        <Link 
        href="/contact"
        className="px-6 py-3 bg-[#FFFFFF] text-[#1A4FD6] font-medium rounded-lg ">
          Contact Us 
        </Link>
      </div>
    </motion.section>
  );
}