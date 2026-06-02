import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import AboutUs from "../components/AboutUs";
import ComparisonSection from "../components/ComparisonSection";
import SolutionsSection from "../components/SolutionsSection";
import AutomationSection from "../components/AutomationSection";
import WorkflowBuilderSection from "../components/WorkflowBuilderSection";
import TeamInboxSection from "../components/TeamInboxSection";
import LeadGenerationSection from "../components/LeadGenerationSection";
import FeatureCardsSection from "../components/FeatureCardsSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import TestimonialSection from "../components/TestimonialSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import FooterSection from "../components/FooterSection";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#F6F1FF]">
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1220px] h-[697px] rounded-full bg-[#4C229E] blur-[220px] opacity-80" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustedBy />
        <AboutUs />
        <ComparisonSection />
        <SolutionsSection />
        <AutomationSection />
        <WorkflowBuilderSection />
        <TeamInboxSection />
        <LeadGenerationSection />
        <FeatureCardsSection />
        <SuccessStoriesSection />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
};

export default HomePage;
