"use client";
import React, { useEffect, useState } from "react";

const arrowStyle: React.CSSProperties = {
  position: "fixed",
  left: "50%",
  bottom: "32px",
  transform: "translateX(-50%)",
  zIndex: 1000,
  cursor: "pointer",
  animation: "bounce 1.5s infinite"
};

const arrowSvg = (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const BouncingArrow: React.FC<{ targetId: string }> = ({ targetId }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShow(window.scrollY < 20);
    };
    checkScroll(); // Initialize on mount
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!show) return null;
  return (
    <div style={arrowStyle} onClick={handleClick} aria-label="Scroll down">
      {arrowSvg}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-16px); }
          60% { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default BouncingArrow;
