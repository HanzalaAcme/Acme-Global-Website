"use client";


// sections
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