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
        <h2 className="font-playfair text-[38px] font-extrabold mb-6">Let's Build The Future Together</h2>
        <p className="text-lg mb-12 text-[#FFFFFF]/75">
          Learn how our expertise, innovation, and commitment can help <br />
          you business achieve its next stage of growth.
        </p>
        <Link 
        href="/contact"
         className=" px-7 py-4 bg-[#FFFFFF] text-[#1A4FD6] font-medium rounded-lg ">
          Get in Touch
        </Link>
      </div>
    </motion.section>
  );
}