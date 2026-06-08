import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiDollarSign,
  FiRefreshCw,
  FiUsers,
  FiZap,
  FiBox,
  FiCheckCircle,
  FiAlertCircle,
  FiExternalLink,
  FiX,
  FiCalendar,
  FiCheck,
  FiGift,
  FiPause,
  FiChevronRight,
  FiCreditCard,
  FiDownload,
  FiRotateCcw,
} from "react-icons/fi";
import { TbReceiptDollar, TbBuildingBank } from "react-icons/tb";

const Billing = () => {
  // Main state
  const [currentPlan, setCurrentPlan] = useState("starter"); // "starter", "pro", "enterprise"
  const [selectedPlan, setSelectedPlan] = useState("starter");
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly", "annual"
  const [couponCode, setCouponCode] = useState("FOUNDER20");
  const [isCouponApplied, setIsCouponApplied] = useState(true);
  const [subscriptionStatus, setSubscriptionStatus] = useState("Active"); // "Active", "Paused", "Cancelled"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Manage Billing state
  const [isManageBillingOpen, setIsManageBillingOpen] = useState(false);
  const [manageBillingInvoices, setManageBillingInvoices] = useState([
    { id: "inv_001", plan: "Pro Monthly", amount: "$49.00", date: "2026-06-01", status: "PAID" },
    { id: "inv_002", plan: "Pro Monthly", amount: "$49.00", date: "2026-05-01", status: "PAID" },
    { id: "inv_003", plan: "Pro Monthly", amount: "$49.00", date: "2026-04-01", status: "PAID" }
  ]);
  const [paymentCards, setPaymentCards] = useState([
    { brand: "Visa", last4: "4242", expiry: "12/27", isDefault: true }
  ]);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const [newCardNumber, setNewCardNumber] = useState("");
  const [newCardExpiry, setNewCardExpiry] = useState("");

  const handleRefundInvoice = (invoiceId) => {
    setManageBillingInvoices((prev) =>
      prev.map((inv) => (inv.id === invoiceId ? { ...inv, status: "REFUNDED" } : inv))
    );
    showToast(`Refund processed for ${invoiceId}!`, "warning");
  };

  const handleDownloadInvoice = (invoiceId) => {
    const element = document.createElement("a");
    const file = new Blob(
      [`Invoice ${invoiceId}\nPlan: Pro Monthly\nAmount: $49.00\nStatus: Paid\nDate: 2026-06-01`],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = `invoice_${invoiceId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showToast(`Invoice ${invoiceId} downloaded successfully!`, "success");
  };

  const handleExportAll = () => {
    const csvContent =
      "data:text/csv;charset=utf-8,Invoice,Plan,Amount,Date,Status\n" +
      manageBillingInvoices.map((e) => `${e.id},${e.plan},${e.amount},${e.date},${e.status}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "invoices_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Exported all invoices to CSV!", "success");
  };

  const handleSaveNewCard = () => {
    if (!newCardNumber.trim() || !newCardExpiry.trim()) {
      showToast("Please fill in card details", "warning");
      return;
    }
    const cleanNumber = newCardNumber.replace(/\s+/g, "");
    const last4 = cleanNumber.slice(-4) || "1111";
    const brand = cleanNumber.startsWith("5") ? "Mastercard" : "Visa";

    setPaymentCards((prev) =>
      prev.map((c) => ({ ...c, isDefault: false })).concat([
        { brand, last4, expiry: newCardExpiry, isDefault: true },
      ])
    );
    setShowAddCardForm(false);
    setNewCardNumber("");
    setNewCardExpiry("");
    showToast("New card added as default!", "success");
  };

  const cards = [
    {
      title: "Gross Revenue",
      value: "$42,400",
      trend: "+4.2%",
      isPositive: true,
      icon: <FiDollarSign className="w-5 h-5" />,
      iconBg: "bg-[#EEF2FF] text-[#6366F1]",
      badgeBg: "bg-[#ECFDF5] text-[#10B981]",
    },
    {
      title: "Refunds",
      value: "$1,250",
      trend: "-12%",
      isPositive: false,
      icon: <FiRefreshCw className="w-4 h-4" />,
      iconBg: "bg-[#FFF1F2] text-[#F43F5E]",
      badgeBg: "bg-[#FFF1F2] text-[#F43F5E]",
    },
    {
      title: "Churn Rate",
      value: "2.4%",
      trend: "-0.5%",
      isPositive: false,
      icon: <FiUsers className="w-5 h-5" />,
      iconBg: "bg-[#FFF7ED] text-[#F97316]",
      badgeBg: "bg-[#FFF1F2] text-[#F43F5E]",
    },
    {
      title: "Coupons Active",
      value: "142",
      trend: "+8%",
      isPositive: true,
      icon: <FiZap className="w-5 h-5" />,
      iconBg: "bg-[#FDF4FF] text-[#D946EF]",
      badgeBg: "bg-[#ECFDF5] text-[#10B981]",
    },
  ];

  const transactions = [
    {
      plan: "Pro Monthly",
      customer: "Marcus Chen",
      email: "marcus@fitness.co",
      invoice: "inv_001",
      amount: "$49.00",
      date: "2026-06-01",
      status: "PAID",
    },
    {
      plan: "Pro Monthly",
      customer: "Marcus Chen",
      email: "marcus@fitness.co",
      invoice: "inv_002",
      amount: "$49.00",
      date: "2026-05-01",
      status: "PAID",
    },
    {
      plan: "Pro Monthly",
      customer: "Marcus Chen",
      email: "marcus@fitness.co",
      invoice: "inv_003",
      amount: "$49.00",
      date: "2026-04-01",
      status: "PAID",
    },
    {
      plan: "Business Monthly",
      customer: "Marcus Chen",
      email: "marcus@fitness.co",
      invoice: "inv_004",
      amount: "$149.00",
      date: "2026-06-15",
      status: "PAID",
    },
    {
      plan: "Business Monthly",
      customer: "Marcus Chen",
      email: "marcus@fitness.co",
      invoice: "inv_005",
      amount: "$149.00",
      date: "2026-05-15",
      status: "PAID",
    },
    {
      plan: "Pro Monthly",
      customer: "Digital Nomad",
      email: "alex@world.me",
      invoice: "inv_006",
      amount: "$49.00",
      date: "2026-05-30",
      status: "PAID",
    },
    {
      plan: "Pro Monthly",
      customer: "Digital Nomad",
      email: "alex@world.me",
      invoice: "inv_007",
      amount: "$49.00",
      date: "2026-04-30",
      status: "FAILED",
    },
  ];

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      setIsCouponApplied(true);
      showToast(`Coupon "${couponCode.toUpperCase()}" applied!`, "success");
    }
  };

  const handleRemoveCoupon = () => {
    setIsCouponApplied(false);
    showToast("Coupon removed.", "info");
  };

  const handlePauseSubscription = () => {
    setSubscriptionStatus("Paused");
    showToast("Subscription paused for 30 days.", "warning");
  };

  const handleCancelSubscription = () => {
    setSubscriptionStatus("Cancelled");
    showToast("Subscription set to cancel at period end.", "warning");
  };

  const handleSaveChanges = () => {
    setCurrentPlan(selectedPlan);
    setIsModalOpen(false);
    showToast("Changes saved successfully!", "success");
  };

  return (
    <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 w-full min-h-screen bg-[#F8FAFC]">
      {/* Top Div - 4 Column Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between h-[161.6px] p-6 bg-white rounded-[24px] border-[0.8px] border-[#E2E8F0] border-t-[0.8px] border-t-[#E2E8F0] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),_0px_1px_3px_0px_rgba(0,0,0,0.1)]"
          >
            <div className="flex justify-between items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center ${card.iconBg}`}>
                {card.icon}
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${card.badgeBg}`}>
                {card.trend}
              </span>
            </div>

            <div className="mt-4">
              <span className="text-[13px] font-bold text-slate-400 block tracking-wide">
                {card.title}
              </span>
              <h2 className="text-[28px] font-extrabold text-slate-800 leading-none tracking-tight mt-1">
                {card.value}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Down Div - Full Width Card */}
      <div className="w-full bg-white p-4 sm:p-8 rounded-[24px] border-[0.8px] border-[#E2E8F0] border-t-[0.8px] border-t-[#E2E8F0] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),_0px_1px_3px_0px_rgba(0,0,0,0.1)] flex flex-col">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-[22px] font-extrabold text-slate-800 tracking-tight">
              Recent Transactions
            </h2>
            <span className="bg-indigo-50 text-[#6366F1] border border-indigo-100 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {currentPlan === "starter" ? "Starter" : currentPlan === "pro" ? "Pro" : "Enterprise"} Plan
            </span>
          </div>
          <button
            onClick={() => {
              setSelectedPlan(currentPlan);
              setIsModalOpen(true);
            }}
            className="border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 font-semibold flex items-center gap-2 bg-white hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
          >
            <FiBox className="w-4 h-4 text-slate-500" />
            <span>Manage Subscription</span>
          </button>
        </div>

        {/* Transactions List */}
        <div className="flex flex-col gap-1">
          {transactions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-3.5 border-b border-slate-100 last:border-0"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${item.status === "PAID"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-rose-50 text-rose-600"
                    }`}
                >
                  {item.status === "PAID" ? (
                    <FiCheckCircle className="w-5 h-5" />
                  ) : (
                    <FiAlertCircle className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-800 leading-snug">
                    {item.plan}
                  </h4>
                  <p className="text-[12px] text-slate-400 font-semibold mt-0.5">
                    {item.customer} <span className="mx-1 text-slate-300 hidden sm:inline">•</span> <span className="hidden sm:inline">{item.email}</span>{" "}
                    <span className="mx-1 text-slate-300">•</span> {item.invoice}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-[14px] font-bold text-slate-800 leading-none">
                    {item.amount}
                  </div>
                  <div className="text-[11px] text-slate-400 font-semibold mt-1">
                    {item.date}
                  </div>
                </div>

                <span
                  className={`text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-md min-w-[54px] text-center ${item.status === "PAID"
                    ? "bg-[#ECFDF5] text-[#10B981]"
                    : "bg-[#FEF2F2] text-[#EF4444]"
                    }`}
                >
                  {item.status}
                </span>

                <button
                  onClick={() => setIsManageBillingOpen(true)}
                  className="text-slate-400 hover:text-indigo-600 transition-colors p-1.5 hover:bg-slate-50 rounded-lg cursor-pointer"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Subscription Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="bg-white shadow-2xl border border-slate-100 flex flex-col w-full max-w-[575.2px] max-h-[90vh] rounded-[24px] overflow-hidden z-10 relative"
            >
              {/* HEADER DIV */}
              <div className="w-full h-[80.8px] px-6 py-5 flex items-center justify-between border-b border-[#F1F5F9] shrink-0 bg-white">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] border border-[#6366F1]/10 flex items-center justify-center text-[#6366F1]">
                    <FiBox className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-slate-800 leading-none">
                      Manage Subscription
                    </h3>
                    <p className="text-[12px] text-slate-400 font-semibold mt-1.5">
                      Marcus Chen · marcus@fitness.co
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1.5 hover:bg-slate-50 rounded-xl cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* CONTENT/BODY DIV */}
              <div className="w-full p-4 flex flex-col gap-2 flex-1 bg-white overflow-y-auto">
                {/* SECTION 1: Account status card */}
                <div className="bg-[#F8FAFC] rounded-2xl p-3.5 flex flex-wrap items-center gap-4 border border-[#F1F5F9]">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[#10B981] bg-[#E6FDF4] rounded-full border border-[#10B981]/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    Active
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <FiCalendar className="w-4 h-4 text-slate-400" />
                    <span>Renews 2026-07-15</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <FiUsers className="w-4 h-4 text-slate-400" />
                    <span>5 seats</span>
                  </div>
                </div>

                {/* SECTION 2: Plan heading + toggle */}
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-slate-800">Plan</span>
                  <div className="bg-[#F1F5F9] p-0.5 rounded-xl flex items-center w-[180px] h-[34px] border border-slate-200/20">
                    <button
                      onClick={() => setBillingCycle("monthly")}
                      className={`flex-1 text-center py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${billingCycle === "monthly"
                        ? "bg-white text-slate-800 shadow-xs"
                        : "text-slate-500 hover:text-slate-800"   
                        }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingCycle("annual")}
                      className={`flex-1 text-center py-1 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-0.5 cursor-pointer ${billingCycle === "annual"
                        ? "bg-white text-slate-800 shadow-xs"
                        : "text-slate-500 hover:text-slate-800"
                        }`}
                    >
                      Annual
                      <span className="text-[#10B981] font-extrabold">-20%</span>
                    </button>
                  </div>
                </div>

                {/* Options Group Container */}
                <div className="border border-[#F1F5F9] bg-[#F8FAFC] rounded-2xl p-4 flex flex-col gap-6 shadow-xs">
                  {/* SECTION 3: Pricing cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1: Starter */}
                    <div
                      onClick={() => setSelectedPlan("starter")}
                      className={`flex flex-col justify-between p-4.5 rounded-[20px] h-auto cursor-pointer transition-all ${selectedPlan === "starter"
                        ? "border-2 border-[#6366F1] bg-[#EEF2FF]/15"
                        : "border border-slate-200 bg-white hover:border-slate-300"
                        }`}
                    >
                      <div className="flex justify-between items-start">
                        <span
                          className={`text-sm font-bold ${selectedPlan === "starter" ? "text-[#6366F1]" : "text-slate-800"
                            }`}
                        >
                          Starter
                        </span>
                        {selectedPlan === "starter" && (
                          <FiCheckCircle className="w-4.5 h-4.5 text-[#6366F1] stroke-[2.5]" />
                        )}
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-slate-800 mt-1">Free</h2>
                        <p className="text-[11px] text-slate-400 font-semibold mt-auto">
                          Basic access, 1 account
                        </p>
                      </div>
                    </div>

                    {/* Card 2: Pro */}
                    <div
                      onClick={() => setSelectedPlan("pro")}
                      className={`flex flex-col justify-between p-4.5 rounded-[20px] h-auto cursor-pointer transition-all ${selectedPlan === "pro"
                        ? "border-2 border-[#6366F1] bg-[#EEF2FF]/15"
                        : "border border-slate-200 bg-white hover:border-slate-300"
                        }`}
                    >
                      <div className="flex justify-between items-start">
                        <span
                          className={`text-sm font-bold ${selectedPlan === "pro" ? "text-[#6366F1]" : "text-slate-800"
                            }`}
                        >
                          Pro
                        </span>
                        {selectedPlan === "pro" && (
                          <FiCheckCircle className="w-4.5 h-4.5 text-[#6366F1] stroke-[2.5]" />
                        )}
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-slate-800 mt-1">
                          {billingCycle === "monthly" ? "$49/mo" : "$39/mo"}
                        </h2>
                        <p className="text-[11px] text-slate-400 font-semibold mt-auto">
                          5 accounts, full automation
                        </p>
                      </div>
                    </div>

                    {/* Card 3: Enterprise */}
                    <div
                      onClick={() => setSelectedPlan("enterprise")}
                      className={`flex flex-col justify-between p-4.5 rounded-[20px] h-auto cursor-pointer transition-all ${selectedPlan === "enterprise"
                        ? "border-2 border-[#6366F1] bg-[#EEF2FF]/15"
                        : "border border-slate-200 bg-white hover:border-slate-300"
                        }`}
                    >
                      <div className="flex justify-between items-start">
                        <span
                          className={`text-sm font-bold ${selectedPlan === "enterprise" ? "text-[#6366F1]" : "text-slate-800"
                            }`}
                        >
                          Enterprise
                        </span>
                        {selectedPlan === "enterprise" && (
                          <FiCheckCircle className="w-4.5 h-4.5 text-[#6366F1] stroke-[2.5]" />
                        )}
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-slate-800 mt-1">
                          {billingCycle === "monthly" ? "$499/mo" : "$399/mo"}
                        </h2>
                        <p className="text-[11px] text-slate-400 font-semibold mt-auto">
                          Custom SLA, dedicated support
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 4: Coupon / Promo Code */}
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-slate-800">Coupon / Promo Code</span>
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                      <div className="relative flex-1">
                        <FiGift className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Enter Promo Code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          disabled={isCouponApplied}
                          className="w-full h-[42px] pl-10 pr-4 rounded-xl border border-slate-200 text-sm font-semibold outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all bg-white disabled:bg-slate-50 disabled:text-slate-400"
                        />
                      </div>
                      {isCouponApplied ? (
                        <button
                          onClick={handleRemoveCoupon}
                          className="h-[42px] px-4 bg-[#E6FDF4] border border-[#10B981]/25 text-[#10B981] font-bold text-sm rounded-xl flex items-center justify-center gap-1 shadow-sm cursor-pointer w-full sm:w-auto"
                        >
                          <FiCheck className="w-4 h-4 stroke-[3]" />
                          Applied
                        </button>
                      ) : (
                        <button
                          onClick={handleApplyCoupon}
                          className="h-[42px] px-5 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer w-full sm:w-auto"
                        >
                          Apply
                        </button>
                      )}
                    </div>
                    {isCouponApplied && (
                      <div className="flex items-center gap-1.5 text-xs text-[#10B981] font-bold mt-0.5">
                        <FiCheckCircle className="w-4 h-4 text-[#10B981]" />
                        <span>20% discount applied to next invoice</span>
                      </div>
                    )}
                  </div>

                  {/* SECTION 5: Subscription Controls */}
                  <div className="border border-[#F1F5F9] rounded-2xl overflow-hidden bg-white shadow-xs">
                    <div className=" bg-[#F8FAFC] px-5 py-3 border-b border-[#F1F5F9]">
                      <span className="text-sm font-bold text-slate-800">Subscription Controls</span>
                    </div>
                    <div className="divide-y divide-[#F1F5F9]">
                      {/* Option 1: Pause */}
                      <div
                        onClick={handlePauseSubscription}
                        className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                            <FiPause className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-800">
                              Pause Subscription
                            </h4>
                            <p className="text-xs text-slate-400 font-semibold mt-0.5">
                              Pauses billing for up to 30 days
                            </p>
                          </div>
                        </div>
                        <FiChevronRight className="w-5 h-5 text-slate-400" />
                      </div>

                      {/* Option 2: Cancel */}
                      <div
                        onClick={handleCancelSubscription}
                        className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#FEE2E2] text-[#EF4444] flex items-center justify-center shrink-0">
                            <FiX className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-800">
                              Cancel Subscription
                            </h4>
                            <p className="text-xs text-slate-400 font-semibold mt-0.5">
                              Ends access at period end
                            </p>
                          </div>
                        </div>
                        <FiChevronRight className="w-5 h-5 text-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER DIV */}
              <div className="w-full h-[68.8px] px-6 py-4 bg-white border-t border-[#F1F5F9] flex items-center justify-between shrink-0">
                <span className="text-[12px] font-extrabold text-[#6366F1] uppercase tracking-wider">
                  Unsaved changes — Free Monthly at $0/mo
                </span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      setSelectedPlan(currentPlan);
                      setIsModalOpen(false);
                    }}
                    className="text-slate-500 hover:text-slate-700 font-bold text-sm cursor-pointer"
                  >
                    Discard
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="h-[38px] px-5 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Manage Billing Modal Overlay */}
      <AnimatePresence>
        {isManageBillingOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsManageBillingOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="bg-white shadow-2xl border border-slate-100 flex flex-col w-full max-w-[575.2px] max-h-[90vh] rounded-[24px] overflow-hidden z-10 relative"
            >
              {/* 1) HEADER SECTION */}
              <div className="w-full h-[80.8px] px-6 py-5 flex items-center justify-between border-b border-[#F1F5F9] shrink-0 bg-white">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] border border-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]">
                    <TbReceiptDollar className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-slate-800 leading-none">
                      Manage Billing
                    </h3>
                    <p className="text-[12px] text-slate-400 font-semibold mt-1.5">
                      Sarah Jenkins · cus_Sarah1234
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsManageBillingOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1.5 hover:bg-slate-50 rounded-xl cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* CONTENT/BODY DIV */}
              <div className="w-full p-6 flex flex-col gap-6 flex-1 bg-white overflow-y-auto">
                {/* 2) TOP BILLING SUMMARY CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Card 1: Amount */}
                  <div className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-[20px] p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Amount
                      </span>
                      <h2 className="text-[20px] font-extrabold text-slate-800 mt-1 leading-none">
                        $49.00
                      </h2>
                    </div>
                    <span className="text-[12px] text-slate-400 font-semibold mt-3 block">
                      Monthly
                    </span>
                  </div>

                  {/* Card 2: Next Bill */}
                  <div className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-[20px] p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Next Bill
                      </span>
                      <h2 className="text-[20px] font-extrabold text-slate-800 mt-1 leading-none">
                        2026-07-01
                      </h2>
                    </div>
                    <span className="text-[12px] text-slate-400 font-semibold mt-3 block">
                      Upcoming charge
                    </span>
                  </div>

                  {/* Card 3: Invoices */}
                  <div className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-[20px] p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Invoices
                      </span>
                      <h2 className="text-[20px] font-extrabold text-slate-800 mt-1 leading-none">
                        {manageBillingInvoices.length}
                      </h2>
                    </div>
                    <span className="text-[12px] text-slate-400 font-semibold mt-3 block">
                      Total records
                    </span>
                  </div>
                </div>

                {/* 3) PAYMENT METHOD SECTION */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-800">Payment Method</span>
                    <button
                      onClick={() => setShowAddCardForm(true)}
                      className="text-xs font-bold text-[#6366F1] flex items-center gap-1.5 hover:text-[#4F46E5] transition-colors cursor-pointer"
                    >
                      <FiCreditCard className="w-3.5 h-3.5" />
                      Add New Card
                    </button>
                  </div>

                  {showAddCardForm && (
                    <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex flex-col gap-3">
                      <h4 className="text-xs font-bold text-slate-700">Enter Card Details</h4>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Card Number (e.g. 4242 4242 4242 1111)"
                          value={newCardNumber}
                          onChange={(e) => setNewCardNumber(e.target.value)}
                          className="flex-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs outline-none bg-white text-slate-800"
                        />
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={newCardExpiry}
                          onChange={(e) => setNewCardExpiry(e.target.value)}
                          className="w-20 px-3 py-1.5 border border-slate-200 rounded-lg text-xs outline-none bg-white text-slate-800"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setShowAddCardForm(false)}
                          className="px-3 py-1 text-xs text-slate-500 hover:text-slate-700 font-bold"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveNewCard}
                          className="px-3 py-1 bg-[#6366F1] text-white text-xs font-bold rounded-lg hover:bg-[#4F46E5]"
                        >
                          Save Card
                        </button>
                      </div>
                    </div>
                  )}

                  {paymentCards.map((card, idx) => (
                    <div
                      key={idx}
                      className="border border-[#F1F5F9] rounded-2xl p-4 flex justify-between items-center bg-white"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center shrink-0">
                          <TbBuildingBank className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-800">
                            {card.brand} •••• {card.last4}
                          </h4>
                          <p className="text-xs text-slate-400 font-semibold mt-0.5">
                            Expires {card.expiry}
                          </p>
                        </div>
                      </div>
                      {card.isDefault && (
                        <span className="text-[11px] font-bold px-2 py-0.5 bg-[#E6FDF4] text-[#10B981] rounded-md border border-[#10B981]/10">
                          Default
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* 4) INVOICE HISTORY SECTION */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-800">Invoice History</span>
                    <button
                      onClick={handleExportAll}
                      className="text-xs font-bold text-slate-500 flex items-center gap-1.5 hover:text-slate-800 transition-colors cursor-pointer"
                    >
                      <FiDownload className="w-3.5 h-3.5" />
                      Export All
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {manageBillingInvoices.map((inv, idx) => (
                      <div
                        key={idx}
                        className="border border-[#F1F5F9] rounded-2xl p-4 flex justify-between items-center bg-white"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-9 h-9 rounded-full bg-[#E6FDF4] text-[#10B981] flex items-center justify-center shrink-0">
                            <FiCheck className="w-4 h-4 stroke-[3]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[14px] font-bold text-slate-800">
                                {inv.amount}
                              </span>
                              <span
                                className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md border ${inv.status === "PAID"
                                  ? "bg-[#E6FDF4] text-[#10B981] border-[#10B981]/10"
                                  : "bg-[#FEF2F2] text-[#EF4444] border-[#EF4444]/10"
                                  }`}
                              >
                                {inv.status}
                              </span>
                            </div>
                            <p className="text-[12px] text-slate-400 font-semibold mt-1">
                              {inv.plan} · {inv.date} · {inv.id}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleDownloadInvoice(inv.id)}
                            className="text-slate-400 hover:text-indigo-600 transition-colors p-1.5 hover:bg-slate-50 rounded-lg cursor-pointer"
                          >
                            <FiDownload className="w-4 h-4" />
                          </button>
                          {inv.status === "PAID" && (
                            <button
                              onClick={() => handleRefundInvoice(inv.id)}
                              className="text-slate-400 hover:text-rose-600 transition-colors p-1.5 hover:bg-slate-50 rounded-lg flex items-center gap-1 cursor-pointer font-semibold text-xs"
                            >
                              <FiRotateCcw className="w-3.5 h-3.5" />
                              Refund
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5) FOOTER SECTION */}
              <div className="w-full h-[68.8px] px-6 py-4 bg-white border-t border-[#F1F5F9] flex items-center justify-between shrink-0">
                <span className="text-[12px] text-slate-400 font-semibold">
                  All billing actions are logged for compliance.
                </span>
                <button
                  onClick={() => setIsManageBillingOpen(false)}
                  className="h-[38px] px-6 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Elegant Action Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 bg-slate-900 text-white rounded-2xl shadow-xl p-4 flex items-center gap-3.5 border border-slate-800 max-w-sm"
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${toast.type === "success"
                ? "bg-emerald-500/20 text-emerald-400"
                : toast.type === "warning"
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-indigo-500/20 text-indigo-400"
                }`}
            >
              <FiCheckCircle className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-slate-100">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Billing;
