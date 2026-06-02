import React from "react";
import { motion } from "framer-motion";
import { FiCodepen } from "react-icons/fi";

const WorkflowHeroSection = () => {
  return (

    <section className="w-full bg-[#F8FAFC] overflow-hidden">

      {/* MAIN CONTAINER */}
      <div
        className="
        max-w-[1440px]
        min-h-[534px]
        mx-auto
        flex
        flex-col
        items-center
        justify-center
        gap-[80px]
        px-6
        sm:px-8
        lg:px-10
        py-20
        "
      >

        {/* CONTENT */}
        <div className="flex mt-12 flex-col items-center">

          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-[#E2E8F0]
            bg-[#EEF2FF]
            px-5
            py-2.5
            shadow-[0px_1px_2px_rgba(0,0,0,0.04)]
            "
          >

            <FiCodepen className="text-[#5B4BFF] text-[16px]" />

            <span
              style={{ fontFamily: "Inter" }}
              className="
              text-[16px]
              font-medium
              text-[#5B4BFF]
              "
            >
              Use Cases & Solutions
            </span>

          </motion.div>

          {/* TOP HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ fontFamily: "ClashDisplay" }}
            className="
            mt-12
            text-center
            text-[#0F172A]
            text-[48px]
            sm:text-[64px]
            lg:text-[72px]
            leading-[0.95]
            tracking-[-2px]
            font-semibold
            "
          >
            Built for your
          </motion.h2>

          {/* HIGHLIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="relative mt-5"
          >

            <div
              className="
              relative
              rounded-[24px]
              bg-white
              px-5
              sm:px-8
              lg:px-10
              py-3
              sm:py-4
              rotate-[-1.8deg]
              shadow-[0px_4px_10px_rgba(0,0,0,0.18)]
              "
            >

              <h2
                style={{ fontFamily: "ClashDisplay" }}
                className="
                text-center
                text-[42px]
                sm:text-[58px]
                lg:text-[72px]
                leading-[1]
                tracking-[-2px]
                font-semibold
                bg-gradient-to-r
                from-[#7C3AED]
                to-[#EC4899]
                bg-clip-text
                text-transparent
                whitespace-nowrap
                "
              >
                exact workflow.
              </h2>

            </div>

          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Inter" }}
            className="
            mt-12
            max-w-[760px]
            text-center
            text-[#64748B]
            text-[18px]
            sm:text-[22px]
            leading-[38px]
            px-4
            "
          >
            Discover how top creators, agencies, and
            e-commerce brands use FlowPilot to drive growth
            and automate their operations.
          </motion.p>

        </div>

      </div>

    </section>
  );
};

export default WorkflowHeroSection;