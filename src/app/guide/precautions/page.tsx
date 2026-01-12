import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.precautions.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "相続手続きの注意点｜期限・書類・トラブル回避 | あなたの街の相続相談ナビ",
    description:
        "相続で失敗しないための注意点を解説。期限の厳守、必要書類の準備、相続人間のトラブル回避など、知っておくべきポイントを紹介します。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "相続手続きの注意点｜期限・書類・トラブル回避",
        description: "相続で失敗しないための注意点を解説。期限、書類、トラブル回避のポイント。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.precautions.publishedDate,
    },
    keywords: [
        "相続",
        "注意点",
        "相続トラブル",
        "相続期限",
        "遺産分割",
    ],
};

const tocItems = [
    { id: "deadlines", title: "期限に注意が必要な手続き", level: 1 },
    { id: "documents", title: "書類に関する注意点", level: 1 },
    { id: "troubles", title: "相続トラブルの回避", level: 1 },
    { id: "tax-pitfalls", title: "税金に関する落とし穴", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function PrecautionsPage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="相続手続きの注意点｜期限・書類・トラブル回避"
                description="相続で失敗しないための注意点を解説。期限の厳守、必要書類の準備、トラブル回避のポイント。"
                url={FULL_URL}
                publishedTime={guidePages.precautions.publishedDate}
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
                                相続手続きの
                                <br className="sm:hidden" />
                                <span className="text-accent">注意点</span>
                            </h1>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                相続で失敗しないための重要なポイントを解説します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* パンくず */}
                <Breadcrumbs
                    items={[
                        { name: "ホーム", path: "/" },
                        { name: "相続手続きの注意点", path: PAGE_PATH },
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
                                    {/* 期限に注意が必要な手続き */}
                                    <section id="deadlines" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">①</span> 期限に注意が必要な手続き
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            相続には<strong>法定の期限</strong>がある手続きがあります。期限を過ぎるとペナルティが発生したり、権利を失う可能性があります。
                                        </p>
                                        <div className="space-y-4">
                                            {[
                                                { period: "3ヶ月", title: "相続放棄・限定承認", warning: "期限を過ぎると原則として放棄できません", level: "danger" },
                                                { period: "4ヶ月", title: "準確定申告", warning: "被相続人の最後の所得税申告", level: "warning" },
                                                { period: "10ヶ月", title: "相続税申告・納付", warning: "無申告加算税・延滞税のリスク", level: "danger" },
                                                { period: "3年", title: "相続登記", warning: "2024年から義務化、過料10万円以下", level: "warning" },
                                            ].map((item, index) => (
                                                <div key={index} className={`p-5 rounded-xl border ${item.level === 'danger' ? 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900' : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900'}`}>
                                                    <div className="flex items-center gap-4">
                                                        <span className={`font-bold text-lg ${item.level === 'danger' ? 'text-red-500' : 'text-amber-500'}`}>{item.period}</span>
                                                        <div>
                                                            <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400">{item.warning}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* 書類に関する注意点 */}
                                    <section id="documents" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">②</span> 書類に関する注意点
                                        </h2>
                                        <div className="space-y-4">
                                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">戸籍は出生から死亡まで必要</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">被相続人の出生から死亡までの連続した戸籍が必要。転籍がある場合は複数の役所から取得が必要で、1〜2ヶ月かかることも。</p>
                                            </div>
                                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">印鑑証明書の有効期限</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">金融機関や法務局によって有効期限の規定が異なります。一般的には発行後3ヶ月〜6ヶ月以内。</p>
                                            </div>
                                            <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">遺産分割協議書は実印で</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">相続人全員が実印で押印し、印鑑証明書を添付する必要があります。</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* 相続トラブルの回避 */}
                                    <section id="troubles" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">③</span> 相続トラブルの回避
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            相続は親族間のトラブルになりやすい問題です。以下の点に注意しましょう。
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {[
                                                { title: "遺産の全体像を共有", desc: "隠し財産の疑いを持たれないよう、早い段階で情報を共有する" },
                                                { title: "公平な分割を心がける", desc: "法定相続分を基準に、納得のいく協議を行う" },
                                                { title: "文書で残す", desc: "口約束ではなく、遺産分割協議書を作成する" },
                                                { title: "専門家を活用", desc: "感情的な対立を避けるため、税理士や弁護士を介する" },
                                            ].map((item, index) => (
                                                <div key={index} className="p-5 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-900">
                                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* 税金に関する落とし穴 */}
                                    <section id="tax-pitfalls" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">④</span> 税金に関する落とし穴
                                        </h2>
                                        <div className="space-y-4">
                                            {[
                                                { title: "名義預金は相続財産", desc: "名義が違っても実質的に被相続人のものなら課税対象です" },
                                                { title: "生命保険も課税対象", desc: "500万円×法定相続人数まで非課税、超えた分は課税" },
                                                { title: "二次相続も考慮", desc: "配偶者への集中は、二次相続で高額な税負担になることも" },
                                                { title: "小規模宅地等の特例", desc: "条件を満たせば評価額を最大80%減額できる重要な特例" },
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                                                    <span className="text-primary font-bold">💡</span>
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
                                                相続は期限に厳しい手続きが多く、書類の準備やトラブル回避にも注意が必要です。
                                                不安な点があれば、早めに相続に強い税理士に相談することをおすすめします。
                                            </p>
                                            <p className="text-slate-700 dark:text-slate-300 font-bold">
                                                当サイトでは、あなたの地域で相続に強い税理士を探すことができます。
                                            </p>
                                        </div>
                                    </section>

                                    {/* CTA */}
                                    <section className="p-8 bg-gradient-to-r from-primary to-primary/80 rounded-3xl text-white text-center">
                                        <h3 className="text-2xl font-bold mb-4">相続手続きのご相談</h3>
                                        <p className="mb-6 opacity-90">
                                            不安な手続きは、相続の専門家に相談しましょう。
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
