import { useState } from "react";
import { motion } from "framer-motion";



import {
  FiUsers,
  FiCreditCard,
  FiZap,
  FiAlertTriangle,
  FiSettings,
  FiArrowRight
} from "react-icons/fi";

const graphData = [
  { day:"Jun 1", value:125000 },
  { day:"Jun 2", value:128000 },
  { day:"Jun 3", value:131000 },
  { day:"Jun 4", value:135000 },
  { day:"Jun 5", value:142000 }
];


const Dashboard = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [features, setFeatures] = useState([
    { name: "AI Lead Scoring", desc: "Gradual rollout (15%)", enabled: true },
    { name: "Meta API v20", desc: "Beta testing active", enabled: true },
    { name: "Duplicate Merging", desc: "Available to all Pro", enabled: true },
    { name: "Emergency Killswitch", desc: "Disables all outgoing DMs", enabled: false }
  ]);

  const toggleFeature = (index) => {
    setFeatures(prev => prev.map((f, i) => i === index ? { ...f, enabled: !f.enabled } : f));
  };


  const chartWidth = 600;
  const chartHeight = 240;
  const paddingLeft = 55;
  const paddingRight = 20;
  const paddingTop = 15;
  const paddingBottom = 45;
  const maxY = 160000;

  const getCoordinates = (index, value) => {
    const x = paddingLeft + (index * (chartWidth - paddingLeft - paddingRight)) / (graphData.length - 1);
    const y = chartHeight - paddingBottom - (value * (chartHeight - paddingTop - paddingBottom)) / maxY;
    return { x, y };
  };

  // Build path strings for line and area under the curve
  let pathD = "";
  let areaD = "";
  graphData.forEach((point, index) => {
    const { x, y } = getCoordinates(index, point.value);
    if (index === 0) {
      pathD = `M ${x} ${y}`;
      areaD = `M ${x} ${y}`;
    } else {
      // Smooth out curve using Bezier approximations
      const prev = getCoordinates(index - 1, graphData[index - 1].value);
      const cpX1 = prev.x + (x - prev.x) / 2;
      const cpY1 = prev.y;
      const cpX2 = prev.x + (x - prev.x) / 2;
      const cpY2 = y;
      pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
      areaD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
    }
  });
  const startX = getCoordinates(0, 0).x;
  const endX = getCoordinates(graphData.length - 1, 0).x;
  const floorY = chartHeight - paddingBottom;
  areaD += ` L ${endX} ${floorY} L ${startX} ${floorY} Z`;

  return (

<div className="p-8 space-y-8">


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


{
[
["Total Users","12,482","+12%",FiUsers,"bg-indigo-50/80 text-indigo-600","bg-emerald-50 text-emerald-600"],
["MRR","₹142,500","+8.4%",FiCreditCard,"bg-emerald-50/80 text-emerald-600","bg-emerald-50 text-emerald-600"],
["Failed Payments","24","-15%",FiAlertTriangle,"bg-rose-50/80 text-rose-600","bg-rose-50 text-rose-600"],
["API Health","99.98%","Stable",FiZap,"bg-amber-50/80 text-amber-500","bg-rose-50 text-rose-600"]
].map(([title,num,tag,Icon,iconBg,badgeBg],index)=>(


<motion.div key={index} whileHover={{y:-4}}
className="rounded-[24px] p-6 bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[155px]">


<div className="flex justify-between items-start">

<div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${iconBg}`}>
<Icon className="w-5 h-5"/>
</div>


<span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeBg}`}>
{tag}
</span>

</div>


<div>
<p className="text-sm font-semibold text-slate-400 mt-4 block">
{title}
</p>


<h2 className="text-3xl font-bold text-slate-900 leading-none tracking-tight mt-1">
{num}
</h2>
</div>


</motion.div>

))
}


</div>




<div className="flex gap-6">


<div className="flex-1 min-w-0 rounded-[24px] p-8 bg-white shadow flex flex-col">

