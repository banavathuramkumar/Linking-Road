import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCheck, FiX } from "react-icons/fi";

const ComparisonSection = () => {
  const navigate = useNavigate();
  const comparisonData = [
    {
      feature: "Workflow Builder",
      tag: "CRUCIAL",
      linkingroad: "Modern Next-Gen Canvas",
      manychat: "Clunky Linear Steps",
    },

    {
      feature: "Setup Time",
      linkingroad: "Under 2 minutes",
      manychat: "Hours of tutorials",
    },

    {
      feature: "Instagram & FB Compliant",
      linkingroad: "100% Official API",
      manychat: "Often uses scraping",
    },

    {
      feature: "Built-in CRM & Inbox",
      tag: "CRUCIAL",
      linkingroad: "Included natively",
      manychat: "Requires Zapier/Make",
    },

    {
      feature: "Learning Curve",
      linkingroad: "Zero (Intuitive UI)",
      manychat: "High (Developer focused)",
    },

    {
      feature: "Analytics",
      linkingroad: "Cinematic real-time data",
      manychat: "Basic text logs",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1120px] mx-auto flex flex-col items-center">
        {/* BADGE */}
        <div className="h-[42px] px-5 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shadow-[0px_4px_12px_rgba(0,0,0,0.04)]">
          <p
            style={{ fontFamily: "GeneralSans" }}
            className="text-[14px] font-medium text-[#475569]"
          >
            ⚡ Why switch to FlowPilot?
          </p>
        </div>

        {/* HEADING */}
        <div className="mt-8 flex flex-col items-center">
          <h1
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[34px] sm:text-[48px] lg:text-[64px] leading-none tracking-[-1px] font-semibold text-[#071133] text-center"
          >
            A platform that feels
          </h1>

          {/* GRADIENT BOX */}
          <div className="mt-4 rotate-[-2deg] bg-white rounded-[18px] sm:rounded-[24px] px-4 sm:px-6 py-3 shadow-[0px_15px_40px_rgba(0,0,0,0.10)]">
            <h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[30px] sm:text-[42px] lg:text-[58px] leading-none tracking-[-1px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent text-center"
            >
              designed, not assembled.
            </h1>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p
          style={{ fontFamily: "GeneralSans" }}
          className="mt-8 max-w-[760px] text-center text-[15px] sm:text-[18px] leading-[30px] text-[#64748B] px-2"
        >
          Stop wrestling with outdated tools. See how FlowPilot compares to
          legacy automation platforms.
        </p>

        {/* TABLE */}
        <div className="mt-12 sm:mt-16 w-full overflow-x-auto">
          <div className="min-w-[760px] rounded-[22px] sm:rounded-[28px] border border-[#E2E8F0] bg-white overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.04)]">
            {/* HEADER */}
            <div className="grid grid-cols-3 w-full min-h-[92.8px] border-b border-[#F1F5F9]">
              {/* FEATURE */}
              <div className="p-4 sm:p-6 lg:p-8 flex items-center">
                <p
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[12px] sm:text-[14px] uppercase tracking-[1.2px] font-semibold text-[#64748B]"
                >
                  Feature
                </p>
              </div>

              {/* LINKINGROAD */}
              <div className="p-4 sm:p-6 lg:p-8 flex items-center justify-center">
                <div className="w-[140px] sm:w-[162px] h-[40px] sm:h-[44px] rounded-[12px] bg-[#4F39F6] flex items-center justify-center shadow-[0px_2px_4px_-2px_#615FFF33,0px_4px_6px_-1px_#615FFF33]">
                  <h1
                    style={{ fontFamily: "ClashDisplay" }}
                    className="text-[15px] sm:text-[18px] leading-[28px] font-semibold text-white text-center"
                  >
                    LINKINGROAD
                  </h1>
                </div>
              </div>

              {/* MANYCHAT */}
              <div className="p-4 sm:p-6 lg:p-8 flex items-center justify-center">
                <h1
                  style={{ fontFamily: "Inter" }}
                  className="text-[15px] sm:text-[18px] leading-[28px] font-bold text-[#62748E] text-center"
                >
                  Manychat
                </h1>
              </div>
            </div>

            {/* ROWS */}
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 w-full min-h-[92.8px] border-b border-[#F1F5F9] ${
                  item.tag ? "bg-[#EEF2FF4D]" : "bg-white"
                }`}
              >
                {/* FEATURE */}
                <div className="px-6 sm:px-8 py-6 flex items-center">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1
                      style={{ fontFamily: "GeneralSans" }}
                      className="text-[14px] sm:text-[18px] font-medium text-[#0F172B]"
                    >
                      {item.feature}
                    </h1>

                    {item.tag && (
                      <span
                        style={{ fontFamily: "GeneralSans" }}
                        className="px-2 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[10px] sm:text-[11px] font-semibold tracking-[0.5px]"
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* LINKINGROAD */}
                <div className="px-6 sm:px-8 py-6 flex flex-col items-center justify-center text-center">
                  <FiCheck className="text-[#10B981] text-[22px] sm:text-[26px]" />

                  <p
                    style={{ fontFamily: "GeneralSans" }}
                    className="mt-2 text-[13px] sm:text-[16px] font-semibold text-[#059669]"
                  >
                    {item.linkingroad}
                  </p>
                </div>

                {/* MANYCHAT */}
                <div className="px-6 sm:px-8 py-6 flex flex-col items-center justify-center text-center">
                  <FiX className="text-[#FB7185] text-[22px] sm:text-[26px]" />

                  <p
                    style={{ fontFamily: "GeneralSans" }}
                    className="mt-2 text-[13px] sm:text-[16px] text-[#94A3B8]"
                  >
                    {item.manychat}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="p-6 sm:p-8 flex items-center justify-center">
              <button
              onClick={() => navigate("/signup")}
                style={{ fontFamily: "GeneralSans" }}
                className="h-[50px] sm:h-[56px] px-8 sm:px-10 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-[15px] sm:text-[18px] font-semibold shadow-[0px_15px_40px_rgba(236,72,153,0.25)] hover:scale-[1.02] transition-all duration-300"
              >
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
