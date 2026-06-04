import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  HiPlus,
  HiPlay,
  HiPause,
  HiDotsVertical,
  HiOutlineChartBar,
  HiOutlinePlus,
  HiMenu
} from "react-icons/hi";
import { FiCopy, FiTrash, FiX } from "react-icons/fi";

const Automations = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [automations, setAutomations] = useState(() => {
    const defaultList = [
      {
        id: 1,
        name: "Welcome DM Flow",
        description: "Auto-reply to new followers with a welcome message",
        status: "active",
        triggers: 1247,
        conversions: 293,
        lastRun: "2 mins ago"
      },
      {
        id: 2,
        name: "Lead Magnet - Free Guide",
        description: "Send downloadable guide when keyword is mentioned",
        status: "active",
        triggers: 892,
        conversions: 278,
        lastRun: "5 mins ago"
      },
      {
        id: 3,
        name: "Story Reply Automation",
        description: "Respond to story replies with custom messages",
        status: "paused",
        triggers: 456,
        conversions: 85,
        lastRun: "3 hours ago"
      },
      {
        id: 4,
        name: "Comment Engagement Bot",
        description: "Auto-respond to comments with specific keywords",
        status: "active",
        triggers: 2134,
        conversions: 967,
        lastRun: "1 min ago"
      },
      {
        id: 5,
        name: "Appointment Booking",
        description: "Schedule meetings through DM conversations",
        status: "active",
        triggers: 342,
        conversions: 187,
        lastRun: "12 mins ago"
      },
      {
        id: 6,
        name: "Product Quiz Funnel",
        description: "Interactive quiz to recommend products",
        status: "draft",
        triggers: 0,
        conversions: 0,
        lastRun: "Never"
      }
    ];
    const stored = localStorage.getItem("custom_automations");
    const customList = stored ? JSON.parse(stored) : [];
    return [...customList, ...defaultList];
  });

  const handleToggleStatus = (id) => {
    setAutomations(prev => {
      const updated = prev.map(auto => {
        if (auto.id === id) {
          const nextStatus = auto.status === "active" ? "paused" : "active";
          return { ...auto, status: nextStatus };
        }
        return auto;
      });

      // Update localStorage for custom automations
      const stored = localStorage.getItem("custom_automations");
      if (stored) {
        const customList = JSON.parse(stored);
        const updatedCustom = customList.map(auto => {
          if (auto.id === id) {
            const nextStatus = auto.status === "active" ? "paused" : "active";
            return { ...auto, status: nextStatus };
          }
          return auto;
        });
        localStorage.setItem("custom_automations", JSON.stringify(updatedCustom));
      }
      return updated;
    });
  };

  const handleDeleteAutomation = (id) => {
    setAutomations(prev => {
      const updated = prev.filter(auto => auto.id !== id);
      const stored = localStorage.getItem("custom_automations");
      if (stored) {
        const customList = JSON.parse(stored);
        const updatedCustom = customList.filter(auto => auto.id !== id);
        localStorage.setItem("custom_automations", JSON.stringify(updatedCustom));
      }
      return updated;
    });
  };

  const handleDuplicateAutomation = (autoToDup) => {
    const duplicated = {
      ...autoToDup,
      id: Date.now(),
      name: `${autoToDup.name} (Copy)`,
      lastRun: "Never",
    };
    setAutomations(prev => {
      const updated = [duplicated, ...prev];
      const stored = localStorage.getItem("custom_automations");
      const customList = stored ? JSON.parse(stored) : [];
      customList.unshift(duplicated);
      localStorage.setItem("custom_automations", JSON.stringify(customList));
      return updated;
    });
  };

  const filteredAutomations = automations.filter(auto => {
    // Tab filter
    if (activeTab !== "All" && auto.status.toLowerCase() !== activeTab.toLowerCase()) {
      return false;
    }
    return true;
  });

  const sidebarLinks = [
    { name: "Dashboard", icon: HiOutlineViewGrid, active: false, path: "/" },
    { name: "Automations", icon: HiOutlineLightningBolt, active: true, path: "/automations" },
    { name: "Inbox", icon: HiOutlineMail, active: false },
    { name: "Leads", icon: HiOutlineUserGroup, active: false },
    { name: "Analytics", icon: HiOutlineChartPie, active: false },
    { name: "Templates", icon: HiOutlineTemplate, active: false, path: "/templates" },
    { name: "Referrals", icon: HiOutlineGift, active: false },
    { name: "Billing", icon: HiOutlineCreditCard, active: false },
    { name: "Settings", icon: HiOutlineCog, active: false }
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-[#E2E8F0] flex-col justify-between shrink-0">
        <div>
          {/* Logo / Header */}
          <div className="h-[95px] flex items-center justify-center border-b border-[#E2E8F0] px-6 cursor-pointer" onClick={() => navigate("/")}>
            <img src="/logo.png" alt="Linkroad logo" className="h-10 object-contain" />
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {sidebarLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <button
                  key={idx}
                  onClick={() => link.path && navigate(link.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[16px] font-medium transition-all duration-300 ${
                    link.active
                      ? "bg-gradient-to-r from-[#4C229E]/90 to-[#F754B4] text-white shadow-md"
                      : "text-[#64748B] hover:text-[#0F172B] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${link.active ? "text-white" : "text-[#64748B]"}`} />
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
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="relative w-72 max-w-[80vw] bg-white h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-300">
            <div>
              <div className="h-[95px] flex items-center justify-between border-b border-[#E2E8F0] px-6">
                <div className="cursor-pointer" onClick={() => { navigate("/"); setMobileMenuOpen(false); }}>
                  <img src="/logo.png" alt="Linkroad logo" className="h-10 object-contain" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {sidebarLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        link.path && navigate(link.path);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[16px] font-medium transition-all duration-300 ${
                        link.active
                          ? "bg-gradient-to-r from-[#4C229E]/90 to-[#F754B4] text-white shadow-md"
                          : "text-[#64748B] hover:text-[#0F172B] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${link.active ? "text-white" : "text-[#64748B]"}`} />
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

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl border border-[#E2E8F0] hover:bg-gray-100 transition-colors"
            >
              <HiMenu className="w-6 h-6 text-gray-700" />
            </button>
            <div>
              <h1 className="font-['ClashDisplay'] font-semibold text-3xl md:text-4xl text-[#000000] tracking-tight">
                Automations
              </h1>
              <p className="text-[#64748B] mt-1 text-sm md:text-[16px]">
                Manage your workflow automations
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/automations/builder")}
            className="flex items-center gap-2 bg-[#4C229E] text-white px-5 py-3 rounded-2xl font-medium hover:bg-[#3b1980] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0px_4px_6px_-4px_rgba(97,95,255,0.5)] cursor-pointer"
          >
            <HiPlus className="w-5 h-5" />
            <span>Create Automation</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 bg-black/5 p-1 rounded-2xl w-fit mb-8 overflow-x-auto max-w-full">
          {["All", "Active", "Paused", "Draft"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#4C229E] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#0F172B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Automations Grid */}
        {filteredAutomations.length === 0 ? (
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-12 text-center">
            <p className="text-[#64748B]">No automations found matching your selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {filteredAutomations.map((auto) => (
              <div
                key={auto.id}
                className="bg-[#F8F9FA] border border-[#EBEBEB] rounded-[24px] p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  {/* Top line with Icon & Badge & Action Menu */}
                  <div className="flex items-start justify-between">
                    {/* Squirclish Icon container */}
                    <div className="w-14 h-14 rounded-[18px] bg-gradient-to-tr from-[#D946EF] to-[#EC4899] flex items-center justify-center text-white shrink-0">
                      <HiOutlineLightningBolt className="w-7 h-7" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {/* Status Badge */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                          auto.status === "active"
                            ? "bg-[#DCFCE7] text-[#15803D]"
                            : auto.status === "paused"
                            ? "bg-[#FEF3C7] text-[#B45309]"
                            : "bg-[#F1F5F9] text-[#475569]"
                        }`}
                      >
                        {auto.status}
                      </span>
                      
                      {/* Options menu */}
                      <button className="p-1 text-gray-300 hover:text-gray-500 transition-colors">
                        <HiDotsVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-black mt-4 leading-snug">{auto.name}</h3>
                  <p className="text-black/45 text-[14px] mt-2 leading-normal min-h-[40px]">
                    {auto.description}
                  </p>
                </div>

                {/* Metrics and Controls */}
                <div>
                  {/* Stats Row */}
                  <div className="flex items-center gap-6 sm:gap-12 mt-6">
                    <div>
                      <p className="text-3xl font-semibold text-[#4C229E] tracking-tight">
                        {auto.triggers.toLocaleString()}
                      </p>
                      <p className="text-xs text-[#8E8E93] mt-1">Triggers</p>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-[#22C55E] tracking-tight">
                        {auto.conversions.toLocaleString()}
                      </p>
                      <p className="text-xs text-[#8E8E93] mt-1">Conversions</p>
                    </div>
                  </div>

                  {/* Last Run Time */}
                  <p className="text-xs text-[#8E8E93] mt-6">
                    Last run: {auto.lastRun}
                  </p>

                  {/* Action Bar */}
                  <div className="flex items-center gap-3 mt-4">
                    {auto.status !== "draft" ? (
                      <button
                        onClick={() => handleToggleStatus(auto.id)}
                        className="flex-1 py-3 bg-[#EAEAEA] hover:bg-[#DDD] active:scale-[0.98] text-[#1C1C1E] rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        {auto.status === "active" ? (
                          <>
                            <HiPause className="w-4 h-4 text-[#1C1C1E]" />
                            <span>Pause</span>
                          </>
                        ) : (
                          <>
                            <HiPlay className="w-4 h-4 text-[#1C1C1E]" />
                            <span>Start</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleToggleStatus(auto.id)}
                        className="flex-1 py-3 bg-[#4C229E] hover:bg-[#3b1980] active:scale-[0.98] text-white rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <HiPlay className="w-4 h-4 text-white" />
                        <span>Publish</span>
                      </button>
                    )}

                    {/* Duplicate button */}
                    <button
                      onClick={() => handleDuplicateAutomation(auto)}
                      title="Duplicate"
                      className="w-12 h-12 bg-[#EAEAEA] hover:bg-[#DDD] active:scale-[0.98] rounded-2xl flex items-center justify-center transition-all cursor-pointer"
                    >
                      <FiCopy className="w-5 h-5 text-[#1C1C1E]" />
                    </button>

                    {/* Delete button */}
                    <button
                      onClick={() => handleDeleteAutomation(auto.id)}
                      title="Delete"
                      className="w-12 h-12 bg-[#EAEAEA] hover:bg-[#DDD] active:scale-[0.98] rounded-2xl flex items-center justify-center transition-all cursor-pointer"
                    >
                      <FiTrash className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

    </div>
  );
};

export default Automations;
