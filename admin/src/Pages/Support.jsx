import React, { useState } from "react";
import { 
  FiX, 
  FiMessageSquare, 
  FiUserPlus, 
  FiTrendingUp, 
  FiPaperclip, 
  FiLock,
  FiChevronDown
} from "react-icons/fi";

const initialTickets = [
  {
    id: "TK-921",
    title: "Account Access Issue",
    customer: "Marcus Chen",
    email: "marcus@influencerhub.io",
    handle: "@marcus_chen",
    status: "Open",
    priority: "High",
    tier: "Pro",
    description: "I'm unable to reconnect my Instagram account. It keeps showing a 401 error even after I've updated the token twice today...",
    initials: "MC"
  },
  {
    id: "TK-922",
    title: "Account Access Issue",
    customer: "Marcus Chen",
    email: "marcus@influencerhub.io",
    handle: "@marcus_chen",
    status: "Open",
    priority: "High",
    tier: "Pro",
    description: "I'm unable to reconnect my Instagram account. It keeps showing a 401 error even after I've updated the token twice today...",
    initials: "MC"
  },
  {
    id: "TK-923",
    title: "Account Access Issue",
    customer: "Marcus Chen",
    email: "marcus@influencerhub.io",
    handle: "@marcus_chen",
    status: "Open",
    priority: "Medium",
    tier: "Free",
    description: "I'm unable to reconnect my Instagram account. It keeps showing a 401 error even after I've updated the token twice today...",
    initials: "MC"
  }
];

