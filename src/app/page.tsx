import Image from "next/image";
import { getCategories, getLatestRegionalItems } from "@/lib/airtable";
import { CategoryCard } from "@/components/CategoryCard";
import { ItemCard } from "@/components/ItemCard";
import { TrustSignals, GojuonIndex, SearchBar } from "@/components/home";
import { WebSiteSchema, OrganizationSchema } from "@/components/seo";

// トップページはlayout.tsxのdefaultタイトルを使用

export const revalidate = 3600;

export default async function HomePage() {
  const [categories, latestItems] = await Promise.all([
    getCategories(),
    getLatestRegionalItems(6),
  ]);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

  return (
    <div className="min-h-screen">
      {/* 構造化データ */}
      <WebSiteSchema
        name="遺品整理ガイド.jp"
        url={BASE_URL}
        description="遺品整理・不用品処分でお困りの方へ。あらゆる品目の処分方法を詳しく解説。"
        searchUrl={`${BASE_URL}/search`}
      />
      <OrganizationSchema
        name="遺品整理ガイド.jp"
        url={BASE_URL}
        logo={`${BASE_URL}/logo.png`}
      />

      {/* ヒーローセクション - 統一されたアイボリーデザイン */}
      <section className="relative bg-background py-16 md:py-24 overflow-hidden border-b border-slate-100">
        {/* 装飾的な円 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* テキストコンテンツ */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
                あらゆるモノの
                <span className="block mt-1 sm:mt-2 text-accent whitespace-nowrap">
                  処分方法データベース
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                遺品整理・不用品処分に必要な情報を網羅。
                <br className="hidden sm:block" />
                正しい知識で、スムーズな整理を実現します。
              </p>

              {/* 検索バー */}
              <SearchBar className="mx-auto lg:mx-0" />
            </div>

            {/* イラスト */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/hero-illustration.png"
                  alt="整理された部屋のイラスト"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* カテゴリーナビゲーション */}
      <nav
        aria-label="カテゴリー一覧"
        className="py-12 md:py-20 bg-white dark:bg-slate-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
              カテゴリーから探す
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              処分したい品目のカテゴリーを選んで、詳しい処分方法をご確認ください。
            </p>
          </div>
          <ul
            role="list"
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
          >
            {categories.map((category) => (
              <li key={category.id}>
                <CategoryCard category={category} />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 50音順インデックス - 背景をより馴染ませる */}
      <nav
        aria-label="50音順インデックス"
        className="py-12 md:py-16 bg-secondary/30 border-y border-slate-100 dark:from-slate-900 dark:to-slate-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
              50音順で探す
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              品目名の頭文字から記事を検索できます
            </p>
          </div>
          <GojuonIndex />
        </div>
      </nav>

      {/* 最新記事セクション */}
      <section
        aria-labelledby="latest-articles"
        className="py-12 md:py-20 bg-white dark:bg-slate-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="latest-articles"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3"
            >
              最新の記事
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              遺品整理・処分に関する最新の情報をお届けします。
            </p>
          </div>
          <ul
            role="list"
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
          >
            {latestItems.map((item) => (
              <li key={item.id}>
                <ItemCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 信頼性セクション - 自然な背景に変更 */}
      <section
        aria-labelledby="trust-heading"
        className="py-12 md:py-20 bg-primary/5 text-slate-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="trust-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-slate-900"
            >
              なぜこの情報は正しいのか
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              当サイトの情報は、以下の基準に基づいて作成されています。
            </p>
          </div>
          <TrustSignals />
        </div>
      </section>

      {/* CTAセクション - アイボリー背景とオレンジボタン */}
      <section
        aria-labelledby="cta-heading"
        className="py-12 md:py-20 bg-background dark:from-slate-900 dark:to-slate-950 border-t border-slate-100"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3"
          >
            お困りのことはありませんか？
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto">
            遺品整理のプロに相談すれば、面倒な仕分け・搬出・処分を
            <br className="hidden sm:block" />
            すべて任せることができます。
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <li className="flex items-center gap-1">
              <span className="text-green-500">✓</span> 最短即日対応
            </li>
            <li className="flex items-center gap-1">
              <span className="text-green-500">✓</span> 無料見積もり
            </li>
            <li className="flex items-center gap-1">
              <span className="text-green-500">✓</span> 全国対応
            </li>
          </ul>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-accent text-white rounded-2xl hover:opacity-90 transition-all duration-300 shadow-xl shadow-accent/20 hover:shadow-2xl hover:scale-105"
          >
            無料でプロに相談する
          </a>
        </div>
      </section>
    </div>
  );
}
