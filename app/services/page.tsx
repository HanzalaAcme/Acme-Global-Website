import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ACME Global Hub services in cloud, cybersecurity, enterprise applications, AI, infrastructure and IT talent for modern businesses across the GCC.",
  alternates: { canonical: "/services" },
};

import Hero from "@/app/components/service/Hero";
import Service from "@/app/components/HomePage/Services";
//import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import FAQs from "@/app/components/service/FAQs";
import CTA from "@/app/components/service/CTA";

export default function Services() {
    return (
        <div>
            
            <Hero />
            <Service />
            {/*<WhyChooseUs />*/}
            <CTA />
            <FAQs />
            
           
        </div>
    );
}
