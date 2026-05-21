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
        <h2 className="font-playfair text-[36px] text-3xl font-extrabold mb-4">Never Miss Our latest Updates</h2>
        <p className="text-[16px] mb-8">Stay connected with our latest blogs covering technology trends,  <br />
          business strategies, and industry insights.</p>
        <Link href="/blogs#blogs">
          <button className="px-6 py-3 bg-[#FFFFFF] text-[#155DFC] font-medium rounded-lg  transition cursor-pointer hover:bg-gray-100">
            Browse All Articles
          </button>
        </Link>
      </div>
    </motion.section>
  );
}