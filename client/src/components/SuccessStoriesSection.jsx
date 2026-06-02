import React from "react";

import {
  FiTrendingUp,
  FiUsers,
  FiMessageCircle,
  FiArrowUpRight,
  FiZap,
} from "react-icons/fi";

const SuccessStoriesSection = () => {
  const stories = [
    {
      company: "Lumina Cosmetics",
      stat: "450%",
      statLabel: "INCREASE IN DM CONVERSIONS",
      title: "Turning Instagram Comments into a $2M Revenue Channel",
      desc: "Lumina used FlowPilot's Comment-to-DM triggers to automatically send personalized shade-matching quizzes to engaged followers.",
      icon: <FiTrendingUp />,
      color: "text-[#EC4899]",
      iconBg: "bg-[#FDF2F8]",
      iconColor: "text-[#EC4899]",
    },

    {
      company: "Creator Academy",
      stat: "25k+",
      statLabel: "LEADS CAPTURED IN 30 DAYS",
      title: "Automating Webinar Registrations at Scale",
      desc: "By integrating FlowPilot with their Reels strategy, Creator Academy replaced their entire link-in-bio funnel with instant DM delivery.",
      icon: <FiUsers />,
      color: "text-[#7C3AED]",
      iconBg: "bg-[#EEF2FF]",
      iconColor: "text-[#6366F1]",
    },

    {
      company: "FitLife Apparel",
      stat: "12hrs",
      statLabel: "SAVED PER WEEK ON SUPPORT",
      title: "Scaling Customer Support with Smart Auto-Replies",
      desc: "FitLife routed 80% of their inbound tracking requests to automated flows, letting their team focus on high-ticket sales.",
      icon: <FiMessageCircle />,
      color: "text-[#10B981]",
      iconBg: "bg-[#ECFDF5]",
      iconColor: "text-[#10B981]",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 sm:px-6 lg:px-8 py-[96px]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#F5D0FE]/40 blur-[140px] rounded-full" />

        <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#C7D2FE]/40 blur-[140px] rounded-full" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* TOP CONTENT */}
        <div className="max-w-[760px]">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 h-[48px] px-6 rounded-full bg-white border border-[#E2E8F0] shadow-[0px_4px_10px_rgba(15,23,42,0.06)]">
            <FiZap className="text-[#10B981] text-[16px]" />

            <p
              style={{ fontFamily: "Inter" }}
              className="text-[16px] font-medium text-[#334155]"
            >
              Success Stories
            </p>
          </div>

          {/* HEADING */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-4">
              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="text-[42px] sm:text-[56px] lg:text-[72px] leading-[42px] sm:leading-[60px] lg:leading-[72px] tracking-[-2px] font-semibold text-[#0F172A]"
              >
                Proven by
              </h1>

              {/* GRADIENT CARD */}
              <div className="rotate-[-2deg] rounded-[24px] bg-white px-6 sm:px-8 py-2 shadow-[0px_4px_4px_rgba(0,0,0,0.20)]">
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[42px] sm:text-[56px] lg:text-[72px] leading-[42px] sm:leading-[60px] lg:leading-[72px] tracking-[-2px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent"
                >
                  Top brands
                </h1>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p
            style={{ fontFamily: "Inter" }}
            className="mt-8 max-w-[720px] text-[18px] leading-[34px] text-[#475569]"
          >
            See how creators and businesses are transforming their engagement
            and revenue with FlowPilot's powerful automations.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-20 flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group w-full sm:min-w-[380px] lg:min-w-[400px] max-w-[400px] h-[460px] rounded-[24px] border border-[#E2E8F0] bg-white p-7 flex flex-col justify-between shadow-[0px_8px_10px_-6px_#E2E8F080,0px_20px_25px_-5px_#E2E8F080] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0px_30px_60px_rgba(15,23,42,0.12)]"
            >
              {/* TOP CONTENT */}
              <div>
                {/* HEADER */}
                <div className="flex items-start justify-between gap-4">
                  {/* COMPANY */}
                  <h1
                    style={{ fontFamily: "ClashDisplay" }}
                    className="text-[18px] leading-[26px] font-semibold text-[#0F172A]"
                  >
                    {story.company}
                  </h1>

                  {/* ICON */}
                  <div
                    className={`w-[46px] h-[46px] rounded-[14px] flex items-center justify-center shrink-0 ${story.iconBg}`}
                  >
                    <div className={`text-[20px] ${story.iconColor}`}>
                      {story.icon}
                    </div>
                  </div>
                </div>

                {/* STAT */}
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className={`mt-8 text-[50px] sm:text-[56px] leading-[54px] tracking-[-2px] font-semibold ${story.color}`}
                >
                  {story.stat}
                </h1>

                {/* LABEL */}
                <p
                  style={{ fontFamily: "Inter" }}
                  className="mt-2 text-[11px] font-semibold tracking-[1.5px] text-[#64748B]"
                >
                  {story.statLabel}
                </p>

                {/* TITLE */}
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="mt-7 text-[19px] sm:text-[21px] leading-[29px] tracking-[-0.4px] font-semibold text-[#0F172A]"
                >
                  {story.title}
                </h1>

                {/* DESCRIPTION */}
                <p
                  style={{ fontFamily: "Inter" }}
                  className="mt-4 text-[14px] leading-[26px] text-[#64748B]"
                >
                  {story.desc}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="pt-5 border-t border-[#E2E8F0] flex items-center justify-between -mt-2">
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[16px] font-semibold text-[#0F172A]"
                >
                  Read full story
                </p>

                {/* ARROW */}
                <div className="w-[40px] h-[40px] rounded-full bg-[#F8FAFC] flex items-center justify-center transition-all duration-300 group-hover:bg-[#EEF2FF]">
                  <FiArrowUpRight className="text-[#0F172A] text-[17px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
