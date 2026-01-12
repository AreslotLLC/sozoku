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
    };

    const tocData = extractHeadings(item.content);

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
                    { name: item.regionName, url: `${BASE_URL}/category/${item.regionSlug}` }, // 地域ページがあればそこへ、なければカテゴリー？一旦地域一覧的なものへのリンクとするか、カテゴリーへのリンクとするか。
                    // Q3回答で「カテゴリーページは地域別記事一覧」とのことなので、カテゴリーページへのリンクが適切かも。
                    // しかしURL構造上、カテゴリーはパスに含まれていない。
                    // パンくずとしては「ホーム > 地域 > 記事」あるいは「ホーム > カテゴリー > 記事」
                    // ここではユーザーの意図（地域軸）に合わせて地域を入れるが、地域ページ（/kobe-shi）があるかどうか不明。
                    // 一旦カテゴリーページへ飛ばすのが無難か、あるいは地域ページを作るか。
                    // 今回は「/category/[slug]」が「地域別記事一覧」になるとのことなので、
                    // カテゴリーへのリンクを表示するなら `categorySlug` が必要。
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
                <div className="max-w-4xl lg:max-w-7xl ml-auto mr-4 lg:mr-8 px-4 md:px-6">
                    <div className="lg:flex lg:gap-12 lg:justify-end">
                        <div className="flex-1 lg:max-w-[760px] space-y-8 sm:space-y-16">

                            <div className="px-0">
                                <TableOfContents items={tocData} />
                            </div>

                            <div className="max-w-[760px] mx-auto md:mx-0">
                                <AffiliateCTA
                                    variant="intro"
                                    links={articleProps.affiliateLinks}
                                    ctaUrl={itemMaster?.introCtaUrl}
                                    bannerHtml={itemMaster?.introBannerHtml}
                                />
                            </div>

                            <div className="prose-wrapper max-w-[760px] mx-auto md:mx-0">
                                <MarkdownContent content={articleProps.content} />
                            </div>
                        </div>

                        <aside className="hidden lg:block w-80 shrink-0">
                            {articleProps.affiliateLinks && (
                                <SideAffiliateBanner
                                    links={articleProps.affiliateLinks}
                                    linkUrl={itemMaster?.sidebarLinkUrl}
                                    bannerHtml={itemMaster?.sidebarBannerHtml}
                                />
                            )}
                        </aside>
                    </div>
                </div>

                <div className="mt-8 sm:mt-16 border-t border-slate-100 dark:border-slate-800 pt-6 sm:pt-12">
                    <AffiliateCTA
                        variant="outro"
                        links={articleProps.affiliateLinks}
                        ctaUrl={itemMaster?.outroCtaUrl}
                        bannerHtml={itemMaster?.outroBannerHtml}
                    />

                    <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-2 mt-4 sm:mt-16 mb-6 sm:mb-24">
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
            </main>

            <FloatingCTA link={articleProps.affiliateLinks?.[0]} />
        </article>
    );
}
