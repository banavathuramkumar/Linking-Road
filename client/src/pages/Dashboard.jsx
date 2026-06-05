import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  HiMenu,
  HiOutlineUserGroup,
  HiOutlineLightningBolt,
  HiOutlineChatAlt,
  HiOutlineTrendingUp,
  HiOutlineTrendingDown,
  HiOutlineSparkles
} from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [slowDownMode, setSlowDownMode] = useState(false);

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

  // Stats Data
  const stats = [
    {
      title: "Total Leads",
      value: "2,847",
      change: "+12.5%",
      isPositive: true,
      icon: HiOutlineUserGroup,
      iconBg: "bg-indigo-50/80 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400",
      glowColor: "group-hover:shadow-indigo-500/10"
    },
    {
      title: "Active Automations",
      value: "24",
      change: "+3",
      isPositive: true,
      icon: HiOutlineLightningBolt,
      iconBg: "bg-purple-50/80 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400",
      glowColor: "group-hover:shadow-purple-500/10"
    },
    {
      title: "Messages Sent",
      value: "15.2K",
      change: "+23.1%",
      isPositive: true,
      icon: HiOutlineChatAlt,
      iconBg: "bg-emerald-50/80 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
      glowColor: "group-hover:shadow-emerald-500/10"
    },
    {
      title: "Engagement Rate",
      value: "67%",
      change: "-2.3%",
      isPositive: false,
      icon: HiOutlineTrendingUp,
      iconBg: "bg-orange-50/80 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400",
      glowColor: "group-hover:shadow-orange-500/10"
    }
  ];

  // Chart Data matching high fidelity curve
  const chartData = [
    { day: "Mon", val: 40 },
    { day: "Tue", val: 52 },
    { day: "Wed", val: 58 },
    { day: "Thu", val: 68 },
    { day: "Fri", val: 78 },
    { day: "Sat", val: 62 },
    { day: "Sun", val: 48 }
  ];

  const chartWidth = 600;
  const chartHeight = 240;
  const paddingLeft = 45;
  const paddingRight = 20;
  const paddingTop = 25;
  const paddingBottom = 35;
  const maxY = 100; // Normalized scale for engagement/activity percentage

  const getCoordinates = (index, value) => {
    const x = paddingLeft + (index * (chartWidth - paddingLeft - paddingRight)) / (chartData.length - 1);
    const y = chartHeight - paddingBottom - (value * (chartHeight - paddingTop - paddingBottom)) / maxY;
    return { x, y };
  };

  // Build path strings for line and area under the curve
  let pathD = "";
  let areaD = "";
  chartData.forEach((point, index) => {
    const { x, y } = getCoordinates(index, point.val);
    if (index === 0) {
      pathD = `M ${x} ${y}`;
      areaD = `M ${x} ${y}`;
    } else {
      // Smooth out curve using Bezier approximations
      const prev = getCoordinates(index - 1, chartData[index - 1].val);
      const cpX1 = prev.x + (x - prev.x) / 2;
      const cpY1 = prev.y;
      const cpX2 = prev.x + (x - prev.x) / 2;
      const cpY2 = y;
      pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
      areaD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
    }
  });
  const startX = getCoordinates(0, 0).x;
  const endX = getCoordinates(chartData.length - 1, 0).x;
  const floorY = chartHeight - paddingBottom;
  areaD += ` L ${endX} ${floorY} L ${startX} ${floorY} Z`;

  // Recent Automations
  const automations = [
    {
      name: "Welcome DM Flow",
      status: "active",
      triggers: "1,247",
      conversion: "23.5%",
      statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200"
    },
    {
      name: "Lead Magnet Delivery",
      status: "active",
      triggers: "892",
      conversion: "31.2%",
      statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200"
    },
    {
      name: "Story Reply Automator",
      status: "paused",
      triggers: "456",
      conversion: "18.7%",
      statusColor: "bg-amber-50 text-amber-700 border border-amber-200"
    },
    {
      name: "Comment Engagement Bot",
      status: "active",
      triggers: "2,134",
      conversion: "45.3%",
      statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200"
    }
  ];

  const handleSlowDownToggle = () => {
    setSlowDownMode(!slowDownMode);
    toast.info(`Slow Down Mode ${!slowDownMode ? "enabled" : "disabled"}`, {
      icon: "⏳"
    });
  };

  return (
    <div 
      className="flex min-h-screen bg-[#FAF9FF] text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-900"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Sidebar Component */}
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      {/* Main Container */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-10 overflow-y-auto w-full max-w-[1600px] mx-auto pb-24">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm active:scale-95"
            >
              <HiMenu className="w-6 h-6 text-slate-700" />
            </button>
            <div>
              <h1 className="font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight font-['ClashDisplay']">
                Dashboard Overview
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                Welcome back! Here's your workspace performance statistics today.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`group bg-white border border-slate-100/90 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${stat.glowColor}`}
              >
                {/* Background Decor */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-slate-50/40 group-hover:scale-110 transition-transform duration-500" />

                {/* Top Right Trend */}
                <div className="absolute top-6 right-6 flex items-center gap-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    stat.isPositive 
                      ? "bg-emerald-50 text-emerald-600" 
                      : "bg-rose-50 text-rose-600"
                  }`}>
                    {stat.change}
                  </span>
                </div>

                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-2xl ${stat.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Values */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-slate-900 leading-none tracking-tight">
                    {stat.value}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400 mt-2 block uppercase tracking-wider">
                    {stat.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Middle Section: Chart + Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Performance Overview Chart Card */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-slate-900 font-['ClashDisplay']">
                  Performance Overview
                </h2>
                <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Live
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Lead generation engagement index and activity flow tracker.
              </p>
            </div>

            {/* SVG Chart Wrapper */}
            <div className="w-full relative h-[250px] overflow-hidden rounded-2xl bg-slate-50/50 p-2 sm:p-4 border border-slate-50">
              <svg className="w-full h-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="purpleArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.00" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((val) => {
                  const y = getCoordinates(0, val).y;
                  return (
                    <g key={val}>
                      <line
                        x1={paddingLeft}
                        y1={y}
                        x2={chartWidth - paddingRight}
                        y2={y}
                        stroke="#E2E8F0"
                        strokeWidth="0.8"
                        strokeDasharray="4,6"
                      />
                      <text
                        x={paddingLeft - 12}
                        y={y + 4}
                        textAnchor="end"
                        fill="#94A3B8"
                        fontSize="10"
                        fontWeight="600"
                      >
                        {val}%
                      </text>
                    </g>
                  );
                })}

                {/* Smooth Area Gradient */}
                <path d={areaD} fill="url(#purpleArea)" />

                {/* Stroke Line */}
                <path d={pathD} fill="none" stroke="#6366F1" strokeWidth="3.5" strokeLinecap="round" />

                {/* Data Points Dot markers */}
                {chartData.map((pt, idx) => {
                  const { x, y } = getCoordinates(idx, pt.val);
                  return (
                    <g key={idx} className="group cursor-pointer">
                      <circle
                        cx={x}
                        cy={y}
                        r="6"
                        fill="#6366F1"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        className="transition-all duration-300 hover:r-8 hover:fill-indigo-800"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill="#6366F1"
                        fillOpacity="0.1"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* X Labels */}
              <div className="absolute left-[48px] right-[20px] bottom-2.5 flex justify-between text-[11px] font-bold text-slate-400">
                {chartData.map((pt) => (
                  <span key={pt.day} className="w-10 text-center">
                    {pt.day}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="flex flex-col gap-6">
            {/* Queue Status */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-5">
                  Queue Activity Status
                </h3>

                {/* Processing DMs */}
                <div className="mb-5">
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-slate-600">Processing DMs</span>
                    <span className="text-slate-950">845 / 1,000</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: "84.5%" }} />
                  </div>
                </div>

                {/* API Rate Limit */}
                <div className="mb-6">
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-slate-600">API Rate Limit Usage</span>
                    <span className="text-slate-950">12%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "12%" }} />
                  </div>
                </div>
              </div>

              {/* Slow Down Switch */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Slow Down Mode</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Limits automation dispatch speed</p>
                </div>
                <button
                  onClick={handleSlowDownToggle}
                  className={`w-11 h-6 rounded-full p-1 transition-all duration-300 relative ${
                    slowDownMode ? "bg-indigo-600" : "bg-slate-200"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${
                      slowDownMode ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Pro Plan Box */}
            <div className="bg-[#EEF2FF] rounded-3xl p-6 flex flex-col justify-between h-[165px] border border-indigo-100 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-5 text-indigo-900 text-9xl font-black select-none pointer-events-none">PRO</div>
              <div>
                <div className="flex items-center gap-1.5 text-indigo-700 mb-2">
                  <HiOutlineLightningBolt className="w-4 h-4 fill-indigo-100" />
                  <span className="text-xs font-bold uppercase tracking-wider">Pro Plan Activated</span>
                </div>
                <p className="text-xs text-indigo-600/90 leading-relaxed font-semibold">
                  You have consumed 45% of your monthly interaction quota.
                </p>
              </div>

              {/* Manage Billing Action Button */}
              <button
                onClick={() => navigate("/billing")}
                className="w-full bg-white hover:bg-slate-50 active:scale-[0.99] transition-all py-3 rounded-xl text-xs font-bold text-indigo-600 shadow-sm cursor-pointer text-center"
              >
                Manage Billing
              </button>
            </div>
          </div>
        </div>

        {/* Recent Automations */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-['ClashDisplay']">
                Recent Active Automations
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                Your currently configured triggers and workflow responses.
              </p>
            </div>
            <button
              onClick={() => navigate("/automations")}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline transition-all cursor-pointer"
            >
              View All
            </button>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto w-full border border-slate-100 rounded-2xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Name</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 font-semibold">Triggers</th>
                  <th className="py-4 px-6 font-semibold">Conversion</th>
                  <th className="py-4 px-6 text-right font-semibold"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {automations.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/30 transition-colors group">
                    {/* Name */}
                    <td className="py-4 px-6 font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                      {row.name}
                    </td>

                    {/* Status badge */}
                    <td className="py-4 px-6">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>

                    {/* Triggers */}
                    <td className="py-4 px-6 text-slate-500 text-sm font-semibold">
                      {row.triggers}
                    </td>

                    {/* Conversion */}
                    <td className="py-4 px-6 text-emerald-600 text-sm font-black">
                      {row.conversion}
                    </td>

                    {/* Edit button */}
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => navigate("/automations")}
                        className="text-xs font-bold text-indigo-600 group-hover:text-indigo-800 group-hover:underline transition-all cursor-pointer"
                      >
                        Edit Flow
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => {
          navigate("/automations/builder");
          toast.success("Opening Workflow Builder...");
        }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-800 text-white flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer z-50"
        title="Create New Automation"
      >
        <HiOutlineSparkles className="w-6 h-6 text-white animate-pulse" />
      </button>
    </div>
  );
};

export default Dashboard;
