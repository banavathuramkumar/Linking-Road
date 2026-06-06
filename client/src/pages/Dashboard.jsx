import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  const [hoveredPoint, setHoveredPoint] = useState(null);

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
  const paddingTop = 15;
  const paddingBottom = 45;
  const maxY = 600; // Normalized scale for engagement/activity percentage

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
      className="flex min-h-screen bg-[#FAF9FF] dark:bg-[#090D16] text-slate-800 dark:text-slate-100 antialiased selection:bg-indigo-100 selection:text-indigo-900"
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
              className="lg:hidden p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all shadow-sm active:scale-95"
            >
              <HiMenu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>
            <div>
              <h1 className="font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight font-['ClashDisplay']">
                Dashboard Overview
              </h1>
              <p className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm mt-1 font-medium">
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
                className={`group bg-white dark:bg-[#0F172A] border border-slate-100/90 dark:border-slate-800/80 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${stat.glowColor}`}
              >
                {/* Background Decor */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-slate-50/40 dark:bg-slate-850/10 group-hover:scale-110 transition-transform duration-500" />

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
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">
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
          <div className="lg:col-span-2 bg-white dark:bg-[#0F172A] border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white font-['ClashDisplay']">
                  Performance Overview
                </h2>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Lead generation and message activity
              </p>
            </div>

            {/* SVG Chart Wrapper */}
            <div className="w-full relative h-[250px] overflow-hidden rounded-2xl bg-slate-50/50 dark:bg-slate-950/20 p-2 sm:p-4 border border-slate-50 dark:border-slate-800/80">
              <svg className="w-full h-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="purpleArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.00" />
                  </linearGradient>
                </defs>

                {/* Horizontal Dotted Grid Lines */}
                {[150, 300, 450, 600].map((val) => {
                  const { y } = getCoordinates(0, val);
                  return (
                    <line
                      key={val}
                      x1={paddingLeft}
                      y1={y}
                      x2={chartWidth - paddingRight}
                      y2={y}
                      stroke="#F1F5F9"
                      strokeWidth="1"
                      strokeDasharray="2,4"
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* Vertical Dotted Grid Lines */}
                {chartData.slice(1).map((point, idx) => {
                  const { x } = getCoordinates(idx + 1, 0);
                  return (
                    <line
                      key={point.day}
                      x1={x}
                      y1={paddingTop}
                      x2={x}
                      y2={chartHeight - paddingBottom}
                      stroke="#F1F5F9"
                      strokeWidth="1"
                      strokeDasharray="2,4"
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* Solid Y Axis Line */}
                <line
                  x1={paddingLeft}
                  y1={paddingTop}
                  x2={paddingLeft}
                  y2={chartHeight - paddingBottom}
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                />

                {/* Solid X Axis Line */}
                <line
                  x1={paddingLeft}
                  y1={chartHeight - paddingBottom}
                  x2={chartWidth - paddingRight}
                  y2={chartHeight - paddingBottom}
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                />

                {/* Y Axis Ticks */}
                {[0, 150, 300, 450, 600].map((val) => {
                  const { y } = getCoordinates(0, val);
                  return (
                    <line
                      key={`y-tick-${val}`}
                      x1={paddingLeft - 6}
                      y1={y}
                      x2={paddingLeft}
                      y2={y}
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                    />
                  );
                })}

                {/* X Axis Ticks */}
                {chartData.map((pt, idx) => {
                  const { x } = getCoordinates(idx, 0);
                  return (
                    <line
                      key={`x-tick-${pt.day}`}
                      x1={x}
                      y1={chartHeight - paddingBottom}
                      x2={x}
                      y2={chartHeight - paddingBottom + 6}
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                    />
                  );
                })}

                {/* Y Axis Labels */}
                {[0, 150, 300, 450, 600].map((val) => {
                  const { y } = getCoordinates(0, val);
                  return (
                    <text
                      key={`y-label-${val}`}
                      x={paddingLeft - 12}
                      y={y + 4}
                      textAnchor="end"
                      fill="#94A3B8"
                      fontSize="11"
                      fontWeight="500"
                    >
                      {val}
                    </text>
                  );
                })}

                {/* X Axis Labels */}
                {chartData.map((pt, idx) => {
                  const { x } = getCoordinates(idx, 0);
                  return (
                    <text
                      key={`x-label-${pt.day}`}
                      x={x}
                      y={chartHeight - paddingBottom + 22}
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="11"
                      fontWeight="500"
                    >
                      {pt.day}
                    </text>
                  );
                })}

                {/* Smooth Area Gradient */}
                <motion.path
                  d={areaD}
                  fill="url(#purpleArea)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                />

                {/* Stroke Line */}
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Vertical Dotted Cursor Line when hovering */}
                {hoveredPoint && (
                  <line
                    x1={hoveredPoint.x}
                    y1={paddingTop}
                    x2={hoveredPoint.x}
                    y2={chartHeight - paddingBottom}
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                )}

                {/* Active hover dot marker */}
                {hoveredPoint && (
                  <circle
                    cx={hoveredPoint.x}
                    cy={hoveredPoint.y}
                    r="5"
                    fill="#8B5CF6"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                )}

                {/* Invisible vertical hover zones for each day */}
                {chartData.map((pt, idx) => {
                  const { x, y } = getCoordinates(idx, pt.val);
                  const step = (chartWidth - paddingLeft - paddingRight) / (chartData.length - 1);
                  return (
                    <rect
                      key={`hover-zone-${idx}`}
                      x={x - step / 2}
                      y={paddingTop}
                      width={step}
                      height={chartHeight - paddingTop - paddingBottom}
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint({ ...pt, x, y, index: idx })}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                  );
                })}
              </svg>

              {/* Tooltip Overlay */}
              {hoveredPoint && (
                <div
                  className="absolute bg-white border border-[#ccc] text-[14px] p-2.5 pointer-events-none transition-all duration-75 text-left font-sans"
                  style={{
                    left: `${(hoveredPoint.x / chartWidth) * 100}%`,
                    top: `${(hoveredPoint.y / chartHeight) * 100}%`,
                    transform: hoveredPoint.index > 3 ? "translate(-112%, -50%)" : "translate(12px, -50%)",
                    whiteSpace: "nowrap"
                  }}
                >
                  <p className="m-0 text-slate-800 font-medium">{hoveredPoint.day}</p>
                  <ul className="p-0 m-0 list-none">
                    <li className="flex items-center gap-1.5 py-1 text-[#8B5CF6] font-medium">
                      <span 
                        className="inline-block w-2.5 h-2.5" 
                        style={{ backgroundColor: "#8B5CF6" }}
                      />
                      <span>value : {hoveredPoint.val}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="flex flex-col gap-6">
            {/* Queue Status */}
            <div className="bg-white dark:bg-[#0F172A] border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Queue Status
                </h2>

                {/* Processing DMs */}
                <div className="mb-5">
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-slate-600 dark:text-slate-400">Processing DMs</span>
                    <span className="text-slate-950 dark:text-slate-200">845 / 1,000</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "84.5%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* API Rate Limit */}
                <div className="mb-6">
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-slate-600 dark:text-slate-400">API Rate Limit Usage</span>
                    <span className="text-slate-950 dark:text-slate-200">12%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-emerald-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "12%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Slow Down Switch */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Slow Down Mode</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Limits automation dispatch speed</p>
                </div>
                <button
                  onClick={handleSlowDownToggle}
                  className={`w-11 h-6 rounded-full p-1 transition-all duration-300 relative ${
                    slowDownMode ? "bg-purple-600" : "bg-slate-200"
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
              <div>
                <div className="flex items-center gap-1.5 text-indigo-700 mb-2 font-semibold">
                  <HiOutlineLightningBolt className="w-5 h-5 text-purple-600 fill-purple-100" />
                  <span className="text-sm font-bold text-indigo-900">Pro Plan Active</span>
                </div>
                <p className="text-xs text-indigo-700 leading-relaxed font-semibold">
                  You have used 45% of your monthly interaction quota.
                </p>
              </div>

              {/* Manage Billing Action Button */}
              <button
                onClick={() => navigate("/billing")}
                className="w-full bg-white hover:bg-indigo-50/50 active:scale-[0.99] transition-all py-3 rounded-2xl text-xs font-bold text-indigo-700 shadow-sm border border-indigo-100/50 cursor-pointer text-center"
              >
                Manage Billing
              </button>
            </div>
          </div>
        </div>

        {/* Recent Automations */}
        <div className="bg-white dark:bg-[#0F172A] border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-['ClashDisplay']">
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
          <div className="overflow-x-auto w-full border border-slate-100 dark:border-slate-800/85 rounded-2xl bg-white dark:bg-[#0F172A] shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800/85 bg-slate-50/50 dark:bg-slate-950/20 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Name</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 font-semibold">Triggers</th>
                  <th className="py-4 px-6 font-semibold">Conversion</th>
                  <th className="py-4 px-6 text-right font-semibold"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {automations.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/30 dark:hover:bg-[#1E293B]/30 border-b border-slate-100/50 dark:border-slate-800/50 transition-colors group">
                    {/* Name */}
                    <td className="py-4 px-6 font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-indigo-600 transition-colors">
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
