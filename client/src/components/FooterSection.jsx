import React from "react";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

const FooterSection = () => {
  const footerLinks = {
    Product: ["Features", "Integrations", "Pricing"],
    Resources: ["Help Center", "Community", "Templates"],
    Company: ["About", "Careers", "Privacy", "Terms"],
  };

  return (
    <footer className="relative overflow-hidden bg-[#0F172A] border-t border-[#1D293D]">
      {/* MAIN FOOTER */}
      <div
        className="
        relative
        max-w-[1440px]
        min-h-[449px]
        mx-auto
        px-6
        sm:px-10
        lg:px-[80px]
        pt-[80px]
        pb-[40px]
        "
      >
        {/* CENTER BACKGROUND TITLE */}
        <div
          style={{ fontFamily: "ClashDisplay" }}
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[90px]
          sm:text-[140px]
          lg:text-[200px]
          leading-none
          font-semibold
          text-[#6B64F21A]
          pointer-events-none
          select-none
          whitespace-nowrap
          z-0
          "
        >
          LINKINGROAD
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          {/* TOP */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[420px_1fr_1fr_1fr] gap-14">
            {/* LEFT */}
            <div>
              {/* LOGO */}
              <img
                src="/logo.png"
                alt="logo"
                className="w-[232px] h-[50px] object-contain"
              />

              {/* PARAGRAPH */}
              <p
                style={{ fontFamily: "Inter" }}
                className="
                mt-8
                text-[#90A1B9]
                text-[16px]
                leading-[32px]
                max-w-[340px]
                "
              >
                Build engagement machines. Not manual work. The ultimate AI
                automation platform for modern growth teams.
              </p>

              {/* SOCIALS */}
              <div className="flex items-center gap-4 mt-8">
                {[<FiTwitter />, <FiLinkedin />, <FiGithub />].map(
                  (icon, index) => (
                    <div
                      key={index}
                      className="
                    w-[42px]
                    h-[42px]
                    rounded-[12px]
                    border
                    border-[#233047]
                    bg-[#131E33]
                    flex
                    items-center
                    justify-center
                    text-[#90A1B9]
                    text-[18px]
                    hover:border-[#7C3AED]
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    "
                    >
                      {icon}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* LINKS */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div key={index}>
                {/* HEADING */}
                <h3
                  style={{ fontFamily: "ClashDisplay" }}
                  className="
                  text-white
                  text-[16px]
                  leading-[24px]
                  font-semibold
                  "
                >
                  {title}
                </h3>

                {/* LINKS */}
                <div className="mt-6 flex flex-col gap-4">
                  {links.map((link, i) => (
                    <a
                      key={i}
                      href="/"
                      style={{ fontFamily: "Inter" }}
                      className="
                      text-[#90A1B9]
                      text-[16px]
                      leading-[24px]
                      hover:text-white
                      transition-all
                      duration-300
                      w-fit
                      "
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* DIVIDER */}
          <div className="w-full h-[1px] bg-[#1D293D] mt-16" />

          {/* BOTTOM */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* COPYRIGHT */}
            <p
              style={{ fontFamily: "Inter" }}
              className="
              text-[#90A1B9]
              text-[14px]
              leading-[20px]
              "
            >
              © 2026 FlowPilot Inc. All rights reserved.
            </p>

            {/* STATUS */}
            <div className="flex items-center gap-3">
              <div className="w-[10px] h-[10px] rounded-full bg-[#00D26A]" />

              <p
                style={{ fontFamily: "Inter" }}
                className="
                text-[#90A1B9]
                text-[14px]
                leading-[20px]
                "
              >
                Systems Operational
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
