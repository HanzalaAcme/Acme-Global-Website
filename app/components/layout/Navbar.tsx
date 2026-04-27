"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Blogs", href: "#blogs" },
  { name: "Careers", href: "#career" },
  { name: "Partners", href: "/partner" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full h-[72px] z-50 bg-[#FFFFFF]/96 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-12">

        {/* LOGO */}
        <div className="flex items-center">
          <img src="/media/ACME_Global_logo.png" width={180} />
        </div>

        {/* CENTER MENU */}
        <ul className="hidden md:flex items-center gap-10 text-[#0B1120] font-medium text-[14px]">

          {navItems.map((item, i) => {
            const isActive = pathname === item.href;

            return (
              <li key={i} className="relative group">
                <Link
                  href={item.href}
                  className={`relative transition-colors duration-300
                    ${isActive ? "text-[#2E66FF]" : "hover:text-[#2E66FF]"}`}
                >
                  {item.name}

                  {/* UNDERLINE */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#2E66FF] transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>
            );
          })}

        </ul>

        {/* BUTTON */}
        <Link
            href="/contact"
            className="px-6 py-3 bg-[#1A4FD6] text-white rounded-lg 

            shadow-[0_4px_12px_rgba(26,79,214,0.25)]

            hover:bg-[#2E66FF]
            hover:-translate-y-[2px]
            hover:shadow-[0_10px_25px_rgba(26,79,214,0.4)]

            active:translate-y-0
            active:shadow-[0_4px_12px_rgba(26,79,214,0.25)]

            transition-all duration-300 ease-out"
            >
            Get in Touch
          </Link>

      </div>
    </nav>
  );
}