import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  photo: any;
  items: string[];
  closingStatement: string;
};

export default function ServiceCards({
  title,
  description,
  photo,
  items,
  closingStatement,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-lg border border-zinc-200 text-left">
      <h3 className="text-xl font-bold text-[#1e3557]">{title}</h3>
      <p className="text-zinc-600 text-sm">{description}</p>
      {items?.length > 0 && (
        <ul className="list-disc list-inside text-sm text-zinc-600 space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {closingStatement && (
        <p className="text-sm text-zinc-500 italic mt-2">{closingStatement}</p>
      )}
    </div>
    // <div className="shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden max-w-sm bg-white rounded-b-3xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1">
    //   {/* Image */}
    //   <div className="relative h-70 overflow-hidden">
    //     <Image
    //       width={327}
    //       height={280}
    //       src="/tax.webp"
    //       alt="Advisory & Consulting"
    //       className="w-full h-full object-cover"
    //       priority
    //     />
    //   </div>

    //   {/* Content */}
    //   <div className="p-6 bg-zinc-200">
    //     <h3 className="text-lg text-left font-bold text-[#1e3557] mb-2">
    //       Advisory & Consulting <span className="text-[#c8a96e]">&rsaquo;</span>
    //     </h3>
    //     <p className="text-left text-zinc-600 text-md leading-relaxed">
    //       Our team of experts in Advisory & Consulting is here to offer unique
    //       solutions that create and safeguard value in your business.
    //     </p>
    //   </div>
    // </div>
  );
}
