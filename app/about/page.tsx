"use client";
import Footer from "@/app/components/layout/Footer";
import Navbar from "@/app/components/layout/Navbar";

// sections
 
import Hero from "@/app/components/about/Hero";
import WhatWeDo from "@/app/components/about/WhatWeDo";
import MissionVision from "@/app/components/about/MissionVision";
import FAQs from "@/app/components/about/FAQs";
import CTA from "@/app/components/about/CTA";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <MissionVision />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  );
}