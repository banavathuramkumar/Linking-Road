import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ReferralComponent from "../components/ReferralComponent";

const Referrals = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <ReferralComponent
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </div>
  );
};

export default Referrals;