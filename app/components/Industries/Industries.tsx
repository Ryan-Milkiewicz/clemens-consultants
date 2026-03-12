"use client";
import { useState } from "react";

const INDUSTRIES = [
  {
    label: "Construction & Real Estate",
    icon: "🏗️",
    description:
      "We provide specialized accounting, tax, and advisory services tailored to the unique challenges of the construction and real estate industries — from project costing to entity structuring.",
  },
  {
    label: "Emerging Industries",
    icon: "🚀",
    description:
      "Our team supports high-growth and emerging businesses with the financial infrastructure they need to scale, attract investment, and navigate complex regulatory landscapes.",
  },
  {
    label: "Financial Services",
    icon: "📊",
    description:
      "We deliver deep expertise in audit, tax, and compliance for banks, credit unions, investment advisors, and other financial institutions operating in a heavily regulated environment.",
  },
  {
    label: "Healthcare Services",
    icon: "🏥",
    description:
      "From physician practices to health systems, our healthcare specialists help organizations manage reimbursement complexity, cost pressures, and evolving compliance requirements.",
  },
  {
    label: "Human Services",
    icon: "🤝",
    description:
      "We provide accounting and consulting solutions that help human services organizations adapt to the changing economic and regulatory environment — alleviating pressure in areas like Assurance, Tax, Medicaid, and Service Delivery.",
  },
];

export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f4f5f7] px-20 py-16 max-md:px-6 max-md:py-10">
      {/* Header */}
      <div className="flex items-start gap-12 mb-10 max-md:flex-col max-md:gap-5">
        {/* Left */}
        <div className="flex-none max-w-sm">
          <p className="text-[#47a4a4] text-lg font-semibold tracking-widest uppercase mb-2">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-[#1e3557] text-3xl font-extrabold leading-tight mb-3">
            Discover How We Can
            <br />
            Work Together
          </h2>
          <div className="w-12 h-[3px] bg-[#c8a96e] rounded-full" />
        </div>

        {/* Right */}
        <div className="flex flex-1 items-center gap-8 pt-12 max-md:flex-col max-md:items-start max-md:pt-0 max-md:gap-4">
          <p className="text-[#4a5568] text-[15px] leading-relaxed flex-1">
            We provide specialized expertise in various industries. Explore the
            industries below or view all industries to see how we can assist
            your organization.
          </p>
          <a
            href="/industries"
            className="flex-shrink-0 bg-[#c8a96e] hover:bg-[#b8945a] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
          >
            VIEW ALL INDUSTRIES
          </a>
        </div>
      </div>

      {/* Panel */}
      <div className="flex rounded-xl overflow-hidden shadow-xl h-auto max-md:flex-col">
        {/* Left List */}
        <div className="bg-[#1e7db3] flex-none w-[38%] flex flex-col py-4 max-md:w-full">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.label}
              onClick={() => setActive(i)}
              className={`flex justify-between items-center text-left px-8 py-[18px] font-bold text-sm tracking-widest uppercase transition-all duration-150 border-l-4
                ${
                  active === i
                    ? "bg-black/15 text-[#c8a96e] border-[#c8a96e]"
                    : "text-white/85 border-transparent hover:bg-white/8 hover:text-white"
                }`}
            >
              {ind.label}
              <span className="text-lg opacity-70">›</span>
            </button>
          ))}
        </div>

        {/* Right Detail */}
        <div className="bg-white flex-1 flex flex-col justify-center px-14 py-12 max-md:px-6 max-md:py-8">
          <div className="text-4xl mb-4">{INDUSTRIES[active].icon}</div>
          <h3 className="text-[#1e3557] text-2xl font-extrabold mb-3">
            {INDUSTRIES[active].label}
          </h3>
          <div className="w-12 h-[3px] bg-[#c8a96e] rounded-full mb-5" />
          <p className="text-[#4a5568] text-[15px] leading-relaxed max-w-xl mb-7">
            {INDUSTRIES[active].description}
          </p>
          <a
            href={`/industries/${INDUSTRIES[active].label.toLowerCase().replace(/\s+/g, "-")}`}
            className="self-start bg-[#c8a96e] hover:bg-[#b8945a] text-white text-xs font-bold tracking-widest uppercase px-7 py-3 rounded-full transition-colors duration-200"
          >
            EXPLORE FURTHER
          </a>
        </div>
      </div>
    </section>
  );
}
