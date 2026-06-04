import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  HiTrash,
  HiArrowRight,
  HiMenu,
} from "react-icons/hi";
import { FiZap, FiMessageSquare, FiInstagram, FiFacebook, FiClock, FiVideo, FiSave, FiX, FiMinus, FiSearch, FiMoreVertical } from "react-icons/fi";

const WorkflowBuilder = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve name/desc passed from modal
  const flowName = location.state?.name || "Untitled Automation";
  const flowDesc = location.state?.description || "Custom workflow automation template";

  // States for visual builder
  const [trigger, setTrigger] = useState(location.state?.preloadedTrigger || null);
  const [triggerKeyword, setTriggerKeyword] = useState(location.state?.preloadedTrigger?.keyword || "INFO");
  const [action, setAction] = useState(null);
  const [actionMessage, setActionMessage] = useState(
    "Hey! Thanks for commenting. Here is the link you requested: flowpilot.ai/info 🚀"
  );

  const [showActionModal, setShowActionModal] = useState(false);
  const [showTriggerDrawer, setShowTriggerDrawer] = useState(false);
  
  const [nodeSearch, setNodeSearch] = useState("");
  const [canvasNodes, setCanvasNodes] = useState(() => {
    if (location.state?.preloadedActions) {
      return location.state.preloadedActions.map((act, i) => ({
        ...act,
        canvasId: Date.now() + i
      }));
    }
    return [];
  });
  const [zoom, setZoom] = useState(100);

  // New states for Drag & Drop and Edit Node
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [activeDropdownNodeId, setActiveDropdownNodeId] = useState(null);
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingNode, setEditingNode] = useState(null);
  const [editNodeTitle, setEditNodeTitle] = useState("");
  const [editNodeDesc, setEditNodeDesc] = useState("");
  const [editNodeKeyword, setEditNodeKeyword] = useState("");
  const [editNodeReplyText, setEditNodeReplyText] = useState("");

  // Responsive layout states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNodeSidebar, setShowNodeSidebar] = useState(false);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleOutsideClick = () => {
      setActiveDropdownNodeId(null);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const getNodeCategory = (nodeId) => {
    if (nodeId === "keyword_match" || nodeId === "new_message") return "TRIGGER";
    if (nodeId === "condition_if" || nodeId === "ai_intent") return "LOGIC";
    if (nodeId === "send_reply" || nodeId === "add_tag") return "ACTION";
    return "NODE";
  };

  const handleOpenEditModal = (node) => {
    setEditingNode(node);
    setEditNodeTitle(node.title);
    setEditNodeDesc(node.description || "");
    setEditNodeKeyword(node.keyword || "");
    setEditNodeReplyText(node.replyText || "");
    setShowEditModal(true);
  };

  const handleSaveChanges = () => {
    if (!editingNode) return;
    setCanvasNodes(canvasNodes.map(n => {
      if (n.canvasId === editingNode.canvasId) {
        return {
          ...n,
          title: editNodeTitle,
          description: editNodeDesc,
          keyword: editNodeKeyword,
          replyText: editNodeReplyText
        };
      }
      return n;
    }));
    setShowEditModal(false);
    setEditingNode(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const nodeId = e.dataTransfer.getData("nodeId");
    if (!nodeId) return;

    let foundNode = null;
    for (const cat of builderSidebarNodes) {
      const match = cat.nodes.find(n => n.id === nodeId);
      if (match) {
        foundNode = match;
        break;
      }
    }

    if (foundNode) {
      const newNode = {
        ...foundNode,
        canvasId: Date.now(),
        keyword: foundNode.id === "keyword_match" ? "PROMO" : "",
        replyText: foundNode.id === "send_reply" ? "Hey! Here is your custom coupon code: LINK10 🏷️" : "",
        description: foundNode.description
      };
      setCanvasNodes(prev => [...prev, newNode]);
    }
  };

  const builderSidebarNodes = [
    {
      category: "Triggers",
      nodes: [
        {
          id: "keyword_match",
          title: "Keyword Match",
          description: "Trigger on specific keywords.",
          gradient: "from-[#8E51FF] to-[#4F39F6]",
          icon: <FiMessageSquare className="w-5 h-5 text-white" />
        },
        {
          id: "new_message",
          title: "New Message",
          description: "Trigger when a new DM is received.",
          gradient: "from-[#8E51FF] to-[#4F39F6]",
          icon: <FiZap className="w-5 h-5 text-white" />
        }
      ]
    },
    {
      category: "Logic",
      nodes: [
        {
          id: "condition_if",
          title: "Condition / IF",
          description: "Branch flow based on rules.",
          gradient: "from-[#FFB900] to-[#FF6900]",
          icon: <HiOutlineLightningBolt className="w-5 h-5 text-white" />
        },
        {
          id: "ai_intent",
          title: "AI Intent Filter",
          description: "Use AI to categorize messages.",
          gradient: "from-[#FFB900] to-[#FF6900]",
          icon: <FiZap className="w-5 h-5 text-white" />
        }
      ]
    },
    {
      category: "Actions",
      nodes: [
        {
          id: "send_reply",
          title: "Send Reply",
          description: "Send a text or media reply.",
          gradient: "from-[#2B7FFF] to-[#00B8DB]",
          icon: <FiMessageSquare className="w-5 h-5 text-white" />
        },
        {
          id: "add_tag",
          title: "Add Tag",
          description: "Apply a tag to the user profile.",
          gradient: "from-[#2B7FFF] to-[#00B8DB]",
          icon: <HiPlus className="w-5 h-5 text-white" />
        }
      ]
    }
  ];

  const triggerOptions = [
    {
      id: "comment_keyword",
      title: "Comment Keyword",
      description: "When someone comments with a keyword",
      icon: <FiMessageSquare className="w-6 h-6 text-[#6366F1]" />,
      iconBg: "rgba(99, 102, 241, 0.13)",
      borderColor: "border-t-[#6366F1]",
      badgeColor: "text-[#6366F1]",
    },
    {
      id: "story_reply",
      title: "Story Reply",
      description: "When someone replies to your story",
      icon: <FiClock className="w-6 h-6 text-[#8B5CF6]" />,
      iconBg: "rgba(139, 92, 246, 0.13)",
      borderColor: "border-t-[#8B5CF6]",
      badgeColor: "text-[#8B5CF6]",
    },
    {
      id: "reel_interaction",
      title: "Reel Interaction",
      description: "When someone engages with your reel",
      icon: <FiVideo className="w-6 h-6 text-[#22C55E]" />,
      iconBg: "rgba(34, 197, 94, 0.13)",
      borderColor: "border-t-[#22C55E]",
      badgeColor: "text-[#22C55E]",
    },
    {
      id: "dm_keyword",
      title: "DM Keyword",
      description: "When a DM contains specific words",
      icon: <FiZap className="w-6 h-6 text-[#F59E0B]" />,
      iconBg: "rgba(245, 158, 11, 0.13)",
      borderColor: "border-t-[#F59E0B]",
      badgeColor: "text-[#F59E0B]",
    },
  ];

  const actionOptions = [
    {
      id: "send_dm",
      title: "Send Instagram AutoDM",
      description: "Send a direct message automatically to the user",
      icon: <FiMessageSquare className="w-6 h-6 text-indigo-500" />,
    },
    {
      id: "send_facebook_msg",
      title: "Send Facebook Message",
      description: "Send an automatic reply via Messenger",
      icon: <FiMessageSquare className="w-6 h-6 text-sky-500" />,
    },
  ];

  const handleSelectAction = (option) => {
    setAction(option);
    setShowActionModal(false);
  };

  const handleSaveWorkflow = () => {
    // Save to localStorage so Automations.jsx can read it
    const stored = localStorage.getItem("custom_automations");
    let customList = stored ? JSON.parse(stored) : [];

    const newAuto = {
      id: Date.now(),
      name: flowName,
      description: flowDesc,
      status: "active",
      triggers: 0,
      conversions: 0,
      lastRun: "Just now",
      // Store trigger and action info
      triggerTitle: trigger ? trigger.title : null,
      triggerKeyword: trigger ? triggerKeyword : null,
      actionTitle: action ? action.title : null,
      actionMessage: action ? actionMessage : null,
    };

    customList.unshift(newAuto);
    localStorage.setItem("custom_automations", JSON.stringify(customList));

    navigate("/automations");
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* WORKFLOW CANVAS CONTAINER */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* TOP BAR */}
        <header className="h-[95px] border-b border-[#E2E8F0] bg-white px-4 md:px-8 flex items-center justify-between shrink-0">
          {/* Save/Publish Buttons on the Left */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-[#E2E8F0] hover:bg-gray-100 transition-colors mr-1"
            >
              <HiMenu className="w-5 h-5 text-gray-700" />
            </button>

            {trigger ? (
              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={() => {
                    alert("Workflow saved as template!");
                  }}
                  className="flex items-center gap-2 border border-[#F754B4] hover:border-black/20 text-[#F754B4] px-3.5 py-2 md:px-6 md:py-2.5 rounded-xl md:rounded-2xl font-semibold text-xs md:text-sm transition-all duration-200 cursor-pointer bg-white"
                >
                  <span className="hidden sm:inline">Save as Template</span>
                  <span className="sm:hidden">Template</span>
                </button>
                <button
                  onClick={handleSaveWorkflow}
                  className="flex items-center gap-2 bg-[#4C229E] hover:bg-[#3b1980] text-white px-3.5 py-2 md:px-6 md:py-2.5 rounded-xl md:rounded-2xl font-semibold text-xs md:text-sm transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span>Publish</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleSaveWorkflow}
                className="flex items-center gap-2 bg-[#F754B4] hover:bg-[#e03e9c] text-white px-3.5 py-2 md:px-6 md:py-2.5 rounded-xl md:rounded-2xl font-medium text-xs md:text-sm transition-all duration-200 shadow-lg cursor-pointer"
              >
                <FiSave className="w-4 h-4 md:w-5 md:h-5" />
                <span>Save</span>
              </button>
            )}
          </div>

          {/* Status Badge on the Right */}
          <div className="flex items-center gap-1.5 md:gap-2 bg-black/[0.05] border border-white/[0.1] px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium text-[#64748B]">
            <span className="hidden sm:inline">Status:</span>
            <span className="flex items-center gap-1.5 text-green-600 font-semibold">
              Draft
            </span>
          </div>
        </header>

        {/* VISUAL CANVAS CONTAINER */}
        {!trigger ? (
          <div
            className="flex-1 overflow-auto relative p-4 md:p-8 flex flex-col items-center justify-center bg-[#F8FAFC]"
            style={{
              backgroundImage: "radial-gradient(#E2E8F0 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            {/* INITIAL Figme design STATE - BUILD YOUR FIRST WORKFLOW */}
            <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 md:p-12 max-w-[700px] w-full text-center shadow-xl relative overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#8B5CF6]/10 to-transparent rounded-full" />
              <div className="w-16 h-16 bg-[#EEF2FF] rounded-[20px] flex items-center justify-center mx-auto mb-6">
                <FiZap className="w-8 h-8 text-[#4C229E]" />
              </div>
              <h2 className="font-['ClashDisplay'] font-semibold text-2xl md:text-3xl text-[#0F172A] mb-3">
                Build Your First Workflow
              </h2>
              <p className="text-[#64748B] text-sm md:text-[16px] max-w-[500px] mx-auto mb-8">
                Start by adding a trigger to automate your social engagement
              </p>

              <button
                onClick={() => setShowTriggerDrawer(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4C229E]/90 to-[#F754B4] hover:scale-[1.02] text-white px-6 py-3.5 md:px-8 md:py-4 rounded-[20px] font-semibold text-base md:text-lg transition-all duration-300 shadow-md cursor-pointer"
              >
                <HiPlus className="w-5 h-5" />
                <span>Add Trigger</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex overflow-hidden relative">
            {/* SIDEBAR FOR NODES */}
            {showNodeSidebar && (
              <div 
                className="fixed inset-0 z-30 bg-black/20 backdrop-blur-xs lg:hidden"
                onClick={() => setShowNodeSidebar(false)}
              />
            )}
            <aside className={`fixed inset-y-0 left-0 z-40 lg:relative lg:z-0 w-72 bg-white border-r border-[#E2E8F0] flex flex-col shrink-0 transition-transform duration-300 transform ${
              showNodeSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}>
              {/* Search Bar */}
              <div className="p-4 border-b border-[#E2E8F0]">
                <div className="flex items-center justify-between lg:hidden mb-2">
                  <span className="font-bold text-sm text-[#0F172B]">Nodes Selector</span>
                  <button 
                    onClick={() => setShowNodeSidebar(false)}
                    className="p-1 text-gray-500 hover:text-black rounded-lg hover:bg-gray-100"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search nodes..."
                    value={nodeSearch}
                    onChange={(e) => setNodeSearch(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none focus:border-[#4C229E] transition-all"
                  />
                  <FiSearch className="absolute left-3.5 top-3.5 w-4 h-4 text-[#64748B]" />
                </div>
              </div>

              {/* List of categories */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {builderSidebarNodes.map((cat) => {
                  const filteredNodes = cat.nodes.filter(n =>
                    n.title.toLowerCase().includes(nodeSearch.toLowerCase()) ||
                    n.description.toLowerCase().includes(nodeSearch.toLowerCase())
                  );
                  
                  if (filteredNodes.length === 0) return null;

                  return (
                    <div key={cat.category} className="space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] pl-2 font-['ClashDisplay']">
                        {cat.category}
                      </h3>
                      <div className="space-y-2">
                        {filteredNodes.map((node) => (
                          <button
                            key={node.id}
                            draggable="true"
                            onDragStart={(e) => {
                              e.dataTransfer.setData("nodeId", node.id);
                            }}
                            onClick={() => {
                              const newNode = {
                                ...node,
                                canvasId: Date.now(),
                                keyword: node.id === "keyword_match" ? "PROMO" : "",
                                replyText: node.id === "send_reply" ? "Hey! Here is your custom coupon code: LINK10 🏷️" : "",
                                description: node.description
                              };
                              setCanvasNodes([...canvasNodes, newNode]);
                              setShowNodeSidebar(false);
                            }}
                            className="w-full text-left bg-white border border-[#E2E8F0] hover:border-[#4C229E]/30 rounded-xl p-3 flex gap-3 hover:shadow-sm transition-all group cursor-pointer active:scale-[0.98]"
                          >
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-tr ${node.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                              {node.icon}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-sm text-[#0F172B] leading-tight">
                                {node.title}
                              </h4>
                              <p className="text-xs text-[#64748B] mt-0.5 leading-normal">
                                {node.description}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* RIGHT VISUAL CANVAS */}
            <div
              className={`flex-1 relative overflow-hidden flex flex-col justify-between transition-all duration-200 ${
                isDraggingOver ? "bg-[#EDE9FE]/40 border-2 border-dashed border-[#8E51FF]/50" : "bg-[#F8FAFC]"
              }`}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={() => setIsDraggingOver(true)}
              onDragLeave={() => setIsDraggingOver(false)}
              onDrop={handleDrop}
              style={{
                backgroundImage: "radial-gradient(#E2E8F0 1.2px, transparent 1.2px)",
                backgroundSize: "24px 24px",
                transform: `scale(${zoom / 100})`,
                transformOrigin: "center center",
              }}
            >
              {/* MOBILE TOGGLE FOR NODE SIDEBAR */}
              <button
                onClick={() => setShowNodeSidebar(true)}
                className="lg:hidden absolute top-4 left-4 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0F172B] font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md z-25 flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <HiPlus className="w-4 h-4 text-[#4C229E]" />
                <span>Show Nodes Panel</span>
              </button>
              {canvasNodes.length === 0 ? (
                /* EMPTY CANVAS STATE */
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-white/60 backdrop-blur-md border-2 border-dashed border-[#CAD5E2] rounded-2xl p-8 max-w-sm text-center shadow-lg animate-in zoom-in-95 duration-200">
                    <div className="w-14 h-14 bg-[#EEF2FF] border border-[#E0E7FF] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <FiZap className="w-6 h-6 text-[#615FFF]" />
                    </div>
                    <h3 className="font-['ClashDisplay'] font-semibold text-lg text-[#1D293D] mb-2">
                      Start your flow
                    </h3>
                    <p className="text-xs text-[#62748B] leading-relaxed">
                      Drag and drop a <strong>Trigger</strong> from the sidebar to the canvas to begin building your automation.
                    </p>
                  </div>
                </div>
              ) : (
                /* ACTIVE CANVAS NODES LIST */
                <div className="absolute inset-0 overflow-auto p-12 flex flex-col items-center gap-10">
                  <svg className="absolute inset-0 pointer-events-none w-full h-full z-0">
                    {canvasNodes.map((node, idx) => {
                      if (idx === canvasNodes.length - 1) return null;
                      return (
                        <g key={idx}>
                          <line
                            x1="50%"
                            y1={`${130 + idx * 240 + 100}px`}
                            x2="50%"
                            y2={`${130 + (idx + 1) * 240}px`}
                            stroke="#CAD5E2"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                          <polygon
                            points={`49.7%,${130 + (idx + 1) * 240 - 6} 50.3%,${130 + (idx + 1) * 240 - 6} 50%,${130 + (idx + 1) * 240}`}
                            fill="#CAD5E2"
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {canvasNodes.map((node, idx) => {
                    const category = getNodeCategory(node.id);
                    return (
                      <div
                        key={node.canvasId}
                        className="w-full max-w-sm bg-white border border-[#8E51FF] rounded-[24px] shadow-sm p-5 z-10 transition-all hover:shadow-md animate-in zoom-in-95 duration-200"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3.5">
                            <div className={`w-11 h-11 rounded-[16px] bg-gradient-to-tr ${node.gradient} flex items-center justify-center text-white shadow-sm`}>
                              {node.icon}
                            </div>
                            <div>
                              <span className="block text-[10px] font-bold text-[#8E9CB2] tracking-wider uppercase leading-none mb-1 font-['ClashDisplay']">
                                {category}
                              </span>
                              <h4 className="font-bold text-[16px] text-[#0F172B] leading-none">
                                {node.title}
                              </h4>
                            </div>
                          </div>
                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveDropdownNodeId(activeDropdownNodeId === node.canvasId ? null : node.canvasId);
                              }}
                              className="p-1.5 text-[#94A3B8] hover:text-black hover:bg-[#F1F5F9] rounded-lg transition-all cursor-pointer"
                            >
                              <FiMoreVertical className="w-5 h-5" />
                            </button>
                            
                            {activeDropdownNodeId === node.canvasId && (
                              <div className="absolute right-0 mt-1 w-36 bg-white border border-[#E2E8F0] rounded-xl shadow-lg py-1.5 z-30 animate-in fade-in slide-in-from-top-1 duration-100">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveDropdownNodeId(null);
                                    handleOpenEditModal(node);
                                  }}
                                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-[#0F172B] hover:bg-[#F8FAFC] flex items-center gap-2 cursor-pointer"
                                >
                                  Edit Node
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveDropdownNodeId(null);
                                    setCanvasNodes(canvasNodes.filter(n => n.canvasId !== node.canvasId));
                                  }}
                                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer"
                                >
                                  Delete Node
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Description Box */}
                        <div className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl p-4 text-xs text-[#475569] leading-relaxed">
                          {node.description || "No description configured."}
                        </div>

                        {/* Configured Badge */}
                        <div className="mt-3.5">
                          <span className="bg-[#EEF2FF] text-[#4F46E5] text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-[6px] uppercase font-['ClashDisplay']">
                            Configured
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* FLOATING CONTROLS */}
              <div className="absolute bottom-6 left-6 flex flex-col bg-white border border-[#EBEBEB] rounded-xl shadow-lg overflow-hidden z-20">
                <button
                  onClick={() => setZoom(Math.max(50, zoom - 10))}
                  className="w-8 h-8 flex items-center justify-center border-b border-[#EEEEEE] hover:bg-black/5 text-black transition-colors"
                  title="Zoom Out"
                >
                  <FiMinus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoom(Math.min(150, zoom + 10))}
                  className="w-8 h-8 flex items-center justify-center border-b border-[#EEEEEE] hover:bg-black/5 text-black transition-colors"
                  title="Zoom In"
                >
                  <HiPlus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoom(100)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-black/5 text-black transition-colors"
                  title="Reset Zoom"
                >
                  <FiX className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* FLOATING QUICK ADD PANEL */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md border border-[#E2E8F0] rounded-full px-5 py-2.5 flex items-center gap-4 shadow-lg z-20">
                <span className="text-xs font-semibold text-[#62748E]">Quick Add</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const node = builderSidebarNodes[0].nodes[0];
                      const newNode = {
                        ...node,
                        canvasId: Date.now(),
                        keyword: "PROMO",
                        replyText: ""
                      };
                      setCanvasNodes([...canvasNodes, newNode]);
                    }}
                    className="w-8 h-8 bg-[#EDE9FE] hover:bg-[#DDD6FE] rounded-full flex items-center justify-center transition-all cursor-pointer"
                    title="Add Trigger Match"
                  >
                    <FiZap className="w-3.5 h-3.5 text-[#7F22FE]" />
                  </button>
                  <button
                    onClick={() => {
                      const node = builderSidebarNodes[1].nodes[0];
                      const newNode = {
                        ...node,
                        canvasId: Date.now(),
                        keyword: "",
                        replyText: ""
                      };
                      setCanvasNodes([...canvasNodes, newNode]);
                    }}
                    className="w-8 h-8 bg-[#FFEDD4] hover:bg-[#FED7AA] rounded-full flex items-center justify-center transition-all cursor-pointer"
                    title="Add Logic IF"
                  >
                    <HiOutlineLightningBolt className="w-3.5 h-3.5 text-[#F54900]" />
                  </button>
                  <button
                    onClick={() => {
                      const node = builderSidebarNodes[2].nodes[0];
                      const newNode = {
                        ...node,
                        canvasId: Date.now(),
                        keyword: "",
                        replyText: "Hey! Here is your custom coupon code: LINK10 🏷️"
                      };
                      setCanvasNodes([...canvasNodes, newNode]);
                    }}
                    className="w-8 h-8 bg-[#DBEAFE] hover:bg-[#BFDBFE] rounded-full flex items-center justify-center transition-all cursor-pointer"
                    title="Add Send Reply"
                  >
                    <FiMessageSquare className="w-3.5 h-3.5 text-[#155DFC]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* EDIT TRIGGER POPUP MODAL (FIGMA 6916:4111) */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-[#E2E8F0] rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
              <h3 className="text-lg font-bold text-[#0F172B] font-['ClashDisplay']">
                Edit Node Configuration
              </h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-4">
              {/* Node Title */}
              <div>
                <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2 font-['ClashDisplay']">
                  Node Title
                </label>
                <input
                  type="text"
                  value={editNodeTitle}
                  onChange={(e) => setEditNodeTitle(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#4C229E] transition-all font-semibold"
                  placeholder="e.g. New Message"
                />
              </div>

              {/* Node Description */}
              <div>
                <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2 font-['ClashDisplay']">
                  Description
                </label>
                <textarea
                  value={editNodeDesc}
                  onChange={(e) => setEditNodeDesc(e.target.value)}
                  rows={3}
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#4C229E] transition-all resize-none"
                  placeholder="Enter description..."
                />
              </div>

              {/* Conditional options removed as requested */}
            </div>

            {/* Footer Buttons */}
            <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-end gap-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-5 py-2.5 rounded-xl border border-[#E2E8F0] hover:border-black/20 text-[#64748B] font-semibold text-sm hover:bg-white transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-5 py-2.5 bg-gradient-to-r from-[#4C229E] to-[#F754B4] hover:scale-[1.02] text-white rounded-xl font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ACTION SELECTION MODAL */}
      {showActionModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold font-['ClashDisplay']">Select Action</h2>
                <p className="text-sm text-[#64748B] mt-0.5">Choose what happens when the trigger fires</p>
              </div>
              <button
                onClick={() => setShowActionModal(false)}
                className="text-gray-400 hover:text-gray-600 font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {actionOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectAction(opt)}
                  className="text-left border border-[#E2E8F0] hover:border-[#4C229E]/50 rounded-2xl p-4 hover:bg-[#F8FAFC] transition-all flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="p-2 bg-[#F1F5F9] group-hover:bg-white rounded-xl shrink-0 transition-colors">
                    {opt.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f172a] text-sm group-hover:text-[#4C229E] transition-colors">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{opt.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TRIGGER SELECTION DRAWER */}
      {showTriggerDrawer && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end transition-opacity duration-300">
          <div className="absolute inset-0" onClick={() => setShowTriggerDrawer(false)} />
          
          <div className="relative h-full w-[384px] bg-white shadow-2xl z-10 flex flex-col rounded-l-[25px] border-l border-white/5 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0] shrink-0">
              <h2 className="text-xl font-semibold text-black">Add Trigger</h2>
              <button
                onClick={() => setShowTriggerDrawer(false)}
                className="w-8 h-8 rounded-2xl bg-black hover:bg-black/80 flex items-center justify-center text-white transition-all shadow-md"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {triggerOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setTrigger(opt);
                    setShowTriggerDrawer(false);
                  }}
                  className="w-full text-left border border-[#E2E8F0] hover:border-black/10 rounded-2xl p-4 bg-black/[0.05] hover:bg-black/[0.08] transition-all flex items-center gap-3 group cursor-pointer"
                >
                  <div
                    className="w-12 h-12 rounded-[20px] flex items-center justify-center shrink-0 transition-colors"
                    style={{ backgroundColor: opt.iconBg }}
                  >
                    {opt.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-black text-[18px] leading-tight">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-black/50 mt-1 leading-relaxed">
                      {opt.description}
                    </p>
                  </div>
                  
                  <HiArrowRight className="w-5 h-5 text-black/40 group-hover:text-black/70 group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkflowBuilder;
