import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [passwordStrength, setPasswordStrength] = useState("");

  const checkPasswordStrength = (password) => {
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;
    if (!password) {
      setPasswordStrength("");
      return;
    }
    if (password.length < 6) {
      setPasswordStrength("Weak password");
      return;
    }
    if (password.length >= 8 && strongPassword.test(password)) {
      setPasswordStrength("Strong password");
    } else {
      setPasswordStrength("Medium password");
    }
  };

  const nextStep = () => {
    // STEP 1 VALIDATION
    if (step === 1) {
      const name = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (!name || !email || !password || !confirmPassword) {
        toast.error("Please fill all fields");
        return;
      }

      if (password.length < 8) {
        toast.warning("Enter strong password");
        return;
      }

      const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

      if (!strongPassword.test(password)) {
        toast.warning(
          "Password must contain uppercase, lowercase, number & special character",
        );
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
    }

    // STEP 2 VALIDATION
    if (step === 2 && !selectedBusiness) {
      toast.info("Please select a business type");
      return;
    }

    // STEP 4 VALIDATION
    if (step === 4 && !selectedGoal) {
      toast.info("Please select a goal");
      return;
    }

    // STEP 5 VALIDATION
    if (step === 5 && !selectedTemplate) {
      toast.info("Please select a template");
      return;
    }

    if (step < 5) {
      setStep(step + 1);
    } else {
      navigate("/dashboard");
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
      <div className="min-h-[96px] bg-white border-b border-[#E2E8F0] px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <img
          onClick={() => navigate("/")}
          src="/logo.png"
          alt="logo"
          className="h-10 object-contain"
        />

        <p className="text-[#64748B] text-[16px]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#4F46E5] font-semibold">
            Log in
          </Link>
        </p>
      </div>

      {/* BODY */}
      <div className="max-w-[950px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* STEPPER */}
        <div className="flex justify-start sm:justify-center mb-10 overflow-x-auto pb-2">
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
                className="flex flex-col items-center relative min-w-[120px] sm:min-w-[140px] md:min-w-[170px]"
              >
                {/* CONNECTING LINE */}
                {index !== 4 && (
                  <div
                    className={`absolute top-[20px] left-1/2 translate-x-[22px] w-full h-[3px] ${
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
            <div className="p-5 sm:p-8 md:p-14">
              <div className="text-center mb-10">
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[28px] sm:text-[36px] md:text-[42px] leading-[48px] font-semibold tracking-[-1px] text-[#0F172B]"
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
                      onChange={(e) => checkPasswordStrength(e.target.value)}
                      className="bg-transparent outline-none w-full text-[15px]"
                    />
                  </div>

                  {/* PASSWORD STRENGTH MESSAGE */}
                  {passwordStrength && (
                    <p
                      className={`text-[13px] font-medium px-1 ${
                        passwordStrength === "Strong password"
                          ? "text-[#16A34A]"
                          : passwordStrength === "Medium password"
                            ? "text-[#D97706]"
                            : "text-[#DC2626]"
                      }`}
                    >
                      {passwordStrength}
                    </p>
                  )}
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
            <div className="p-5 sm:p-8 md:p-14">
              <div className="text-center mb-12">
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[#0F172B]"
                >
                  How do you identify?
                </h1>

                <p className="text-[18px] text-[#64748B] mt-4">
                  This helps us tailor your experience and templates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[700px] mx-auto">
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
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[20px] sm:text-[24px] mb-4 ${
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
            <div className="p-5 sm:p-8 md:p-14 text-center">
              <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-[#F97316] via-[#EC4899] to-[#7C3AED] mx-auto flex items-center justify-center shadow-2xl mb-8">
                <FaInstagram className="text-white text-[40px]" />
              </div>

              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[#0F172B]"
              >
                Connect your Instagram
              </h1>

              <p className="text-[18px] leading-[32px] text-[#64748B] mt-5 max-w-[600px] mx-auto">
                FlowPilot needs access to your Instagram account to automate
                your DMs and comments securely.
              </p>

              <button className="mt-10 h-14 px-10 rounded-2xl bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white text-[18px] font-medium shadow-2xl flex items-center justify-center gap-3 mx-auto rotate-[-2deg]">
                <FaInstagram className="text-[22px]" />
                Connect with Instagram
              </button>
            </div>
          )}
          {/* STEP 4 */}
          {step === 4 && (
            <div className="p-5 sm:p-8 md:p-14">
              <div className="text-center mb-12">
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[#0F172B]"
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
                    className={`rounded-3xl border p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 cursor-pointer transition-all duration-300 ${
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
            <div className="p-5 sm:p-8 md:p-14">
              <div className="text-center mb-12">
                <h1
                  style={{ fontFamily: "ClashDisplay" }}
                  className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[#0F172B]"
                >
                  Choose a template
                </h1>

                <p className="text-[18px] text-[#64748B] mt-4">
                  Select a workflow template to get started faster.
                </p>
              </div>

              {/* DYNAMIC TEMPLATES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[760px] mx-auto">
                {(selectedGoal === "Lead Generation"
                  ? [
                      {
                        category: "Lead Gen",
                        title: "DM to Email Capture",
                      },
                      {
                        category: "Lead Gen",
                        title: "Comment to Giveaway Entry",
                      },
                      {
                        category: "Lead Gen",
                        title: "Story Reply to Lead Form",
                      },
                      {
                        category: "Lead Gen",
                        title: "Instagram Quiz Funnel",
                      },
                    ]
                  : selectedGoal === "Sales Automation"
                    ? [
                        {
                          category: "Sales",
                          title: "Story Reply to Sales Page",
                        },
                        {
                          category: "Sales",
                          title: "DM Product Recommendation",
                        },
                        {
                          category: "Sales",
                          title: "Abandoned Cart Recovery",
                        },
                        {
                          category: "Sales",
                          title: "Flash Sale Automation",
                        },
                      ]
                    : selectedGoal === "Audience Engagement"
                      ? [
                          {
                            category: "Engagement",
                            title: "Auto Reply to Comments",
                          },
                          {
                            category: "Engagement",
                            title: "Reels Engagement Funnel",
                          },
                          {
                            category: "Engagement",
                            title: "Instagram Poll Automation",
                          },
                          {
                            category: "Engagement",
                            title: "Follower Welcome Sequence",
                          },
                        ]
                      : selectedGoal === "Webinar Funnel"
                        ? [
                            {
                              category: "Webinar",
                              title: "Keyword to Webinar Registration",
                            },
                            {
                              category: "Webinar",
                              title: "DM Webinar Reminder",
                            },
                            {
                              category: "Webinar",
                              title: "Live Event Funnel",
                            },
                            {
                              category: "Webinar",
                              title: "Workshop Access Delivery",
                            },
                          ]
                        : [
                            {
                              category: "Support",
                              title: "FAQ Auto Replies",
                            },
                            {
                              category: "Support",
                              title: "Order Tracking Automation",
                            },
                            {
                              category: "Support",
                              title: "Customer Support Inbox",
                            },
                            {
                              category: "Support",
                              title: "DM Help Desk Flow",
                            },
                          ]
                ).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedTemplate(item.title)}
                    className={`rounded-3xl border p-6 min-h-[180px] cursor-pointer transition-all duration-300 ${
                      selectedTemplate === item.title
                        ? "border-[#5B21B6] shadow-lg bg-[#F8F5FF]"
                        : "border-[#E2E8F0]"
                    }`}
                  >
                    {/* CATEGORY */}
                    <div className="inline-flex px-4 py-2 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-[13px] font-semibold mb-6">
                      {item.category}
                    </div>

                    {/* TITLE */}
                    <h2 className="text-[22px] sm:text-[26px] md:text-[28px] leading-[36px] font-semibold text-[#0F172B]">
                      {item.title}
                    </h2>

                    {/* SELECTED */}
                    {selectedTemplate === item.title && (
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
          <div className="min-h-[96px] border-t border-[#E2E8F0] px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
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
              className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-[#5B21B6] text-white text-[18px] font-medium shadow-[0px_12px_30px_rgba(91,33,182,0.35)] flex items-center gap-3 hover:scale-[1.02] transition-all duration-300"
            >
              {step === 5 ? "Complete Setup" : "Continue"}

              <HiArrowRight className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SignUp;
