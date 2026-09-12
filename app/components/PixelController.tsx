"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Github, Linkedin } from "lucide-react";

export function PixelController() {
  const socialIcons = [
    { icon: <Mail size={20} />, href: "mailto:adjiesidja20@gmail.com" },
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com/adjiesidjaa",
    },
    { icon: <Github size={20} />, href: "https://github.com/adjiesidjaa" },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/adjiesidjaa",
    },
  ];

  const actionItems = [
    {
      id: "cv",
      label: "DOWNLOAD CV",
      to: "/resume.pdf",
      isAnchor: false,
    },
    {
      id: "contact",
      label: "CONTACT ME",
      to: "#contact",
      isAnchor: true,
    },
  ];

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
    isAnchor: boolean
  ) => {
    if (isAnchor && to.startsWith("#")) {
      e.preventDefault();
      const targetId = to.replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", to);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-8">
        {actionItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ translateY: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={item.to}
              target={!item.isAnchor ? "_blank" : undefined}
              rel={!item.isAnchor ? "noopener noreferrer" : undefined}
              onClick={(e) => handleItemClick(e, item.to, item.isAnchor)}
              className={`
                flex items-center justify-center py-6 px-6 md:py-7 md:px-8 w-full h-full min-h-[78px] md:min-h-[86px]
                bg-white dark:bg-[#151922] text-[#180d2b] dark:text-white
                font-['Press_Start_2P'] text-center transition-all cursor-pointer 
                text-[11px] md:text-[12px] leading-relaxed uppercase tracking-tight
                border-3 md:border-4 border-[#180d2b] dark:border-[#2a324b]
                hover:bg-[#7c3aed] hover:text-white hover:border-[#180d2b]
                dark:hover:bg-[#00f0ff] dark:hover:text-[#0e1118] dark:hover:border-[#00f0ff]
                shadow-[6px_6px_0px_#8b5cf6] dark:shadow-[6px_6px_0px_#ff007f]
                active:shadow-none active:translate-y-1
              `}
            >
              {item.label}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 w-full">
        {socialIcons.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-[#151922] text-[#180d2b] dark:text-white flex items-center justify-center border-2 md:border-3 border-[#180d2b] dark:border-[#2a324b] hover:bg-[#ec4899] hover:text-white hover:border-[#ec4899] dark:hover:bg-[#ff007f] dark:hover:text-white dark:hover:border-[#ff007f] transition-all shadow-[4px_4px_0px_#8b5cf6] dark:shadow-[4px_4px_0px_#00f0ff] cursor-pointer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
