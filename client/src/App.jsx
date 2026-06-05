import React from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import FAQs from "./pages/FAQs";
import Automations from "./pages/Automations";
import Leads from "./pages/Leads";
import WorkflowBuilder from "./pages/WorkflowBuilder";
import Templates from "./pages/Templates";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Referrals from "./pages/Referrals";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import Inbox from "./pages/Inbox";
import Analytics from "./pages/Analytics";


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
        <Route path="/automations" element={<Automations />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/automations/builder" element={<WorkflowBuilder />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
};

export default App;
