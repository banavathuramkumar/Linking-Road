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
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

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

      <aside className={`h-screen bg-white border-r-[0.8px] border-[#E2E8F0] shadow-[4px_0px_24px_0px_#00000005] flex flex-col shrink-0 fixed md:static top-0 left-0 z-40 transition-all duration-300 ease-in-out ${
        isCollapsed ? "md:w-[80px]" : "md:w-[280px]"
      } ${
        isOpen ? "translate-x-0 w-[280px]" : "-translate-x-full w-[280px] md:translate-x-0"
      }`}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-[78px] -right-[11px] w-5.5 h-5.5 rounded-full bg-[#EC4899] text-white flex items-center justify-center border-none shadow-[0_2px_8px_rgba(0,0,0,0.15)] cursor-pointer z-50 hover:bg-[#D01C77] transition-all md:flex hidden"
        >
          {isCollapsed ? <FiChevronRight size={14} /> : <FiChevronLeft size={14} />}
        </button>

        {/* LOGO */}

        <div className={`h-[60px] flex items-center justify-between border-b-[0.8px] border-[#F1F5F9] shrink-0 transition-all ${isCollapsed ? "px-4 justify-center" : "px-6"}`}>
          <div className="flex items-center gap-2 font-bold text-[22px] tracking-wider">
            {!isCollapsed && (
              <img src="/logo-text.png" alt="logo" className="w-[150px] h-auto" />
            )}
          </div>
          {!isCollapsed && (
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden p-1 rounded-lg hover:bg-[#F1F5F9] cursor-pointer"
            >
              <FiX className="text-xl text-[#64748B]" />
            </button>
          )}
        </div>

        <div className={`flex-1 py-6 space-y-1 overflow-y-auto transition-all ${isCollapsed ? "px-3" : "px-[21px]"}`}>
          {menu.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link to={item.path} key={index} className="block" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className={`h-[53.6px] rounded-[15px] flex items-center gap-2 text-sm font-semibold cursor-pointer transition-all ${
                    isCollapsed ? "w-[54px] justify-center p-0 mx-auto" : "w-[225px] p-4"
                  } ${isActive ? "bg-[#EEF2FF] text-[#4D239E] border-b-[1.6px] border-[#4D239E]" : "text-[#64748B]"}`}
                >
                  <span className="text-lg flex items-center justify-center">{item.icon}</span>
                  {!isCollapsed && <span>{item.name}</span>}
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