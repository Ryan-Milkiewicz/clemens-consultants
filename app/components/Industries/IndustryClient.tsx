"use client";
import { IndustrySection } from "@/lib/types";
import { useState } from "react";

export default function IndustriesClient({ data }: { data: IndustrySection }) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f4f5f7] px-20 py-16 max-md:px-6 max-md:py-10">
      {/* Header */}
      <div className="flex items-start gap-12 mb-10 max-md:flex-col max-md:gap-5">
        <div className="flex-none max-w-sm">
          <p className="text-[#47a4a4] text-lg font-semibold tracking-widest uppercase mb-2">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-[#1e3557] text-3xl font-extrabold leading-tight mb-3">
            {data.heading}
          </h2>
          <div className="w-12 h-[3px] bg-[#c8a96e] rounded-full" />
        </div>
        <div className="flex flex-1 items-center gap-8 pt-12 max-md:flex-col max-md:items-start max-md:pt-0 max-md:gap-4">
          <p className="text-[#4a5568] text-[15px] leading-relaxed flex-1">
            {data.subheading}
          </p>
          {/* <a
            href="/industries"
            className="flex-shrink-0 bg-[#c8a96e] hover:bg-[#b8945a] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
          >
            VIEW ALL INDUSTRIES
          </a> */}
        </div>
      </div>

      {/* Panel */}
      <div className="flex rounded-xl overflow-hidden shadow-xl h-auto max-md:flex-col">
        <div className="bg-[#1e7db3] flex-none w-[38%] flex flex-col py-4 max-md:w-full">
          {data.sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`flex justify-between items-center text-left px-8 py-[18px] font-bold text-sm tracking-widest uppercase transition-all duration-150 border-l-4
                ${
                  active === index
                    ? "bg-black/15 text-[#c8a96e] border-[#c8a96e]"
                    : "text-white/85 border-transparent hover:bg-white/8 hover:text-white"
                }`}
            >
              {section.title}
              <span className="text-lg opacity-70">›</span>
            </button>
          ))}
        </div>

        {/* Inside Panel */}
        <div className="bg-white flex-1 flex flex-col justify-center px-14 py-12 max-md:px-6 max-md:py-8">
          {data.sections[active].photo && (
            <div className="text-6xl mb-4">{data.sections[active].photo}</div>
          )}
          <h3 className="text-[#1e3557] text-2xl font-extrabold mb-3">
            {data.sections[active].title}
          </h3>
          <div className="w-12 h-[3px] bg-[#c8a96e] rounded-full mb-5" />
          <p className="text-[#4a5568] text-[15px] leading-relaxed max-w-xl">
            {data.sections[active].description}
          </p>
        </div>
      </div>
    </section>
  );
}
