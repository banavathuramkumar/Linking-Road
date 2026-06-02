import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What happens if I hit my automation limits?",

      answer:
        "If you exceed your monthly automation limit, we'll notify you via email. Automations will continue to run for an overage fee, or you can upgrade your plan.",
    },

    {
      question: "Is it safe to use with my Instagram account?",

      answer:
        "Yes. LINKINGROAD uses official APIs and follows platform-safe automation practices for Instagram and Facebook.",
    },

    {
      question: "Can I connect my own CRM?",

      answer:
        "Absolutely. You can integrate HubSpot, Salesforce, Notion, Zapier, and many more CRM tools seamlessly.",
    },

    {
      question: "Do I need coding skills to build workflows?",

      answer:
        "No coding is required. Our visual workflow builder is completely drag-and-drop and beginner friendly.",
    },
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-[120px] py-[96px] overflow-hidden">
      {/* CONTAINER */}
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        {/* HEADING */}
        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[36px] sm:text-[48px] font-semibold tracking-[-1.2px] leading-[40px] sm:leading-[52px] text-[#0F172B] text-center"
        >
          Frequently Asked Questions
        </h1>

        {/* SUBTEXT */}
        <p
          style={{ fontFamily: "Inter" }}
          className="mt-5 text-[16px] sm:text-[18px] leading-[28px] text-[#64748B] text-center"
        >
          Everything you need to know about the product and billing.
        </p>

        {/* FAQ LIST */}
        <div className="mt-14 w-full max-w-[868px] flex flex-col gap-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC80] overflow-hidden transition-all duration-300 ${
                  isOpen ? "min-h-[150px]" : "min-h-[74px]"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 sm:px-7 py-6 cursor-pointer"
                >
                  {/* QUESTION TEXT */}
                  <h3
                    style={{ fontFamily: "GeneralSans" }}
                    className="text-left text-[16px] sm:text-[18px] font-semibold leading-[24px] text-[#0F172B]"
                  >
                    {faq.question}
                  </h3>

                  {/* ARROW */}
                  <FiChevronDown
                    className={`text-[22px] text-[#94A3B8] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      style={{ fontFamily: "Inter" }}
                      className="px-6 sm:px-7 pb-7 text-[16px] leading-[26px] text-[#45556C]"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
