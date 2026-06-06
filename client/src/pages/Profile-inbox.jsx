import { useState } from "react";
import "./Profile-inbox.css";

import {
  FiInstagram,
  FiUser,
  FiTag,
  FiClock,
  FiX
} from "react-icons/fi";


function Profile({user, close}){
  const name = user?.name || "Sarah Jenkins";
  const initial = name.charAt(0);
  
  // Deriving handle, email, and phone dynamically based on the selected user
  const isSarah = name.toLowerCase().includes("sarah");
  const handle = isSarah ? "@sarah.creates" : `@${name.toLowerCase().replace(/\s+/g, ".")}`;
  const email = isSarah ? "sarah@example.com" : `${name.toLowerCase().replace(/\s+/g, "")}@example.com`;
  
  const phone = name === "Sarah Johnson" || name === "Sarah Jenkins" ? "+1 (555) 019-2834" : 
                name === "Mike Chen" ? "+1 (555) 019-5821" : 
                name === "Emma Wilson" ? "+1 (555) 019-9432" : 
                name === "Alex Kumar" ? "+1 (555) 019-1104" : "+1 (555) 019-0000";

  const [tags, setTags] = useState(["Hot Lead", "Creator"]);
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTagText, setNewTagText] = useState("");

  const handleAddTag = () => {
    const trimmed = newTagText.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
    }
    setNewTagText("");
    setIsAddingTag(false);
  };

  return(
    <div className="profile-page">
      <button 
        className="back-btn"
        onClick={close}
        aria-label="Close Profile"
      >
        <FiX/>
      </button>

      <div className="profile-top">
        <div className="big-avatar">
          {initial}
        </div>
        
        <h2>{name}</h2>
        
        <p className="handle">{handle}</p>

        <div className="profile-buttons">
          <button className="insta" aria-label="Instagram">
            <FiInstagram/>
          </button>
          
          <button className="view-btn">
            View Profile
          </button>
        </div>
      </div>

      <div className="profile-body">
        <div className="section-title">
          <FiUser/>
          <span>CRM DETAILS</span>
        </div>

        <div className="info-card">
          <p>Email Address</p>
          <h4>{email}</h4>
        </div>

        <div className="info-card">
          <p>Phone Number</p>
          <h4>{phone}</h4>
        </div>

        <div className="section-title">
          <FiTag/>
          <span>TAGS</span>
        </div>

        <div className="tags">
          {tags.map((tag) => (
            <button key={tag}>{tag}</button>
          ))}
          {isAddingTag ? (
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={newTagText}
                onChange={(e) => setNewTagText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddTag();
                  if (e.key === "Escape") { setIsAddingTag(false); setNewTagText(""); }
                }}
                className="border border-[#e2e8f0] rounded-lg px-2 py-1 text-xs outline-none bg-white font-semibold text-slate-700 w-20"
                placeholder="Tag..."
                autoFocus
              />
              <button 
                onClick={handleAddTag} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold px-2 py-1 rounded-md cursor-pointer"
              >
                Add
              </button>
              <button 
                onClick={() => { setIsAddingTag(false); setNewTagText(""); }} 
                className="bg-slate-100 hover:bg-slate-200 text-slate-500 text-[11px] font-bold px-2 py-1 rounded-md cursor-pointer"
              >
                X
              </button>
            </div>
          ) : (
            <button className="add-tag" onClick={() => setIsAddingTag(true)}>+</button>
          )}
        </div>

        <div className="section-title">
          <FiClock/>
          <span>RECENT ACTIVITY</span>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {/* Row 1: Guide Sent (on the right) */}
          <div className="timeline-row right-row">
            <div className="timeline-spacer"></div>
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot blue-dot"></div>
            </div>
            <div className="timeline-card-wrapper">
              <div className="timeline-card">
                <h4>Guide Sent</h4>
                <p>Automated<br />DM sent</p>
              </div>
            </div>
          </div>

          {/* Row 2: Lead Captured (on the left) */}
          <div className="timeline-row left-row">
            <div className="timeline-card-wrapper">
              <div className="timeline-card">
                <h4>Lead Captured</h4>
                <p>Email provided</p>
              </div>
            </div>
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot green-dot"></div>
            </div>
            <div className="timeline-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
