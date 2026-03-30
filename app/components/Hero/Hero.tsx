import { client, urlFor } from "@/lib/sanity";
import { HeroSection } from "@/lib/types";

const HERO_QUERY = `*[_type == "hero-section"][0]{
    _id,
    headlineTitle,
    subtitle,
    midlineText,
    image,
    primaryCta { label, href },
    secondaryCta { label, href }
  }`;
const options = { next: { revalidate: 30 } };
export default async function Hero() {
  const heroPageQuery = await client.fetch<HeroSection>(
    HERO_QUERY,
    {},
    options,
  );
  return (
    <section
      className="relative w-full min-h-[700px] md:h-[750px] bg-cover bg-center py-12 md:py-24"
      style={{ backgroundImage: `url(${urlFor(heroPageQuery.image)})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-6 md:gap-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-xl leading-tight">
          {heroPageQuery.headlineTitle}
        </h1>
        <p className="text-base md:text-lg text-white/80 max-w-lg">
          {heroPageQuery.subtitle}
        </p>

        <p className="text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
          {heroPageQuery.midlineText}
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {heroPageQuery.primaryCta && (
            <a
              href={heroPageQuery.primaryCta.href}
              className="inline-block bg-white text-zinc-900 font-semibold px-5 py-2.5 md:px-6 md:py-3 rounded hover:bg-zinc-100 transition"
            >
              {heroPageQuery.primaryCta.label}
            </a>
          )}
          {heroPageQuery.secondaryCta && (
            <a
              href={heroPageQuery.secondaryCta.href}
              className="inline-block bg-transparent text-white font-semibold px-5 py-2.5 md:px-6 md:py-3 rounded border border-white hover:bg-white/10 transition"
            >
              {heroPageQuery.secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
