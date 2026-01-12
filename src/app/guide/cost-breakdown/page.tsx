import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.costBreakdown.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "遺品整理の費用相場完全ガイド｜2026年最新版 | 遺品整理ガイド.jp",
    description:
        "遺品整理の費用相場を徹底解説。間取り別・パターン別の料金目安、見積もりのチェックポイント、費用を抑えるコツまで、後悔しない選択のための情報をまとめました。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "遺品整理の費用相場完全ガイド｜2026年最新版",
        description:
            "間取り別・パターン別の料金目安、見積もりのチェックポイント、費用を抑えるコツを解説。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.costBreakdown.publishedDate,
        images: [
            {
                url: `${siteConfig.baseUrl}/images/guide/遺品整理費用ガイド.png`,
                width: 1200,
                height: 675,
                alt: "遺品整理の費用相場ガイド",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [`${siteConfig.baseUrl}/images/guide/遺品整理費用ガイド.png`],
    },
    keywords: [
        "遺品整理",
        "費用",
        "相場",
        "料金",
        "見積もり",
        "業者",
        "間取り",
    ],
};

const tocItems = [
    { id: "cost-patterns", title: "パターン別費用相場", level: 1 },
    { id: "building-type", title: "建物種別による変動", level: 1 },
    { id: "hidden-factors", title: "隠れた変動要因", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function CostBreakdownGuidePage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="遺品整理の費用相場完全ガイド｜2026年最新版"
                description="遺品整理の費用相場を徹底解説。間取り別・パターン別の料金目安、見積もりのチェックポイント、費用を抑えるコツまで解説。"
                url={FULL_URL}
                publishedTime={guidePages.costBreakdown.publishedDate}
                images={[`${siteConfig.baseUrl}/images/guide/遺品整理費用ガイド.png`]}
                categoryName="遺品整理ガイド"
            />
            <div className="min-h-screen bg-white dark:bg-slate-950">
                {/* ヒーローセクション */}
                <section className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden">
                    {/* 背景画像 */}
                    <Image
                        src="/images/guide/遺品整理費用ガイド.png"
                        alt="遺品整理の費用相場ガイド"
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
                                    Cost Guide 2026
                                </span>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-6 drop-shadow-lg">
                                    遺品整理の<span className="text-accent">費用相場</span>
                                    <br className="hidden sm:block" />
                                    完全ガイド
                                </h1>

                                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow">
                                    「何にどれくらいかかるのか」を正しく把握し、
                                    <br className="hidden md:block" />
                                    心身の負担を最小限に抑えるための指針をまとめました。
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="#cost-patterns"
                                        className="w-full sm:w-auto px-8 py-4 bg-accent hover:opacity-90 text-white font-bold rounded-2xl shadow-lg shadow-accent/20 transition-all"
                                    >
                                        費用相場を見る
                                    </Link>
                                    <Link
                                        href="#hidden-factors"
                                        className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/30 transition-all"
                                    >
                                        変動要因を確認
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
                        { name: "費用相場", path: PAGE_PATH },
                    ]}
                />

                {/* メインコンテンツエリア */}
                <main className="py-10 sm:py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            {/* 目次 */}
                            <TableOfContentsGuide items={tocItems} />

                            {/* ===== セクション1: パターン別費用相場 ===== */}
                            <section id="cost-patterns" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 01
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    【パターン別】遺品整理の費用相場一覧
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    費用は主に「荷物の量（トラックの台数）」と「作業人数」によって決まります。
                                </p>

                                {/* 費用パターンテーブル */}
                                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 mb-10">
                                    <table className="w-full text-sm">
                                        <thead className="bg-slate-50 dark:bg-slate-900">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">整理のパターン</th>
                                                <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">費用の目安</th>
                                                <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">作業の内容</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                            <tr className="bg-white dark:bg-slate-950">
                                                <td className="px-4 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">① すべて業者に任せる</td>
                                                <td className="px-4 py-4 text-accent font-bold whitespace-nowrap">15万円 〜 100万円超</td>
                                                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">分別・梱包・搬出・処分・清掃まで全工程を代行</td>
                                            </tr>
                                            <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                                                <td className="px-4 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">② スポットで任せる</td>
                                                <td className="px-4 py-4 text-primary font-bold whitespace-nowrap">5万円 〜 30万円</td>
                                                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">貴重品の捜索や分別は自分で行い、大型家具の搬出・処分のみ依頼</td>
                                            </tr>
                                            <tr className="bg-white dark:bg-slate-950">
                                                <td className="px-4 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">③ 全部自分で頑張る</td>
                                                <td className="px-4 py-4 text-slate-700 dark:text-slate-300 font-bold whitespace-nowrap">3万円 〜 10万円</td>
                                                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">自治体のゴミ回収を利用。消耗品代や手数料、実費のみ</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* 間取り別ボリュームゾーン */}
                                <div className="mb-8">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                                        <span className="text-primary">📐</span> 間取り別のボリュームゾーン（業者フル依頼の場合）
                                    </h3>
                                    <div className="grid gap-3 grid-cols-2">
                                        {[
                                            { room: "1K・1DK", price: "5万 〜 12万円", bg: "bg-emerald-50 dark:bg-emerald-950/30", border: "border-emerald-200 dark:border-emerald-900", priceColor: "text-emerald-600 dark:text-emerald-400" },
                                            { room: "2LDK", price: "15万 〜 35万円", bg: "bg-blue-50 dark:bg-blue-950/30", border: "border-blue-200 dark:border-blue-900", priceColor: "text-blue-600 dark:text-blue-400" },
                                            { room: "3LDK", price: "30万 〜 50万円", bg: "bg-amber-50 dark:bg-amber-950/30", border: "border-amber-200 dark:border-amber-900", priceColor: "text-amber-600 dark:text-amber-400" },
                                            { room: "4LDK以上", price: "50万 〜 80万円以上", bg: "bg-rose-50 dark:bg-rose-950/30", border: "border-rose-200 dark:border-rose-900", priceColor: "text-rose-600 dark:text-rose-400" },
                                        ].map((item, i) => (
                                            <div key={i} className={`p-4 rounded-xl border text-center ${item.bg} ${item.border}`}>
                                                <span className="block text-sm text-slate-500 dark:text-slate-400 mb-1">{item.room}</span>
                                                <span className={`block text-base sm:text-lg font-bold whitespace-nowrap ${item.priceColor}`}>{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                                        ※一軒家丸ごとの場合、庭や物置の整理を含めると100万円を超えるケースも一般的です。
                                    </p>
                                </div>
                            </section>

                            {/* ===== セクション2: 建物種別による変動 ===== */}
                            <section id="building-type" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 02
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    建物種別・状況で費用はどう変わる？
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    「一軒家かマンションか」という違いは、作業効率に直結し、見積もり金額を左右します。
                                </p>

                                <div className="space-y-6">
                                    {/* 一軒家 */}
                                    <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-950/30 rounded-2xl border border-red-200 dark:border-red-900">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 font-bold rounded-full text-sm">🏠</span>
                                            一軒家の場合：【高くなりやすい】
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                            <strong className="text-slate-900 dark:text-white">理由:</strong> 部屋数が多く、押し入れや物置など収納スペースが広いため、荷物量が膨大になりがちです。
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            <strong className="text-accent">追加要因:</strong> 庭の残置物（植木鉢・物置）、床下収納、屋根裏部屋などの整理が加わると、作業日数が増え費用が加算されます。
                                        </p>
                                    </div>

                                    {/* マンション */}
                                    <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-200 dark:border-blue-900">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold rounded-full text-sm">🏢</span>
                                            マンション・アパートの場合：【比較的抑えやすい】
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                            <strong className="text-slate-900 dark:text-white">理由:</strong> ワンフロアで荷物の動線が確保しやすいため、一軒家よりは安価な傾向にあります。
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            <strong className="text-accent">注意点:</strong> エレベーターがない3階以上の部屋は、階段による手運び作業が発生し、<strong>「階段料金」</strong>として数万円加算されることがあります。
                                        </p>
                                    </div>

                                    {/* 築年数 */}
                                    <div className="p-4 sm:p-6 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 font-bold rounded-full text-sm">📅</span>
                                            築年数と費用の関係
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                            築年数そのもので金額は変わりませんが、<strong className="text-slate-900 dark:text-white">「居住期間」</strong>が長いほど荷物の堆積密度が高くなります。築30年以上の物件では、見えない場所に不用品が眠っていることが多く、見積もり時の想定より荷物量が増えるリスクを考慮する必要があります。
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ===== セクション3: 隠れた変動要因 ===== */}
                            <section id="hidden-factors" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 03
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    費用を左右する「隠れた変動要因」
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    見積書をチェックする際、以下のポイントがどう反映されているか確認しましょう。
                                </p>

                                <div className="space-y-4">
                                    {[
                                        {
                                            num: "1",
                                            title: "搬出経路の難易度",
                                            desc: "トラックを玄関前に停められるか、エレベーターの養生（保護）が必要か、といった条件で数万円の差が出ます。",
                                        },
                                        {
                                            num: "2",
                                            title: "特殊な遺品の処分費",
                                            desc: "金庫、ピアノ、消火器、古いタイヤなどは自治体で回収できない「処理困難物」です。これらは1点ごとに数千円〜数万円の別途費用がかかります。",
                                        },
                                        {
                                            num: "3",
                                            title: "リサイクル家電の数",
                                            desc: "冷蔵庫・洗濯機・テレビ・エアコンは家電リサイクル法に基づいた処分費が必須となります。（1台あたり3,000円〜6,000円程度）",
                                        },
                                        {
                                            num: "4",
                                            title: "2026年のトレンド「買取相殺」",
                                            desc: "AI査定の普及により、骨董品だけでなくデジタル家電や楽器などの買取がスムーズに。「作業代金 − 買取金額」にすることで、実質的な持ち出しを大幅に減らせる可能性があります。",
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4"
                                        >
                                            <div className="w-10 h-10 shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                                                {item.num}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
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
                                                あなたの「心」を一番大切にするために
                                            </h3>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                遺品整理を前にして、「全部自分でやらなければ」と気負っていませんか？
                                                故人の遺したものを整理することは、その方の人生をなぞる作業です。
                                                一つひとつの品に宿る思い出と向き合うことは、想像以上に心と体を消耗させます。
                                            </p>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                すべてを一人で抱え込み、疲れ果ててしまう前に、まずはプロの見積もりを相談してみてください。
                                            </p>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                プロに相談することは、決して「手抜き」ではありません。
                                                <strong className="text-accent">「専門的なことはプロに任せ、自分は大切な思い出の選別や、心の整理に専念する」</strong>
                                                これは、あなた自身の生活と健康を守るための、とても賢明で温かい選択です。
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
                                まずは無料見積もりで「安心」を手に入れる
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                現場を一度見てもらい、具体的な金額とスケジュールを提示してもらうだけで、
                                <br className="hidden md:block" />
                                驚くほど心が軽くなるはずです。
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
