import { MetadataRoute } from "next";
import { siteData } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteData.url}/sitemap.xml`,
  };
}
