import { client } from "@/lib/sanity";
import { IndustrySection } from "@/lib/types";
import IndustriesClient from "./IndustryClient";

const INDUSTRY_QUERY = `*[_type == "industry-section"][0] {
  heading,
  subheading,
  sections[] {
    title,
    description,
    photo
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function Industries() {
  const data = await client.fetch<IndustrySection>(INDUSTRY_QUERY, {}, options);
  return <IndustriesClient data={data} />;
}
