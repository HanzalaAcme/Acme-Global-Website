"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ImageText() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-r from-[#5B5CE6] to-[#6FB6E8] text-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-[36px] text-3xl font-extrabold mb-4">Looking for More Opportunities?</h2>
        <p className="text-[16px] mb-8">Explore other roles within our organisation and find the position that <br />
            best matches your expertise.</p>
        <Link href="/careers#open-positions">
          <button className="px-6 py-3 bg-[#FFFFFF] text-[#155DFC] font-medium rounded-lg  transition cursor-pointer hover:bg-gray-100">
            View All Openings
          </button>
        </Link>
      </div>
    </motion.section>
  );
}