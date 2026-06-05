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
          <button>Hot Lead</button>
          <button>Creator</button>
          <button className="add-tag">+</button>
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
