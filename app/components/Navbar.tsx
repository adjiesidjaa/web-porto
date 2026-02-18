"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6">
      <div className="flex items-center space-x-2 md:space-x-4 bg-white dark:bg-[#232020] px-4 py-2 border-none shadow-xl">
        <div className="flex items-center space-x-1 md:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 text-[8px] font-['Press_Start_2P'] uppercase transition-all ${
                pathname === link.href 
                ? "bg-[#c5a686] text-[#232020]" 
                : "text-zinc-500 hover:text-[#c5a686]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="w-[2px] h-4 bg-[#c5a686] mx-1" />
        
        <ThemeToggle />
      </div>
    </nav>
  );
}
