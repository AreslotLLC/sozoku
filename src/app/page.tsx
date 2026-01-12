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
        name="あなたの街の相続相談ナビ"
        url={BASE_URL}
        description="相続税申告・遺産分割でお困りの方へ。あなたの地域で相続に強い税理士を見つけましょう。"
        searchUrl={`${BASE_URL}/search`}
      />
      <OrganizationSchema
        name="あなたの街の相続相談ナビ"
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
                地域で探す
                <span className="block mt-1 sm:mt-2 text-accent whitespace-nowrap">
                  相続に強い税理士
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                相続税申告・遺産分割でお困りの方へ。
                <br className="hidden sm:block" />
                あなたの地域で信頼できる税理士を見つけましょう。
              </p>

              {/* 検索バー */}
              <SearchBar className="mx-auto lg:mx-0" />
            </div>

            {/* イラスト */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/hero-illustration.png"
                  alt="相続相談のイメージ"
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
              専門分野から探す
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              相続の種類や課題に応じて、専門の税理士を探すことができます。
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
              地域から探す
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              あなたの街の税理士を探すことができます
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
              相続・税理士に関する最新の情報をお届けします。
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
            相続でお困りのことはありませんか？
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto">
            相続税申告・遺産分割・不動産相続など、
            <br className="hidden sm:block" />
            相続の専門家である税理士に相談しましょう。
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <li className="flex items-center gap-1">
              <span className="text-green-500">✓</span> 初回相談無料
            </li>
            <li className="flex items-center gap-1">
              <span className="text-green-500">✓</span> 地域密着
            </li>
            <li className="flex items-center gap-1">
              <span className="text-green-500">✓</span> 相続専門
            </li>
          </ul>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-accent text-white rounded-2xl hover:opacity-90 transition-all duration-300 shadow-xl shadow-accent/20 hover:shadow-2xl hover:scale-105"
          >
            無料で税理士を探す
          </a>
        </div>
      </section>
    </div>
  );
}

