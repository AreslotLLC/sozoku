import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.precautions.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "遺品整理で気を付けるポイント5選 | 遺品整理ガイド.jp",
    description:
        "遺品整理で見落としがちな注意点を解説。メンタルケア、個人情報の管理、空き家リスク、危険物の処分、賃貸の原状回復など、後悔しないためのポイントをまとめました。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "遺品整理で気を付けるポイント5選",
        description:
            "メンタルケア、個人情報の管理、空き家リスク、危険物の処分など、遺品整理の注意点を解説。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.precautions.publishedDate,
        images: [
            {
                url: `${siteConfig.baseUrl}/images/guide/遺品整理で気を付けること5選.png`,
                width: 1200,
                height: 675,
                alt: "遺品整理で気を付けること5選",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [`${siteConfig.baseUrl}/images/guide/遺品整理で気を付けること5選.png`],
    },
    keywords: [
        "遺品整理",
        "注意点",
        "メンタルケア",
        "個人情報",
        "空き家",
        "危険物",
        "原状回復",
    ],
};

const tocItems = [
    { id: "mental-care", title: "メンタルケアと休息", level: 1 },
    { id: "security", title: "セキュリティと個人情報", level: 1 },
    { id: "vacant-house", title: "空き家リスクと管理", level: 1 },
    { id: "special-items", title: "宝物と危険物", level: 1 },
    { id: "rental", title: "賃貸の原状回復", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function PrecautionsGuidePage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="遺品整理で気を付けるポイント5選"
                description="遺品整理で見落としがちな注意点を解説。メンタルケア、個人情報、空き家リスク、危険物、賃貸の原状回復など。"
                url={FULL_URL}
                publishedTime={guidePages.precautions.publishedDate}
                images={[`${siteConfig.baseUrl}/images/guide/遺品整理で気を付けること5選.png`]}
                categoryName="遺品整理ガイド"
            />
            <div className="min-h-screen bg-white dark:bg-slate-950">
                {/* ヒーローセクション */}
                <section className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden">
                    {/* 背景画像 */}
                    <Image
                        src="/images/guide/遺品整理で気を付けること5選.png"
                        alt="遺品整理で気を付けること5選"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* オーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="max-w-4xl mx-auto text-center">
                                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                                    Important Tips
                                </span>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-6 drop-shadow-lg">
                                    遺品整理で<span className="text-accent">気を付ける</span>
                                    <br className="hidden sm:block" />
                                    ポイント5選
                                </h1>

                                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow">
                                    遺品整理は単なる「片付け」ではなく、心と時間に大きな負荷がかかる作業です。
                                    <br className="hidden md:block" />
                                    最後まで無理なく進めるためのポイントをまとめました。
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="#mental-care"
                                        className="w-full sm:w-auto px-8 py-4 bg-accent hover:opacity-90 text-white font-bold rounded-2xl shadow-lg shadow-accent/20 transition-all"
                                    >
                                        ポイントを読む
                                    </Link>
                                    <Link
                                        href="#conclusion"
                                        className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/30 transition-all"
                                    >
                                        まとめを読む
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* パンくず */}
                <Breadcrumbs
                    items={[
                        { name: "ホーム", path: "/" },
                        { name: "ガイド", path: "/guide" },
                        { name: "注意点", path: PAGE_PATH },
                    ]}
                />

                {/* メインコンテンツ */}
                <main className="py-10 sm:py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            {/* 目次 */}
                            <TableOfContentsGuide items={tocItems} />

                            {/* ===== ポイント1: メンタルケア ===== */}
                            <section id="mental-care" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Point 01
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    自身の「メンタルケア」と「休息」
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    遺品整理は想像以上に精神を消耗します。自分のペースを守ることが大切です。
                                </p>

                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "「思い出に浸る時間」を許容する",
                                            desc: "物を手に取るたびに手が止まるのは自然なことです。「今日はこれだけしか進まなかった」と自分を責めず、その時間を大切にしてください。",
                                        },
                                        {
                                            title: "「一気にやろうとしない」",
                                            desc: "「今日はこの引き出し1つだけ」と作業を細分化しましょう。長時間の作業は翌日の疲労と意欲低下を招きます。",
                                        },
                                        {
                                            title: "「孤独を避ける」",
                                            desc: "一人で抱え込むと精神的に追い詰められやすくなります。親族や友人に協力してもらうか、あえて業者に「事務的な作業」として任せることも一つの手段です。",
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* ===== ポイント2: セキュリティ ===== */}
                            <section id="security" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Point 02
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    セキュリティと「個人情報」の徹底管理
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    故人の情報は悪用されるリスクがあるため、物理的な片付けと並行して対策が必要です。
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 sm:p-5 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900">
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">書類の破棄</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            住所・氏名・生年月日が載ったハガキ、公共料金の領収書、名刺などはそのまま捨てず、必ずシュレッダーにかけるか溶解処理をしましょう。
                                        </p>
                                    </div>
                                    <div className="p-4 sm:p-5 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900">
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">デジタル資産</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            故人が利用していたSNSアカウント、オンラインバンキング、サブスクリプションサービスなどのデジタル資産は、放置すると情報漏洩や不正利用のリスクがあります。パスワードの確認やサービス解約を行いましょう。
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ===== ポイント3: 空き家リスク ===== */}
                            <section id="vacant-house" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Point 03
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    「空き家」特有のリスクと管理
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    荷物が片付いた後、その家をどう管理するかが重要です。
                                </p>

                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "火災リスクの軽減",
                                            desc: "通電したままだと漏電やトラッキング現象による火災のリスクがあります。当面使わない場合はブレーカーを落としましょう。",
                                            color: "red",
                                        },
                                        {
                                            title: "配管の維持",
                                            desc: "水を長期間流さないと、配管内の水が腐ったり、臭気止めの水が蒸発して害虫や悪臭が発生します。定期的な通水（水を流す）が必要です。",
                                            color: "blue",
                                        },
                                        {
                                            title: "税負担の把握",
                                            desc: "空き家にしておくと固定資産税がかかり続けます。また、放置がひどいと「特定空家」に指定され、税金が跳ね上がるリスクもあります。",
                                            color: "amber",
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className={`p-4 sm:p-5 rounded-2xl border ${item.color === "red" ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900" : item.color === "blue" ? "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900" : "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900"} `}>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* ===== ポイント4: 宝物と危険物 ===== */}
                            <section id="special-items" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Point 04
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    隠れた「宝物」と「危険物」への対応
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    整理の終盤に見つかる特殊な品物の扱いです。
                                </p>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="p-5 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20">
                                        <h4 className="font-bold text-primary mb-2">寄付という選択肢</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            捨てるのが忍びない品（文房具、食器、衣類など）は、海外支援団体などに寄付することで、心理的な負担が軽くなることがあります。
                                        </p>
                                    </div>
                                    <div className="p-5 bg-red-50 dark:bg-red-950/30 rounded-2xl border border-red-200 dark:border-red-900">
                                        <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">危険物の処分</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            古い薬品、大量のライター、カセットボンベ、農薬などは自治体のゴミに出せないことが多いです。専門の処理業者に相談しましょう。
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ===== ポイント5: 賃貸の原状回復 ===== */}
                            <section id="rental" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Point 05
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    賃貸物件における「原状回復」の確認
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
                                    退去が必要な賃貸の場合、大家さんや管理会社との認識合わせが必須です。
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { title: "残置物の確認", desc: "エアコン、照明、後付けの棚などは、置いていって良いのか、全撤去が必要か事前に確認しましょう。" },
                                        { title: "清掃の程度", desc: "プロのハウスクリーニングが必要か、簡易的な清掃で良いかを確認することで、余計な費用の発生を防げます。" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* ===== まとめ ===== */}
                            <section id="conclusion" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="p-5 sm:p-8 bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 rounded-2xl sm:rounded-3xl border border-accent/20">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl sm:text-3xl">💡</span>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                                                最後に大切なこと：遺族の「納得感」がゴールです
                                            </h3>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                100点満点の完璧な片付けを目指す必要はありません。「自分たちが納得して、故人を送り出せた」と思えることが何よりの成功です。
                                            </p>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                自分の生活や健康を犠牲にしていると感じたら、それは<strong className="text-accent">「プロに頼るべきタイミング」</strong>です。無理をせず、周囲のサポートを積極的に受け入れてください。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 関連ガイド */}
                            <RelatedGuides currentPath={PAGE_PATH} />

                        </div>
                    </div>
                </main>

                {/* CTAセクション */}
                <section className="py-10 md:py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                一人で抱え込まないでください
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                遺品整理のプロが、心を込めてサポートいたします。
                                <br className="hidden md:block" />
                                まずは無料相談からお気軽にどうぞ。
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href={affiliateLinks.quote}
                                    className="w-full sm:w-auto px-10 py-4 bg-accent hover:opacity-90 text-white font-bold text-lg rounded-2xl shadow-lg shadow-accent/20 transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    無料で見積もりを依頼する
                                </Link>
                                <Link
                                    href={affiliateLinks.phone}
                                    className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-lg rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                                >
                                    無料で電話相談
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
