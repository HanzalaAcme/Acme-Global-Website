

import Hero from "@/app/components/HomePage/Hero";
import About from "@/app/components/HomePage/About";
import Services from "@/app/components/HomePage/Services";
import WhyChooseUs from "@/app/components/HomePage/WhyChooseUs";
import FAQ from "@/app/components/HomePage/FAQs";
import Blogs from "@/app/components/HomePage/Blogs";
import CTA from "@/app/components/HomePage/CTA";

export const metadata = {
  title: "Home - ACME Global Hub",
  description:
    "ACME Global Hub delivers cloud, cybersecurity, enterprise applications, AI and managed IT services that help businesses modernize, work securely and grow.",
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
