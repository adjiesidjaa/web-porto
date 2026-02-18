"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PixelCorners,
  PixelShadow,
  PixelDividerH,
  PixelDividerV,
  ScanlineOverlay,
  PageHeading,
} from "../components/pixel/PixelUI";
import {
  inventoryReveal,
  tagContainer,
  tagPop,
} from "../components/pixel/variants";

type ProjectType = "web" | "mobile";

interface Project {
  img: string;
  title: string;
  desc: string;
  tags: string[];
  year: string;
  type: ProjectType;
}

function ProjectBadge({ idx }: { idx: number }) {
  return (
    <div className="absolute top-2 left-2 px-2 py-1 bg-[#232020]/80 dark:bg-[#c5a686]/90 border-2 border-[#c5a686] dark:border-[#232020]">
      <span className="text-[7px] font-['Press_Start_2P'] text-[#c5a686] dark:text-[#232020]">
        PROJ_{String(idx + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

function TagsSection({
  tags,
  isInView,
}: {
  tags: string[];
  isInView: boolean;
}) {
  return (
    <motion.div
      variants={tagContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-wrap gap-2"
    >
      {tags.map((tag, tIdx) => (
        <motion.span
          key={tIdx}
          variants={tagPop}
          className="px-2 py-1 bg-zinc-100 dark:bg-[#1a1818] text-[7px] font-['Press_Start_2P'] text-zinc-500 dark:text-[#c5a686] border-2 border-zinc-200 dark:border-zinc-700 group-hover:border-[#c5a686] transition-colors duration-200"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}

function WebCard({
  project,
  idx,
  isInView,
}: {
  project: Project;
  idx: number;
  isInView: boolean;
}) {
  return (
    <div className="bg-white dark:bg-[#232020] border-4 border-[#232020] dark:border-[#8b7355] overflow-hidden transition-colors duration-200 group-hover:border-[#c5a686]">
      <div className="flex flex-col md:flex-row">
        <div className="relative overflow-hidden md:w-48 lg:w-56 md:min-h-full shrink-0 bg-zinc-200 dark:bg-zinc-800">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-36 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <ScanlineOverlay />
          <ProjectBadge idx={idx} />
        </div>

        <div className="md:hidden">
          <PixelDividerH />
        </div>
        <div className="hidden md:block">
          <PixelDividerV />
        </div>

        <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
              <h2 className="text-xs md:text-sm font-['Press_Start_2P'] text-[#232020] dark:text-white group-hover:text-[#8b7355] dark:group-hover:text-[#c5a686] transition-colors uppercase">
                {project.title}
              </h2>
              <span className="text-[8px] font-['Press_Start_2P'] text-[#c5a686] uppercase tracking-wider whitespace-nowrap">
                {project.year}
              </span>
            </div>
            <p className="text-xs md:text-sm font-['Inter'] leading-relaxed text-zinc-600 dark:text-zinc-300 mb-4">
              {project.desc}
            </p>
          </div>
          <TagsSection tags={project.tags} isInView={isInView} />
        </div>
      </div>
    </div>
  );
}

function MobileCard({
  project,
  idx,
  isInView,
}: {
  project: Project;
  idx: number;
  isInView: boolean;
}) {
  return (
    <div className="bg-white dark:bg-[#232020] border-4 border-[#232020] dark:border-[#8b7355] overflow-hidden transition-colors duration-200 group-hover:border-[#c5a686]">
      <div className="flex flex-col md:flex-row">
        <div className="relative overflow-hidden md:w-44 shrink-0 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center md:p-4 p-4">
          <div className="relative w-36 md:w-full rounded-2xl border-4 border-[#232020] dark:border-[#8b7355] overflow-hidden shadow-lg group-hover:border-[#c5a686] transition-colors duration-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[6px] bg-[#232020] dark:bg-[#8b7355] rounded-b-md z-10 group-hover:bg-[#c5a686] transition-colors" />
            <img
              src={project.img}
              alt={project.title}
              className="w-full aspect-[9/16] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <ScanlineOverlay />
          </div>
          <ProjectBadge idx={idx} />
        </div>

        <div className="md:hidden">
          <PixelDividerH />
        </div>
        <div className="hidden md:block">
          <PixelDividerV />
        </div>

        <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-['Press_Start_2P'] text-white dark:text-[#232020] bg-[#c5a686] px-2 py-0.5 uppercase">
                  Mobile
                </span>
                <h2 className="text-xs md:text-sm font-['Press_Start_2P'] text-[#232020] dark:text-white group-hover:text-[#8b7355] dark:group-hover:text-[#c5a686] transition-colors uppercase">
                  {project.title}
                </h2>
              </div>
              <span className="text-[8px] font-['Press_Start_2P'] text-[#c5a686] uppercase tracking-wider whitespace-nowrap">
                {project.year}
              </span>
            </div>
            <p className="text-xs md:text-sm font-['Inter'] leading-relaxed text-zinc-600 dark:text-zinc-300 mb-4">
              {project.desc}
            </p>
          </div>
          <TagsSection tags={project.tags} isInView={isInView} />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <motion.div
        variants={inventoryReveal}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{
          y: -6,
          x: [0, -2, 2, -1, 1, 0],
          transition: {
            y: { type: "tween", duration: 0.15 },
            x: { duration: 0.3, ease: "easeInOut" },
          },
        }}
        className="group relative cursor-default"
      >
        <PixelShadow />

        {project.type === "mobile" ? (
          <MobileCard project={project} idx={idx} isInView={isInView} />
        ) : (
          <WebCard project={project} idx={idx} isInView={isInView} />
        )}

        <PixelCorners />
      </motion.div>
    </div>
  );
}

export default function Page() {
  const projects: Project[] = [
    {
      img: "/projects/pemira.jpeg",
      title: "Pemira FISIP UI 2025",
      desc: "Built and maintained the E-Voting platform for FISIP Universitas Indonesia, refining features from the prior system, optimizing scalability to handle higher voting traffic, and deploying a production-grade server infrastructure on Railway.",
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
    {
      img: "/projects/sikap.jpeg",
      title: "SIKAP",
      desc: "An AI-powered application designed to provide a safe space for users to report experiences and better understand their emotional state. The platform supports anonymous reporting to ensure privacy, leverages AI-based emotion analysis to identify emotional patterns, and offers contextual intervention scenarios as early guidance for appropriate support and response.",
      tags: ["RAILWAY", "DJANGO", "FLUTTER", "SUPABASE", "POSTGRESQL"],
      year: "2025",
      type: "mobile",
    },
    {
      img: "/projects/Oliminate.png",
      title: "Oliminate",
      desc: "Oliminate is an event management platform designed to support the organization of sports competitions end-to-end. It enables organizers to manage match scheduling, online ticket sales with QR verification, official merchandise distribution, and post-event reviews within a single system. The platform also provides user profile management and an informative main dashboard for seamless navigation. Developed as part of a course project at Fakultas Ilmu Komputer Universitas Indonesia, Oliminate focuses on improving operational efficiency for committees while delivering a convenient digital experience for participants and spectators.",
      tags: ["JAVASCRIPT", "DJANGO", "FLUTTER", "POSTGRESQL"],
      year: "2025",
      type: "web",
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <PageHeading
        title="Selected Projects"
        subtitle="[ A collection of digital experiments ]"
      />

      <div className="flex flex-col gap-10 md:gap-12">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </div>
  );
}
