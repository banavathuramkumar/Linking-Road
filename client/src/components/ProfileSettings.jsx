import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { motion } from "framer-motion";

const ProfileSettings = () => {
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
  );

  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Chen",
    email: "alex@flowpilot.io",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    );
  };

  const handleSave = () => {
    console.log("Saved:", formData);
  };

  return (
    <div className="w-full max-w-[768px] mx-auto px-3 sm:px-4">
      {/* HEADER */}
      <div className="mb-4">
        <h1
          style={{ fontFamily: "ClashDisplay" }}
          className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight font-semibold text-[#0F172A]"
        >
          Profile Settings
        </h1>

        <p
          style={{ fontFamily: "Inter" }}
          className="mt-2 text-[14px] md:text-[16px] text-[#64748B]"
        >
          Manage your personal information and preferences.
        </p>
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-white p-4 sm:p-5 md:p-6 rounded-[16px] border border-[#E2E8F0CC] shadow-[0px_1px_3px_rgba(0,0,0,0.08)]"
      >
        {/* PROFILE PICTURE SECTION */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          {/* IMAGE */}
          <div className="relative shrink-0">
            <img
              src={profileImage}
              alt="Profile"
              className="w-[80px] h-[80px] sm:w-[70px] sm:h-[70px] rounded-full object-cover border-[2px] border-[#8B5CF6]"
            />

            <label
              htmlFor="profile-upload"
              className=" absolute -bottom-1 -right-1 w-[22px] h-[22px] rounded-full bg-white border border-[#E2E8F0] flex justify-center cursor-pointer shadow-sm "
            >
              <FiCamera size={11} />
            </label>
          </div>

          {/* CONTENT */}
          <div className="flex-1 text-center sm:text-left">
            <h3
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[20px] font-semibold text-[#0F172A]"
            >
              Profile Picture
            </h3>

            <p
              style={{ fontFamily: "Inter" }}
              className="mt-1 text-[14px] text-[#64748B]"
            >
              PNG, JPG or GIF. Max 2MB.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-4">
              <label
                htmlFor="profile-upload"
                className="
          h-[40px]
          px-5
          rounded-[10px]
          border
          border-[#E2E8F0]
          bg-white
          text-[#334155]
          text-[15px]
          flex
          items-center
          justify-center
          cursor-pointer
          transition-all
          hover:bg-[#F8FAFC]
        "
              >
                Upload New
              </label>

              <button
                onClick={handleRemoveImage}
                className="
          text-[15px]
          font-medium
          text-red-500
          hover:text-red-600
        "
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 sm:mt-8">
          <div>
            <label
              style={{ fontFamily: "Inter" }}
              className="block mb-2 text-[#334155] text-[15px]"
            >
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="
w-full
h-[48px]
px-4
rounded-[12px]
border
border-[#E2E8F0]
bg-[#F8FAFC]
outline-none
text-[15px]
focus:border-[#8B5CF6]
transition-all
"
            />
          </div>

          <div>
            <label
              style={{ fontFamily: "Inter" }}
              className="block mb-2 text-[#334155] text-[15px]"
            >
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="
w-full
h-[48px]
px-4
rounded-[12px]
border
border-[#E2E8F0]
bg-[#F8FAFC]
outline-none
text-[15px]
focus:border-[#8B5CF6]
transition-all
"
            />
          </div>
        </div>

        {/* EMAIL */}
        <div className="mt-6">
          <label
            style={{ fontFamily: "Inter" }}
            className="block mb-2 text-[#334155] text-[15px]"
          >
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" w-full h-[48px] px-4 rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] outline-none text-[15px] focus:border-[#8B5CF6] transition-all "
          />
        </div>

        {/* SAVE BUTTON */}
        <div className="border-t border-[#E2E8F0] mt-8 pt-6 flex justify-center sm:justify-end">
          <button
            onClick={handleSave}
            style={{ fontFamily: "Inter" }}
            className=" w-full sm:w-auto h-[48px] px-8 rounded-[14px] bg-[#4C229E] text-white font-medium shadow-[0px_4px_6px_-4px_rgba(97,95,255,0.5)] transition-all duration-300 hover:bg-[#5B2BB8] hover:-translate-y-1 hover:shadow-[0px_12px_30px_rgba(97,95,255,0.35)] active:scale-[0.98] "
          >
            Save Changes
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileSettings;
