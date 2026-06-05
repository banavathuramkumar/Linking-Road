import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiCheck, FiX } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="h-[42px] px-5 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shadow-[0px_4px_12px_rgba(0,0,0,0.04)] cursor-pointer"
        >
          <p
            style={{ fontFamily: "GeneralSans" }}
            className="text-[14px] font-medium text-[#475569]"
          >
            ⚡ Why switch to FlowPilot?
          </p>
        </motion.div>

        {/* HEADING */}
        <div className="mt-8 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[34px] sm:text-[48px] lg:text-[64px] leading-none tracking-[-1px] font-semibold text-[#071133] text-center"
          >
            A platform that feels
          </motion.h1>

          {/* GRADIENT BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="mt-4 rotate-[-2deg] bg-white rounded-[18px] sm:rounded-[24px] px-4 sm:px-6 py-3 shadow-[0px_15px_40px_rgba(0,0,0,0.10)]"
          >
            <h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[30px] sm:text-[42px] lg:text-[58px] leading-none tracking-[-1px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent text-center"
            >
              designed, not assembled.
            </h1>
          </motion.div>
        </div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontFamily: "GeneralSans" }}
          className="mt-8 max-w-[760px] text-center text-[15px] sm:text-[18px] leading-[30px] text-[#64748B] px-2"
        >
          Stop wrestling with outdated tools. See how FlowPilot compares to
          legacy automation platforms.
        </motion.p>

        {/* TABLE */}
        <div className="mt-12 sm:mt-16 w-full overflow-x-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="min-w-[760px] rounded-[22px] sm:rounded-[28px] border border-[#E2E8F0] bg-white overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.04)]"
          >
            {/* HEADER */}
            <div className="grid grid-cols-3 w-full min-h-[92.8px] border-b border-[#F1F5F9]">
              <div className="p-4 sm:p-6 lg:p-8 flex items-center">
                <p
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[12px] sm:text-[14px] uppercase tracking-[1.2px] font-semibold text-[#64748B]"
                >
                  Feature
                </p>
              </div>

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
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.02, backgroundColor: "#F5F7FF" }}
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
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FiCheck className="text-[#10B981] text-[22px] sm:text-[26px]" />
                  </motion.div>
                  <p
                    style={{ fontFamily: "GeneralSans" }}
                    className="mt-2 text-[13px] sm:text-[16px] font-semibold text-[#059669]"
                  >
                    {item.linkingroad}
                  </p>
                </div>

                {/* MANYCHAT */}
                <div className="px-6 sm:px-8 py-6 flex flex-col items-center justify-center text-center">
                  <motion.div
                    whileHover={{ rotate: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FiX className="text-[#FB7185] text-[22px] sm:text-[26px]" />
                  </motion.div>
                  <p
                    style={{ fontFamily: "GeneralSans" }}
                    className="mt-2 text-[13px] sm:text-[16px] text-[#94A3B8]"
                  >
                    {item.manychat}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              className="p-6 sm:p-8 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={() => navigate("/signup")}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 20px 40px rgba(236,72,153,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{ fontFamily: "GeneralSans" }}
                className="h-[50px] sm:h-[56px] px-8 sm:px-10 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-[15px] sm:text-[18px] font-semibold shadow-[0px_15px_40px_rgba(236,72,153,0.25)] transition-all duration-300"
              >
                Start Your Free Trial
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
