import React from "react";
import { motion } from "framer-motion";

import { FiCheckCircle, FiInbox, FiUser } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const listStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemFade = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const iconHover = {
  whileHover: { rotate: 10, scale: 1.1 },
  transition: { type: "spring", stiffness: 300 },
};

const TeamInboxSection = () => {
  const features = [
    "Automated inbox replies",
    "Trigger-based routing",
    "Sequential messaging",
    "AI inbox assistant",
  ];

  return (
    <section className="w-full bg-white border-y border-[#E2E8F0] px-4 sm:px-6 lg:px-[102px] py-[96px] overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1442px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* LEFT CONTENT */}
        <motion.div
          className="w-full max-w-[520px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* HEADING */}
          <div>
            <motion.h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[38px] sm:text-[52px] lg:text-[64px] leading-[42px] sm:leading-[58px] lg:leading-[64px] tracking-[-1px] sm:tracking-[-1.5px] font-semibold text-[#0F172A]"
              variants={fadeDown}
            >
              Automate
              <br />
              Conversations
            </motion.h1>

            {/* GRADIENT TEXT */}
            <motion.h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[38px] sm:text-[52px] lg:text-[64px] leading-[42px] sm:leading-[58px] lg:leading-[64px] tracking-[-1px] sm:tracking-[-1.5px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent"
              variants={fadeDown}
            >
              At Scale
            </motion.h1>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            style={{ fontFamily: "Inter" }}
            className="mt-8 text-[16px] sm:text-[18px] leading-[30px] text-[#64748B]"
            variants={fadeUp}
          >
            A unified inbox powered by AI. Route messages, automate follow-ups,
            and close deals without ever leaving the dashboard.
          </motion.p>

          {/* FEATURES */}
          <motion.div
            className="mt-10 flex flex-col gap-6"
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                variants={itemFade}
              >
                {/* ICON */}
                <motion.div
                  className="w-6 h-6 rounded-full border border-[#7C3AED] flex items-center justify-center shrink-0"
                  {...iconHover}
                >
                  <FiCheckCircle className="text-[#7C3AED] text-[14px]" />
                </motion.div>

                {/* TEXT */}
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[16px] sm:text-[18px] font-medium text-[#334155]"
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT CHAT UI */}
        <motion.div
          className="w-full max-w-[620px] rounded-[24px] border border-[#E2E8F0] bg-white overflow-hidden shadow-[0px_25px_50px_-12px_rgba(15,23,42,0.12)]"
          variants={fadeZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* TOP BAR */}
          <div className="h-[72px] border-b border-[#E2E8F0] px-5 sm:px-6 flex items-center justify-between bg-[#F8FAFC]">
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <FiInbox className="text-[#94A3B8] text-[20px]" />
              <h1
                style={{ fontFamily: "GeneralSans" }}
                className="text-[18px] font-semibold text-[#334155]"
              >
                Team Inbox
              </h1>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF2FF]">
              <HiSparkles className="text-[#7C3AED] text-[14px]" />
              <p
                style={{ fontFamily: "Inter" }}
                className="text-[14px] font-medium text-[#5B21B6]"
              >
                AI Active
              </p>
            </div>
          </div>

          {/* BODY */}
          <div className="flex h-[540px]">
            {/* SIDEBAR */}
            <div className="hidden sm:block w-[180px] border-r border-[#E2E8F0] bg-[#F8FAFC] p-4">
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className={`rounded-[14px] p-4 transition-all duration-300 ${
                      item === 1
                        ? "bg-white border border-[#E2E8F0] shadow-sm"
                        : "hover:bg-white/70"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between">
                      <h1
                        style={{ fontFamily: "GeneralSans" }}
                        className="text-[18px] font-semibold text-[#0F172A]"
                      >
                        Alex {item}
                      </h1>
                      <span
                        style={{ fontFamily: "Inter" }}
                        className="text-[12px] text-[#94A3B8]"
                      >
                        2m ago
                      </span>
                    </div>

                    <p
                      style={{ fontFamily: "Inter" }}
                      className="mt-2 text-[14px] text-[#64748B] truncate"
                    >
                      I'm interested in the pro plan...
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CHAT AREA */}
            <div className="flex-1 flex flex-col justify-between bg-white">
              {/* MESSAGES */}
              <div className="p-5 sm:p-6">
                {/* USER MESSAGE */}
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* AVATAR */}
                  <div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0">
                    <FiUser className="text-[#64748B] text-[18px]" />
                  </div>

                  {/* USER CHAT */}
                  <div className="max-w-[360px] rounded-[18px] bg-[#F1F5F9] px-5 py-4">
                    <p
                      style={{ fontFamily: "Inter" }}
                      className="text-[15px] sm:text-[16px] leading-[30px] text-[#475569]"
                    >
                      Hey team, I'm interested in the pro plan but had a
                      question about limits.
                    </p>
                  </div>
                </motion.div>

                {/* AI REPLY */}
                <motion.div
                  className="mt-8 flex items-start justify-end gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* MESSAGE */}
                  <div className="max-w-[420px] rounded-[18px] bg-[#4C229E] px-5 py-5 shadow-[0px_15px_40px_rgba(76,34,158,0.20)]">
                    <p
                      style={{ fontFamily: "Inter" }}
                      className="text-[15px] sm:text-[16px] leading-[30px] text-white"
                    >
                      Hi Alex! The Pro plan includes unlimited workflows and
                      50,000 monthly automation runs. Would you like me to send
                      you the full comparison guide?
                    </p>
                  </div>

                  {/* AI ICON */}
                  <div className="w-10 h-10 rounded-full bg-[#EEF2FF] border border-[#DDD6FE] flex items-center justify-center shrink-0">
                    <HiSparkles className="text-[#7C3AED] text-[18px]" />
                  </div>
                </motion.div>
              </div>

              {/* INPUT */}
              <div className="p-5 sm:p-6 border-t border-[#F1F5F9]">
                <motion.div
                  className="w-full h-[56px] rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-5 flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="text-[14px] sm:text-[16px] text-[#9CA3AF]"
                  >
                    Type a message or use / for AI commands...
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamInboxSection;
