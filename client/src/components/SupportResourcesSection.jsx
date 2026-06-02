import React from "react";
import { motion } from "framer-motion";

import {
  FiBookOpen,
  FiAward,
  FiSliders,
  FiPlayCircle,
  FiHelpCircle,
  FiLifeBuoy,
  FiMessageSquare,
  FiLayout,
  FiInfo,
} from "react-icons/fi";

const supportCards = [
  {
    id: 1,
    icon: <FiBookOpen />,
    title: "Knowledge base",
    description:
      "Comprehensive documentation covering every feature and API endpoint.",
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#2563EB]",
  },
  {
    id: 2,
    icon: <FiAward />,
    title: "Tutorials",
    description:
      "Step-by-step written guides to master complex automation workflows.",
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#615FFF]",
  },
  {
    id: 3,
    icon: <FiSliders />,
    title: "Setup guides",
    description:
      "Quick-start checklists to get your first integrations running in minutes.",
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#10B981]",
  },
  {
    id: 4,
    icon: <FiPlayCircle />,
    title: "Video walkthroughs",
    description:
      "High-quality video courses and platform tours for visual learners.",
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#A855F7]",
  },
  {
    id: 5,
    icon: <FiHelpCircle />,
    title: "FAQs",
    description:
      "Rapid answers to common questions about billing, routing, and usage.",
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#F59E0B]",
  },
  {
    id: 6,
    icon: <FiLifeBuoy />,
    title: "Contact support",
    description:
      "24/7 access to our engineering-led support team for direct assistance.",
    iconBg: "bg-[#FFE4E6]",
    iconColor: "text-[#F43F5E]",
  },
];

const builtInItems = [
  {
    icon: <FiMessageSquare />,
    title: "Tooltips",
    text: "Instant context on hover for every technical term and metric.",
  },
  {
    icon: <FiLayout />,
    title: "Empty-state guidance",
    text: "Actionable templates and next steps when you start a fresh workflow.",
  },
  {
    icon: <FiInfo />,
    title: "Inline education",
    text: "Mini-lessons embedded directly inside complex setup screens.",
  },
];

const SupportResourcesSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* OUTER CONTAINER */}
      <div
        className="
        max-w-[1440px]
        min-h-[1171px]
        mx-auto
        px-6
        sm:px-8
        lg:px-12
        py-24
        "
      >
        {/* TOP CONTENT */}
        <div className="flex flex-col items-center">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="
            px-5
            py-3
            rounded-full
            border
            border-[#E2E8F0]
            bg-white
            shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
            "
          >
            <span
              style={{ fontFamily: "Inter" }}
              className="
              text-[#45556C]
              text-[15px]
              "
            >
              ⊕ Support & Resources
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            style={{ fontFamily: "ClashDisplay" }}
            className="
            mt-10
            text-center
            text-[#0F172B]
            text-[44px]
            sm:text-[60px]
            lg:text-[72px]
            leading-[1]
            tracking-[-2px]
            font-semibold
            max-w-[900px]
            "
          >
            We've got your back
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Inter" }}
            className="
            mt-8
            max-w-[760px]
            text-center
            text-[#64748B]
            text-[20px]
            leading-[42px]
            "
          >
            Whether you're building your first automation or scaling to millions
            of events, our comprehensive help center and in-app guidance ensure
            you're never stuck.
          </motion.p>
        </div>

        {/* MAIN GRID */}
        <div
          className="
  mt-16
  grid
  grid-cols-1
  xl:grid-cols-[1fr_320px]
  gap-6
  items-stretch
  "
        >
          {/* LEFT SIDE */}
          <div
            className="
    grid
    grid-cols-1
    md:grid-cols-2
    gap-5
    "
          >
            {supportCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -3,
                }}
                className="
        rounded-[20px]
        border
        border-[#E2E8F0]
        bg-white
        p-6
        h-full
        min-h-[210px]
        shadow-[0px_1px_3px_rgba(0,0,0,0.05)]
        transition-all
        duration-300
        "
              >
                {/* ICON */}
                <div
                  className={`
          w-[50px]
          h-[50px]
          rounded-[14px]
          flex
          items-center
          justify-center
          text-[24px]
          ${card.iconBg}
          ${card.iconColor}
          `}
                >
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3
                  style={{ fontFamily: "ClashDisplay" }}
                  className="
          mt-6
          text-[#0F172B]
          text-[24px]
          leading-[1.1]
          font-semibold
          "
                >
                  {card.title}
                </h3>

                {/* TEXT */}
                <p
                  style={{ fontFamily: "Inter" }}
                  className="
          mt-4
          text-[#64748B]
          text-[16px]
          leading-[30px]
          "
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
    relative
    overflow-hidden
    rounded-[20px]
    bg-[#0F172B]
    h-full
    min-h-[665px]
    p-6
    border
    border-[#1E293B]
    flex
    flex-col
    "
          >
            {/* TOP BLUR */}
            <div
              className="
      absolute
      top-0
      right-0
      w-[220px]
      h-[220px]
      rounded-full
      blur-[110px]
      opacity-40
      bg-[#615FFF]
      "
            />

            {/* BOTTOM BLUR */}
            <div
              className="
      absolute
      bottom-0
      left-0
      w-[220px]
      h-[220px]
      rounded-full
      blur-[110px]
      opacity-40
      bg-[#AD46FF]
      "
            />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col h-full">
              {/* BADGE */}
              <div
                className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-[12px]
        border
        border-[#FFFFFF1A]
        bg-[#FFFFFF0D]
        w-fit
        "
              >
                <span className="text-[#C7D2FE] text-[13px]">✦</span>

                <span
                  style={{ fontFamily: "Inter" }}
                  className="
          text-white
          text-[13px]
          "
                >
                  Contextual Help
                </span>
              </div>

              {/* TITLE */}
              <h3
                style={{ fontFamily: "ClashDisplay" }}
                className="
        mt-8
        text-white
        text-[34px]
        leading-[1.1]
        font-semibold
        "
              >
                Built into the canvas
              </h3>

              {/* DESCRIPTION */}
              <p
                style={{ fontFamily: "Inter" }}
                className="
        mt-5
        text-[#94A3B8]
        text-[16px]
        leading-[30px]
        "
              >
                Every complex screen inside FlowPilot includes intelligent,
                in-situ guidance so you learn as you build.
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-8">
                {builtInItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* ICON */}
                    <div
                      className="
              w-[42px]
              h-[42px]
              rounded-full
              border
              border-[#FFFFFF14]
              bg-[#FFFFFF08]
              flex
              items-center
              justify-center
              text-[#C7D2FE]
              text-[18px]
              shrink-0
              "
                    >
                      {item.icon}
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4
                        style={{ fontFamily: "ClashDisplay" }}
                        className="
                text-white
                text-[20px]
                leading-[1.1]
                font-semibold
                "
                      >
                        {item.title}
                      </h4>

                      <p
                        style={{ fontFamily: "Inter" }}
                        className="
                mt-2
                text-[#94A3B8]
                text-[15px]
                leading-[28px]
                "
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* INLINE TIP */}
              <div
                className="
        mt-auto
        rounded-[18px]
        border
        border-[#FFFFFF12]
        bg-[#FFFFFF08]
        p-5
        "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
            w-[34px]
            h-[34px]
            rounded-full
            bg-[#FFFFFF10]
            flex
            items-center
            justify-center
            text-[#A5B4FC]
            text-[16px]
            shrink-0
            "
                  >
                    <FiInfo />
                  </div>

                  <div>
                    <h5
                      style={{ fontFamily: "ClashDisplay" }}
                      className="
              text-white
              text-[18px]
              font-semibold
              "
                    >
                      Inline Tip
                    </h5>

                    <p
                      style={{ fontFamily: "Inter" }}
                      className="
              mt-2
              text-[#94A3B8]
              text-[14px]
              leading-[26px]
              "
                    >
                      Connect your CRM node first to ensure lead variables are
                      available downstream.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportResourcesSection;
