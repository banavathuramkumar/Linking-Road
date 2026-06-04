import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiBell,
  FiClock,
  FiArchive,
  FiSettings,
  FiShield,
  FiUsers,
  FiAtSign,
  FiTrendingUp,
  FiAlertTriangle,
  FiPauseCircle,
  FiCreditCard,
  FiCheck,
  FiMonitor,
  FiMail,
  FiSmartphone,
  FiInbox,
  FiLayers,
  FiArrowLeft,
} from "react-icons/fi";

// Initial notification data with individual items to support Smart Digest expanding/grouping
const initialNotificationsData = [
  {
    id: 1,
    title: "Suspicious Login Attempt",
    description: "Unrecognized device signed in from Moscow, RU.",
    time: "Just now",
    type: "security",
    unread: true,
    archived: false,
    icon: <FiShield />,
    color: "bg-[#FEE2E2] text-red-500",
  },
  // Lead notifications (grouped when Smart Digest is active)
  {
    id: 2,
    title: "New Lead: Sarah Jenkins",
    description: "sarah.jenkins@acmecorp.com signed up recently.",
    time: "5m ago",
    type: "lead",
    unread: true,
    archived: false,
    icon: <FiUsers />,
    color: "bg-[#D1FAE5] text-[#059669]",
  },
  {
    id: 8,
    title: "New Lead: Michael Chen",
    description: "michael.b@flowtech.dev signed up recently.",
    time: "12m ago",
    type: "lead",
    unread: true,
    archived: false,
    icon: <FiUsers />,
    color: "bg-[#D1FAE5] text-[#059669]",
  },
  {
    id: 9,
    title: "New Lead: Emma Watson",
    description: "emma@designco.co signed up recently.",
    time: "45m ago",
    type: "lead",
    unread: true,
    archived: false,
    icon: <FiUsers />,
    color: "bg-[#D1FAE5] text-[#059669]",
  },
  {
    id: 10,
    title: "New Lead: David Kim",
    description: "david.k@startup.net signed up recently.",
    time: "1h ago",
    type: "lead",
    unread: true,
    archived: false,
    icon: <FiUsers />,
    color: "bg-[#D1FAE5] text-[#059669]",
  },
  {
    id: 3,
    title: "Team Mention",
    description: '@jessica tagged you in "Welcome Flow Redesign".',
    time: "1h ago",
    type: "team",
    unread: true,
    archived: false,
    icon: <FiAtSign />,
    color: "bg-[#E0E7FF] text-[#4F46E5]",
  },
  {
    id: 4,
    title: "Viral Post Detected",
    description: "Your recent Instagram Reel is tracking 400% above average engagement.",
    time: "2h ago",
    type: "growth",
    unread: false,
    archived: false,
    icon: <FiTrendingUp />,
    color: "bg-[#F3E8FF] text-[#7C3AED]",
  },
  {
    id: 5,
    title: "API Rate Limit Warning",
    description: "Shopify integration is at 90% of its hourly quota.",
    time: "3h ago",
    type: "warning",
    unread: false,
    archived: false,
    icon: <FiAlertTriangle />,
    color: "bg-[#FEF3C7] text-[#D97706]",
  },
  {
    id: 6,
    title: "Automation Paused",
    description: '"Abandoned Cart Sequence" paused due to 5+ consecutive failures.',
    time: "Yesterday",
    type: "automation",
    unread: false,
    archived: false,
    icon: <FiPauseCircle />,
    color: "bg-[#E2E8F0] text-[#334155]",
  },
  {
    id: 7,
    title: "Payment Issue",
    description: "Your primary card ending in 4242 failed to charge.",
    time: "2 days ago",
    type: "billing",
    unread: false,
    archived: false,
    icon: <FiCreditCard />,
    color: "bg-[#FCE7F3] text-[#E11D48]",
  },
];

