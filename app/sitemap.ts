import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://clemensconsultants.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/our-firm`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-approach`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leadership`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
