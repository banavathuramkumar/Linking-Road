import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock, FiMessageSquare, FiZap, FiUsers } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
import { FiActivity } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="className=w-[1179px] h-[861px] opacity-100 flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-[#F7F2FF] relative p-10 overflow-hidden">
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="logo"
          className="h-10 w-auto absolute top-10 left-10"
          onClick={() => navigate("/")}
        />

        {/* CENTER ICON */}
        <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2">
          <img src="Container.png" alt="container" className="w-full h-auto" />
        </div>

        {/* AUTO REPLY */}
        <div className="absolute top-[25%] left-20">
          <div className="bg-white rounded-[24px] shadow-xl px-6 py-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#EEF4FF] flex items-center justify-center">
              <FiMessageSquare className="text-[#60A5FA] text-[20px]" />
            </div>

            <p className="text-[#3F3F46] text-[20px] font-medium">Auto-Reply</p>
          </div>
        </div>

        {/* LEAD CAPTURED */}
        <div className="absolute top-[28%] right-16">
          <div className="bg-white rounded-[24px] shadow-xl px-6 py-5 flex items-center gap-4 border border-[#D1FAE5]">
            <div className="w-11 h-11 rounded-2xl bg-[#ECFDF5] flex items-center justify-center">
              <FiUsers className="text-[#10B981] text-[20px]" />
            </div>

            <p className="text-[#3F3F46] text-[20px] font-medium">
              Lead Captured
            </p>
          </div>
        </div>

        {/* TRIGGER */}
        <div className="absolute bottom-[35%] left-28">
          <div className="bg-white rounded-[24px] shadow-xl px-6 py-5 flex items-center gap-4 border border-[#FEF3C7]">
            <div className="w-11 h-11 rounded-2xl bg-[#FFF7ED] flex items-center justify-center">
              <FiZap className="text-[#F59E0B] text-[20px]" />
            </div>

            <p className="text-[#3F3F46] text-[20px] font-medium">Trigger</p>
          </div>
        </div>

        {/* ANALYTICS */}
        <div className="absolute bottom-[40%] right-24">
          <div className="bg-white rounded-[24px] shadow-xl px-6 py-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#F5F3FF] flex items-center justify-center">
              <FiActivity className="text-[#8B5CF6] text-[20px]" />
            </div>

            <p className="text-[#3F3F46] text-[20px] font-medium">Analytics</p>
          </div>
        </div>

        {/* LIVE ACTIVITY */}
        <div className="absolute bottom-16 left-20 w-[420px] bg-white/70 backdrop-blur-xl rounded-[28px] shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />

              <p className="uppercase tracking-[3px] text-[#CBD5E1] text-[13px]">
                Live Activity
              </p>
            </div>

            <p className="text-[#94A3B8] text-[14px]">Just now</p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EEF2FF]" />

              <div className="space-y-2">
                <div className="w-40 h-2 bg-[#D4D4D8] rounded-full" />
                <div className="w-24 h-2 bg-[#E4E4E7] rounded-full" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EEF2FF]" />

              <div className="space-y-2">
                <div className="w-40 h-2 bg-[#D4D4D8] rounded-full" />
                <div className="w-24 h-2 bg-[#E4E4E7] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <p className="absolute bottom-5 left-10 text-[#94A3B8] text-[14px]">
          © 2026 LINKINGROAD Inc. All rights reserved.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-[430px] flex flex-col">
          {/* HEADING */}
          <div>
            <h1 className="font-['ClashDisplay'] text-[36px] font-semibold tracking-[-0.9px] text-[#0F172B]">
              Welcome Back To
            </h1>

            <h1 className="font-['ClashDisplay'] text-[36px] font-semibold tracking-[-1px] mt-[-15px] bg-[linear-gradient(132.3deg,rgba(76,34,158,0.68)_12.83%,#F754B4_89.1%)] bg-clip-text text-transparent">
              Smarter Automation
            </h1>

            <p className="text-[18px] leading-[30px] text-[#62748E] ">
              Manage your automations, leads, and conversations in one place.
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-3 pt-6">
            <label className="text-[16px] font-medium text-[#0F172B]">
              Email Address
            </label>

            <div className="h-16 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center px-5 gap-3">
              <HiOutlineMail className="text-[#94A3B8] text-[22px]" />

              <input
                type="email"
                placeholder="name@company.com"
                className="bg-transparent outline-none w-full text-[16px] placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-3 pt-4">
            <div className="flex items-center justify-between">
              <label className="text-[16px] font-medium text-[#0F172B]">
                Password
              </label>

              <button className="text-[#5B21B6] text-[15px] font-medium">
                Forgot password?
              </button>
            </div>

            <div className="h-16 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center px-5 gap-3">
              <FiLock className="text-[#94A3B8] text-[20px]" />

              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none w-full text-[16px] placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* REMEMBER */}
          <p className="text-[#62748E] text-[15px] pl-4 pt-4">
            Remember me for 30 days
          </p>

          {/* LOGIN BUTTON */}
          <button className="h-16 rounded-2xl bg-[#5B21B6] text-white text-[22px] font-medium flex items-center justify-center mt-6 gap-2 shadow-[0px_12px_30px_rgba(91,33,182,0.35)] hover:scale-[1.01] transition-all duration-300">
            Login
            <HiArrowRight className="text-[22px]" />
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 py-2 mt-4">
            <div className="flex-1 h-[1px] bg-[#E2E8F0]" />

            <p className="text-[#94A3B8] text-[15px] whitespace-nowrap">
              or continue with
            </p>

            <div className="flex-1 h-[1px] bg-[#E2E8F0]" />
          </div>

          {/* GOOGLE BUTTON */}
          <button className="h-16 rounded-2xl border border-[#E2E8F0] bg-white flex items-center justify-center mt-4 gap-3 text-[#334155] text-[18px] font-medium hover:bg-gray-50 transition-all">
            <FcGoogle className="text-[24px]" />
            Sign in with Google
          </button>

          {/* SIGNUP */}
          <p className="text-center text-[#62748E] text-[16px] pt-1">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-[#5B21B6] font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
