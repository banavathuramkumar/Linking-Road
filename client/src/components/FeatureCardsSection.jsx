import React from "react";

import { FiServer, FiGrid, FiShare2, FiLayers } from "react-icons/fi";

const FeatureCardsSection = () => {
  const cards = [
    {
      icon: <FiServer />,
      title: "Queue & Slow Down",
      desc: "Safe execution with traffic management and pacing to protect your social accounts.",
    },

    {
      icon: <FiGrid />,
      title: "Analytics Dashboard",
      desc: "Real-time metrics on engagement, clicks, and funnel conversion.",
    },

    {
      icon: <FiShare2 />,
      title: "Referral System",
      desc: "Turn your audience into your sales force with viral growth loops.",
    },

    {
      icon: <FiLayers />,
      title: "CMS / Content System",
      desc: "Educate, rank, and grow organically with our built-in SEO tools.",
    },
  ];

  return (
    <section className="w-full border-t border-[#F1F5F9] bg-white px-4 sm:px-6 lg:px-[131px] py-[96px] overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1442px] mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full min-h-[225px] rounded-[24px] border border-[#E2E8F0] border-t border-t-[#F1F5F9] bg-[#F8FAFC] p-8 flex flex-col"
            >
              {/* ICON BOX */}
              <div className="w-[48px] h-[48px] rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] flex items-center justify-center">
                <div className="text-[#5B21B6] text-[24px]">{card.icon}</div>
              </div>

              {/* TITLE */}
              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="mt-10 text-[28px] sm:text-[32px] leading-[36px] tracking-[-0.5px] font-semibold text-[#0F172B]"
              >
                {card.title}
              </h1>

              {/* DESCRIPTION */}
              <p
                style={{ fontFamily: "Inter" }}
                className="mt-5 max-w-[460px] text-[16px] leading-[24px] text-[#62748E]"
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
