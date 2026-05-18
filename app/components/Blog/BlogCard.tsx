import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* <Image
        src="/path/to/blog-image.jpg"
        alt="Blog Post Title"
        className="w-full h-48 object-cover"
      /> */}
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#1e3557] mb-2">
          Blog Post Title
        </h3>
        <p className="text-gray-600 mb-4">
          A brief summary of the blog post goes here. It should be engaging and
          informative to entice readers to click through.
        </p>
        <a href="#" className="text-[#47a4a4] font-semibold hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
}
