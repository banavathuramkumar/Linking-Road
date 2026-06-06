import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Inbox.css";
import ProfileInbox from "./Profile-inbox";
import Sidebar from "../components/Sidebar";

import {
  FiSearch,
  FiStar,
  FiMoreVertical,
  FiPaperclip,
  FiSmile,
  FiSend,
  FiUser,
  FiMenu,
  FiX
} from "react-icons/fi";

const users = [
  {
    name: "Sarah Johnson",
    msg: "Thanks for the guide! Can I get more info?",
    time: "2m ago",
    status: "active",
    count: 2,
    gender: "female"
  },
  {
    name: "Mike Chen",
    msg: "Interested in your product",
    time: "15m ago",
    status: "automated",
    count: 1,
    gender: "male"
  },
  {
    name: "Emma Wilson",
    msg: "When is the next webinar?",
    time: "1h ago",
    status: "active",
    gender: "female"
  },
  {
    name: "Alex Kumar",
    msg: "Love your content!",
    time: "2h ago",
    status: "automated",
    gender: "male"
  }
];

function Inbox() {
  const [selected, setSelected] = useState(users[0]);
  const [search, setSearch] = useState("");
  const [starred, setStarred] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [msgText, setMsgText] = useState("");
  const [dynamicMsgs, setDynamicMsgs] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const popularEmojis = ["😊", "😂", "👍", "❤️", "🔥", "🎉", "👀", "🤔", "💡", "✨"];


  const getTime = () => {
    const now = new Date();
    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, "0");
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
  };

  const sendMessage = () => {
    const text = msgText.trim();
    if (!text) return;
    const userMsg = { id: Date.now(), text, side: "right", time: getTime() };
    setDynamicMsgs(prev => [...prev, userMsg]);
    setMsgText("");
    setTimeout(() => {
      const replyMsg = { id: Date.now() + 1, text: "I will help you", side: "left", time: getTime() };
      setDynamicMsgs(prev => [...prev, replyMsg]);
    }, 1000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      toast.success(`Selected file: ${file.name}`);
      const fileMsg = {
        id: Date.now(),
        text: `📎 Attached file: ${file.name}`,
        side: "right",
        time: getTime()
      };
      setDynamicMsgs(prev => [...prev, fileMsg]);
      
      // Simulate automatic response to attachment
      setTimeout(() => {
        const replyMsg = {
          id: Date.now() + 1,
          text: `Received file: ${file.name}. Processing attachment...`,
          side: "left",
          time: getTime()
        };
        setDynamicMsgs(prev => [...prev, replyMsg]);
      }, 1000);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] overflow-x-hidden text-slate-800">
      {/* Sidebar Component */}
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      <div className={`inbox-page ${isChatOpen ? "chat-open" : ""} ${showProfile ? "profile-open" : ""}`}>
        <div className="conversation">
          {/* Mobile menu trigger */}
          <div className="conversation-header lg:hidden flex items-center p-3 border-b border-slate-100 bg-white">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm active:scale-95 mr-2 cursor-pointer flex items-center justify-center"
            >
              <FiMenu className="w-5 h-5 text-slate-700" />
            </button>
            <span className="font-bold text-slate-800 font-['ClashDisplay']">Inbox</span>
          </div>

          <div className="search-box">
            {!search && <FiSearch />}
            <input
              placeholder="Search conversations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {users.map((user) => (
            <div
              key={user.name}
              onClick={() => {
                setSelected(user);
                setIsChatOpen(true);
              }}
              className={
                selected.name === user.name
                  ? "person active-person"
                  : "person"
              }
            >
              <div className="avatar">
                {user.gender === "female" ? "👩" : "👨"}
              </div>

              <div className="person-data">
                <div className="person-top">
                  <h3>{user.name}</h3>
                  <span>{user.time}</span>
                </div>

                <p>{user.msg}</p>

                <div className="badges">
                  <label className={user.status}>
                    {user.status}
                  </label>
                  {user.count && <b>{user.count}</b>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="chat">
          <div className="chat-header">
            {/* Close chat on mobile */}
            <button
              onClick={() => setIsChatOpen(false)}
              className="chat-back-btn"
              aria-label="Close Chat"
            >
              <FiX />
            </button>

            <div className="profile">
              <div className="avatar">
                {selected.gender === "female" ? "👩" : "👨"}
              </div>
              <div>
                <h2>{selected.name}</h2>
                <p>@sarahj</p>
              </div>
            </div>

            <div className="actions">
              <FiStar
                className={starred ? "star-icon starred" : "star-icon"}
                onClick={() => setStarred(!starred)}
              />

              <div className="menu-wrapper">
                <FiMoreVertical onClick={() => setShowMenu(!showMenu)} />

                {showMenu && (
                  <div className="menu-popup">
                    <div
                      className="menu-item"
                      onClick={() => {
                        setShowProfile(true);
                        setShowMenu(false);
                      }}
                    >
                      <FiUser />
                      Profile
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="messages">
            <div className="left-msg">
              <p>Hi! I saw your post about the free guide</p>
              <span>2:30 PM</span>
            </div>

            <div className="right-msg">
              <label>🤖 Automated</label>
              <p>
                Thanks for reaching out! I would love to send you the guide.
                What is your email?
              </p>
              <span>2:30 PM</span>
            </div>

            <div className="left-msg">
              <p>sarah.j@email.com</p>
              <span>2:31 PM</span>
            </div>

            <div className="right-msg">
              <label>🤖 Automated</label>
              <p>Perfect! Check your inbox - the guide is on its way</p>
              <span>2:31 PM</span>
            </div>

            <div className="left-msg">
              <p>Thanks for the guide! Can I get more info?</p>
              <span>2:45 PM</span>
            </div>

            {dynamicMsgs.map((m) => (
              <div key={m.id} className={m.side === "right" ? "right-msg" : "left-msg"}>
                <p>{m.text}</p>
                <span>{m.time}</span>
              </div>
            ))}
          </div>

          <div className="send-box">
            <label htmlFor="file-upload" className="cursor-pointer flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-colors">
              <FiPaperclip className="w-5 h-5" />
            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <input
              placeholder="Type a message..."
              value={msgText}
              onChange={(e) => setMsgText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <div className="relative flex items-center">
              <FiSmile 
                className="cursor-pointer text-slate-500 hover:text-indigo-600 transition-colors w-5 h-5" 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              />
              {showEmojiPicker && (
                <div className="absolute bottom-full right-0 mb-2 bg-white border border-slate-200 rounded-2xl p-2.5 shadow-lg flex gap-2 z-50">
                  {popularEmojis.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => {
                        setMsgText(prev => prev + emoji);
                        setShowEmojiPicker(false);
                      }}
                      className="hover:scale-125 transition-transform duration-100 text-lg cursor-pointer p-1"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={sendMessage}>
              <FiSend />
              Send
            </button>
          </div>
        </div>

        {showProfile && (
          <>
            <div 
              className="fixed inset-0 bg-slate-900/25 backdrop-blur-[6px] z-40 transition-all duration-300 cursor-pointer"
              onClick={() => setShowProfile(false)}
              aria-hidden="true"
            />
            <ProfileInbox
              user={selected}
              close={() => setShowProfile(false)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Inbox;
