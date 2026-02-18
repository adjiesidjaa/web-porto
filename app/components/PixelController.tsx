"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Twitter, Instagram, Github, Linkedin } from "lucide-react";

export function PixelController() {
  const socialIcons = [
    { icon: <Mail size={16} />, href: "mailto:hello@example.com" },
    { icon: <Twitter size={16} />, href: "#" },
    { icon: <Instagram size={16} />, href: "#" },
    { icon: <Github size={16} />, href: "#" },
    { icon: <Linkedin size={16} />, href: "#" },
  ];

  const gridItems = [
    {
      id: "projects",
      label: "PROJECTS",
      className: "col-span-2 row-span-2",
      to: "/projects",
    },
    {
      id: "experience",
      label: "EXPERIENCE",
      className: "col-span-2 col-start-3",
      to: "/experience",
    },
    {
      id: "contact",
      label: "CONTACT ME",
      className: "col-span-2 col-start-3 row-start-2",
      to: "/contact",
    },
    {
      id: "cv",
      label: "DOWNLOAD CV",
      className: "col-span-4 row-start-3",
      to: "/resume.pdf",
    },
  ];

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
            <Link
              href={item.to}
              className={`
                flex items-center justify-center p-6 w-full h-full
                bg-white text-[#232020] 
                font-['Press_Start_2P'] text-center transition-all cursor-pointer 
                text-[9px] leading-relaxed uppercase tracking-tighter
                hover:bg-[#c5a686] hover:text-[#232020]
                shadow-[0_4px_0px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_0px_rgba(0,0,0,0.4)]
                border border-transparent
              `}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {socialIcons.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            className="w-11 h-11 bg-white text-[#232020] flex items-center justify-center hover:bg-[#c5a686] transition-all shadow-[0_3px_0px_rgba(0,0,0,0.2)]"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
