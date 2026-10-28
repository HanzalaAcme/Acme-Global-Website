export const metadata = {
  title: "Contact Us - ACME Global Hub",
  description:
    "Contact ACME Global Hub to discuss cloud, cybersecurity, enterprise applications, AI and managed IT services tailored to your organization’s needs.",
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
