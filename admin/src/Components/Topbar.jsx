import { useState, useRef, useEffect } from "react";
import {
  FiSearch,
  FiBell,
  FiUser,
  FiSettings,
  FiLogOut,
  FiClock,
  FiCheckCircle,
  FiTrash2,
  FiX
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Topbar = () => {
  // Search state
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Dropdown states
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Mock Notifications
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Failed payment alert for Customer #4912", time: "2 mins ago", type: "error", read: false },
    { id: 2, text: "AI Lead Scoring rollout reached 15%", time: "1 hour ago", type: "info", read: false },
    { id: 3, text: "New registration: Sai Kumar", time: "3 hours ago", type: "user", read: true }
  ]);

  // Mock Recent Searches
  const recentSearches = [
    "AI lead scoring config",
    "Duplicate merge webhook",
    "Billing invoices June",
    "Meta API error logs"
  ];

  // Refs for closing on click outside
  const searchRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchFocused(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleClearNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleRecentSearchClick = (search) => {
    setSearchQuery(search);
    setSearchFocused(false);
  };

  return (
    <div className="w-full h-[60px] bg-white border-b border-slate-100 pl-14 pr-4 md:px-8 flex items-center justify-between md:justify-end gap-3 md:gap-6 shrink-0 relative z-40">
      
      {/* Search Section */}
      <div className="relative flex-1 max-w-[140px] sm:max-w-[280px] md:w-80 md:flex-none" ref={searchRef}>
        <div 
          onClick={() => searchRef.current?.querySelector("input")?.focus()}
          className={`w-full h-10 md:h-11 rounded-xl bg-slate-50 border flex items-center gap-2 md:gap-3 px-3 md:px-4 cursor-text transition-all duration-300 ${
            searchFocused 
              ? "bg-white border-indigo-500 ring-4 ring-indigo-500/10 shadow-sm" 
              : "border-transparent hover:bg-slate-100/80"
          }`}
        >
          <FiSearch className={`w-5 h-5 transition-colors duration-200 ${searchFocused ? "text-indigo-500" : "text-slate-400"}`} />
          <input
            type="text"
            placeholder="Search automations, logs, users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            className="w-full bg-transparent outline-none text-sm text-slate-700 font-medium placeholder-slate-400"
          />
          {searchQuery && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSearchQuery("");
              }}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-200/50 cursor-pointer"
            >
              <FiX className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search Suggestion Dropdown */}
        <AnimatePresence>
          {searchFocused && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl p-4 z-50"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <FiClock className="w-3.5 h-3.5" />
                <span>Recent Queries</span>
              </div>
              <div className="flex flex-col gap-1">
                {recentSearches.map((search, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRecentSearchClick(search)}
                    className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{search}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full font-semibold">Search</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Actions Section */}
      <div className="flex items-center gap-3 md:gap-5">
        
        {/* Notification Bell */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center relative cursor-pointer border transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] ${
              showNotifications 
                ? "bg-indigo-50 border-indigo-200 text-indigo-600" 
                : "bg-white border-slate-100 hover:bg-slate-50 text-slate-500"
            }`}
          >
            <FiBell className="w-5.5 h-5.5" />
            {unreadCount > 0 && (
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-pink-500 ring-2 ring-white animate-pulse" />
            )}
          </button>

          {/* Notifications Dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-[-48px] sm:right-0 mt-2 w-[calc(100vw-32px)] sm:w-80 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden z-50"
              >
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">Notifications</span>
                    {unreadCount > 0 && (
                      <span className="bg-indigo-50 text-indigo-600 text-xs px-2 py-0.5 rounded-full font-bold">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={handleMarkAllRead}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <FiCheckCircle className="w-3.5 h-3.5" />
                      Mark read
                    </button>
                  )}
                </div>

                <div className="max-h-64 overflow-y-auto divide-y divide-slate-50">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center text-slate-400 flex flex-col items-center justify-center gap-2">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                        <FiBell className="w-6 h-6 text-slate-300" />
                      </div>
                      <span className="text-sm font-medium">All caught up!</span>
                    </div>
                  ) : (
                    notifications.map((item) => (
                      <div 
                        key={item.id} 
                        className={`p-4 transition-colors flex gap-3 group relative ${
                          item.read ? "bg-white" : "bg-indigo-50/20"
                        }`}
                      >
                        <div className="flex-1">
                          <p className="text-sm text-slate-700 font-medium leading-normal">{item.text}</p>
                          <span className="text-[11px] text-slate-400 font-semibold mt-1 block">{item.time}</span>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          {!item.read && (
                            <span className="w-2 h-2 rounded-full bg-indigo-600" />
                          )}
                          <button
                            onClick={() => handleClearNotification(item.id)}
                            className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-500 transition-opacity p-1 rounded hover:bg-slate-100 cursor-pointer"
                          >
                            <FiTrash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                  <button className="text-xs font-bold text-slate-500 hover:text-slate-700 w-full transition-colors cursor-pointer">
                    View All Activity
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Vertical Divider */}
        <div className="h-6 border-l border-slate-100" />

        {/* Profile Avatar */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full cursor-pointer relative border-2 border-white ring-2 ring-slate-100 hover:ring-indigo-200 transition-all duration-300 shadow-sm flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            {/* Online Indicator */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
          </button>

          {/* Profile Dropdown */}
          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-[calc(100vw-32px)] sm:w-72 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden z-50 p-2"
              >
                {/* Profile Header Info */}
                <div className="p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-800 text-sm truncate">Sai Kumar</h4>
                    <p className="text-xs text-slate-400 font-medium truncate">sai@gmail.com</p>
                  </div>
                </div>

                <div className="h-px bg-slate-100 my-1.5" />

                {/* Profile Options List */}
                <div className="flex flex-col gap-0.5">
                  <button className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors cursor-pointer w-full text-left">
                    <FiUser className="w-4 h-4 text-slate-400" />
                    <span>My Profile</span>
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors cursor-pointer w-full text-left">
                    <FiSettings className="w-4 h-4 text-slate-400" />
                    <span>Settings</span>
                  </button>
                  
                  <div className="h-px bg-slate-100 my-1.5" />

                  <button className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer w-full text-left">
                    <FiLogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
};

export default Topbar;