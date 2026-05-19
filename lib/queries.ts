import { defineQuery } from "next-sanity";
import {
  AboutPage,
  BlogPost,
  FullPost,
  IndustrySection,
  LeadershipPage,
  OurApproachPage,
  OurFirmPage,
} from "./types";
import { client } from "./sanity";

export const contentOptions = { next: { revalidate: 30 } };

export async function getOurFirmQuery() {
  const OUR_FIRM_QUERY = defineQuery(`*[_type == "our-firm"][0] {
  heading,
  subheading,
  servicesList,
  closingStatement,
  image {
    asset-> {
      url
    }
  }
}`);

  return await client.fetch<OurFirmPage>(OUR_FIRM_QUERY, {}, contentOptions);
}

export async function getAboutPageQuery() {
  const ABOUT_QUERY = defineQuery(`*[_type == "about-page"][0]{
  heading,
  subheading,
  image {
    asset-> {
      url
    }
  }
}`);

  return await client.fetch<AboutPage>(ABOUT_QUERY, {}, contentOptions);
}

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

export async function getBlogPost(slug: string) {
  const GET_BLOG_POST_QUERY = defineQuery(`
  *[_type == "blogPosts" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    coverImage,
    content,
    date
  }
`);

  return await client.fetch<FullPost>(
    GET_BLOG_POST_QUERY,
    { slug },
    contentOptions,
  );
}

export async function getLeadershipPageQuery() {
  const LEADERSHIP_QUERY = defineQuery(`*[_type == "leadership"][0] {
  pageTitle,
  teamMembers[] {
    name,
    credentials,
    role,
    bio,
    experienceAreas,
    closingStatement,
    photo {
      asset-> {
        url
      }
    }
  }}`);

  return await client.fetch<LeadershipPage>(
    LEADERSHIP_QUERY,
    {},
    contentOptions,
  );
}

export async function getOurApproachPageQuery() {
  const OUR_APPROACH_QUERY = defineQuery(`*[_type == "our-approach"][0] {
  heading,
  subheading,
  principles[] {
    title,
    description
  }
}`);

  return await client.fetch<OurApproachPage>(
    OUR_APPROACH_QUERY,
    {},
    contentOptions,
  );
}

export async function getIndustryQuery() {
  const INDUSTRY_QUERY = defineQuery(`*[_type == "industry-section"][0] {
  heading,
  subheading,
  sections[] {
    title,
    description,
    photo
  }
}`);

  return await client.fetch<IndustrySection>(
    INDUSTRY_QUERY,
    {},
    contentOptions,
  );
}
