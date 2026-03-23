import { client } from "@/lib/sanity";
import ServiceCards from "./ServiceCards";
import { ServicesPage } from "@/lib/types";

const SERVICES_QUERY = `*[_type == "services-page"][0]{
    heading,
    subheading,
    sections[]{
      title,
      description,
      photo,
      includes,
      items,
      closingStatement
    }
  }`;
const options = { next: { revalidate: 30 } };
export default async function Services() {
  const servicesPageQuery = await client.fetch<ServicesPage>(
    SERVICES_QUERY,
    {},
    options,
  );
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-24">
      <h6 className="text-lg font-semibold text-[#47a4a4] uppercase mb-2">
        Our Services
      </h6>
      <h2 className="text-3xl font-bold text-[#1e3557] mb-3 mt-2">
        {servicesPageQuery.heading}
      </h2>
      <div className="w-16 h-1 bg-[#c8a96e] rounded mb-1" />

      {servicesPageQuery.subheading && (
        <div className="max-w-5xl space-y-4 mt-4">
          <p className="text-lg text-zinc-700">
            {servicesPageQuery.subheading}
          </p>
        </div>
      )}

      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {servicesPageQuery.sections?.map((section, index) => (
          <ServiceCards
            key={index}
            title={section.title}
            description={section.description}
            photo={section.photo}
            includes={section.includes}
            items={section.items}
            closingStatement={section.closingStatement}
          />
        ))}
      </div>
    </section>
  );
}
