import React from "react";
import { FiZap, FiClock, FiDatabase, FiMessageCircle } from "react-icons/fi";

const WorkflowBuilderSection = () => {
  return (
    <section className="relative w-full bg-[#0F172A] overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-[#4F46E5]/20 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-[#8B5CF6]/20 blur-[180px] rounded-full" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1445px] mx-auto flex flex-col items-center">
        {/* HEADING */}
        <div className="max-w-[900px] flex flex-col items-center">
          <h1
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[34px] sm:text-[42px] lg:text-[48px] leading-[48px] tracking-[-1.2px] font-semibold text-white text-center"
          >
            Build Automations <span className="text-[#8B5CF6]">Visually</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            style={{ fontFamily: "Inter" }}
            className="mt-8 max-w-[760px] text-center text-[16px] sm:text-[18px] leading-[28px] text-[#90A1B9]"
          >
            A powerful, canvas-based workflow builder. Connect triggers and
            actions with a simple drag and drop interface.
          </p>
        </div>

        {/* WORKFLOW CONTAINER */}
        <div className="relative mt-16 w-full max-w-[1131px] h-[600px] rounded-[24px] border border-white/10 border-t border-t-[#31415880] bg-[#1E293BCC] shadow-[0px_25px_50px_-12px_#00000040,0px_0px_0px_1px_#FFFFFF1A] overflow-hidden backdrop-blur-[40px]">
          {/* TOP BAR */}
          <div className="w-full h-[58px] border-b border-white/5 px-6 flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-5">
              {/* DOTS */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />

                <div className="w-3 h-3 rounded-full bg-[#EAB308]" />

                <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
              </div>

              {/* TITLE */}
              <p
                style={{ fontFamily: "Inter" }}
                className="text-[16px] text-white/80"
              >
                Lead Generation Flow
              </p>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex items-center gap-3">
              <button className="h-[32px] px-4 rounded-[8px] bg-[#312E81] text-[#C4B5FD] text-[14px] font-medium">
                Draft
              </button>

              <button className="h-[32px] px-4 rounded-[8px] bg-[#6D28D9] text-white text-[14px] font-medium">
                Publish
              </button>
            </div>
          </div>

          {/* FLOW AREA */}
          <div className="relative w-full h-[calc(100%-58px)]">
            {/* CONNECTION LINES */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1131 540"
              fill="none"
            >
              {/* TRIGGER -> ACTION */}
              <path
                d="M245 260 C 350 260, 420 260, 520 260"
                stroke="#4F46E5"
                strokeWidth="3"
                strokeDasharray="1 1"
                fill="none"
              />

              {/* ACTION -> DELAY */}
              <path
                d="M680 240 C 760 140, 820 140, 900 160"
                stroke="#4F46E5"
                strokeWidth="3"
                strokeDasharray="1 1"
                fill="none"
              />

              {/* ACTION -> CRM */}
              <path
                d="M680 260 C 760 360, 820 360, 900 360"
                stroke="#4F46E5"
                strokeWidth="3"
                strokeDasharray="1 1"
                fill="none"
              />
            </svg>

            {/* TRIGGER BOX */}
            <div className="absolute left-[30px] bottom-[140px] w-[200px] rounded-[16px] border border-[#334155] bg-[#1E293B] overflow-hidden shadow-[0px_20px_50px_rgba(0,0,0,0.30)]">
              {/* TOP */}
              <div className="h-[42px] bg-[#3B1D3A] px-4 flex items-center gap-3">
                <FiMessageCircle className="text-[#F472B6] text-[16px]" />

                <p
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[15px] text-white"
                >
                  Trigger
                </p>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h1
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[16px] font-semibold text-white"
                >
                  IG Comment
                </h1>

                <p
                  style={{ fontFamily: "Inter" }}
                  className="mt-2 text-[13px] text-[#94A3B8]"
                >
                  Keyword: "Guide"
                </p>
              </div>
            </div>

            {/* ACTION BOX */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] rounded-[18px] border border-[#4F46E5] bg-[#1E293B] overflow-hidden shadow-[0px_0px_50px_rgba(79,70,229,0.30)]">
              {/* TOP */}
              <div className="h-[42px] bg-[#2A315D] px-4 flex items-center gap-3">
                <FiZap className="text-[#A78BFA] text-[16px]" />

                <p
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[15px] text-white"
                >
                  Action
                </p>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h1
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[18px] font-semibold text-white"
                >
                  Send DM
                </h1>

                {/* MESSAGE */}
                <div className="mt-4 rounded-[8px] bg-[#0F172A] px-3 py-3 border border-white/5">
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="text-[12px] text-[#CBD5E1] truncate"
                  >
                    "Hey! Here is the link to the guide: ..."
                  </p>
                </div>
              </div>
            </div>

            {/* DELAY BOX */}
            <div className="absolute top-[104px] right-[52px] w-[200px] rounded-[16px] border border-[#334155] bg-[#1E293B] overflow-hidden">
              {/* TOP */}
              <div className="h-[42px] bg-[#263247] px-4 flex items-center gap-3">
                <FiClock className="text-[#94A3B8] text-[16px]" />

                <p
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[15px] text-white"
                >
                  Delay
                </p>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h1
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[16px] font-semibold text-white"
                >
                  Wait 24 Hours
                </h1>
              </div>
            </div>

            {/* CRM BOX */}
            <div className="absolute bottom-[120px] right-[30px] w-[220px] rounded-[16px] border border-[#334155] bg-[#1E293B] overflow-hidden">
              {/* TOP */}
              <div className="h-[42px] bg-[#164E63] px-4 flex items-center gap-3">
                <FiDatabase className="text-[#34D399] text-[16px]" />

                <p
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[15px] text-white"
                >
                  Integration
                </p>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h1
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[16px] font-semibold text-white"
                >
                  Add to CRM
                </h1>

                <p
                  style={{ fontFamily: "Inter" }}
                  className="mt-2 text-[13px] text-[#94A3B8]"
                >
                  HubSpot: Update Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowBuilderSection;
