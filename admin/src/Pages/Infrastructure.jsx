import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiShare2, FiActivity } from "react-icons/fi";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Infrastructure = () => {
  const latencyData = [
    { time: "10:00", value: 45 },
    { time: "10:05", value: 48 },
    { time: "10:10", value: 52 },
    { time: "10:15", value: 85 },
    { time: "10:20", value: 42 },
    { time: "10:25", value: 38 },
  ];

  const topCards = [
    {
      title: "CPU Usage",
      value: "28%",
      sub: "Avg across cluster",
      icon: <FiCpu />,
    },
    {
      title: "RAM Usage",
      value: "4.2 GB",
      sub: "65% capacity",
      icon: <FiDatabase />,
    },
    {
      title: "Network I/O",
      value: "125 MB/s",
      sub: "Normal traffic",
      icon: <FiShare2 />,
    },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {topCards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -4,
              scale: 1.01,
            }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-[#E2E8F0] rounded-[24px] p-5 shadow-sm"
          >
            {/* ICON + TITLE */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0">
                <div className="text-[#615FFF] text-[18px]">{card.icon}</div>
              </div>

              <h3
                style={{ fontFamily: "GeneralSans" }}
                className="text-[16px] font-semibold text-[#0F172A]"
              >
                {card.title}
              </h3>
            </div>

            {/* VALUE */}
            <h2
              style={{ fontFamily: "GeneralSans" }}
              className="mt-5 text-[28px] font-bold text-[#0F172A]"
            >
              {card.value}
            </h2>

            {/* SUBTEXT */}
            <p
              style={{ fontFamily: "GeneralSans" }}
              className="mt-1 text-[14px] text-[#64748B]"
            >
              {card.sub}
            </p>
          </motion.div>
        ))}
      </div>

      {/* LATENCY CHART */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-[#E2E8F0] rounded-[24px] px-5 pt-8 pb-5 shadow-sm"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h2
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[20px] font-semibold text-[#0F172A]"
            >
              API Latency
            </h2>

            <p
              style={{ fontFamily: "GeneralSans" }}
              className="mt-1 text-[13px] text-[#64748B]"
            >
              Global response time monitor (ms)
            </p>
          </div>

          <div
            style={{ fontFamily: "GeneralSans" }}
            className="px-3 py-1 rounded-lg bg-green-50 text-green-600 text-[12px] font-semibold"
          >
            Realtime
          </div>
        </div>

        {/* CHART */}
        <div className="h-[260px] mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={latencyData}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />

              <XAxis
                dataKey="time"
                tick={{
                  fontSize: 12,
                  fill: "#64748B",
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fontSize: 12,
                  fill: "#64748B",
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#615FFF"
                fill="#EEF2FF"
                strokeWidth={2.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* BOTTOM CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* DATABASE HEALTH */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="bg-white border border-[#E2E8F0] rounded-[24px] p-5 shadow-sm"
        >
          <h2
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[18px] font-semibold text-[#0F172A]"
          >
            Database Health
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[14px] text-[#475569]"
                >
                  Storage Capacity
                </span>

                <span
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[14px] font-semibold text-[#0F172A]"
                >
                  72%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-[72%] bg-[#615FFF] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[14px] text-[#475569]"
                >
                  Read/Write Operations
                </span>

                <span
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[14px] font-semibold text-[#0F172A]"
                >
                  45%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-[45%] bg-[#10B981] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[14px] text-[#475569]"
                >
                  Connection Pool
                </span>

                <span
                  style={{ fontFamily: "GeneralSans" }}
                  className="text-[14px] font-semibold text-[#0F172A]"
                >
                  88%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-[88%] bg-[#F43F5E] rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* WORKER JOBS */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="bg-white border border-[#E2E8F0] rounded-[24px] p-5 shadow-sm"
        >
          <h2
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[18px] font-semibold text-[#0F172A]"
          >
            Worker Jobs
          </h2>

          <div style={{ fontFamily: "GeneralSans" }} className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#64748B]">Active Workers</span>

              <span className="text-[14px] font-semibold text-[#0F172A]">
                24 / 24
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#64748B]">Queue Depth</span>

              <span className="text-[14px] font-semibold text-[#0F172A]">
                1,204 jobs
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#64748B]">Success Rate</span>

              <span className="text-[14px] font-semibold text-[#10B981]">
                99.92%
              </span>
            </div>
          </div>

          <button
            style={{ fontFamily: "GeneralSans" }}
            className="mt-8 w-full h-[44px] rounded-xl border border-[#E2E8F0] text-[14px] text-[#475569] font-semibold hover:bg-[#F8FAFC] transition-all duration-300"
          >
            Manage Queue
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Infrastructure;
