import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#F6F1FF]">
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1220px] h-[697px] rounded-full bg-[#4C229E] blur-[220px] opacity-80" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
