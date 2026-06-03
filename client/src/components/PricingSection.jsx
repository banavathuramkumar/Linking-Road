import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const PricingSection = () => {
  const [billing, setBilling] = useState("yearly");

  const [selectedPlan, setSelectedPlan] = useState("Pro");

  const plans = [
    {
      name: "Starter",

      monthlyPrice: 49,

      yearlyPrice: 39,

      desc: "Perfect for creators just starting out.",

      features: [
        "1,000 Automations/mo",
        "Instagram AutoDM",
        "Basic Analytics",
        "Standard Support",
      ],
    },

    {
      name: "Pro",

      monthlyPrice: 99,

      yearlyPrice: 79,

      desc: "For growing brands and serious creators.",

      features: [
        "10,000 Automations/mo",
        "All Social Channels",
        "Advanced Workflow Builder",
        "Priority Support",
        "CRM Integrations",
      ],
    },

    {
      name: "Enterprise",

      monthlyPrice: 299,

      yearlyPrice: 249,

      desc: "For large teams and agencies.",

      features: [
        "Unlimited Automations",
        "Custom Workflows",
        "Dedicated Account Manager",
        "White Label Options",
        "SLA Guarantee",
      ],
    },
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-[120px] py-[96px] overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1440px] mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col items-center text-center">
          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[36px] sm:text-[52px] lg:text-[64px] leading-[40px] sm:leading-[56px] lg:leading-[64px] tracking-[-1.5px] font-semibold text-[#0F172A]"
          >
            Scale Smarter With
          </motion.h1>
          {/* GRADIENT HEADING */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-4 rotate-[-2deg] rounded-[22px] bg-white px-6 sm:px-8 py-2 shadow-[0px_4px_4px_0px_#00000025]"
          >
            <h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[36px] sm:text-[52px] lg:text-[64px] leading-[40px] sm:leading-[56px] lg:leading-[64px] tracking-[-1.5px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent"
            >
              Flexible Pricing
            </h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Inter" }}
            className="mt-8 max-w-[720px] text-[16px] sm:text-[18px] leading-[30px] text-[#64748B]"
          >
            Simple, transparent pricing that grows with you. No hidden fees.
          </motion.p>

          {/* BILLING TOGGLE */}
          <div className="mt-12 flex items-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] p-1">
            {/* MONTHLY */}
            <button
              onClick={() => setBilling("monthly")}
              style={{ fontFamily: "Inter" }}
              className={`h-[48px] px-7 rounded-full text-[15px] font-semibold transition-all duration-300 cursor-pointer ${
                billing === "monthly"
                  ? "bg-white text-[#0F172A] shadow-sm"
                  : "text-[#64748B]"
              }`}
            >
              Monthly
            </button>

            {/* YEARLY */}
            <button
              onClick={() => setBilling("yearly")}
              style={{ fontFamily: "Inter" }}
              className={`h-[48px] px-5 rounded-full text-[15px] font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                billing === "yearly"
                  ? "bg-white text-[#0F172A] shadow-sm"
                  : "text-[#64748B]"
              }`}
            >
              <span>Yearly</span>

              <span className="px-2 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A] text-[10px] font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === plan.name;

            const price =
              billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={index}
                onClick={() => setSelectedPlan(plan.name)}
                className={`relative cursor-pointer rounded-[24px] transition-all duration-300 flex flex-col ${
                  isSelected
                    ? "border-[1.5px] border-[#4C229E] bg-white shadow-[0px_20px_50px_rgba(76,34,158,0.12)]"
                    : "border border-[#E2E8F0] bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] hover:-translate-y-1 hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)]"
                }`}
              >
                {/* MOST POPULAR BADGE */}
                {plan.name === "Pro" && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-5">
                    <div className="h-[36px] px-5 rounded-full bg-[#4C229E] flex items-center justify-center shadow-lg">
                      <p
                        style={{ fontFamily: "Inter" }}
                        className="text-[13px] font-semibold text-white"
                      >
                        MOST POPULAR
                      </p>
                    </div>
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-6 sm:p-7 flex flex-col h-full min-h-[470px]">
                  {/* PLAN NAME */}
                  <div>
                    <h1
                      style={{ fontFamily: "ClashDisplay" }}
                      className="text-[28px] leading-[30px] font-semibold text-[#0F172A]"
                    >
                      {plan.name}
                    </h1>

                    {/* DESCRIPTION */}
                    <p
                      style={{ fontFamily: "Inter" }}
                      className="mt-4 text-[15px] leading-[26px] text-[#64748B]"
                    >
                      {plan.desc}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div className="mt-10 flex items-end gap-2">
                    <h1
                      style={{ fontFamily: "ClashDisplay" }}
                      className="text-[46px] leading-[46px] tracking-[-1.5px] font-semibold text-[#0F172A]"
                    >
                      ${price}
                    </h1>

                    <span
                      style={{ fontFamily: "Inter" }}
                      className="mb-1 text-[16px] text-[#64748B]"
                    >
                      /mo
                    </span>
                  </div>

                  {/* BILLING TEXT */}
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="mt-2 text-[15px] text-[#94A3B8]"
                  >
                    Billed annually
                  </p>

                  {/* FEATURES */}
                  <div className="mt-10 flex flex-col gap-5">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-4"
                      >
                        {/* CHECK */}
                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                          <FiCheck
                            className={`text-[18px] ${
                              isSelected ? "text-[#4C229E]" : "text-[#94A3B8]"
                            }`}
                          />
                        </div>

                        {/* FEATURE */}
                        <p
                          style={{ fontFamily: "Inter" }}
                          className="text-[15px] text-[#334155]"
                        >
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div className="mt-auto pt-10">
                    <button
                      style={{ fontFamily: "Inter" }}
                      className={`w-full h-[54px] rounded-full text-[17px] font-semibold transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-r from-[#6366F1] to-[#5B5FEF] text-white shadow-[0px_15px_35px_rgba(99,102,241,0.25)] hover:scale-[1.01]"
                          : "border border-[#CBD5E1] bg-white text-[#0F172A] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
