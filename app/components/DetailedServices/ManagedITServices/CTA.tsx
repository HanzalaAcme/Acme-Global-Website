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
        
        <h2 className="font-playfair text-[32px] text-[#0B1120] font-extrabold mb-4">ACME Global ensures your IT runs flawlessly — so your business can focus on 
          
          <span 
          className="text-[#2E66FF]"
          > growth, innovation, and strategic priorities.
          </span>
          "
         </h2>

        
        
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
              Contact Us           
               </Link>

            

          </div>
        
      </div>
    </motion.section>
  );
}