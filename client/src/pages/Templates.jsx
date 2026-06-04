import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  HiOutlineViewGrid,
  HiOutlineLightningBolt,
  HiOutlineMail,
  HiOutlineUserGroup,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineGift,
  HiOutlineCreditCard,
  HiOutlineCog,
  HiPlus,
  HiMenu,
  HiStar
} from "react-icons/hi";
import { FiCopy, FiTrash, FiX, FiSearch, FiEye } from "react-icons/fi";

const Templates = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ["All", "Onboarding", "Lead Gen", "Marketing", "Support", "Events", "Sales"];

  const templatesList = [
    {
      id: "welcome_dm",
      name: "Welcome DM Series",
      category: "Onboarding",
      description: "Automated welcome sequence for new followers",
      rating: "4.9",
      uses: "1,247",
      emoji: "📋",
      badgeColor: "bg-[#EEF2FF] text-[#6366F1]",
      headerBg: "bg-[#E0E7FF]/70",
      squareBg: "bg-[#C7D2FE]",
      preloadedTrigger: {
        id: "new_message",
        title: "New Message",
        description: "Trigger when a new DM is received.",
        gradient: "from-[#8E51FF] to-[#4F39F6]"
      },
      preloadedActions: [
        {
          id: "send_reply",
          title: "Send Reply",
          description: "Send a text or media reply.",
          gradient: "from-[#2B7FFF] to-[#00B8DB]",
          replyText: "Welcome to our page! Thanks for the follow. Here is a special gift code: WELCOME10 🎁"
        }
      ]
    },
    {
      id: "lead_magnet",
      name: "Lead Magnet Flow",
      category: "Lead Gen",
      description: "Collect emails with free resource offer",
      rating: "4.8",
      uses: "892",
      emoji: "📋",
      badgeColor: "bg-[#F3E8FF] text-[#A855F7]",
      headerBg: "bg-[#F3E8FF]/60",
      squareBg: "bg-[#E9D5FF]",
      preloadedTrigger: {
        id: "keyword_match",
        title: "Keyword Match",
        description: "Trigger on specific keywords.",
        gradient: "from-[#8E51FF] to-[#4F39F6]",
        keyword: "GUIDE"
      },
      preloadedActions: [
        {
          id: "send_reply",
          title: "Send Reply",
          description: "Send a text or media reply.",
          gradient: "from-[#2B7FFF] to-[#00B8DB]",
          replyText: "Awesome! Here is the download link for your free guide: linkroad.ai/guide-pdf 📚"
        }
      ]
    },
    {
      id: "product_launch",
      name: "Product Launch",
      category: "Marketing",
      description: "Build hype for new product releases",
      rating: "4.7",
      uses: "654",
      emoji: "📋",
      badgeColor: "bg-[#DCFCE7] text-[#22C55E]",
      headerBg: "bg-[#DCFCE7]/60",
      squareBg: "bg-[#BBF7D0]",
      preloadedTrigger: {
        id: "keyword_match",
        title: "Keyword Match",
        description: "Trigger on specific keywords.",
        gradient: "from-[#8E51FF] to-[#4F39F6]",
        keyword: "LAUNCH"
      },
      preloadedActions: [
        {
          id: "send_reply",
          title: "Send Reply",
          description: "Send a text or media reply.",
          gradient: "from-[#2B7FFF] to-[#00B8DB]",
          replyText: "You are on the VIP waitlist! We will notify you the second we launch. Stay tuned! 🔥"
        }
      ]
    },
    {
      id: "customer_support",
      name: "Customer Support",
      category: "Support",
      description: "Auto-respond to common questions",
      rating: "4.9",
      uses: "1,534",
      emoji: "📋",
      badgeColor: "bg-[#FEF3C7] text-[#F59E0B]",
      headerBg: "bg-[#FEF3C7]/60",
      squareBg: "bg-[#FDE68A]",
      preloadedTrigger: {
        id: "new_message",
        title: "New Message",
        description: "Trigger when a new DM is received.",
        gradient: "from-[#8E51FF] to-[#4F39F6]"
      },
      preloadedActions: [
        {
          id: "send_reply",
          title: "Send Reply",
          description: "Send a text or media reply.",
          gradient: "from-[#2B7FFF] to-[#00B8DB]",
          replyText: "Hey! Thanks for reaching out. Our support agent will be right with you. Check FAQs at linkroad.ai/faqs meanwhile!"
        }
      ]
    },
    {
      id: "event_registration",
      name: "Event Registration",
      category: "Events",
      description: "Automate webinar and event signups",
      rating: "4.6",
      uses: "423",
      emoji: "📋",
      badgeColor: "bg-[#FEE2E2] text-[#EF4444]",
      headerBg: "bg-[#FEE2E2]/60",
      squareBg: "bg-[#FECACA]",
      preloadedTrigger: {
        id: "keyword_match",
        title: "Keyword Match",
        description: "Trigger on specific keywords.",
        gradient: "from-[#8E51FF] to-[#4F39F6]",
        keyword: "WEBINAR"
      },
      preloadedActions: [
        {
          id: "send_reply",
          title: "Send Reply",
          description: "Send a text or media reply.",
          gradient: "from-[#2B7FFF] to-[#00B8DB]",
          replyText: "Awesome! You are registered for the event. Here is your join link: linkroad.ai/webinar-live 🎙️"
        }
      ]
    },
    {
      id: "flash_sale",
      name: "Flash Sale Alert",
      category: "Sales",
      description: "Notify followers about limited-time offers",
      rating: "4.8",
      uses: "789",
      emoji: "📋",
      badgeColor: "bg-[#E0E7FF] text-[#4F46E5]",
      headerBg: "bg-[#E0E7FF]/60",
      squareBg: "bg-[#C7D2FE]",
      preloadedTrigger: {
        id: "keyword_match",
        title: "Keyword Match",
        description: "Trigger on specific keywords.",
        gradient: "from-[#8E51FF] to-[#4F39F6]",
        keyword: "SALE"
      },
      preloadedActions: [
        {
          id: "send_reply",
          title: "Send Reply",
          description: "Send a text or media reply.",
          gradient: "from-[#2B7FFF] to-[#00B8DB]",
          replyText: "Use coupon code FLASH50 for 50% off all courses today only! Shop at linkroad.ai/shop 🛍️"
        }
      ]
    }
  ];

  const filteredTemplates = templatesList.filter(tpl => {
    const matchesSearch =
      tpl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tpl.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || tpl.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleUseTemplate = (tpl) => {
    navigate("/automations/builder", {
      state: {
        name: tpl.name,
        description: tpl.description,
        preloadedTrigger: tpl.preloadedTrigger,
        preloadedActions: tpl.preloadedActions
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full max-w-[1400px] mx-auto">
        {/* Top Header */}
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl border border-[#E2E8F0] hover:bg-gray-100 transition-colors"
          >
            <HiMenu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="font-bold text-3xl md:text-[34px] text-[#0F172A] tracking-tight">
            Template Library
          </h1>
        </div>
        <p className="text-[#64748B] text-sm md:text-[15px] mb-6">
          Pre-built workflows to get started faster
        </p>

        {/* Search Input */}
        <div className="relative mb-6 max-w-lg">
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F1F5F9] border border-transparent rounded-[16px] px-4 py-3 pl-11 text-sm focus:outline-none focus:bg-white focus:border-[#E2E8F0] transition-all"
          />
          <FiSearch className="absolute left-4 top-3.5 w-4.5 h-4.5 text-gray-400" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                selectedCategory === cat
                  ? "bg-[#4C229E] text-white shadow-sm"
                  : "bg-[#E2E8F0]/50 text-[#64748B] hover:text-[#0F172B] hover:bg-[#E2E8F0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length === 0 ? (
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-12 text-center shadow-sm">
            <p className="text-[#64748B] font-medium">No templates found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTemplates.map((tpl) => (
              <div
                key={tpl.id}
                className="bg-white border border-[#E2E8F0] rounded-[24px] p-5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[380px]"
              >
                <div>
                  {/* Top Image Box Placeholder container */}
                  <div className={`w-full h-32 rounded-[20px] ${tpl.headerBg} flex items-center justify-center mb-4 relative overflow-hidden`}>
                    <div className={`w-12 h-12 rounded-[14px] ${tpl.squareBg} flex items-center justify-center text-xl`}>
                      {tpl.emoji}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <span className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold mb-3 ${tpl.badgeColor}`}>
                    {tpl.category}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-[17px] font-bold text-[#0F172A] leading-tight">
                    {tpl.name}
                  </h3>
                  <p className="text-gray-500 text-[13px] mt-1.5 leading-relaxed min-h-[40px]">
                    {tpl.description}
                  </p>
                </div>

                {/* Rating Row & CTAs */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-4 text-sm font-medium">
                    <div className="flex items-center gap-1 text-[#0F172A]">
                      <HiStar className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>{tpl.rating}</span>
                    </div>
                    <div className="text-gray-400 text-xs">
                      {tpl.uses} uses
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Pink Use Template button */}
                    <button
                      onClick={() => handleUseTemplate(tpl)}
                      className="flex-1 py-3 bg-[#F754B4] hover:bg-[#e03e9c] active:scale-[0.98] text-white rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                    >
                      <FiCopy className="w-3.5 h-3.5" />
                      <span>Use Template</span>
                    </button>

                    {/* Preview eye button */}
                    <button
                      onClick={() => handleUseTemplate(tpl)}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] rounded-2xl flex items-center justify-center transition-all cursor-pointer text-gray-600"
                      title="Preview Template"
                    >
                      <FiEye className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Templates;
