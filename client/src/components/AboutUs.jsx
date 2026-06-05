import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiShield } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutUs = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-[130px] py-16 sm:py-24 overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="w-full lg:max-w-[540px]">
          {/* BADGE */}
          <div className="inline-flex items-center justify-center h-[42px] px-5 rounded-full bg-white border border-[#E2E8F0] shadow-[0px_8px_20px_rgba(0,0,0,0.04)]">
            <p className="text-[15px] font-medium text-[#4C229E]">
              ✦ Our Story
            </p>
          </div>

          {/* HEADING */}
          <div className="mt-8">
            <h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[18px] sm:text-[24px] lg:text-[36px] leading-[1] tracking-[0.5px] font-semibold text-[#071133]"
            >
              Building the future of
            </h1>

            {/* GRADIENT BOX */}
            <div className="inline-block mt-4 rotate-[-2deg] bg-white rounded-[20px] sm:rounded-[24px] px-4 sm:px-5 py-2 shadow-[0px_20px_50px_rgba(0,0,0,0.12)]">
              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="text-[18px] sm:text-[24px] lg:text-[36px] font-semibold leading-none tracking-[1px] bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent"
              >
                social engagement.
              </h1>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-10 flex flex-col gap-8">
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[16px] sm:text-[18px] leading-[30px] font-normal text-[#45556C]"
            >
              We started <span className="font-semibold">LINKINGROAD</span>{" "}
              because we saw creators and brands struggling to keep up with
              their DMs and comments. Legacy tools were too complex, too clunky,
              and felt like they belonged in 2015.
            </p>

            <p
              style={{ fontFamily: "Inter" }}
              className="text-[16px] sm:text-[18px] leading-[30px] font-normal text-[#45556C]"
            >
              Our mission is simple: to give you a cinematic, intuitive canvas
              to build automations that feel like magic, turning your audience
              into a loyal community while you sleep.
            </p>
          </div>

          {/* FEATURES */}
          <div className="mt-10 flex flex-col sm:flex-row gap-8 sm:gap-10">
            {/* FEATURE 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] flex items-center justify-center shrink-0">
                <FiTarget className="text-[#6D28D9] text-[20px]" />
              </div>

              <div>
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[22px] font-semibold text-[#0F172B]"
                >
                  Creator First
                </h1>

                <p className="mt-2 text-[14px] leading-[28px] text-[#62748E]">
                  Built specifically for modern social media.
                </p>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5FF] flex items-center justify-center shrink-0">
                <FiShield className="text-[#9333EA] text-[20px]" />
              </div>

              <div>
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[22px] font-semibold text-[#0F172B]"
                >
                  Reliable API
                </h1>

                <p className="mt-2 text-[14px] leading-[28px] text-[#62748E]">
                  100% compliant with platform rules.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT STATS CARD */}
        <div className="w-full max-w-[560px] rounded-[36px] bg-gradient-to-br from-[#15103A] via-[#111827] to-[#071133] p-6 sm:p-8 shadow-[0px_40px_80px_rgba(0,0,0,0.30)]">
          {/* TOP ROW */}
          <div className="flex items-center gap-4">
            {/* AVATARS */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-12 h-12 rounded-full border-2 border-[#111827] bg-[#1E293B] flex items-center justify-center text-white text-[14px]"
                >
                  👥
                </div>
              ))}
            </div>

            <p className="text-[16px] text-[#94A3B8] font-medium">
              Trusted by top brands
            </p>
          </div>

          {/* STATS GRID */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                number: "50M+",
                label: "Automations Run",
              },
              {
                number: "10k+",
                label: "Active Creators",
              },
              {
                number: "2.5M",
                label: "Hours Saved",
              },
              {
                number: "100M+",
                label: "Messages Sent",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] border border-[#334155] bg-[#1E293B80] backdrop-blur-xl p-6 min-h-[140px] flex flex-col justify-center"
              >
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[38px] sm:text-[46px] font-semibold text-white"
                >
                  {item.number}
                </h1>

                <p className="mt-2 text-[14px] text-[#94A3B8]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
