import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import BillingComponent from "../components/BillingComponent";

const Billing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <BillingComponent
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </div>
  );
};

export default Billing;