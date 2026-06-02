import React from "react";
import { motion } from "framer-motion";

import {
  FiMessageSquare,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

const supportOptions = [
  {
    id: 1,
    icon: <FiMessageSquare />,
    title: "Chat with us",
    description:
      "Our friendly team is here to help you get unstuck.",
    action: "Start a chat",
  },
  {
    id: 2,
    icon: <FiMail />,
    title: "Email support",
    description:
      "Prefer to email? Send us a message anytime.",
    action: "hello@flowpilot.com",
  },
];

const ContactSupportSection = () => {
  return (

    <section className="w-full bg-[#F8FAFC] overflow-hidden">

      {/* OUTER CONTAINER */}
      <div
        className="
        max-w-[1440px]
        min-h-[381px]
        mx-auto
        px-6
        sm:px-8
        lg:px-[141px]
        pt-[96px]
        pb-16
        "
      >

        {/* INNER WRAPPER */}
        <div
          className="
          w-full
          mb-8
          max-w-[1108px]
          mx-auto
          flex
          flex-col
          md:flex-row
          items-center
          justify-center
          gap-6
          "
        >

          {supportOptions.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
              }}
              className="
              w-full
              max-w-[408px]
              min-h-[190px]
              rounded-[24px]
              border
              border-[#E2E8F0]
              bg-white
              p-8
              shadow-[0px_1px_3px_rgba(0,0,0,0.08)]
              transition-all
              duration-300
              "
            >

              <div className="flex items-start gap-6">

                {/* ICON */}
                <div
                  className="
                  w-[48px]
                  h-[48px]
                  rounded-[14px]
                  bg-[#EEF2FF]
                  flex
                  items-center
                  justify-center
                  text-[#5B4BFF]
                  text-[24px]
                  shrink-0
                  "
                >
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div className="flex-1">

                  {/* TITLE */}
                  <h3
                    style={{ fontFamily: "ClashDisplay" }}
                    className="
                    text-[#0F172B]
                    text-[24px]
                    leading-[1.1]
                    font-semibold
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="
                    mt-4
                    text-[#64748B]
                    text-[16px]
                    leading-[32px]
                    max-w-[260px]
                    "
                  >
                    {item.description}
                  </p>

                  {/* ACTION */}
                  <button
                    style={{ fontFamily: "ClashDisplay" }}
                    className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-[#4F46E5]
                    text-[18px]
                    font-semibold
                    hover:gap-3
                    transition-all
                    duration-300
                    "
                  >

                    {item.action}

                    <FiArrowRight className="text-[18px]" />

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ContactSupportSection;