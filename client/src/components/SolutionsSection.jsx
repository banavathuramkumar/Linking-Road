import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiStar,
  FiShoppingBag,
  FiTrendingUp,
  FiAward,
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

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      title: "Creators & Influencers",
      description:
        "Turn your followers into an email list. Automatically DM links to followers who comment on your Reels and Posts.",
      icon: <FiStar />,
      color: "from-[#8B5CF6] to-[#EC4899]",
      glow: "shadow-[0px_0px_70px_rgba(139,92,246,0.45)]",
      badge: "+300% Engagement",
      dashboardTitle: "Auto-Reply Active",
      dashboardDesc: "Sending link to 1,204 commenters",
      lines: ["82%", "58%", "74%"],
    },

    {
      title: "E-commerce Brands",
      description:
        "Drive sales directly from social. Send personalized discount codes and product drops to engaged followers.",
      icon: <FiShoppingBag />,
      color: "from-[#3B82F6] to-[#06B6D4]",
      glow: "shadow-[0px_0px_70px_rgba(59,130,246,0.45)]",
      badge: "3x ROAS",
      dashboardTitle: "Flash Sale Triggered",
      dashboardDesc: "$4,200 generated from comments",
      lines: ["80%", "54%", "88%"],
    },

    {
      title: "Marketing Agencies",
      description:
        "Scale client acquisition and manage multiple accounts from a single workspace with unified reporting.",
      icon: <FiTrendingUp />,
      color: "from-[#14B8A6] to-[#10B981]",
      glow: "shadow-[0px_0px_70px_rgba(20,184,166,0.45)]",
      badge: "Save 20h/week",
      dashboardTitle: "Client Workspaces",
      dashboardDesc: "12 active accounts managed",
      lines: ["52%", "66%", "50%"],
    },

    {
      title: "Coaches & Consultants",
      description:
        "Fill your webinars and sell courses on autopilot. DM registration links to anyone who comments a keyword.",
      icon: <FiAward />,
      color: "from-[#8B5CF6] to-[#A855F7]",
      glow: "shadow-[0px_0px_70px_rgba(168,85,247,0.45)]",
      badge: "85% Opt-in Rate",
      dashboardTitle: "Webinar Funnel",
      dashboardDesc: "450 new registrations today",
      lines: ["78%", "36%", "90%"],
    },
  ];

  const activeSolution = solutions[activeTab];

  return (
    <motion.section
      className="w-full bg-[#FFFFFF] px-4 sm:px-6 lg:px-[80px] py-16 sm:py-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerStagger}
    >
      {/* MAIN CONTAINER */}
      <motion.div
        className="max-w-[1120px] mx-auto"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        {/* TOP SECTION */}
        <div className="w-full max-w-[1131px] mx-auto flex flex-col items-center">
          {/* SMALL TOP BADGE */}
          <motion.div
            variants={fadeDown}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-[202px] h-[38px] rounded-full border border-t border-[#FFFFFF] bg-[#0000000D] flex items-center justify-center"
          >
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[14px] leading-[20px] font-medium text-[#00000080] text-center"
            >
              ⚡ Built for your workflow
            </p>
          </motion.div>

          {/* HEADING */}
          <div className="mt-6 flex flex-col items-center">
            {/* ONE PLATFORM */}
            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[34px] sm:text-[48px] lg:text-[60px] leading-[60px] tracking-[-1px] font-semibold text-black text-center"
            >
              One platform.
            </motion.h1>

            {/* ENDLESS SOLUTIONS BOX */}
            <motion.div
              variants={fadeZoom}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ rotate: -1, scale: 1.02 }}
              className="mt-4 rotate-[-2.41deg] w-auto min-h-[80px] px-6 sm:px-8 py-[10px] rounded-[22px] bg-white shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center"
            >
              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="text-[34px] sm:text-[48px] lg:text-[60px] leading-[60px] tracking-[-1.5px] font-semibold bg-[linear-gradient(132.3deg,rgba(76,34,158,0.68)_12.83%,#F754B4_89.1%)] bg-clip-text text-transparent text-center"
              >
                Endless solutions.
              </h1>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontFamily: "Inter" }}
              className="mt-8 max-w-[760px] text-center text-[16px] sm:text-[18px] leading-[28px] text-[#90A1B9] px-2"
            >
              Whether you're an agency scaling client results or a creator
              building an audience, LINKINGROAD adapts to your unique growth
              strategy.
            </motion.p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE – Tabs */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative w-full max-w-[517px] rounded-[16px] transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeTab === index
                    ? "h-[202px] border border-[#CBD5E1] bg-white/10 shadow-[0px_25px_50px_-12px_#615FFF1A]"
                    : "h-[88px] bg-transparent"
                }`}
              >
                {/* ACTIVE LEFT INDICATOR */}
                {activeTab === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 70 }}
                    className="absolute left-0 top-[48px] w-[4px] rounded-r-full bg-[#7C3AED]"
                  />
                )}

                {/* CONTENT */}
                <div
                  className={`flex items-start gap-6 ${
                    activeTab === index ? "px-6 py-6" : "px-6 py-5 items-center"
                  }`}
                >
                  {/* ICON */}
                  <div
                    className={`w-[48px] h-[48px] rounded-[14px] bg-gradient-to-r ${item.color} flex items-center justify-center shrink-0`}
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="text-white text-[20px]"
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* TEXT */}
                  <div>
                    {/* TITLE */}
                    <h1
                      style={{ fontFamily: "ClashDisplay" }}
                      className={`text-[20px] leading-[28px] font-semibold transition-all duration-300 ${
                        activeTab === index ? "text-black" : "text-[#CAD5E2]"
                      }`}
                    >
                      {item.title}
                    </h1>

                    {/* DESCRIPTION – only for active */}
                    {activeTab === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 sm:mt-5 max-w-full sm:max-w-[340px] text-[13px] sm:text-[15px] leading-[22px] sm:leading-[30px] text-[#94A3B8] break-words pr-1"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE – Dashboard preview */}
          <div className="w-full flex justify-center mt-10 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.35 }}
                className="relative w-full max-w-[517px] h-[300px] sm:h-[360px] md:h-[420px] lg:h-[440px] rounded-[20px] sm:rounded-[24px] border-t border-t-[#314158] bg-[#1D293D80] backdrop-blur-[120px] overflow-visible px-3 sm:px-0"
              >
                {/* GLOW BACKGROUND */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activeSolution.color} opacity-30 blur-[120px] sm:blur-[140px]`}
                />

                {/* MAIN CARD */}
                <motion.div
                  className="absolute top-[18px] sm:top-[24px] md:top-[27px] left-1/2 -translate-x-1/2 w-[88%] sm:w-[82%] md:w-[384px] h-[240px] sm:h-[280px] md:h-[334px] rounded-[18px] sm:rounded-[22px] bg-[#071133] border border-[#1E293B] px-4 sm:px-5 py-4 sm:py-5"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* TOP BAR */}
                  <div className="flex items-center justify-between">
                    {/* ICON */}
                    <div
                      className={`w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-[10px] sm:rounded-[12px] bg-gradient-to-r ${activeSolution.color} flex items-center justify-center`}
                    >
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="text-white text-[15px] sm:text-[18px]"
                      >
                        {activeSolution.icon}
                      </motion.div>
                    </div>

                    {/* BADGE */}
                    <div
                      className={`h-[24px] sm:h-[28px] px-2 sm:px-3 rounded-full bg-gradient-to-r ${activeSolution.color} flex items-center justify-center`}
                    >
                      <p className="text-[9px] sm:text-[10px] font-semibold text-white whitespace-nowrap">
                        {activeSolution.badge}
                      </p>
                    </div>
                  </div>

                  {/* TITLE & DESC */}
                  <div className="mt-6 sm:mt-8 md:mt-10">
                    <h1
                      style={{ fontFamily: "ClashDisplay" }}
                      className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white leading-tight"
                    >
                      {activeSolution.dashboardTitle}
                    </h1>
                    <p className="mt-2 text-[12px] sm:text-[13px] md:text-[14px] text-[#94A3B8] leading-[20px]">
                      {activeSolution.dashboardDesc}
                    </p>
                  </div>

                  {/* PROGRESS BARS */}
                  <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4 sm:gap-5">
                    {activeSolution.lines.map((line, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3">
                        {/* DOT */}
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#13203F]" />
                        {/* BAR */}
                        <div className="flex-1 h-[5px] sm:h-[6px] rounded-full bg-[#1E293B] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: line }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${activeSolution.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* LIVE SYNC TAG */}
                <motion.div
                  className="absolute bottom-[18px] sm:bottom-[24px] right-[8px] sm:right-[-14px] h-[44px] sm:h-[56px] px-3 sm:px-5 rounded-[14px] sm:rounded-[18px] bg-[#1E293B] border border-[#334155] flex items-center gap-2 sm:gap-3 shadow-[0px_20px_40px_rgba(0,0,0,0.35)] z-20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#10B981]" />
                  <p className="text-[12px] sm:text-[14px] text-white font-medium whitespace-nowrap">
                    Live Sync
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SolutionsSection;
