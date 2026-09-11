"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { name: "About", id: "about", href: "#about" },
    { name: "Experience", id: "experience", href: "#experience" },
    { name: "Projects", id: "projects", href: "#projects" },
    { name: "Contact", id: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = ["about", "experience", "projects", "contact"];

    const handleScroll = () => {
      // Check if we reached near bottom of page, highlight contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto flex items-center space-x-1 sm:space-x-2 md:space-x-3 bg-white/95 dark:bg-[#151922]/95 backdrop-blur-md px-2.5 sm:px-4 py-2 border-2 border-[#180d2b] dark:border-[#00f0ff] shadow-[0_4px_16px_rgba(124,58,237,0.15)] dark:shadow-[0_4px_16px_rgba(0,240,255,0.15)]">
        <div className="flex items-center space-x-1 sm:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-2 sm:px-3 py-1.5 text-[7px] sm:text-[8px] font-['Press_Start_2P'] uppercase transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#7c3aed] text-white shadow-[2px_2px_0px_#180d2b] dark:bg-[#00f0ff] dark:text-[#0e1118] dark:shadow-[2px_2px_0px_#0e1118] font-bold"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-[#7c3aed] dark:hover:text-[#00f0ff] hover:bg-violet-50 dark:hover:bg-[#1a202c]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="w-[2px] h-4 bg-[#ec4899] dark:bg-[#ff007f] mx-1 sm:mx-1.5" />

        <ThemeToggle />
      </div>
    </nav>
  );
}
