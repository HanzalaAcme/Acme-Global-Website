"use client";


// sections
 
import Hero from "@/app/components/about/Hero";
import WhatWeDo from "@/app/components/about/WhatWeDo";
import MissionVision from "@/app/components/about/MissionVision";
import FAQs from "@/app/components/about/FAQs";
import CTA from "@/app/components/about/CTA";

export default function AboutPage() {
  return (
    <main> 
      <Hero />
      <WhatWeDo />
      <MissionVision />
      <FAQs />
      <CTA />
    </main>
  );
}