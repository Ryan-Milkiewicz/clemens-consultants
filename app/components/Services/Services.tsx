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
            items={section.items}
            closingStatement={section.closingStatement}
          />
        ))}
      </div>
    </section>

    // <section className="flex flex-col items-center justify-center text-center px-4 py-24">
    //   <h6 className="text-lg font-semibold text-[#47a4a4] uppercase mb-2">
    //     Our Services
    //   </h6>
    //   <h2 className="text-3xl font-bold text-[#1e3557] mb-3 mt-2">
    //     Explore How We Can Work Together
    //   </h2>
    //   <div className="w-16 h-1 bg-[#c8a96e] rounded mb-1" />

    //   <div className="max-w-5xl space-y-8">
    //     <p className="text-lg text-zinc-700">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
    //       nulla imperdiet, pharetra augue eget, efficitur orci. Ut eu orci
    //       tempus, interdum ante et, eleifend mi. Duis urna velit, gravida sit
    //       amet ligula et, ullamcorper sollicitudin dui. Sed ultrices iaculis
    //       neque eu egestas. In laoreet elementum finibus. Integer at tincidunt
    //       nisl. Duis quam tortor, malesuada sed sodales at, lobortis convallis
    //       neque. Pellentesque a nulla rhoncus, faucibus ipsum non, ultrices
    //       massa.
    //     </p>
    //     <p className="text-lg text-zinc-700">
    //       Donec luctus euismod dolor, eget ullamcorper lacus fringilla eu.
    //       Vivamus ac feugiat velit. Duis nec nibh non urna gravida consequat sit
    //       amet at sem. Mauris vehicula facilisis arcu quis congue. Morbi
    //       sollicitudin, nibh a efficitur porta, felis dui pretium nibh, ut
    //       eleifend libero dui sed diam.
    //     </p>
    //   </div>
    //   <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
    //     <ServiceCards />
    //     <ServiceCards />
    //     <ServiceCards />
    //     <ServiceCards />
    //   </div>
    // </section>
  );
}
