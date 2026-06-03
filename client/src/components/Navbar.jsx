import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { name: "Features", path: "/features" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ's", path: "/faqs" },
  ];

  return (
    <div className="w-full fixed bg-white top-0 left-0 z-50 px-4 py-3">
      {/* NAVBAR */}
      <div className="w-full h-[72px] bg-white rounded-full border border-[#E2E8F0] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] px-5 lg:px-8 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            } else {
              navigate("/");

              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }, 100);
            }
          }}
          className="cursor-pointer flex items-center shrink-0"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="h-8 lg:h-9 w-auto object-contain"
          />
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center">
          <div className="h-[46px] px-2 flex items-center gap-1 rounded-full border border-[#E2E8F0] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.06)]">

            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`h-[38px] px-5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-[#F3F0FF] text-[#4C229E] shadow-[0px_2px_8px_rgba(76,34,158,0.10)]"
                    : "text-[#64748B] hover:text-[#0F172B] hover:bg-[#F8FAFC]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-5">

          {/* LOGIN */}
          <button
            onClick={() => navigate("/login")}
            className={`text-[15px] font-semibold transition-all duration-300 ${
              location.pathname === "/login"
                ? "text-[#4C229E]"
                : "text-[#64748B] hover:text-[#0F172B]"
            }`}
          >
            Login
          </button>

          {/* CTA */}
          <button
            onClick={() => navigate("/signup")}
            className={`h-[44px] px-6 rounded-full text-[15px] font-semibold transition-all duration-300 shadow-[0px_10px_20px_rgba(76,34,158,0.28)] ${
              location.pathname === "/signup"
                ? "bg-[#2E1065] text-white"
                : "bg-[#4C229E] text-white hover:scale-[1.02]"
            }`}
          >
            Start Automating
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center"
        >
          {mobileMenu ? (
            <HiX className="text-[24px] text-[#0F172B]" />
          ) : (
            <HiMenu className="text-[24px] text-[#0F172B]" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden mt-3 w-full rounded-[28px] bg-white border border-[#E2E8F0] shadow-[0px_25px_60px_rgba(0,0,0,0.08)] p-5 flex flex-col gap-3">

          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setMobileMenu(false);
              }}
              className={`w-full h-[48px] rounded-2xl text-[15px] font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-[#F3F0FF] text-[#4C229E]"
                  : "bg-[#F8FAFC] text-[#0F172B]"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* LOGIN */}
          <button
            onClick={() => {
              navigate("/login");
              setMobileMenu(false);
            }}
            className={`w-full h-[48px] rounded-2xl border text-[15px] font-medium mt-2 transition-all duration-300 ${
              location.pathname === "/login"
                ? "border-[#4C229E] bg-[#F3F0FF] text-[#4C229E]"
                : "border-[#E2E8F0] text-[#0F172B]"
            }`}
          >
            Login
          </button>

          {/* START AUTOMATING */}
          <button
            onClick={() => {
              navigate("/signup");
              setMobileMenu(false);
            }}
            className={`w-full h-[50px] rounded-2xl text-[15px] font-semibold shadow-[0px_10px_25px_rgba(76,34,158,0.28)] transition-all duration-300 ${
              location.pathname === "/signup"
                ? "bg-[#2E1065] text-white"
                : "bg-[#4C229E] text-white"
            }`}
          >
            Start Automating
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

