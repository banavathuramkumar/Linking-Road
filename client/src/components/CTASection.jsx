import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden bg-[#4C229E] py-[110px] px-4 sm:px-6">
      <div className="absolute top-[-50px] left-[0px] w-[577px] h-[577px] rounded-full bg-[#F754B475] opacity-50 blur-[195px]" />
      <div className="absolute top-[-35px] right-[0px] w-[402px] h-[402px] rounded-full bg-[#7C86FF] opacity-50 blur-[193px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#312C8580] to-transparent" />
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[42px] px-5 rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF12] backdrop-blur-md flex items-center gap-2"
        >
          <FiStar className="text-white text-[15px]" />
          <span
            style={{ fontFamily: "Inter" }}
            className="text-[14px] font-medium text-white"
          >
            Ready to scale?
          </span>
        </motion.div>
        <div className="mt-10 flex flex-col items-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ fontFamily: "ClashDisplay" }}
            className="text-white font-semibold tracking-[-1.8px] text-[42px] sm:text-[58px] lg:text-[72px] leading-[44px] sm:leading-[60px] lg:leading-[72px]"
          >
            Build Engagement
          </motion.h1>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ fontFamily: "ClashDisplay" }}
            className="text-white font-semibold tracking-[-1.8px] text-[42px] sm:text-[58px] lg:text-[72px] leading-[44px] sm:leading-[60px] lg:leading-[72px]"
          >
            Machines.
          </motion.h1>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ fontFamily: "ClashDisplay" }}
            className="font-semibold tracking-[-1.8px] text-[#C6D2FF] text-[42px] sm:text-[58px] lg:text-[72px] leading-[44px] sm:leading-[60px] lg:leading-[72px]"
          >
            Not Manual Work.
          </motion.h1>
        </div>
        <motion.button
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeScale}
          style={{ fontFamily: "Inter" }}
          className="mt-14 h-[64px] px-10 rounded-full bg-white text-[#4C229E] text-[18px] font-semibold shadow-[0px_10px_30px_rgba(255,255,255,0.18)] transition-all duration-300 hover:scale-[1.03]"
          onClick={() => navigate("/signup")}
        >
          Start Automating Today
        </motion.button>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeDown}
          style={{ fontFamily: "Inter" }}
          className="mt-8 text-[16px] sm:text-[18px] leading-[28px] text-[#E2E8F0]"
        >
          14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
