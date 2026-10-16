import type { MetadataRoute } from "next";
import { steden } from "@/lib/content";
import { diensten } from "@/lib/diensten";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...mainNav.map((n) => n.href),
    "/werkgebied",
    "/site-overzicht",
    ...diensten.map((d) => `/diensten/${d.slug}`),
    ...steden.map((s) => `/werkgebied/${s.slug}`),
  ];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
