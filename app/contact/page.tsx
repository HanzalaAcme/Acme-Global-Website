export const metadata = {
  title: "Start a Conversation | ACME Global Hub",
  description:
    "technology consultation request; business enquiry; project discussion; service assessment; contact team ",
  alternates: { canonical: "/contact" },
};

import Hero from "@/app/components/contact/Hero";
import CTA from "@/app/components/contact/CTA";
import ContactInfo from "@/app/components/contact/ContactInfo";
import GlobalOffices from "../components/contact/GlobalOffices";

export default function AboutPage() {
  return (
    <main>
    
      <Hero />
      <ContactInfo />
      <GlobalOffices />
      <CTA />
    </main>
  );
}