<h2 className="text-xl font-bold">
Revenue Growth
</h2>


<p className="text-slate-500">
MRR performance over last 30 days
</p>


            {/* SVG Chart Wrapper */}
            <div className="w-full relative flex-1 min-h-[300px] overflow-hidden p-2 mt-4">
              <svg className="w-full h-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="purpleArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.00" />
                  </linearGradient>
                </defs>

                {/* Horizontal Dotted Grid Lines */}
                {[40000, 80000, 120000, 160000].map((val) => {
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
                {graphData.slice(1).map((point, idx) => {
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
                {[0, 40000, 80000, 120000, 160000].map((val) => {
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
                {graphData.map((pt, idx) => {
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
                {[0, 40000, 80000, 120000, 160000].map((val) => {
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
                {graphData.map((pt, idx) => {
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
                  stroke="#6366F1"
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
                    fill="#6366F1"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                )}

                {/* Invisible vertical hover zones for each day */}
                {graphData.map((pt, idx) => {
                  const { x, y } = getCoordinates(idx, pt.value);
                  const step = (chartWidth - paddingLeft - paddingRight) / (graphData.length - 1);
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
                    zIndex: 50
                  }}
                >
                  <p className="m-0 text-slate-800 font-medium">{hoveredPoint.day}</p>
                  <ul className="p-0 m-0 list-none">
                    <li className="flex items-center gap-1.5 py-1 text-[#6366F1] font-medium">
                      <span 
                        className="inline-block w-2.5 h-2.5" 
                        style={{ backgroundColor: "#6366F1" }}
                      />
                      <span>value : {hoveredPoint.value}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>


</div>




<div className="w-[280px] shrink-0 rounded-[24px] p-8 bg-white shadow">


<h2 className="text-xl font-bold mb-8">
System Status
</h2>


{
[
"Meta API Gateway",
"Worker Queues",
"Database Cluster",
"Auth Service",
"Image CDN"

].map((item,index)=>(


<p key={index} className="my-5 text-slate-600">

🟢 {item}

<span className="ml-3 text-green-600 bg-green-50 px-2 rounded text-xs">
Healthy
</span>

</p>

))
}


<button className="mt-8 border rounded-xl w-full p-2 flex justify-between">

View Detailed Health

<FiArrowRight/>

</button>


</div>


</div>





<div className="rounded-[24px] p-8 bg-white border border-slate-100 shadow-sm flex flex-col gap-6">


<div className="flex justify-between items-start">
  <div>
    <h1 className="font-bold text-xl text-slate-800">
      Feature Flags & Beta Controls
    </h1>
    <p className="text-slate-400 text-sm mt-1">
      Manage global feature availability and rollouts
    </p>
  </div>


  <button className="border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 font-semibold flex items-center gap-2 bg-white hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
    <FiSettings className="w-4 h-4 text-slate-500" />
    <span>Global Config</span>
  </button>


</div>



<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">


{
features.map((item,index)=>(


<div key={index} className="bg-[#F8FAFC]/90 border border-slate-100 rounded-[20px] p-6 flex flex-col justify-between h-[165px] hover:shadow-md transition-all duration-300">
  <div>
    <h2 className="font-bold text-slate-800 text-base">
      {item.name}
    </h2>
    <p className="text-xs text-slate-400 mt-2 font-medium">
      {item.desc}
    </p>
  </div>

  <div className="flex justify-between items-center mt-6">
    <span className={`text-xs font-bold tracking-wider ${item.enabled ? "text-indigo-600" : "text-slate-400"}`}>
      {item.enabled ? "ENABLED" : "DISABLED"}
    </span>

    <button
      onClick={() => toggleFeature(index)}
      className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 relative cursor-pointer flex items-center ${
        item.enabled ? "bg-indigo-600" : "bg-slate-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${
          item.enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  </div>
</div>


))
}


</div>


</div>


</div>

);

};


export default Dashboard;