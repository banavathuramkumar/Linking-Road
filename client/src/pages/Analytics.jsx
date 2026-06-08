import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Analytics.css";
import Sidebar from "../components/Sidebar";
import { HiOutlineLightningBolt } from "react-icons/hi";

import {
  FiDownload,
  FiCalendar,
  FiMessageSquare,
  FiMail,
  FiMousePointer,
  FiCornerUpLeft,
  FiDollarSign,
  FiZap,
  FiBarChart2,
  FiFileText,
  FiMenu
} from "react-icons/fi";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid
} from "recharts";

const revenueData = [
  { name: "Mon", value: 1200 },
  { name: "Tue", value: 1900 },
  { name: "Wed", value: 1500 },
  { name: "Thu", value: 2200 },
  { name: "Fri", value: 2800 },
  { name: "Sat", value: 3500 },
  { name: "Sun", value: 3100 }
];

const growthData = [
  { name: "Mon", value: 1000 },
  { name: "Tue", value: 1700 },
  { name: "Wed", value: 1300 },
  { name: "Thu", value: 2000 },
  { name: "Fri", value: 2600 },
  { name: "Sat", value: 3300 },
  { name: "Sun", value: 2900 }
];

const triggerData = [
  { name: "Story Reply", value: 80 },
  { name: 'Keyword "GROW"', value: 45 },
  { name: "Post Comment", value: 25 },
  { name: "Live Video", value: 15 },
  { name: "Profile Mention", value: 8 }
];

const cards = [
  ["DMs Sent", "12,450", "72%", FiMessageSquare],
  ["Opens", "8,920", "56%", FiMail],
  ["Clicks", "4,100", "38%", FiMousePointer],
  ["Replies", "2,150", "21%", FiCornerUpLeft],
  ["Conversions", "840", "13%", FiDollarSign]
];

