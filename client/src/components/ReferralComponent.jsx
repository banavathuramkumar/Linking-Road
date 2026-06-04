import React from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import {
  FiUsers,
  FiGift,
  FiDollarSign,
  FiCopy,
  FiShare2,
} from "react-icons/fi";

const referrals = [
  {
    name: "John Smith",
    email: "john@email.com",
    status: "Active",
    earned: "$50",
    date: "2024-05-10",
  },
  {
    name: "Lisa Brown",
    email: "lisa@email.com",
    status: "Active",
    earned: "$50",
    date: "2024-05-08",
  },
  {
    name: "Mike Johnson",
    email: "mike@email.com",
    status: "Pending",
    earned: "$0",
    date: "2024-05-05",
  },
];

const ReferralComponent = ({ setMobileMenuOpen }) => {
  const referralLink = "https://linkingroad.ai/ref/YOUR-CODE";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className="flex-1 min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      {/* MOBILE HEADER */}
      <div className="lg:hidden flex items-center p-4 bg-white border-b">
        <button onClick={() => setMobileMenuOpen(true)} className="p-2">
          <FiMenu size={24} />
        </button>

        <h1 className="ml-4 font-semibold">Referrals</h1>
      </div>
      <div className="max-w-[1088px] mx-auto px-4 md:px-6 py-8">
        {/* HEADER */}
        <div className="flex  justify-between gap-4">
          <div>
            <h1
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[28px] md:text-[36px] leading-[40px] font-semibold text-black"
            >
              Referral Program
            </h1>

            <p
              style={{ fontFamily: "GeneralSans" }}
              className="mt-2 text-[15px] text-[#71717A]"
            >
              Earn rewards by inviting friends
            </p>
          </div>

          <button
            className="
              w-full
              sm:w-[152px]
              h-[46px]
              sm:h-[50px]
               rounded-[16px]
              sm:rounded-[20px]
              bg-[#4C229E]
              text-white
              text-[14px]
               sm:text-[15px]
              font-medium
             shadow-[0px_4px_6px_-4px_rgba(97,95,255,0.5)]
             transition-all
             duration-300
             hover:bg-[#5B2BB8]
             hover:shadow-[0px_10px_25px_rgba(76,34,158,0.35)]
              hover:-translate-y-1
              active:translate-y-0
             active:scale-[0.98]
              "
          >
            Withdraw Funds
          </button>
        </div>

        {/* STATS */}
        <div className="w-full max-w-[1088px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
    bg-white
    rounded-[16px]
    min-h-[170px]
    p-6
    border
    border-[#0000000D]
    flex
    flex-col
  "
          >
            <div className="w-[48px] h-[48px] rounded-full bg-[#EEF2FF] flex items-center justify-center">
              <FiUsers className="text-[#615FFF] text-[22px]" />
            </div>

            <h2 className="mt-5 text-[32px] md:text-[42px] leading-none font-semibold text-black">
              12
            </h2>

            <p className="mt-3 text-[15px] text-[#71717A]">Total Referrals</p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
    bg-white
    rounded-[16px]
    min-h-[170px]
    p-6
    border
    border-[#0000000D]
    flex
    flex-col
  "
          >
            <div className="w-[48px] h-[48px] rounded-full bg-[#F3E8FF] flex items-center justify-center">
              <FiGift className="text-[#8B5CF6] text-[22px]" />
            </div>

            <h2 className="mt-5 text-[32px] md:text-[42px] leading-none font-semibold text-black">
              9
            </h2>

            <p className="mt-3 text-[15px] text-[#71717A]">Active Referrals</p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
    bg-white
    rounded-[16px]
    min-h-[170px]
    p-6
    border
    border-[#0000000D]
    flex
    flex-col
  "
          >
            <div className="w-[48px] h-[48px] rounded-full bg-[#DCFCE7] flex items-center justify-center">
              <FiDollarSign className="text-[#16A34A] text-[22px]" />
            </div>

            <h2 className="mt-5 text-[32px] md:text-[42px] leading-none font-semibold text-black">
              $450
            </h2>

            <p className="mt-3 text-[15px] text-[#71717A]">Total Earned</p>
          </motion.div>
        </div>

        {/* REFERRAL LINK CARD */}
        <div
          className="
          w-full
          max-w-[1088px]
          mx-auto
          mt-8
          bg-white
          rounded-[16px]
          border
          border-[#0000000D]
          p-6
        "
        >
          <h2
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[20px] md:text-[24px] font-semibold text-black"
          >
            Your Referral Link
          </h2>

          <p className="mt-3 text-[#71717A]">
            Share this link to earn $50 for each friend who signs up
          </p>

          <div className="mt-6 flex flex-col lg:flex-row gap-4">
            <div
              className="
              flex-1
              h-[50px]
              rounded-[20px]
              bg-black/5
              border
              border-black/10
              px-5
              flex
              items-center
              text-[18px]
              
            "
            >
              {referralLink}
            </div>

            <button
              onClick={handleCopy}
              className="
    h-[46px]
    sm:h-[50px]
    w-full
    sm:w-[152px]
    rounded-[16px]
    sm:rounded-[20px]
    bg-[#4C229E]
    text-white
    text-[14px]
    sm:text-[15px]
    font-medium
    flex
    items-center
    justify-center
    gap-2
    shadow-[0px_4px_6px_-4px_rgba(97,95,255,0.5)]
    transition-all
    duration-300
    hover:bg-[#5B2BB8]
    hover:-translate-y-1
    hover:shadow-[0px_12px_30px_rgba(97,95,255,0.35)]
    active:scale-[0.98]
  "
            >
              <FiCopy className="text-[16px]" />
              Copy Link
            </button>

            <button
              className="
    h-[46px]
    sm:h-[50px]
    w-full
    sm:w-[120px]
    rounded-[16px]
    sm:rounded-[20px]
    bg-[#EF51B3]
    text-white
    text-[14px]
    sm:text-[15px]
    font-medium
    flex
    items-center
    justify-center
    gap-2
    shadow-[0px_4px_6px_-4px_rgba(173,70,255,0.5)]
    transition-all
    duration-300
    hover:bg-[#F062C0]
    hover:-translate-y-1
    hover:shadow-[0px_12px_30px_rgba(239,81,179,0.35)]
    active:scale-[0.98]
  "
            >
              <FiShare2 className="text-[16px]" />
              Share
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div
          className="
          w-full
          max-w-[1088px]
          mx-auto
          mt-8
          bg-white
          rounded-[16px]
          border
          border-[#0000000D]
          p-6
          overflow-x-auto
        "
        >
          <h2
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[20px] md:text-[24px] font-semibold text-black"
          >
            Your Referrals
          </h2>

          <table className="w-full mt-8 min-w-[800px]">
            <thead>
              <tr className="border-b border-[#E5E7EB]">
                <th className="text-left py-4 text-[#71717A]">Name</th>
                <th className="text-left py-4 text-[#71717A]">Email</th>
                <th className="text-left py-4 text-[#71717A]">Status</th>
                <th className="text-left py-4 text-[#71717A]">Earned</th>
                <th className="text-left py-4 text-[#71717A]">Date</th>
              </tr>
            </thead>

            <tbody>
              {referrals.map((item, index) => (
                <tr key={index} className="border-b border-[#F1F5F9]">
                  <td className="py-5">{item.name}</td>
                  <td className="py-5 text-[#71717A]">{item.email}</td>

                  <td className="py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-[13px]
                    ${
                      item.status === "Active"
                        ? "bg-[#DCFCE7] text-[#16A34A]"
                        : "bg-[#FEF3C7] text-[#F59E0B]"
                    }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="py-5 text-[#16A34A]">{item.earned}</td>

                  <td className="py-5 text-[#71717A]">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralComponent;
