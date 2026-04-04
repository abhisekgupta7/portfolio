import type { MetadataRoute } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { getSiteUrl } from "@/lib/seo";

const APP_DIR = path.join(process.cwd(), "src", "app");

const isRouteGroup = (segment: string) =>
  segment.startsWith("(") && segment.endsWith(")");

const isDynamicSegment = (segment: string) =>
  segment.includes("[") || segment.includes("]");

async function collectStaticRoutes(
  dir: string,
  segments: string[] = [],
): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const routes: string[] = [];

  const hasPage = entries.some(
    (entry) => entry.isFile() && entry.name === "page.tsx",
  );

  if (hasPage) {
    const routePath = segments.length === 0 ? "/" : `/${segments.join("/")}`;
    routes.push(routePath);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("_")) continue;
    if (entry.name === "api") continue;
    if (isDynamicSegment(entry.name)) continue;

    const nextSegments = isRouteGroup(entry.name)
      ? segments
      : [...segments, entry.name];

    routes.push(
      ...(await collectStaticRoutes(path.join(dir, entry.name), nextSegments)),
    );
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes = Array.from(new Set(await collectStaticRoutes(APP_DIR)));

  return staticRoutes
    .sort((a, b) => a.localeCompare(b))
    .map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency: route === "/" ? "daily" : "weekly",
      priority: route === "/" ? 1 : 0.7,
    }));
}
