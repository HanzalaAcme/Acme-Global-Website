"use client";

import Hero from "@/app/components/service/Hero";
import Service from "@/app/components/HomePage/Services";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import FAQs from "@/app/components/service/FAQs";

export default function Services() {
    return (
        <div>
            
            <Hero />
            <Service />
            <WhyChooseUs />
            <FAQs />
           
        </div>
    );
}