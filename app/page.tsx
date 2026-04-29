

import Hero from "@/app/components/HomePage/Hero";
import About from "@/app/components/HomePage/About";
import Services from "@/app/components/HomePage/Services";
import WhyChooseUs from "@/app/components/HomePage/WhyChooseUs";
import FAQ from "@/app/components/HomePage/FAQs";
import Blogs from "@/app/components/HomePage/Blogs";
import CTA from "@/app/components/HomePage/CTA";

export default function Home() {
  return (
    <div className="size-full">
      
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Blogs />
      <FAQ />
      <CTA />
    </div>
  );
}