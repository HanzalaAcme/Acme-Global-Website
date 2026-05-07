"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Shield, CircleCheckBig, Users, Cloud, Star, Sun } from "lucide-react";

const data = [
  {
    title: "Impactful Work",
    desc: "Your work creates real-world impact — solving meaningful problems that drive growth, value, and lasting change for clients worldwide.",
    icon: <CircleCheckBig className="w-6 h-6" />,
  },
  {
    title: "Secure Future",
    desc: "We offer stability, long-term growth opportunities, and a secure environment where careers are built with confidence and trust.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Collaborative Culture",
    desc: "Our culture thrives on teamwork, open communication, and mutual respect — empowering people to grow and succeed together.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Innovation-Driven Approach",
    desc: "We embrace innovation, modern technologies, and forward-thinking solutions to stay ahead in an ever-evolving digital landscape.",
    icon: <Sun className="w-6 h-6" />,
  }
];

export default function WhyChooseUs() {
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
          <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-4">
          
            <Star className="w-5 h-5 text-blue-600 text-[12px] uppercase" />
            <span>WHAT CHOOSE ACME GLOBAL HUB</span>
          </div>

          {/* HEADING */}
          <h2 
          className="font-playfair text-[35px] leading-[1.2] font-bold text-gray-900">
            Why Choose {""}
            <span className="text-blue-600 font-extrabold">ACME Global Hub?</span>
          </h2>

        

          {/* DESCRIPTION */}
          <p className="font-Dm_Sans text-[#5E6E90] font-Regular mt-6 text-[16px] leading-[28px] max-w-xl">
           At ACME Global, we believe in empowering our people to grow, 
           innovate, and make a meaningful impact. We foster a collaborative 
           and inclusive work environment where talent is valued, ideas are 
           encouraged, and continuous learning is supported. By joining our team,
          you become part of a forward-thinking organisation committed to 
          professional development, cutting-edge technology, and delivering 
          excellence to clients worldwide.
          </p>

           {/* CARDS */}
                    <div className="mt-10 flex flex-col gap-3">
          
                      {data.map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="group relative bg-[#F4F6FB] border border-[#1A4FD6]/10 rounded-2xl p-4 flex gap-3 cursor-pointer transition-all duration-300"
                        >
                          {/* HOVER BG 
                          <div className="absolute inset-0 bg-[#1A4FD6]/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>*/}
          
                          {/* ICON */}
                          <div className="relative z-10 w-[50px] h-[50px] rounded-xl bg-[#1A4FD6]/10 flex items-center justify-center text-[#1A4FD6]">
                            {typeof item.icon === 'string' ? (
                              <Image src={item.icon} alt="" width={20} height={20} />
                            ) : (
                              item.icon
                            )}
                          </div>
          
                          {/* TEXT */}
                          <div className="relative z-10">
                            <h3 className="font-playfair text-[#0B1120] font-bold text-[16px]">
                              {item.title}
                            </h3>
          
                            <p className="text-[#5E6E90] text-[14px] mt-2 leading-[22px] max-w-[420px]">
                              {item.desc}
                            </p>
                          </div>
          
                          {/* BORDER HOVER */}
                          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#1A4FD6] transition-all duration-300"></div>
          
                        </motion.div>
                      ))}
          
                    </div>

        </div>

      </div>
    </section>
  );
}