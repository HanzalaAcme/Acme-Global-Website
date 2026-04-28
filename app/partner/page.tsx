"use client";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Hero from "@/app/components/partner/Hero";
import FAQs from "@/app/components/partner/FAQs";
import WhyPartnership from "../components/partner/WhyPartnership";
export default function Partner() {
    return (
        <div>
            <Navbar />
            <Hero />
            <WhyPartnership />
            <FAQs />
            <Footer />
        </div>
    );
}