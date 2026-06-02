import React from "react";
import { motion } from "framer-motion";

import {
  FiCheck,
  FiMinus,
} from "react-icons/fi";

const compareFeatures = [
  {
    feature: "Monthly Automations",
    starter: "1,000",
    pro: "10,000",
    enterprise: "Unlimited",
  },
  {
    feature: "Instagram AutoDM",
    starter: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "All Social Channels",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Advanced Visual Builder",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "CRM Integrations",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Dedicated Account Manager",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "Custom Workflows",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "White Label Options",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "Analytics",
    starter: "Basic",
    pro: "Advanced",
    enterprise: "Custom Reports",
  },
  {
    feature: "Support",
    starter: "Standard",
    pro: "Priority",
    enterprise: "SLA Guarantee",
  },
];

const renderValue = (value) => {
  if (value === true) {
    return (
      <FiCheck className="text-[#5B4BFF] text-[24px] mx-auto" />
    );
  }

  if (value === false) {
    return (
      <FiMinus className="text-[#CBD5E1] text-[24px] mx-auto" />
    );
  }

  return (
    <span
      style={{ fontFamily: "Inter" }}
      className="
      text-[#334155]
      text-[18px]
      leading-[28px]
      "
    >
      {value}
    </span>
  );
};

const ComparePlansTable = () => {
  return (

    <section className="w-full bg-[#F8FAFC] overflow-hidden">

      {/* OUTER CONTAINER */}
      <div
        className="
        max-w-[1440px]
        min-h-[1113px]
        mx-auto
        px-6
        sm:px-8
        lg:px-[77px]
        pt-[96px]
        pb-20
        "
      >

        {/* HEADING */}
        <div className="flex flex-col items-center">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            style={{ fontFamily: "ClashDisplay" }}
            className="
            text-center
            text-[#0F172B]
            text-[42px]
            sm:text-[56px]
            lg:text-[64px]
            leading-[1]
            tracking-[-2px]
            font-semibold
            "
          >
            Compare Plans in Detail
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Inter" }}
            className="
            mt-6
            text-center
            text-[#64748B]
            text-[18px]
            sm:text-[22px]
            leading-[36px]
            "
          >
            Find the perfect feature set for your exact needs.
          </motion.p>

        </div>

        {/* TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="
          mt-16
          w-full
          overflow-x-auto
          rounded-[24px]
          border
          border-[#E2E8F0]
          bg-white
          shadow-[0px_1px_3px_rgba(0,0,0,0.08)]
          "
        >

          <div className="min-w-[1000px]">

            {/* HEADER */}
            <div
              className="
              grid
              grid-cols-[2fr_1fr_1fr_1fr]
              border-b
              border-[#E2E8F0]
              "
            >

              {["Feature", "Starter", "Pro", "Enterprise"].map(
                (item, index) => (

                  <div
                    key={index}
                    className="
                    px-8
                    py-8
                    flex
                    items-center
                    "
                  >

                    <h3
                      style={{ fontFamily: "ClashDisplay" }}
                      className="
                      text-[#0F172B]
                      text-[22px]
                      leading-[28px]
                      font-semibold
                      "
                    >
                      {item}
                    </h3>

                  </div>

                )
              )}

            </div>

            {/* ROWS */}
            {compareFeatures.map((row, index) => (

              <div
                key={index}
                className="
                grid
                grid-cols-[2fr_1fr_1fr_1fr]
                border-b
                border-[#F1F5F9]
                last:border-b-0
                "
              >

                {/* FEATURE */}
                <div
                  className="
                  px-8
                  py-8
                  flex
                  items-center
                  "
                >

                  <span
                    style={{ fontFamily: "Inter" }}
                    className="
                    text-[#334155]
                    text-[18px]
                    leading-[28px]
                    "
                  >
                    {row.feature}
                  </span>

                </div>

                {/* STARTER */}
                <div className="px-8 py-8 flex items-center justify-center">
                  {renderValue(row.starter)}
                </div>

                {/* PRO */}
                <div className="px-8 py-8 flex items-center justify-center">
                  {renderValue(row.pro)}
                </div>

                {/* ENTERPRISE */}
                <div className="px-8 py-8 flex items-center justify-center">
                  {renderValue(row.enterprise)}
                </div>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ComparePlansTable;