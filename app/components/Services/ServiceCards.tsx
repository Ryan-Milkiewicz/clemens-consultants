import Image from "next/image";
import { urlFor } from "@/lib/sanity";

type ServiceCardProps = {
  title: string;
  description: string;
  photo: any;
  includes: string;
  items: string[];
  closingStatement: string;
};

export default function ServiceCards({
  title,
  description,
  photo,
  includes,
  items,
  closingStatement,
}: ServiceCardProps) {
  return (
    <div className="group max-w-sm h-full" style={{ perspective: "1200px" }}>
      <div
        className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="flex flex-col h-full shadow-[0_10px_30px_rgba(0,0,0,0.25)] bg-white rounded-b-3xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-70 overflow-hidden">
            <Image
              width={327}
              height={280}
              src={photo ? urlFor(photo) : "/tax.webp"}
              alt={title}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex-1 p-6 bg-zinc-200 rounded-b-3xl flex flex-col">
            <h3 className="text-lg text-left font-bold text-[#1e3557] mb-2">
              {title} <span className="text-[#c8a96e]">&rsaquo;</span>
            </h3>
            <p className="text-left text-zinc-600 text-md leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div
          className="absolute inset-0 flex flex-col justify-between bg-[#1e3557] rounded-b-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-zinc-300 text-sm font-semibold">
                {includes}
              </li>
              {items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-zinc-200 text-sm"
                >
                  <span className="text-[#c8a96e] mt-0.5">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#c8a96e] text-sm font-semibold mt-4">
            {closingStatement}
          </p>
        </div>
      </div>
    </div>
  );
}
