"use client";

import Hero from "@/app/components/service/Hero";
import Service from "@/app/components/HomePage/Services";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import FAQs from "@/app/components/service/FAQs";
import CTA from "@/app/components/service/CTA";

export default function Services() {
    return (
        <div>
            
            <Hero />
            <Service />
            <WhyChooseUs />
            <FAQs />
            <CTA />
           
        </div>
    );
}