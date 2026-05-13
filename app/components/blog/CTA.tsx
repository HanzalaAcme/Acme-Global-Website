"use client";
import { motion } from "framer-motion";

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
        <h2 className="font-playfair text-[38px] font-extrabold mb-6">Never Miss Our Latest Updates</h2>
        <p className="text-lg mb-8 text-[#FFFFFF]/75">
          Stay connected with our latest blogs covering technology trends, <br />
          innovative solutions, business strategies, and industry insights.
        </p>
        <button className="px-6 py-3 bg-[#FFFFFF] text-[#1A4FD6] font-medium rounded-lg ">
          Browse All Articles
        </button>
      </div>
    </motion.section>
  );
}