import React from "react";
import {
  FiMessageSquare,
  FiClock,
  FiVideo,
  FiFacebook,
  FiInstagram,
  FiZap,
} from "react-icons/fi";

const AutomationSection = () => {
  const automationFeatures = [
    {
      title: "Comment AutoDM",
      description: "Instantly reply to comments with a DM.",
      icon: <FiMessageSquare />,
    },

    {
      title: "Story AutoDM",
      description: "Trigger workflows when followers reply to stories.",
      icon: <FiClock />,
    },

    {
      title: "Reels AutoDM",
      description: "Capture leads directly from viral reels.",
      icon: <FiVideo />,
    },

    {
      title: "Facebook AutoDM",
      description: "Engage Facebook audiences on autopilot.",
      icon: <FiFacebook />,
    },

    {
      title: "Live Interaction",
      description: "Automate responses during IG Live sessions.",
      icon: <FiInstagram />,
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1179px] mx-auto">
        {/* HEADING */}
        <div className="flex flex-col items-center">
          <h1
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[36px] sm:text-[52px] lg:text-[72px] leading-none tracking-[-2px] font-semibold text-[#071133] text-center"
          >
            Automate Every
          </h1>

          {/* INTERACTION BOX */}
          <div className="mt-4 rotate-[-2deg] bg-white rounded-[20px] px-5 sm:px-8 py-3 shadow-[0px_15px_40px_rgba(0,0,0,0.10)]">
            <h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[34px] sm:text-[48px] lg:text-[64px] leading-none tracking-[-2px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent"
            >
              Interaction
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p
            style={{ fontFamily: "Inter" }}
            className="mt-8 text-center text-[15px] sm:text-[20px] leading-[32px] text-[#62748E] max-w-[900px] px-2"
          >
            Never miss a lead. Connect your social channels and let AI handle
            engagement 24/7.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* LEFT BOX */}
          <div className="relative w-full max-w-[533px] h-[500px] rounded-[24px] border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-[#FAF5FF] overflow-hidden">
            {/* INNER CARD */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] rounded-[16px] bg-[#FFFFFFCC] border-t border-t-[#FFFFFF80] shadow-[0px_4px_24px_-4px_#0F172A0D] px-6 py-6 backdrop-blur-[20px]">
              {/* TOP */}
              <div className="flex items-start gap-4">
                {/* PROFILE */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AD46FF] to-[#F6339A] shrink-0" />

                {/* USER */}
                <div>
                  <h1
                    style={{ fontFamily: "GeneralSans" }}
                    className="text-[14px] leading-[20px] font-semibold text-[#0F172A]"
                  >
                    @sarah_growth
                  </h1>

                  <p
                    style={{ fontFamily: "Inter" }}
                    className="text-[12px] leading-[16px] text-[#62748E]"
                  >
                    Just commented "Send"
                  </p>
                </div>
              </div>

              {/* COMMENT BOX */}
              <div className="mt-5 rounded-[8px] bg-[#F8FAFC] border-t border-t-[#F1F5F9] px-4 py-4">
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[12px] leading-[24px] text-[#314158]"
                >
                  This is amazing! Send me the link
                  <br />
                  please 🔥
                </p>
              </div>

              {/* CENTER ICON */}
              <div className="flex items-center justify-center my-5">
                <div className="relative flex items-center justify-center">
                  {/* LINE */}
                  <div className="absolute w-[2px] h-[36px] bg-[#E0E7FF]" />

                  {/* ICON */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                    <FiZap className="text-[#7C3AED] text-[14px]" />
                  </div>
                </div>
              </div>

              {/* REPLY BOX */}
              <div className="rounded-[12px] bg-[#4C229E] px-5 py-5 shadow-[0px_10px_24px_rgba(76,34,158,0.18)]">
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[12px] leading-[24px] text-white"
                >
                  Hey Sarah! Thanks for the love.
                  <br />
                  Here's the link to the masterclass:
                  <br />
                  flowpilot.ai/class 🚀
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER */}
          <div className="w-full max-w-[533px] flex flex-col gap-6">
            {automationFeatures.map((item, index) => (
              <div
                key={index}
                className="w-full min-h-[90px] rounded-[16px] border border-[#E2E8F0] border-t border-t-black/10 px-4 py-4 flex items-start gap-4 bg-white/50 backdrop-blur-[20px] hover:bg-white transition-all duration-300"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-[16px] bg-[#EEF2FF] flex items-center justify-center shrink-0">
                  <div className="text-[#5B21B6] text-[24px]">{item.icon}</div>
                </div>

                {/* CONTENT */}
                <div>
                  {/* TITLE */}
                  <h1
                    style={{ fontFamily: "ClashDisplay" }}
                    className="text-[18px] leading-[28px] font-semibold text-[#0F172B]"
                  >
                    {item.title}
                  </h1>

                  {/* DESCRIPTION */}
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="mt-1 text-[15px] sm:text-[16px] leading-[24px] text-[#62748E]"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
