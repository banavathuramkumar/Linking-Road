import React, { useState } from "react";
import SettingsHeader from "../components/SettingsHeader";
import SettingsSidebar from "../components/SettingsSidebar";

const Settings = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-[#090D16]">
      <div className="flex-1">
        <SettingsHeader setMobileMenuOpen={setMobileMenuOpen} />
        <SettingsSidebar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
    </div>
  );
};

export default Settings;
