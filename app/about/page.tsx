

 export const metadata = {
  title: "About Us - ACME Global Hub",
  description:
    "Learn how ACME Global Hub helps organizations across the GCC modernize with trusted technology expertise, enterprise solutions and long-term support.",
  alternates: { canonical: "/about" },
};
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
      <CTA />
      <FAQs />
      
    </main>
  );
}
