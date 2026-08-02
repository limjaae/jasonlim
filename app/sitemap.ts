import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projects } from "@/lib/data/projects";
import { getAllJournalPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/journal"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const journalRoutes = getAllJournalPosts().map((p) => ({
    url: `${siteConfig.url}/journal/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...projectRoutes, ...journalRoutes];
}
