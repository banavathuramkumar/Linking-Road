import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full fixed bg-white top-0 left-0 z-50 px-4 py-3">
      {/* NAVBAR CONTAINER */}
      <div className="w-full h-[72px] bg-white rounded-full border border-[#E2E8F0] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] px-5 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
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
          <div className="h-[46px] px-2 flex items-center gap-1 rounded-full border border-[#E2E8F0] bg-[#FFFFFF] shadow-[0px_1px_3px_rgba(0,0,0,0.06)]">
            {[
              { name: "Features", path: "/features" },
              { name: "Solutions", path: "/solutions" },
              { name: "Pricing", path: "/pricing" },
              { name: "FAQ's", path: "/faqs" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="h-[38px] px-5 rounded-full text-[15px] font-medium text-[#64748B] hover:text-[#0F172B] hover:bg-[#F8FAFC] transition-all duration-300"
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
            className="text-[15px] font-semibold text-[#64748B] hover:text-[#0F172B] transition-all duration-300"
          >
            Login
          </button>

          {/* CTA BUTTON */}
          <button
            onClick={() => navigate("/signup")}
            className="h-[44px] px-6 rounded-full bg-[#4C229E] text-white text-[15px] font-semibold shadow-[0px_10px_20px_rgba(76,34,158,0.28)] hover:scale-[1.02] transition-all duration-300"
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
          {[
            { name: "Features", path: "/features" },
            { name: "Solutions", path: "/solutions" },
            { name: "Pricing", path: "/pricing" },
            { name: "FAQ's", path: "/faqs" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setMobileMenu(false);
              }}
              className="w-full h-[48px] rounded-2xl bg-[#F8FAFC] text-[#0F172B] text-[15px] font-medium"
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
            className="w-full h-[48px] rounded-2xl border border-[#E2E8F0] text-[#0F172B] text-[15px] font-medium mt-2"
          >
            Login
          </button>

          {/* START AUTOMATING */}
          <button
            onClick={() => {
              navigate("/signup");
              setMobileMenu(false);
            }}
            className="w-full h-[50px] rounded-2xl bg-[#4C229E] text-white text-[15px] font-semibold shadow-[0px_10px_25px_rgba(76,34,158,0.28)]"
          >
            Start Automating
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
