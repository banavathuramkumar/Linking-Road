import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AppearanceSettings = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="w-full max-w-[768px] mx-auto px-3 sm:px-4">
      {/* HEADER */}
      <div className="mb-5 sm:mb-8">
        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[24px] sm:text-[28px] md:text-[36px] leading-tight font-semibold text-[#0F172A] dark:text-white"
        >
          Appearance
        </h1>

        <p
          style={{ fontFamily: "Inter" }}
          className="mt-2 text-[14px] sm:text-[15px] text-[#64748B] dark:text-gray-400"
        >
          Customize how FlowPilot looks on your device.
        </p>
      </div>

      {/* THEMES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* LIGHT MODE */}
        <motion.div
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setTheme("light")}
          className={`
            cursor-pointer
            w-full
            rounded-[16px]
            p-3
            border-2
            transition-all
            ${
              theme === "light"
                ? "border-[#615FFF] shadow-[0_0_0_3px_rgba(97,95,255,0.15)]"
                : "border-[#E2E8F0]"
            }
          `}
        >
          <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 sm:p-4">
            <div className="h-3 rounded-full bg-[#E5E7EB] mb-3" />
            <div className="h-3 w-[60%] rounded-full bg-[#E5E7EB] mb-4" />
            <div className="h-[80px] rounded-lg bg-[#F1F5F9]" />
          </div>

          <p
            style={{ fontFamily: "Inter" }}
            className="text-center mt-3 sm:mt-4 text-[14px] sm:text-[15px] font-medium text-[#0F172A]"
          >
            Light Mode
          </p>
        </motion.div>

        {/* DARK MODE */}
        <motion.div
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setTheme("dark")}
          className={`
            cursor-pointer
            w-full
            rounded-[16px]
            p-3
            border-2
            transition-all
            ${
              theme === "dark"
                ? "border-[#615FFF] shadow-[0_0_0_3px_rgba(97,95,255,0.15)]"
                : "border-[#E2E8F0]"
            }
          `}
        >
          <div className="bg-[#0F172A] rounded-[12px] border border-[#1E293B] p-3 sm:p-4">
            <div className="h-3 rounded-full bg-[#334155] mb-3" />
            <div className="h-3 w-[60%] rounded-full bg-[#334155] mb-4" />
            <div className="h-[80px] rounded-lg bg-[#020617]" />
          </div>

          <p
            style={{ fontFamily: "Inter" }}
            className="text-center mt-3 sm:mt-4 text-[14px] sm:text-[15px] font-medium text-[#0F172A] dark:text-white"
          >
            Dark Mode
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AppearanceSettings;