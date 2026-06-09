import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiBell, 
  FiSettings, 
  FiInbox, 
  FiClock, 
  FiArchive, 
  FiCheck, 
  FiShield, 
  FiUsers, 
  FiTrendingUp, 
  FiAlertTriangle, 
  FiPauseCircle, 
  FiCreditCard,
  FiMonitor,
  FiMail,
  FiSmartphone,
  FiChevronLeft,
  FiDownload,
  FiExternalLink
} from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

const initialNotifications = [
  {
    id: 1,
    title: "Suspicious Login Attempt",
    text: "Unrecognized device signed in from Moscow, RU.",
    time: "Just now",
    type: "alert",
    read: false,
    icon: <FiShield />,
    iconColor: "#EF4444",
    bgColor: "#FEE2E2",
    details: "Unrecognized device signed in from Moscow, RU.",
    actionRequired: true,
    actionTitle: "Action Required",
    actionText: "If this wasn't you, please secure your account immediately by changing your password and terminating active sessions.",
    actionButtons: [
      { label: "Review Sessions", primary: true, danger: true },
      { label: "It was me", primary: false }
    ],
    devices: ["monitor", "mail", "smartphone"]
  },
  {
    id: 2,
    title: "4 New Leads Captured",
    text: "sarah.jenkins@acmecorp.com and 3 others signed up recently.",
    time: "5m ago",
    type: "leads",
    read: false,
    icon: <FiUsers />,
    iconColor: "#10B981",
    bgColor: "#D1FAE5",
    badge: "4",
    details: "sarah.jenkins@acmecorp.com and 3 others recently completed their signup forms. Traffic source shows Instagram referral campaign.",
    actionRequired: true,
    actionTitle: "Leads Overview",
    actionText: "All captured leads have been synced to HubSpot CRM. Download a copy or view details.",
    actionButtons: [
      { label: "Export CSV", primary: true, icon: <FiDownload /> },
      { label: "View in CRM", primary: false, icon: <FiExternalLink /> }
    ],
    devices: ["monitor", "mail"]
  },
  {
    id: 3,
    title: "Team Mention",
    text: "@jessica tagged you in \"Welcome Flow Redesign\".",
    time: "1h ago",
    type: "mention",
    read: false,
    icon: <span className="font-bold">@</span>,
    iconColor: "#3B82F6",
    bgColor: "#DBEAFE",
    details: "Jessica commented: 'Can you review the copywriting on step 3 before we push to production? I'm worried it might be a bit too aggressive.'",
    actionRequired: true,
    actionTitle: "Mention in Workspace",
    actionText: "Review comments and collaborate directly on the redesign page.",
    actionButtons: [
      { label: "Go to redesign", primary: true },
      { label: "Reply tag", primary: false }
    ],
    devices: ["monitor", "smartphone"]
  },
  {
    id: 4,
    title: "Viral Post Detected",
    text: "Your recent Instagram Reel is tracking 400% above average engagement.",
    time: "2h ago",
    type: "viral",
    read: true,
    icon: <FiTrendingUp />,
    iconColor: "#8B5CF6",
    bgColor: "#EDE9FE",
    details: "Your Instagram Reel has reached 14,204 users with over 1,200 likes and 45 comments within the last 2 hours. Engagement is trending up.",
    actionRequired: true,
    actionTitle: "Performance Alert",
    actionText: "Boost this post or view deep metrics within the analytics dashboard.",
    actionButtons: [
      { label: "View Performance", primary: true },
      { label: "Share report", primary: false }
    ],
    devices: ["smartphone"]
  },
  {
    id: 5,
    title: "API Rate Limit Warning",
    text: "Shopify integration is at 90% of its hourly quota.",
    time: "3h ago",
    type: "warning",
    read: true,
    icon: <FiAlertTriangle />,
    iconColor: "#F59E0B",
    bgColor: "#FEF3C7",
    details: "Shopify integration has consumed 450 out of 500 hourly API tokens. Global operations could hit rate caps shortly.",
    actionRequired: true,
    actionTitle: "System Limits Warning",
    actionText: "Upgrade plan limit tiers to prevent sync pauses, or delay non-critical operations.",
    actionButtons: [
      { label: "Upgrade Plan", primary: true },
      { label: "View usage", primary: false }
    ],
    devices: ["monitor", "mail"]
  },
  {
    id: 6,
    title: "Automation Paused",
    text: "\"Abandoned Cart Sequence\" paused due to 5+ consecutive failures.",
    time: "Yesterday",
    type: "automation",
    read: true,
    icon: <FiPauseCircle />,
    iconColor: "#6B7280",
    bgColor: "#E5E7EB",
    details: "System automated actions encountered multiple 401 token authentication errors while connecting to Meta Graph APIs.",
    actionRequired: true,
    actionTitle: "Sequence Error Details",
    actionText: "Reconnect API accounts and re-authenticate permissions to resume flow sequences.",
    actionButtons: [
      { label: "Troubleshoot Token", primary: true },
      { label: "Dismiss", primary: false }
    ],
    devices: ["monitor"]
  },
  {
    id: 7,
    title: "Payment Issue",
    text: "Your primary card ending in 4242 failed to charge.",
    time: "2 days ago",
    type: "billing",
    read: true,
    icon: <FiCreditCard />,
    iconColor: "#EC4899",
    bgColor: "#FCE7F3",
    details: "Subscription charge of $149 failed for Business Plan renewal. Primary payment card returned insufficient funds code.",
    actionRequired: true,
    actionTitle: "Billing Update Required",
    actionText: "Update billing card credentials or retry charge to avoid service sync interruptions.",
    actionButtons: [
      { label: "Update Billing", primary: true },
      { label: "Retry Charge", primary: false }
    ],
    devices: ["monitor", "mail"]
  }
];

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeFilter, setActiveFilter] = useState("all"); 
  const [selectedNotification, setSelectedNotification] = useState(initialNotifications[0]);
  const [smartDigest, setSmartDigest] = useState(true);
  const [showDetailMobile, setShowDetailMobile] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = notifications.filter(n => {
    if (activeFilter === "unread") return !n.read;
    if (activeFilter === "archive") return false; 
    return true;
  });

  const handleSelectNotification = (item) => {
    setSelectedNotification(item);
    setShowDetailMobile(true);
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    if (selectedNotification) {
      setSelectedNotification(prev => ({ ...prev, read: true }));
    }
  };

  const handleToggleRead = (id) => {
    setNotifications(prev => prev.map(n => {
      if (n.id === id) {
        const updated = { ...n, read: !n.read };
        setSelectedNotification(updated);
        return updated;
      }
      return n;
    }));
  };

  const renderDeviceIcon = (device) => {
    switch (device) {
      case "monitor": return <FiMonitor className="text-sm" />;
      case "mail": return <FiMail className="text-sm" />;
      case "smartphone": return <FiSmartphone className="text-sm" />;
      default: return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] font-sans overflow-hidden">
      <header className="h-[60px] border-b border-[#E2E8F0] px-6 flex items-center justify-between bg-white sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="flex items-center no-underline">
            <img src="/logo.png" alt="logo" className="h-[28px] w-auto" />
          </Link>
          <span className="text-[#E2E8F0] text-xl font-light">/</span>
          <div className="flex items-center gap-2 text-[#62748E] font-medium text-sm font-['General_Sans',sans-serif]">
            <FiBell className="text-base" />
            <span>Inbox</span>
          </div>
        </div>
        <Link to="/settings" className="w-10 h-10 rounded-xl hover:bg-[#F1F5F9] flex items-center justify-center text-[#62748E] border border-transparent hover:border-[#E2E8F0] transition-all cursor-pointer no-underline">
          <FiSettings className="text-xl" />
        </Link>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className="w-[240px] border-r border-[#E2E8F0] bg-white p-6 flex flex-col justify-between shrink-0 hidden md:flex">
          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => setActiveFilter("all")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all border-none cursor-pointer outline-none ${activeFilter === "all" ? "bg-[#EEF2FF] text-[#4F39F6]" : "bg-transparent text-[#62748E] hover:bg-[#F8FAFC] hover:text-[#0F172B]"}`}
            >
              <div className="flex items-center gap-3">
                <FiInbox className="text-base" />
                <span>All Alerts</span>
              </div>
              {unreadCount > 0 && (
                <span className="bg-[#4F39F6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveFilter("unread")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all border-none cursor-pointer outline-none ${activeFilter === "unread" ? "bg-[#EEF2FF] text-[#4F39F6]" : "bg-transparent text-[#62748E] hover:bg-[#F8FAFC] hover:text-[#0F172B]"}`}
            >
              <div className="flex items-center gap-3">
                <FiClock className="text-base" />
                <span>Unread</span>
              </div>
            </button>

            <button
              onClick={() => setActiveFilter("archive")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all border-none cursor-pointer outline-none ${activeFilter === "archive" ? "bg-[#EEF2FF] text-[#4F39F6]" : "bg-transparent text-[#62748E] hover:bg-[#F8FAFC] hover:text-[#0F172B]"}`}
            >
              <div className="flex items-center gap-3">
                <FiArchive className="text-base" />
                <span>Archive</span>
              </div>
            </button>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[20px] p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <LuSparkles className="text-[#4F39F6] text-base" />
              <span style={{ fontFamily: "ClashDisplay" }} className="font-semibold text-[14px] tracking-wider uppercase text-[#0F172B]">Smart Digest</span>
            </div>
            <p className="font-['General_Sans',sans-serif] text-[11px] text-[#62748E] leading-relaxed m-0">
              Group similar repetitive alerts to prevent notification fatigue.
            </p>
            <div className="flex items-center justify-between mt-1 pt-3 border-t border-[#E2E8F0]">
              <span className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#45556C]">Active</span>
              <label className="relative inline-block w-10 h-5.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0 peer"
                  checked={smartDigest}
                  onChange={() => setSmartDigest(!smartDigest)}
                />
                <span className="absolute inset-0 bg-[#E2E8F0] rounded-3xl transition-all duration-300 peer-checked:bg-[#4F39F6] after:content-[''] after:absolute after:h-4 after:w-4 after:left-[3px] after:bottom-[3px] after:bg-white after:rounded-full after:transition-all after:duration-300 after:shadow peer-checked:after:translate-x-[18px]"></span>
              </label>
            </div>
          </div>
        </aside>

        <div className={`w-full md:w-[380px] border-r border-[#E2E8F0] bg-white p-6 flex flex-col overflow-y-auto shrink-0 ${showDetailMobile ? "hidden md:flex" : "flex"}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-['Clash_Display',sans-serif] font-semibold text-lg text-[#0F172B] m-0">Inbox</h2>
            <button
              onClick={handleMarkAllRead}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#4F39F6] hover:text-[#3B2AE0] bg-transparent border-none cursor-pointer transition-colors"
            >
              <FiCheck className="text-sm" />
              Mark all read
            </button>
          </div>

          <div className="flex flex-col gap-2 flex-grow overflow-y-auto">
            {filteredNotifications.map((item) => {
              const isSelected = selectedNotification?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectNotification(item)}
                  className={`p-4 rounded-[20px] transition-all flex items-start gap-3.5 cursor-pointer relative border border-transparent ${isSelected ? "bg-[#EEF2FF]/60" : "hover:bg-slate-50 bg-white"}`}
                >
                  {!item.read && (
                    <span className="absolute left-2.5 top-[30px] w-1.5 h-1.5 rounded-full bg-[#4F39F6]" />
                  )}

                  <div className="relative shrink-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: item.bgColor, color: item.iconColor }}
                    >
                      {item.icon}
                    </div>
                    {item.badge && (
                      <span className="absolute -bottom-1 -right-1 bg-[#4F39F6] text-white font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex-grow min-w-0 flex flex-col gap-0.5">
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className={`text-sm text-[#0F172B] m-0 truncate ${!item.read ? "font-bold" : "font-semibold"}`}>
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-[#64748B] whitespace-nowrap">{item.time}</span>
                    </div>
                    <p className="text-xs text-[#62748E] leading-normal m-0 line-clamp-2">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`flex-grow bg-white p-8 overflow-y-auto ${showDetailMobile ? "flex" : "hidden md:flex"} flex-col justify-between`}>
          <div>
            <button
              onClick={() => setShowDetailMobile(false)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#62748E] hover:text-[#0F172B] bg-transparent border-none cursor-pointer mb-6 md:hidden transition-colors"
            >
              <FiChevronLeft className="text-base" />
              Back to Inbox
            </button>

            {selectedNotification && (
              <div className="max-w-[640px] flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-xl"
                    style={{ backgroundColor: selectedNotification.bgColor, color: selectedNotification.iconColor }}
                  >
                    {selectedNotification.icon}
                  </div>
                  <div className="flex-grow min-w-0">
                    <h2 className="font-['Clash_Display',sans-serif] font-bold text-2xl text-[#0F172B] m-0 leading-tight">
                      {selectedNotification.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1.5 text-[#64748B] font-['General_Sans',sans-serif] text-xs font-medium">
                      <span>{selectedNotification.time}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        {selectedNotification.devices.map((device, idx) => (
                          <span key={idx}>{renderDeviceIcon(device)}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-['General_Sans',sans-serif] text-sm text-[#45556C] leading-relaxed m-0 mb-6">
                  {selectedNotification.details}
                </p>

                {selectedNotification.actionRequired && (
                  <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-2xl p-5 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#991B1B] font-bold text-sm">
                      <span>{selectedNotification.actionTitle}</span>
                    </div>
                    <p className="font-['General_Sans',sans-serif] text-xs text-[#991B1B] leading-relaxed m-0">
                      {selectedNotification.actionText}
                    </p>
                    <div className="flex items-center gap-3">
                      {selectedNotification.actionButtons.map((btn, idx) => (
                        <button
                          key={idx}
                          className={`font-['General_Sans',sans-serif] font-semibold text-xs py-2 px-4.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
                            btn.primary
                              ? btn.danger
                                ? "bg-[#EF4444] border-transparent hover:bg-[#DC2626] text-white"
                                : "bg-[#4F39F6] border-transparent hover:bg-[#3B2AE0] text-white"
                              : "bg-white border-[#E2E8F0] hover:bg-slate-50 text-[#314158]"
                          }`}
                        >
                          {btn.icon}
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {selectedNotification && (
            <div className="mt-8 pt-6 border-t border-[#F1F5F9] flex justify-end">
              <button
                onClick={() => handleToggleRead(selectedNotification.id)}
                className="border border-[#E2E8F0] hover:bg-slate-50 text-[#314158] font-['General_Sans',sans-serif] font-bold text-xs py-2.5 px-5 rounded-xl flex items-center gap-2 cursor-pointer transition-colors shadow-sm outline-none"
              >
                <FiCheck className="text-base" />
                <span>Mark as {selectedNotification.read ? "Unread" : "Read"}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notifications;