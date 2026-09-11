"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronUp, ChevronDown } from "lucide-react";
import {
  PageHeading,
  PixelDividerH,
  PixelLogoShield,
  AmbientPixelDecors,
} from "../pixel/PixelUI";
import { PixelGameFrame } from "../pixel/PixelGameFrame";
import { descStagger, descItem } from "../pixel/variants";

export interface ExperienceItem {
  organization: string;
  orgShort: string;
  role: string;
  date: string;
  location: string;
  descriptions: string[];
}

function ExperienceCard({ exp }: { exp: ExperienceItem; idx: number }) {
  return (
    <div className="relative flex items-start gap-4 md:gap-8 w-full group">
      {/* Dynamic Retro Timeline Checkpoint & Connector */}
      <div className="relative flex flex-col items-center shrink-0 pt-5 z-10">
        {/* Rotating Checkpoint Diamond */}
        <div className="w-4 h-4 bg-[#7c3aed] dark:bg-[#00f0ff] border-2 border-[#180d2b] dark:border-white rotate-45 group-hover:rotate-90 group-hover:scale-125 shadow-[2px_2px_0px_#180d2b] transition-transform duration-300 select-none" />

        {/* Horizontal Connector Bridge */}
        <div className="absolute top-[26px] left-[16px] w-4 md:w-8 h-[2px] bg-[#180d2b] dark:bg-[#2a324b] group-hover:bg-[#7c3aed] dark:group-hover:bg-[#00f0ff] transition-colors" />
      </div>

      {/* Main Experience Card */}
      <div className="flex-1 w-full min-w-0">
        <PixelGameFrame>
          <div className="p-5 md:p-6 flex flex-col gap-4">
            {/* Header: Logo Shield + Company + Date + Role + Location */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <PixelLogoShield shortName={exp.orgShort} />

                <div>
                  <h2 className="text-sm md:text-base font-pixel text-[#180d2b] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-[#00f0ff] transition-colors uppercase tracking-tight">
                    {exp.organization}
                  </h2>

                  <p className="text-xs md:text-sm font-mono font-semibold text-[#7c3aed] dark:text-[#00f0ff] mt-1.5">
                    ◈ {exp.role}
                  </p>

                  <div className="flex items-center gap-1.5 mt-1 text-[11px] md:text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <MapPin className="w-3 h-3 shrink-0 text-zinc-400 dark:text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs font-mono font-medium text-[#ec4899] dark:text-[#ff2e93] bg-zinc-50 dark:bg-[#0e1118] px-2.5 py-1 border border-zinc-200 dark:border-zinc-800 shadow-[1px_1px_0px_#180d2b] dark:shadow-[1px_1px_0px_#00f0ff]">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>{exp.date}</span>
              </div>
            </div>

            <PixelDividerH className="opacity-60" />

            {/* Bullet Points / Responsibilities */}
            <motion.ul
              variants={descStagger}
              initial="hidden"
              animate="visible"
              className="space-y-2.5 text-xs md:text-sm font-sans leading-relaxed text-zinc-700 dark:text-zinc-200"
            >
              {exp.descriptions.map((desc, i) => (
                <motion.li
                  key={i}
                  variants={descItem}
                  className="flex items-start gap-2.5"
                >
                  <span className="text-[#06b6d4] dark:text-[#00f0ff] mt-1 shrink-0 font-pixel text-[8px] group-hover:translate-x-1 transition-transform duration-150">
                    ▸
                  </span>
                  <span>{desc}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </PixelGameFrame>
      </div>
    </div>
  );
}

export const experienceData: ExperienceItem[] = [
  {
    organization: "Terang AI",
    orgShort: "TA",
    date: "April 2026 - Current",
    role: "Full Stack Engineer Intern",
    location: "Depok / Jakarta",
    descriptions: [
      'Architected and engineered "Terang AI," an intelligent event management ecosystem, from scratch using Go (Golang) for high-performance microservices and Next.js/React for a seamless, responsive user interface.',
      "Integrated automation features, including smart scheduling and automated task allocation, to optimize event coordination workflows and reduce manual administrative overhead by 70%.",
      "Developed a robust backend architecture with a focus on high concurrency and data integrity, implementing RESTful APIs and optimized database schemas to support real-time updates for large-scale events.",
      "Streamlined the deployment pipeline using industry-standard DevOps practices, ensuring the platform's scalability and high availability for diverse organizational needs.",
    ],
  },
  {
    organization: "BEM Fasilkom UI",
    orgShort: "BEM",
    date: "July 2025 - April 2026",
    role: "Head of Business & Partnership Bureau",
    location: "Depok, Indonesia",
    descriptions: [
      "Spearheaded strategic collaborations with external corporate partners to facilitate institutional growth and secure sponsorships for faculty-wide initiatives.",
      "Managed the end-to-end refactoring and deployment of the PEMIRA FISIP UI election system, ensuring high availability and stability during critical voting periods.",
      'Developed a comprehensive "Tryout" feature for the Jitu Academy platform from scratch using Nest.js and Next.js, integrating automated scoring and real-time user progress tracking.',
    ],
  },
  {
    organization: "RISTEK Fasilkom UI",
    orgShort: "RSTK",
    date: "Mar 2025 - April 2026",
    role: "People Operations of Web Development",
    location: "Depok, Indonesia",
    descriptions: [
      'Orchestrated "Coffee Chat" initiatives to facilitate knowledge transfer, connecting active RISTEK members with distinguished alumni at top-tier tech firms for career mentorship.',
      "Curated a centralized repository of learning resources, enabling members to access recorded sessions and study materials asynchronously.",
      'Developed and executed a quarterly performance evaluation system for all division members, utilizing "report cards" to assess soft skill competencies and foster continuous personal growth.',
      "Managed end-to-end relations with guest speakers for technical workshops, specifically bridging current members with distinguished alumni at leading tech firms to share industry insights and best practices.",
    ],
  },
  {
    organization: "PERAK Fasilkom UI",
    orgShort: "PERAK",
    date: "Feb 2025 - Sept 2025",
    role: "Staff of Festival",
    location: "Depok, Indonesia",
    descriptions: [
      "Served as the Person in Charge (PIC) for the festival's main event, orchestrating end-to-end operations and ensuring a seamless experience for 300+ attendees.",
      "Liaised with external amusement and equipment vendors to secure event attractions, managing the negotiation, procurement, and logistical coordination of rented assets.",
      "Managed communications between the committee and external parties to streamline event logistics and resolve on-site operational challenges.",
    ],
  },
  {
    organization: "BETIS Fasilkom UI",
    orgShort: "BETIS",
    date: "Nov 2024 - May 2025",
    role: "Staff of Akademi Pengajar",
    location: "Depok, Indonesia",
    descriptions: [
      "Engineered a comprehensive learning curriculum for the General Knowledge and Understanding (PPU) subtest of the National College Entrance Exam (UTBK), strategically designed to optimize student retention and comprehension.",
      "Orchestrated the development of standardized mock exams (Tryouts) and practice materials, ensuring all assessment content aligned with the latest national exam patterns and difficulty levels.",
      "Delivered high-impact instructional sessions on the PPU subtest to underprivileged students, simplifying complex linguistic concepts to improve their performance in practice assessments.",
    ],
  },
  {
    organization: "Open House Fasilkom UI",
    orgShort: "OH",
    date: "Aug 2024 - Dec 2024",
    role: "Liaison Officer",
    location: "Depok, Indonesia",
    descriptions: [
      "Served as the primary point of contact for high school participants, ensuring seamless communication and delivering a high-quality guest experience throughout the event.",
      "Acted as the primary point of communication between the organizing committee and external participants, resolving high-pressure logistical bottlenecks and onsite inquiries.",
      "Led and supervised a team of mentors, providing comprehensive briefings and technical guidance on event protocols to ensure seamless execution.",
    ],
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const maxScroll = el.scrollHeight - el.clientHeight;
    const pct =
      maxScroll > 0
        ? Math.min(100, Math.max(0, (el.scrollTop / maxScroll) * 100))
        : 0;
    setScrollPercent(pct);
    setIsAtTop(el.scrollTop <= 6);
    setIsAtBottom(
      Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight - 6
    );

    // Determine active card based on scroll position
    const cards = cardRefs.current;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (card) {
        const cardTop = card.offsetTop - el.offsetTop;
        if (el.scrollTop >= cardTop - 120) {
          setActiveIdx(i);
        }
      }
    }
  };

  const handleJumpToCard = (idx: number) => {
    const target = cardRefs.current[idx];
    if (target && containerRef.current) {
      const targetTop = target.offsetTop - containerRef.current.offsetTop;
      containerRef.current.scrollTo({ top: targetTop, behavior: "smooth" });
      setActiveIdx(idx);
    }
  };

  const handleScrollUp = () => {
    const prevIdx = Math.max(0, activeIdx - 1);
    handleJumpToCard(prevIdx);
  };

  const handleScrollDown = () => {
    const nextIdx = Math.min(experienceData.length - 1, activeIdx + 1);
    handleJumpToCard(nextIdx);
  };

  let boundaryStatus = "SCROLL INSIDE FOR CONTINUOUS VIEW";
  if (isAtBottom) {
    boundaryStatus = "END OF TIMELINE • SCROLL DOWN FOR PROJECTS ➔";
  } else if (isAtTop) {
    boundaryStatus = "TOP OF TIMELINE • SCROLL DOWN TO EXPLORE";
  }

  return (
    <section
      id="experience"
      className="relative w-full px-6 md:px-12 pt-24 pb-20 scroll-mt-24"
    >
      <AmbientPixelDecors />

      <div className="w-full">
        <PageHeading
          title="Experience"
          subtitle="[ A continuous chronological questline of professional roles & responsibilities ]"
        />

        {/* Arcade Controller & Progress Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 bg-white dark:bg-[#0e1118] border-2 border-[#180d2b] dark:border-[#2a324b] p-3 shadow-[3px_3px_0px_#180d2b] dark:shadow-[3px_3px_0px_#00f0ff] select-none">
          {/* Left: Live Progress Tracker & Quest Indicator */}
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-700 dark:text-zinc-300">
            <span
              className={`w-2.5 h-2.5 inline-block ${
                isAtBottom
                  ? "bg-[#ec4899] dark:bg-[#ff007f] shadow-[0_0_6px_#ff007f]"
                  : "bg-[#06b6d4] dark:bg-[#00f0ff] animate-pulse shadow-[0_0_6px_#00f0ff]"
              }`}
            />

            {/* Quest Indicator */}
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[8px] md:text-[9px] text-[#7c3aed] dark:text-[#00f0ff] uppercase tracking-wider">
                QUEST {activeIdx + 1}/6:
              </span>
              <span className="font-bold text-xs bg-zinc-100 dark:bg-[#151922] px-2 py-0.5 border border-zinc-300 dark:border-zinc-700 uppercase">
                {experienceData[activeIdx].organization}
              </span>
            </div>

            {/* Visual Mini Progress Bar */}
            <div className="hidden md:flex items-center gap-1.5 ml-1">
              <div className="w-16 h-2 bg-zinc-200 dark:bg-zinc-800 border border-[#180d2b] dark:border-[#2a324b] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] dark:from-[#00f0ff] dark:to-[#ff007f] transition-all duration-150"
                  style={{ width: `${scrollPercent}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400">
                {Math.round(scrollPercent)}%
              </span>
            </div>

            <span className="hidden lg:inline text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              ({boundaryStatus})
            </span>
          </div>

          {/* Right: Quick Jump Checkpoints & Up/Down Smooth Buttons */}
          <div className="flex items-center gap-2">
            {/* Quick Checkpoint Buttons */}
            <div className="hidden sm:flex items-center gap-1 mr-2">
              {experienceData.map((exp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleJumpToCard(idx)}
                  className={`px-2 py-0.5 text-[9px] font-mono font-bold transition-all border cursor-pointer ${
                    activeIdx === idx
                      ? "bg-[#ec4899] text-white dark:bg-[#ff007f] dark:text-white border-[#180d2b] dark:border-white shadow-[1px_1px_0px_#180d2b]"
                      : "bg-zinc-100 dark:bg-[#151922] text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:border-[#7c3aed] dark:hover:border-[#00f0ff] hover:text-[#7c3aed] dark:hover:text-[#00f0ff]"
                  }`}
                  title={exp.organization}
                  aria-label={`Jump to ${exp.organization}`}
                >
                  {exp.orgShort}
                </button>
              ))}
            </div>

            {/* Up Button */}
            <button
              onClick={handleScrollUp}
              disabled={isAtTop}
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-bold border-2 transition-all ${
                isAtTop
                  ? "opacity-30 cursor-not-allowed border-zinc-300 dark:border-zinc-800 text-zinc-400"
                  : "border-[#180d2b] dark:border-[#00f0ff] bg-white dark:bg-[#151922] text-[#180d2b] dark:text-white shadow-[2px_2px_0px_#180d2b] dark:shadow-[2px_2px_0px_#00f0ff] hover:bg-[#7c3aed] hover:text-white dark:hover:bg-[#00f0ff] dark:hover:text-[#0e1118] active:translate-y-0.5 cursor-pointer"
              }`}
              aria-label="Scroll Up Experience"
            >
              <ChevronUp className="w-4 h-4" />
              <span>UP</span>
            </button>

            {/* Down Button */}
            <button
              onClick={handleScrollDown}
              disabled={isAtBottom}
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-bold border-2 transition-all ${
                isAtBottom
                  ? "opacity-30 cursor-not-allowed border-zinc-300 dark:border-zinc-800 text-zinc-400"
                  : "border-[#180d2b] dark:border-[#00f0ff] bg-[#7c3aed] text-white dark:bg-[#00f0ff] dark:text-[#0e1118] shadow-[2px_2px_0px_#180d2b] dark:shadow-[2px_2px_0px_#ff007f] hover:shadow-[3px_3px_0px_#ec4899] active:translate-y-0.5 cursor-pointer"
              }`}
              aria-label="Scroll Down Experience"
            >
              <ChevronDown className="w-4 h-4" />
              <span>DOWN</span>
            </button>
          </div>
        </div>

        {/* Continuous Smooth Scrollable Viewport */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          style={{ WebkitOverflowScrolling: "touch" }}
          className="relative pl-0 sm:pl-2 w-full h-[620px] md:h-[660px] overflow-y-auto pixel-scrollbar pr-2 sm:pr-4 select-none"
        >
          {/* All 6 Experience Cards - Rendered Continuously with relative rail */}
          <div className="relative flex flex-col gap-8 md:gap-10 w-full py-2 min-h-0">
            {/* Vertical Timeline Rail Track */}
            <div className="absolute left-[6px] top-6 bottom-6 w-[4px] pointer-events-none">
              {/* Inactive Base Rail (unlocked path awaiting exploration) */}
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800/80 rounded-full border border-black/10 dark:border-white/5" />

              {/* Active Flowing Neon Energy Beam (fills dynamically as you scroll) */}
              <div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#06b6d4] via-[#7c3aed] to-[#ec4899] dark:from-[#00f0ff] dark:via-[#ff007f] dark:to-[#ffe600] rounded-full shadow-[0_0_10px_rgba(124,58,237,0.6)] dark:shadow-[0_0_14px_rgba(0,240,255,0.8)]"
                style={{ height: `${Math.max(5, scrollPercent)}%` }}
              >
                {/* Glowing Energy Spark at the Leading Edge */}
                <div className="absolute -bottom-1 -left-[3px] w-[10px] h-[10px] bg-[#ec4899] dark:bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff] animate-ping opacity-75" />
                <div className="absolute -bottom-1 -left-[3px] w-[10px] h-[10px] bg-white dark:bg-[#00f0ff] rounded-full shadow-[0_0_8px_#ff007f] dark:shadow-[0_0_8px_#00f0ff]" />
              </div>
            </div>

            {experienceData.map((exp, idx) => (
              <div
                key={exp.organization}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="w-full shrink-0"
              >
                <ExperienceCard exp={exp} idx={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
