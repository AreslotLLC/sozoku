import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    getCategoryBySlug,
    getRegionalItemsByCategory,
    getAllCategorySlugs,
} from "@/lib/airtable";
import { ItemCard } from "@/components/ItemCard";
import { BreadcrumbSchema, ItemListSchema } from "@/components/seo";

interface CategoryPageProps {
    params: Promise<{ catSlug: string }>;
}

export const revalidate = 3600;
export const dynamicParams = true; // 動的ルートを許可

export async function generateStaticParams() {
    const slugs = await getAllCategorySlugs();

    // Fallback: Airtable未設定の場合は空配列を返す（ビルドエラー回避）
    if (!slugs || slugs.length === 0) {
        return [];
    }

    return slugs.map((catSlug) => ({ catSlug }));
}

export async function generateMetadata({
    params,
}: CategoryPageProps): Promise<Metadata> {
    const { catSlug } = await params;
    const category = await getCategoryBySlug(catSlug);
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

    if (!category) {
        return {
            title: "カテゴリーが見つかりません",
        };
    }

    const imageUrl = `/images/hero/${catSlug}.png`;

    // Airtableにカスタムタイトルがあればそれを使用、なければフォールバック
    const pageTitle = category.metaTitle || `${category.name}の処分方法ガイド`;
    const pageDescription = category.metaDescription ||
        category.description ||
        `${category.name}の処分方法について詳しく解説。不用品回収や買取のポイント、費用相場、注意点など。`;

    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            images: [{ url: imageUrl, width: 1024, height: 1024 }],
        },
        alternates: {
            canonical: `${BASE_URL}/category/${catSlug}`,
        },
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { catSlug } = await params;
    const [category, items] = await Promise.all([
        getCategoryBySlug(catSlug),
        getRegionalItemsByCategory(catSlug),
    ]);

    if (!category) {
        notFound();
    }

    const heroImage = `/images/hero/${catSlug}.png`;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

    return (
        <div className="min-h-screen">
            {/* 構造化データ */}
            <BreadcrumbSchema
                items={[
                    { name: "ホーム", url: BASE_URL },
                    { name: category.name, url: `${BASE_URL}/category/${catSlug}` },
                ]}
            />
            <ItemListSchema
                items={items.map((item) => ({
                    name: item.title,
                    url: `${BASE_URL}/${item.regionSlug}/${item.itemSlug}`,
                }))}
            />

            {/* ヒーローセクション */}
            <section className="relative bg-gradient-to-br from-background via-secondary/30 to-background py-6 md:py-10 overflow-hidden">
                {/* 装飾 */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* パンくず */}
                    <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-8">
                        <Link href="/" className="hover:text-primary transition-colors">
                            ホーム
                        </Link>
                        <span>/</span>
                        <span className="text-slate-900 dark:text-slate-100 font-medium">
                            {category.name}
                        </span>
                    </nav>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-left">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-sm font-bold text-primary tracking-widest uppercase py-1 border-b-2 border-primary/30">
                                    Category Guide
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.1]">
                                {category.name}<span className="text-accent">の</span><br />
                                処分方法
                            </h1>

                            {category.description && (
                                <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed mb-6">
                                    {category.description}
                                </p>
                            )}

                            <div className="flex flex-wrap gap-4">
                                <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 text-sm text-slate-600 font-medium">
                                    計 {items.length} 件のガイド
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-xl lg:max-w-none">
                            <div className="relative aspect-[21/9] lg:aspect-[16/7] rounded-3xl overflow-hidden shadow-xl shadow-primary/10 group">
                                <Link href={heroImage} target="_blank">
                                    <img
                                        src={heroImage}
                                        alt={category.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </Link>
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 記事一覧 */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {items.length > 0 ? (
                        <>
                            <div className="flex items-center justify-between mb-8">
                                <p className="text-slate-600 dark:text-slate-400">
                                    <span className="font-bold text-slate-900 dark:text-white text-lg">
                                        {items.length}
                                    </span>
                                    件の記事があります
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {items.map((item) => (
                                    <ItemCard key={item.id} item={item} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-1 bg-slate-200 dark:bg-slate-800 h-12 mx-auto mb-6" />
                            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
                                このカテゴリーにはまだ記事がありません。
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center text-primary hover:opacity-80 font-bold"
                            >
                                ← ホームに戻る
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
