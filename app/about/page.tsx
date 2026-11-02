

 export const metadata = {
  title: "Our Capabilities and Approach | ACME Global Hub",
  description:
    "company capabilities; delivery approach; technology expertise; service model; organizational background",
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
