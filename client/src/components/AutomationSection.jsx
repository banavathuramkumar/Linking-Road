import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiMessageSquare,
  FiClock,
  FiVideo,
  FiFacebook,
  FiInstagram,
  FiZap,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const listStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const iconHover = {
  whileHover: { rotate: 10, scale: 1.1 },
  transition: { type: "spring", stiffness: 300 },
};

const cardHover = {
  whileHover: { scale: 1.02, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" },
  transition: { duration: 0.3 },
};

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
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[36px] sm:text-[52px] lg:text-[72px] leading-none tracking-[-1px] font-semibold text-[#071133] text-center"
          >
            Automate Every
          </motion.h1>

          {/* INTERACTION BOX */}
          <motion.div
            variants={fadeZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 rotate-[-2deg] bg-white rounded-[20px] px-5 sm:px-8 py-3 shadow-[0px_15px_40px_rgba(0,0,0,0.10)]"
          >
            <h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[34px] sm:text-[48px] lg:text-[64px] leading-none tracking-[-1px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent"
            >
              Interaction
            </h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: "Inter" }}
            className="mt-8 text-center text-[15px] sm:text-[20px] leading-[32px] text-[#62748E] max-w-[900px] px-2"
          >
            Never miss a lead. Connect your social channels and let AI handle
            engagement 24/7.
          </motion.p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* LEFT BOX */}
          <div className="relative w-full max-w-[533px] h-[500px] rounded-[24px] border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-[#FAF5FF] overflow-hidden">
            {/* INNER CARD */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] rounded-[16px] bg-[#FFFFFFCC] border-t border-t-[#FFFFFF80] shadow-[0px_4px_24px_-4px_#0F172A0D] px-6 py-6 backdrop-blur-[20px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
              <motion.div
                className="flex items-center justify-center my-5"
                variants={fadeZoom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative flex items-center justify-center">
                  {/* LINE */}
                  <div className="absolute w-[2px] h-[36px] bg-[#E0E7FF]" />

                  {/* ICON */}
                  <motion.div
                    className="relative z-10 w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center"
                    {...iconHover}
                  >
                    <FiZap className="text-[#7C3AED] text-[14px]" />
                  </motion.div>
                </div>
              </motion.div>

              {/* REPLY BOX */}
              <motion.div
                className="rounded-[12px] bg-[#4C229E] px-5 py-5 shadow-[0px_10px_24px_rgba(76,34,158,0.18)]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
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
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT CONTAINER – Feature list */}
          <motion.div
            className="w-full max-w-[533px] flex flex-col gap-6"
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {automationFeatures.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={cardHover.whileHover}
                className="w-full min-h-[90px] rounded-[16px] border border-[#E2E8F0] border-t border-t-black/10 px-4 py-4 flex items-start gap-4 bg-white/50 backdrop-blur-[20px] transition-all duration-300"
              >
                {/* ICON */}
                <motion.div
                  className="w-14 h-14 rounded-[16px] bg-[#EEF2FF] flex items-center justify-center shrink-0"
                  {...iconHover}
                >
                  <div className="text-[#5B21B6] text-[24px]">{item.icon}</div>
                </motion.div>

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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
