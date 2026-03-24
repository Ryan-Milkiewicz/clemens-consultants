import { client } from "@/lib/sanity";
import { LeadershipPage } from "@/lib/types";
import Image from "next/image";

const LEADERSHIP_QUERY = `*[_type == "leadership"][0] {
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
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function Leadership() {
  const data = await client.fetch<LeadershipPage>(
    LEADERSHIP_QUERY,
    {},
    options,
  );

  return (
    <section className="bg-[#f4f5f7] px-20 py-16 max-md:px-6 max-md:py-10">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[#47a4a4] text-sm font-semibold tracking-widest uppercase mb-3">
          OUR TEAM
        </p>
        <h1 className="text-[#1e3557] text-4xl font-extrabold leading-tight mb-4 max-md:text-3xl">
          {data.pageTitle}
        </h1>
        <div className="w-12 h-[3px] bg-[#c8a96e] rounded-full" />
      </div>

      {/* Team Members */}
      <div className="flex flex-col gap-12">
        {data.teamMembers?.map((member, index) => (
          <div
            key={index}
            className="flex gap-10 bg-white rounded-xl shadow-sm p-8 max-md:flex-col max-md:gap-6"
          >
            {/* Photo */}
            {member.photo?.asset?.url ? (
              <div className="flex-none w-48 h-56 relative rounded-lg overflow-hidden max-md:w-full max-md:h-56">
                <Image
                  src={member.photo.asset.url}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex-none w-48 h-56 rounded-lg bg-[#e8eaed] flex items-center justify-center max-md:w-full max-md:h-56">
                <span className="text-[#4a5568] text-sm">No photo</span>
              </div>
            )}

            {/* Info */}
            <div className="flex flex-col justify-start flex-1">
              {/* Name + Role */}
              <div className="mb-4">
                <h2 className="text-[#1e3557] text-2xl font-extrabold">
                  {member.name}
                  {member.credentials && (
                    <span className="text-[#47a4a4] text-lg font-semibold ml-2">
                      {member.credentials}
                    </span>
                  )}
                </h2>
                {member.role && (
                  <p className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase mt-1">
                    {member.role}
                  </p>
                )}
                <div className="w-8 h-[3px] bg-[#c8a96e] rounded-full mt-3" />
              </div>

              {/* Bio */}
              {member.bio && (
                <p className="text-[#4a5568] text-[15px] leading-relaxed mb-5">
                  {member.bio}
                </p>
              )}

              {/* Experience Areas */}
              {member.experienceAreas && member.experienceAreas.length > 0 && (
                <div className="mb-5">
                  <p className="text-[#1e3557] text-sm font-bold uppercase tracking-widest mb-2">
                    Areas of Experience
                  </p>
                  <ul className="space-y-1">
                    {member.experienceAreas.map((area, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[#4a5568] text-[15px]"
                      >
                        <span className="mt-[6px] flex-none w-2 h-2 rounded-full bg-[#c8a96e]" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Closing Statement */}
              {member.closingStatement && (
                <p className="text-[#4a5568] text-[15px] leading-relaxed italic border-l-4 border-[#c8a96e] pl-4">
                  {member.closingStatement}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
