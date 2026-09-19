import type { MetadataRoute } from "next";
import { pediaArticles } from "@/data/pedia";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://fatimamohammad.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/pedia`, lastModified: new Date("2026-09-19"), changeFrequency: "weekly", priority: .9 },
    ...pediaArticles.map(article => ({ url: `${base}/pedia/${article.slug}`, lastModified: new Date("2026-09-19"), changeFrequency: "monthly" as const, priority: .8 })),
  ];
}
