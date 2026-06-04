import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import {
  FiUser,
  FiBriefcase,
  FiBell,
  FiMonitor,
  FiShield,
  FiKey,
  FiLink,
  FiDownload,
  FiAlertTriangle,
} from "react-icons/fi";
import ProfileSettings from "./ProfileSettings";
import WorkSpaceSettings from "./WorkSpaceSettings";
import NotificationSettings from "./NotificationSettings";
import SecurityAndAccess from "./SecurityAndAccess";
import APIKeys from "./APIKeys";
import ConnectedAccounts from "./ConnectedAccounts";
import DataExport from "./DataExport";
import AppearanceSettings from "./AppearanceSettings";

const SettingsSidebar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [activeTab, setActiveTab] = useState("profile");

  const menuItems = [
    {
      title: "ACCOUNT",
      items: [
        {
          id: "profile",
          name: "Profile Settings",
          icon: FiUser,
        },
        {
          id: "workspace",
          name: "Workspace",
          icon: FiBriefcase,
        },
      ],
    },
    {
      title: "PREFERENCES",
      items: [
        {
          id: "notifications",
          name: "Notifications",
          icon: FiBell,
        },
        {
          id: "appearance",
          name: "Appearance",
          icon: FiMonitor,
        },
      ],
    },
    {
      title: "SECURITY & DEVELOPERS",
      items: [
        {
          id: "security",
          name: "Security & Access",
          icon: FiShield,
          dot: true,
        },
        {
          id: "apikeys",
          name: "API Keys",
          icon: FiKey,
        },
        {
          id: "connected",
          name: "Connected Accounts",
          icon: FiLink,
        },
      ],
    },
    {
      title: "DATA",
      items: [
        {
          id: "export",
          name: "Data & Export",
          icon: FiDownload,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-6 p-4 md:p-6">
      {/* SIDEBAR */}
      {/* MOBILE HEADER */}
      <div className="lg:hidden w-full flex items-center bg-white border-b border-[#E2E8F0] p-4 mb-4 rounded-xl">
        {/* MOBILE SLIDE SIDEBAR */}
        <>
          {/* Overlay */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`
      fixed
      top-0
      left-0
      h-screen
      w-[280px]
      bg-white
      z-50
      p-5
      overflow-y-auto
      shadow-2xl
      transform
      transition-transform
      duration-300
      lg:hidden
      ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
    `}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[20px] font-semibold">Settings</h2>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[24px]"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {menuItems.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-4 text-[12px] font-semibold text-[#94A3B8] uppercase">
                    {section.title}
                  </h3>

                  <div>
                    {section.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id);
                            setMobileMenuOpen(false);
                          }}
                          className={`
                    w-full
                    h-[40px]
                    px-4
                    rounded-[14px]
                    flex
                    items-center
                    justify-between
                    transition-all
                    duration-300
                    ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white"
                        : "text-[#475569]"
                    }
                  `}
                        >
                          <div className="flex items-center gap-3">
                            <Icon size={16} />
                            <span className="text-[15px]">{item.name}</span>
                          </div>

                          {item.dot && (
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
        <button
          onClick={() => {
            if (typeof setMobileMenuOpen === "function") {
              setMobileMenuOpen(true);
            }
          }}
          className="p-2 rounded-lg hover:bg-[#F8FAFC]"
        >
          <FiMenu size={24} />
        </button>

        <h1 className="ml-3 text-[18px] font-semibold">Settings</h1>
      </div>
      <div className=" hidden lg:block w-[256px] h-fit px-4 py-2 rounded-[20px] bg-white self-start sticky top-6 ">
        <div className="flex flex-col gap-3">
          {menuItems.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-[12px] font-semibold text-[#94A3B8] uppercase">
                {section.title}
              </h3>

              <div>
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`
                        w-full
                        h-[40px]
                        px-4
                        rounded-[14px]
                        flex
                        items-center
                        justify-between
                        transition-all
                        duration-300

                        ${
                          activeTab === item.id
                            ? "bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white shadow-[0px_6px_18px_rgba(236,72,153,0.3)]"
                            : item.danger
                              ? "text-[#FF3B30]"
                              : "text-[#475569]"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} />

                        <span className="text-[15px]">{item.name}</span>
                      </div>

                      {item.dot && (
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full flex-1 px-0 lg:px-6">
        {activeTab === "profile" && (
          <div>
            <ProfileSettings />
          </div>
        )}

        {activeTab === "workspace" && (
          <div>
            <WorkSpaceSettings />
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <NotificationSettings />
          </div>
        )}

        {activeTab === "appearance" && (
          <div>
            <AppearanceSettings />
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <SecurityAndAccess />
          </div>
        )}

        {activeTab === "apikeys" && (
          <div>
            <APIKeys />
          </div>
        )}

        {activeTab === "connected" && (
          <div>
            <ConnectedAccounts />
          </div>
        )}

        {activeTab === "export" && (
          <div className="flex-1 h-[calc(100vh-80px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#CBD5E1] scrollbar-track-transparent">
            <DataExport />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsSidebar;
