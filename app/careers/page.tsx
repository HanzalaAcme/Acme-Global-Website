export const metadata = {
  title: "Careers - ACME Global Hub",
  description:
    "Explore career opportunities at ACME Global Hub and join teams delivering cloud, cybersecurity and digital transformation solutions for organizations across the GCC.",
  alternates: { canonical: "/careers" },
};

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
