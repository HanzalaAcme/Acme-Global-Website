"use client";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Hero from "@/app/components/service/Hero";
import Service from "@/app/components/HomePage/Services";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import FAQ from "../components/HomePage/FAQs";

export default function Services() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Service />
            <WhyChooseUs />
            <FAQ />
            <Footer />
           
        </div>
    );
}