import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";

const assistIconStyles = {
  width: 56,
  height: 56,
  borderRadius: 9999,
  padding: 16,
  background: "linear-gradient(90deg, #4F39F6 0%, #9810FA 100%)",
  boxShadow: "0px 4px 6px -4px #615FFF4D, 0px 10px 15px -3px #615FFF4D",
  opacity: 1,
  cursor: "pointer",
  zIndex: 1000,
};

const chatBoxStyles = {
  width: "min(400px, calc(100vw - 24px))",
  height: "min(584px, 75vh)",
  maxHeight: "75vh",
  borderRadius: 16,
  overflow: "hidden",
  background: "#FFFFFF",
  boxShadow: "0px 8px 40px 0px #0000001F",
  borderTop: "0.8px solid #E2E8F0",
  opacity: 1,
  zIndex: 999,
};

const AIChatAssistant = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! I'm your FlowPilot AI Assistant. I'm here to help you reduce setup complexity and optimize your workflows.\n\nHow can I help you today?",
    },
    {
      type: "user",
      text: "I need help with DM Generation",
    },
    {
      type: "ai",
      text: "I can help you generate high-converting DMs. What's the goal of your message? (e.g., welcome new followers, share a lead magnet, book a call)",
    },
  ]);

  const hideOnPaths = ["/login", "/signup", "/", "/inbox", ];
  if (hideOnPaths.includes(location.pathname)) return null;

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: `I understand. Here's a suggestion for "${message}":\n\nThanks for reaching out! We'd love to help you achieve your goals. Let me know more details and I'll generate a personalized DM sequence.`,
        },
      ]);
    }, 700);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: 96,
              right: 24,
              ...chatBoxStyles,
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div
                style={{
                  width: "100%",
                  height: "68.8px",
                  padding: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background:
                    "linear-gradient(90deg, #4F39F6 0%, #9810FA 100%)",
                  borderBottom: "0.8px solid #F1F5F9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    ✦
                  </div>

                  <div>
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      LINKINGROAD
                    </h3>

                    <p
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: 13,
                        margin: 0,
                      }}
                    >
                      Assistant & Co-pilot
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: 20,
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Chat body */}
              <div
                style={{
                  flex: 1,
                  padding: 16,
                  overflowY: "auto",
                  background: "#F8FAFC",
                }}
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent:
                        msg.type === "user" ? "flex-end" : "flex-start",
                      marginBottom: 16,
                    }}
                  >
                    {msg.type === "ai" && (
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          background: "#EEF2FF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 10,
                          flexShrink: 0,
                        }}
                      >
                        ✦
                      </div>
                    )}

                    <div
                      style={{
                        maxWidth: "80%",
                        padding: "14px 16px",
                        borderRadius: 16,
                        background:
                          msg.type === "user"
                            ? "linear-gradient(90deg,#4F39F6,#615FFF)"
                            : "#FFFFFF",
                        color: msg.type === "user" ? "#fff" : "#334155",
                        border:
                          msg.type === "ai" ? "1px solid #E2E8F0" : "none",
                        whiteSpace: "pre-line",
                        fontSize: 14,
                        lineHeight: "28px",
                        boxShadow:
                          msg.type === "ai"
                            ? "0px 2px 8px rgba(0,0,0,0.05)"
                            : "none",
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar */}
              <div
                style={{
                  padding: "16px",
                  borderTop: "1px solid #E2E8F0",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSend();
                      }
                    }}
                    placeholder="Ask AI to build, optimize, or analyze..."
                    style={{
                      width: "100%",
                      height: "44px",
                      borderRadius: "12px",
                      border: "1px solid #E2E8F0",
                      background: "#F8FAFC",
                      paddingLeft: "16px",
                      paddingRight: "50px",
                      outline: "none",
                      fontSize: "14px",
                    }}
                  />

                  <button
                    onClick={handleSend}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "none",
                      background: "transparent",
                      color: "#8B5CF6",
                      cursor: "pointer",
                      fontSize: "18px",
                    }}
                  >
                    ➤
                  </button>
                </div>

                <p
                  style={{
                    marginTop: 8,
                    fontSize: 11,
                    textAlign: "center",
                    color: "#94A3B8",
                  }}
                >
                  AI can make mistakes. Check important changes before
                  publishing.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.07, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 24,
          right: window.innerWidth < 640 ? 12 : 24,
          width: window.innerWidth < 640 ? "calc(100vw - 24px)" : 400,
          height: window.innerWidth < 640 ? "75vh" : 584,
          ...assistIconStyles,
        }}
      >
        <FiMessageSquare size={24} color="#fff" />
      </motion.div>
    </>
  );
};

export default AIChatAssistant;
