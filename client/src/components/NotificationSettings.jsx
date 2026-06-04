import React, { useState } from "react";
import { motion } from "framer-motion";

const NotificationSettings = () => {
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [productUpdates, setProductUpdates] = useState(true);

  const Toggle = ({ enabled, setEnabled }) => (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`
        relative
        w-[44px]
        h-[26px]
        rounded-full
        transition-all
        duration-300
        ${enabled ? "bg-[#615FFF]" : "bg-[#E2E8F0]"}
      `}
    >
      <div
        className={`
          absolute
          top-[2px]
          w-[22px]
          h-[22px]
          rounded-full
          bg-white
          shadow-sm
          transition-all
          duration-300
          ${enabled ? "translate-x-[20px]" : "translate-x-[2px]"}
        `}
      />
    </button>
  );

  return (
    <div className="w-full max-w-[768px] mx-auto px-3 sm:px-4">
      {/* HEADER */}
      <div className="mb-5 sm:mb-8">
        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[24px] sm:text-[28px] md:text-[36px] leading-tight font-semibold text-[#0F172A]"
        >
          Notification Preferences
        </h1>

        <p
          style={{ fontFamily: "Inter" }}
          className="mt-2 text-[14px] md:text-[16px] text-[#64748B]"
        >
          Choose what updates you want to receive and how.
        </p>
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className=" bg-white rounded-[16px] border border-[#E2E8F0CC] shadow-[0px_1px_3px_rgba(0,0,0,0.10)] overflow-hidden "
      >
        {/* SECURITY ALERTS */}
        <div className="px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3
              style={{ fontFamily: "Inter" }}
              className="text-[18px] font-semibold text-[#0F172A]"
            >
              Security Alerts
            </h3>

            <p
              style={{ fontFamily: "Inter" }}
              className="mt-2 text-[15px] text-[#64748B]"
            >
              Get notified about unusual login activity or password changes.
            </p>
          </div>

          <div className="self-start sm:self-center">
            <Toggle enabled={securityAlerts} setEnabled={setSecurityAlerts} />
          </div>
        </div>

        <div className="border-t border-[#E2E8F0]" />

        {/* WEEKLY REPORTS */}
        <div className="px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3
              style={{ fontFamily: "Inter" }}
              className="text-[18px] font-semibold text-[#0F172A]"
            >
              Weekly Reports
            </h3>

            <p
              style={{ fontFamily: "Inter" }}
              className="mt-2 text-[15px] text-[#64748B]"
            >
              Receive a weekly summary of your automation runs and quota usage.
            </p>
          </div>

          <div className="self-start sm:self-center">
            <Toggle enabled={weeklyReports} setEnabled={setWeeklyReports} />
          </div>
        </div>

        <div className="border-t border-[#E2E8F0]" />

        {/* PRODUCT UPDATES */}
        <div className="px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3
              style={{ fontFamily: "Inter" }}
              className="text-[16px] sm:text-[18px] font-semibold text-[#0F172A]"
            >
              Product Updates
            </h3>

            <p
              style={{ fontFamily: "Inter" }}
              className="mt-2 text-[14px] sm:text-[15px] text-[#64748B] leading-relaxed"
            >
              Hear about new features, integrations, and platform improvements.
            </p>
          </div>
          <div className="self-start sm:self-center">
            <Toggle enabled={productUpdates} setEnabled={setProductUpdates} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotificationSettings;
