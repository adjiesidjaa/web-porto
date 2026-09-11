"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Github, Linkedin } from "lucide-react";

export function PixelController() {
  const socialIcons = [
    { icon: <Mail size={16} />, href: "mailto:adjiesidja20@gmail.com" },
    {
      icon: <Instagram size={16} />,
      href: "https://instagram.com/adjiesidjaa",
    },
    { icon: <Github size={16} />, href: "https://github.com/adjiesidjaa" },
    {
      icon: <Linkedin size={16} />,
      href: "https://linkedin.com/in/adjiesidjaa",
    },
  ];

  const gridItems = [
    {
      id: "projects",
      label: "PROJECTS",
      className: "col-span-2 row-span-2",
      to: "#projects",
      isAnchor: true,
    },
    {
      id: "experience",
      label: "EXPERIENCE",
      className: "col-span-2 col-start-3",
      to: "#experience",
      isAnchor: true,
    },
    {
      id: "contact",
      label: "CONTACT ME",
      className: "col-span-2 col-start-3 row-start-2",
      to: "#contact",
      isAnchor: true,
    },
    {
      id: "cv",
      label: "DOWNLOAD CV",
      className: "col-span-4 row-start-3",
      to: "/resume.pdf",
      isAnchor: false,
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
    <div className="w-full max-w-xl px-6">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 mb-8">
        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            className={item.className || ""}
            whileHover={{ translateY: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={item.to}
              target={!item.isAnchor ? "_blank" : undefined}
              rel={!item.isAnchor ? "noopener noreferrer" : undefined}
              onClick={(e) => handleItemClick(e, item.to, item.isAnchor)}
              className={`
                flex items-center justify-center p-6 w-full h-full
                bg-white dark:bg-[#151922] text-[#180d2b] dark:text-white
                font-['Press_Start_2P'] text-center transition-all cursor-pointer 
                text-[9px] leading-relaxed uppercase tracking-tighter
                border-2 border-[#180d2b] dark:border-[#2a324b]
                hover:bg-[#7c3aed] hover:text-white hover:border-[#180d2b]
                dark:hover:bg-[#00f0ff] dark:hover:text-[#0e1118] dark:hover:border-[#00f0ff]
                shadow-[4px_4px_0px_#8b5cf6] dark:shadow-[4px_4px_0px_#ff007f]
                active:shadow-none active:translate-y-1
              `}
            >
              {item.label}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {socialIcons.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="w-11 h-11 bg-white dark:bg-[#151922] text-[#180d2b] dark:text-white flex items-center justify-center border-2 border-[#180d2b] dark:border-[#2a324b] hover:bg-[#ec4899] hover:text-white hover:border-[#ec4899] dark:hover:bg-[#ff007f] dark:hover:text-white dark:hover:border-[#ff007f] transition-all shadow-[3px_3px_0px_#8b5cf6] dark:shadow-[3px_3px_0px_#00f0ff] cursor-pointer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
