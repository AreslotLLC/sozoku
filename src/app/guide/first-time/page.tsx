import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema, HowToSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.firstTime.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "初めての相続ガイド｜手続きの流れと基礎知識 | あなたの街の相続相談ナビ",
    description:
        "相続が初めての方へ。相続の開始から遺産分割協議、相続税申告まで、必要な手続きの流れと期限を専門家監修で解説します。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "初めての相続ガイド｜手続きの流れと基礎知識",
        description:
            "相続の開始から遺産分割協議、相続税申告まで、必要な手続きの流れを解説。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.firstTime.publishedDate,
        images: [
            {
                url: `${siteConfig.baseUrl}/images/guide/first-time.png`,
                width: 1200,
                height: 675,
                alt: "初めての相続ガイド",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [`${siteConfig.baseUrl}/images/guide/first-time.png`],
    },
    keywords: [
        "相続",
        "初めて",
        "相続手続き",
        "遺産分割",
        "相続税申告",
        "税理士",
    ],
};

const tocItems = [
    { id: "what-is-inheritance", title: "相続とは", level: 1 },
    { id: "timeline", title: "相続手続きのスケジュール", level: 1 },
    { id: "required-documents", title: "必要書類", level: 1 },
    { id: "tax-accountant", title: "税理士に相談すべきケース", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function FirstTimeGuidePage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="初めての相続ガイド｜手続きの流れと基礎知識"
                description="相続が初めての方へ。相続の開始から遺産分割協議、相続税申告まで、必要な手続きの流れと期限を解説。"
                url={FULL_URL}
                publishedTime={guidePages.firstTime.publishedDate}
                images={[`${siteConfig.baseUrl}/images/guide/first-time.png`]}
                categoryName="相続ガイド"
            />
            <HowToSchema
                name="初めての相続ガイド"
                description="相続を円滑に進めるための手続きの流れ"
                steps={[
                    { name: "死亡届の提出", text: "市区町村に死亡届を提出します（7日以内）" },
                    { name: "相続人の確定", text: "戸籍を取得し、相続人全員を確定します" },
                    { name: "相続放棄の検討", text: "必要な場合は3ヶ月以内に相続放棄を申述します" },
                    { name: "遺産分割協議", text: "相続人全員で遺産の分け方を決めます" },
                    { name: "相続税申告", text: "基礎控除を超える場合は10ヶ月以内に申告します" },
                ]}
                totalTime="P10M"
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
                                初めての<span className="text-accent">相続</span>
                                <br className="sm:hidden" />
                                ガイド
                            </h1>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                相続の開始から遺産分割協議、相続税申告まで、必要な手続きの流れと期限を分かりやすく解説します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* ガイド画像 */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-10 relative z-20">
                    <div className="max-w-4xl mx-auto">
                        <Image
                            src="/images/guide/first-time.png"
                            alt="初めての相続ガイドのイメージ"
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
                        { name: "初めての相続", path: PAGE_PATH },
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
                                    {/* 相続とは */}
                                    <section id="what-is-inheritance" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">①</span> 相続とは
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            相続とは、亡くなった方（被相続人）の財産や権利・義務を、法律で定められた相続人が引き継ぐことです。
                                            相続は被相続人の死亡によって自動的に開始されます。
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-3">相続財産になるもの</h3>
                                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                                    <li>• 不動産（土地・建物）</li>
                                                    <li>• 預貯金・有価証券</li>
                                                    <li>• 自動車・貴金属等</li>
                                                    <li>• 借金・債務（マイナスの財産）</li>
                                                </ul>
                                            </div>
                                            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="font-bold text-slate-900 dark:text-white mb-3">法定相続人</h3>
                                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                                    <li>• 配偶者（常に相続人）</li>
                                                    <li>• 第1順位：子・孫</li>
                                                    <li>• 第2順位：父母・祖父母</li>
                                                    <li>• 第3順位：兄弟姉妹</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* 相続手続きのスケジュール */}
                                    <section id="timeline" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">②</span> 相続手続きのスケジュール
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            相続には期限がある手続きがあります。特に相続放棄（3ヶ月）と相続税申告（10ヶ月）は厳守が必要です。
                                        </p>
                                        <div className="space-y-4">
                                            {[
                                                { period: "7日以内", action: "死亡届の提出", desc: "市区町村役場に届出" },
                                                { period: "14日以内", action: "年金受給停止", desc: "国民年金・厚生年金の届出" },
                                                { period: "3ヶ月以内", action: "相続放棄・限定承認", desc: "家庭裁判所に申述" },
                                                { period: "4ヶ月以内", action: "準確定申告", desc: "被相続人の所得税申告" },
                                                { period: "10ヶ月以内", action: "相続税申告・納付", desc: "基礎控除超の場合は必須" },
                                                { period: "3年以内", action: "相続登記", desc: "不動産の名義変更（義務化）" },
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                    <div className="w-24 shrink-0 text-center">
                                                        <span className="text-accent font-bold text-sm">{item.period}</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-slate-900 dark:text-white">{item.action}</span>
                                                        <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">{item.desc}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* 必要書類 */}
                                    <section id="required-documents" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">③</span> 必要書類
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            相続手続きには多くの書類が必要です。特に戸籍関係は取得に時間がかかるため、早めに準備しましょう。
                                        </p>
                                        <div className="p-6 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl">
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-4">主な必要書類</h3>
                                            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
                                                <li>✓ 被相続人の出生から死亡までの戸籍謄本</li>
                                                <li>✓ 相続人全員の戸籍謄本</li>
                                                <li>✓ 相続人全員の印鑑証明書</li>
                                                <li>✓ 被相続人の住民票除票</li>
                                                <li>✓ 不動産の登記簿謄本</li>
                                                <li>✓ 預金通帳・残高証明書</li>
                                                <li>✓ 固定資産評価証明書</li>
                                                <li>✓ 遺産分割協議書</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* 税理士に相談すべきケース */}
                                    <section id="tax-accountant" className="mb-16">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                            <span className="text-primary">④</span> 税理士に相談すべきケース
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            以下のケースでは、相続に強い税理士に相談することをおすすめします。
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {[
                                                { title: "相続財産が基礎控除を超える", desc: "3,000万円＋600万円×法定相続人の数" },
                                                { title: "不動産が含まれる", desc: "土地・建物の評価は専門知識が必要" },
                                                { title: "相続人が複数いる", desc: "遺産分割協議のアドバイスが有効" },
                                                { title: "事業を承継する", desc: "事業承継税制の適用検討" },
                                            ].map((item, index) => (
                                                <div key={index} className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
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
                                                相続は複雑な手続きが多く、期限もあるため、早めの準備と専門家への相談が重要です。
                                                特に相続税申告が必要な場合は、相続に強い税理士に依頼することで、適切な節税対策と円滑な手続きが可能になります。
                                            </p>
                                            <p className="text-slate-700 dark:text-slate-300 font-bold">
                                                当サイトでは、あなたの地域で相続に強い税理士を探すことができます。
                                            </p>
                                        </div>
                                    </section>

                                    {/* CTA */}
                                    <section className="p-8 bg-gradient-to-r from-primary to-primary/80 rounded-3xl text-white text-center">
                                        <h3 className="text-2xl font-bold mb-4">相続のお悩みを専門家に相談</h3>
                                        <p className="mb-6 opacity-90">
                                            相続に強い税理士が、あなたの状況に合わせた最適なアドバイスをいたします。
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
            </div >
        </>
    );
}
