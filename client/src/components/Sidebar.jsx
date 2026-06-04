import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineLightningBolt,
  HiOutlineMail,
  HiOutlineUserGroup,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineGift,
  HiOutlineCreditCard,
  HiOutlineCog,
} from "react-icons/hi";
import { FiX } from "react-icons/fi";

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarLinks = [
    { name: "Dashboard", icon: HiOutlineViewGrid, path: "/dashboard" },
    { name: "Automations", icon: HiOutlineLightningBolt, path: "/automations" },
    { name: "Inbox", icon: HiOutlineMail },
    { name: "Leads", icon: HiOutlineUserGroup },
    { name: "Analytics", icon: HiOutlineChartPie },
    { name: "Templates", icon: HiOutlineTemplate, path: "/templates" },
    { name: "Referrals", icon: HiOutlineGift, path: "/referrals" },
    { name: "Billing", icon: HiOutlineCreditCard, path: "/billing" },
    { name: "Settings", icon: HiOutlineCog, path: "/settings" }
  ];

  // Helper to determine if a link is active based on the current location
  const isLinkActive = (link) => {
    if (!link.path) return false;
    if (link.path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(link.path);
  };

  const handleLinkClick = (link) => {
    if (link.path) {
      navigate(link.path);
    }
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-[#E2E8F0] flex-col justify-between shrink-0">
        <div>
          {/* Logo / Header */}
          <div 
            className="h-[95px] flex items-center justify-center border-b border-[#E2E8F0] px-6 cursor-pointer" 
            onClick={() => navigate("/dashboard")}
          >
            <img src="/logo.png" alt="Linkroad logo" className="h-10 object-contain" />
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {sidebarLinks.map((link, idx) => {
              const Icon = link.icon;
              const active = isLinkActive(link);
              return (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[16px] font-medium transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-[#4C229E]/90 to-[#F754B4] text-white shadow-md"
                      : "text-[#64748B] hover:text-[#0F172B] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-white" : "text-[#64748B]"}`} />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Profile Card */}
        <div className="p-4">
          <div className="bg-gradient-to-tr from-[#4C229E]/90 to-[#F754B4] rounded-2xl p-4 flex items-center gap-3 text-white shadow-lg">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg text-white">
              JD
            </div>
            <div>
              <h4 className="font-semibold text-sm">John Doe</h4>
              <p className="text-xs text-white/70">Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE SIDEBAR OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
          />
          <aside className="relative w-72 max-w-[80vw] bg-white h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-300">
            <div>
              <div className="h-[95px] flex items-center justify-between border-b border-[#E2E8F0] px-6">
                <div 
                  className="cursor-pointer" 
                  onClick={() => { navigate("/"); setMobileMenuOpen && setMobileMenuOpen(false); }}
                >
                  <img src="/logo.png" alt="Linkroad logo" className="h-10 object-contain" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {sidebarLinks.map((link, idx) => {
                  const Icon = link.icon;
                  const active = isLinkActive(link);
                  return (
                    <button
                      key={idx}
                      onClick={() => handleLinkClick(link)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[16px] font-medium transition-all duration-300 ${
                        active
                          ? "bg-gradient-to-r from-[#4C229E]/90 to-[#F754B4] text-white shadow-md"
                          : "text-[#64748B] hover:text-[#0F172B] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${active ? "text-white" : "text-[#64748B]"}`} />
                      <span>{link.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="p-4">
              <div className="bg-gradient-to-tr from-[#4C229E]/90 to-[#F754B4] rounded-2xl p-4 flex items-center gap-3 text-white shadow-lg">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg text-white">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold text-sm">John Doe</h4>
                  <p className="text-xs text-white/70">Pro Plan</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
