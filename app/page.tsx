import React from "react";
import { Hero } from "./components/Hero";
import { PixelController } from "./components/PixelController";

export default function Page() {
  return (
    <main className="pt-16 md:pt-24">
      <div className="flex justify-center pb-8 md:pb-16">
        <div className="p-1 border-4 border-[#8b7355] bg-[#c5a686]">
          <h2 className="text-[#232020] text-[10px] font-['Press_Start_2P'] p-2">
            Hello all!
          </h2>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 items-center justify-center px-8 md:px-12">
        <div className="flex items-center justify-center h-full w-full">
          <div className="w-full max-w-sm md:max-w-md h-full p-1 border-4 border-[#8b7355] bg-[#c5a686]">
            <img
              src="/adjie-photos.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Hero />
          <PixelController />
        </div>
      </section>
    </main>
  );
}
