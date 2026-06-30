import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/gizlilik-politikasi", "/en/privacy-policy"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
