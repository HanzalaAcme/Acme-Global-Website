"use client";

import { useState } from "react";

import FAQSection from "./Faqs";

import FAQHero from "./Hero";

import CTA from "./CTA";

export default function FAQsClient() {

  const [searchQuery, setSearchQuery] =
    useState("");

  return (

    <div>

      <FAQHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <FAQSection
        searchQuery={searchQuery}
      />

      <CTA />

    </div>
  );
}