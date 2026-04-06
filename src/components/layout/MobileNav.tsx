"use client";

import { useEffect } from "react";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`mobile-overlay${open ? " open" : ""}`}
        onClick={onClose}
      />
      <div className={`mobile-panel${open ? " open" : ""}`}>
        <div className="mobile-close">
          <button onClick={onClose} aria-label="Close menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="mobile-nav-links">
          <a href="#about" onClick={onClose}>
            About
          </a>
          <a href="#projects" onClick={onClose}>
            Projects
          </a>
          <a href="#contact" onClick={onClose}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
