import React, { useState } from "react";
import { FiArrowUpRight, FiChevronRight, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { HiOutlineTrendingUp } from "react-icons/hi";

const SuccessStoriesSection = () => {
  const navigate = useNavigate();

  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      company: "Lumina Cosmetics",
      stat: "450%",
      statLabel: "Increase in DM conversions",
      title: "Turning Instagram Comments into a $2M Revenue Channel",
      description:
        "Lumina used FlowPilot's Comment-to-DM triggers to automatically send personalized quizzes to followers.",
      color: "from-[#F6339A] to-[#FF2056]",
      icon: <HiOutlineTrendingUp />,
      iconBg: "bg-[#FCE7F3]",
      iconColor: "text-[#EC4899]",

      fullContent: [
        "Lumina Cosmetics struggled to convert Instagram engagement into direct sales.",

        "Using FlowPilot, every comment instantly triggered personalized DMs.",

        "The result was a 450% increase in conversions and thousands of qualified leads.",

        "Today, FlowPilot powers every major product launch for the brand.",
      ],
    },

    {
      company: "Creator Academy",
      stat: "25K+",
      statLabel: "Leads captured in 30 days",
      title: "Automating Webinar Registrations at Scale",
      description:
        "Creator Academy replaced manual lead collection with automated DM funnels.",
      color: "from-[#615FFF] to-[#8B5CF6]",
      icon: <HiOutlineUserGroup />,
      iconBg: "bg-[#EEF2FF]",
      iconColor: "text-[#615FFF]",

      fullContent: [
        "Creator Academy manually handled webinar registrations which slowed conversions.",

        "FlowPilot instantly delivered webinar links through automated DM workflows.",

        "Over 25,000 leads were generated within one month.",

        "The team now focuses entirely on scaling.",
      ],
    },

    {
      company: "FitLife Apparel",
      stat: "12hrs",
      statLabel: "Saved weekly on support",
      title: "Scaling Customer Support with Smart Auto-Replies",
      description:
        "FitLife automated repetitive support questions and reduced response time.",
      color: "from-[#10B981] to-[#059669]",
      icon: <IoChatbubbleOutline />,
      iconBg: "bg-[#DCFCE7]",
      iconColor: "text-[#059669]",

      fullContent: [
        "FitLife Apparel support teams were overwhelmed with repetitive questions.",

        "FlowPilot automated shipping, order, and sizing replies instantly.",

        "The company now saves over 12 hours weekly.",

        "Customer satisfaction improved dramatically.",
      ],
    },
  ];

  return (
    <>
      {/* SECTION */}
      <section className="w-full bg-[#F8FAFC] px-4 sm:px-6 lg:px-8 py-[70px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          {/* HEADING */}
          <div className="text-center">
            <h1
              style={{ fontFamily: "ClashDisplay" }}
              className="
                text-[28px]
                sm:text-[42px]
                lg:text-[56px]
                leading-none
                tracking-[-1px]
                font-semibold
                text-[#0F172B]
              "
            >
              Proven by
            </h1>

            <div className="mt-3 inline-block rotate-[-2deg] bg-white px-4 sm:px-5 py-2 rounded-[18px] shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="
                  text-[26px]
                  sm:text-[40px]
                  lg:text-[52px]
                  leading-none
                  tracking-[-1px]
                  font-semibold
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  to-[#EC4899]
                  bg-clip-text
                  text-transparent
                "
              >
                Top brands
              </h1>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p
            style={{ fontFamily: "Inter" }}
            className="
              mt-6
              max-w-[680px]
              text-center
              text-[13px]
              sm:text-[16px]
              leading-[26px]
              text-[#64748B]
            "
          >
            See how creators and brands transform engagement and revenue using
            FlowPilot automations.
          </p>

          {/* CARDS */}
          <div className="mt-14 w-full flex flex-wrap justify-center gap-5">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  w-full
                  max-w-[320px]
                  sm:max-w-[340px]
                  rounded-[20px]
                  border border-[#E2E8F0]
                  bg-white
                  p-5
                  shadow-[0px_8px_10px_-6px_rgba(226,232,240,0.5),0px_20px_25px_-5px_rgba(226,232,240,0.5)]
                  flex flex-col
                "
              >
                {/* TOP */}
                <div className="flex items-start justify-between gap-3">
                  <h1
                    style={{ fontFamily: "ClashDisplay" }}
                    className="
                      text-[18px]
                      sm:text-[20px]
                      leading-[120%]
                      font-semibold
                      text-[#0F172B]
                    "
                  >
                    {story.company}
                  </h1>

                  <div
                    className={` w-[44px] h-[44px] rounded-[14px] ${story.iconBg} flex items-center justify-center shrink-0 `}
                  >
                    <div className={`${story.iconColor} text-[22px]`}>
                      {story.icon}
                    </div>
                  </div>
                </div>

                {/* STAT */}
                <div className="mt-5">
                  <h1
                    style={{ fontFamily: "ClashDisplay" }}
                    className={`
                      text-[36px]
                      sm:text-[44px]
                      leading-none
                      tracking-[-1px]
                      font-semibold
                      bg-gradient-to-r
                      ${story.color}
                      bg-clip-text
                      text-transparent
                    `}
                  >
                    {story.stat}
                  </h1>

                  <p
                    style={{ fontFamily: "Inter" }}
                    className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[1px]
                      text-[#64748B]
                    "
                  >
                    {story.statLabel}
                  </p>
                </div>

                {/* CONTENT */}
                <div className="mt-4 flex-1">
                  <h1
                    style={{ fontFamily: "ClashDisplay" }}
                    className="
                      text-[20px]
                      sm:text-[22px]
                      leading-[115%]
                      font-semibold
                      text-[#0F172B]
                    "
                  >
                    {story.title}
                  </h1>

                  <p
                    style={{ fontFamily: "Inter" }}
                    className="
                      mt-3
                      text-[13px]
                      sm:text-[14px]
                      leading-[24px]
                      text-[#64748B]
                    "
                  >
                    {story.description}
                  </p>
                </div>

                {/* MISSING LINE FIX */}
                <div className="mt-6 border-t border-[#E2E8F0] pt-5">
                  {/* BUTTON */}
                  <button
                    onClick={() => setSelectedStory(story)}
                    style={{ fontFamily: "GeneralSans" }}
                    className="flex items-center justify-between w-full group"
                  >
                    <span className="text-[#0F172B] text-[14px] font-semibold">
                      Read full story
                    </span>

                    <div className="w-[34px] h-[34px] rounded-full bg-[#F8FAFC] flex items-center justify-center">
                      <FiChevronRight className="text-[#0F172B] text-[15px]" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm px-2 sm:px-3 py-3 sm:py-4 overflow-y-auto flex items-center justify-center "
          >
            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className=" relative w-full max-w-[520px] sm:max-w-[620px] rounded-[18px] sm:rounded-[20px] bg-white overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.4)] mx-auto "
            >
              {/* TOP */}
              <div
                className={` relative bg-gradient-to-br ${selectedStory.color} px-3 sm:px-6 py-4 sm:py-5 `}
              >
                {/* CLOSE */}
                <button
                  onClick={() => setSelectedStory(null)}
                  className=" absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full bg-white/20 flex items-center justify-center z-20 "
                >
                  <FiX className="text-white text-[14px] sm:text-[16px]" />
                </button>

                <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between gap-4">
                  {/* LEFT */}
                  <div className="max-w-[280px] sm:max-w-[320px] text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/20">
                      <FiArrowUpRight className="text-white text-[10px] sm:text-[12px]" />

                      <p
                        style={{ fontFamily: "GeneralSans" }}
                        className="text-white text-[10px] sm:text-[12px]"
                      >
                        {selectedStory.company}
                      </p>
                    </div>

                    <h1
                      style={{ fontFamily: "ClashDisplay" }}
                      className="
                  mt-3
                  text-[18px]
                  sm:text-[32px]
                  leading-[105%]
                  tracking-[1px]
                  font-semibold
                  text-white
                "
                    >
                      {selectedStory.title}
                    </h1>
                  </div>

                  {/* RIGHT CARD */}
                  <div
                    className="
                w-[180px]
                sm:w-[221.412px]
                h-[110px]
                sm:h-[141.6px]
                min-w-[180px]
                sm:min-w-[200px]
                rounded-[14px]
                sm:rounded-[16px]
                border-t border-[#FFFFFF33]
                border border-white/20
                bg-[#FFFFFF1A]
                p-4 sm:p-6
                shrink-0
                backdrop-blur-md
                flex flex-col justify-between
                self-center
                sm:self-start
                mt-2 sm:mt-8
              "
                  >
                    <p
                      style={{ fontFamily: "Inter" }}
                      className="text-white/80 text-[9px] sm:text-[11px]"
                    >
                      IMPACT
                    </p>

                    <h1
                      style={{ fontFamily: "ClashDisplay" }}
                      className="
                  text-[24px]
                  sm:text-[38px]
                  leading-none
                  font-semibold
                  text-white
                "
                    >
                      {selectedStory.stat}
                    </h1>

                    <p
                      style={{ fontFamily: "Inter" }}
                      className="
                  text-white
                  text-[9px]
                  sm:text-[11px]
                  leading-[16px]
                  sm:leading-[20px]
                "
                    >
                      {selectedStory.statLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="px-3 sm:px-6 py-4 sm:py-5">
                {/* CONTENT */}
                <div className="space-y-3 sm:space-y-4">
                  {selectedStory.fullContent.map((text, index) => (
                    <p
                      key={index}
                      style={{ fontFamily: "Inter" }}
                      className="
                  text-[11px]
                  sm:text-[14px]
                  leading-[20px]
                  sm:leading-[24px]
                  text-[#45556C]
                  text-center
                  sm:text-left
                "
                    >
                      {text}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="
              mt-5 sm:mt-6
              rounded-[12px]
              sm:rounded-[14px]
              border border-[#E2E8F0]
              bg-[#F8FAFC]
              p-3 sm:p-5
              flex flex-col
              sm:flex-row
              items-center
              sm:items-center
              justify-between
              gap-4
              text-center
              sm:text-left
            "
                >
                  <div>
                    <h1
                      style={{ fontFamily: "ClashDisplay" }}
                      className="
                  text-[15px]
                  sm:text-[22px]
                  leading-none
                  font-semibold
                  text-[#0F172B]
                "
                    >
                      Ready to see similar results?
                    </h1>

                    <p
                      style={{ fontFamily: "Inter" }}
                      className="
                  mt-2
                  text-[10px]
                  sm:text-[13px]
                  leading-[18px]
                  sm:leading-[22px]
                  text-[#64748B]
                "
                    >
                      Start building automated flows today.
                    </p>
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => navigate("/signup")}
                    style={{ fontFamily: "GeneralSans" }}
                    className="
                w-full sm:w-auto
                h-[36px]
                sm:h-[40px]
                px-4 sm:px-6
                rounded-[10px]
                sm:rounded-[12px]
                bg-gradient-to-r
                from-[#8B5CF6]
                to-[#EC4899]
                text-white
                text-[11px]
                sm:text-[13px]
                font-semibold
              "
                  >
                    Start Free Trial
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SuccessStoriesSection;
