"use client";

import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="w-full md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          y: { duration: 0.5, ease: (t: number) => Math.floor(t * 6) / 6 },
          opacity: {
            duration: 0.4,
            ease: (t: number) => Math.floor(t * 5) / 5,
          },
        }}
        className="flex flex-col items-start"
      >
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-['Press_Start_2P'] leading-normal md:leading-relaxed text-[#180d2b] dark:text-white uppercase tracking-tight">
            Adjie <span className="text-[#7c3aed] dark:text-[#00f0ff]">M.</span> Usman
          </h1>
          <p className="text-[10px] md:text-xs font-['Press_Start_2P'] text-[#ec4899] dark:text-[#ff007f] mt-4 md:mt-5 tracking-widest opacity-90 uppercase">
            {"/'ad-ji/ • /'jie/ • /'sid-ja/"}
          </p>
        </div>

        <div className="space-y-5 md:space-y-6 text-[10px] md:text-xs text-zinc-700 dark:text-zinc-300 max-w-xl font-['Press_Start_2P'] leading-loose uppercase">
          <div className="flex items-start md:justify-start text-left">
            <span className="text-[#06b6d4] dark:text-[#00f0ff] mr-2 mt-0.5">■</span>
            <div>
              <p>
                an{" "}
                <span className="text-[#7c3aed] dark:text-[#00f0ff] font-bold">
                  Undergraduated Information Systems
                </span>{" "}
                student
              </p>
              <p>
                at{" "}
                <span className="underline decoration-[#ec4899] dark:decoration-[#ff007f] decoration-2 underline-offset-4 font-bold text-[#180d2b] dark:text-white">
                  Fasilkom UI
                </span>
                .
              </p>
            </div>
          </div>
          <div className="flex items-start md:justify-start text-left">
            <p>
              <span className="text-[#06b6d4] dark:text-[#00f0ff] mr-2 mt-0.5">■</span>a{" "}
              <span className="text-[#7c3aed] dark:text-[#00f0ff] font-bold">
                Software Developer
              </span>
              .
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
