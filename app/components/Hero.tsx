"use client";

import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="px-6 max-w-4xl md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start"
      >
        <div className="mb-8">
          <h1 className="text-xl md:text-3xl font-['Press_Start_2P'] leading-relaxed text-[#232020] dark:text-white uppercase tracking-tighter">
            Adjie <span className="text-[#c5a686]">M.</span> Usman
          </h1>
          <p className="text-[10px] font-['Press_Start_2P'] text-[#c5a686] mt-6 tracking-widest opacity-80 uppercase">
            /'ad-ji/ • /'jie/ • /'sid-ja/
          </p>
        </div>

        <div className="space-y-6 text-[9px] md:text-[11px] text-zinc-600 dark:text-zinc-400 max-w-2xl font-['Press_Start_2P'] leading-loose uppercase">
          <div className="flex items-start md:justify-start text-left">
            <span className="text-[#c5a686] mr-2">■</span>
            <div>
              <p>
                an{" "}
                <span className="text-[#232020] dark:text-[#c5a686]">
                  Undergraduated Information Systems
                </span>{" "}
                student
              </p>
              <p>
                at{" "}
                <span className="underline decoration-[#c5a686] underline-offset-4">
                  Fasilkom UI
                </span>
                .
              </p>
            </div>
          </div>
          <div className="flex items-start md:justify-start text-left">
            <p>
              <span className="text-[#c5a686] mr-2">■</span>a{" "}
              <span className="text-[#232020] dark:text-[#c5a686]">
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
