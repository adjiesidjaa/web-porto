"use client";

import React from "react";
import { motion } from "framer-motion";

export function PixelCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      className="inline-block w-[0.55em] h-[1em] bg-[#c5a686] ml-1 align-middle"
    />
  );
}

export function PixelCorners({ count = 4 }: { count?: 2 | 4 }) {
  return (
    <>
      <div className="absolute top-0 left-0 w-2 h-2 bg-[#c5a686]" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-[#c5a686]" />
      {count === 4 && (
        <>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#c5a686]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#c5a686]" />
        </>
      )}
    </>
  );
}

export function PixelShadow() {
  return (
    <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#c5a686] -z-10 transition-all duration-150 group-hover:-bottom-1 group-hover:-right-1" />
  );
}

export function PixelDividerH({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="h-[4px] bg-[#232020] dark:bg-[#8b7355] group-hover:bg-[#c5a686] transition-colors duration-200" />
      <div className="absolute -top-[2px] left-4 w-2 h-2 bg-[#c5a686]" />
      <div className="absolute -top-[2px] right-4 w-2 h-2 bg-[#c5a686]" />
    </div>
  );
}

export function PixelDividerV({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="w-[4px] h-full bg-[#232020] dark:bg-[#8b7355] group-hover:bg-[#c5a686] transition-colors duration-200" />
      <div className="absolute top-4 -left-[2px] w-2 h-2 bg-[#c5a686]" />
      <div className="absolute bottom-4 -left-[2px] w-2 h-2 bg-[#c5a686]" />
    </div>
  );
}

export function ScanlineOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
      }}
    />
  );
}

export function PageHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className={`mb-16 border-l-8 border-[#c5a686] pl-6 ${className ?? ""}`}
    >
      <h1 className="text-xl md:text-3xl font-['Press_Start_2P'] text-[#232020] dark:text-white uppercase">
        {title}
        <PixelCursor />
      </h1>
      <p className="text-[10px] font-['Press_Start_2P'] text-[#c5a686] mt-4 uppercase">
        {subtitle}
      </p>
    </motion.div>
  );
}
