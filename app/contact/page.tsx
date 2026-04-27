"use client";
import Footer from "@/app/components/layout/Footer";
import Navbar from "@/app/components/layout/Navbar";

// sections
import Hero from "@/app/components/contact/Hero";
import CTA from "@/app/components/contact/CTA";
import ContactForm from "@/app/components/contact/ContactForm";
import ContactInfo from "@/app/components/contact/ContactInfo";
import GlobalOffices from "../components/contact/GlobalOffices";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ContactInfo />
      <ContactForm />
      <GlobalOffices />
      <CTA />
      <Footer />
    </main>
  );
}