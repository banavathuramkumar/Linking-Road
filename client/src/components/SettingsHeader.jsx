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
        backdrop-blur-md
        border-b
        border-[#E2E8F099]
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
      <span className="text-[#CBD5E1] text-xl">/</span>

      {/* Page Name */}
      <div className="flex items-center gap-2">
        <FiSettings
          size={16}
          className="text-[#64748B]"
        />

        <span
          style={{ fontFamily: "inter" }}
          className="
            text-[14px]
            font-medium
            text-[#334155]
          "
        >
          Setting
        </span>
      </div>
    </header>
  );
};

export default SettingsHeader;