import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "IT Solutions Portfolio | ACME Global Hub",
  description:
    "IT solutions portfolio; application services; managed operations; ERP platforms; workforce solutions; technology sourcing  ",
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
