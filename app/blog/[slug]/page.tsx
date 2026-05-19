import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import DateComponent from "../../components/Blog/Date";
import { portableTextComponents } from "../../components/Blog/PortableTextComponent";
import { getBlogPost } from "@/lib/queries";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { title, coverImage, content, date } = await getBlogPost(slug);

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={urlFor(coverImage)}
          fill
          alt={coverImage.alt}
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-[#1e3557]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="w-16 h-1 bg-[#c8a96e] rounded mb-4" />
          <p className="text-white/80 italic text-sm">
            <DateComponent dateString={date.toString()} />
          </p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <PortableText value={content} components={portableTextComponents} />

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col items-center gap-4">
          <p className="text-lg text-[#1e3557] font-semibold">
            Interested in learning more?
          </p>
          <Link
            href="/contact"
            className="bg-[#47a4a4] hover:bg-[#1e3557] transition-colors text-white font-semibold px-8 py-3 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
