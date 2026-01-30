import type { MetadataRoute } from "next"

const SITE_URL = "https://badrum-sundsvall.se"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    "/",
    "/tjanster",
    "/faq",
    "/om-oss",
    "/kontakt",
    "/integritetspolicy",
    "/tack",
  ]

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "daily" : "monthly",
    priority: path === "/" ? 1 : path === "/kontakt" ? 0.9 : 0.7,
  }))
}
