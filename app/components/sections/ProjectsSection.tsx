"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2, Sparkles, ArrowUpRight } from "lucide-react";
import { PageHeading, AmbientPixelDecors } from "../pixel/PixelUI";
import { TechIcon } from "../pixel/TechIcon";
import { inventoryReveal } from "../pixel/variants";

export type ProjectType = "web" | "mobile";

export interface Project {
  id: string;
  img: string;
  title: string;
  desc: string;
  tags: string[];
  year: string;
  type: ProjectType;
  liveUrl?: string;
  githubUrl?: string;
  architectureHighlights?: string[];
}

// 🌟 Top Featured Project Card (TiketBisa - 1 Gede)
function FeaturedProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <article
      ref={ref}
      className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1 w-full h-full"
    >
      <motion.div
        variants={inventoryReveal}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{
          y: -4,
          transition: { type: "spring", stiffness: 400, damping: 20 },
        }}
        className="group relative w-full h-full flex flex-col lg:flex-row items-stretch overflow-hidden bg-white dark:bg-[#151922] border-4 border-[#180d2b] dark:border-[#2a324b] shadow-[4px_4px_0px_#180d2b] dark:shadow-[4px_4px_0px_#2a324b] hover:shadow-[8px_8px_0px_#7c3aed] dark:hover:shadow-[8px_8px_0px_#00f0ff] hover:border-[#7c3aed] dark:hover:border-[#00f0ff] transition-all duration-300 select-none"
      >
        {/* 4 Corner Retro Pixel Blocks */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#7c3aed] dark:bg-[#00f0ff] z-20 group-hover:scale-125 transition-transform" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#ec4899] dark:bg-[#ff007f] z-20 group-hover:scale-125 transition-transform" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-[#ec4899] dark:bg-[#ff007f] z-20 group-hover:scale-125 transition-transform" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#7c3aed] dark:bg-[#00f0ff] z-20 group-hover:scale-125 transition-transform" />

        {/* Left Side: Large Visual Preview & Screenshot Banner */}
        <div className="w-full lg:w-7/12 flex flex-col border-b-4 lg:border-b-0 lg:border-r-4 border-[#180d2b] dark:border-[#2a324b] relative bg-zinc-900 overflow-hidden">
          {/* Top Tag Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b-2 border-[#180d2b] dark:border-[#2a324b] bg-zinc-50 dark:bg-[#0e1118] shrink-0 z-10">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[8px] md:text-[9px] text-[#7c3aed] dark:text-[#00f0ff] uppercase tracking-wider">
                {project.id}
              </span>
              <span className="font-mono text-[9px] md:text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
                {"// WEB PLATFORM"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-[#7c3aed]/10 dark:bg-[#00f0ff]/10 text-[#7c3aed] dark:text-[#00f0ff] text-[9px] font-pixel border border-[#7c3aed]/30 dark:border-[#00f0ff]/30">
                <Sparkles className="w-2.5 h-2.5" /> FEATURED BUILD
              </span>
              <span className="px-2 py-0.5 bg-white dark:bg-[#151922] border border-[#180d2b] dark:border-[#2a324b] text-[9px] md:text-[10px] font-mono font-bold text-[#ec4899] dark:text-[#ff007f] shadow-[1px_1px_0px_#180d2b]">
                {project.year}
              </span>
            </div>
          </div>

          {/* Screenshot Display */}
          <div className="relative w-full flex-1 min-h-[260px] sm:min-h-[300px] lg:min-h-[360px] overflow-hidden bg-zinc-950 flex items-center justify-center">
            {/* Ambient Blurred Backdrop */}
            <img
              src={project.img}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-black/20" />

            <img
              src={project.img}
              alt={project.title}
              className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-10"
            />

            {/* Bottom Overlay Badge */}
            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 px-2.5 py-1 bg-[#180d2b]/90 dark:bg-[#0e1118]/90 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
              <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                DISTRIBUTED TICKETING SYSTEM
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Arcade Spec Panel (Always Visible) */}
        <div className="w-full lg:w-5/12 p-6 md:p-8 flex flex-col justify-between gap-5 bg-white dark:bg-[#0e1118]">
          <div className="flex flex-col gap-3.5">
            {/* Architecture Category Pill */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#7c3aed] dark:bg-[#00f0ff]" />
              <span className="text-[10px] font-mono font-bold text-[#7c3aed] dark:text-[#00f0ff] uppercase tracking-wider">
                {"// HIGH CONCURRENCY ARCHITECTURE"}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-2xl font-pixel text-[#180d2b] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-[#00f0ff] transition-colors uppercase tracking-tight flex items-center gap-2">
              <span className="text-[#7c3aed] dark:text-[#00f0ff] shrink-0">▸</span>
              <span>{project.title}</span>
            </h3>

            {/* Concise Description */}
            <p className="text-xs md:text-sm font-sans text-zinc-700 dark:text-zinc-200 leading-relaxed">
              {project.desc}
            </p>

            {/* Architecture Highlights */}
            <div className="pt-2">
              <span className="block text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase mb-1.5">
                {"// KEY CAPABILITIES:"}
              </span>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <span className="px-2 py-0.5 text-[9px] md:text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  ⚡ REAL-TIME SEATS
                </span>
                <span className="px-2 py-0.5 text-[9px] md:text-[10px] font-mono font-semibold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">
                  ⚡ CONCURRENCY LOCK
                </span>
                <span className="px-2 py-0.5 text-[9px] md:text-[10px] font-mono font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
                  ⚡ MESSAGE QUEUE
                </span>
              </div>
            </div>
          </div>

          {/* Bottom: Tech Stack & Action Button */}
          <div className="flex flex-col gap-4 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
            {/* Tech Stack Pills with Official Vector SVGs */}
            <div>
              <span className="block text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase mb-1.5">
                {"// TECH STACK:"}
              </span>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-zinc-100 dark:bg-[#151922] text-[10px] md:text-[11px] font-mono font-medium text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:border-[#7c3aed] dark:hover:border-[#00f0ff] hover:text-[#7c3aed] dark:hover:text-[#00f0ff] transition-colors shadow-[1px_1px_0px_rgba(0,0,0,0.06)]"
                  >
                    <TechIcon
                      name={tag}
                      className="w-3.5 h-3.5 shrink-0 text-[#7c3aed] dark:text-[#00f0ff]"
                    />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-mono font-bold bg-[#7c3aed] text-white dark:bg-[#00f0ff] dark:text-[#0e1118] border-2 border-[#180d2b] dark:border-[#00f0ff] shadow-[3px_3px_0px_#180d2b] dark:shadow-[3px_3px_0px_#ff007f] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#ec4899] dark:hover:shadow-[5px_5px_0px_#00f0ff] active:translate-y-0 transition-all cursor-pointer select-none"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

// 📦 Standard Bento Card (2x2 Cards Underneath)
function StandardBentoCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categoryLabel = project.type === "mobile" ? "MOBILE APP" : "WEB PLATFORM";

  return (
    <article
      ref={ref}
      className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 w-full h-full"
    >
      <motion.div
        variants={inventoryReveal}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{
          y: -4,
          transition: { type: "spring", stiffness: 400, damping: 20 },
        }}
        className="group relative w-full h-full flex flex-col justify-between overflow-hidden bg-white dark:bg-[#151922] border-4 border-[#180d2b] dark:border-[#2a324b] shadow-[4px_4px_0px_#180d2b] dark:shadow-[4px_4px_0px_#2a324b] hover:shadow-[8px_8px_0px_#7c3aed] dark:hover:shadow-[8px_8px_0px_#00f0ff] hover:border-[#7c3aed] dark:hover:border-[#00f0ff] transition-all duration-300 select-none"
      >
        {/* 4 Corner Retro Pixel Blocks */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#7c3aed] dark:bg-[#00f0ff] z-20 group-hover:scale-125 transition-transform" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#ec4899] dark:bg-[#ff007f] z-20 group-hover:scale-125 transition-transform" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-[#ec4899] dark:bg-[#ff007f] z-20 group-hover:scale-125 transition-transform" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#7c3aed] dark:bg-[#00f0ff] z-20 group-hover:scale-125 transition-transform" />

        {/* Top Tag Header Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b-2 border-[#180d2b] dark:border-[#2a324b] bg-zinc-50 dark:bg-[#0e1118] shrink-0 z-10">
          <div className="flex items-center gap-2">
            <span className="font-pixel text-[8px] md:text-[9px] text-[#7c3aed] dark:text-[#00f0ff] uppercase tracking-wider">
              {project.id}
            </span>
            <span className="font-mono text-[9px] md:text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
              {"// "}{categoryLabel}
            </span>
          </div>

          <span className="px-2 py-0.5 bg-white dark:bg-[#151922] border border-[#180d2b] dark:border-[#2a324b] text-[9px] md:text-[10px] font-mono font-bold text-[#ec4899] dark:text-[#ff007f] shadow-[1px_1px_0px_#180d2b]">
            {project.year}
          </span>
        </div>

        {/* Visual Display Banner: unified aspect-[16/9] for both mobile & web so rows stay aligned */}
        <div className="relative w-full aspect-[16/9] overflow-hidden border-b-2 border-[#180d2b] dark:border-[#2a324b]">
          {project.type === "mobile" ? (
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center p-4">
              {/* Ambient colorful blurred backdrop */}
              <img
                src={project.img}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/25" />

              {/* Centered Phone Frame — sized to fit inside 16/9 box */}
              <div className="relative h-full aspect-[617/1280] rounded-xl border-4 border-[#180d2b] dark:border-[#00f0ff] shadow-[0_12px_32px_rgba(0,0,0,0.6)] overflow-hidden bg-white dark:bg-black transition-all duration-300 group-hover:scale-105 z-10">
                {/* Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-[#180d2b] dark:bg-[#2a324b] rounded-b-md z-20" />
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Enlarge button */}
              <a
                href={project.img}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-[#180d2b]/85 hover:bg-[#7c3aed] text-white text-[9px] font-mono font-semibold border border-white/40 shadow-[1px_1px_0px_#000] z-20 transition-colors cursor-pointer"
                title="View full resolution screenshot"
              >
                🔍 ENLARGE
              </a>
            </div>
          ) : (
            <img
              src={project.img}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        {/* Card Content & Action Bar (Always Visible - No Empty Feeling) */}
        <div className="p-5 md:p-6 flex flex-col flex-1 justify-between gap-4 bg-white dark:bg-[#151922]">
          <div>
            <h4 className="text-xs md:text-sm font-pixel text-[#180d2b] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-[#00f0ff] transition-colors uppercase tracking-tight flex items-center gap-1.5">
              <span className="text-[#7c3aed] dark:text-[#00f0ff] shrink-0">▸</span>
              <span>{project.title}</span>
            </h4>

            <p className="text-xs md:text-sm font-sans text-zinc-700 dark:text-zinc-200 leading-relaxed mt-2">
              {project.desc}
            </p>
          </div>

          {/* Bottom: Tech Stack Pills & Action Button */}
          <div className="flex flex-col gap-3.5 mt-auto pt-3 border-t border-dashed border-zinc-200 dark:border-zinc-800">
            {/* Tech Stack Pills with Official Vector SVGs */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-zinc-100 dark:bg-[#0a0d14] text-[10px] md:text-[11px] font-mono font-medium text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:border-[#7c3aed] dark:hover:border-[#00f0ff] hover:text-[#7c3aed] dark:hover:text-[#00f0ff] transition-colors shadow-[1px_1px_0px_rgba(0,0,0,0.06)]"
                >
                  <TechIcon
                    name={tag}
                    className="w-3.5 h-3.5 shrink-0 text-[#7c3aed] dark:text-[#00f0ff]"
                  />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Action Button */}
            <div className="flex items-center gap-3 pt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold bg-[#7c3aed] text-white dark:bg-[#00f0ff] dark:text-[#0e1118] border-2 border-[#180d2b] dark:border-[#00f0ff] shadow-[2px_2px_0px_#180d2b] dark:shadow-[2px_2px_0px_#ff007f] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#ec4899] dark:hover:shadow-[4px_4px_0px_#00f0ff] active:translate-y-0 transition-all cursor-pointer select-none"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold bg-white dark:bg-[#151922] text-[#180d2b] dark:text-white border-2 border-[#180d2b] dark:border-[#2a324b] shadow-[2px_2px_0px_#180d2b] dark:shadow-[2px_2px_0px_#00f0ff] hover:border-[#7c3aed] dark:hover:border-[#00f0ff] hover:text-[#7c3aed] dark:hover:text-[#00f0ff] hover:translate-y-[-2px] active:translate-y-0 transition-all cursor-pointer select-none"
                >
                  <Code2 className="w-3.5 h-3.5 shrink-0" />
                  <span>VIEW CODE</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              )}

              {!project.liveUrl && !project.githubUrl && (
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 py-1 select-none">
                  {"// INTERNAL PLATFORM"}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

// 🌟 Top Featured Project Data: TiketBisa
export const featuredProject: Project = {
  id: "PROJ_02",
  img: "/projects/tiketbisa.png",
  title: "TiketBisa",
  desc: "A high-concurrency event ticketing marketplace featuring real-time seat mapping, Java microservices architecture, RabbitMQ distributed message queue, and Redis lock caching.",
  tags: ["JAVA", "SPARK", "RABBITMQ", "REDIS", "POSTGRESQL", "AWS S3"],
  year: "2025",
  type: "web",
  liveUrl: "https://tiketbisa.com",
};

// 📦 4 Standard Projects (2x2 Grid)
export const standardProjects: Project[] = [
  {
    id: "PROJ_01",
    img: "/projects/events-terang.png",
    title: "Terang Events",
    desc: "An intelligent SaaS event platform built with Go microservices deployed on Kubernetes (GKE) and a Next.js 15 cross-platform frontend.",
    tags: ["KUBERNETES", "GCP", "GO", "GIN", "NEXTJS", "POSTGRESQL"],
    year: "2026",
    type: "web",
    liveUrl: "https://events.terang.ai",
  },
  {
    id: "PROJ_03",
    img: "/projects/sikap.jpeg",
    title: "SIKAP",
    desc: "An AI-powered emotional health and anonymous incident reporting mobile application with contextual intervention guidance and emotion analysis.",
    tags: ["FLUTTER", "DJANGO", "SUPABASE", "POSTGRESQL", "AI/ML"],
    year: "2025",
    type: "mobile",
    githubUrl: "https://github.com/MBD-LIDM/SIKAP-frontend",
  },
  {
    id: "PROJ_04",
    img: "/projects/Oliminate.png",
    title: "Oliminate",
    desc: "An end-to-end sports competition management platform featuring match scheduling, QR ticket verification, and official merchandise distribution.",
    tags: ["JAVASCRIPT", "DJANGO", "FLUTTER", "POSTGRESQL"],
    year: "2025",
    type: "web",
    githubUrl: "https://github.com/pbp-kelompok-c08/Oliminate",
  },
  {
    id: "PROJ_05",
    img: "/projects/pemira.jpeg",
    title: "Pemira FISIP UI 2025",
    desc: "A production-grade E-Voting platform for FISIP Universitas Indonesia deployed on Railway to handle high-concurrency campus voting traffic.",
    tags: [
      "REACT",
      "NEXTJS",
      "TYPESCRIPT",
      "TAILWIND",
      "POSTGRESQL",
      "RAILWAY",
    ],
    year: "2025",
    type: "web",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full px-6 md:px-12 pt-24 pb-20 scroll-mt-24"
    >
      <AmbientPixelDecors />

      <div className="w-full">
        <PageHeading
          title="Selected Projects"
          subtitle="[ A curated bento box gallery of builds, platforms & repositories ]"
        />

        {/* Bento Grid: 1 Featured Project Top (lg:col-span-4) + 2x2 Standard Projects Below (lg:col-span-2) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full items-stretch"
          aria-label="Bento layout"
        >
          {/* Featured Top: TiketBisa (1 Gede) */}
          <FeaturedProjectCard project={featuredProject} />

          {/* 2x2 Cards: Terang Events, SIKAP, Oliminate, Pemira FISIP UI */}
          {standardProjects.map((project) => (
            <StandardBentoCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
