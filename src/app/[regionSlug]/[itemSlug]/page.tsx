import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getRegionalItem, getAllRegionalItems, getItemMaster } from "@/lib/airtable";
import { ArticleProps, AffiliateLink } from "@/types";
import {
    ArticleHeroSection,
    AffiliateCTA,
    TableOfContents,
    SideAffiliateBanner,
    FloatingCTA,
} from "@/components/article";
import { MarkdownContent } from "@/components/MarkdownContent";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo";

interface RegionalPageProps {
    params: Promise<{ regionSlug: string; itemSlug: string }>;
}

// ISR設定: 1時間ごとに再生成
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
    const items = await getAllRegionalItems();
    if (!items || items.length === 0) return [];

    return items.map((item) => ({
        regionSlug: item.regionSlug,
        itemSlug: item.itemSlug,
    }));
}

export async function generateMetadata({
    params,
}: RegionalPageProps): Promise<Metadata> {
    const { regionSlug, itemSlug } = await params;
    const item = await getRegionalItem(itemSlug, regionSlug);

    if (!item) {
        return {
            title: "記事が見つかりません",
        };
    }

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

    return {
        title: item.metaTitle || item.title,
        description: item.metaDescription || item.description,
        openGraph: {
            title: item.metaTitle || item.title,
            description: item.metaDescription || item.description,
            type: "article",
            publishedTime: item.createdAt,
            modifiedTime: item.updatedAt,
            images: [
                {
                    url: `${BASE_URL}/api/og/${regionSlug}/${itemSlug}`,
                    width: 1200,
                    height: 630,
                    alt: item.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: item.metaTitle || item.title,
            description: item.metaDescription || item.description,
            images: [`${BASE_URL}/api/og/${regionSlug}/${itemSlug}`],
        },
        alternates: {
            canonical: `${BASE_URL}/${regionSlug}/${itemSlug}`,
        },
    };
}

/**
 * マークダウンから見出しを抽出して目次データを生成
 */
function extractHeadings(content: string) {
    if (!content) return [];

    const sanitizedContent = content.replace(/\\n/g, "\n");
    const headings: { id: string; text: string; level: number }[] = [];

    const lines = sanitizedContent.split("\n");
    lines.forEach((line) => {
        const match = line.match(/^(#{2,3})\s+(.+)$/);
        if (match) {
            const level = match[1].length;
            const text = match[2].trim();
            const id = text
                .toLowerCase()
                .trim()
                .replace(/[!@#$%^&*()_+={}\[\]:;"'<>,.?\/|\\`~]/g, "")
                .replace(/\s+/g, "-");
            headings.push({ id, text, level });
        }
    });

    return headings;
}

export default async function RegionalItemPage({ params }: RegionalPageProps) {
    const { regionSlug, itemSlug } = await params;
    const item = await getRegionalItem(itemSlug, regionSlug);

    if (!item) {
        notFound();
    }

    // アイテムマスターからCTA情報を取得
    const itemMaster = await getItemMaster(itemSlug);

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";
    const articleUrl = `${BASE_URL}/${regionSlug}/${itemSlug}`;

    // アフィリエイトリンクの構築
    // RegionalItemのAffiliateURLがあればそれを優先、なければItemMasterのものを使用
    const affiliateUrl = item.affiliateUrl || itemMaster?.affiliateUrl;

    const affiliateLinks: AffiliateLink[] = affiliateUrl ? [
        {
            id: `aff-${item.id}`,
            label: "無料で見積もりを依頼する",
            url: affiliateUrl,
            description: "最短30秒で完了・全国対応",
            isPrimary: true,
        },
    ] : [];

    const articleProps: ArticleProps = {
        title: item.title,
        description: item.description,
        content: item.content,
        categorySlug: itemMaster?.categorySlug || "", // Masterから取得
        categoryName: itemMaster?.categoryName || "", // Masterから取得
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        affiliateLinks: affiliateLinks,
        regionName: item.regionName,
        bannerVertical: itemMaster?.bannerVerticalHtml,
        bannerHorizontal: itemMaster?.bannerHorizontalHtml,
        bannerSquareSidebar: itemMaster?.bannerSquareSidebarHtml,
        bannerSquareBottom: itemMaster?.bannerSquareBottomHtml,
    };

    const tocData = extractHeadings(item.content);

    // バナー表示用の簡易コンポーネント
    const BannerSlot = ({ html, className, label }: { html?: string; className?: string; label?: string }) => {
        if (!html) return null;
        return (
            <div className={className}>
                {label && <div className="text-[10px] text-slate-400 mb-1 text-center font-bold tracking-widest uppercase opacity-50">{label}</div>}
                <div dangerouslySetInnerHTML={{ __html: html }} className="flex justify-center overflow-hidden rounded-lg shadow-sm bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800" />
            </div>
        );
    };

    return (
        <article className="min-h-screen bg-white dark:bg-slate-950">
            <ArticleSchema
                title={item.title}
                description={item.description}
                url={articleUrl}
                publishedTime={item.createdAt}
                modifiedTime={item.updatedAt}
                categoryName={articleProps.categoryName}
            />

            <BreadcrumbSchema
                items={[
                    { name: "ホーム", url: BASE_URL },
                    { name: articleProps.categoryName, url: `${BASE_URL}/category/${articleProps.categorySlug}` },
                    { name: item.title, url: articleUrl },
                ]}
            />

            <ArticleHeroSection
                title={articleProps.title}
                description={articleProps.description}
                categorySlug={articleProps.categorySlug}
                categoryName={articleProps.categoryName}
                createdAt={articleProps.createdAt}
                updatedAt={articleProps.updatedAt}
                regionName={articleProps.regionName}
            />

            <main className="pb-24 bg-white dark:bg-slate-950">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:gap-8 justify-center">

                        {/* 左サイド追従バナー (160 x 600目安) */}
                        <aside className="hidden xl:block w-40 shrink-0">
                            <div className="sticky top-24">
                                <BannerSlot
                                    html={articleProps.bannerVertical}
                                    className="w-[160px]"
                                    label="ADVERTISEMENT (縦長)"
                                />
                            </div>
                        </aside>

                        {/* メインコンテンツ */}
                        <div className="flex-1 max-w-[760px] space-y-8 sm:space-y-16">

                            <div className="px-0">
                                <TableOfContents items={tocData} />
                            </div>

                            <div className="space-y-4">
                                <AffiliateCTA
                                    variant="intro"
                                    links={articleProps.affiliateLinks}
                                    ctaUrl={itemMaster?.introCtaUrl}
                                    bannerHtml={itemMaster?.introBannerHtml}
                                />
                                {/* 導入部CTA下バナー (468 x 60目安) */}
                                <BannerSlot
                                    html={articleProps.bannerHorizontal}
                                    className="w-full max-w-[468px] mx-auto"
                                    label="SPONSORED (横長)"
                                />
                            </div>

                            <div className="prose-wrapper">
                                <MarkdownContent content={articleProps.content} />
                            </div>

                            <div className="space-y-8">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-1 w-full">
                                        <AffiliateCTA
                                            variant="outro"
                                            links={articleProps.affiliateLinks}
                                            ctaUrl={itemMaster?.outroCtaUrl}
                                            bannerHtml={itemMaster?.outroBannerHtml}
                                        />
                                    </div>
                                    {/* ページ最下部CTA横バナー (300 x 250目安) */}
                                    <aside className="hidden md:block w-[300px] shrink-0 sticky top-24">
                                        <BannerSlot
                                            html={articleProps.bannerSquareBottom}
                                            className="w-[300px]"
                                            label="ADVERTISEMENT (ほぼ四角)"
                                        />
                                    </aside>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between gap-2 pt-8 border-t border-slate-100 dark:border-slate-800">
                                    <Link
                                        href={`/category/${articleProps.categorySlug}`}
                                        className="inline-flex items-center text-primary hover:opacity-80 font-bold transition-colors"
                                    >
                                        ← {articleProps.categoryName}一覧に戻る
                                    </Link>
                                    <Link
                                        href="/"
                                        className="inline-flex items-center text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                                    >
                                        ホームに戻る
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 右サイドサイドバー */}
                        <aside className="hidden lg:block w-80 shrink-0 space-y-8">
                            <div className="sticky top-24 space-y-8">
                                {articleProps.affiliateLinks && (
                                    <SideAffiliateBanner
                                        links={articleProps.affiliateLinks}
                                        linkUrl={itemMaster?.sidebarLinkUrl}
                                        bannerHtml={itemMaster?.sidebarBannerHtml}
                                    />
                                )}
                                {/* 右サイド追従追加バナー (300 x 250目安) */}
                                <BannerSlot
                                    html={articleProps.bannerSquareSidebar}
                                    className="w-[300px]"
                                    label="ADVERTISEMENT (ほぼ四角)"
                                />
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <FloatingCTA link={articleProps.affiliateLinks?.[0]} />
        </article>
    );
}
