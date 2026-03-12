export default function Hero() {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center py-24"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-white max-w-xl leading-tight">
          Big Firm Capability. <br />
          Small Firm Personality.
        </h1>
        <p className="text-lg text-white/80 max-w-lg">
          Since 1978, we've been a trusted partner providing expert guidance to
          clients across a wide range of financial and business challenges.
        </p>
        <a
          href="/about"
          className="inline-block bg-white text-zinc-900 font-semibold px-6 py-3 rounded hover:bg-zinc-100 transition w-fit"
        >
          Explore More
        </a>
      </div>
    </section>
  );
}
