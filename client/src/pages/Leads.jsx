import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import ContactProfileDrawer from "../components/ContactProfileDrawer";
import {
  HiMenu,
  HiOutlineUserGroup,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineCurrencyDollar,
  HiSearch,
  HiOutlineTrash,
  HiOutlineRefresh,
  HiOutlineDownload,
  HiOutlinePlus,
  HiOutlineDotsVertical,
  HiCheckCircle,
  HiExclamationCircle,
  HiChevronRight,
  HiFilter,
  HiChevronDown
} from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";

const initialContacts = [
  {
    id: 1,
    name: "Sarah Jenkins",
    handle: "@sarah.creates",
    email: "sarah@example.com",
    score: 85,
    stage: "Qualified",
    tags: ["Creator", "High Intent"],
    initial: "S",
    bgClass: "bg-purple-100 text-purple-700"
  },
  {
    id: 2,
    name: "Michael Chen",
    handle: "@mike_fitness",
    email: "mike.c@fitness.io",
    score: 62,
    stage: "Warm",
    tags: ["Fitness"],
    initial: "M",
    bgClass: "bg-blue-100 text-blue-700"
  },
  {
    id: 3,
    name: "Emma Wilson",
    handle: "@em_wilson",
    email: "emma@wilson.design",
    score: 24,
    stage: "Cold",
    tags: ["Design"],
    initial: "E",
    bgClass: "bg-pink-100 text-pink-700"
  },
  {
    id: 4,
    name: "David Rodriguez",
    handle: "@d.rod.photo",
    email: "hello@davidr.photo",
    score: 95,
    stage: "Customer",
    tags: ["Photography", "VIP"],
    initial: "D",
    bgClass: "bg-amber-100 text-amber-700"
  },
  {
    id: 5,
    name: "Jessica Taylor",
    handle: "@jess_tech",
    email: "jtaylor@startup.co",
    score: 58,
    stage: "Warm",
    tags: ["SaaS"],
    initial: "J",
    bgClass: "bg-emerald-100 text-emerald-700"
  },
  {
    id: 6,
    name: "S. Jenkins",
    handle: "@sarah_creates_v2",
    email: "sarah@example.com",
    score: 15,
    stage: "Cold",
    tags: ["Creator"],
    initial: "S",
    bgClass: "bg-indigo-100 text-indigo-700"
  }
];

