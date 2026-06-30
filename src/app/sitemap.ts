import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const ROUTES = [
  "",
  "/hakkimizda",
  "/urun-gruplari",
  "/global-marka-kaynaklari",
  "/hizmet-verdigimiz-pazarlar",
  "/kalite-yaklasimi",
  "/iletisim",
  "/en",
  "/en/about",
  "/en/product-groups",
  "/en/global-brand-sources",
  "/en/markets",
  "/en/quality-approach",
  "/en/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" || route === "/en" ? 1 : 0.7,
  }));
}
