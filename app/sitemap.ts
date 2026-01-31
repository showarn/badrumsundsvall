import type { MetadataRoute } from "next"

const SITE_URL = "https://badrum-sundsvall.se"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    // Core
    { path: "/", changeFrequency: "daily" as const, priority: 1 },
    { path: "/tjanster", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/guide", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/om-oss", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/kontakt", changeFrequency: "weekly" as const, priority: 0.9 },

    // Legal / misc
    { path: "/integritetspolicy", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/tack", changeFrequency: "yearly" as const, priority: 0.2 },

    // Service pages
    { path: "/tjanster/helrenovering-badrum", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/tjanster/tatskikt-vatrum", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/tjanster/kakel-klinker", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/tjanster/vvs-badrum", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/tjanster/el-badrum", changeFrequency: "monthly" as const, priority: 0.8 },
  ]

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
