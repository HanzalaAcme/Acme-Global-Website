

import Hero from "@/app/components/HomePage/Hero";
import About from "@/app/components/HomePage/About";
import Services from "@/app/components/HomePage/Services";
import WhyChooseUs from "@/app/components/HomePage/WhyChooseUs";
import FAQ from "@/app/components/HomePage/FAQs";
import Blogs from "@/app/components/HomePage/Blogs";
import CTA from "@/app/components/HomePage/CTA";

export const metadata = {
  title: "ACME Global Hub | XaaS and Digital Transformation",
  description:
    "XaaS delivery model; digital transformation strategy; technology modernization; integrated digital capabilities; business technology roadmap",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="size-full">
      
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Blogs />
      <CTA />
      <FAQ />
    </div>
  );
}
