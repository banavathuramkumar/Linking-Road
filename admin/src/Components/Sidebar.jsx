import { useState } from "react";
import {
  FiActivity,
  FiUsers,
  FiShield,
  FiCreditCard,
  FiServer,
  FiHeadphones,
  FiClock,
  FiPackage,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Overview", icon: <FiActivity />, path: "/" },
    { name: "Users", icon: <FiUsers />, path: "/users" },
    { name: "Moderation", icon: <FiShield />, path: "/moderation" },
    { name: "Billing", icon: <FiCreditCard />, path: "/billing" },
    { name: "Infrastructure", icon: <FiServer />, path: "/infrastructure" },
    { name: "Support", icon: <FiHeadphones />, path: "/support" },
    { name: "Audit Logs", icon: <FiClock />, path: "/audit-logs" },
    { name: "Subscription Packages", icon: <FiPackage />, path: "/subscription-packages" },
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-[18px] left-6 z-50 text-[#64748B] hover:text-[#4D239E] transition-colors cursor-pointer md:hidden"
        >
          <FiMenu className="text-2xl" />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-35 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`w-[280px] h-screen bg-white border-r-[0.8px] border-[#E2E8F0] shadow-[4px_0px_24px_0px_#00000005] flex flex-col shrink-0 fixed md:static top-0 left-0 z-40 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        {/* LOGO */}

        <div className="h-[60px] px-6 flex items-center justify-between border-b-[0.8px] border-[#F1F5F9] shrink-0">
          <div className="flex items-center gap-2 font-bold text-[22px] tracking-wider">
            <img src="/logo-text.png" alt="logo" className="w-[150px] h-auto" />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1 rounded-lg hover:bg-[#F1F5F9] cursor-pointer"
          >
            <FiX className="text-xl text-[#64748B]" />
          </button>
        </div>

        <div className="flex-1 px-[21px] py-6 space-y-1 overflow-y-auto">
          {menu.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link to={item.path} key={index} className="block" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className={`w-[225px] h-[53.6px] rounded-[15px] p-4 flex items-center gap-2 text-sm font-semibold cursor-pointer ${isActive ? "bg-[#EEF2FF] text-[#4D239E] border-b-[1.6px] border-[#4D239E]" : "text-[#64748B]"}`}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </motion.button>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;