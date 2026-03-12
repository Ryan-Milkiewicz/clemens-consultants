import ServiceCards from "./ServiceCards";

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-24">
      <h6 className="text-lg font-semibold text-zinc-500 uppercase mb-2">
        Our Services
      </h6>
      <h2 className="text-3xl font-bold text-zinc-900 mb-3 mt-2">
        Explore How We Can Work Together
      </h2>
      <div className="w-16 h-1 bg-[#c8a96e] rounded mb-1" />

      <div className="max-w-5xl space-y-8">
        <p className="text-lg text-zinc-700">
          At The Bonadio Group, we are led by proactive problem solvers who
          bring a unique passion and approach to our work—as a top-ranked
          national accounting and advisory firm, we are committed to actively
          listening to our clients and collaborating with them to develop
          tailored solutions for their financial and business needs.
        </p>
        <p className="text-lg text-zinc-700">
          Since 1978, clients have relied on us as trusted strategic and
          community-focused advisors who deeply understand their businesses and
          priorities. Our client’s success is the cornerstone of everything we
          do.
        </p>
      </div>
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <ServiceCards />
        <ServiceCards />
        <ServiceCards />
        <ServiceCards />
      </div>
    </section>
  );
}