const Leads = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState("");
  const [stageFilter, setStageFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("All");
  const [sortBy, setSortBy] = useState("score-desc");
  const [showMergeModal, setShowMergeModal] = useState(false);
  const [hasMerged, setHasMerged] = useState(false);
  
  const [selectedContact, setSelectedContact] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Custom dropdown toggles
  const [showStageDropdown, setShowStageDropdown] = useState(false);
  const [showTagDropdown, setShowTagDropdown] = useState(false);

  const handleUpdateContact = (updatedContact) => {
    setContacts(prev => prev.map(c => c.id === updatedContact.id ? updatedContact : c));
    setSelectedContact(updatedContact);
  };

  // Available unique tags for filtering
  const allTags = useMemo(() => {
    const tags = new Set();
    contacts.forEach(c => c.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, [contacts]);

  // Handle export
  const handleExport = () => {
    const headers = ["Name,Handle,Email,Score,Stage,Tags\n"];
    const rows = contacts.map(
      c => `"${c.name}","${c.handle}","${c.email}",${c.score},"${c.stage}","${c.tags.join("; ")}"`
    );
    const blob = new Blob([headers.concat(rows.join("\n"))], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "contacts_crm_export.csv");
    a.click();
    toast.success("CSV Export downloaded successfully!");
  };

  // Sync webhooks
  const handleWebhookSync = () => {
    toast.info("Syncing CRM webhooks and web scrapers...");
    setTimeout(() => {
      toast.success("CRM contacts updated and synced!");
    }, 1200);
  };

  // Handle Merge Duplicates
  const handleMergeDuplicates = () => {
    setContacts(prev => {
      return prev
        .map(c => {
          if (c.id === 1) {
            return {
              ...c,
              name: "Sarah Jenkins",
              handle: "@sarah.creates",
              score: 85,
              tags: Array.from(new Set([...c.tags, "Creator", "Merged"]))
            };
          }
          return c;
        })
        .filter(c => c.id !== 6);
    });
    setHasMerged(true);
    setShowMergeModal(false);
    toast.success("Duplicates merged successfully! S. Jenkins merged into Sarah Jenkins.");
  };

  // Delete individual contact
  const handleDeleteContact = (id, name) => {
    setContacts(prev => prev.filter(c => c.id !== id));
    toast.success(`${name} removed from CRM`);
  };

  // Filter & Sort Contacts
  const processedContacts = useMemo(() => {
    let result = [...contacts];

    // Search filter
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(
        c =>
          c.name.toLowerCase().includes(lower) ||
          c.email.toLowerCase().includes(lower) ||
          c.handle.toLowerCase().includes(lower)
      );
    }

    // Stage filter
    if (stageFilter !== "All") {
      result = result.filter(c => c.stage === stageFilter);
    }

    // Tag filter
    if (tagFilter !== "All") {
      result = result.filter(c => c.tags.includes(tagFilter));
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "score-desc") return b.score - a.score;
      if (sortBy === "score-asc") return a.score - b.score;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

    return result;
  }, [contacts, searchTerm, stageFilter, tagFilter, sortBy]);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] overflow-x-hidden text-slate-800">
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto w-full">
        {/* Top Header Section (Matches Screenshot Exactly) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              <HiMenu className="w-6 h-6 text-slate-600" />
            </button>
            <div>
              <h1 className="font-['ClashDisplay'] font-semibold text-3xl md:text-4xl text-[#000000] tracking-tight">
                Leads
              </h1>
              <p className="text-[#64748B] mt-1 text-sm md:text-base">
                Manage and track your captured leads
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Filter Toggle Button */}
            <button
              onClick={() => {
                // Clear filters on double click, or just toggle a toast
                setStageFilter("All");
                setTagFilter("All");
                setSearchTerm("");
                toast.info("Filters reset to default view.");
              }}
              className="flex items-center gap-2 border border-slate-200 bg-white text-slate-700 px-5 py-3 rounded-2xl text-sm font-semibold hover:bg-slate-50 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <HiFilter className="w-4 h-4 text-slate-500" />
              <span>Filter</span>
            </button>
            
            {/* Export CSV Button */}
            <button
              onClick={handleExport}
              className="flex items-center gap-2 bg-[#4C229E] text-white px-5 py-3 rounded-2xl text-sm font-semibold hover:bg-[#3b1980] transition-all cursor-pointer shadow-md active:scale-95"
            >
              <HiOutlineDownload className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Stats Grid (Matches Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-semibold text-slate-400 block mb-2">Total Leads</span>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">2,847</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-semibold text-slate-400 block mb-2">This Week</span>
            <p className="text-3xl font-bold text-slate-900 tracking-tight text-purple-700">284</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-semibold text-slate-400 block mb-2">Conversion Rate</span>
            <p className="text-3xl font-bold text-emerald-500 tracking-tight">23.5%</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-semibold text-slate-400 block mb-2">Total Value</span>
            <p className="text-3xl font-bold text-amber-500 tracking-tight">$45.2K</p>
          </div>
        </div>

        {/* Contacts CRM Subsection Header (Matches Screenshot) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font-['ClashDisplay']">Contacts CRM</h2>
            <p className="text-[#64748B] text-sm mt-0.5">
              Manage segments, track engagement, and score leads.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleWebhookSync}
              className="flex items-center gap-2 border border-slate-200 bg-white text-slate-700 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <HiOutlineRefresh className="w-4 h-4 text-slate-500" />
              <span>Webhook Sync</span>
            </button>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 bg-[#4C229E] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#3b1980] transition-all cursor-pointer shadow-md active:scale-95"
            >
              <HiOutlineDownload className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Duplicate Warning Box (Matches Screenshot) */}
        {!hasMerged && (
          <div className="bg-[#FFFDF5] border border-amber-200 rounded-2xl p-4 md:p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_2px_6px_rgba(245,158,11,0.03)]">
            <div className="flex items-start gap-3">
              <HiExclamationCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 text-[15px]">Duplicate Contacts Detected</h4>
                <p className="text-amber-700 text-xs mt-0.5">
                  We found 1 potential duplicate contact pairs based on email addresses.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowMergeModal(true)}
              className="bg-white hover:bg-amber-50 text-amber-900 font-bold px-4 py-2 rounded-xl border border-amber-200 text-xs shadow-sm transition-all shrink-0 active:scale-95 cursor-pointer"
            >
              Review & Merge
            </button>
          </div>
        )}

        {/* Search & Filter Bar (Matches Screenshot) */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-2 shadow-sm mb-6 flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Field */}
          <div className="relative flex-1">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, or handle..."
              className="w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none text-[15px] text-slate-700 placeholder-slate-400 bg-transparent"
            />
          </div>

          {/* Separator & Inline Actions */}
          <div className="hidden md:block w-px bg-slate-200 h-8 self-center" />

          <div className="flex items-center gap-2 px-2 flex-wrap">
            {/* Segments Toggle */}
            <button
              onClick={() => {
                setSortBy(sortBy === "name-asc" ? "score-desc" : "name-asc");
                toast.info(`Sorted by ${sortBy === "name-asc" ? "Score" : "Name"}`);
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
            >
              <HiFilter className="w-3.5 h-3.5 text-slate-500" />
              <span>Segments</span>
            </button>

            {/* Stage Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowStageDropdown(!showStageDropdown);
                  setShowTagDropdown(false);
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Stage: {stageFilter}</span>
                <HiChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
              {showStageDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-10 text-xs font-medium">
                  {["All", "Qualified", "Warm", "Cold", "Customer"].map(s => (
                    <button
                      key={s}
                      onClick={() => {
                        setStageFilter(s);
                        setShowStageDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tags Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowTagDropdown(!showTagDropdown);
                  setShowStageDropdown(false);
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Tags: {tagFilter}</span>
                <HiChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
              {showTagDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-10 text-xs font-medium">
                  <button
                    onClick={() => {
                      setTagFilter("All");
                      setShowTagDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700"
                  >
                    All Tags
                  </button>
                  {allTags.map(t => (
                    <button
                      key={t}
                      onClick={() => {
                        setTagFilter(t);
                        setShowTagDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider bg-slate-50/70">
                  <th className="py-4 px-6">Contact</th>
                  <th className="py-4 px-6 text-center">Lead Score</th>
                  <th className="py-4 px-6">Stage</th>
                  <th className="py-4 px-6">Tags</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {processedContacts.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-slate-400">
                      No contacts found matching criteria.
                    </td>
                  </tr>
                ) : (
                  processedContacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-slate-50/40 transition-colors">
                      {/* Contact Info */}
                      <td className="py-4 px-6">
                        <div 
                          className="flex items-center gap-3 cursor-pointer group/contact"
                          onClick={() => {
                            setSelectedContact(contact);
                            setIsDrawerOpen(true);
                          }}
                        >
                          <div className={`w-10 h-10 rounded-full ${contact.bgClass || "bg-slate-200"} flex items-center justify-center font-bold text-sm shadow-sm shrink-0 transition-transform group-hover/contact:scale-105`}>
                            {contact.initial}
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-[14px] group-hover/contact:text-[#4C229E] transition-colors">{contact.name}</h4>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-0.5 text-xs text-slate-400">
                              <span>{contact.handle}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{contact.email}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Lead Score Progress */}
                      <td className="py-4 px-6">
                        <div className="flex flex-col items-center justify-center w-full max-w-[120px] mx-auto">
                          <div className="flex items-center justify-between w-full text-xs font-semibold text-slate-600 mb-1">
                            <span>Score</span>
                            <span>{contact.score}</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                contact.score >= 80
                                  ? "bg-emerald-500"
                                  : contact.score >= 50
                                  ? "bg-amber-500"
                                  : "bg-rose-500"
                              }`}
                              style={{ width: `${contact.score}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Stage Pill */}
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${
                            contact.stage === "Qualified"
                              ? "bg-purple-50 text-purple-700 border-purple-200"
                              : contact.stage === "Warm"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : contact.stage === "Cold"
                              ? "bg-slate-50 text-slate-600 border-slate-200"
                              : "bg-emerald-50 text-emerald-700 border-emerald-200"
                          }`}
                        >
                          {contact.stage}
                        </span>
                      </td>

                      {/* Tags */}
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-1.5">
                          {contact.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium rounded text-[11px] transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleDeleteContact(contact.id, contact.name)}
                            title="Remove Contact"
                            className="p-2 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                          >
                            <HiOutlineTrash className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg transition-colors cursor-pointer">
                            <HiOutlineDotsVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 px-6 py-4 text-xs font-semibold text-slate-400 gap-4">
            <span>Showing {processedContacts.length} entries</span>
            <div className="flex items-center gap-2">
              <button
                disabled
                className="px-3.5 py-2 border border-slate-200 rounded-lg bg-slate-50 cursor-not-allowed opacity-50 font-semibold"
              >
                Previous
              </button>
              <button
                disabled
                className="px-3.5 py-2 border border-slate-200 rounded-lg bg-slate-50 cursor-not-allowed opacity-50 font-semibold"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Review & Merge Modal */}
      {showMergeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" onClick={() => setShowMergeModal(false)} />
          <div className="relative bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-['ClashDisplay']">Review & Merge Duplicate Contacts</h3>
            <p className="text-slate-500 text-sm mb-6">
              We identified duplicate records sharing the same email address. Choose to merge their properties into a single unified record.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Primary */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Primary Record
                </span>
                <h4 className="font-bold text-slate-800 text-[15px] mt-3">Sarah Jenkins</h4>
                <p className="text-xs text-slate-400 mt-0.5">@sarah.creates</p>
                <p className="text-xs text-slate-400 mt-0.5">sarah@example.com</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="px-1.5 py-0.5 bg-white border border-slate-200 text-slate-500 rounded text-[10px]">
                    Score: 85
                  </span>
                  <span className="px-1.5 py-0.5 bg-white border border-slate-200 text-slate-500 rounded text-[10px]">
                    Qualified
                  </span>
                  <span className="px-1.5 py-0.5 bg-white border border-slate-200 text-slate-500 rounded text-[10px]">
                    Creator
                  </span>
                </div>
              </div>

              {/* Duplicate */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                <span className="text-[10px] uppercase font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  Duplicate Record
                </span>
                <h4 className="font-bold text-slate-800 text-[15px] mt-3">S. Jenkins</h4>
                <p className="text-xs text-slate-400 mt-0.5">@sarah_creates_v2</p>
                <p className="text-xs text-slate-400 mt-0.5">sarah@example.com</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="px-1.5 py-0.5 bg-white border border-slate-200 text-slate-500 rounded text-[10px]">
                    Score: 15
                  </span>
                  <span className="px-1.5 py-0.5 bg-white border border-slate-200 text-slate-500 rounded text-[10px]">
                    Cold
                  </span>
                  <span className="px-1.5 py-0.5 bg-white border border-slate-200 text-slate-500 rounded text-[10px]">
                    Creator
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-xl p-3.5 text-xs flex gap-2.5 mb-6">
              <HiCheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
              <span>
                <strong>Merge Output:</strong> A single contact named <strong>Sarah Jenkins</strong> will be preserved. The new record will retain the handle <strong>@sarah.creates</strong>, lead score <strong>85</strong>, and tags will combine to include <strong>[Creator, Merged]</strong>.
              </span>
            </div>

            <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowMergeModal(false)}
                className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-semibold text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleMergeDuplicates}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm cursor-pointer"
              >
                Confirm Merge
              </button>
            </div>
          </div>
        </div>
      )}

      <ContactProfileDrawer
        contact={selectedContact}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onUpdateContact={handleUpdateContact}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default Leads;
