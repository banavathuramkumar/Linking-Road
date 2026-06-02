import React from "react";

const TrustedBy = () => {
  const companies = [
    "Acme Corp",
    "GlobalTech",
    "Nexus",
    "Stark Ind",
    "Wayne Ent",
    "Hooli",
  ];

  return (
    <section className="w-full border-y border-[#E2E8F099] bg-[#FFFFFF80] py-12 sm:py-16 lg:py-[48.8px] px-6 sm:px-10 lg:px-[120px]">
      {/* TOP TEXT */}
      <div className="flex items-center justify-center">
        <p
          style={{ fontFamily: "Inter" }}
          className="text-[12px] sm:text-[14px] leading-[20px] tracking-[1.4px] text-center uppercase font-medium text-[#90A1B9]"
        >
          Trusted By Next-Generation Growth Teams
        </p>
      </div>

      {/* COMPANY GRID */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 sm:gap-y-14 gap-x-8 place-items-center">
        {companies.map((company, index) => (
          <h1
            key={index}
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[20px] sm:text-[22px] lg:text-[24px] leading-[32px] tracking-[0px] font-bold text-[#1D293D] text-center"
          >
            {company}
          </h1>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
