"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ApplicationCTA() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto">

        
        <h4 className=" text-[14px] text-[#2E66FF] font-bold leading[1.18px] mb-4 uppercase">
          Ready to Transform Your Hiring Strategy?
        </h4>

        
        <h2 className="font-playfair text-[30px] text-[#0B1120] italic font-extrabold mb-4">"Partner with ACME Global Hub to accelerate hiring, reduce costs, and build a future-ready workforce."  <br />

        
         </h2>
          
          <h4 className="font-playfair text-[22px] text-[#2E66FF] font-bold mb-10">
          Hire Smarter. Scale Faster. Succeed Confidently.
          </h4>

        
        
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

            {/* PRIMARY */}
            <Link
              href="/contact Us"
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
              Contact Us
            </Link>

            

          </div>
        
      </div>
    </motion.section>
  );
}