function Analytics() {
  const [activeGraph, setActiveGraph] = useState("Revenue");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const handleSimulateIssue = () => {
    toast.error("Diagnostic Check: Simulated API Rate Limit warning triggered!", {
      icon: "🚨"
    });
  };

  const handleDateRange = () => {
    toast.info("Showing analytics for the Last 7 Days (June 1 - June 7)", {
      icon: "📅"
    });
  };

  const handleExport = () => {
    toast.info("Preparing data export...");
    setTimeout(() => {
      const csvContent = "data:text/csv;charset=utf-8," 
        + "Metric,Value\n"
        + "DMs Sent,12450\n"
        + "Opens,8920\n"
        + "Clicks,4100\n"
        + "Replies,2150\n"
        + "Conversions,840";
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "analytics_report.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Analytics report downloaded successfully!");
    }, 800);
  };

  const handleApplyOptimizations = () => {
    toast.success("AI Insights optimizations applied successfully!", {
      icon: "⚡"
    });
  };


  const currentData = activeGraph === "Revenue" ? revenueData : growthData;

  const chartWidth = 600;
  const chartHeight = 240;
  const paddingLeft = 45;
  const paddingRight = 20;
  const paddingTop = 15;
  const paddingBottom = 45;
  const maxY = 3600;

  const getCoordinates = (index, value) => {
    const x = paddingLeft + (index * (chartWidth - paddingLeft - paddingRight)) / (currentData.length - 1);
    const y = chartHeight - paddingBottom - (value * (chartHeight - paddingTop - paddingBottom)) / maxY;
    return { x, y };
  };

  // Build path strings for line and area under the curve
  let pathD = "";
  let areaD = "";
  currentData.forEach((point, index) => {
    const { x, y } = getCoordinates(index, point.value);
    if (index === 0) {
      pathD = `M ${x} ${y}`;
      areaD = `M ${x} ${y}`;
    } else {
      // Smooth out curve using Bezier approximations
      const prev = getCoordinates(index - 1, currentData[index - 1].value);
      const cpX1 = prev.x + (x - prev.x) / 2;
      const cpY1 = prev.y;
      const cpX2 = prev.x + (x - prev.x) / 2;
      const cpY2 = y;
      pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
      areaD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
    }
  });
  const startX = getCoordinates(0, 0).x;
  const endX = getCoordinates(currentData.length - 1, 0).x;
  const floorY = chartHeight - paddingBottom;
  areaD += ` L ${endX} ${floorY} L ${startX} ${floorY} Z`;

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] overflow-x-hidden text-slate-800">
      {/* Sidebar Component */}
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      <div className="analytics">

        {/* HEADER */}
        <div className="analytics-header">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm active:scale-95 mr-2 cursor-pointer flex items-center justify-center"
            >
              <FiMenu className="w-5 h-5 text-slate-700" />
            </button>
            <div>
              <h1>Analytics Overview</h1>
              <p>Measure business impact and optimize your automation flows.</p>
            </div>
          </div>

          <div className="top-buttons">
            <button onClick={handleSimulateIssue} className="cursor-pointer">
              <FiFileText />
              Simulate Issue
            </button>
            <button onClick={handleDateRange} className="cursor-pointer">
              <FiCalendar />
              Last 7 Days
            </button>
            <button className="export cursor-pointer" onClick={handleExport}>
              <FiDownload />
              Export
            </button>
          </div>
        </div>

        {/* AI BOX */}
        <div className="ai-box">
          <div className="ai-left">
            <div className="ai-icon">
              <FiZap />
            </div>
            <div>
              <h3>
                LINKINGROAD AI Insights
                <span>NEW</span>
              </h3>
              <div className="ai-text">
                <p>
                  Emoji messages improved clicks <br />
                  by 24% this week.
                </p>
                <p>
                  "Story Reply" trigger performs <br />
                  best on weekends.
                </p>
              </div>
            </div>
          </div>

          <button onClick={handleApplyOptimizations} className="cursor-pointer">
            Apply Optimizations
          </button>
        </div>

        {/* CARDS */}
        <div className="stat-row">
          {cards.map((item) => {
            let Icon = item[3];
            return (
              <div className="stat-card" key={item[0]}>
                <div className="stat-icon">
                  <Icon size={18} />
                </div>
                <p>{item[0]}</p>
                <h2>{item[1]} <span className="percentage">({item[2]})</span></h2>
              </div>
            )
          })}
        </div>

        {/* GRAPH AREA */}
        <div className="graph-area">
          <div className="growth">
            <div className="growth-header">
              <div>
                <h2>Growth Trends</h2>
                <p>Revenue & Engagement over time</p>
              </div>
              <div className="chart-legend">
                <button
                  className={`legend-item ${activeGraph === "Revenue" ? "active" : "inactive"}`}
                  onClick={() => { setActiveGraph("Revenue"); setHoveredPoint(null); }}
                >
                  <span className="legend-dot revenue-dot"></span>
                  Revenue
                </button>
                <button
                  className={`legend-item ${activeGraph === "Growth" ? "active" : "inactive"}`}
                  onClick={() => { setActiveGraph("Growth"); setHoveredPoint(null); }}
                >
                  <span className="legend-dot growth-dot"></span>
                  Growth
                </button>
              </div>
            </div>

            <div className="chart relative w-full overflow-hidden p-1">
              <svg className="w-full h-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="revenueArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c084fc" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.00" />
                  </linearGradient>
                  <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5f35c0" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#5f35c0" stopOpacity="0.00" />
                  </linearGradient>
                </defs>

                {/* Horizontal Dotted Grid Lines */}
                {[900, 1800, 2700, 3600].map((val) => {
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
                {currentData.slice(1).map((point, idx) => {
                  const { x } = getCoordinates(idx + 1, 0);
                  return (
                    <line
                      key={point.name}
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
                {[0, 900, 1800, 2700, 3600].map((val) => {
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
                {currentData.map((pt, idx) => {
                  const { x } = getCoordinates(idx, 0);
                  return (
                    <line
                      key={`x-tick-${pt.name}`}
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
                {[0, 900, 1800, 2700, 3600].map((val) => {
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
                {currentData.map((pt, idx) => {
                  const { x } = getCoordinates(idx, 0);
                  return (
                    <text
                      key={`x-label-${pt.name}`}
                      x={x}
                      y={chartHeight - paddingBottom + 22}
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="11"
                      fontWeight="500"
                    >
                      {pt.name}
                    </text>
                  );
                })}

                {/* Smooth Area Gradient */}
                <motion.path
                  key={`area-${activeGraph}`}
                  d={areaD}
                  fill={activeGraph === "Revenue" ? "url(#revenueArea)" : "url(#growthArea)"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                />

                {/* Stroke Line */}
                <motion.path
                  key={`stroke-${activeGraph}`}
                  d={pathD}
                  fill="none"
                  stroke={activeGraph === "Revenue" ? "#c084fc" : "#5f35c0"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Vertical Cursor Line when hovering */}
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
                    fill={activeGraph === "Revenue" ? "#c084fc" : "#5f35c0"}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                )}

                {/* Invisible vertical hover zones for each day */}
                {currentData.map((pt, idx) => {
                  const { x, y } = getCoordinates(idx, pt.value);
                  const step = (chartWidth - paddingLeft - paddingRight) / (currentData.length - 1);
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
                    whiteSpace: "nowrap",
                    zIndex: 10
                  }}
                >
                  <p className="m-0 text-slate-800 font-medium">{hoveredPoint.name}</p>
                  <ul className="p-0 m-0 list-none">
                    <li className="flex items-center gap-1.5 py-1 font-medium" style={{ color: activeGraph === "Revenue" ? "#c084fc" : "#5f35c0" }}>
                      <span
                        className="inline-block w-2.5 h-2.5"
                        style={{ backgroundColor: activeGraph === "Revenue" ? "#c084fc" : "#5f35c0" }}
                      />
                      <span>value : {hoveredPoint.value}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="trigger">
            <h2>Trigger Performance</h2>
            <p>Conversions by entry point</p>
            <div className="chart">
              <ResponsiveContainer>
                <BarChart
                  data={triggerData}
                  layout="vertical"
                >
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={120}
                  />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#6d28d9"
                    radius={[0, 6, 6, 0]}
                    isAnimationActive={true}
                    animationDuration={1200}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-grid">
          {/* HEATMAP */}
          <div className="heatmap-card">
            <div className="box-head">
              <div>
                <h2>Engagement Heatmap</h2>
                <p>Best times to trigger automations</p>
              </div>
              <div className="heatmap-icon-container">
                <HiOutlineLightningBolt className="heatmap-icon" strokeWidth={1.5} />
              </div>
            </div>

            <div className="heatmap">
              <div className="days">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </div>

              <div>
                <div className="hours">
                  {["12a", "4a", "8a", "12p", "4p", "8p"].map((h) => (
                    <span key={h}>{h}</span>
                  ))}
                </div>

                <div className="heat-box">
                  {Array.from({ length: 42 }).map((_, i) => (
                    <div
                      key={i}
                      className={`heat h${i % 5}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="heat-label">
              <span>Low</span>
              <div></div>
              <div></div>
              <div></div>
              <span>High</span>
            </div>
          </div>

          {/* KEYWORDS */}
          <div className="keyword-card">
            <h2>Top Performing Keywords</h2>
            <p>Highest conversion triggers</p>

            <div className="keywords">
              {[
                ["#1", "LINK", "12.4%"],
                ["#2", "FREE", "9.8%"],
                ["#3", "GUIDE", "7.2%"],
                ["#4", "JOIN", "6.5%"],
                ["#5", "START", "4.1%"]
              ].map((item, index) => {
                const val = parseFloat(item[2]);
                const isAbove = val > 6.5;
                return (
                  <div className="key-row" key={item[1]}>
                    <span className={`rank-${index + 1}`}>
                      {item[0]}
                    </span>
                    <div>
                      <h4><b>"{item[1]}"</b></h4>
                      <p>Keyword Trigger</p>
                    </div>
                    <div className="rate">
                      <h2>{item[2]}</h2>
                      <small className={isAbove ? "rate-up" : "rate-down"}>
                        {isAbove ? "↗" : "↘"} Conv. Rate
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* COHORT */}
        <div className="cohort">
          <div className="cohort-icon">
            <FiBarChart2 size={24} />
          </div>
          <h3>Cohort Analysis</h3>
          <p>
            Advanced subscriber retention tracking is
            <br />
            currently processing. Your cohort data will appear
            <br />
            here once enough behavioral events are recorded.
          </p>
          <button>
            Learn about Cohort Models
          </button>
        </div>

      </div>
    </div>
  );
}

export default Analytics;
