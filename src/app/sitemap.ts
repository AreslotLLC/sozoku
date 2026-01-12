import { MetadataRoute } from "next";
import { getAllRegionalItems, getCategories } from "@/lib/airtable";
import { Category, RegionalItem } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [items, categories] = await Promise.all([
        getAllRegionalItems(), // 全件取得（制限なし）
        getCategories(),
    ]);

    // 静的ページ
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
        },
    ];

    // ガイドページ
    const guidePages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/guide/first-time`,
            lastModified: new Date("2026-01-12"),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/guide/choosing-company`,
            lastModified: new Date("2026-01-12"),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/guide/precautions`,
            lastModified: new Date("2026-01-12"),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/guide/digital-legacy`,
            lastModified: new Date("2026-01-12"),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/guide/cost-breakdown`,
            lastModified: new Date("2026-01-12"),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
    ];

    // 法的ページ
    const legalPagesData: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date("2026-01-09"),
            changeFrequency: "monthly" as const,
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: new Date("2026-01-09"),
            changeFrequency: "monthly" as const,
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/disclaimer`,
            lastModified: new Date("2026-01-09"),
            changeFrequency: "monthly" as const,
            priority: 0.3,
        },
    ];

    // カテゴリーページ
    const categoryPages: MetadataRoute.Sitemap = categories.map(
        (category: Category) => ({
            url: `${BASE_URL}/category/${category.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        })
    );

    // 記事ページ
    const articlePages: MetadataRoute.Sitemap = items.map((item: RegionalItem) => ({
        url: `${BASE_URL}/${item.regionSlug}/${item.itemSlug}`,
        lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...guidePages, ...legalPagesData, ...categoryPages, ...articlePages];
}
