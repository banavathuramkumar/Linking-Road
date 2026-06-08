import React, { useState, useEffect, useRef } from "react";
import {
  FiEye,
  FiSlash,
  FiMoreVertical,
  FiFilter
} from "react-icons/fi";

const Users = () => {
  const [usersList, setUsersList] = useState([
    { id: 1, name: "Sarah Jenkins", email: "sarah@agency.com", role: "Pro", status: "active", riskScore: 12, joined: "2026-05-12" },
    { id: 2, name: "Marcus Chen", email: "marcus@fitness.co", role: "Business", status: "active", riskScore: 5, joined: "2026-05-15" },
    { id: 3, name: "Unknown User", email: "bot_99@trash.io", role: "Free", status: "suspended", riskScore: 98, joined: "2026-05-28" },
    { id: 4, name: "Digital Nomad", email: "alex@world.me", role: "Pro", status: "flagged", riskScore: 65, joined: "2026-05-30" },
  ]);

  const [viewingUser, setViewingUser] = useState(null);
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedRisk, setSelectedRisk] = useState("");

  const dropdownRef = useRef(null);
  const filterDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdownId(null);
      }
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-emerald-50 text-emerald-600 px-2.5 py-1 text-xs font-bold rounded-full border border-emerald-100/50";
      case "suspended":
        return "bg-rose-50 text-rose-600 px-2.5 py-1 text-xs font-bold rounded-full border border-rose-100/50";
      case "flagged":
        return "bg-amber-50 text-amber-600 px-2.5 py-1 text-xs font-bold rounded-full border border-amber-100/50";
      default:
        return "bg-slate-50 text-slate-500 px-2.5 py-1 text-xs font-bold rounded-full border border-slate-100";
    }
  };

  const getRiskColor = (score) => {
    if (score <= 30) return "bg-emerald-500";
    if (score <= 70) return "bg-amber-500";
    return "bg-rose-500";
  };

  const handleToggleStatus = (id) => {
    setUsersList(prev =>
      prev.map(user =>
        user.id === id 
          ? { ...user, status: user.status.toLowerCase() === "active" ? "suspended" : "active" }
          : user
      )
    );
  };

  const handleDeleteUser = (id) => {
    setUsersList(prev => prev.filter(user => user.id !== id));
    setActiveDropdownId(null);
  };

  const handleChangeRole = (id) => {
    setUsersList(prev =>
      prev.map(user => {
        if (user.id === id) {
          const roles = ["Pro", "Business", "Free"];
          const nextIdx = (roles.indexOf(user.role) + 1) % roles.length;
          return { ...user, role: roles[nextIdx] };
        }
        return user;
      })
    );
    setActiveDropdownId(null);
  };

  const handleEditUser = (user) => {
    const newName = prompt("Enter new name for the user:", user.name);
    if (newName && newName.trim()) {
      setUsersList(prev =>
        prev.map(u => u.id === user.id ? { ...u, name: newName.trim() } : u)
      );
    }
    setActiveDropdownId(null);
  };

  const filteredUsers = usersList.filter(user => {
    if (selectedPlan && user.role.toLowerCase() !== selectedPlan.toLowerCase()) {
      return false;
    }
    if (selectedStatus && user.status.toLowerCase() !== selectedStatus.toLowerCase()) {
      return false;
    }
    if (selectedRisk) {
      if (selectedRisk === "low" && user.riskScore > 30) return false;
      if (selectedRisk === "medium" && (user.riskScore <= 30 || user.riskScore > 70)) return false;
      if (selectedRisk === "high" && user.riskScore <= 70) return false;
    }
    return true;
  });

  return (
    <div className="p-8 space-y-4">
      {/* Filter Button Row */}
      <div className="flex justify-end relative">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`flex items-center gap-2 border bg-white px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm cursor-pointer ${
            selectedPlan || selectedStatus || selectedRisk 
              ? "border-indigo-500 text-indigo-600 ring-2 ring-indigo-500/10" 
              : "border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <FiFilter className={`w-3.5 h-3.5 ${selectedPlan || selectedStatus || selectedRisk ? "text-indigo-500" : "text-slate-500"}`} />
          <span>Filter</span>
          {(selectedPlan || selectedStatus || selectedRisk) && (
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          )}
        </button>

        {/* Filter Dropdown */}
        {isFilterOpen && (
          <div 
            ref={filterDropdownRef}
            className="absolute right-0 mt-9 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl p-4 z-50 flex flex-col gap-4 text-left"
          >
            {/* Filter by Plan */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Filter by Plan</span>
              <div className="flex flex-wrap gap-1.5">
                {["Free", "Pro", "Business"].map(plan => (
                  <button
                    key={plan}
                    onClick={() => setSelectedPlan(selectedPlan === plan ? "" : plan)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      selectedPlan === plan 
                        ? "bg-indigo-50 border-indigo-200 text-indigo-600" 
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {plan}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Status */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Filter by Status</span>
              <div className="flex flex-wrap gap-1.5">
                {["Active", "Suspended", "Flagged"].map(status => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(selectedStatus === status ? "" : status)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      selectedStatus === status 
                        ? "bg-indigo-50 border-indigo-200 text-indigo-600" 
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Risk */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Filter by Risk Score</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: "Low Risk", value: "low" },
                  { label: "Medium Risk", value: "medium" },
                  { label: "High Risk", value: "high" }
                ].map(risk => (
                  <button
                    key={risk.value}
                    onClick={() => setSelectedRisk(selectedRisk === risk.value ? "" : risk.value)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                      selectedRisk === risk.value 
                        ? "bg-indigo-50 border-indigo-200 text-indigo-600" 
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {risk.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset option */}
            {(selectedPlan || selectedStatus || selectedRisk) && (
              <div className="border-t border-slate-100 pt-3 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedPlan("");
                    setSelectedStatus("");
                    setSelectedRisk("");
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Users list table */}
      <div className="bg-white rounded-2xl border border-slate-200/70 shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 font-bold text-xs uppercase tracking-wider border-b border-slate-100/80">
                <th className="px-6 py-2.5 font-bold text-slate-400 text-xs">USER</th>
                <th className="px-6 py-2.5 font-bold text-slate-400 text-xs">PLAN</th>
                <th className="px-6 py-2.5 font-bold text-slate-400 text-xs">STATUS</th>
                <th className="px-6 py-2.5 font-bold text-slate-400 text-xs">RISK SCORE</th>
                <th className="px-6 py-2.5 font-bold text-slate-400 text-xs">JOINED</th>
                <th className="px-6 py-2.5 font-bold text-slate-400 text-xs text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/70">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-slate-800 text-sm truncate">{user.name}</span>
                        <span className="text-xs text-slate-400 font-medium truncate">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-slate-600 text-sm font-medium">
                    {user.role}
                  </td>
                  <td className="px-6 py-3">
                    <span className={getStatusStyles(user.status)}>
                      {user.status.toLowerCase()}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden shrink-0">
                        <div
                          className={`h-full ${getRiskColor(user.riskScore)} rounded-full`}
                          style={{ width: `${user.riskScore}%` }}
                        />
                      </div>
                      <span className="text-slate-500 font-semibold text-xs min-w-[16px]">{user.riskScore}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-slate-500 text-sm font-medium">
                    {user.joined}
                  </td>
                  <td className="px-6 py-3 text-right relative">
                    <div className="flex items-center justify-end gap-3 text-slate-400">
                      <button 
                        onClick={() => setViewingUser(user)}
                        className="hover:text-indigo-600 transition-colors p-1 hover:bg-slate-50 rounded-lg cursor-pointer"
                      >
                        <FiEye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleToggleStatus(user.id)}
                        className="hover:text-rose-600 transition-colors p-1 hover:bg-slate-50 rounded-lg cursor-pointer"
                      >
                        <FiSlash className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setActiveDropdownId(activeDropdownId === user.id ? null : user.id)}
                        className="hover:text-slate-600 transition-colors p-1 hover:bg-slate-50 rounded-lg cursor-pointer"
                      >
                        <FiMoreVertical className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Actions Dropdown */}
                    {activeDropdownId === user.id && (
                      <div 
                        ref={dropdownRef}
                        className="absolute right-6 mt-1 w-36 bg-white border border-slate-100 rounded-xl shadow-lg py-1 z-50 text-left"
                      >
                        <button 
                          onClick={() => handleEditUser(user)}
                          className="w-full px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors cursor-pointer text-left"
                        >
                          Edit User
                        </button>
                        <button 
                          onClick={() => handleChangeRole(user.id)}
                          className="w-full px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors cursor-pointer text-left"
                        >
                          Change Role
                        </button>
                        <button 
                          onClick={() => handleDeleteUser(user.id)}
                          className="w-full px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer text-left"
                        >
                          Delete User
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View User Modal */}
      {viewingUser && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setViewingUser(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-50 cursor-pointer text-lg font-bold"
            >
              &times;
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xl">
                {viewingUser.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{viewingUser.name}</h3>
                <p className="text-xs text-slate-400 font-medium">{viewingUser.email}</p>
              </div>
            </div>
            <div className="space-y-4 border-t border-slate-100 pt-4">
              <div className="flex justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Plan</span>
                <span className="text-sm font-semibold text-slate-700">{viewingUser.role}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</span>
                <span className={getStatusStyles(viewingUser.status)}>{viewingUser.status.toLowerCase()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Risk Score</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden shrink-0">
                    <div
                      className={`h-full ${getRiskColor(viewingUser.riskScore)} rounded-full`}
                      style={{ width: `${viewingUser.riskScore}%` }}
                    />
                  </div>
                  <span className="text-slate-700 font-bold text-xs">{viewingUser.riskScore}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Joined Date</span>
                <span className="text-sm font-semibold text-slate-700">{viewingUser.joined}</span>
              </div>
            </div>
            <button 
              onClick={() => setViewingUser(null)}
              className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Users;
