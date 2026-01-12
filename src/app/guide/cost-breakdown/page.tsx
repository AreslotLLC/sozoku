import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.costBreakdown.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "税理士費用の相場ガイド｜相続税申告の報酬目安 | あなたの街の相続相談ナビ",
    description:
        "相続税申告を税理士に依頼する場合の費用相場を解説。遺産総額別の報酬目安、費用の内訳、費用を抑えるポイントまで詳しく紹介します。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "税理士費用の相場ガイド｜相続税申告の報酬目安",
        description: "相続税申告を税理士に依頼する場合の費用相場を解説。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.costBreakdown.publishedDate,
    },
    keywords: [
        "相続税",
        "税理士費用",
        "相続税申告",
        "税理士報酬",
        "費用相場",
    ],
};

const tocItems = [
    { id: "overview", title: "税理士費用の概要", level: 1 },
    { id: "fee-structure", title: "費用の計算方法", level: 1 },
    { id: "price-range", title: "遺産総額別の費用相場", level: 1 },
    { id: "additional-costs", title: "追加費用が発生するケース", level: 1 },
    { id: "tips", title: "費用を抑えるポイント", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function CostBreakdownPage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="税理士費用の相場ガイド｜相続税申告の報酬目安"
                description="相続税申告を税理士に依頼する場合の費用相場を解説。遺産総額別の報酬目安、費用を抑えるポイントを紹介。"
                url={FULL_URL}
                publishedTime={guidePages.costBreakdown.publishedDate}
                categoryName="相続ガイド"
            />
            <div className="min-h-screen bg-white dark:bg-slate-950">
                {/* ヒーローセクション */}
                <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-primary/10 via-white to-accent/5 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                                Guide
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                                税理士<span className="text-accent">費用の相場</span>
                                <br className="sm:hidden" />
                                ガイド
                            </h1>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                相続税申告を税理士に依頼する場合の費用相場を解説します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* パンくず */}
                <Breadcrumbs
                    items={[
                        { name: "ホーム", path: "/" },
                        { name: "税理士費用の相場", path: PAGE_PATH },
                    ]}
                />

                {/* メインコンテンツ */}
                <main className="py-10 sm:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* サイドバー（目次） */}
                            <aside className="lg:w-72 shrink-0 lg:order-2">
                                <div className="lg:sticky lg:top-24">
                                    <TableOfContentsGuide items={tocItems} />
                                </div>
                            </aside>

                            {/* 記事本文 */}
                            <article className="flex-1 lg:order-1">
                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                    {/* 概要 */}
                                    <section id="overview" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">①</span> 税理士費用の概要
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            相続税申告を税理士に依頼する場合、一般的に<strong>遺産総額の0.5%〜1.0%</strong>が報酬の目安となります。
                                            ただし、申告の複雑さや土地の評価、税理士事務所によって大きく異なります。
                                        </p>
                                        <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                                            <p className="text-slate-700 dark:text-slate-300 font-bold text-center text-lg">
                                                相続税申告の税理士報酬相場：<span className="text-accent">遺産総額の0.5%〜1.0%</span>
                                            </p>
                                        </div>
                                    </section>

                                    {/* 費用の計算方法 */}
                                    <section id="fee-structure" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">②</span> 費用の計算方法
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            税理士費用は主に以下の要素で決まります。
                                        </p>
                                        <div className="space-y-4">
                                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">基本報酬</h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">遺産総額に応じた基本料金（0.5%〜1.0%）</p>
                                            </div>
                                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">土地評価加算</h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">土地1筆あたり5万円〜10万円程度の加算</p>
                                            </div>
                                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">相続人加算</h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">相続人が増えるごとに一定額が加算されるケース</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* 遺産総額別の費用相場 */}
                                    <section id="price-range" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">③</span> 遺産総額別の費用相場
                                        </h2>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="border-b border-slate-200 dark:border-slate-700">
                                                        <th className="py-3 px-4 text-left font-bold text-slate-900 dark:text-white">遺産総額</th>
                                                        <th className="py-3 px-4 text-left font-bold text-slate-900 dark:text-white">税理士報酬目安</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {[
                                                        { amount: "5,000万円", fee: "25万円〜50万円" },
                                                        { amount: "1億円", fee: "50万円〜100万円" },
                                                        { amount: "2億円", fee: "100万円〜150万円" },
                                                        { amount: "3億円", fee: "150万円〜200万円" },
                                                        { amount: "5億円以上", fee: "200万円〜" },
                                                    ].map((row, index) => (
                                                        <tr key={index} className="border-b border-slate-100 dark:border-slate-800">
                                                            <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{row.amount}</td>
                                                            <td className="py-3 px-4 text-accent font-bold">{row.fee}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-4">
                                            ※上記は目安であり、実際の費用は事務所や申告内容によって異なります。
                                        </p>
                                    </section>

                                    {/* 追加費用 */}
                                    <section id="additional-costs" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">④</span> 追加費用が発生するケース
                                        </h2>
                                        <div className="grid gap-4">
                                            {[
                                                { title: "土地が複数ある場合", desc: "評価が複雑な土地ほど加算が大きくなります" },
                                                { title: "非上場株式がある場合", desc: "自社株の評価には専門的な計算が必要です" },
                                                { title: "申告期限が迫っている場合", desc: "特急料金が加算されることがあります" },
                                                { title: "税務調査対応", desc: "調査立会いには別途費用がかかります" },
                                            ].map((item, index) => (
                                                <div key={index} className="p-5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900">
                                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* 費用を抑えるポイント */}
                                    <section id="tips" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">⑤</span> 費用を抑えるポイント
                                        </h2>
                                        <div className="space-y-4">
                                            {[
                                                { title: "複数の税理士から見積もりを取る", desc: "相見積もりで適正価格を把握しましょう" },
                                                { title: "自分でできる準備をしておく", desc: "戸籍収集、残高証明取得などを先に進めておく" },
                                                { title: "相続専門の税理士を選ぶ", desc: "経験豊富な税理士は効率的に処理できます" },
                                                { title: "早めに依頼する", desc: "余裕を持った依頼で追加料金を回避" },
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                                    <span className="text-green-500 font-bold">✓</span>
                                                    <div>
                                                        <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* まとめ */}
                                    <section id="conclusion" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">⑥</span> まとめ
                                        </h2>
                                        <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                相続税申告の税理士費用は遺産総額の0.5%〜1.0%が目安です。
                                                複数の税理士から見積もりを取り、相続専門の税理士に依頼することで、
                                                適正な費用で質の高いサービスを受けることができます。
                                            </p>
                                            <p className="text-slate-700 dark:text-slate-300 font-bold">
                                                当サイトでは、あなたの地域で相続に強い税理士を探すことができます。
                                            </p>
                                        </div>
                                    </section>

                                    {/* CTA */}
                                    <section className="p-8 bg-gradient-to-r from-primary to-primary/80 rounded-3xl text-white text-center">
                                        <h3 className="text-2xl font-bold mb-4">無料で見積もりを依頼</h3>
                                        <p className="mb-6 opacity-90">
                                            相続に強い税理士から、あなたの状況に合った見積もりを受け取りましょう。
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors"
                                        >
                                            無料で税理士を探す
                                        </Link>
                                    </section>

                                    {/* 関連ガイド */}
                                    <RelatedGuides currentPath={PAGE_PATH} />
                                </div>
                            </article>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
