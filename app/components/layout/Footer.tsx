"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030B22] text-[#8B93A7] overflow-hidden">

      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-10 pt-[40px] pb-[20px]">

        {/* TOP SECTION */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.1fr_0.7fr_0.9fr]

            gap-y-10
            gap-x-12
            lg:gap-x-10

            items-start
          "
        >

          {/* LEFT */}
          <div className="max-w-[330px]">

            {/* LOGO */}
            <div className="mb-5">
              <Image
                src="/media/acme_logo.png"
                alt="ACME Global"
                width={190}
                height={60}
                priority
                className="w-auto h-auto object-contain"
              />
            </div>

            {/* DESC */}
            <p className="text-[13px] leading-[2.1] mb-5 text-[#7E8799]">
              Enabling enterprises to access critical digital
              capabilities as scalable, subscription-based
              services — across cloud, security, and IT
              operations.
            </p>

            {/* ADDRESS */}
            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <MapPin className="w-[18px] h-[18px] text-[#7AADFF] mt-[3px] shrink-0" />

                <p className="text-[13px] leading-[2] text-[#7E8799]">
                  504 & 506, 4th Floor, KTC Illumination,
                  HITEC City, Madhapur, Hyderabad,
                  Telangana 500081, India
                </p>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">

                <Mail className="w-[17px] h-[17px] text-[#7AADFF] shrink-0" />

                <a
                  href="mailto:support@acmeglobal.tech"
                  className="
                    text-[13px]
                    hover:text-white
                    transition-colors duration-300
                  "
                >
                  support@acmeglobal.tech
                </a>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">

                <Phone className="w-[17px] h-[17px] text-[#7AADFF] shrink-0" />

                <a
                  href="tel:+914040117942"
                  className="
                    text-[13px]
                    hover:text-white
                    transition-colors duration-300
                  "
                >
                  +91 4040117942
                </a>

              </div>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="pt-5 lg:pl-6">

            <h3
              className="
                text-white
                text-[11px]
                font-extrabold
                tracking-[2px]
                uppercase
                mb-5
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-3 text-[13px]">

              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/service"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/blogs"
                  className="hover:text-white transition-colors duration-300"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/partner"
                  className="hover:text-white transition-colors duration-300"
                >
                  Partners
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors duration-300"
                >
                  FAQ's
                </Link>
              </li>
                
                <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>

            </ul>

          </div>

          {/* GLOBAL PRESENCE */}
          <div className=" pt-5 lg:-ml-16">

            <h3
              className="
                text-white
                text-[11px]
                font-extrabold
                tracking-[2px]
                uppercase
                mb-5
              "
            >
              Our Global Presence
            </h3>

            <ul className="space-y-3 text-[13px] leading-[2] max-w-[250px]">

              <li>
                <a
                  href="https://acmeglobal.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    hover:text-white
                    transition-colors duration-300
                  "
                >
                  ACME Global Hub, India
                </a>
              </li>

              <li>
                <a
                  href="https://acme.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    hover:text-white
                    transition-colors duration-300
                  "
                >
                  Almoayyed Computers Middle East,
                  Bahrain
                </a>
              </li>

              <li>
                <a
                  href="http://www.alghanimalmoayyed.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    hover:text-white
                    transition-colors duration-300
                  "
                >
                  Alghanim & Almoayyed Computer
                  Solutions, Kuwait
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* DIVIDER */}
        <div
          className="
            border-t border-[#16203A]
            mt-[40px]
            pt-[8px]

            flex flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >

          {/* COPYRIGHT */}
          <p className="text-[13px] text-center md:text-left text-[#667085]">
            © {new Date().getFullYear()} ACME Global Hub.
            All rights reserved.
          </p>

          {/* SOCIAL */}
          <a
            href="https://www.linkedin.com/company/acme-global-hub-in/posts/?feedView=all"
            className="
              w-12 h-12
              rounded-xl

              border border-[#1B2745]

              flex items-center justify-center

              hover:bg-[#1A4FD6]
              hover:border-[#1A4FD6]

              transition-all duration-300
            "
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <rect
                x="2"
                y="9"
                width="4"
                height="12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle
                cx="4"
                cy="4"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

          </a>

        </div>

      </div>

    </footer>
  );
}