const Notifications = () => {
  const navigate = useNavigate();

  // Load custom premium Google Font dynamically
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [notifications, setNotifications] = useState(initialNotificationsData);
  const [smartDigest, setSmartDigest] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(1);
  const [showPreview, setShowPreview] = useState(false); // Mobile view control

  // Smart digest processing: groups individual leads into a single notification card when active
  const processedNotifications = useMemo(() => {
    if (!smartDigest) return notifications;

    const leadAlerts = notifications.filter((n) => n.type === "lead" && !n.archived);
    const nonLeadAlerts = notifications.filter((n) => n.type !== "lead");

    if (leadAlerts.length <= 1) return notifications;

    // Compile grouped lead card
    const unreadLeadsCount = leadAlerts.filter((n) => n.unread).length;
    const hasUnread = leadAlerts.some((n) => n.unread);
    const firstLeadEmail = leadAlerts[0].description.split(" ")[0];

    const groupedLeads = {
      id: "grouped-leads",
      title: `${leadAlerts.length} New Leads Captured`,
      description: `${firstLeadEmail} and ${leadAlerts.length - 1} others signed up recently.`,
      time: leadAlerts[0].time, // Latest lead time
      type: "lead",
      unread: hasUnread,
      archived: false,
      icon: <FiUsers />,
      color: "bg-[#D1FAE5] text-[#059669]",
      isGrouped: true,
      count: leadAlerts.length,
      groupedIds: leadAlerts.map((n) => n.id),
    };

    // Reconstruct list keeping original order position of first lead item
    const firstLeadIdx = notifications.findIndex((n) => n.type === "lead");
    const result = [];
    let leadInserted = false;

    notifications.forEach((n) => {
      if (n.type === "lead") {
        if (!leadInserted) {
          result.push(groupedLeads);
          leadInserted = true;
        }
      } else {
        result.push(n);
      }
    });

    return result;
  }, [notifications, smartDigest]);

  // Handle filtering
  const filteredNotifications = useMemo(() => {
    return processedNotifications.filter((item) => {
      if (activeFilter === "archive") {
        return item.archived;
      } else if (activeFilter === "unread") {
        return !item.archived && item.unread;
      } else {
        return !item.archived;
      }
    });
  }, [processedNotifications, activeFilter]);

  // Selected notification resolver
  const selectedNotification = useMemo(() => {
    if (selectedId === "grouped-leads") {
      return processedNotifications.find((n) => n.id === "grouped-leads");
    }
    return notifications.find((n) => n.id === selectedId);
  }, [selectedId, processedNotifications, notifications]);

  // Ensure an item remains selected when active lists change
  useEffect(() => {
    const isSelectedInList = filteredNotifications.some((n) => n.id === selectedId);
    if (!isSelectedInList && filteredNotifications.length > 0) {
      setSelectedId(filteredNotifications[0].id);
    }
  }, [filteredNotifications, selectedId]);

  // Mark all active notifications as read
  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  // Toggle single notification read/unread
  const toggleReadStatus = (id) => {
    setNotifications((prev) =>
      prev.map((item) => {
        if (id === "grouped-leads" && item.type === "lead") {
          return { ...item, unread: false }; // Mark all leads read
        }
        if (item.id === id) {
          return { ...item, unread: !item.unread };
        }
        return item;
      })
    );
  };

  // Archive / Unarchive single notification
  const toggleArchive = (id) => {
    setNotifications((prev) =>
      prev.map((item) => {
        if (id === "grouped-leads" && item.type === "lead") {
          return { ...item, archived: !item.archived };
        }
        if (item.id === id) {
          return { ...item, archived: !item.archived };
        }
        return item;
      })
    );
  };

  // Renders custom detailed components in the preview pane for high aesthetics
  const renderPreviewDetails = (item) => {
    if (!item) return null;

    switch (item.type) {
      case "security":
        return (
          <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl p-5 mt-4">
            <h4 className="text-[#991B1B] font-bold text-sm">Action Required</h4>
            <p className="text-[#B91C1C] text-xs mt-2 leading-relaxed">
              If this wasn't you, please secure your account immediately by changing your password and terminating active sessions.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors">
                Review Sessions
              </button>
              <button className="px-4 py-2 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569] text-xs font-semibold rounded-lg transition-colors">
                It was me
              </button>
            </div>
          </div>
        );
      case "lead":
        return (
          <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-5 mt-4">
            <h4 className="text-[#15803D] font-bold text-sm">Lead Details</h4>
            <div className="space-y-3 mt-3">
              <div className="flex justify-between items-center border-b border-[#DCFCE7]/60 pb-2 text-xs">
                <span className="font-semibold text-slate-700">sarah.jenkins@acmecorp.com</span>
                <span className="bg-[#DCFCE7] text-[#15803D] px-2 py-0.5 rounded text-[10px] font-bold">Enterprise</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#DCFCE7]/60 pb-2 text-xs">
                <span className="font-semibold text-slate-700">michael.b@flowtech.dev</span>
                <span className="bg-[#DCFCE7] text-[#15803D] px-2 py-0.5 rounded text-[10px] font-bold">Enterprise</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#DCFCE7]/60 pb-2 text-xs">
                <span className="font-semibold text-slate-700">d.smith@vertex.io</span>
                <span className="bg-[#E0F2FE] text-[#0369A1] px-2 py-0.5 rounded text-[10px] font-bold">Pro</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-700">alexa.w@creative.co</span>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold">Free</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-[#059669] hover:bg-[#047857] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors">
                Export CSV
              </button>
              <button className="px-4 py-2 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569] text-xs font-semibold rounded-lg transition-colors">
                View CRM
              </button>
            </div>
          </div>
        );
      case "team":
        return (
          <div className="bg-[#EEF2FF] border border-[#E0E7FF] rounded-xl p-5 mt-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#615FFF] text-white flex items-center justify-center font-bold text-xs shrink-0">
                JD
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-800 text-sm">Jessica Dubois</span>
                  <span className="text-[10px] text-slate-400">1h ago</span>
                </div>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  "Hey! I finished the wireframes for the <strong className="text-slate-800">Welcome Flow Redesign</strong>. Can you check the transition animations and verify if the API integration looks clean? Feel free to leave comments directly in the Figma file."
                </p>
              </div>
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Write a quick reply..."
                className="w-full text-xs p-2.5 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-[#615FFF] bg-white resize-none h-16"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button className="px-3 py-1.5 bg-[#615FFF] hover:bg-[#4F46E5] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors">
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        );
      case "growth":
        return (
          <div className="bg-[#F9F5FF] border border-[#F3E8FF] rounded-xl p-5 mt-4">
            <h4 className="text-[#6B21A8] font-bold text-sm">Reel Performance Analytics</h4>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-white p-2.5 rounded-lg border border-[#F3E8FF] text-center">
                <span className="text-slate-400 text-[9px] block uppercase tracking-wider">Views</span>
                <span className="text-[#7C3AED] font-bold text-base">142.8K</span>
                <span className="text-[#059669] text-[9px] block font-semibold">+412% vs. avg</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#F3E8FF] text-center">
                <span className="text-slate-400 text-[9px] block uppercase tracking-wider">Shares</span>
                <span className="text-[#7C3AED] font-bold text-base">3,412</span>
                <span className="text-[#059669] text-[9px] block font-semibold">+520% vs. avg</span>
              </div>
            </div>
            {/* Visual graph chart representation */}
            <div className="bg-white p-3 rounded-lg border border-[#F3E8FF] mt-3">
              <div className="flex justify-between text-[10px] text-slate-400 mb-2">
                <span>Engagement Index</span>
                <span className="font-semibold text-[#7C3AED]">Excellent</span>
              </div>
              <div className="flex items-end justify-between h-14 gap-1.5 pt-2 px-1">
                <div className="w-full bg-[#F3E8FF] rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-[#F3E8FF] rounded-t-sm h-[45%]"></div>
                <div className="w-full bg-[#F3E8FF] rounded-t-sm h-[35%]"></div>
                <div className="w-full bg-[#F3E8FF] rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-[#7C3AED] rounded-t-sm h-[95%] relative">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-[#7C3AED]">Now</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-[#7C3AED] hover:bg-[#6B21A8] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors">
                View Insights
              </button>
              <button className="px-4 py-2 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569] text-xs font-semibold rounded-lg transition-colors">
                Share Report
              </button>
            </div>
          </div>
        );
      case "warning":
        return (
          <div className="bg-[#FFFBEB] border border-[#FEF3C7] rounded-xl p-5 mt-4">
            <h4 className="text-[#92400E] font-bold text-sm">Quota Alert</h4>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Hourly Request Limit</span>
                <span className="font-semibold text-[#D97706]">9,000 / 10,000 reqs</span>
              </div>
              <div className="w-full bg-[#FEF3C7]/60 rounded-full h-2 overflow-hidden">
                <div className="bg-[#D97706] h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">Quota resets in 14 minutes.</span>
            </div>
            <p className="text-slate-600 text-xs mt-3 leading-relaxed">
              Your Shopify integration is close to hitting its maximum hourly request limit. Upgrading to a premium tier will double your limits instantly.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors">
                Upgrade Limits
              </button>
              <button className="px-4 py-2 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569] text-xs font-semibold rounded-lg transition-colors">
                View API Logs
              </button>
            </div>
          </div>
        );
      case "automation":
        return (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-4">
            <h4 className="text-slate-800 font-bold text-sm">Automation Fault Log</h4>
            <div className="bg-slate-900 text-slate-200 p-3 rounded-lg font-mono text-[10px] mt-2 space-y-1 overflow-x-auto">
              <p className="text-red-400">[ERROR] 13:42:01 - Cart Sequence Hook timed out (504)</p>
              <p className="text-slate-400">[INFO]  13:42:01 - Retrying webhook endpoint in 5000ms...</p>
              <p className="text-red-400">[ERROR] 13:42:06 - Max retry threshold (5) exceeded. Pausing flow.</p>
            </div>
            <p className="text-slate-600 text-xs mt-3 leading-relaxed">
              Workflow <strong>"Abandoned Cart Sequence"</strong> has been automatically paused to prevent server overhead.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors">
                Resume Workflow
              </button>
              <button className="px-4 py-2 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569] text-xs font-semibold rounded-lg transition-colors">
                Edit Webhook
              </button>
            </div>
          </div>
        );
      case "billing":
        return (
          <div className="bg-[#FFF5F5] border border-[#FCE7F3] rounded-xl p-5 mt-4">
            <h4 className="text-[#991B1B] font-bold text-sm">Payment Failure Details</h4>
            {/* Credit Card mockup */}
            <div className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white p-4 rounded-xl shadow-md mt-3 relative overflow-hidden h-28 flex flex-col justify-between">
              <div className="absolute right-0 top-0 opacity-15 text-7xl font-bold -mr-6 -mt-4">VISA</div>
              <div className="flex justify-between items-start">
                <span className="text-[9px] tracking-widest uppercase font-semibold">Primary Business Card</span>
                <div className="w-8 h-5.5 bg-yellow-400/80 rounded-md"></div>
              </div>
              <div>
                <span className="text-xs tracking-widest block font-mono">••••  ••••  ••••  4242</span>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[8px] text-pink-100 font-medium">EXP: 05/26</span>
                  <span className="text-[9px] font-bold bg-red-500/80 px-1.5 py-0.5 rounded">DECLINED</span>
                </div>
              </div>
            </div>
            <p className="text-slate-600 text-xs mt-3 leading-relaxed">
              Your subscription renewal for the Pro Plan failed because the payment was declined by the bank. We will retry charging this card automatically in 2 days.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors">
                Update Card
              </button>
              <button className="px-4 py-2 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569] text-xs font-semibold rounded-lg transition-colors">
                Retry Payment
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col h-screen overflow-hidden bg-white select-none text-slate-800"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* HEADER / TOP BAR */}
      <header className="h-[72px] border-b border-slate-100 flex items-center justify-between px-6 shrink-0 bg-white z-10">
        {/* LOGO AND BREADCRUMB */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img onClick={()=>{ navigate("/dashboard")
            }} src="/logo.png" alt="Logo" className="h-10" />
          </div>

          <span className="text-slate-200 text-lg">/</span>

          <div className="flex items-center gap-2 text-slate-400">
            <FiBell className="w-4.5 h-4.5 text-slate-400" />
            <span className="text-sm font-semibold text-slate-700">Inbox</span>
          </div>
        </div>

        {/* SETTINGS NAVIGATE BUTTON */}
        <button
          onClick={() => navigate("/settings")}
          className="w-10 h-10 rounded-full border border-slate-200/80 flex items-center justify-center hover:bg-[#F8FAFC] text-slate-400 hover:text-slate-700 transition-all shadow-sm focus:outline-none"
          title="Settings"
        >
          <FiSettings className="w-5 h-5" />
        </button>
      </header>

      {/* THREE COLUMN GRID */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* COLUMN 1: LEFT SIDEBAR */}
        <aside className="hidden md:flex flex-col justify-between w-[260px] bg-[#F8FAFC] border-r border-slate-100 p-6 shrink-0">
          <div className="space-y-2">
            
            {/* Filter: All Alerts */}
            <button
              onClick={() => setActiveFilter("all")}
              className={`w-full h-[48px] rounded-xl flex items-center justify-between px-4 transition-all duration-200 outline-none ${
                activeFilter === "all"
                  ? "bg-white shadow-sm border border-slate-200/80 text-[#615FFF] font-semibold"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <FiInbox className="w-5 h-5" />
                <span className="text-sm">All Alerts</span>
              </div>
              <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all duration-200 ${
                activeFilter === "all" ? "bg-[#EEF2FF] text-[#615FFF]" : "bg-slate-200/60 text-slate-600"
              }`}>
                {notifications.filter((n) => !n.archived).length}
              </span>
            </button>

            {/* Filter: Unread */}
            <button
              onClick={() => setActiveFilter("unread")}
              className={`w-full h-[48px] rounded-xl flex items-center justify-between px-4 transition-all duration-200 outline-none ${
                activeFilter === "unread"
                  ? "bg-white shadow-sm border border-slate-200/80 text-[#615FFF] font-semibold"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <FiClock className="w-5 h-5" />
                <span className="text-sm">Unread</span>
              </div>
              <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all duration-200 ${
                activeFilter === "unread" ? "bg-[#EEF2FF] text-[#615FFF]" : "bg-slate-200/60 text-slate-600"
              }`}>
                {notifications.filter((n) => !n.archived && n.unread).length}
              </span>
            </button>

            {/* Filter: Archive */}
            <button
              onClick={() => setActiveFilter("archive")}
              className={`w-full h-[48px] rounded-xl flex items-center justify-between px-4 transition-all duration-200 outline-none ${
                activeFilter === "archive"
                  ? "bg-white shadow-sm border border-slate-200/80 text-[#615FFF] font-semibold"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <FiArchive className="w-5 h-5" />
                <span className="text-sm">Archive</span>
              </div>
              <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all duration-200 ${
                activeFilter === "archive" ? "bg-[#EEF2FF] text-[#615FFF]" : "bg-slate-200/60 text-slate-600"
              }`}>
                {notifications.filter((n) => n.archived).length}
              </span>
            </button>
          </div>

          {/* Smart Digest Card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <FiLayers className="w-5 h-5 text-[#615FFF]" />
              <h3 className="font-bold text-slate-800 text-sm">Smart Digest</h3>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              Group similar repetitive alerts to prevent notification fatigue.
            </p>
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-50">
              <span className="text-xs font-semibold text-slate-500">Active</span>
              <button
                onClick={() => setSmartDigest(!smartDigest)}
                className={`w-11 h-6 rounded-full relative transition-all duration-200 outline-none ${
                  smartDigest ? "bg-[#615FFF]" : "bg-slate-200"
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 shadow-sm ${
                    smartDigest ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </aside>

        {/* COLUMN 2: MIDDLE INBOX LIST */}
        <section className={`w-full lg:w-[400px] border-r border-slate-100 flex flex-col bg-white shrink-0 ${
          showPreview ? "hidden lg:flex" : "flex"
        }`}>
          {/* List Header */}
          <div className="h-[72px] px-6 flex items-center justify-between border-b border-slate-100 shrink-0">
            <h2 className="text-xl font-extrabold text-slate-800">Inbox</h2>
            <button
              onClick={markAllRead}
              className="text-[#615FFF] hover:text-[#4F46E5] text-xs font-bold flex items-center gap-1 transition-colors outline-none"
            >
              <FiCheck className="w-4 h-4" />
              Mark all read
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
            {filteredNotifications.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => {
                  setSelectedId(item.id);
                  setShowPreview(true);
                }}
                className={`cursor-pointer rounded-2xl p-4 transition-all duration-150 border ${
                  selectedId === item.id
                    ? "bg-[#EEF2FF] border-[#615FFF]/20 shadow-sm"
                    : "bg-white hover:bg-slate-50/80 border-slate-100 hover:border-slate-200"
                }`}
              >
                <div className="flex gap-3 items-start">
                  {/* Unread dot spacer column */}
                  <div className="w-2.5 pt-3.5 flex justify-center shrink-0">
                    {item.unread && (
                      <div className="w-2 h-2 rounded-full bg-[#615FFF]" />
                    )}
                  </div>

                  {/* Icon Container with absolute leads badge */}
                  <div className="relative shrink-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color} font-semibold text-lg`}>
                      {item.icon}
                    </div>
                    {item.isGrouped && item.count && (
                      <div className="absolute -bottom-1 -right-1 w-[18px] h-[18px] bg-[#3B82F6] text-white text-[9px] rounded-full flex items-center justify-center border border-white font-black shadow-sm">
                        {item.count}
                      </div>
                    )}
                  </div>

                  {/* Descriptions */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-slate-800 text-sm truncate">
                        {item.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-semibold whitespace-nowrap pt-0.5">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredNotifications.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                <FiInbox className="w-10 h-10 mb-2 stroke-1 text-slate-300" />
                <span className="text-xs font-semibold">No notifications here</span>
              </div>
            )}
          </div>
        </section>

        {/* COLUMN 3: RIGHT PREVIEW PANEL */}
        <main className={`flex-1 bg-[#F8FAFC] p-6 md:p-8 overflow-y-auto ${
          showPreview ? "flex flex-col" : "hidden lg:flex flex-col"
        }`}>
          {/* Mobile responsive back button */}
          <button
            onClick={() => setShowPreview(false)}
            className="lg:hidden mb-5 flex items-center gap-2 text-slate-500 hover:text-slate-800 text-xs font-bold transition-colors outline-none"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Inbox
          </button>

          {selectedNotification ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNotification.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Preview Header */}
                  <div className="flex items-center gap-4">
                    {/* Icon container */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${selectedNotification.color} text-2xl font-semibold shadow-sm shrink-0`}>
                      {selectedNotification.icon}
                    </div>

                    {/* Meta info */}
                    <div>
                      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight leading-none">
                        {selectedNotification.title}
                      </h1>
                      <div className="flex items-center gap-2 mt-2.5 text-xs text-slate-400 font-semibold">
                        <span>{selectedNotification.time}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <FiMonitor className="w-3.5 h-3.5" title="Web dashboard" />
                          <FiMail className="w-3.5 h-3.5" title="Email summary" />
                          <FiSmartphone className="w-3.5 h-3.5" title="Push alert" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Preview Container Card */}
                  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 space-y-4">
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                      {selectedNotification.description}
                    </p>

                    {/* Custom detail sub-card based on active selection */}
                    {renderPreviewDetails(selectedNotification)}
                  </div>
                </div>

                {/* Bottom Actions Row */}
                <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-slate-200/40 shrink-0">
                  {/* Archive Toggle Button */}
                  <button
                    onClick={() => toggleArchive(selectedNotification.id)}
                    className="px-4.5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-800 font-bold text-xs rounded-xl flex items-center gap-2 transition-all shadow-sm focus:outline-none"
                  >
                    <FiArchive className="w-4 h-4 text-slate-400" />
                    {selectedNotification.archived ? "Unarchive" : "Archive Alert"}
                  </button>

                  {/* Read State Toggle Button */}
                  <button
                    onClick={() => toggleReadStatus(selectedNotification.id)}
                    className="px-4.5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-800 font-bold text-xs rounded-xl flex items-center gap-2 transition-all shadow-sm focus:outline-none"
                  >
                    <FiCheck className="w-4 h-4 text-[#615FFF]" />
                    {selectedNotification.unread ? "Mark as Read" : "Mark as Unread"}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-300">
              <FiBell className="w-12 h-12 mb-3 stroke-1" />
              <p className="text-xs font-semibold">Select an alert to view logs</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Notifications;