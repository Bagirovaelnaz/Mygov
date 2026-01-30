"use client";

import { useState } from "react";
import { FaUniversalAccess } from "react-icons/fa";

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);

  const increaseFont = () => {
    const newScale = Math.min(fontScale + 0.1, 1.5);
    setFontScale(newScale);
    document.documentElement.style.setProperty(
      "--font-scale",
      newScale.toString(),
    );
  };

  const decreaseFont = () => {
    const newScale = Math.max(fontScale - 0.1, 0.8);
    setFontScale(newScale);
    document.documentElement.style.setProperty(
      "--font-scale",
      newScale.toString(),
    );
  };
  const linkHighlight = () => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.outline = "2px solid yellow ";
      link.style.backgroundColor = "black";
      link.style.color = "yellow";
    });
  };
  return (
    <div className="accessibility-menu fixed bottom-[60px] left-[20px] z-[9999]">
  <div
    className={`mb-[8px] flex min-w-[120px] flex-col gap-[8px]
    rounded-[8px] bg-white p-[12px] shadow-lg transition-all duration-200
    ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
  >
    <button
      onClick={increaseFont}
      className="rounded-[6px] bg-gray-100 p-[8px] text-[14px] font-medium
      hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      A+
    </button>

    <button
      onClick={decreaseFont}
      className="rounded-[6px] bg-gray-100 p-[8px] text-[14px] font-medium
      hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      A-
    </button>

    <button
      onClick={linkHighlight}
      className="rounded-[6px] bg-gray-100 p-[8px] text-[14px] font-medium
      hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Link seçin
    </button>
  </div>

  <button
    aria-label="Font ölçüsünü dəyiş"
    aria-expanded={open}
    onClick={() => setOpen(!open)}
    className="flex h-[48px] w-[48px] items-center justify-center rounded-full
    bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <FaUniversalAccess className="text-[36px]" />
  </button>
</div>

  );
}
