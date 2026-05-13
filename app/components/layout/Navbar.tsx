"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Blogs", href: "/blogs" },
  { name: "Careers", href: "/careers" },
  { name: "Partners", href: "/partner" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // ACTIVE STATE HANDLER
  const isItemActive = (href: string) => {
    // exact page
    if (pathname === href) return true;

    // blog detail page
    if (href === "/blogs" && pathname.startsWith("/blogs/")) {
      return true;
    }

    // career detail page
    if (href === "/careers" && pathname.startsWith("/careers/")) {
      return true;
    }

    //service detail page
    if (href === "/service" && pathname.startsWith("/services/")) {
      return true;
    }

    return false;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[72px] z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">

        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-12">

          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/media/ACME_Global_logo.png"
              alt="ACME Global"
              width={180}
              height={40}
              className="w-auto h-auto object-contain"
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-10 text-[#0B1120] font-medium text-[14px]">

            {navItems.map((item, i) => {
              const isActive = isItemActive(item.href);

              return (
                <li key={i} className="relative group">
                  <Link
                    href={item.href}
                    className={`
                      relative transition-colors duration-300
                      ${
                        isActive
                          ? "text-[#2E66FF]"
                          : "hover:text-[#2E66FF]"
                      }
                    `}
                  >
                    {item.name}

                    {/* UNDERLINE */}
                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[2px] bg-[#2E66FF]
                        transition-all duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                </li>
              );
            })}

          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* DESKTOP BUTTON */}
            <Link
              href="/contact"
              className="
                hidden lg:flex
                px-6 py-3
                bg-[#1A4FD6]
                text-white
                rounded-lg

                shadow-[0_4px_12px_rgba(26,79,214,0.25)]

                hover:bg-[#2E66FF]
                hover:-translate-y-[2px]
                hover:shadow-[0_10px_25px_rgba(26,79,214,0.4)]

                active:translate-y-0
                active:shadow-[0_4px_12px_rgba(26,79,214,0.25)]

                transition-all duration-300 ease-out
              "
            >
              Get in Touch
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                lg:hidden
                w-10 h-10
                flex items-center justify-center
                rounded-lg border border-gray-200
                text-[#0B1120]
                hover:bg-gray-100
                transition
              "
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden
            absolute top-[72px] left-0 w-full
            bg-white border-b border-gray-200 shadow-md
            transition-all duration-300 overflow-hidden

            ${
              mobileOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="px-6 py-6 flex flex-col gap-5">

            {navItems.map((item, i) => {
              const isActive = isItemActive(item.href);

              return (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    text-[15px]
                    font-medium
                    transition
                    ${
                      isActive
                        ? "text-[#2E66FF]"
                        : "text-[#0B1120] hover:text-[#2E66FF]"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* MOBILE CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="
                mt-2
                w-full
                text-center
                px-6 py-3
                bg-[#1A4FD6]
                text-white
                rounded-lg
                hover:bg-[#2E66FF]
                transition-all duration-300
              "
            >
              Get in Touch
            </Link>

          </div>

        </div>

      </nav>
    </>
  );
}