import IndustriesClient from "./IndustryClient";
import { getIndustryQuery } from "@/lib/queries";

export default async function Industries() {
  const data = await getIndustryQuery();
  return <IndustriesClient data={data} />;
}
