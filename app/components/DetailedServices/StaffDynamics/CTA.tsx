"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function staffDynamicsCTA() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-[32px] text-[#0B1120] font-extrabold mb-4">Partner with ACME Global</h2>
        <p className="text-[16px] text-[#5E6E90] mb-8">Whether you need AWS, Azure, OCI, GCP, or a strategic multi-cloud model, ACME Global delivers the expertise,
                                governance, and managed services to help your business succeed in the cloud. <br />
            </p>
            <h2 className="font-playfair text-[24px] text-[#2E66FF] font-bold italic mb-10">Transform. Optimize. Scale. Secure.</h2>
        
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

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
            px-7 py-3 rounded-xl text-[#1A4FD6] border border-gray-300

              hover:border-gray-300
              hover:bg-gray-100

              transition-all duration-300
            "
            >
              Get in Touch
            </Link>

          </div>
        
      </div>
    </motion.section>
  );
}