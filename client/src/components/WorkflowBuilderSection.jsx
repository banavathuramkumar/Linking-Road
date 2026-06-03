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
        <div className="relative mt-16 w-full max-w-[1131px] h-[400px] md:h-[500px] lg:h-[600px] rounded-[24px] border border-white/10 border-t border-t-[#31415880] bg-[#1E293BCC] shadow-[0px_25px_50px_-12px_#00000040,0px_0px_0px_1px_#FFFFFF1A] overflow-hidden backdrop-blur-[40px]">
          </div>
      </div>
    </section>
  );
};

export default WorkflowBuilderSection;
