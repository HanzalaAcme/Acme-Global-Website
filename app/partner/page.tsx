export const metadata = {
  title: "Partners - ACME Global Hub",
};
import Hero from "@/app/components/partner/Hero";
import FAQs from "@/app/components/partner/FAQs";
import WhyPartnership from "../components/partner/WhyPartnership";
import Partners from "@/app/components/partner/Partners";
export default function Partner() {
    return (
        <div>
            
            <Hero />
            <WhyPartnership />
            <Partners /> 
            <FAQs />
            
        </div>
    );
}