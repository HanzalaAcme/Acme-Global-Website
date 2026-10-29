export const metadata = {
  title: "Partner Ecosystem and Technology Alliances | ACME Global Hub",
  description:
    "technology alliances; vendor ecosystem; solution partnerships; joint delivery capabilities; partner credentials; approved technology relationships",
  alternates: { canonical: "/partner" },
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
