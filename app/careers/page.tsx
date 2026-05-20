import Hero from "@/app/components/career/Hero";
import WhyChooseUs from "@/app/components/career/WhyChooseUs";
import JobList from "@/app/components/career/JobList";
import TalentCTA from "../components/career/TalentCTA";
//import CTA from "@/app/components/career/CTA";


export default function CareerPage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <JobList />
      <TalentCTA />
      {/*<CTA /> */}
    </>
  );
}