import React from "react";
import { Hero } from "./components/Hero";
import { PixelController } from "./components/PixelController";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { BackToTop } from "./components/BackToTop";
import { PixelDividerH } from "./components/pixel/PixelUI";

export default function Page() {
  return (
    <div className="relative">
      {/* Section: About / Hero */}
      <section
        id="about"
        className="w-full min-h-screen flex flex-col justify-between px-6 md:px-12 pt-20 md:pt-24 pb-8 md:pb-12 scroll-mt-24"
      >
        <div className="flex justify-center pb-4 md:pb-8">
          <div className="p-1.5 border-4 border-[#180d2b] dark:border-[#00f0ff] bg-[#7c3aed] dark:bg-[#00f0ff] shadow-[4px_4px_0px_#ec4899] dark:shadow-[4px_4px_0px_#ff007f]">
            <h2 className="text-white dark:text-[#0e1118] text-[11px] md:text-xs font-['Press_Start_2P'] p-2 font-bold uppercase tracking-wider">
              Hello all!
            </h2>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-12 items-center justify-center my-auto">
          <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-md md:max-w-lg p-1.5 border-4 border-[#180d2b] dark:border-[#00f0ff] bg-[#ec4899] dark:bg-[#ff007f] shadow-[8px_8px_0px_#7c3aed] dark:shadow-[8px_8px_0px_#ff007f]">
              <img
                src="/adjie-photos.png"
                alt="Adjie M. Usman"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <Hero />
            <PixelController />
          </div>
        </div>

        {/* Retro Scroll Indicator */}
        <div className="flex justify-center mt-6 md:mt-8">
          <a
            href="#experience"
            className="flex flex-col items-center gap-2 text-[9px] md:text-[10px] font-['Press_Start_2P'] text-[#7c3aed] dark:text-[#00f0ff] hover:text-[#ec4899] dark:hover:text-[#ff007f] transition-colors cursor-pointer"
          >
            <span>[ SCROLL DOWN ]</span>
            <span className="text-[12px] animate-bounce">▼</span>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full px-6 md:px-12">
        <PixelDividerH />
      </div>

      {/* Section: Experience */}
      <ExperienceSection />

      {/* Divider */}
      <div className="w-full px-6 md:px-12">
        <PixelDividerH />
      </div>

      {/* Section: Projects */}
      <ProjectsSection />

      {/* Divider */}
      <div className="w-full px-6 md:px-12">
        <PixelDividerH />
      </div>

      {/* Section: Contact */}
      <ContactSection />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
