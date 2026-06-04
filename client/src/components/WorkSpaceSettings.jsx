import React, { useState } from "react";
import { motion } from "framer-motion";

const WorkspaceSettings = () => {
  const [workspaceName, setWorkspaceName] = useState("Acme Corp");
  const [workspaceSlug, setWorkspaceSlug] = useState("acme");

  const handleSave = () => {
    console.log({
      workspaceName,
      workspaceSlug,
    });
  };

  return (
    <div className="w-full max-w-[768px] mx-auto px-3 sm:px-4">
      {/* HEADER */}
      <div className="mb-5 sm:mb-8">
        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[24px] sm:text-[28px] md:text-[36px] leading-tight font-semibold text-[#0F172A]"
        >
          Workspace Settings
        </h1>

        <p
          style={{ fontFamily: "Inter" }}
          className="mt-2 text-[14px] md:text-[16px] text-[#64748B]"
        >
          Manage your team's workspace configuration.
        </p>
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className=" w-full bg-white p-4 sm:p-6 rounded-[16px] border border-[#E2E8F0CC] shadow-[0px_1px_3px_rgba(0,0,0,0.10)] "
      >
        {/* WORKSPACE NAME */}
        <div>
          <label
            style={{ fontFamily: 'Inter' }}
            className="
              block
              mb-3
              text-[15px]
              font-medium
              text-[#334155]
            "
          >
            Workspace Name
          </label>

          <input
            type="text"
            value={workspaceName}
            onChange={(e) =>
              setWorkspaceName(e.target.value)
            }
            className="
              w-full
              h-[42px]
              px-4
              rounded-[10px]
              border
              border-[#E2E8F0]
              bg-[#F8FAFC]
              text-[#0F172A]
              outline-none
              transition-all
              focus:border-[#8B5CF6]
            "
          />
        </div>

        {/* WORKSPACE SLUG */}
        <div className="mt-7">
          <label
            style={{ fontFamily: 'Inter' }}
            className="
              block
              mb-3
              text-[15px]
              font-medium
              text-[#334155]
            "
          >
            Workspace Slug URL
          </label>

          <div
            className=" flex flex-col sm:flex-row rounded-[10px] border border-[#E2E8F0] overflow-hidden bg-[#F8FAFC] "
          >
            <div
              className=" px-4 py-3 flex items-center text-[#94A3B8] border-b sm:border-b-0 sm:border-r border-[#E2E8F0] text-[14px] sm:text-[15px] "
              style={{ fontFamily: "Inter" }}
            >
              flowpilot.com/
            </div>

            <input
              type="text"
              value={workspaceSlug}
              onChange={(e) =>
                setWorkspaceSlug(e.target.value)
              }
              className=" px-4 py-3 flex items-center text-[#94A3B8] border-b sm:border-b-0 sm:border-r border-[#E2E8F0] text-[14px] sm:text-[15px] "
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-[#E2E8F0] mt-8 pt-6 flex justify-center sm:justify-start">
          <button
            onClick={handleSave}
            style={{ fontFamily: "Inter" }}
           className=" w-full sm:w-auto h-[44px] px-6 rounded-[12px] bg-[#4C229E] text-white text-[15px] font-medium shadow-[0px_4px_6px_-4px_rgba(97,95,255,0.5)] transition-all duration-300 hover:bg-[#5B2BB8] hover:-translate-y-1 hover:shadow-[0px_12px_30px_rgba(97,95,255,0.35)] active:scale-[0.98] "
          >
            Save Settings
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkspaceSettings;

