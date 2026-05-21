"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="للأعلى"
      className={`fixed bottom-7 left-7 w-12 h-12 bg-accent text-white rounded-full inline-flex items-center justify-center shadow-accent hover:bg-accent-dark hover:-translate-y-1 transition-all z-40 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
