import React from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiTrash2,
} from "react-icons/fi";

const DataExport = () => {
  const handleExport = () => {
    const exportData = {
      workspace: "Acme Corp",
      leads: [],
      flows: [],
      analytics: {},
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob(
      [JSON.stringify(exportData, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "workspace-export.json";
    link.click();

    URL.revokeObjectURL(url);
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account? This action cannot be undone."
    );

    if (confirmed) {
      alert(
        "Account deletion request submitted."
      );

      // API CALL HERE
      // await deleteAccount()
    }
  };

  return (
    <div className="w-full max-w-[768px] mx-auto px-3 sm:px-4">
      {/* HEADER */}
      <div className="mb-5 sm:mb-8">
        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[24px] sm:text-[28px] md:text-[36px] leading-tight font-semibold text-[#0F172A]"
        >
          Data & Account
        </h1>

        <p
          style={{ fontFamily: "Inter" }}
          className="mt-2 text-[14px] sm:text-[15px] text-[#64748B]"
        >
          Export your information or permanently
          delete your account.
        </p>
      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className=" bg-white rounded-[16px] border border-[#E2E8F0CC] overflow-hidden shadow-[0px_1px_3px_rgba(0,0,0,0.10)] "
      >
        {/* EXPORT SECTION */}
        <div className="p-4 sm:p-6 md:p-8">
          <h2
            style={{ fontFamily: "Inter" }}
            className=" text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#0F172A] "
          >
            Export Workspace Data
          </h2>

          <p
            style={{ fontFamily: "Inter" }}
            className=" mt-3 sm:mt-4 max-w-[650px] text-[14px] sm:text-[16px] leading-6 sm:leading-[32px] text-[#64748B] "
          >
            Download a complete copy of your
            workspace data, including all flows,
            leads, API logs, and analytics history
            in JSON format.
          </p>

          <button
            onClick={handleExport}
            className=" mt-6 sm:mt-8 w-full sm:w-fit min-h-[44px] px-6 rounded-[12px] border border-[#E2E8F0] bg-white flex items-center justify-center gap-3 text-[#334155] font-medium shadow-sm transition-all duration-300 hover:bg-[#F8FAFC] hover:-translate-y-1 "
          >
            <FiDownload />
            Export to JSON
          </button>
        </div>

        {/* DANGER ZONE */}
        <div className="border-t border-[#E2E8F0] bg-[#FEF2F2] p-4 sm:p-6 md:p-8">
          <h2
            style={{ fontFamily: "Inter" }}
            className=" text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#DC2626] "
          >
            Danger Zone
          </h2>

          <p
            style={{ fontFamily: "Inter" }}
            className=" mt-3 sm:mt-4 max-w-[650px] text-[14px] sm:text-[16px] leading-6 sm:leading-[32px] text-[#64748B] "
          >
            Permanently delete your account and all
            associated workspace data. This action
            is irreversible and will immediately
            terminate all active automations.
          </p>

          <button
            onClick={handleDeleteAccount}
            className=" mt-6 sm:mt-8 w-full sm:w-fit min-h-[44px] px-6 rounded-[12px] bg-[#EF4444] text-white flex items-center justify-center gap-3 font-medium transition-all duration-300 hover:bg-[#DC2626] hover:-translate-y-1 hover:shadow-lg "
          >
            <FiTrash2 />
            Delete Account
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DataExport;