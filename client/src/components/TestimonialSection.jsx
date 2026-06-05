import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const TestimonialSection = () => {
  const testimonials = [
    {
      review:
        '"FlowPilot completely changed how we handle inbound leads. We generate 3x more calls directly from Instagram comments now."',
      name: "Sarah Jenkins",
      role: "Growth Head, StartupX",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      review:
        '"The visual workflow builder is lightyears ahead of anything else. It feels like magic when you see the automations run."',
      name: "David Chen",
      role: "Founder, CreatorBrand",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      review:
        '"We replaced three different tools with FlowPilot. The unified inbox and AI routing saves our team 20 hours a week."',
      name: "Michael Ross",
      role: "VP Marketing, EcomLabs",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] px-4 sm:px-6 lg:px-8 py-[96px] overflow-hidden">
      {/* MAIN CONTAINER */}
      <motion.div
        className="max-w-[1179px] mx-auto"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* TOP CONTENT */}
        <div className="flex flex-col items-center">
          {/* HEADING */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* NORMAL HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[40px] sm:text-[54px] lg:text-[64px] leading-[42px] sm:leading-[56px] lg:leading-[64px] tracking-[-1.5px] font-semibold text-[#0F172A]"
            >
              Loved By
            </motion.h1>
            {/* GRADIENT CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 120,
              }}
              className="rotate-[-2deg] bg-white rounded-[22px] px-6 sm:px-8 py-2 shadow-[0px_4px_4px_0px_#00000030]"
            >
              <h1
                style={{ fontFamily: "ClashDisplay" }}
                className="text-[40px] sm:text-[54px] lg:text-[64px] leading-[42px] sm:leading-[56px] lg:leading-[64px] tracking-[-1.5px] font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent"
              >
                Growth Teams
              </h1>
            </motion.div>
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="w-full min-h-[306px] rounded-[24px] border border-[#E2E8F0] border-t border-t-[#E2E8F0] bg-white p-8 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              {/* STARS */}
              <motion.div
                className="flex items-center gap-2"
                variants={fadeDown}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    className="text-[#EAB308] fill-[#EAB308] text-[18px]"
                  />
                ))}
              </motion.div>

              {/* REVIEW */}
              <motion.p
                style={{ fontFamily: "Inter" }}
                className="mt-8 text-[18px] leading-[44px] text-[#334155]"
                variants={fadeUp}
              >
                {item.review}
              </motion.p>

              {/* USER */}
              <motion.div
                className="mt-10 flex items-center gap-4"
                variants={fadeUp}
              >
                {/* IMAGE */}
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-[56px] h-[56px] rounded-full object-cover"
                  whileHover={{ scale: 1.05 }}
                />
                {/* USER INFO */}
                <div>
                  {/* NAME */}
                  <motion.h1
                    style={{ fontFamily: "GeneralSans" }}
                    className="text-[24px] leading-[28px] font-semibold text-[#0F172A]"
                    variants={fadeUp}
                  >
                    {item.name}
                  </motion.h1>
                  {/* ROLE */}
                  <motion.p
                    style={{ fontFamily: "Inter" }}
                    className="mt-1 text-[16px] leading-[24px] text-[#64748B]"
                    variants={fadeUp}
                  >
                    {item.role}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
