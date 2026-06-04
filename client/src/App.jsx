import React from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import FAQs from "./pages/FAQs";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Referrals from "./pages/Referrals";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/solutions" element={<Solutions/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/faqs" element={<FAQs/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/referrals" element={<Referrals/>} />
        <Route path="/billing" element={<Billing/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/notifications" element={<Notifications/>} />
      </Routes>
    </div>
  );
};

export default App;
