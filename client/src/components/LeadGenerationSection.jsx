
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiUsers, FiTrendingUp } from "react-icons/fi";

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

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardHover = {
  whileHover: { y: -5, scale: 1.02, boxShadow: "0px 15px 35px rgba(15,23,42,0.1)" },
  transition: { type: "spring", stiffness: 300 },
};

const LeadGenerationSection = () => {
  const cards = [
    {
      icon: <FiMail />,
      title: "Email Collection",
      stat: "+120%",
      desc: "Capture rate vs landing pages",
    },

    {
      icon: <FiUsers />,
      title: "Contact Capture",
      stat: "10k+",
      desc: "Profiles enriched monthly",
    },

    {
      icon: <FiTrendingUp />,
      title: "Funnel Tracking",
      stat: "24/7",
      desc: "Real-time analytics syncing",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] px-4 sm:px-6 lg:px-8 py-[96px] overflow-hidden">
      <motion.div
        className="max-w-[1179px] mx-auto"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[34px] sm:text-[48px] lg:text-[60px] leading-[38px] sm:leading-[54px] lg:leading-[60px] tracking-[-1px] sm:tracking-[-1.5px] font-semibold text-[#0F172A] text-center"
            >
              Turn Engagement Into
            </motion.h1>

            <motion.div
              variants={fadeZoom}
              className="mt-4 rotate-[-2deg] bg-white rounded-[22px] px-6 sm:px-8 py-3 shadow-[0px_4px_4px_0px_#00000030]"
            >
              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="text-[34px] sm:text-[48px] lg:text-[60px] leading-[38px] sm:leading-[54px] lg:leading-[60px] tracking-[-1px] sm:tracking-[-1.5px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent text-center"
              >
                Qualified Leads
              </h1>
            </motion.div>
          </div>

          <motion.p
            variants={fadeDown}
            style={{ fontFamily: "Inter" }}
            className="mt-10 max-w-[820px] text-center text-[16px] sm:text-[18px] leading-[28px] text-[#64748B] px-4"
          >
            Automatically collect emails and contact info directly in the DMs.
            Sync everything to your CRM instantly.
          </motion.p>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              {...cardHover}
              className="rounded-[24px] border border-[#E2E8F0] bg-white p-8 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] transition-all duration-300"
            >
              <motion.div
                className="w-[56px] h-[56px] rounded-[16px] bg-[#EEF2FF] flex items-center justify-center"
                whileHover={{
                  rotate: 15,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="text-[#5B21B6] text-[24px]">{card.icon}</div>
              </motion.div>

              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="mt-8 text-[28px] sm:text-[32px] leading-[36px] font-semibold text-[#0F172A]"
              >
                {card.title}
              </h1>

              <h2
                style={{ fontFamily: "ClashDisplay" }}
                className="mt-6 text-[38px] sm:text-[44px] leading-[48px] tracking-[-1px] font-semibold text-[#4C229E]"
              >
                {card.stat}
              </h2>

              <p
                style={{ fontFamily: "Inter" }}
                className="mt-3 text-[16px] sm:text-[18px] leading-[28px] text-[#64748B]"
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LeadGenerationSection;
