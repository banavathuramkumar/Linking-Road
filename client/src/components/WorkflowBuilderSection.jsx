import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiClock, FiDatabase, FiMessageCircle } from "react-icons/fi";
import WorkflowAnimation from "./WorkflowAnimation";

const headingFade = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const descFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
};

const glowPulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.6, 0.8, 0.6],
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
  },
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const WorkflowBuilderSection = () => {
  return (
    <section className="relative w-full bg-[#0F172A] overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* BACKGROUND GLOW – animated pulse */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-[#4F46E5]/20 blur-[180px] rounded-full"
          variants={glowPulse}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-[#8B5CF6]/20 blur-[180px] rounded-full"
          variants={glowPulse}
          animate="animate"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1445px] mx-auto flex flex-col items-center">
        {/* HEADING */}
        <div className="max-w-[900px] flex flex-col items-center">
          <motion.h1
            variants={headingFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[34px] sm:text-[42px] lg:text-[48px] leading-[48px] tracking-[-1.2px] font-semibold text-white text-center"
          >
            Build Automations <span className="text-[#8B5CF6]">Visually</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={descFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontFamily: "Inter" }}
            className="mt-8 max-w-[760px] text-center text-[16px] sm:text-[18px] leading-[28px] text-[#90A1B9]"
          >
            A powerful, canvas-based workflow builder. Connect triggers and
            actions with a simple drag and drop interface.
          </motion.p>
        </div>

        {/* WORKFLOW CONTAINER – deliberately left empty */}
        <motion.div
          className="relative mt-16 w-full max-w-[1131px] h-[365px] md:h-[465px] lg:h-[565px] rounded-[24px] border border-white/10 border-t border-t-[#31415880] bg-[#1E293BCC] shadow-[0px_25px_50px_-12px_#00000040,0px_0px_0px_1px_#FFFFFF1A] overflow-hidden backdrop-blur-[40px]"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
           <WorkflowAnimation />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowBuilderSection;