import React, { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";

const Moderation = () => {
  const [flaggedItems, setFlaggedItems] = useState([
    {
      id: "FL-1025",
      title: "Automation #FL-1025",
      description: 'Detected unsafe keywords: "free crypto", "guaranteed profit", "dm me now".',
      time: "2 mins ago"
    },
    {
      id: "FL-1026",
      title: "Automation #FL-1026",
      description: 'Detected unsafe keywords: "free crypto", "guaranteed profit", "dm me now".',
      time: "2 mins ago"
    },
    {
      id: "FL-1027",
      title: "Automation #FL-1027",
      description: 'Detected unsafe keywords: "free crypto", "guaranteed profit", "dm me now".',
      time: "2 mins ago"
    }
  ]);

  const handleClearAllSafe = () => {
    setFlaggedItems([]);
  };

  const handleToggleBlock = (id) => {
    setFlaggedItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, blocked: !item.blocked } : item
      )
    );
  };

  const handleDismiss = (id) => {
    setFlaggedItems(prev => prev.filter(item => item.id !== id));
  };

  const handleInvestigate = (id) => {
    alert(`Opening investigation panel for Automation #${id}.`);
  };

  return (
    <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
      
      {/* Top stats cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        
        {/* Spam Detection Card */}
        <div className="rounded-[24px] p-6 bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[155px] hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Spam Detection</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-none tracking-tight mt-3">42</h2>
          </div>
          <p className="text-xs text-slate-400 font-medium leading-normal">
            Automations flagged for high-velocity DMs in the last hour.
          </p>
        </div>

        {/* Abuse Reports Card */}
        <div className="rounded-[24px] p-6 bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[155px] hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Abuse Reports</span>
            <h2 className="text-3xl font-bold text-[#E11D48] leading-none tracking-tight mt-3">12</h2>
          </div>
          <p className="text-xs text-slate-400 font-medium leading-normal">
            New user reports pending review.
          </p>
        </div>

        {/* Meta Sync Status Card */}
        <div className="rounded-[24px] p-6 bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[155px] hover:shadow-md transition-all duration-300 sm:col-span-2 lg:col-span-1">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Meta Sync Status</span>
            <h2 className="text-3xl font-bold text-[#10B981] leading-none tracking-tight mt-3">98.2%</h2>
          </div>
          <p className="text-xs text-slate-400 font-medium leading-normal">
            Active tokens currently valid across platform.
          </p>
        </div>

      </div>

      <div className="rounded-[24px] p-4 sm:p-8 bg-white border border-slate-100 shadow-sm flex flex-col gap-6">
        
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="font-bold text-xl text-slate-800">
              Flagged Content Queue
            </h1>
          </div>
          <button 
            onClick={handleClearAllSafe}
            className="border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 font-semibold flex items-center gap-2 bg-white hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
          >
            Clear All Safe
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {flaggedItems.length === 0 ? (
            <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center gap-3 bg-[#F8FAFC]/50 rounded-[16px] border border-dashed border-slate-200">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-100">
                <FiAlertTriangle className="w-6 h-6 text-slate-300" />
              </div>
              <span className="text-sm font-semibold text-slate-500">All caught up! No flagged content.</span>
            </div>
          ) : (
            flaggedItems.map((item) => (
              <div key={item.id} className="w-full bg-[#F8FAFC] border-t border-[#F1F5F9] rounded-[16px] p-4 flex flex-col sm:flex-row gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <FiAlertTriangle className="w-5 h-5" />
                </div>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold text-slate-800 text-sm truncate">{item.title}</span>
                    <span className="text-xs text-slate-400 font-medium shrink-0">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal my-2 break-words">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button 
                      onClick={() => handleToggleBlock(item.id)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        item.blocked 
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                          : "bg-[#E11D48] hover:bg-[#BE123C] text-white"
                      }`}
                    >
                      {item.blocked ? "Unblock" : "Block Account"}
                    </button>
                    <button 
                      onClick={() => handleDismiss(item.id)}
                      className="bg-white border border-[#E2E8F0] text-slate-600 hover:bg-slate-50 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Dismiss
                    </button>
                    <button 
                      onClick={() => handleInvestigate(item.id)}
                      className="text-[#4D239E] hover:text-[#3D1B85] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Investigate
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
};

export default Moderation;
