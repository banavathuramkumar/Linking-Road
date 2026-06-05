import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

const SettingsHeader = () => {
  const navigate = useNavigate();

  return (
    <header
      className="
        w-full
        h-[64px]
        px-8
        flex
        items-center
        gap-4
        bg-[rgba(255,255,255,0.7)]
        dark:bg-[rgba(15,23,42,0.8)]
        backdrop-blur-md
        border-b
        border-[#E2E8F099]
        dark:border-[#1E293B99]
      "
    >
      {/* LOGO */}
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src="/logo.png" 
          alt="LinkingRoad"
          className="h-10 w-auto"
        />
      </button>

      {/* Divider */}
      <span className="text-[#CBD5E1] dark:text-slate-700 text-xl">/</span>

      {/* Page Name */}
      <div className="flex items-center gap-2">
        <FiSettings
          size={16}
          className="text-[#64748B] dark:text-slate-400"
        />

        <span
          style={{ fontFamily: "inter" }}
          className="
            text-[14px]
            font-medium
            text-[#334155]
            dark:text-[#E2E8F0]
          "
        >
          Setting
        </span>
      </div>
    </header>
  );
};

export default SettingsHeader;