"use client";
import Link from "next/link";

export default function Navbar() {
  return (
     <nav className="fixed w-full top-0 left-0 z-50 bg-[#DEDBDB] backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-12 py-4">
        <div className="flex items-center gap-2">
         <img src="/media/ACME_Global_logo.png" alt="Company Logo" width={200} height={40} />

        </div>
        <ul className="pl-70 hidden md:flex space-x-8 text-[#000000] font-medium">
          <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
          <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#blogs" className="hover:text-blue-600 transition">Blogs</a></li>
          {/*<Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link> */}
          <li><a href="#career" className="hover:text-blue-600 transition">Careers</a></li>
          <li><a href="#partners" className="hover:text-blue-600 transition">Partners</a></li>
        </ul>
        <button className="hidden md:block px-5 py-2 bg-[#4538F6] hover:bg-[#1C139F] text-white rounded-lg font-semibold transition cursor-pointer">
          Get in Touch
        </button>
      </div>
    </nav>
  );
}