import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { HiTrendingUp } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { FiMessageCircle, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full top-20 h-[900px] sm:h-[1100px] md:h-[1300px] lg:h-[1508px] flex flex-col items-center px-4 overflow-hidden pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 sm:mt-14 h-[38px] px-5 rounded-full bg-white border border-[#E0E7FF] flex items-center justify-center shadow-[0px_4px_12px_rgba(76,34,158,0.08)]"
      >
        <p className="text-[12px] sm:text-[14px] font-medium text-[#4C229E] whitespace-nowrap">
          ✧ Introducing LinkingRoad AI 2.0
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-10 flex flex-col items-center text-center w-full max-w-[1000px]"
      >
        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[72px] font-semibold text-[#071133] leading-[1] tracking-[-1px]"
        >
          Turn Every
        </h1>

        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[72px] font-semibold text-[#071133] leading-[1] tracking-[-1px] mt-1"
        >
          Comment
        </h1>

        <div className="mt-4 rotate-[-2deg] bg-white rounded-[20px] sm:rounded-[28px] px-5 sm:px-8 py-3 shadow-[0px_20px_60px_rgba(0,0,0,0.15)]">
          <h1
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[72px] font-semibold tracking-[-2px] bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent leading-none"
          >
            Into Revenue
          </h1>
        </div>

        <p className="mt-8 text-[15px] sm:text-[18px] md:text-[20px] leading-[28px] text-[#6B7280] max-w-[760px] px-2">
          Automate engagement, capture leads, and drive conversions
          effortlessly. The most powerful AI social automation platform for
          modern growth teams.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="w-full sm:w-[190px] h-[52px] rounded-full bg-[#4C229E] text-white text-[15px] sm:text-[16px] font-medium shadow-[0px_4px_6px_-4px_#615FFF40,0px_10px_15px_-3px_#615FFF40] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Start Free Trial
            <HiArrowRight className="text-[18px]" />
          </button>

          <button
            onClick={() => navigate("/demo")}
            className="w-full sm:w-[190px] h-[52px] rounded-full bg-white text-[#0F172B] text-[15px] sm:text-[16px] font-medium shadow-[0px_4px_6px_-4px_#615FFF40,0px_10px_15px_-3px_#615FFF40] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaPlay className="text-[11px]" />
            Demo Video
          </button>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
        className="relative mt-16 w-full max-w-[1100px] h-[240px] xs:h-[300px] sm:h-[420px] md:h-[520px] lg:h-[580px] rounded-[18px] sm:rounded-[24px] lg:rounded-[28px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-[0px_25px_80px_rgba(0,0,0,0.12)] overflow-hidden"
      >
        <motion.div
          variants={slideLeft}
          className="absolute left-0 top-0 w-[75px] xs:w-[95px] sm:w-[160px] md:w-[220px] lg:w-[260px] h-full border-r border-[#E2E8F0] bg-white p-2 xs:p-3 sm:p-5 flex flex-col gap-2 xs:gap-3 sm:gap-4"
        >
          <div className="w-[45px] xs:w-[60px] sm:w-[95px] h-[16px] xs:h-[22px] sm:h-[32px] rounded-[6px] sm:rounded-[8px] bg-[#F1F5F9]" />
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="w-full h-[18px] xs:h-[24px] sm:h-[40px] rounded-[6px] sm:rounded-[10px] bg-[#F1F5F9]"
            />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="
      absolute
      top-[34px]
      xs:top-[42px]
      sm:top-[70px]
      md:top-[85px]
      left-[88px]
      xs:left-[115px]
      sm:left-[230px]
      md:left-[330px]
      lg:left-[360px]
      w-[140px]
      xs:w-[165px]
      sm:w-[220px]
      md:w-[250px]
      lg:w-[270px]
      h-[48px]
      xs:h-[56px]
      sm:h-[72px]
      md:h-[76px]
      rounded-[12px]
      xs:rounded-[14px]
      sm:rounded-[18px]
      bg-white
      shadow-[0px_10px_30px_rgba(0,0,0,0.12)]
      px-2
      xs:px-3
      sm:px-5
      flex
      items-center
      gap-2
      sm:gap-3
      z-20
      transition-all
      duration-300
      hover:-translate-y-1
    "
        >
          <div className="w-[24px] xs:w-[28px] sm:w-[38px] h-[24px] xs:h-[28px] sm:h-[38px] rounded-full bg-[#FCE7F3] flex items-center justify-center shrink-0">
            <FiMessageCircle className="text-[#EC4899] text-[11px] xs:text-[13px] sm:text-[16px]" />
          </div>

          <div>
            <h1 className="text-[10px] xs:text-[11px] sm:text-[18px] md:text-[22px] font-semibold text-[#0F172B] leading-none">
              New Comment
            </h1>

            <p className="text-[7px] xs:text-[8px] sm:text-[13px] md:text-[14px] text-[#64748B] mt-1">
              "Send me the link"
            </p>
          </div>
        </motion.div>

        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
      absolute
      hidden
      md:block
      top-[95px]
      lg:top-[105px]
      left-[520px]
      lg:left-[610px]
      z-10
    "
          width="230"
          height="130"
          viewBox="0 0 230 130"
          fill="none"
        >
          <path
            d="M5 5C120 0 110 120 225 110"
            stroke="#CBD5E1"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>

        <motion.div
          variants={fadeUp}
          className="
      absolute
      top-[72px]
      xs:top-[92px]
      sm:top-[130px]
      md:top-[160px]
      right-[8px]
      xs:right-[10px]
      sm:right-[28px]
      md:right-[22px]
      lg:right-[24px]
      w-[145px]
      xs:w-[170px]
      sm:w-[220px]
      md:w-[245px]
      lg:w-[260px]
      h-[48px]
      xs:h-[56px]
      sm:h-[72px]
      md:h-[76px]
      rounded-[12px]
      xs:rounded-[14px]
      sm:rounded-[18px]
      bg-white
      border
      border-[#615FFF]
      shadow-[0px_10px_30px_rgba(0,0,0,0.12)]
      px-2
      xs:px-3
      sm:px-5
      flex
      items-center
      gap-2
      sm:gap-3
      z-20
      transition-all
      duration-300
      hover:-translate-y-1
    "
        >
          <div className="w-[24px] xs:w-[28px] sm:w-[42px] h-[24px] xs:h-[28px] sm:h-[42px] rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0">
            <FiZap className="text-[#615FFF] text-[11px] xs:text-[13px] sm:text-[16px]" />
          </div>

          <div>
            <h1 className="text-[10px] xs:text-[11px] sm:text-[18px] md:text-[22px] font-semibold text-[#0F172B] leading-none">
              Auto-DM
            </h1>

            <p className="text-[7px] xs:text-[8px] sm:text-[13px] md:text-[14px] text-[#64748B] mt-1">
              Send Lead Magnet
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="
      absolute
      bottom-[18px]
      xs:bottom-[24px]
      sm:bottom-[65px]
      md:bottom-[120px]
      right-[8px]
      xs:right-[20px]
      sm:right-[75px]
      md:right-[120px]
      w-[120px]
      xs:w-[145px]
      sm:w-[180px]
      md:w-[205px]
      h-[52px]
      xs:h-[62px]
      sm:h-[78px]
      md:h-[86px]
      rounded-[14px]
      sm:rounded-[20px]
      bg-white
      shadow-[0px_10px_30px_rgba(0,0,0,0.10)]
      px-2
      xs:px-3
      sm:px-5
      flex
      items-center
      gap-2
      sm:gap-3
      z-20
      transition-all
      duration-300
      hover:scale-[1.02]
    "
        >
          <div className="w-[24px] xs:w-[30px] sm:w-[50px] h-[24px] xs:h-[30px] sm:h-[50px] rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
            <HiTrendingUp className="text-[#16A34A] text-[13px] xs:text-[16px] sm:text-[26px]" />
          </div>

          <div>
            <p className="text-[7px] xs:text-[9px] sm:text-[14px] text-[#64748B] leading-none">
              Conversion Rate
            </p>

            <h1 className="text-[14px] xs:text-[18px] sm:text-[24px] md:text-[34px] font-bold text-[#0F172B] leading-none mt-1">
              +42.8%
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
