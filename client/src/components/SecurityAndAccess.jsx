import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMonitor,
  FiSmartphone,
  FiAlertTriangle,
  FiCheck,
  FiShield,
  FiX
} from "react-icons/fi";

const SecurityAndAccess = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [showBackupCodes, setShowBackupCodes] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);

  const [sessions, setSessions] = useState([
    {
      id: "session-1",
      device: "MacBook Pro 16\"",
      os: "macOS",
      browser: "Chrome",
      ip: "192.168.1.1",
      location: "San Francisco, CA",
      current: true,
      status: "Active now",
      statusColor: "text-[#615FFF]",
      icon: FiMonitor,
      iconBg: "bg-[#F0F4FA] text-[#475569]",
    },
    {
      id: "session-2",
      device: "iPhone 13 Pro",
      os: "iOS",
      browser: "Safari",
      ip: "172.56.21.4",
      location: "San Francisco, CA",
      current: false,
      status: "2 hours ago",
      statusColor: "text-[#64748B]",
      icon: FiSmartphone,
      iconBg: "bg-[#F0F4FA] text-[#475569]",
    },
    {
      id: "session-3",
      device: "Unknown Device",
      os: "Windows",
      browser: "Firefox",
      ip: "45.33.22.11",
      location: "Moscow, RU",
      current: false,
      status: "10 mins ago",
      statusColor: "text-[#EF4444] font-semibold",
      suspicious: true,
      icon: FiAlertTriangle,
      iconBg: "bg-[#FEE2E2] text-[#EF4444]",
    },
  ]);

  const handleRevokeSession = (id) => {
    if (window.confirm("Are you sure you want to revoke this session?")) {
      setSessions(sessions.filter((s) => s.id !== id));
    }
  };

  const handleSignOutAllOther = () => {
    if (window.confirm("Are you sure you want to sign out of all other sessions?")) {
      setSessions(sessions.filter((s) => s.current));
    }
  };

  return (
    <div className="w-full max-w-[768px] mx-auto px-3 sm:px-4">
      {/* HEADER */}
      <div className="mb-5 sm:mb-8">
        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[26px] sm:text-[30px] font-semibold text-[#0F172A] leading-tight"
        >
          Security & Access
        </h1>
        <p
          style={{ fontFamily: "Inter" }}
          className="mt-1.5 text-[14px] sm:text-[15px] text-[#64748B]"
        >
          Manage your security preferences, 2FA, and active sessions.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* TWO-FACTOR AUTHENTICATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-[16px] border border-[#E2E8F0] shadow-[0px_1px_3px_rgba(0,0,0,0.05)] p-5 sm:p-6"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  style={{ fontFamily: "Inter" }}
                  className="text-[16px] sm:text-[17px] font-bold text-[#0F172A]"
                >
                  Two-Factor Authentication (2FA)
                </h3>
                {twoFactorEnabled && (
                  <span className="bg-[#EEFDF4] text-[#16A34A] text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                    ENABLED
                  </span>
                )}
              </div>
              <p
                style={{ fontFamily: "Inter" }}
                className="mt-2 text-[14px] text-[#64748B] leading-relaxed"
              >
                Add an extra layer of security to your account. We recommend using an authenticator app like 1Password or Authy.
              </p>
            </div>

            <button
              onClick={() => setShow2FAModal(true)}
              style={{ fontFamily: "Inter" }}
              className="h-[38px] px-4 rounded-[8px] border border-[#E2E8F0] bg-white text-[#334155] text-[14px] font-semibold shadow-sm transition-all hover:bg-[#F8FAFC] active:scale-[0.98] self-start sm:self-auto shrink-0"
            >
              Manage 2FA
            </button>
          </div>

          {/* Sub Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Backup Codes */}
            <div className="flex items-center justify-between p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px]">
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A]">Backup Codes</h4>
                <p className="text-[13px] text-[#64748B] mt-0.5">Generate 10 single-use codes.</p>
              </div>
              <button
                onClick={() => setShowBackupCodes(true)}
                className="text-[14px] font-bold text-[#615FFF] hover:text-[#5250E6] transition-colors"
              >
                View Codes
              </button>
            </div>

            {/* Authenticator App */}
            <div className="flex items-center justify-between p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px]">
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A]">Authenticator App</h4>
                <p className="text-[13px] text-[#64748B] mt-0.5">Configured on Dec 12, 2023.</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#EEFDF4] border border-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                <FiCheck size={14} className="stroke-[3]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ACTIVE SESSIONS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="bg-white rounded-[16px] border border-[#E2E8F0] shadow-[0px_1px_3px_rgba(0,0,0,0.05)] overflow-hidden"
        >
          {/* Header Row */}
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0]">
            <div>
              <h3
                style={{ fontFamily: "Inter" }}
                className="text-[16px] sm:text-[17px] font-bold text-[#0F172A]"
              >
                Active Sessions
              </h3>
              <p
                style={{ fontFamily: "Inter" }}
                className="mt-1 text-[13px] sm:text-[14px] text-[#64748B]"
              >
                Review and revoke active sessions across your devices.
              </p>
            </div>

            {sessions.length > 1 && (
              <button
                onClick={handleSignOutAllOther}
                style={{ fontFamily: "Inter" }}
                className="h-[38px] px-4 rounded-[8px] border border-[#E2E8F0] bg-white text-[#334155] text-[14px] font-semibold shadow-sm transition-all hover:bg-[#F8FAFC] active:scale-[0.98] self-start sm:self-auto shrink-0"
              >
                Sign out of all other sessions
              </button>
            )}
          </div>

          {/* Session List */}
          <div className="divide-y divide-[#E2E8F0]">
            {sessions.map((session) => {
              const DeviceIcon = session.icon;
              return (
                <div
                  key={session.id}
                  className={`p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                    session.suspicious ? "bg-[#FFF8F8]" : "hover:bg-[#F8FAFC]/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Device Icon wrapper */}
                    <div
                      className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0 border border-[#E2E8F0]/40 ${session.iconBg}`}
                    >
                      <DeviceIcon size={18} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-[#0F172A] text-[15px] sm:text-[16px]">
                          {session.device}
                        </span>
                        {session.current && (
                          <span className="bg-[#EEF2FF] text-[#4F46E5] text-[9.5px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                            CURRENT SESSION
                          </span>
                        )}
                        {session.suspicious && (
                          <span className="bg-[#FEF2F2] text-[#DC2626] text-[9.5px] font-bold px-2 py-0.5 rounded-full tracking-wider flex items-center gap-1 border border-[#FEE2E2]">
                            <FiAlertTriangle size={10} />
                            SUSPICIOUS ACTIVITY
                          </span>
                        )}
                      </div>

                      {/* Device meta */}
                      <p className="text-[13px] text-[#64748B] mt-1">
                        {session.os} • {session.browser} • {session.ip} • {session.location}
                      </p>

                      {/* Last active status */}
                      <p className={`text-[13px] mt-1 ${session.statusColor}`}>{session.status}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  {!session.current && (
                    <div className="self-end sm:self-center shrink-0">
                      {session.suspicious ? (
                        <button
                          onClick={() => handleRevokeSession(session.id)}
                          style={{ fontFamily: "Inter" }}
                          className="h-[38px] px-4 rounded-[8px] bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[14px] font-bold transition-all active:scale-[0.98] shadow-sm"
                        >
                          Remove Device
                        </button>
                      ) : (
                        <button
                          onClick={() => handleRevokeSession(session.id)}
                          style={{ fontFamily: "Inter" }}
                          className="h-[38px] px-4 rounded-[8px] border border-[#E2E8F0] bg-white text-[#334155] text-[14px] font-semibold transition-all hover:bg-[#F8FAFC] active:scale-[0.98] shadow-sm"
                        >
                          Revoke Session
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* BACKUP CODES MODAL */}
      <AnimatePresence>
        {showBackupCodes && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBackupCodes(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-[400px] bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-6 z-10 text-center"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[17px] font-bold text-[#0F172A]">Your Backup Codes</h4>
                <button
                  onClick={() => setShowBackupCodes(false)}
                  className="p-1 rounded-lg text-[#94A3B8] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                >
                  <FiX size={18} />
                </button>
              </div>
              <p className="text-[13px] text-[#64748B] text-left mb-4">
                Store these codes securely. Each backup code can only be used once.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left font-mono text-[14px] bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl text-[#334155]">
                <div>1. 4839-2940</div>
                <div>2. 9832-1049</div>
                <div>3. 8502-3950</div>
                <div>4. 2048-5920</div>
                <div>5. 1948-2940</div>
                <div>6. 5829-1029</div>
                <div>7. 4829-4920</div>
                <div>8. 9382-3920</div>
                <div>9. 5829-3910</div>
                <div>10. 4829-4910</div>
              </div>
              <button
                onClick={() => setShowBackupCodes(false)}
                className="mt-5 w-full h-[40px] rounded-[10px] bg-[#615FFF] text-white text-[14px] font-bold transition-all hover:bg-[#5250E6]"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MANAGE 2FA MODAL */}
      <AnimatePresence>
        {show2FAModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShow2FAModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-[420px] bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-6 z-10 text-center"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[17px] font-bold text-[#0F172A]">Manage Two-Factor Authentication</h4>
                <button
                  onClick={() => setShow2FAModal(false)}
                  className="p-1 rounded-lg text-[#94A3B8] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="flex flex-col items-center py-4">
                <div className="w-12 h-12 rounded-full bg-[#EEFDF4] border border-[#DCFCE7] flex items-center justify-center text-[#16A34A] mb-3">
                  <FiCheck size={24} className="stroke-[3]" />
                </div>
                <h5 className="font-bold text-[#0F172A]">2FA is currently enabled</h5>
                <p className="text-[13px] text-[#64748B] max-w-[320px] mt-1.5 leading-relaxed">
                  Your account is protected with Two-Factor Authentication. You can disable it here.
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setShow2FAModal(false)}
                  className="flex-1 h-[40px] border border-[#E2E8F0] text-[#334155] rounded-[10px] text-[14px] font-semibold hover:bg-[#F8FAFC]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to disable 2FA?")) {
                      setTwoFactorEnabled(false);
                      setShow2FAModal(false);
                    }
                  }}
                  className="flex-1 h-[40px] bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-[10px] text-[14px] font-bold transition-all"
                >
                  Disable 2FA
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecurityAndAccess;
