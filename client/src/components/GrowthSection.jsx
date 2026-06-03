import React from "react";
import { motion } from "framer-motion";
import { FiLayers } from "react-icons/fi";

const GrowthSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* MAIN CONTAINER */}
      <div
        className="
        relative
        w-full
        h-[631px]
        flex
        items-center
        justify-center
        px-6
        py-24
        "
      >
        {/* PURPLE BLUR BACKGROUND */}
        <div
          className="
          absolute
          top-[9px]
          left-1/2
          -translate-x-1/2
          w-[1086px]
          h-[679px]
          rounded-full
          bg-[#4C229E3D]
          blur-[240px]
          opacity-100
          pointer-events-none
          "
        />

        {/* CONTENT */}
        <div
          className="
          relative
          z-10
          w-full
          max-w-[1179px]
          min-h-[357px]
          flex
          flex-col
          items-center
          justify-center
          "
        >
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
            mb-10
            flex
            items-center
            gap-2
            rounded-full
            border
            border-[#E2E8F0]
            bg-white
            px-5
            py-2.5
            shadow-[0px_4px_14px_rgba(0,0,0,0.06)]
            "
          >
            <FiLayers className="text-[#7C86FF] text-[16px]" />

            <span
              style={{ fontFamily: "Inter" }}
              className="
              text-[16px]
              font-medium
              text-[#7C86FF]
              "
            >
              The Complete Toolkit
            </span>
          </motion.div>

          {/* HEADING */}
          <div className="flex flex-col items-center">
            {/* TOP TEXT */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ fontFamily: "ClashDisplay" }}
              className="
                text-center
                text-[40px]
                sm:text-[56px]
                lg:text-[72px]
                leading-[0.95]
                tracking-[-2px]
                font-semibold
                text-[#0F172A]
                "
            >
              Everything you need to
            </motion.h2>

            {/* BOTTOM HIGHLIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mt-4"
            >
              <div
                className="
      rounded-[24px]
      bg-white
      px-8
      py-4
      rotate-[-1.5deg]
      shadow-[0px_6px_12px_rgba(0,0,0,0.18)]
      "
              >
                <h2
                  style={{ fontFamily: "ClashDisplay" }}
                  className="
        text-center
        text-[42px]
        sm:text-[60px]
        lg:text-[76px]
        leading-[1]
        font-semibold
        tracking-[-2px]
        bg-gradient-to-r
        from-[#7C3AED]
        to-[#EC4899]
        bg-clip-text
        text-transparent
        "
                >
                  automate your growth.
                </h2>
              </div>
            </motion.div>
          </div>
          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Inter" }}
            className="
            mt-8
            max-w-[860px]
            text-center
            text-[18px]
            sm:text-[22px]
            leading-[38px]
            text-[#45556C]
            px-4
            "
          >
            FlowPilot isn't just a basic auto-responder. It's a full-stack
            automation platform designed to turn your social traffic into a
            predictable revenue engine.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
