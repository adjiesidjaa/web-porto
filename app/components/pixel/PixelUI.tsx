"use client";

import React from "react";
import { motion } from "framer-motion";

export function PixelCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      className="inline-block w-[0.55em] h-[1em] bg-[#7c3aed] dark:bg-[#00f0ff] ml-1 align-middle shadow-[0_0_8px_#7c3aed] dark:shadow-[0_0_8px_#00f0ff]"
    />
  );
}

export function PixelCorners({ count = 4 }: { count?: 2 | 4 }) {
  return (
    <>
      <div className="absolute top-0 left-0 w-2 h-2 bg-[#7c3aed] dark:bg-[#00f0ff]" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-[#ec4899] dark:bg-[#ff007f]" />
      {count === 4 && (
        <>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#ec4899] dark:bg-[#ff007f]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#7c3aed] dark:bg-[#00f0ff]" />
        </>
      )}
    </>
  );
}

export function PixelShadow() {
  return (
    <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#8b5cf6] dark:bg-[#00f0ff]/40 -z-10 transition-all duration-150 group-hover:-bottom-1 group-hover:-right-1 group-hover:bg-[#ec4899] dark:group-hover:bg-[#ff007f]" />
  );
}

export function PixelDividerH({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="h-[4px] bg-[#180d2b] dark:bg-[#2a324b] group-hover:bg-[#7c3aed] dark:group-hover:bg-[#00f0ff] transition-colors duration-200" />
      <div className="absolute -top-[2px] left-4 w-2 h-2 bg-[#7c3aed] dark:bg-[#00f0ff]" />
      <div className="absolute -top-[2px] right-4 w-2 h-2 bg-[#ec4899] dark:bg-[#ff007f]" />
    </div>
  );
}

export function PixelDividerV({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="w-[4px] h-full bg-[#180d2b] dark:bg-[#2a324b] group-hover:bg-[#7c3aed] dark:group-hover:bg-[#00f0ff] transition-colors duration-200" />
      <div className="absolute top-4 -left-[2px] w-2 h-2 bg-[#7c3aed] dark:bg-[#00f0ff]" />
      <div className="absolute bottom-4 -left-[2px] w-2 h-2 bg-[#ec4899] dark:bg-[#ff007f]" />
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
      className={`mb-16 border-l-8 border-[#7c3aed] dark:border-[#00f0ff] pl-6 ${className ?? ""}`}
    >
      <h1 className="text-xl md:text-3xl font-pixel text-[#180d2b] dark:text-white uppercase">
        {title}
        <PixelCursor />
      </h1>
      <p className="text-[10px] md:text-xs font-fira text-[#ec4899] dark:text-[#00f0ff] mt-3 tracking-wider uppercase">
        {subtitle}
      </p>
    </motion.div>
  );
}

export function PixelLogoShield({
  shortName,
  logoUrl,
  className = "",
}: {
  shortName: string;
  logoUrl?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 w-11 h-11 md:w-13 md:h-13 bg-[#180d2b] dark:bg-[#0a0d14] border-2 border-[#7c3aed] dark:border-[#00f0ff] shadow-[2px_2px_0px_#ec4899] dark:shadow-[2px_2px_0px_#ff007f] group-hover:scale-105 group-hover:border-[#ec4899] dark:group-hover:border-[#ff007f] transition-all duration-200 select-none overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#ec4899] dark:bg-[#ff007f] z-10" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#7c3aed] dark:bg-[#00f0ff] z-10" />
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={shortName}
          className="w-full h-full object-cover p-1.5"
        />
      ) : (
        <span className="font-pixel text-[10px] md:text-xs text-white dark:text-[#00f0ff] font-bold tracking-tighter">
          {shortName}
        </span>
      )}
    </div>
  );
}

export function AmbientPixelDecors() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-25 select-none -z-10">
      <span className="absolute top-10 left-[6%] text-[#7c3aed] dark:text-[#00f0ff] font-pixel text-xs animate-pixel-float">
        +
      </span>
      <span className="absolute top-44 right-[6%] text-[#ec4899] dark:text-[#ff007f] font-pixel text-base animate-pixel-float-delay">
        ❖
      </span>
      <span className="absolute top-[35%] left-[4%] text-[#06b6d4] dark:text-[#ffe600] font-pixel text-xs animate-pixel-float">
        ▲
      </span>
      <span className="absolute top-[60%] right-[8%] text-[#7c3aed] dark:text-[#00f0ff] font-pixel text-xs animate-pixel-float-delay">
        +
      </span>
      <span className="absolute bottom-20 left-[8%] text-[#ec4899] dark:text-[#ff007f] font-pixel text-sm animate-pixel-float">
        ◆
      </span>
      <span className="absolute bottom-40 right-[5%] text-[#06b6d4] dark:text-[#00f0ff] font-pixel text-xs animate-pixel-float-delay">
        ::
      </span>
    </div>
  );
}
