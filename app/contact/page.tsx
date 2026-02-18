"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PageHeading,
  PixelShadow,
  PixelCorners,
  PixelDividerH,
} from "../components/pixel/PixelUI";
import { inventoryReveal } from "../components/pixel/variants";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Page() {
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
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
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

        <div className="bg-white dark:bg-[#232020] border-4 border-[#232020] dark:border-[#8b7355] transition-colors duration-200">
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-400 border-2 border-[#232020] dark:border-[#8b7355]" />
                <div className="w-3 h-3 bg-yellow-400 border-2 border-[#232020] dark:border-[#8b7355]" />
                <div className="w-3 h-3 bg-green-400 border-2 border-[#232020] dark:border-[#8b7355]" />
              </div>
              <span className="text-[8px] font-['Press_Start_2P'] text-zinc-500 dark:text-zinc-400 uppercase">
                new_message.txt
              </span>
            </div>
          </div>

          <PixelDividerH />

          <form onSubmit={onSubmit} className="p-5 md:p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-['Press_Start_2P'] text-[#c5a686] uppercase tracking-wider block">
                ▸ Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name..."
                className="w-full px-4 py-3 bg-zinc-50 dark:bg-[#1a1818] border-4 border-[#232020] dark:border-[#8b7355] text-sm font-['Inter'] text-[#232020] dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#c5a686] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-['Press_Start_2P'] text-[#c5a686] uppercase tracking-wider block">
                ▸ Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-zinc-50 dark:bg-[#1a1818] border-4 border-[#232020] dark:border-[#8b7355] text-sm font-['Inter'] text-[#232020] dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#c5a686] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-['Press_Start_2P'] text-[#c5a686] uppercase tracking-wider block">
                ▸ Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full px-4 py-3 bg-zinc-50 dark:bg-[#1a1818] border-4 border-[#232020] dark:border-[#8b7355] text-sm font-['Inter'] text-[#232020] dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#c5a686] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-['Press_Start_2P'] text-[#c5a686] uppercase tracking-wider block">
                ▸ Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-zinc-50 dark:bg-[#1a1818] border-4 border-[#232020] dark:border-[#8b7355] text-sm font-['Inter'] text-[#232020] dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-[#c5a686] transition-colors resize-none"
              />
            </div>

            <PixelDividerH />

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="relative w-full sm:w-auto px-8 py-4 bg-[#c5a686] text-[#232020] font-['Press_Start_2P'] text-[9px] uppercase tracking-wider hover:bg-[#8b7355] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 border-4 border-[#232020] dark:border-[#8b7355] cursor-pointer shadow-[0_4px_0px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_0px_rgba(0,0,0,0.4)] active:shadow-none active:translate-y-1"
              >
                {status === "sending" ? "Sending..." : "Send Message ▸"}
              </button>

              {status === "success" && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[8px] font-['Press_Start_2P'] text-green-500 uppercase"
                >
                  ✓ Message sent successfully!
                </motion.span>
              )}
              {status === "error" && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[8px] font-['Press_Start_2P'] text-red-500 uppercase"
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
        transition={{ delay: 0.3 }}
        className="mt-12 grid grid-cols-2 gap-4"
      >
        <a
          href="https://instagram.com/adjiesidjaa"
          target="_blank"
          rel="noopener noreferrer"
          className="group/social relative p-4 border-4 border-[#8b7355] hover:border-[#c5a686] transition-colors bg-white dark:bg-[#232020]"
        >
          <span className="text-[8px] font-['Press_Start_2P'] text-[#c5a686] block mb-2">
            INSTAGRAM
          </span>
          <span className="text-[10px] font-['Press_Start_2P'] text-[#232020] dark:text-white group-hover/social:text-[#c5a686] transition-colors">
            @ADJIESIDJAA
          </span>
        </a>
        <a
          href="https://github.com/adjiesidjaa"
          target="_blank"
          rel="noopener noreferrer"
          className="group/social relative p-4 border-4 border-[#8b7355] hover:border-[#c5a686] transition-colors bg-white dark:bg-[#232020]"
        >
          <span className="text-[8px] font-['Press_Start_2P'] text-[#c5a686] block mb-2">
            GITHUB
          </span>
          <span className="text-[10px] font-['Press_Start_2P'] text-[#232020] dark:text-white group-hover/social:text-[#c5a686] transition-colors">
            ADJIESIDJAA
          </span>
        </a>
      </motion.div>
    </div>
  );
}
