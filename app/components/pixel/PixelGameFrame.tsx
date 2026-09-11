"use client";

import React from "react";

interface PixelGameFrameProps {
  children: React.ReactNode;
  className?: string;
  tag?: string;
  badge?: string;
}

export function PixelGameFrame({
  children,
  className = "",
  tag,
  badge,
}: PixelGameFrameProps) {
  return (
    <div
      className={`relative bg-white dark:bg-[#151922] border-4 border-[#180d2b] dark:border-[#2a324b] transition-all duration-200 group-hover:border-[#7c3aed] dark:group-hover:border-[#00f0ff] shadow-[4px_4px_0px_#180d2b] dark:shadow-[4px_4px_0px_#2a324b] group-hover:shadow-[8px_8px_0px_#7c3aed] dark:group-hover:shadow-[8px_8px_0px_#00f0ff] ${className}`}
    >
      {/* 4 Corner Pixel Blocks */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-[#7c3aed] dark:bg-[#00f0ff] z-10 group-hover:scale-125 transition-transform duration-200" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-[#ec4899] dark:bg-[#ff007f] z-10 group-hover:scale-125 transition-transform duration-200" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#ec4899] dark:bg-[#ff007f] z-10 group-hover:scale-125 transition-transform duration-200" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#7c3aed] dark:bg-[#00f0ff] z-10 group-hover:scale-125 transition-transform duration-200" />

      {/* Optional Top Tag Bar */}
      {(tag || badge) && (
        <div className="flex items-center justify-between px-4 py-2 border-b-2 border-[#180d2b] dark:border-[#2a324b] bg-zinc-50 dark:bg-[#0e1118]">
          <div className="flex items-center gap-2">
            {tag && (
              <span className="font-pixel text-[8px] md:text-[9px] text-[#7c3aed] dark:text-[#00f0ff] uppercase tracking-wider">
                {tag}
              </span>
            )}
            {badge && (
              <span className="font-mono text-[9px] md:text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
                {badge}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
