"use client";
import { motion } from "framer-motion";

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
        <h2 className="font-playfair text-[38px] font-extrabold mb-4">Ready to Transform Your IT Strategy?</h2>
        <p className="text-lg mb-8 text-[#FFFFFF]/75">
          Discover how ACME Global Hub can help your organization scale, secure, <br />
          and optimize digital operations through Everything-as-a-Service.
        </p>
        <button className="px-4 py-2 bg-[#155DFC] text-[#FFFFFF] font-semibold rounded-lg hover:bg-blue-400 transition">
          Get Started Today
        </button>
      </div>
    </motion.section>
  );
}