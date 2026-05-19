import { getAllBlogPosts } from "../../lib/queries";
import BlogCard from "../components/Blog/BlogCard";

export default async function Page() {
  const posts = await getAllBlogPosts();
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#1e3557] py-16 px-4 text-center">
        <h6 className="text-[#c8a96e] text-sm font-bold tracking-widest uppercase mb-3">
          Our Blog
        </h6>
        <h1 className="text-4xl font-bold text-white mb-4">
          Latest Insights & Updates
        </h1>
        <div className="w-16 h-1 bg-[#c8a96e] rounded mx-auto mb-6" />
        <p className="text-white/75 text-lg max-w-2xl mx-auto">
          Stay informed with our latest articles, industry insights, and company
          news.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
