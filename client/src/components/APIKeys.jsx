import React from "react";
import { motion } from "framer-motion";
import { FiLink } from "react-icons/fi";

const APIKeys = () => {
  return (
    <div className="w-full max-w-[768px] mx-auto px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
       className=" w-full min-h-[280px] sm:min-h-[359px] bg-white border border-dashed border-[#E2E8F0CC] rounded-[16px] py-10 sm:py-[96px] px-4 sm:px-6 flex flex-col items-center justify-center text-center shadow-[0px_1px_3px_rgba(0,0,0,0.10)] " >
        {/* ICON */}
        <div
         className=" w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shadow-sm "
        >
          <FiLink size={24} className="text-[#94A3B8] sm:text-[28px]" />
        </div>

        {/* TITLE */}
        <h2
          style={{ fontFamily: "ClashDisplay" }}
          className=" mt-6 sm:mt-8 text-[24px] sm:text-[30px] md:text-[34px] leading-tight font-semibold text-[#0F172A] "
        >
          Module Configuration
        </h2>

        {/* DESCRIPTION */}
        <p
          style={{ fontFamily: "Inter" }}
          className=" mt-3 sm:mt-4 max-w-[420px] text-[14px] sm:text-[18px leading-6 sm:leading-[30px] text-[#64748B] px-2 "
        >
          This settings pane is currently being migrated
          to the new LINKINGROAD v2 platform.
        </p>
      </motion.div>
    </div>
  );
};

export default APIKeys;