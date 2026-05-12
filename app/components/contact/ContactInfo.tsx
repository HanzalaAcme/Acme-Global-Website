"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#FFFFFF] py-[80px] px-6 lg:px-20">

          <div className="text-center mb-10">

            {/* ICON */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-[#2E66FF]" />
              <span className="text-[#2E66FF] text-[13px] font-bold uppercase tracking-[1px]">
                Contact Us
              </span>
            </div>

            {/* HEADING */}
            <h2 className="font-playfair text-[36px] font-extrabold text-[#0B1120] mt-4">
              Do you have any questions? <br />
              <span className="text-[#2E66FF] font-extrabold">Ask us anytime</span>
            </h2>

          </div>
      
      {/* WRAPPER */}
      <div className="max-w-[1100px] mx-auto relative">

        {/* TOP CARD (NO OVERLAP) */}
        <div className="relative z-10 mb-[-80px]">

          <div className="rounded-[18px] px-10 py-8 flex justify-between items-center shadow-xl"
          style={{
          background:
          "linear-gradient(30deg, #1A4FD6 0%, #0EA5E9 60%, #06B6D4 100%)",
          }}>

            {/* ITEM 1 */}
            <div className="flex flex-col items-center text-center text-white w-1/3">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mb-4">
                <Phone className="text-[#1A4FD6] w-8 h-8" />
              </div>
              <h3 className="font-playfair font-semibold text-[18px]">Contact Us</h3>
              <p className="text-[14px] mt-2 opacity-90">+91 4040117942</p>
            </div>

            <div className="w-[1px] h-[100px] bg-white/30"></div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center text-center text-white w-1/3">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mb-4">
                <Mail className="text-[#1A4FD6] w-8 h-8" />
              </div>
              <h3 className="font-playfair font-semibold text-[18px]">Email Us</h3>
              <p className="text-[14px] mt-2 opacity-90">
                sales@acmeglobal.tech
              </p>
            </div>

            <div className="w-[1px] h-[100px] bg-white/30"></div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center text-center text-white w-1/3">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#1A4FD6] w-8 h-8" />
              </div>
              <h3 className="font-playfair font-semibold text-[18px]">Our Location</h3>
              <p className="text-[14px] mt-2 opacity-90 leading-[20px]">
                504 & 506, 4th Floor, KTC Illumination, <br />
                Madhapur, Hyderabad, Telangana, India 
              </p>
            </div>

          </div>
        </div>

        {/* BACKGROUND IMAGE SECTION */}
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
                  hover:scale-105 transition duration-300"
                   style={{
          background:
          "linear-gradient(30deg, #1A4FD6 0%, #0EA5E9 60%, #06B6D4 100%)",
          }}>                  Send Message
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}