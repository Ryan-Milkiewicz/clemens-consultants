import { defineQuery } from "next-sanity";
import { BlogPost } from "./types";
import { client } from "./sanity";

export const contentOptions = { next: { revalidate: 3600 } };

export async function getTop3BlogPosts() {
  const LATEST_BLOG_POSTS_QUERY = defineQuery(
    `*[
   _type == "blogPosts"]| order(date desc){_id, title, "slug":slug.current, excerpt, date, coverImage}[0...3]`,
  );

  return await client.fetch<BlogPost[]>(
    LATEST_BLOG_POSTS_QUERY,
    {},
    contentOptions,
  );
}
