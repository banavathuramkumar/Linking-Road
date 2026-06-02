import React from "react";
import { motion } from "framer-motion";

import {
  FiSearch,
  FiHelpCircle,
} from "react-icons/fi";

const HelpCenterHero = () => {
  return (

    <section className="relative w-full overflow-hidden bg-white">

      {/* GRADIENT BACKGROUND */}
      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-[519px]
        pointer-events-none
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(97,95,255,0.10) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* OUTER CONTAINER */}
      <div
        className="
        relative
        z-10
        max-w-[1440px]
        min-h-[599px]
        mx-auto
        px-6
        sm:px-8
        lg:px-10
        flex
        flex-col
        items-center
        justify-center
        "
      >

        {/* TOP SMALL BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-full
          bg-white
          shadow-[0px_4px_10px_rgba(0,0,0,0.12)]
          border
          border-[#E2E8F0]
          "
        >

          <FiHelpCircle className="text-[#7C86FF] text-[16px]" />

          <span
            style={{ fontFamily: "Inter" }}
            className="
            text-[#00000080]
            text-[16px]
            leading-[100%]
            "
          >
            Help Center
          </span>

        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "ClashDisplay" }}
          className="
          mt-10
          max-w-[980px]
          text-center
          text-black
          text-[44px]
          sm:text-[56px]
          lg:text-[64px]
          font-semibold
          leading-[1]
          tracking-[-1.5px]
          "
        >
          How can we help you?
        </motion.h1>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ fontFamily: "Inter" }}
          className="
          mt-8
          max-w-[760px]
          text-center
          text-[#00000080]
          text-[18px]
          leading-[28px]
          "
        >
          Find answers, read guides, and master FlowPilot to scale your social automations.
        </motion.p>

        {/* SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          viewport={{ once: true }}
          className="
          mt-12
          w-full
          max-w-[576px]
          h-[57.6px]
          rounded-[16px]
          border
          border-[#FFFFFF1A]
          bg-white
          shadow-[0px_4px_10px_rgba(0,0,0,0.12)]
          flex
          items-center
          px-5
          "
        >

          {/* SEARCH ICON */}
          <FiSearch className="text-[#94A3B8] text-[22px]" />

          {/* INPUT */}
          <input
            type="text"
            placeholder="Search for articles, guides, or questions..."
            style={{ fontFamily: "Inter" }}
            className="
            flex-1
            bg-transparent
            outline-none
            border-none
            ml-4
            text-[16px]
            text-[#62748E]
            placeholder:text-[#62748E]
            "
          />

        </motion.div>

      </div>

    </section>
  );
};

export default HelpCenterHero;