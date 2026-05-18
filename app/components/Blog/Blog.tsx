import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-16">
      <h6 className="text-lg font-semibold text-[#47a4a4] uppercase mb-2">
        Our Blog
      </h6>
      <h2 className="text-3xl font-bold text-[#1e3557] mb-3 mt-2">
        Latest Insights and Updates
      </h2>
      <div className="w-16 h-1 bg-[#c8a96e] rounded mb-1" />
      <p className="text-lg text-zinc-700 max-w-3xl mt-4">
        Stay informed with our latest articles, industry insights, and company
        news. Explore our blog for valuable information and updates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
