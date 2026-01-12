import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.choosingCompany.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "税理士選びのポイント｜相続専門税理士の見つけ方 | あなたの街の相続相談ナビ",
    description:
        "相続に強い税理士の選び方を解説。相続専門かどうか、実績、料金体系など、良い税理士を見分けるポイントを詳しく紹介します。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "税理士選びのポイント｜相続専門税理士の見つけ方",
        description: "相続に強い税理士の選び方を解説。良い税理士を見分けるポイントを紹介。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.choosingCompany.publishedDate,
    },
    keywords: [
        "税理士選び",
        "相続税理士",
        "税理士の選び方",
        "相続専門",
        "税理士比較",
    ],
};

const tocItems = [
    { id: "importance", title: "税理士選びが重要な理由", level: 1 },
    { id: "check-points", title: "チェックポイント5選", level: 1 },
    { id: "questions", title: "初回相談で聞くべき質問", level: 1 },
    { id: "red-flags", title: "注意すべき税理士の特徴", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function ChoosingCompanyPage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="税理士選びのポイント｜相続専門税理士の見つけ方"
                description="相続に強い税理士の選び方を解説。相続専門かどうか、実績、料金体系など、良い税理士を見分けるポイントを紹介。"
                url={FULL_URL}
                publishedTime={guidePages.choosingCompany.publishedDate}
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
                                税理士<span className="text-accent">選びの</span>
                                <br className="sm:hidden" />
                                ポイント
                            </h1>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                相続に強い税理士の選び方を詳しく解説します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* ガイド画像 */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-10 relative z-20">
                    <div className="max-w-4xl mx-auto">
                        <Image
                            src="/images/guide/choosing-company.png"
                            alt="税理士選びのポイントのイメージ"
                            width={1200}
                            height={675}
                            className="rounded-3xl shadow-xl w-full border border-white dark:border-slate-800"
                            priority
                        />
                    </div>
                </div>

                {/* パンくず */}
                <Breadcrumbs
                    items={[
                        { name: "ホーム", path: "/" },
                        { name: "税理士選びのポイント", path: PAGE_PATH },
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
                                    {/* 税理士選びが重要な理由 */}
                                    <section id="importance" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">①</span> 税理士選びが重要な理由
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            相続税申告は複雑で、税理士によって<strong>納税額が大きく変わる</strong>ことがあります。
                                            特に土地の評価方法や、各種特例の適用判断は経験と専門知識が必要です。
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="p-5 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-900">
                                                <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">経験不足の税理士</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">特例の見落としで多額の納税になることも</p>
                                            </div>
                                            <div className="p-5 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                                <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">相続専門の税理士</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">適切な節税対策で納税額を最小化</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* チェックポイント */}
                                    <section id="check-points" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">②</span> チェックポイント5選
                                        </h2>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "相続税申告の実績件数",
                                                    desc: "年間50件以上の実績がある事務所が理想的です。",
                                                },
                                                {
                                                    title: "書面添付制度の利用",
                                                    desc: "書面添付を行う税理士は、品質への自信の表れです。",
                                                },
                                                {
                                                    title: "土地評価の経験",
                                                    desc: "土地の減額評価（地積規模の大きな宅地等）の経験があるか確認しましょう。",
                                                },
                                                {
                                                    title: "料金体系の明確さ",
                                                    desc: "見積もりを詳細に出してくれる事務所は信頼できます。",
                                                },
                                                {
                                                    title: "税務調査への対応",
                                                    desc: "万が一の税務調査時にも対応してくれるか確認しましょう。",
                                                },
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent text-white font-bold text-sm">
                                                        {index + 1}
                                                    </span>
                                                    <div>
                                                        <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* 初回相談で聞くべき質問 */}
                                    <section id="questions" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">③</span> 初回相談で聞くべき質問
                                        </h2>
                                        <div className="p-6 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl">
                                            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                                <li>□ 年間の相続税申告件数はどのくらいですか？</li>
                                                <li>□ 書面添付制度を利用していますか？</li>
                                                <li>□ 担当者は誰になりますか？（資格保有者かどうか）</li>
                                                <li>□ 土地評価の際、現地調査は行いますか？</li>
                                                <li>□ 見積もりの内訳を教えてください</li>
                                                <li>□ 二次相続まで含めた対策を提案してくれますか？</li>
                                                <li>□ 税務調査になった場合の対応は？</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* 注意すべき税理士の特徴 */}
                                    <section id="red-flags" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">④</span> 注意すべき税理士の特徴
                                        </h2>
                                        <div className="space-y-4">
                                            {[
                                                { title: "相続税申告の経験が少ない", desc: "メインが法人税・所得税で、相続は年に数件程度" },
                                                { title: "料金が極端に安い", desc: "安すぎる場合は、土地評価を簡略化している可能性あり" },
                                                { title: "顧問先への紹介のみ", desc: "自社のサービスだけを勧め、比較検討を促さない" },
                                                { title: "質問への回答が曖昧", desc: "専門外のため、明確な回答ができない" },
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900">
                                                    <span className="text-amber-500 font-bold">⚠</span>
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
                                            <span className="text-primary">⑤</span> まとめ
                                        </h2>
                                        <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                相続税申告は税理士によって結果が大きく変わります。
                                                相続専門の実績、料金体系の明確さ、対応の丁寧さを基準に、
                                                複数の税理士から見積もりを取って比較検討しましょう。
                                            </p>
                                            <p className="text-slate-700 dark:text-slate-300 font-bold">
                                                当サイトでは、あなたの地域で相続に強い税理士を探すことができます。
                                            </p>
                                        </div>
                                    </section>

                                    {/* CTA */}
                                    <section className="p-8 bg-gradient-to-r from-primary to-primary/80 rounded-3xl text-white text-center">
                                        <h3 className="text-2xl font-bold mb-4">相続専門の税理士を探す</h3>
                                        <p className="mb-6 opacity-90">
                                            あなたの地域で相続に強い税理士を見つけましょう。
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
