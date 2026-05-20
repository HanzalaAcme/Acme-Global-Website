"use client";
import { useState } from "react";
import FAQSection from "../components/faqs/Faqs";
import FAQHero from "../components/faqs/Hero";
import CTA from "../components/faqs/CTA";
export default function FAQs() {
     const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
        
      <FAQHero 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}/>
      <FAQSection 
        searchQuery={searchQuery}/>
      <CTA />  
    </div>
  );
}