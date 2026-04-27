"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#FFFFFF] py-[120px] px-6 lg:px-20">

      {/* TITLE */}
      <h2 className="text-center text-[36px] font-semibold text-[#2E66FF] mb-[120px]">
        Ask us anytime
      </h2>

      {/* WRAPPER */}
      <div className="max-w-[1100px] mx-auto relative">

        {/* 🔹 TOP CARD (NO OVERLAP NOW) */}
        <div className="relative z-10 mb-[-80px]">

          <div className="bg-gradient-to-r from-[#2E66FF] to-[#14B8A6] 
            rounded-[18px] px-10 py-8 flex justify-between items-center shadow-xl">

            {/* ITEM 1 */}
            <div className="flex flex-col items-center text-center text-white w-1/3">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mb-4">
                <Phone className="text-black w-6 h-6" />
              </div>
              <h3 className="font-semibold text-[18px]">Contact Us</h3>
              <p className="text-sm mt-2 opacity-90">+91 4040117942</p>
            </div>

            <div className="w-[1px] h-[80px] bg-white/30"></div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center text-center text-white w-1/3">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mb-4">
                <Mail className="text-black w-6 h-6" />
              </div>
              <h3 className="font-semibold text-[18px]">Email Us</h3>
              <p className="text-sm mt-2 opacity-90">
                sales@acmeglobal.tech
              </p>
            </div>

            <div className="w-[1px] h-[80px] bg-white/30"></div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center text-center text-white w-1/3">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-black w-6 h-6" />
              </div>
              <h3 className="font-semibold text-[18px]">Our Location</h3>
              <p className="text-xs mt-2 opacity-90 leading-[20px]">
                504 & 506, 4th Floor, KTC Illumination, Madhapur, Hyderabad
              </p>
            </div>

          </div>
        </div>

        {/* 🔹 BACKGROUND IMAGE SECTION */}
        <div className="relative rounded-[18px] overflow-hidden">

          {/* IMAGE */}
          <Image
            src="/media/Form_Bg.jpeg"
            alt="contact"
            width={1200}
            height={600}
            className="w-full h-[520px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* FORM */}
          <div className="absolute inset-0 flex items-center justify-center px-6 pt-[80px]">

            <div className="w-full max-w-[900px]">

              {/* INPUT GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-5 py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-5 py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-5 py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-5 py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none"
                />

              </div>

              {/* TEXTAREA */}
              <textarea
                placeholder="Write Message"
                rows={4}
                className="w-full px-5 py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none mb-6"
              ></textarea>

              {/* BUTTON */}
              <div className="flex justify-center">
                <button className="px-8 py-3 rounded-lg text-white 
                  bg-gradient-to-r from-[#2E66FF] to-[#14B8A6]
                  hover:scale-105 transition duration-300">
                  Send Message
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}