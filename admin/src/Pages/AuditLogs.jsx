import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiFilter, FiClock } from "react-icons/fi";

const AuditLogs = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [showFilters, setShowFilters] = useState(false);

  const logs = [
    {
      event: "CONFIG_CHANGE",
      actor: "admin_sarah",
      initials: "SJ",
      details: "Updated Meta API rate limits",
      ip: "192.168.1.101",
      timestamp: "Jun 1, 2026 14:21",
    },
    {
      event: "USER_SUSPENDED",
      actor: "admin_sarah",
      initials: "SJ",
      details: "Suspended user account: bot_492",
      ip: "192.168.1.102",
      timestamp: "Jun 1, 2026 14:22",
    },
    {
      event: "SECURITY_ALERT",
      actor: "admin_sarah",
      initials: "SJ",
      details: "Multiple failed login attempts detected",
      ip: "192.168.1.103",
      timestamp: "Jun 1, 2026 14:23",
    },
    {
      event: "USER_SUSPENDED",
      actor: "admin_sarah",
      initials: "SJ",
      details: "Suspended user account: bot_492",
      ip: "192.168.1.104",
      timestamp: "Jun 1, 2026 14:24",
    },
    {
      event: "CONFIG_CHANGE",
      actor: "admin_sarah",
      initials: "SJ",
      details: "Updated Meta API rate limits",
      ip: "192.168.1.105",
      timestamp: "Jun 1, 2026 14:25",
    },
    {
      event: "SECURITY_ALERT",
      actor: "admin_sarah",
      initials: "SJ",
      details: "Multiple failed login attempts detected",
      ip: "192.168.1.106",
      timestamp: "Jun 1, 2026 14:26",
    },
    {
      event: "CONFIG_CHANGE",
      actor: "admin_sarah",
      initials: "SJ",
      details: "Updated Meta API rate limits",
      ip: "192.168.1.107",
      timestamp: "Jun 1, 2026 14:27",
    },
    {
      event: "USER_SUSPENDED",
      actor: "admin_sarah",
      initials: "SJ",
      details: "Suspended user account: bot_492",
      ip: "192.168.1.108",
      timestamp: "Jun 1, 2026 14:28",
    },
  ];

  const filteredLogs =
    selectedFilter === "ALL"
      ? logs
      : logs.filter((log) => log.event === selectedFilter);

  const getBadge = (event) => {
    switch (event) {
      case "CONFIG_CHANGE":
        return (
          <span className="px-2 py-1 rounded-md bg-[#E2E8F0] text-[#475569] text-[12px] font-bold">
            CONFIG_CHANGE
          </span>
        );

      case "USER_SUSPENDED":
        return (
          <span className="px-2 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[12px] font-bold">
            USER_SUSPENDED
          </span>
        );

      case "SECURITY_ALERT":
        return (
          <span className="px-2 py-1 rounded-md bg-[#FFE4E6] text-[#E11D48] text-[12px] font-bold">
            SECURITY_ALERT
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm overflow-hidden"
      >
        {/* HEADER */}
        <div className="px-4 py-5 md:px-6 md:py-6 border-b border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[18px] leading-[28px] font-semibold text-[#0F172B]"
            >
              Platform Audit Logs
            </h2>

            <p
              style={{ fontFamily: "GeneralSans" }}
              className="mt-1 text-[14px] text-[#62748E]"
            >
              Immutable record of all administrative and security actions.
            </p>
            <div className="mt-3">
              <span
                style={{ fontFamily: "GeneralSans" }}
                className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4D239E] text-[12px] font-semibold"
              >
                {selectedFilter.replaceAll("_", " ")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              style={{ fontFamily: "GeneralSans" }}
              className="h-[40px] px-4 sm:px-5 rounded-[14px] border border-[#94A3B8] flex items-center justify-center gap-2 text-[14px] font-medium text-[#475569] hover:bg-[#F8FAFC] transition-all flex-1 sm:flex-initial"
            >
              <FiDownload size={16} />
              Export CSV
            </button>

            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-[48px] h-[40px] rounded-[14px] border border-[#94A3B8] flex items-center justify-center text-[#475569] hover:bg-[#F8FAFC] transition-all"
              >
                <FiFilter size={16} />
              </button>

              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-[50px] w-[220px] bg-white border border-[#E2E8F0] rounded-[16px] shadow-xl overflow-hidden z-50"
                >
                  {[
                    "ALL",
                    "CONFIG_CHANGE",
                    "USER_SUSPENDED",
                    "SECURITY_ALERT",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSelectedFilter(item);
                        setShowFilters(false);
                      }}
                      style={{ fontFamily: "GeneralSans" }}
                      className={`w-full text-left px-4 py-3 text-[14px] transition-all ${
                        selectedFilter === item
                          ? "bg-[#EEF2FF] text-[#4D239E] font-semibold"
                          : "text-[#475569] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {item.replaceAll("_", " ")}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr
                style={{ fontFamily: "GeneralSans" }}
                className="h-[48px] bg-[#F8FAFC] border-b border-[#E2E8F0]"
              >
                <th className="px-4 md:px-6 text-left text-[12px] font-bold uppercase tracking-[0.6px] text-[#62748E] whitespace-nowrap">
                  Event
                </th>

                <th className="px-4 md:px-6 text-left text-[12px] font-bold uppercase tracking-[0.6px] text-[#62748E] whitespace-nowrap">
                  Actor
                </th>

                <th className="px-4 md:px-6 text-left text-[12px] font-bold uppercase tracking-[0.6px] text-[#62748E] whitespace-nowrap">
                  Details
                </th>

                <th className="px-4 md:px-6 text-left text-[12px] font-bold uppercase tracking-[0.6px] text-[#62748E] whitespace-nowrap">
                  IP Address
                </th>

                <th className="px-4 md:px-6 text-left text-[12px] font-bold uppercase tracking-[0.6px] text-[#62748E] whitespace-nowrap">
                  Timestamp
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredLogs.map((log, index) => (
                <tr
                  key={index}
                  style={{ fontFamily: "GeneralSans" }}
                  className="h-[72.8px] border-b border-[#F1F5F9] hover:bg-[#FAFBFC] transition-colors"
                >
                  <td className="px-4 md:px-6 whitespace-nowrap">{getBadge(log.event)}</td>

                  <td className="px-4 md:px-6 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[12px] font-semibold text-[#4F46E5]">
                        {log.initials}
                      </div>

                      <span className="text-[14px] font-medium text-[#0F172B]">
                        {log.actor}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 md:px-6 text-[14px] text-[#334155] min-w-[200px]">
                    {log.details}
                  </td>

                  <td className="px-4 md:px-6 text-[14px] text-[#94A3B8] whitespace-nowrap">{log.ip}</td>

                  <td className="px-4 md:px-6 text-[14px] text-[#475569] whitespace-nowrap">
                    {log.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="h-[70px] flex items-center justify-center border-t border-[#F1F5F9]">
          <button
            style={{ fontFamily: "GeneralSans" }}
            className="flex items-center gap-3 text-[14px] font-semibold text-[#64748B] hover:text-[#4D239E] transition-all"
          >
            Load more logs
            <FiClock size={15} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuditLogs;