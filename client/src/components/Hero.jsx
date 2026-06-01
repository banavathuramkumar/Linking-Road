import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { HiTrendingUp } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { FiMessageCircle, FiZap } from "react-icons/fi";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full top-20 min-h-screen flex flex-col items-center px-4 overflow-hidden pb-24">
      {/* TOP BADGE */}
      <div className="mt-10 sm:mt-14 h-[38px] px-5 rounded-full bg-white border border-[#E0E7FF] flex items-center justify-center shadow-[0px_4px_12px_rgba(76,34,158,0.08)]">
        <p className="text-[12px] sm:text-[14px] font-medium text-[#4C229E] whitespace-nowrap">
          ✧ Introducing LinkingRoad AI 2.0
        </p>
      </div>

      {/* HERO CONTENT */}
      <div className="mt-10 flex flex-col items-center text-center w-full max-w-[1000px]">
        {/* HEADING */}
        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[72px] font-semibold text-[#071133] leading-[1] tracking-[-2px]"
        >
          Turn Every
        </h1>

        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[72px] font-semibold text-[#071133] leading-[1] tracking-[-2px] mt-1"
        >
          Comment
        </h1>

        {/* GRADIENT BOX */}
        <div className="mt-4 rotate-[-2deg] bg-white rounded-[20px] sm:rounded-[28px] px-5 sm:px-8 py-3 shadow-[0px_20px_60px_rgba(0,0,0,0.15)]">
          <h1
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[72px] font-semibold tracking-[-2px] bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent leading-none"
          >
            Into Revenue
          </h1>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-8 text-[15px] sm:text-[18px] md:text-[20px] leading-[28px] text-[#6B7280] max-w-[760px] px-2">
          Automate engagement, capture leads, and drive conversions
          effortlessly. The most powerful AI social automation platform for
          modern growth teams.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center">
          {/* START FREE TRIAL */}
          <button
            onClick={() => navigate("/signup")}
            className="w-full sm:w-[190px] h-[52px] rounded-full bg-[#4C229E] text-white text-[15px] sm:text-[16px] font-medium shadow-[0px_4px_6px_-4px_#615FFF40,0px_10px_15px_-3px_#615FFF40] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Start Free Trial
            <HiArrowRight className="text-[18px]" />
          </button>

          {/* DEMO BUTTON */}
          <button
            onClick={() => navigate("/demo")}
            className="w-full sm:w-[190px] h-[52px] rounded-full bg-white text-[#0F172B] text-[15px] sm:text-[16px] font-medium shadow-[0px_4px_6px_-4px_#615FFF40,0px_10px_15px_-3px_#615FFF40] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaPlay className="text-[11px]" />
            Demo Video
          </button>
        </div>
      </div>

      {/* AUTOMATION PREVIEW */}
      <div className="relative mt-16 w-full max-w-[1100px] h-[300px] sm:h-[420px] md:h-[520px] lg:h-[580px] rounded-[24px] sm:rounded-[28px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-[0px_25px_80px_rgba(0,0,0,0.12)] overflow-hidden">
        {/* SIDEBAR */}
        <div className="absolute left-0 top-0 w-[90px] sm:w-[160px] md:w-[220px] lg:w-[260px] h-full border-r border-[#E2E8F0] bg-white p-3 sm:p-5 flex flex-col gap-3 sm:gap-4">
          <div className="w-[60px] sm:w-[95px] h-[24px] sm:h-[32px] rounded-[8px] bg-[#F1F5F9]" />

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="w-full h-[28px] sm:h-[40px] rounded-[10px] bg-[#F1F5F9]"
            />
          ))}
        </div>

        {/* COMMENT CARD */}
        <div className="absolute top-[50px] sm:top-[70px] md:top-[85px] left-[110px] sm:left-[210px] md:left-[300px] lg:left-[345px] w-[170px] sm:w-[220px] md:w-[240px] lg:w-[255px] h-[60px] sm:h-[70px] md:h-[74px] rounded-[18px] bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.12)] px-3 sm:px-5 flex items-center gap-3 sm:gap-4">
          <div className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] rounded-full bg-[#FCE7F3] flex items-center justify-center">
            <FiMessageCircle className="text-[#EC4899] text-[16px]" />
          </div>

          <div>
            <h1 className="text-[14px] sm:text-[18px] md:text-[22px] font-semibold text-[#0F172B] leading-none">
              New Comment
            </h1>

            <p className="text-[11px] sm:text-[13px] md:text-[14px] text-[#64748B] mt-1 sm:mt-2">
              "Send me the link"
            </p>
          </div>
        </div>

        {/* SVG CURVE */}
        <svg
          className="absolute hidden md:block top-[110px] left-[620px]"
          width="180"
          height="110"
          viewBox="0 0 180 110"
          fill="none"
        >
          <path
            d="M5 5C80 0 80 100 175 100"
            stroke="#CBD5E1"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>

        {/* AUTO DM CARD */}
        <div className="absolute top-[120px] sm:top-[160px] right-[10px] sm:right-[20px] w-[170px] sm:w-[220px] md:w-[240px] lg:w-[255px] h-[60px] sm:h-[70px] md:h-[74px] rounded-[18px] bg-white border border-[#615FFF] shadow-[0px_10px_30px_rgba(0,0,0,0.12)] px-3 sm:px-5 flex items-center gap-3 sm:gap-4">
          <div className="w-[34px] sm:w-[42px] h-[34px] sm:h-[42px] rounded-full bg-[#EDE9FE] flex items-center justify-center">
            <FiZap className="text-[#615FFF] text-[16px]" />
          </div>

          <div>
            <h1 className="text-[14px] sm:text-[18px] md:text-[22px] font-semibold text-[#0F172B] leading-none">
              Auto-DM
            </h1>

            <p className="text-[11px] sm:text-[13px] md:text-[14px] text-[#64748B] mt-1 sm:mt-2">
              Send Lead Magnet
            </p>
          </div>
        </div>

        {/* CONVERSION CARD */}
        <div className="absolute bottom-[40px] sm:bottom-[80px] md:bottom-[130px] right-[20px] sm:right-[80px] md:right-[120px] w-[160px] sm:w-[190px] md:w-[205px] h-[70px] sm:h-[80px] md:h-[86px] rounded-[20px] bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.10)] px-3 sm:px-5 flex items-center gap-3 sm:gap-4">
          <div className="w-[38px] sm:w-[50px] h-[38px] sm:h-[50px] rounded-full bg-[#DCFCE7] flex items-center justify-center">
            <HiTrendingUp className="text-[#16A34A] text-[22px] sm:text-[26px]" />
          </div>

          <div>
            <p className="text-[11px] sm:text-[14px] text-[#64748B]">
              Conversion Rate
            </p>

            <h1 className="text-[24px] sm:text-[34px] md:text-[40px] font-bold text-[#0F172B] leading-none mt-1">
              +42.8%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
