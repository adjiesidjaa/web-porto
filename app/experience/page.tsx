"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PixelCorners,
  PixelShadow,
  PixelDividerH,
  PageHeading,
} from "../components/pixel/PixelUI";
import {
  pixelPopVariants,
  descStagger,
  descItem,
} from "../components/pixel/variants";

interface ExperienceItem {
  organization: string;
  date: string;
  role: string;
  descriptions: string[];
}

function ExperienceCard({ exp, idx }: { exp: ExperienceItem; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const fromRight = idx % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`flex w-full ${fromRight ? "justify-end" : "justify-start"}`}
    >
      <motion.div
        variants={pixelPopVariants(fromRight)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{
          y: -8,
          transition: { type: "tween", duration: 0.15 },
        }}
        className="relative w-full md:w-[85%] cursor-default"
      >
        <div className="group">
          <PixelShadow />

          <div className="bg-white dark:bg-[#232020] border-4 border-[#232020] dark:border-[#8b7355] transition-colors duration-200 group-hover:border-[#c5a686]">
            <div className="p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h2 className="text-sm md:text-base font-['Press_Start_2P'] text-[#232020] dark:text-white group-hover:text-[#8b7355] dark:group-hover:text-[#c5a686] transition-colors uppercase">
                  {exp.organization}
                </h2>
                <span className="text-[8px] md:text-[9px] font-['Press_Start_2P'] text-[#c5a686] uppercase tracking-wider whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
              <p className="text-[10px] font-['Press_Start_2P'] text-zinc-600 dark:text-zinc-400 mt-2 uppercase">
                ◈ {exp.role}
              </p>
            </div>

            <PixelDividerH className="mx-4" />

            <motion.ul
              variants={descStagger}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="p-5 md:p-6 space-y-2 text-xs font-['Inter'] leading-relaxed text-zinc-700 dark:text-zinc-200"
            >
              {exp.descriptions.map((desc, i) => (
                <motion.li
                  key={i}
                  variants={descItem}
                  className="flex items-start gap-2"
                >
                  <span className="text-[#c5a686] mt-0.5 shrink-0 font-['Press_Start_2P'] text-[8px]">
                    ▸
                  </span>
                  <span>{desc}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <PixelCorners count={2} />
        </div>
      </motion.div>
    </div>
  );
}

export default function Page() {
  const experienceData: ExperienceItem[] = [
    {
      organization: "BEM Fasilkom UI",
      date: "July 2025 - Present",
      role: "Head of Business & Partnership Bureau",
      descriptions: [
        "Spearheaded strategic collaborations with external corporate partners to facilitate institutional growth and secure sponsorships for faculty-wide initiatives.",
        "Managed the end-to-end refactoring and deployment of the PEMIRA FISIP UI election system, ensuring high availability and stability during critical voting periods.",
        'Developed a comprehensive "Tryout" feature for the Jitu Academy platform using Express.js and Next.js, integrating automated scoring and real-time user progress tracking.',
      ],
    },
    {
      organization: "RISTEK Fasilkom UI",
      date: "Mar 2025 - Present",
      role: "People Operations of Web Development",
      descriptions: [
        'Orchestrated "Coffee Chat" initiatives to facilitate knowledge transfer, connecting active RISTEK members with distinguished alumni at top-tier tech firms for career mentorship.',
        "Curated a centralized repository of learning resources, enabling members to access recorded sessions and study materials asynchronously.",
        'Developed and executed a quarterly performance evaluation system for all division members, utilizing "report cards" to assess soft skill competencies and foster continuous personal growth.',
        "Managed end-to-end relations with guest speakers for technical workshops, specifically bridging current members with distinguished alumni at leading tech firms to share industry insights and best practices.",
      ],
    },
    {
      organization: "BETIS Fasilkom UI",
      date: "Nov 2024 - May 2025",
      role: "Staff of Akademi Pengajar",
      descriptions: [
        "Engineered a comprehensive learning curriculum for the General Knowledge and Understanding (PPU) subtest of the National College Entrance Exam (UTBK), strategically designed to optimize student retention and comprehension.",
        "Orchestrated the development of standardized mock exams (Tryouts) and practice materials, ensuring all assessment content aligned with the latest national exam patterns and difficulty levels.",
        "Delivered high-impact instructional sessions on the PPU subtest to underprivileged students, simplifying complex linguistic concepts to improve their performance in practice assessments.",
      ],
    },
    {
      organization: "Open House Fasilkom UI",
      date: "Aug 2024 - Dec 2024",
      role: "Liaison Officer",
      descriptions: [
        "Served as the primary point of contact for high school participants, ensuring seamless communication and delivering a high-quality guest experience throughout the event.",
        "Acted as the primary point of communication between the organizing committee and external participants, resolving high-pressure logistical bottlenecks and onsite inquiries.",
        "Led and supervised a team of mentors, providing comprehensive briefings and technical guidance on event protocols to ensure seamless execution.",
      ],
    },
    {
      organization: "PERAK Fasilkom UI",
      date: "Feb 2025 - Sept 2025",
      role: "Staff of Festival",
      descriptions: [
        "Served as the Person in Charge (PIC) for the festival's main event, orchestrating end-to-end operations and ensuring a seamless experience for 300+ attendees.",
        "Liaised with external amusement and equipment vendors to secure event attractions, managing the negotiation, procurement, and logistical coordination of rented assets.",
        "Managed communications between the committee and external parties to streamline event logistics and resolve on-site operational challenges.",
      ],
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <PageHeading
        title="Experience"
        subtitle="[ A timeline of my roles and responsibilities ]"
      />

      <div className="flex flex-col gap-10 md:gap-12">
        {experienceData.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} idx={idx} />
        ))}
      </div>
    </div>
  );
}
