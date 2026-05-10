"use client";
import Hero from "@/app/components/partner/Hero";
import FAQs from "@/app/components/partner/FAQs";
import WhyPartnership from "../components/partner/WhyPartnership";
import Partners from "@/app/components/partner/Partners";
//import Partners2 from "@/app/components/partner/Partners2";
export default function Partner() {
    return (
        <div>
            
            <Hero />
            <WhyPartnership />
            <Partners />
            {/* <Partners2 /> */}
            <FAQs />
            
        </div>
    );
}