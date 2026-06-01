import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiUser,
  FiMail,
  FiLock,
  FiArrowLeft,
  FiTarget,
  FiZap,
  FiUsers,
  FiInbox,
  FiShoppingCart,
  FiBriefcase,
  FiCloud,
  FiCheck,
  FiMonitor,
} from "react-icons/fi";

import { HiArrowRight } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const nextStep = () => {
    // STEP 1 VALIDATION
    if (step === 1) {
      const name = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (!name || !email || !password || !confirmPassword) {
        alert("Please fill all fields");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
    }

    // STEP 2 VALIDATION
    if (step === 2 && !selectedBusiness) {
      alert("Please select a business type");
      return;
    }

    // STEP 4 VALIDATION
    if (step === 4 && !selectedGoal) {
      alert("Please select a goal");
      return;
    }

    // STEP 5 VALIDATION
    if (step === 5 && !selectedTemplate) {
      alert("Please select a template");
      return;
    }

    if (step < 5) {
      setStep(step + 1);
    } else {
      navigate("/home");
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F1FF]">
      {/* HEADER */}
      <div className="h-24 bg-white border-b border-[#E2E8F0] px-8 flex items-center justify-between">
        <img src="/logo.png" alt="logo" className="h-10 object-contain" />

        <p className="text-[#64748B] text-[16px]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#4F46E5] font-semibold">
            Log in
          </Link>
        </p>
      </div>

      {/* BODY */}
      <div className="max-w-[900px] mx-auto px-6 py-12">
        {/* STEPPER */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex items-start relative">
            {[
              "Create Account",
              "Business Type",
              "Connect Instagram",
              "Automation Goal",
              "Choose Template",
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative w-[170px]"
              >
                {/* CONNECTING LINE */}
                {index !== 4 && (
                  <div
                    className={`absolute top-[20px] left-[85px] w-[170px] h-[3px] ${
                      step > index + 1 ? "bg-[#5B21B6]" : "bg-[#E2E8F0]"
                    }`}
                  />
                )}

                {/* STEP CIRCLE */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-[16px] font-semibold z-10 transition-all ${
                    step > index + 1
                      ? "bg-[#5B21B6] text-white"
                      : step === index + 1
                        ? "bg-[#5B21B6] text-white"
                        : "bg-white border border-[#E2E8F0] text-[#94A3B8]"
                  }`}
                >
                  {step > index + 1 ? (
                    <FiCheck className="text-[18px]" />
                  ) : (
                    index + 1
                  )}
                </div>

                {/* LABEL */}
                <p
                  className={`mt-4 text-[14px] text-center whitespace-nowrap ${
                    step === index + 1
                      ? "text-[#0F172B] font-medium"
                      : "text-[#94A3B8]"
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-[32px] border border-[#E2E8F0] overflow-hidden shadow-sm">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="p-8 md:p-14">
              <div className="text-center mb-10">
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[42px] leading-[48px] font-semibold tracking-[-1px] text-[#0F172B]"
                >
                  Create your account
                </h1>

                <p className="text-[18px] text-[#64748B] mt-4">
                  Start automating your interactions in minutes.
                </p>
              </div>

              <div className="max-w-[450px] mx-auto flex flex-col gap-6">
                {/* FULL NAME */}
                <div className="flex flex-col gap-3">
                  <label className="text-[15px] font-medium text-[#0F172B]">
                    Full Name
                  </label>

                  <div className="h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center px-5 gap-3">
                    <FiUser className="text-[#94A3B8] text-[18px]" />

                    <input
                      id="fullName"
                      type="text"
                      placeholder="Jane Doe"
                      className="bg-transparent outline-none w-full text-[15px]"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-3">
                  <label className="text-[15px] font-medium text-[#0F172B]">
                    Email Address
                  </label>

                  <div className="h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center px-5 gap-3">
                    <FiMail className="text-[#94A3B8] text-[18px]" />

                    <input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      className="bg-transparent outline-none w-full text-[15px]"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div className="flex flex-col gap-3">
                  <label className="text-[15px] font-medium text-[#0F172B]">
                    Password
                  </label>

                  <div className="h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center px-5 gap-3">
                    <FiLock className="text-[#94A3B8] text-[18px]" />

                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-transparent outline-none w-full text-[15px]"
                    />
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="flex flex-col gap-3">
                  <label className="text-[15px] font-medium text-[#0F172B]">
                    Confirm Password
                  </label>

                  <div className="h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center px-5 gap-3">
                    <FiLock className="text-[#94A3B8] text-[18px]" />

                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="bg-transparent outline-none w-full text-[15px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="p-8 md:p-14">
              <div className="text-center mb-12">
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[42px] font-semibold text-[#0F172B]"
                >
                  How do you identify?
                </h1>

                <p className="text-[18px] text-[#64748B] mt-4">
                  This helps us tailor your experience and templates.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5 max-w-[700px] mx-auto">
                {[
                  {
                    title: "Creator",
                    desc: "Content creators & influencers",
                    icon: <FiUser />,
                  },
                  {
                    title: "Agency",
                    desc: "Marketing & creative agencies",
                    icon: <FiBriefcase />,
                  },
                  {
                    title: "Coach",
                    desc: "Coaches & consultants",
                    icon: <FiUsers />,
                  },
                  {
                    title: "SaaS Brand",
                    desc: "Software companies",
                    icon: <FiCloud />,
                  },
                  {
                    title: "E-commerce",
                    desc: "Online stores & retail",
                    icon: <FiShoppingCart />,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedBusiness(item.title)}
                    className={`border rounded-3xl p-5 cursor-pointer transition-all duration-300 ${
                      selectedBusiness === item.title
                        ? "border-[#5B21B6] bg-[#F8F5FF] shadow-lg"
                        : "border-[#E2E8F0] hover:border-[#5B21B6]"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[24px] mb-4 ${
                            selectedBusiness === item.title
                              ? "bg-[#5B21B6] text-white"
                              : "bg-[#F1F5F9] text-[#475569]"
                          }`}
                        >
                          {item.icon}
                        </div>

                        <h2 className="text-[24px] font-semibold text-[#0F172B]">
                          {item.title}
                        </h2>

                        <p className="text-[#64748B] mt-2">{item.desc}</p>
                      </div>

                      {selectedBusiness === item.title && (
                        <div className="w-8 h-8 rounded-full bg-[#5B21B6] flex items-center justify-center">
                          <FiCheck className="text-white text-[16px]" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="p-8 md:p-14 text-center">
              <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-[#F97316] via-[#EC4899] to-[#7C3AED] mx-auto flex items-center justify-center shadow-2xl mb-8">
                <FaInstagram className="text-white text-[40px]" />
              </div>

              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="text-[42px] font-semibold text-[#0F172B]"
              >
                Connect your Instagram
              </h1>

              <p className="text-[18px] leading-[32px] text-[#64748B] mt-5 max-w-[600px] mx-auto">
                FlowPilot needs access to your Instagram account to automate
                your DMs and comments securely.
              </p>

              <button className="mt-10 h-14 px-10 rounded-2xl bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white text-[18px] font-medium shadow-2xl flex items-center justify-center gap-3 mx-auto">
                <FaInstagram className="text-[22px]" />
                Connect with Instagram
              </button>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="p-8 md:p-14">
              <div className="text-center mb-12">
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[42px] font-semibold text-[#0F172B]"
                >
                  What&apos;s your main goal?
                </h1>

                <p className="text-[18px] text-[#64748B] mt-4">
                  We&apos;ll recommend the best templates to get you started.
                </p>
              </div>

              <div className="max-w-[720px] mx-auto flex flex-col gap-5">
                {[
                  {
                    title: "Lead Generation",
                    desc: "Capture emails & phone numbers",
                    icon: <FiTarget />,
                  },
                  {
                    title: "Sales Automation",
                    desc: "Drive sales directly in DMs",
                    icon: <FiZap />,
                  },
                  {
                    title: "Audience Engagement",
                    desc: "Boost interaction & reach",
                    icon: <FiUsers />,
                  },
                  {
                    title: "Webinar Funnel",
                    desc: "Register attendees via DMs",
                    icon: <FiMonitor />,
                  },
                  {
                    title: "Inbox Automation",
                    desc: "Auto-reply to common questions",
                    icon: <FiInbox />,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedGoal(item.title)}
                    className={`rounded-3xl border p-5 flex items-center gap-5 cursor-pointer transition-all duration-300 ${
                      selectedGoal === item.title
                        ? "border-[#5B21B6] bg-[#F8F5FF] shadow-lg"
                        : "border-[#E2E8F0]"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[24px] ${
                        selectedGoal === item.title
                          ? "bg-[#5B21B6] text-white"
                          : "bg-[#F1F5F9] text-[#475569]"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h2 className="text-[24px] font-semibold text-[#0F172B]">
                        {item.title}
                      </h2>

                      <p className="text-[#64748B]">{item.desc}</p>
                    </div>

                    {selectedGoal === item.title && (
                      <div className="ml-auto w-8 h-8 rounded-full bg-[#5B21B6] flex items-center justify-center">
                        <FiCheck className="text-white text-[16px]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* STEP 5 */}
          {step === 5 && (
            <div className="p-8 md:p-14">
              <div className="text-center mb-12">
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[42px] font-semibold text-[#0F172B]"
                >
                  Choose a template
                </h1>

                <p className="text-[18px] text-[#64748B] mt-4">
                  Select a workflow template to get started faster.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5 max-w-[760px] mx-auto">
                {[
                  "DM to Email Capture",
                  "Story Reply to Sales Page",
                  "Keyword to Course Access",
                  "Comment to Giveaway Entry",
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedTemplate(item)}
                    className={`rounded-3xl border p-6 min-h-[180px] cursor-pointer transition-all duration-300 ${
                      selectedTemplate === item
                        ? "border-[#5B21B6] shadow-lg bg-[#F8F5FF]"
                        : "border-[#E2E8F0]"
                    }`}
                  >
                    <div className="inline-flex px-4 py-2 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-[13px] font-semibold mb-6">
                      Lead Gen
                    </div>

                    <h2 className="text-[28px] leading-[36px] font-semibold text-[#0F172B]">
                      {item}
                    </h2>

                    {selectedTemplate === item && (
                      <p className="text-[#4F46E5] mt-6 font-medium flex items-center gap-2">
                        Selected
                        <FiCheck />
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FOOTER */}
          <div className="h-24 border-t border-[#E2E8F0] px-8 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="flex items-center gap-2 text-[#64748B] text-[18px]"
              >
                <FiArrowLeft />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={nextStep}
              className="h-14 px-8 rounded-2xl bg-[#5B21B6] text-white text-[18px] font-medium shadow-[0px_12px_30px_rgba(91,33,182,0.35)] flex items-center gap-3 hover:scale-[1.02] transition-all duration-300"
            >
              {step === 5 ? "Complete Setup" : "Continue"}

              <HiArrowRight className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
