import { useState } from "react";
import "./Analytics.css";
import Sidebar from "../components/Sidebar";

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

const revenueData=[
  {name:"Mon",value:1200},
  {name:"Tue",value:1900},
  {name:"Wed",value:1500},
  {name:"Thu",value:2200},
  {name:"Fri",value:2800},
  {name:"Sat",value:3500},
  {name:"Sun",value:3100}
];

const growthData=[
  {name:"Mon",value:1000},
  {name:"Tue",value:1700},
  {name:"Wed",value:1300},
  {name:"Thu",value:2000},
  {name:"Fri",value:2600},
  {name:"Sat",value:3300},
  {name:"Sun",value:2900}
];

const triggerData=[
  {name:"Story Reply",value:80},
  {name:'Keyword "GROW"',value:45},
  {name:"Post Comment",value:25},
  {name:"Live Video",value:15},
  {name:"Profile Mention",value:8}
];

const cards=[
  ["DMs Sent","12,450","72%",FiMessageSquare],
  ["Opens","8,920","56%",FiMail],
  ["Clicks","4,100","38%",FiMousePointer],
  ["Replies","2,150","21%",FiCornerUpLeft],
  ["Conversions","840","13%",FiDollarSign]
];

function Analytics(){
  const [activeGraph, setActiveGraph] = useState("Revenue");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return(
    <div className="flex min-h-screen bg-[#F8FAFC] overflow-x-hidden text-slate-800">
      {/* Sidebar Component */}
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

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
            <button>
              <FiFileText/>
              Simulate Issue
            </button>
            <button>
              <FiCalendar/>
              Last 7 Days
            </button>
            <button className="export">
              <FiDownload/>
              Export
            </button>
          </div>
        </div>

        {/* AI BOX */}
        <div className="ai-box">
          <div className="ai-left">
            <div className="ai-icon">
              <FiZap/>
            </div>
            <div>
              <h3>
                FlowPilot AI Insights 
                <span>NEW</span>
              </h3>
              <div className="ai-text">
                <p>
                  Emoji messages improved clicks <br/>
                  by 24% this week.
                </p>
                <p>
                  "Story Reply" trigger performs <br/>
                  best on weekends.
                </p>
              </div>
            </div>
          </div>

          <button>
            Apply Optimizations
          </button>
        </div>

        {/* CARDS */}
        <div className="stat-row">
          {cards.map((item)=>{
            let Icon=item[3];
            return(
              <div className="stat-card" key={item[0]}>
                <div className="stat-icon">
                   <Icon size={18}/>
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
                  onClick={() => setActiveGraph("Revenue")}
                >
                  <span className="legend-dot revenue-dot"></span>
                  Revenue
                </button>
                <button
                  className={`legend-item ${activeGraph === "Growth" ? "active" : "inactive"}`}
                  onClick={() => setActiveGraph("Growth")}
                >
                  <span className="legend-dot growth-dot"></span>
                  Growth
                </button>
              </div>
            </div>

            <div className="chart">
              <ResponsiveContainer>
                <AreaChart data={activeGraph === "Revenue" ? revenueData : growthData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name"/>
                  <YAxis ticks={[0, 900, 1800, 2700, 3600]} domain={[0, 3600]} />
                  <Tooltip/>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={activeGraph === "Revenue" ? "#c084fc" : "#5f35c0ff"}
                    strokeWidth={3}
                    fill={activeGraph === "Revenue" ? "#f3e8ff" : "#ede9fe"}
                    isAnimationActive={true}
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
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
                  <XAxis type="number" hide/>
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={120}
                  />
                  <Tooltip/>
                  <Bar
                    dataKey="value"
                    fill="#6d28d9"
                    radius={[0,6,6,0]}
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
              <span>✧</span>
            </div>

            <div className="heatmap">
              <div className="days">
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d)=>(
                  <p key={d}>{d}</p>
                ))}
              </div>

              <div>
                <div className="hours">
                  {["12a","4a","8a","12p","4p","8p"].map((h)=>(
                    <span key={h}>{h}</span>
                  ))}
                </div>

                <div className="heat-box">
                  {Array.from({length:42}).map((_,i)=>(
                    <div
                      key={i}
                      className={`heat h${i%5}`}
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
                ["#1","LINK","12.4%"],
                ["#2","FREE","9.8%"],
                ["#3","GUIDE","7.2%"],
                ["#4","JOIN","6.5%"],
                ["#5","START","4.1%"]
              ].map((item, index)=>{
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
            <br/>
            currently processing. Your cohort data will appear
            <br/>
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
