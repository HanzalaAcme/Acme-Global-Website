import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

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
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Blogs />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}