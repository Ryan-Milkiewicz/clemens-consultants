import { client } from "@/lib/sanity";
import { AboutPage } from "@/lib/types";
import Image from "next/image";

const ABOUT_QUERY = `*[_type == "about-page"][0]{
  heading,
  subheading,
  image {
    asset-> {
      url
    }
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function About() {
  const data = await client.fetch<AboutPage>(ABOUT_QUERY, {}, options);

  return (
    <section className="min-h-screen bg-[#f4f5f7]">
      {/* Split Layout */}
      <div className="flex min-h-[600px] max-md:flex-col">
        {/* Left — Image */}
        {data.image?.asset?.url && (
          <div className="flex-none w-1/2 max-md:w-full max-md:h-64 relative">
            <Image
              src={data.image.asset.url}
              alt="About Clemens Consultants"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#1e3557]/30" />
          </div>
        )}

        {/* Right — Text */}
        <div className="flex-1 flex flex-col justify-center px-16 py-20 max-md:px-6 max-md:py-10 bg-white">
          <p className="text-[#47a4a4] text-sm font-semibold tracking-widest uppercase mb-3">
            ABOUT US
          </p>
          <h1 className="text-[#1e3557] text-4xl font-extrabold leading-tight mb-4 max-md:text-3xl">
            {data.heading}
          </h1>
          <div className="w-12 h-[3px] bg-[#c8a96e] rounded-full mb-6" />
          {data.subheading && (
            <p className="text-[#4a5568] text-[15px] leading-relaxed max-w-lg">
              {data.subheading}
            </p>
          )}
          <a
            href="/contact"
            className="mt-8 self-start bg-[#c8a96e] hover:bg-[#b8945a] text-white text-xs font-bold tracking-widest uppercase px-7 py-3 rounded-full transition-colors duration-200"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}
