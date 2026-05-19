import { BlogPost } from "@/lib/types";
import DateComponent from "./Date";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={urlFor(post.coverImage)}
          alt={post.coverImage.alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-[#1e3557] mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-[#47a4a4] font-semibold hover:underline"
        >
          Read More
        </Link>
      </div>
      <div className="p-3 border-t border-gray-300 bg-gray-100 mt-auto">
        <p className="text-sm text-gray-500">
          <DateComponent dateString={post.date.toString()} />
        </p>
      </div>
    </div>
  );
}
