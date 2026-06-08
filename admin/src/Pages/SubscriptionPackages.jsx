import React, { useState } from "react";
import {
  FiPlus,
  FiEdit3,
  FiCopy,
  FiTrash2,
  FiX,
  FiCheck,
  FiUsers,
  FiGift,
  FiZap,
  FiLayers,
  FiDollarSign,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

const initialPlans = [
  {
    id: "free",
    name: "Free",
    badgeLabel: "",
    tagline: "Get started at no cost",
    monthlyPrice: 0,
    annualPrice: 0,
    seats: 1,
    unlimitedSeats: false,
    trialDays: 0,
    colorTheme: "#94A3B8",
    visible: true,
    features: [
      {
        id: "1",
        text: "Connected accounts",
        enabled: true,
        value: "1 account",
      },
      { id: "2", text: "DM automations", enabled: true, value: "50 / month" },
      { id: "3", text: "AI lead scoring", enabled: false, value: "" },
      { id: "4", text: "Analytics dashboard", enabled: false, value: "" },
      { id: "5", text: "CRM integration", enabled: false, value: "" },
      { id: "6", text: "Priority support", enabled: false, value: "" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    badgeLabel: "Most Popular",
    tagline: "For serious creators & solopreneurs",
    monthlyPrice: 49,
    annualPrice: 39,
    seats: 1,
    unlimitedSeats: false,
    trialDays: 14,
    colorTheme: "#4F39F6",
    visible: true,
    features: [
      {
        id: "1",
        text: "Connected accounts",
        enabled: true,
        value: "5 accounts",
      },
      { id: "2", text: "DM automations", enabled: true, value: "Unlimited" },
      { id: "3", text: "AI lead scoring", enabled: true, value: "" },
      { id: "4", text: "Analytics dashboard", enabled: true, value: "" },
      { id: "5", text: "CRM integration", enabled: false, value: "" },
      { id: "6", text: "Priority support", enabled: false, value: "" },
    ],
  },
  {
    id: "business",
    name: "Business",
    badgeLabel: "",
    tagline: "For agencies & growing teams",
    monthlyPrice: 149,
    annualPrice: 119,
    seats: 5,
    unlimitedSeats: false,
    trialDays: 14,
    colorTheme: "#C084FC",
    visible: true,
    features: [
      {
        id: "1",
        text: "Connected accounts",
        enabled: true,
        value: "Unlimited",
      },
      { id: "2", text: "DM automations", enabled: true, value: "Unlimited" },
      { id: "3", text: "AI lead scoring", enabled: true, value: "" },
      { id: "4", text: "Analytics dashboard", enabled: true, value: "" },
      { id: "5", text: "CRM integration", enabled: false, value: "" },
      { id: "6", text: "Priority support", enabled: false, value: "" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badgeLabel: "",
    tagline: "Custom SLA & dedicated infrastructure",
    monthlyPrice: 499,
    annualPrice: 399,
    seats: 0,
    unlimitedSeats: true,
    trialDays: 0,
    colorTheme: "#FBBF24",
    visible: true,
    features: [
      {
        id: "1",
        text: "Connected accounts",
        enabled: true,
        value: "Unlimited",
      },
      { id: "2", text: "DM automations", enabled: true, value: "Unlimited" },
      { id: "3", text: "AI lead scoring", enabled: true, value: "" },
      { id: "4", text: "Analytics dashboard", enabled: true, value: "" },
      { id: "5", text: "CRM integration", enabled: true, value: "" },
      { id: "6", text: "Priority support", enabled: true, value: "" },
    ],
  },
];

const colorPalette = ["#94A3B8", "#4F39F6", "#C084FC", "#FBBF24"];

function SubscriptionPackages() {
  const [plans, setPlans] = useState(initialPlans);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);

  // Form states for creating plan
  const [createStartFrom, setCreateStartFrom] = useState("blank");
  const [createName, setCreateName] = useState("");
  const [createPrice, setCreatePrice] = useState(0);
  const [createColor, setCreateColor] = useState("#4F39F6");
  const [createTagline, setCreateTagline] = useState("");

  // Form states for editing plan
  const [editForm, setEditForm] = useState(null);
  const [newFeatureText, setNewFeatureText] = useState("");

  // Simulated publish feedback
  const [publishMessage, setPublishMessage] = useState("");

  // Compute summary stats dynamically
  const activePlansCount = plans.filter((p) => p.visible).length;
  const avgMonthlyPrice =
    plans.length > 0
      ? Math.round(
          plans.reduce((sum, p) => sum + Number(p.monthlyPrice), 0) /
            plans.length,
        )
      : 0;
  const totalUniqueFeatures = plans.reduce((acc, plan) => {
    plan.features.forEach((f) => {
      if (f.enabled && !acc.includes(f.text)) {
        acc.push(f.text);
      }
    });
    return acc;
  }, []).length;
  const plansWithTrialCount = plans.filter(
    (p) => Number(p.trialDays) > 0,
  ).length;

  const handlePublish = () => {
    setPublishMessage("Changes published successfully!");
    setTimeout(() => setPublishMessage(""), 3000);
  };

  const handleOpenEdit = (plan) => {
    setEditingPlan(plan);
    setEditForm({ ...plan, features: plan.features.map((f) => ({ ...f })) });
    setNewFeatureText("");
  };

  const handleCloseEdit = () => {
    setEditingPlan(null);
    setEditForm(null);
  };

  const handleSaveEdit = () => {
    setPlans(plans.map((p) => (p.id === editForm.id ? editForm : p)));
    handleCloseEdit();
  };

  const handleOpenCreate = () => {
    setIsCreateOpen(true);
    setCreateStartFrom("blank");
    setCreateName("");
    setCreatePrice(0);
    setCreateColor("#4F39F6");
    setCreateTagline("");
  };

  const handleCloseCreate = () => {
    setIsCreateOpen(false);
  };

  const handleStartFromChange = (type) => {
    setCreateStartFrom(type);
    if (type === "pro") {
      setCreateName("Pro Copy");
      setCreatePrice(49);
      setCreateColor("#4F39F6");
      setCreateTagline("For serious creators & solopreneurs");
    } else if (type === "business") {
      setCreateName("Business Copy");
      setCreatePrice(149);
      setCreateColor("#C084FC");
      setCreateTagline("For agencies & growing teams");
    } else {
      setCreateName("");
      setCreatePrice(0);
      setCreateColor("#94A3B8");
      setCreateTagline("");
    }
  };

  const handleCreatePlan = () => {
    if (!createName) return;

    let baseFeatures = [
      {
        id: "1",
        text: "Connected accounts",
        enabled: true,
        value: "1 account",
      },
      { id: "2", text: "DM automations", enabled: true, value: "50 / month" },
      { id: "3", text: "AI lead scoring", enabled: false, value: "" },
      { id: "4", text: "Analytics dashboard", enabled: false, value: "" },
      { id: "5", text: "CRM integration", enabled: false, value: "" },
      { id: "6", text: "Priority support", enabled: false, value: "" },
    ];

    if (createStartFrom === "pro") {
      baseFeatures = [
        {
          id: "1",
          text: "Connected accounts",
          enabled: true,
          value: "5 accounts",
        },
        { id: "2", text: "DM automations", enabled: true, value: "Unlimited" },
        { id: "3", text: "AI lead scoring", enabled: true, value: "" },
        { id: "4", text: "Analytics dashboard", enabled: true, value: "" },
        { id: "5", text: "CRM integration", enabled: false, value: "" },
        { id: "6", text: "Priority support", enabled: false, value: "" },
      ];
    } else if (createStartFrom === "business") {
      baseFeatures = [
        {
          id: "1",
          text: "Connected accounts",
          enabled: true,
          value: "Unlimited",
        },
        { id: "2", text: "DM automations", enabled: true, value: "Unlimited" },
        { id: "3", text: "AI lead scoring", enabled: true, value: "" },
        { id: "4", text: "Analytics dashboard", enabled: true, value: "" },
        { id: "5", text: "CRM integration", enabled: false, value: "" },
        { id: "6", text: "Priority support", enabled: false, value: "" },
      ];
    }

    const newPlan = {
      id: Date.now().toString(),
      name: createName,
      badgeLabel: "",
      tagline: createTagline,
      monthlyPrice: Number(createPrice),
      annualPrice: Math.round(Number(createPrice) * 0.8),
      seats: 1,
      unlimitedSeats: false,
      trialDays: 0,
      colorTheme: createColor,
      visible: true,
      features: baseFeatures,
    };

    setPlans([...plans, newPlan]);
    handleCloseCreate();
  };

  const handleClonePlan = (plan) => {
    const cloned = {
      ...plan,
      id: Date.now().toString(),
      name: `${plan.name} (Copy)`,
      badgeLabel: plan.badgeLabel ? `${plan.badgeLabel} (Copy)` : "",
      features: plan.features.map((f) => ({ ...f })),
    };
    setPlans([...plans, cloned]);
  };

  const handleDeletePlan = (id) => {
    if (confirm("Are you sure you want to delete this plan?")) {
      setPlans(plans.filter((p) => p.id !== id));
    }
  };

  const handleToggleVisibility = (id) => {
    setPlans(
      plans.map((p) => (p.id === id ? { ...p, visible: !p.visible } : p)),
    );
  };

  const handleEditFeatureToggle = (fid) => {
    setEditForm({
      ...editForm,
      features: editForm.features.map((f) =>
        f.id === fid ? { ...f, enabled: !f.enabled } : f,
      ),
    });
  };

  const handleEditFeatureText = (fid, text) => {
    setEditForm({
      ...editForm,
      features: editForm.features.map((f) =>
        f.id === fid ? { ...f, text } : f,
      ),
    });
  };

  const handleEditFeatureValue = (fid, value) => {
    setEditForm({
      ...editForm,
      features: editForm.features.map((f) =>
        f.id === fid ? { ...f, value } : f,
      ),
    });
  };

  const handleDeleteFeature = (fid) => {
    setEditForm({
      ...editForm,
      features: editForm.features.filter((f) => f.id !== fid),
    });
  };

  const handleAddFeature = () => {
    if (!newFeatureText) return;
    const newF = {
      id: Date.now().toString(),
      text: newFeatureText,
      enabled: true,
      value: "",
    };
    setEditForm({
      ...editForm,
      features: [...editForm.features, newF],
    });
    setNewFeatureText("");
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto p-7 relative">
      {/* Header section */}
      <div className="flex justify-between items-center mb-8 w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-2xl leading-8 tracking-[0px] m-0">
            Subscription Packages
          </h1>
          <p className="text-[#62748E] font-['General_Sans',sans-serif] font-normal text-sm leading-5 tracking-[0px] m-0">
            Configure plans, features, and pricing visible to customers
          </p>
        </div>
        <div className="flex gap-3 items-center">
          {publishMessage && (
            <span className="text-[#10B981] font-['General_Sans',sans-serif] text-sm font-semibold">
              {publishMessage}
            </span>
          )}
          <button
            className="w-[121.6px] h-[41.6px] border-[0.8px] border-[#E2E8F0] gap-2 py-2.5 px-4 rounded-xl flex items-center justify-center font-['General_Sans',sans-serif] font-semibold text-sm text-[#0F172B] bg-white hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all duration-200 cursor-pointer outline-none"
            onClick={handleOpenCreate}
          >
            <FiPlus size={16} />
            New Plan
          </button>
          <button
            className="shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] bg-[#4F39F6] w-[180px] h-[40px] gap-2 py-2.5 px-5 rounded-xl text-white font-['General_Sans',sans-serif] font-semibold text-sm flex items-center justify-center hover:bg-[#3B2AE0] transition-all duration-200 border-none cursor-pointer outline-none"
            onClick={handlePublish}
          >
            <LuSparkles size={16} />
            Publish Changes
          </button>
        </div>
      </div>

      {/* Stats summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] border-[0.8px] border-[#E2E8F0] bg-white h-[105.56px] rounded-2xl p-5 flex items-center gap-4 box-border">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#EEF2FF] text-[#4F39F6]">
            <FiLayers size={18} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-2xl leading-8 tracking-[0px] m-0">
              {activePlansCount}
            </h3>
            <p className="text-[#62748E] font-['General_Sans',sans-serif] font-medium text-xs leading-4 tracking-[0px] m-0 whitespace-nowrap">
              Active Plans
            </p>
          </div>
        </div>

        <div className="shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] border-[0.8px] border-[#E2E8F0] bg-white h-[105.56px] rounded-2xl p-5 flex items-center gap-4 box-border">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#DCFCE7] text-[#10B981]">
            <FiDollarSign size={18} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-2xl leading-8 tracking-[0px] m-0">
              ${avgMonthlyPrice}
            </h3>
            <p className="text-[#62748E] font-['General_Sans',sans-serif] font-medium text-xs leading-4 tracking-[0px] m-0 whitespace-nowrap">
              Avg Monthly Price
            </p>
          </div>
        </div>

        <div className="shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] border-[0.8px] border-[#E2E8F0] bg-white h-[105.56px] rounded-2xl p-5 flex items-center gap-4 box-border">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#F3E8FF] text-[#C084FC]">
            <FiZap size={18} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-2xl leading-8 tracking-[0px] m-0">
              {totalUniqueFeatures}
            </h3>
            <p className="text-[#62748E] font-['General_Sans',sans-serif] font-medium text-xs leading-4 tracking-[0px] m-0 whitespace-nowrap">
              Total Features
            </p>
          </div>
        </div>

        <div className="shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] border-[0.8px] border-[#E2E8F0] bg-white h-[105.56px] rounded-2xl p-5 flex items-center gap-4 box-border">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FEF3C7] text-[#FBBF24]">
            <FiGift size={18} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-2xl leading-8 tracking-[0px] m-0">
              {plansWithTrialCount}
            </h3>
            <p className="text-[#62748E] font-['General_Sans',sans-serif] font-medium text-xs leading-4 tracking-[0px] m-0 whitespace-nowrap">
              Plans with Trial
            </p>
          </div>
        </div>
      </div>

      {/* Plans List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {plans.map((plan) => {
          const visibleFeatures = plan.features.slice(0, 4);
          const hiddenFeaturesCount =
            plan.features.length - visibleFeatures.length;

          return (
            <div
              key={plan.id}
              className="shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] border-[1.6px] border-[#E2E8F0] bg-white rounded-[24px] p-6 min-h-[420px] flex flex-col justify-between relative transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0px_4px_12px_-2px_rgba(0,0,0,0.08),0px_2px_6px_-1px_rgba(0,0,0,0.06)]"
              style={{
                borderTop: `1.6px solid ${plan.colorTheme}`,
                opacity: plan.visible ? 1 : 0.65,
              }}
            >
              <div className="flex flex-col gap-1 relative">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[#314158] font-['General_Sans',sans-serif] font-bold text-lg leading-7 tracking-[0px] m-0">
                    {plan.name}
                  </h3>
                  {plan.badgeLabel && (
                    <span
                      className="font-['General_Sans',sans-serif] font-semibold text-[10px] px-2 py-0.5 rounded-xl"
                      style={{
                        background: `${plan.colorTheme}15`,
                        color: plan.colorTheme,
                      }}
                    >
                      {plan.badgeLabel}
                    </span>
                  )}
                </div>
                <p className="text-[#62748E] font-['General_Sans',sans-serif] font-normal text-xs leading-[16.5px] tracking-[0px] m-0">
                  {plan.tagline}
                </p>

                <div className="flex items-baseline gap-1 mt-3 mb-1">
                  <h2 className="text-[#0F172B] font-['Clash_Display',sans-serif] font-semibold text-[30px] leading-9 tracking-[0px] m-0">
                    {plan.monthlyPrice === 0 ? "Free" : `$${plan.monthlyPrice}`}
                  </h2>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-[#62748E] font-['General_Sans',sans-serif] font-normal text-xs">
                      /mo
                    </span>
                  )}
                </div>

                {plan.monthlyPrice > 0 && (
                  <p className="text-[#10B981] font-['General_Sans',sans-serif] font-semibold text-[11px] m-0 mb-2.5">
                    ${plan.annualPrice}/mo billed annually
                  </p>
                )}

                <div className="flex items-center gap-3 mb-4 text-[#62748E] font-['General_Sans',sans-serif] font-medium text-[11px]">
                  <div className="flex items-center gap-1">
                    <FiUsers size={12} />
                    <span>
                      {plan.unlimitedSeats
                        ? "Unlimited seats"
                        : `${plan.seats} ${plan.seats === 1 ? "seat" : "seats"}`}
                    </span>
                  </div>
                  {Number(plan.trialDays) > 0 && (
                    <div
                      className="flex items-center gap-1"
                      style={{ color: plan.colorTheme }}
                    >
                      <FiGift size={12} />
                      <span>{plan.trialDays}-day trial</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Features list */}
              <div className="flex flex-col gap-2 flex-grow mb-4">
                {visibleFeatures.map((f) => (
                  <div
                    key={f.id}
                    className="flex items-center justify-between gap-2 font-['General_Sans',sans-serif] text-xs leading-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center">
                        {f.enabled ? (
                          <FiCheck
                            size={14}
                            style={{ color: plan.colorTheme }}
                          />
                        ) : (
                          <span className="text-[#94A3B8] font-bold text-[11px] w-3.5 text-center inline-block">
                            ×
                          </span>
                        )}
                      </span>
                      <span
                        className={`text-[#45556C] font-normal ${!f.enabled ? "text-[#94A3B8] line-through" : ""}`}
                      >
                        {f.text}
                      </span>
                    </div>
                    {f.enabled && f.value && (
                      <span className="text-[#62748E] font-medium">
                        {f.value}
                      </span>
                    )}
                  </div>
                ))}
                {hiddenFeaturesCount > 0 && (
                  <p className="font-['General_Sans',sans-serif] text-[11px] text-[#94A3B8] mt-0.5">
                    +{hiddenFeaturesCount} more features
                  </p>
                )}
              </div>

              {/* Footer edit plan row */}
              <div className="flex items-center justify-between gap-3 pt-3.5 border-t border-[#F1F5F9] mt-auto">
                <button
                  className="bg-[#0F172B] flex-1 h-[32px] rounded-xl flex items-center justify-center gap-1.5 py-2 hover:bg-[#1E293B] transition-colors duration-200 border-none cursor-pointer outline-none"
                  onClick={() => handleOpenEdit(plan)}
                >
                  <span className="text-white font-['General_Sans',sans-serif] font-bold text-xs leading-4 text-center flex items-center">
                    <FiEdit3 size={12} style={{ marginRight: "4px" }} />
                    Edit Plan
                  </span>
                </button>

                <div className="flex items-center gap-2.5">
                  <div
                    className="text-[#62748E] cursor-pointer flex items-center justify-center p-1 rounded hover:text-[#0F172B] hover:bg-[#F1F5F9] transition-all duration-200"
                    title={plan.visible ? "Hide plan" : "Show plan"}
                    onClick={() => handleToggleVisibility(plan.id)}
                  >
                    {plan.visible ? (
                      <FiEye size={15} />
                    ) : (
                      <FiEyeOff size={15} className="text-[#EF4444]" />
                    )}
                  </div>
                  <div
                    className="text-[#62748E] cursor-pointer flex items-center justify-center p-1 rounded hover:text-[#0F172B] hover:bg-[#F1F5F9] transition-all duration-200"
                    title="Clone Plan"
                    onClick={() => handleClonePlan(plan)}
                  >
                    <FiCopy size={15} />
                  </div>
                  <div
                    className="text-[#62748E] cursor-pointer flex items-center justify-center p-1 rounded hover:text-[#EF4444] hover:bg-[#FEF2F2] transition-all duration-200"
                    title="Delete Plan"
                    onClick={() => handleDeletePlan(plan.id)}
                  >
                    <FiTrash2 size={15} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Add New Plan card */}
        <div
          className="border-[1.6px] border-dashed border-[#E2E8F0] bg-white min-h-[320px] rounded-[24px] p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-[#90A1B9] hover:bg-[#F8FAFC] transition-all duration-200"
          onClick={handleOpenCreate}
        >
          <div className="border-[1.6px] border-dashed border-[#90A1B9] w-[48px] h-[48px] rounded-2xl flex items-center justify-center box-border">
            <FiPlus size={20} className="text-[#90A1B9]" />
          </div>
          <h4 className="text-[#90A1B9] font-['General_Sans',sans-serif] font-bold text-sm leading-5 text-center m-0">
            Add New Plan
          </h4>
        </div>
      </div>

      {/* CREATE NEW PLAN MODAL */}
      {isCreateOpen && (
        <div className="fixed inset-0 bg-[#0F172B]/40 backdrop-blur-md flex items-center justify-center z-[1000]">
          <div className="bg-white rounded-[24px] shadow-2xl w-full max-h-[90vh] flex flex-col overflow-hidden max-w-[540px] box-border">
            <div className="p-6 border-b border-[#F1F5F9] flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-['Clash_Display',sans-serif] font-semibold text-xl text-[#0F172B]">
                Create New Plan
              </h2>
              <div
                className="text-[#62748E] cursor-pointer flex items-center justify-center p-1 rounded-md hover:bg-[#F1F5F9] hover:text-[#0F172B] transition-all"
                onClick={handleCloseCreate}
              >
                <FiX size={18} />
              </div>
            </div>

            <div className="p-6 overflow-y-auto flex-grow flex flex-col gap-5">
              {/* Start From */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                  Start from
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <div
                    className={`border-[1.6px] border-[#E2E8F0] bg-white rounded-2xl p-4 cursor-pointer text-left hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-all ${createStartFrom === "blank" ? "border-[#4F39F6] bg-[#EEF2FF]" : ""}`}
                    onClick={() => handleStartFromChange("blank")}
                  >
                    <h4 className="font-['General_Sans',sans-serif] font-bold text-xs text-[#0F172B] mb-0.5">
                      Blank
                    </h4>
                    <p className="font-['General_Sans',sans-serif] text-[10px] text-[#62748E]">
                      From scratch
                    </p>
                  </div>
                  <div
                    className={`border-[1.6px] border-[#E2E8F0] bg-white rounded-2xl p-4 cursor-pointer text-left hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-all ${createStartFrom === "pro" ? "border-[#4F39F6] bg-[#EEF2FF]" : ""}`}
                    onClick={() => handleStartFromChange("pro")}
                  >
                    <h4 className="font-['General_Sans',sans-serif] font-bold text-xs text-[#0F172B] mb-0.5">
                      Pro template
                    </h4>
                    <p className="font-['General_Sans',sans-serif] text-[10px] text-[#62748E]">
                      Copy Pro features
                    </p>
                  </div>
                  <div
                    className={`border-[1.6px] border-[#E2E8F0] bg-white rounded-2xl p-4 cursor-pointer text-left hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-all ${createStartFrom === "business" ? "border-[#4F39F6] bg-[#EEF2FF]" : ""}`}
                    onClick={() => handleStartFromChange("business")}
                  >
                    <h4 className="font-['General_Sans',sans-serif] font-bold text-xs text-[#0F172B] mb-0.5">
                      Business
                    </h4>
                    <p className="font-['General_Sans',sans-serif] text-[10px] text-[#62748E]">
                      Copy Business
                    </p>
                  </div>
                </div>
              </div>

              {/* Plan Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                  Plan Name *
                </label>
                <input
                  type="text"
                  className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                  placeholder="e.g. Starter, Growth, Elite..."
                  value={createName}
                  onChange={(e) => setCreateName(e.target.value)}
                />
              </div>

              {/* Price & Color */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                    Monthly Price ($)
                  </label>
                  <input
                    type="number"
                    className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                    placeholder="$ 0"
                    value={createPrice}
                    onChange={(e) =>
                      setCreatePrice(Math.max(0, Number(e.target.value)))
                    }
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                    Color
                  </label>
                  <div className="flex gap-3 items-center h-full">
                    {colorPalette.map((color) => (
                      <div
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer border-2 border-transparent transition-all hover:scale-110 ${createColor === color ? "border-[#0F172B] shadow-[0_0_0_2px_#FFF_inset]" : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setCreateColor(color)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                  Tagline
                </label>
                <input
                  type="text"
                  className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                  placeholder="One-line description shown on pricing page"
                  value={createTagline}
                  onChange={(e) => setCreateTagline(e.target.value)}
                />
              </div>
            </div>

            <div className="p-[18px_24px] border-t border-[#F1F5F9] flex items-center justify-between bg-[#FCFDFE]">
              <span className="font-['General_Sans',sans-serif] text-xs text-[#94A3B8]">
                Plan will be hidden until you publish it
              </span>
              <div className="flex gap-3 items-center">
                <button
                  className="bg-transparent border-none text-[#62748E] font-['General_Sans',sans-serif] font-semibold text-sm cursor-pointer py-2 px-4 rounded-lg hover:text-[#0F172B] hover:bg-[#F1F5F9] transition-all"
                  onClick={handleCloseCreate}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#4F39F6] w-[120.11px] h-[36px] rounded-xl flex items-center justify-center border-none text-white font-['General_Sans',sans-serif] font-bold text-sm leading-5 text-center cursor-pointer transition-all disabled:opacity-40 enabled:opacity-100 enabled:hover:bg-[#3B2AE0] disabled:cursor-not-allowed"
                  onClick={handleCreatePlan}
                  disabled={!createName}
                >
                  Create Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDIT PLAN MODAL */}
      {editingPlan && editForm && (
        <div className="fixed inset-0 bg-[#0F172B]/40 backdrop-blur-md flex items-center justify-center z-[1000]">
          <div className="bg-white rounded-[24px] shadow-2xl w-full max-h-[90vh] flex flex-col overflow-hidden max-w-[620px] box-border">
            <div className="p-6 border-b border-[#F1F5F9] flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-['Clash_Display',sans-serif] font-semibold text-xl text-[#0F172B]">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: editForm.colorTheme }}
                ></span>
                Editing — {editingPlan.name}
              </h2>
              <div
                className="text-[#62748E] cursor-pointer flex items-center justify-center p-1 rounded-md hover:bg-[#F1F5F9] hover:text-[#0F172B] transition-all"
                onClick={handleCloseEdit}
              >
                <FiX size={18} />
              </div>
            </div>

            <div className="p-6 overflow-y-auto flex-grow flex flex-col gap-5">
              {/* SECTION: IDENTITY */}
              <h4 className="font-['General_Sans',sans-serif] font-bold text-[11px] tracking-wider text-[#94A3B8] uppercase mt-2 mb-0.5">
                Identity
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                    Plan Name
                  </label>
                  <input
                    type="text"
                    className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                    Badge Label{" "}
                    <span className="font-normal text-[#94A3B8] ml-1">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                    placeholder="e.g. Most Popular"
                    value={editForm.badgeLabel || ""}
                    onChange={(e) =>
                      setEditForm({ ...editForm, badgeLabel: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                  Tagline
                </label>
                <input
                  type="text"
                  className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                  value={editForm.tagline}
                  onChange={(e) =>
                    setEditForm({ ...editForm, tagline: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                  Color Theme
                </label>
                <div className="flex gap-3 items-center">
                  {colorPalette.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full cursor-pointer border-2 border-transparent transition-all hover:scale-110 ${editForm.colorTheme === color ? "border-[#0F172B] shadow-[0_0_0_2px_#FFF_inset]" : ""}`}
                      style={{ backgroundColor: color }}
                      onClick={() =>
                        setEditForm({ ...editForm, colorTheme: color })
                      }
                    />
                  ))}
                </div>
              </div>

              {/* SECTION: PRICING */}
              <h4 className="font-['General_Sans',sans-serif] font-bold text-[11px] tracking-wider text-[#94A3B8] uppercase mt-2 mb-0.5">
                Pricing
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                    Monthly Price ($)
                  </label>
                  <input
                    type="number"
                    className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                    value={editForm.monthlyPrice}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        monthlyPrice: Math.max(0, Number(e.target.value)),
                      })
                    }
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                    Annual Price ($){" "}
                    <span className="font-normal text-[#94A3B8] ml-1">
                      per month
                    </span>
                  </label>
                  <input
                    type="number"
                    className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                    value={editForm.annualPrice}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        annualPrice: Math.max(0, Number(e.target.value)),
                      })
                    }
                  />
                </div>
              </div>

              {/* SECTION: LIMITS & TRIAL */}
              <h4 className="font-['General_Sans',sans-serif] font-bold text-[11px] tracking-wider text-[#94A3B8] uppercase mt-2 mb-0.5">
                Limits & Trial
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                    Seats
                  </label>
                  <div className="grid grid-cols-[2fr_1fr] gap-3 items-end">
                    <input
                      type="number"
                      className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all disabled:bg-[#F8FAFC] disabled:cursor-not-allowed"
                      value={editForm.unlimitedSeats ? "" : editForm.seats}
                      disabled={editForm.unlimitedSeats}
                      placeholder={editForm.unlimitedSeats ? "∞" : "1"}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          seats: Math.max(0, Number(e.target.value)),
                        })
                      }
                    />
                    <button
                      type="button"
                      className={`h-[41.6px] border border-[#E2E8F0] bg-white font-['General_Sans',sans-serif] font-semibold text-xs text-[#62748E] py-2 px-3 rounded-xl cursor-pointer flex items-center justify-center gap-1.5 transition-all outline-none ${editForm.unlimitedSeats ? "border-[#4F39F6] bg-[#EEF2FF] text-[#4F39F6]" : ""}`}
                      onClick={() =>
                        setEditForm({
                          ...editForm,
                          unlimitedSeats: !editForm.unlimitedSeats,
                        })
                      }
                    >
                      ∞ Unlimited
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-['General_Sans',sans-serif] font-semibold text-xs text-[#314158]">
                    Trial Days{" "}
                    <span className="font-normal text-[#94A3B8] ml-1">
                      (0 = no trial)
                    </span>
                  </label>
                  <input
                    type="number"
                    className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                    value={editForm.trialDays}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        trialDays: Math.max(0, Number(e.target.value)),
                      })
                    }
                  />
                </div>
              </div>

              {/* SECTION: FEATURES */}
              <div className="flex justify-between items-baseline">
                <h4 className="font-['General_Sans',sans-serif] font-bold text-[11px] tracking-wider text-[#94A3B8] uppercase mt-2 mb-0.5">
                  Features
                </h4>
                <span className="text-xs text-[#94A3B8] font-semibold">
                  {editForm.features.filter((f) => f.enabled).length} included
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {editForm.features.map((f) => (
                  <div
                    key={f.id}
                    className={`flex items-center gap-3 p-[10px_14px] border border-[#E2E8F0] rounded-xl bg-white transition-all ${!f.enabled ? "bg-[#F8FAFC] opacity-75" : ""}`}
                  >
                    <div className="flex items-center">
                      <label className="relative inline-block w-11 h-6 cursor-pointer">
                        <input
                          type="checkbox"
                          className="opacity-0 w-0 h-0 peer"
                          checked={f.enabled}
                          onChange={() => handleEditFeatureToggle(f.id)}
                        />
                        <span className="absolute inset-0 bg-[#E2E8F0] rounded-3xl transition-all duration-300 peer-checked:bg-[#4F39F6] after:content-[''] after:absolute after:h-4.5 after:w-4.5 after:left-[3px] after:bottom-[3px] after:bg-white after:rounded-full after:transition-all after:duration-300 after:shadow peer-checked:after:translate-x-5"></span>
                      </label>
                    </div>

                    <input
                      type="text"
                      className={`flex-grow border-none font-['General_Sans',sans-serif] text-[13px] font-medium text-[#45556C] bg-transparent p-0 focus:outline-none ${!f.enabled ? "text-[#94A3B8] line-through" : ""}`}
                      value={f.text}
                      disabled={!f.enabled}
                      onChange={(e) =>
                        handleEditFeatureText(f.id, e.target.value)
                      }
                    />

                    {f.enabled && (
                      <input
                        type="text"
                        className="border border-[#E2E8F0] rounded-lg py-1 px-2 font-['General_Sans',sans-serif] text-xs text-[#0F172B] w-[100px] text-right bg-[#FCFDFE] focus:outline-none focus:border-[#4F39F6]"
                        placeholder="e.g. 1 account"
                        value={f.value || ""}
                        onChange={(e) =>
                          handleEditFeatureValue(f.id, e.target.value)
                        }
                      />
                    )}

                    <div
                      className="text-[#94A3B8] cursor-pointer flex items-center justify-center p-0.5 rounded hover:text-[#EF4444] hover:bg-[#FEF2F2] transition-all"
                      onClick={() => handleDeleteFeature(f.id)}
                    >
                      <FiX size={14} />
                    </div>
                  </div>
                ))}

                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    className="border border-[#E2E8F0] rounded-xl py-2.5 px-3.5 font-['General_Sans',sans-serif] text-sm text-[#0F172B] bg-white w-full focus:outline-none focus:border-[#4F39F6] focus:ring-4 focus:ring-[#4F39F6]/10 transition-all"
                    placeholder="Add a feature line..."
                    value={newFeatureText}
                    onChange={(e) => setNewFeatureText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddFeature()}
                  />
                  <button
                    className="bg-[#C084FC] hover:bg-[#A855F7] text-white font-['General_Sans',sans-serif] font-semibold text-xs py-2 px-4 rounded-lg border-none cursor-pointer flex items-center gap-1 transition-all outline-none"
                    type="button"
                    onClick={handleAddFeature}
                  >
                    <FiPlus size={14} />
                    Add
                  </button>
                </div>
              </div>

              {/* SECTION: VISIBILITY */}
              <h4 className="font-['General_Sans',sans-serif] font-bold text-[11px] tracking-wider text-[#94A3B8] uppercase mt-2 mb-0.5">
                Visibility
              </h4>
              <div className="bg-[#F8FAFC] rounded-2xl p-[16px_20px] flex items-center justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-['General_Sans',sans-serif] font-semibold text-[13px] text-[#0F172B]">
                    Show on pricing page
                  </h4>
                  <p className="font-['General_Sans',sans-serif] text-[11px] text-[#62748E]">
                    Hidden plans are only assignable by admins
                  </p>
                </div>
                <label className="relative inline-block w-11 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0 peer"
                    checked={editForm.visible}
                    onChange={() =>
                      setEditForm({ ...editForm, visible: !editForm.visible })
                    }
                  />
                  <span className="absolute inset-0 bg-[#E2E8F0] rounded-3xl transition-all duration-300 peer-checked:bg-[#4F39F6] after:content-[''] after:absolute after:h-4.5 after:w-4.5 after:left-[3px] after:bottom-[3px] after:bg-white after:rounded-full after:transition-all after:duration-300 after:shadow peer-checked:after:translate-x-5"></span>
                </label>
              </div>
            </div>

            <div className="p-4 px-6 border-t border-[#F1F5F9] flex items-center justify-between bg-[#FCFDFE]">
              <button
                className="bg-transparent border-none text-[#62748E] font-['General_Sans',sans-serif] font-semibold text-xs cursor-pointer py-2 px-4 rounded-lg hover:text-[#0F172B] hover:bg-[#F1F5F9] transition-all"
                onClick={handleCloseEdit}
              >
                Discard
              </button>
              <button
                className="bg-[#4F39F6] hover:bg-[#3B2AE0] text-white font-['General_Sans',sans-serif] font-semibold text-xs border-none rounded-lg py-2.5 px-5 cursor-pointer transition-all"
                onClick={handleSaveEdit}
              >
                Save Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubscriptionPackages;