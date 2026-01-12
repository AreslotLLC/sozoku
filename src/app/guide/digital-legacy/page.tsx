import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.digitalLegacy.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "デジタル資産の相続ガイド｜暗号資産・電子マネー | あなたの街の相続相談ナビ",
    description:
        "デジタル資産の相続について解説。暗号資産、電子マネー、オンライン口座など、デジタル遺産の相続手続きと評価方法を詳しく紹介します。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "デジタル資産の相続ガイド｜暗号資産・電子マネー",
        description: "デジタル資産の相続について解説。暗号資産、電子マネー、オンライン口座など。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.digitalLegacy.publishedDate,
    },
    keywords: [
        "デジタル資産",
        "相続",
        "暗号資産",
        "仮想通貨",
        "電子マネー",
        "オンライン口座",
    ],
};

const tocItems = [
    { id: "what-is-digital", title: "デジタル資産とは", level: 1 },
    { id: "types", title: "相続対象となるデジタル資産", level: 1 },
    { id: "discovery", title: "デジタル資産の発見方法", level: 1 },
    { id: "valuation", title: "デジタル資産の評価", level: 1 },
    { id: "procedures", title: "相続手続きの方法", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function DigitalLegacyPage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="デジタル資産の相続ガイド｜暗号資産・電子マネー"
                description="デジタル資産の相続について解説。暗号資産、電子マネー、オンライン口座など、デジタル遺産の相続手続きと評価方法を紹介。"
                url={FULL_URL}
                publishedTime={guidePages.digitalLegacy.publishedDate}
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
                                <span className="text-accent">デジタル資産</span>の
                                <br className="sm:hidden" />
                                相続
                            </h1>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                暗号資産、電子マネー、オンライン口座などのデジタル遺産の相続について解説します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* パンくず */}
                <Breadcrumbs
                    items={[
                        { name: "ホーム", path: "/" },
                        { name: "デジタル資産の相続", path: PAGE_PATH },
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
                                    {/* デジタル資産とは */}
                                    <section id="what-is-digital" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">①</span> デジタル資産とは
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            デジタル資産とは、電子的なデータとして存在する財産のことです。
                                            近年、暗号資産（仮想通貨）や電子マネーの普及により、相続における重要性が高まっています。
                                        </p>
                                        <div className="p-6 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl">
                                            <p className="text-slate-700 dark:text-slate-300 font-bold text-center">
                                                デジタル資産も他の財産と同様に<span className="text-accent">相続税の課税対象</span>です
                                            </p>
                                        </div>
                                    </section>

                                    {/* 相続対象となるデジタル資産 */}
                                    <section id="types" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">②</span> 相続対象となるデジタル資産
                                        </h2>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {[
                                                { title: "暗号資産（仮想通貨）", items: ["ビットコイン", "イーサリアム", "その他アルトコイン"] },
                                                { title: "電子マネー・ポイント", items: ["電子マネー残高", "各種ポイント", "※相続可否はサービスにより異なります"] },
                                                { title: "オンライン口座", items: ["ネット銀行", "ネット証券", "FX口座"] },
                                                { title: "その他のデジタル資産", items: ["NFT", "ドメイン", "オンラインゲームのアイテム"] },
                                            ].map((category, index) => (
                                                <div key={index} className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                    <h3 className="font-bold text-slate-900 dark:text-white mb-3">{category.title}</h3>
                                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                                        {category.items.map((item, i) => (
                                                            <li key={i}>• {item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* デジタル資産の発見方法 */}
                                    <section id="discovery" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">③</span> デジタル資産の発見方法
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            デジタル資産は目に見えないため、発見が難しいケースがあります。以下の方法で調査しましょう。
                                        </p>
                                        <div className="space-y-4">
                                            {[
                                                { title: "メールの確認", desc: "取引所やサービスからのメールを探す" },
                                                { title: "スマートフォンのアプリ", desc: "取引アプリやウォレットアプリがないか確認" },
                                                { title: "パソコンのブラウザ", desc: "ブックマークや履歴から手がかりを探す" },
                                                { title: "銀行口座の履歴", desc: "取引所への振込履歴がないか確認" },
                                                { title: "確定申告書", desc: "過去の申告で暗号資産の記載がないか確認" },
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                                                        {index + 1}
                                                    </span>
                                                    <div>
                                                        <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* デジタル資産の評価 */}
                                    <section id="valuation" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">④</span> デジタル資産の評価
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            デジタル資産の相続税評価は、<strong>相続開始日の時価</strong>で行います。
                                        </p>
                                        <div className="space-y-4">
                                            <div className="p-5 bg-accent/5 rounded-xl border border-accent/20">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">暗号資産の評価方法</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    相続開始日（死亡日）の取引所での終値、または活発な取引がない場合は最終取引価格を用います。
                                                    複数の取引所で価格が異なる場合は、主に取引していた取引所の価格を基準とします。
                                                </p>
                                            </div>
                                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">電子マネー・ポイントの評価</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    残高をそのまま円換算で評価します。ただし、一身専属的な（本人にのみ帰属する）ポイントは相続対象外となる場合があります。
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* 相続手続きの方法 */}
                                    <section id="procedures" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">⑤</span> 相続手続きの方法
                                        </h2>
                                        <div className="space-y-4">
                                            <div className="p-5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">⚠ 秘密鍵・パスワードの問題</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    暗号資産の秘密鍵やパスワードが不明な場合、資産にアクセスできなくなる可能性があります。
                                                    ウォレットの種類によっては、秘密鍵がなければ永久に引き出せないケースも。
                                                </p>
                                            </div>
                                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">取引所に連絡</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    国内取引所の場合、戸籍謄本や遺産分割協議書を提出することで、相続手続きを行うことができます。
                                                    各取引所の相続担当窓口に連絡しましょう。
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* まとめ */}
                                    <section id="conclusion" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">⑥</span> まとめ
                                        </h2>
                                        <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                デジタル資産の相続は、従来の財産とは異なる特有の課題があります。
                                                特に暗号資産は発見や評価が難しく、専門知識が必要です。
                                                デジタル資産がある場合は、相続に詳しい税理士に相談することをおすすめします。
                                            </p>
                                            <p className="text-slate-700 dark:text-slate-300 font-bold">
                                                当サイトでは、あなたの地域で相続に強い税理士を探すことができます。
                                            </p>
                                        </div>
                                    </section>

                                    {/* CTA */}
                                    <section className="p-8 bg-gradient-to-r from-primary to-primary/80 rounded-3xl text-white text-center">
                                        <h3 className="text-2xl font-bold mb-4">デジタル資産の相続相談</h3>
                                        <p className="mb-6 opacity-90">
                                            暗号資産や電子マネーの相続は、専門家に相談しましょう。
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
