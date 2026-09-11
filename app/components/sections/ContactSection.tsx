"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PageHeading,
  PixelShadow,
  PixelCorners,
  PixelDividerH,
} from "../pixel/PixelUI";
import { inventoryReveal, stepsEase } from "../pixel/variants";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="w-full px-6 md:px-12 pt-24 pb-20 scroll-mt-24">
      <PageHeading
        title="Contact Me"
        subtitle="[ Send me a message — let's build something together ]"
      />

      <motion.div
        variants={inventoryReveal}
        initial="hidden"
        animate="visible"
        className="group relative"
      >
        <PixelShadow />

        <div className="bg-white dark:bg-[#151922] border-4 border-[#180d2b] dark:border-[#2a324b] transition-colors duration-200">
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-[#ec4899] border-2 border-[#180d2b] dark:border-[#2a324b]" />
                <div className="w-3 h-3 bg-[#f59e0b] border-2 border-[#180d2b] dark:border-[#2a324b]" />
                <div className="w-3 h-3 bg-[#06b6d4] dark:bg-[#00f0ff] border-2 border-[#180d2b] dark:border-[#2a324b]" />
              </div>
              <span className="text-[8px] font-['Press_Start_2P'] text-zinc-500 dark:text-zinc-400 uppercase">
                new_message.txt
              </span>
            </div>
          </div>

          <PixelDividerH />

          <form onSubmit={onSubmit} className="p-5 md:p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-['Press_Start_2P'] text-[#7c3aed] dark:text-[#00f0ff] uppercase tracking-wider block font-bold">
                ▸ Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name..."
                className="w-full px-4 py-3 bg-white dark:bg-[#0e1118] border-4 border-[#180d2b] dark:border-[#2a324b] text-sm font-['Inter'] text-[#180d2b] dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#7c3aed] dark:focus:border-[#00f0ff] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-['Press_Start_2P'] text-[#7c3aed] dark:text-[#00f0ff] uppercase tracking-wider block font-bold">
                ▸ Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white dark:bg-[#0e1118] border-4 border-[#180d2b] dark:border-[#2a324b] text-sm font-['Inter'] text-[#180d2b] dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#7c3aed] dark:focus:border-[#00f0ff] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-['Press_Start_2P'] text-[#7c3aed] dark:text-[#00f0ff] uppercase tracking-wider block font-bold">
                ▸ Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full px-4 py-3 bg-white dark:bg-[#0e1118] border-4 border-[#180d2b] dark:border-[#2a324b] text-sm font-['Inter'] text-[#180d2b] dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#7c3aed] dark:focus:border-[#00f0ff] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-['Press_Start_2P'] text-[#7c3aed] dark:text-[#00f0ff] uppercase tracking-wider block font-bold">
                ▸ Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-white dark:bg-[#0e1118] border-4 border-[#180d2b] dark:border-[#2a324b] text-sm font-['Inter'] text-[#180d2b] dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#7c3aed] dark:focus:border-[#00f0ff] transition-colors resize-none"
              />
            </div>

            <PixelDividerH />

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="relative w-full sm:w-auto px-8 py-4 bg-[#7c3aed] text-white hover:bg-[#ec4899] border-4 border-[#180d2b] shadow-[4px_4px_0px_#ec4899] dark:bg-[#00f0ff] dark:text-[#0e1118] dark:hover:bg-[#ff007f] dark:hover:text-white dark:border-white dark:shadow-[4px_4px_0px_#ff007f] font-['Press_Start_2P'] text-[9px] uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer active:shadow-none active:translate-y-1"
              >
                {status === "sending" ? "Sending..." : "Send Message ▸"}
              </button>

              {status === "success" && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    x: { duration: 0.3, ease: stepsEase(4) },
                    opacity: { duration: 0.25, ease: stepsEase(3) },
                  }}
                  className="text-[8px] font-['Press_Start_2P'] text-[#06b6d4] dark:text-[#00e676] uppercase font-bold"
                >
                  ✓ Message sent successfully!
                </motion.span>
              )}
              {status === "error" && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    x: { duration: 0.3, ease: stepsEase(4) },
                    opacity: { duration: 0.25, ease: stepsEase(3) },
                  }}
                  className="text-[8px] font-['Press_Start_2P'] text-[#ec4899] dark:text-[#ff3b30] uppercase font-bold"
                >
                  ✗ Something went wrong. Try again.
                </motion.span>
              )}
            </div>
          </form>
        </div>

        <PixelCorners />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          y: { duration: 0.4, ease: stepsEase(6), delay: 0.3 },
          opacity: { duration: 0.35, ease: stepsEase(5), delay: 0.3 },
        }}
        className="mt-12 grid grid-cols-2 gap-4"
      >
        <a
          href="https://linkedin.com/in/adjiesidjaa"
          target="_blank"
          rel="noopener noreferrer"
          className="group/social relative p-4 border-4 border-[#180d2b] dark:border-[#2a324b] hover:border-[#7c3aed] dark:hover:border-[#00f0ff] transition-colors bg-white dark:bg-[#151922] shadow-[4px_4px_0px_#8b5cf6] dark:shadow-[4px_4px_0px_#00f0ff]"
        >
          <span className="text-[8px] font-['Press_Start_2P'] text-[#ec4899] dark:text-[#ff007f] block mb-2">
            LINKEDIN
          </span>
          <span className="text-[10px] font-['Press_Start_2P'] text-[#180d2b] dark:text-white group-hover/social:text-[#7c3aed] dark:group-hover/social:text-[#00f0ff] transition-colors">
            ADJIESIDJAA
          </span>
        </a>
        <a
          href="https://github.com/adjiesidjaa"
          target="_blank"
          rel="noopener noreferrer"
          className="group/social relative p-4 border-4 border-[#180d2b] dark:border-[#2a324b] hover:border-[#7c3aed] dark:hover:border-[#00f0ff] transition-colors bg-white dark:bg-[#151922] shadow-[4px_4px_0px_#8b5cf6] dark:shadow-[4px_4px_0px_#00f0ff]"
        >
          <span className="text-[8px] font-['Press_Start_2P'] text-[#ec4899] dark:text-[#ff007f] block mb-2">
            GITHUB
          </span>
          <span className="text-[10px] font-['Press_Start_2P'] text-[#180d2b] dark:text-white group-hover/social:text-[#7c3aed] dark:group-hover/social:text-[#00f0ff] transition-colors">
            ADJIESIDJAA
          </span>
        </a>
      </motion.div>
    </section>
  );
}
