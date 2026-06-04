import React from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { FiCreditCard, FiCalendar, FiDownload, FiPlus } from "react-icons/fi";

const billingHistory = [
  {
    invoice: "INV-2024-05",
    date: "2024-05-01",
    amount: "$99.00",
    status: "Paid",
  },
  {
    invoice: "INV-2024-04",
    date: "2024-04-01",
    amount: "$99.00",
    status: "Paid",
  },
  {
    invoice: "INV-2024-03",
    date: "2024-03-01",
    amount: "$99.00",
    status: "Paid",
  },
];

const BillingComponent = ({ setMobileMenuOpen }) => {
  return (
    <div className="flex-1 min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      {/* MOBILE HEADER */}
      <div className="lg:hidden flex items-center p-4 bg-white border-b border-[#E2E8F0]">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 rounded-lg hover:bg-[#F8FAFC]"
        >
          <FiMenu size={24} />
        </button>

        <h1 className="ml-3 font-semibold text-[18px]">Billing</h1>
      </div>
      <div className="max-w-[1088px] mx-auto px-4 md:px-6 py-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between gap-4"
        >
          <div>
            <h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[28px] md:text-[36px] font-semibold text-black"
            >
              Billing & Subscription
            </h1>

            <p className="mt-2 text-[15px] text-[#71717A]">
              Manage your subscription and payments
            </p>
          </div>
        </motion.div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 mt-8">
          {/* PLAN CARD */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-[16px] border border-[#0000000D] p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[32px] font-semibold">Pro Plan</h2>
                <p className="text-[#71717A] mt-1">Your current subscription</p>
              </div>

              <span className="px-4 py-2 rounded-full bg-[#DCFCE7] text-[#16A34A]">
                Active
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-[#71717A]">Price</p>
                <h3 className="text-[32px]">$99/mo</h3>
              </div>

              <div>
                <p className="text-[#71717A]">Next Billing</p>
                <h3 className="text-[32px]">Jun 1</h3>
              </div>

              <div>
                <p className="text-[#71717A]">Messages</p>
                <h3 className="text-[32px]">7.2K / 10K</h3>
              </div>
            </div>

            <div className="mt-8 h-[8px] rounded-full bg-[#E5E7EB] overflow-hidden">
              <div className="w-[78%] h-full bg-gradient-to-r from-[#615FFF] to-[#8B5CF6]" />
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                className="
                h-[50px]
                px-6
                rounded-[20px]
                border
                border-[#C4B5FD]
                text-[#7C3AED]
                font-medium
                transition-all
                duration-300
                hover:bg-[#F5F3FF]
              "
              >
                Change Plan
              </button>

              <button className="text-[#71717A] font-medium hover:text-[#4C229E]">
                Cancel Subscription
              </button>
            </div>
          </motion.div>

          {/* BILLING CYCLE CARD */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-[16px] border border-[#0000000D] p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-[48px] h-[48px] rounded-full bg-[#EEF2FF] flex items-center justify-center">
                <FiCalendar className="text-[#615FFF] text-[22px]" />
              </div>

              <div>
                <h3 className="font-semibold">Billing Cycle</h3>
                <p className="text-[#71717A]">Monthly</p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex justify-between">
                <span className="text-[#71717A]">Start Date</span>
                <span>May 1, 2024</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#71717A]">Next Payment</span>
                <span>Jun 1, 2024</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#71717A]">Auto-Renew</span>
                <span className="text-[#16A34A]">Enabled</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PAYMENT METHOD */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white rounded-[16px] border border-[#0000000D] p-6 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <h2 className="text-[24px] font-semibold">Payment Method</h2>

            <button
              className="
              h-[50px]
              px-6
              rounded-[20px]
              border
              border-[#C4B5FD]
              text-[#7C3AED]
              font-medium
              flex
              items-center
              gap-2
              hover:bg-[#F5F3FF]
            "
            >
              <FiPlus />
              Add Payment Method
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-[48px] h-[48px] rounded-full bg-[#EEF2FF] flex items-center justify-center">
                <FiCreditCard className="text-[#615FFF]" />
              </div>

              <div>
                <h3>Visa ending in 4242</h3>
                <p className="text-[#71717A]">Expires 12/25</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-6 h-[46px] rounded-[18px] border border-[#C4B5FD] hover:bg-[#F5F3FF] text-[#7C3AED] font-medium">
                Update
              </button>

              <button className="text-[#71717A] hover:text-[#4C229E] font-medium">
                Remove
              </button>
            </div>
          </div>
        </motion.div>

        {/* BILLING HISTORY */}
        <div className="bg-white rounded-[16px] border border-[#0000000D] p-6 mt-8">
          <div className="flex  justify-between gap-4">
            <h2 className="text-[24px] font-semibold">Billing History</h2>

            <button
              className="
            h-[50px]
            px-6
            rounded-[20px]
            border
            border-[#C4B5FD]
            text-[#7C3AED]
            flex
            items-center
            gap-2
            font-medium
            transition-all
            duration-300
            hover:bg-[#F5F3FF]
            hover:-translate-y-1
          "
            >
              <FiDownload />
              Download All
            </button>
          </div>

          <div className="overflow-x-auto mt-8">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-[#E5E7EB]">
                  <th className="text-left py-4">Invoice</th>
                  <th className="text-left py-4">Date</th>
                  <th className="text-left py-4">Amount</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-left py-4">Download</th>
                </tr>
              </thead>

              <tbody>
                {billingHistory.map((item, index) => (
                  <tr key={index} className="border-b border-[#F1F5F9]">
                    <td className="py-5">{item.invoice}</td>
                    <td className="py-5">{item.date}</td>
                    <td className="py-5">{item.amount}</td>

                    <td className="py-5">
                      <span className="px-3 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A] text-[13px]">
                        Paid
                      </span>
                    </td>

                    <td className="py-5">
                      <button className="flex items-center gap-2 hover:text-[#4C229E]">
                        <FiDownload />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingComponent;
