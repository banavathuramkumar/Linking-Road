import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiUserPlus, FiUserCheck, FiUserX } from "react-icons/fi";

const Users = () => {
  const usersList = [
    { id: 1, name: "Aarav Sharma", email: "aarav@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Isha Patel", email: "isha@example.com", role: "Editor", status: "Active" },
    { id: 3, name: "Kabir Singh", email: "kabir@example.com", role: "Viewer", status: "Inactive" },
    { id: 4, name: "Riya Sen", email: "riya@example.com", role: "Editor", status: "Active" },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">User Management</h1>
          <p className="text-slate-500 mt-1">Manage admin roles, view permissions, and invite new members.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#4D239E] text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-[#3d1a80] transition-colors shadow">
          <FiUserPlus /> Invite User
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          ["Total Users", "12,482", FiUsers, "text-indigo-600", "bg-indigo-50"],
          ["Active Now", "3,142", FiUserCheck, "text-green-600", "bg-green-50"],
          ["Pending Invites", "18", FiUserX, "text-amber-600", "bg-amber-50"],
        ].map(([title, num, Icon, colorClass, bgClass], index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            className="rounded-3xl p-6 bg-white border border-[#E2E8F0] shadow-sm flex items-center gap-4"
          >
            <div className={`p-4 rounded-2xl ${bgClass} ${colorClass}`}>
              <Icon size={24} />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-semibold">{title}</p>
              <h2 className="text-2xl font-bold text-slate-800 mt-0.5">{num}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Users list table */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-[#E2E8F0]">
          <h2 className="text-xl font-bold text-slate-800">All Members</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold text-sm border-b border-[#E2E8F0]">
                <th className="px-8 py-4">Name</th>
                <th className="px-8 py-4">Email</th>
                <th className="px-8 py-4">Role</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {usersList.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-4 font-semibold text-slate-800">{user.name}</td>
                  <td className="px-8 py-4 text-slate-600">{user.email}</td>
                  <td className="px-8 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-50 text-green-600 border border-green-100"
                          : "bg-slate-100 text-slate-500 border border-slate-200"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 font-semibold text-sm">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
