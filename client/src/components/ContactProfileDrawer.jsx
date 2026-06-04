import React, { useState } from "react";
import { FiX, FiMail, FiPhone, FiTag, FiPlus, FiStar, FiFileText, FiActivity } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FiShoppingBag, FiLink, FiMessageCircle } from "react-icons/fi";

const ContactProfileDrawer = ({ contact, isOpen, onClose, onUpdateContact, onDeleteContact }) => {
  const [newTag, setNewTag] = useState("");
  const [noteText, setNoteText] = useState("");
  const [showAddTag, setShowAddTag] = useState(false);

  if (!contact) return null;

  // Mock score factors breakdown matching the Figma screen
  const scoreFactors = [
    { name: "Engagement Frequency", value: 30, text: "High (+30)", color: "bg-[#10B981]", max: 30 },
    { name: "Link Clicks", value: 25, text: "Active (+25)", color: "bg-[#10B981]", max: 30 },
    { name: "Reply Behavior", value: 15, text: "Moderate (+15)", color: "bg-[#F59E0B]", max: 30 },
    { name: "Purchase Actions", value: 0, text: "None (+0)", color: "bg-slate-200", max: 30 }
  ];

  // Activities list matching the screenshot
  const activities = [
    { id: 1, text: 'Purchased "Creator Blueprint"', date: "2 hours ago", icon: FiShoppingBag, iconBg: "bg-[#FAE8FF] text-[#D946EF]" },
    { id: 2, text: 'Clicked link in DM: "Waitlist Signup"', date: "1 day ago", icon: FiLink, iconBg: "bg-[#DBEAFE] text-[#3B82F6]" },
    { id: 3, text: 'Replied to Story: "Love this!"', date: "3 days ago", icon: FiMessageCircle, iconBg: "bg-[#DCFCE7] text-[#22C55E]" },
    { id: 4, text: 'Opted in via Reel Comment "GUIDE"', date: "1 week ago", icon: FiMail, iconBg: "bg-[#E0F2FE] text-[#0284C7]" }
  ];

  const handleStageChange = (newStage) => {
    onUpdateContact({ ...contact, stage: newStage });
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (!newTag.trim()) return;
    const cleanTag = newTag.trim();
    if (!contact.tags.includes(cleanTag)) {
      const updatedTags = [...contact.tags, cleanTag];
      onUpdateContact({ ...contact, tags: updatedTags });
    }
    setNewTag("");
    setShowAddTag(false);
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = contact.tags.filter(t => t !== tagToRemove);
    onUpdateContact({ ...contact, tags: updatedTags });
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    const newNote = {
      id: Date.now(),
      text: noteText.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    };
    const currentNotes = contact.notes || [];
    onUpdateContact({ ...contact, notes: [newNote, ...currentNotes] });
    setNoteText("");
  };

  const isDuplicateDetected = contact.name === "Sarah Jenkins";

  return (
    <div className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className={`relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-out border-l border-slate-100 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* TOP SECTION (HEADER) */}
        <div className="p-6 shrink-0 border-b border-slate-100 bg-white">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              {/* Avatar circle with purple border */}
              <div className="w-14 h-14 rounded-full border-2 border-[#8B5CF6] flex items-center justify-center font-semibold text-lg text-slate-800 bg-white shadow-sm shrink-0">
                {contact.initial}
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0F172B] leading-snug">{contact.name}</h2>
                <p className="text-sm text-[#64748B] font-medium">{contact.handle}</p>
              </div>
            </div>

            {/* Header buttons */}
            <div className="flex items-center gap-2">
              <button 
                title="Merge details"
                className="w-9 h-9 border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <HiOutlineSwitchHorizontal className="w-4 h-4" />
              </button>
              <button 
                onClick={onClose}
                className="w-9 h-9 border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick contact channels */}
          <div className="mt-4 space-y-1.5 text-xs text-[#475569] font-medium pl-1">
            <div className="flex items-center gap-2">
              <FiMail className="w-3.5 h-3.5 text-[#94A3B8]" />
              <a href={`mailto:${contact.email}`} className="hover:text-[#4C229E] transition-colors">{contact.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="w-3.5 h-3.5 text-[#94A3B8]" />
              <a href={`tel:${contact.phone || "+1 (555) 019-2834"}`} className="hover:text-[#4C229E] transition-colors">{contact.phone || "+1 (555) 019-2834"}</a>
            </div>
          </div>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 bg-white scrollbar-thin">
          
          {/* Merge Duplicate Contact (Golden box with dotted border) */}
          {isDuplicateDetected && (
            <div className="border border-dashed border-[#D97706] rounded-xl p-4 bg-[#FFFBEB] space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="text-[#D97706] text-lg font-bold shrink-0 mt-0.5">⇄</span>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-[#78350F]">Merge Duplicate Contact</h4>
                  <p className="text-[11px] text-[#B45309] leading-relaxed font-medium">
                    We found a similar contact. Merging will combine tags, notes, and activity history.
                  </p>
                </div>
              </div>

              {/* Sub-card inside the golden alert box */}
              <div className="bg-white border border-[#FEF3C7] rounded-xl p-3 flex items-center justify-between shadow-sm">
                <div>
                  <h5 className="text-xs font-bold text-[#1E293B]">S. Jenkins</h5>
                  <p className="text-[10px] text-[#64748B] font-medium">Same email address</p>
                </div>
                <button className="bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#78350F] font-bold px-3 py-1.5 rounded-lg text-[11px] transition-colors active:scale-95">
                  Merge Now
                </button>
              </div>
            </div>
          )}

          {/* LEAD SCORE */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <FiStar className="w-3.5 h-3.5 text-[#4C229E]" />
                <span>Lead Score</span>
              </div>
              <span className="text-sm font-bold text-[#4C229E] lowercase tracking-normal">{contact.score}/100</span>
            </div>

            {/* Score Factor Bars */}
            <div className="space-y-3 border border-slate-100 rounded-2xl p-4 bg-slate-50/20">
              {scoreFactors.map((factor, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#334155]">
                    <span>{factor.name}</span>
                    <span className="text-[11px] text-[#64748B]">{factor.text}</span>
                  </div>
                  <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${factor.color}`}
                      style={{ width: `${(factor.value / factor.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LEAD STAGE & TAGS Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Lead Stage Dropdown */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block">
                Lead Stage
              </label>
              <select
                value={contact.stage}
                onChange={(e) => handleStageChange(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#1E293B] bg-white focus:outline-none focus:ring-1 focus:ring-[#4C229E]"
              >
                <option value="Qualified">Qualified</option>
                <option value="Warm">Warm</option>
                <option value="Cold">Cold</option>
                <option value="Customer">Customer</option>
              </select>
            </div>

            {/* Tags section */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block">
                Tags
              </label>
              <div className="flex flex-wrap items-center gap-1.5">
                {contact.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#F1F5F9] text-[#475569] font-bold rounded-lg text-[10px]"
                  >
                    <FiTag className="w-3 h-3 text-[#94A3B8]" />
                    {tag}
                    <button 
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-rose-600 focus:outline-none"
                    >
                      <FiX className="w-2.5 h-2.5" />
                    </button>
                  </span>
                ))}
                
                {showAddTag ? (
                  <form onSubmit={handleAddTag} className="inline-block">
                    <input
                      type="text"
                      value={newTag}
                      autoFocus
                      onChange={(e) => setNewTag(e.target.value)}
                      onBlur={() => setShowAddTag(false)}
                      placeholder="Press Enter"
                      className="border border-slate-200 rounded-lg px-2 py-1 text-[10px] focus:outline-none w-20"
                    />
                  </form>
                ) : (
                  <button 
                    onClick={() => setShowAddTag(true)}
                    className="w-6 h-6 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-400 transition-colors"
                  >
                    <FiPlus className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* INTERNAL NOTES */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#64748B]">
              <FiFileText className="w-3.5 h-3.5 text-[#4C229E]" />
              <span>Internal Notes</span>
            </div>

            <form onSubmit={handleAddNote} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a note about this contact..."
                rows={3}
                className="w-full text-xs text-[#334155] border-0 p-3.5 focus:outline-none resize-none placeholder-slate-400"
              />
              <div className="flex justify-end p-2.5 border-t border-slate-100 bg-slate-50/50">
                <button
                  type="submit"
                  disabled={!noteText.trim()}
                  className="px-4 py-2 bg-[#4C229E] hover:bg-[#3b1980] disabled:bg-slate-200 text-white disabled:text-slate-400 font-bold text-xs rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  Save Note
                </button>
              </div>
            </form>

            {/* Note logs list */}
            {contact.notes && contact.notes.length > 0 && (
              <div className="space-y-2">
                {contact.notes.map(note => (
                  <div key={note.id} className="border border-slate-100 rounded-xl p-3 bg-slate-50/30 flex items-start justify-between gap-3 group">
                    <div>
                      <p className="text-xs text-[#475569] font-medium leading-relaxed">{note.text}</p>
                      <span className="text-[9px] text-[#94A3B8] block font-semibold mt-1">{note.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ACTIVITY HISTORY */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#64748B]">
              <FiActivity className="w-3.5 h-3.5 text-[#4C229E]" />
              <span>Activity History</span>
            </div>

            {/* Timeline matching image precisely */}
            <div className="relative border-l border-slate-100 ml-4 pl-6 space-y-4">
              {activities.map(act => {
                const IconComponent = act.icon;
                return (
                  <div key={act.id} className="relative">
                    {/* Circle timeline icon */}
                    <div className={`absolute -left-[35px] top-1.5 w-6 h-6 rounded-full border border-white flex items-center justify-center ${act.iconBg} shadow-sm shrink-0`}>
                      <IconComponent className="w-3 h-3" />
                    </div>

                    {/* timeline event card */}
                    <div className="border border-slate-100 rounded-2xl p-4 bg-white hover:shadow-sm transition-shadow">
                      <p className="text-xs font-bold text-[#1E293B]">{act.text}</p>
                      <span className="text-[10px] text-[#94A3B8] font-semibold block mt-1">{act.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactProfileDrawer;
