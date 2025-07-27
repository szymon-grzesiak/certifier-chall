import { MetadataRoute } from "next";
import { siteData } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteData.url;

  const staticRoutes = [
    {
      url: baseUrl,
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
  ];

  return [...staticRoutes];
}