function Support() {
  const [tickets, setTickets] = useState(initialTickets);
  const [selectedTicket, setSelectedTicket] = useState(null); 
  const [isJoined, setIsJoined] = useState(false); 
  const [replyText, setReplyText] = useState("");
  const [activeTab, setActiveTab] = useState("reply"); 
  const [impersonationEmail, setImpersonationEmail] = useState("");
  const [impersonationStatus, setImpersonationStatus] = useState("");
  const [messages, setMessages] = useState([]);

  const handleOpenDiscussion = (ticket) => {
    setSelectedTicket(ticket);
    setIsJoined(false); 
    setReplyText("");
    setMessages([
      {
        id: "m1",
        sender: "Priya Nair",
        initials: "PN",
        time: "09:02",
        text: "My DM sequence for the launch campaign paused at step 3 with no explanation and I lost 200 queued messages. This is a huge issue for me — we had a campaign going out today.",
        isInternal: false,
        isCustomer: true
      },
      {
        id: "m2",
        sender: "Sarah Jenkins",
        initials: "SJ",
        time: "09:07",
        text: "Internal note: Automation #A-4421 hit the global rate cap (500 DMs/hr). The queue drain is expected but the silent pause is a UX issue — filing a bug report simultaneously.",
        isInternal: true,
        isCustomer: false
      },
      {
        id: "m3",
        sender: "Priya Nair",
        initials: "PN",
        time: "09:09",
        text: "Is there any way to bypass this cap or get my queued messages back? Please help.",
        isInternal: false,
        isCustomer: true
      }
    ]);
  };

  const handleCloseDiscussion = () => {
    setSelectedTicket(null);
  };

  const handleJoin = () => {
    setIsJoined(true);
  };

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    const newMsg = {
      id: Date.now().toString(),
      sender: "Sarah Jenkins",
      initials: "SJ",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: replyText,
      isInternal: activeTab === "internal",
      isCustomer: false
    };
    setMessages([...messages, newMsg]);
    setReplyText("");
  };

  const handleStartImpersonation = (e) => {
    e.preventDefault();
    if (!impersonationEmail) return;
    setImpersonationStatus("Impersonating...");
    setTimeout(() => {
      setImpersonationStatus("");
      alert(`Logged in successfully as ${impersonationEmail}`);
    }, 1200);
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto p-8 flex flex-col gap-6">
      
      {/* Header row (spans across both columns) */}
      <div className="flex justify-between items-center w-full mb-2">
        <h1 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-[20px] leading-7 tracking-[0px] m-0">
          Active Support Tickets
        </h1>
        <button className="bg-[#4F39F6] w-[153px] h-[36px] gap-2 rounded-xl flex items-center justify-center font-['General_Sans',sans-serif] font-semibold text-xs text-white hover:bg-[#3B2AE0] transition-all duration-200 border-none cursor-pointer outline-none">
          New Internal Note
        </button>
      </div>

      {/* Two columns layout below the header */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_265px] gap-6 items-start">
        
        {/* LEFT COLUMN: Tickets list */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-6">
            {tickets.map((ticket) => (
              <div 
                key={ticket.id}
                className="shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E2E8F0] bg-white rounded-[24px] p-6 min-h-[194px] flex flex-col justify-between"
              >
                <div className="flex gap-4 items-start">
                  {/* Profile Avatar circle */}
                  <div className="w-10 h-10 rounded-[26843500px] flex items-center justify-center font-bold text-sm bg-[#F1F5F9] text-[#62748E] box-border">
                    
                  </div>

                  <div className="flex-1 flex flex-col gap-0.5">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-[16px] leading-6 tracking-[0px] m-0">
                        {ticket.title}
                      </h3>
                      <span className="font-['General_Sans',sans-serif] font-bold text-[10px] leading-[15px] px-2 py-0.5 rounded bg-[#FEF3C7] text-[#D97706] uppercase">
                        MEDIUM
                      </span>
                    </div>
                    <p className="text-[#62748E] font-['General_Sans',sans-serif] font-normal text-xs leading-4 tracking-[0px] m-0">
                      Ticket #{ticket.id} • Opened by {ticket.handle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#45556C] font-['General_Sans',sans-serif] font-normal text-xs leading-4 tracking-[0px] m-0 line-clamp-2 mt-2">
                  "{ticket.description}"
                </p>

                {/* Bottom footer row */}
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#F1F5F9]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#F1F5F9] text-[#62748E] font-semibold text-[10px] flex items-center justify-center border border-[#E2E8F0]">
                      SJ
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#F1F5F9] text-[#62748E] font-semibold text-[10px] flex items-center justify-center border border-[#E2E8F0]">
                      +1
                    </div>
                  </div>
                  <button 
                    className="bg-transparent border-none text-[#4F39F6] font-['General_Sans',sans-serif] font-bold text-sm leading-5 tracking-[0px] cursor-pointer hover:text-[#3B2AE0] outline-none"
                    onClick={() => handleOpenDiscussion(ticket)}
                  >
                    Join Discussion
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Performance card & Impersonation card */}
        <div className="w-[265px] flex flex-col gap-5">
          
          {/* Support Team Performance Card */}
          <div className="shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E2E8F0] bg-white rounded-[24px] p-6 h-[170px] flex flex-col justify-between">
            <h3 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-[14px] leading-5 tracking-[0px] m-0">
              Support Team Performance
            </h3>
            
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex justify-between items-center text-xs leading-4">
                <span className="text-[#62748E] font-['General_Sans',sans-serif] font-normal text-xs leading-4">Avg Response Time</span>
                <span className="text-[#0F172B] font-['General_Sans',sans-serif] font-bold text-xs leading-4">12 mins</span>
              </div>
              <div className="flex justify-between items-center text-xs leading-4">
                <span className="text-[#62748E] font-['General_Sans',sans-serif] font-normal text-xs leading-4">Resolution Rate</span>
                <span className="text-[#10B981] font-['General_Sans',sans-serif] font-bold text-xs leading-4">94%</span>
              </div>
              <div className="flex justify-between items-center text-xs leading-4">
                <span className="text-[#62748E] font-['General_Sans',sans-serif] font-normal text-xs leading-4">Active Agents</span>
                <span className="text-[#0F172B] font-['General_Sans',sans-serif] font-bold text-xs leading-4">4 / 6</span>
              </div>
            </div>
          </div>

          {/* Impersonation Mode Card */}
          <div className="bg-[#0F172B] rounded-[24px] p-6 h-[255px] flex flex-col justify-between text-white">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FiLock size={16} className="text-white" />
                <h3 className="font-['Clash_Display',sans-serif] font-semibold text-sm leading-5 tracking-[0px] m-0 text-white">
                  Impersonation Mode
                </h3>
              </div>
              <p className="text-gray-400 font-['General_Sans',sans-serif] font-normal text-[11px] leading-4 m-0">
                Login as a user to troubleshoot issues. All actions are logged and audited.
              </p>
            </div>

            <form onSubmit={handleStartImpersonation} className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter user email..."
                className="border-[0.8px] border-[#FFFFFF33] bg-[#FFFFFF1A] w-[214.67px] h-[33.58px] rounded-xl py-2 px-4 font-['General_Sans',sans-serif] text-xs text-white focus:outline-none placeholder-gray-400 box-border"
                value={impersonationEmail}
                onChange={(e) => setImpersonationEmail(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-[#4F39F6] w-[214.67px] h-[36px] gap-2 rounded-xl flex items-center justify-center font-['General_Sans',sans-serif] font-bold text-xs text-white border-none cursor-pointer hover:bg-[#3B2AE0] transition-colors"
              >
                {impersonationStatus || "Start Impersonation"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* DISCUSSION SLIDING PANEL */}
      {selectedTicket && (
        <div className="fixed inset-y-0 right-0 w-[540px] bg-white shadow-2xl z-[1100] flex flex-col border-l border-[#E2E8F0] box-border animate-slide-in">
          
          {/* Header */}
          <div className="p-6 border-b border-[#F1F5F9] flex items-start gap-4 justify-between">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-purple-100 text-purple-700">
                {selectedTicket.initials}
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-[17px] m-0 flex items-center gap-1.5">
                  {selectedTicket.title} 
                  <span className="text-gray-400 font-normal text-sm">#{selectedTicket.id}</span>
                </h2>
                <p className="text-[#62748E] font-['General_Sans',sans-serif] text-xs m-0">
                  {selectedTicket.customer} • {selectedTicket.email} • <span className="text-[#4F39F6] font-semibold">{selectedTicket.tier}</span>
                </p>
              </div>
            </div>
            <div className="text-[#62748E] cursor-pointer p-1 rounded-md hover:bg-[#F1F5F9] hover:text-[#0F172B] transition-all flex items-center justify-center" onClick={handleCloseDiscussion}>
              <FiX size={18} />
            </div>
          </div>

          {/* Badges / Options Row */}
          <div className="p-4 px-6 border-b border-[#F1F5F9] flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1 border border-blue-200 bg-blue-50 text-[#4F39F6] px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                Open
                <FiChevronDown size={12} />
              </div>
              <span className="border border-red-200 bg-red-50 text-red-600 px-2.5 py-1 rounded-full text-xs font-semibold">
                High Priority
              </span>
              <span className="bg-[#F1F5F9] text-[#62748E] px-2.5 py-1 rounded-full text-xs">
                # automation
              </span>
              <span className="bg-[#F1F5F9] text-[#62748E] px-2.5 py-1 rounded-full text-xs">
                # bug
              </span>
            </div>
            
            <div className="flex items-center gap-3 text-xs text-[#62748E] font-medium">
              <button className="flex items-center gap-1 bg-transparent border-none cursor-pointer hover:text-[#0F172B] outline-none">
                <FiUserPlus size={14} /> Assign
              </button>
              <button className="flex items-center gap-1 bg-transparent border-none cursor-pointer hover:text-[#0F172B] outline-none">
                <FiTrendingUp size={14} /> Escalate
              </button>
            </div>
          </div>

          {/* Status banner block */}
          {!isJoined && (
            <div className="m-6 mb-2 p-4 border border-blue-100 bg-blue-50/50 rounded-xl flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="p-2 bg-blue-100 text-[#4F39F6] rounded-lg">
                  <FiMessageSquare size={16} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#0F172B] m-0">You're viewing this discussion</h4>
                  <p className="font-['General_Sans',sans-serif] text-[10px] text-[#62748E] m-0">Join to send replies or internal notes</p>
                </div>
              </div>
              <button 
                onClick={handleJoin}
                className="bg-[#4F39F6] hover:bg-[#3B2AE0] text-white font-['General_Sans',sans-serif] font-bold text-xs py-1.5 px-4 rounded-xl border-none cursor-pointer transition-colors"
              >
                Join
              </button>
            </div>
          )}

          {/* Active Agents list */}
          {isJoined && (
            <div className="px-6 py-3 border-b border-[#F1F5F9] flex items-center gap-2 text-xs text-[#62748E]">
              <span>Active agents:</span>
              <div className="flex items-center gap-1">
                <span className="w-5 h-5 rounded-full bg-[#4F39F6] text-white font-bold text-[9px] flex items-center justify-center">SJ</span>
                <span className="w-5 h-5 rounded-full bg-[#EC4899] text-white font-bold text-[9px] flex items-center justify-center">AD</span>
              </div>
            </div>
          )}

          {/* Thread messages scroll area */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-[#F1F5F9]"></div>
              <span className="flex-shrink mx-4 text-gray-400 font-['General_Sans',sans-serif] text-[9px] uppercase tracking-wider">
                Thread • {messages.length} messages
              </span>
              <div className="flex-grow border-t border-[#F1F5F9]"></div>
            </div>

            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 items-start max-w-[85%] ${!msg.isCustomer ? "self-end flex-row-reverse" : ""}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${msg.isCustomer ? "bg-purple-100 text-purple-700" : "bg-indigo-100 text-indigo-700"}`}>
                  {msg.initials}
                </div>
                <div className={`flex flex-col gap-1 ${!msg.isCustomer ? "items-end" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs text-[#0F172B]">{msg.sender}</span>
                    {msg.isInternal && (
                      <span className="bg-[#FEF3C7] text-[#D97706] font-bold text-[9px] px-1 rounded">Internal</span>
                    )}
                    <span className="text-[10px] text-gray-400">{msg.time}</span>
                  </div>
                  <div className={`p-3 rounded-2xl text-xs leading-5 ${msg.isCustomer ? "bg-[#F1F5F9] text-[#314158] rounded-tl-none" : msg.isInternal ? "bg-[#FEF3C7]/40 border border-[#FEF3C7] text-[#D97706] rounded-tr-none" : "bg-[#4F39F6] text-white rounded-tr-none"}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Input area */}
          <div className="p-4 border-t border-[#F1F5F9] bg-[#FCFDFE]">
            <div className="flex gap-2 mb-3">
              <button 
                className={`py-1.5 px-3 rounded-xl text-xs font-semibold cursor-pointer border outline-none transition-all ${isJoined && activeTab === "reply" ? "bg-white text-[#4F39F6] border-[#E2E8F0] shadow-sm font-bold" : "bg-[#F1F5F9]/50 border-transparent text-[#62748E]"}`}
                onClick={() => setActiveTab("reply")}
                disabled={!isJoined}
              >
                Reply to Customer
              </button>
              <button 
                className={`py-1.5 px-3 rounded-xl text-xs font-semibold cursor-pointer border outline-none transition-all ${isJoined && activeTab === "internal" ? "bg-white text-[#4F39F6] border-[#E2E8F0] shadow-sm font-bold" : "bg-[#F1F5F9]/50 border-transparent text-[#62748E]"}`}
                onClick={() => setActiveTab("internal")}
                disabled={!isJoined}
              >
                Internal Note
              </button>
            </div>

            <div className="border border-[#E2E8F0] bg-white rounded-2xl p-3 flex flex-col gap-3">
              <textarea 
                rows={3}
                placeholder={isJoined ? (activeTab === "reply" ? "Type your reply to the customer..." : "Add an internal note...") : "Join the discussion to send messages..."}
                disabled={!isJoined}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="border-none w-full resize-none focus:outline-none font-['General_Sans',sans-serif] text-xs text-[#0F172B] placeholder-gray-400 disabled:bg-transparent"
              />
              <div className="flex justify-between items-center pt-2 border-t border-[#F8FAFC]">
                <div className="flex gap-2 text-gray-400">
                  <FiPaperclip size={14} className="cursor-pointer hover:text-gray-600" />
                  <span className="cursor-pointer hover:text-gray-600 font-semibold text-xs select-none">@</span>
                </div>
                <button 
                  onClick={handleSendReply}
                  disabled={!isJoined || !replyText.trim()}
                  className="bg-[#4F39F6] hover:bg-[#3B2AE0] text-white font-['General_Sans',sans-serif] font-semibold text-xs py-1.5 px-4 rounded-xl border-none cursor-pointer disabled:bg-[#F1F5F9] disabled:text-[#94A3B8] disabled:cursor-not-allowed transition-all"
                >
                  Send {activeTab === "reply" ? "Reply" : "Note"}
                </button>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}

export default Support;