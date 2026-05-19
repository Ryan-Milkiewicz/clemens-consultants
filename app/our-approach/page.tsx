import { getOurApproachPageQuery } from "@/lib/queries";

export default async function OurApproach() {
  const data = await getOurApproachPageQuery();

  return (
    <section className="bg-[#f4f5f7] px-20 py-16 max-md:px-6 max-md:py-10">
      <div className="max-w-2xl mb-14">
        <p className="text-[#47a4a4] text-sm font-semibold tracking-widest uppercase mb-3">
          OUR APPROACH
        </p>
        <h1 className="text-[#1e3557] text-4xl font-extrabold leading-tight mb-4 max-md:text-3xl">
          {data.heading}
        </h1>
        <div className="w-12 h-[3px] bg-[#c8a96e] rounded-full mb-6" />
        {data.subheading && (
          <p className="text-[#4a5568] text-[15px] leading-relaxed">
            {data.subheading}
          </p>
        )}
      </div>

      {data.principles && data.principles.length > 0 && (
        <div className="grid grid-cols-1 gap-6">
          {data.principles.map((principle, index) => (
            <div
              key={index}
              className="flex gap-6 bg-white rounded-xl shadow-sm p-8 max-md:flex-col max-md:gap-4"
            >
              <div className="flex-none w-14 h-14 rounded-full bg-[#1e3557] flex items-center justify-center">
                <span className="text-[#c8a96e] text-lg font-extrabold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-[#1e3557] text-xl font-extrabold mb-2">
                  {principle.title}
                </h2>
                <div className="w-8 h-[3px] bg-[#c8a96e] rounded-full mb-3" />
                {principle.description && (
                  <p className="text-[#4a5568] text-[15px] leading-relaxed">
                    {principle.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
