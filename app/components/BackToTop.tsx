"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-2.5 bg-white text-[#180d2b] border-2 border-[#180d2b] hover:bg-[#7c3aed] hover:text-white shadow-[4px_4px_0px_#8b5cf6] dark:bg-[#151922] dark:text-[#00f0ff] dark:border-[#00f0ff] dark:hover:bg-[#00f0ff] dark:hover:text-[#0e1118] dark:shadow-[4px_4px_0px_#ff007f] transition-colors font-['Press_Start_2P'] text-[8px] uppercase cursor-pointer active:translate-y-1 active:shadow-none"
        >
          <span>▲</span>
          <span className="hidden sm:inline">TOP</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
