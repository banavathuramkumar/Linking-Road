import React from "react";
import { motion } from "framer-motion";

import {
  FiUsers,
  FiTarget,
  FiArrowRight,
} from "react-icons/fi";

const solutionCards = [
  {
    id: 1,
    icon: <FiUsers />,
    title: "Audience Growth",
    description:
      "Turn passive scrollers into active community members. Automatically capture emails when followers interact with your content.",
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
  },
  {
    id: 2,
    icon: <FiTarget />,
    title: "Sales & Conversion",
    description:
      "Trigger personalized DM sequences based on intent keywords. Deliver discount codes instantly while the buyer is hot.",
    iconBg: "bg-[#FCE7F3]",
    iconColor: "text-[#F43F5E]",
  },
];

const SolutionDeepDive = () => {
  return (

    <section className="w-full bg-white">

      {/* OUTER CONTAINER */}
      <div
        className="
        max-w-[1440px]
        min-h-[545px]
        mx-auto
        px-6
        sm:px-8
        lg:px-10
        pt-[96px]
        pb-16
        "
      >

        {/* GRID */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-8
          "
        >

          {solutionCards.map((card, index) => (

            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
              w-full
              max-w-[541px]
              min-h-[353px]
              rounded-[24px]
              border
              border-[#F1F5F9]
              bg-[#F8FAFC]
              p-10
              transition-all
              duration-300
              "
            >

              {/* ICON */}
              <div
                className={`
                w-[56px]
                h-[56px]
                rounded-[16px]
                flex
                items-center
                justify-center
                text-[28px]
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
                mt-8
                text-[#0F172B]
                text-[26px]
                sm:text-[34px]
                leading-[1.1]
                tracking-[-1px]
                font-semibold
                "
              >
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                style={{ fontFamily: "Inter" }}
                className="
                mt-7
                text-[#45556C]
                text-[18px]
                leading-[42px]
                max-w-[430px]
                "
              >
                {card.description}
              </p>

              {/* BUTTON */}
              <button
                className="
                mt-10
                flex
                items-center
                gap-3
                text-[#4F46E5]
                text-[22px]
                font-semibold
                transition-all
                duration-300
                hover:gap-4
                "
                style={{ fontFamily: "ClashDisplay" }}
              >

                Read the playbook

                <FiArrowRight className="text-[22px]" />

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default SolutionDeepDive;