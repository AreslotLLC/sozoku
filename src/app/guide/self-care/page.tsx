import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.selfCare.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "遺品整理を頑張っているあなたへ | 遺品整理ガイド.jp",
    description:
        "遺品整理で疲れているあなたへ。心と体を守りながら進めるためのガイド。「進まない」自分を責めないで。プロに頼ることも愛情の形です。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "遺品整理を頑張っているあなたへ",
        description:
            "心と体を守りながら遺品整理を進めるためのガイド。無理せず、自分を労ってください。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.selfCare.publishedDate,
        images: [
            {
                url: `${siteConfig.baseUrl}/images/guide/遺品整理を頑張っているあなたへ.png`,
                width: 1200,
                height: 675,
                alt: "遺品整理を頑張っているあなたへ",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [`${siteConfig.baseUrl}/images/guide/遺品整理を頑張っているあなたへ.png`],
    },
    keywords: [
        "遺品整理",
        "メンタルケア",
        "疲れ",
        "辛い",
        "休息",
        "自己ケア",
    ],
};

const tocItems = [
    { id: "dont-blame-yourself", title: "自分を責めないで", level: 1 },
    { id: "physical-health", title: "心と体のメンテ", level: 1 },
    { id: "rely-on-others", title: "誰かに頼る勇気", level: 1 },
    { id: "message-from-dead", title: "故人の願い", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function SelfCareGuidePage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="遺品整理を頑張っているあなたへ"
                description="遺品整理で疲れているあなたへ。心と体を守りながら進めるためのガイド。"
                url={FULL_URL}
                publishedTime={guidePages.selfCare.publishedDate}
                images={[`${siteConfig.baseUrl}/images/guide/遺品整理を頑張っているあなたへ.png`]}
                categoryName="遺品整理ガイド"
            />
            <div className="min-h-screen bg-white dark:bg-slate-950">
                {/* ヒーローセクション */}
                <section className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden">
                    {/* 背景画像 */}
                    <Image
                        src="/images/guide/遺品整理を頑張っているあなたへ.png"
                        alt="遺品整理を頑張っているあなたへ"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* オーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="max-w-3xl mx-auto text-center">
                                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                                    For You
                                </span>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.3] tracking-tight mb-8 drop-shadow-lg">
                                    遺品整理を頑張っている
                                    <br />
                                    <span className="text-accent">あなたへ</span>
                                </h1>

                                <p className="text-base sm:text-lg text-white/90 leading-loose max-w-2xl mx-auto drop-shadow">
                                    遺品整理は、単なる「物の片付け」ではありません。
                                    <br className="hidden md:block" />
                                    故人の生きた証を一つひとつ確認し、自分の心の中に整理していく、
                                    <br className="hidden md:block" />
                                    非常にエネルギーを必要とする<strong>「心の儀式」</strong>です。
                                </p>

                                <p className="mt-6 text-white/70 leading-relaxed drop-shadow">
                                    今、あなたが感じている疲れや迷いは、<br className="sm:hidden" />故人を大切に思っているからこそ生じる特別な感情です。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* パンくず */}
                <Breadcrumbs
                    items={[
                        { name: "ホーム", path: "/" },
                        { name: "ガイド", path: "/guide" },
                        { name: "あなたへ", path: PAGE_PATH },
                    ]}
                />

                {/* メインコンテンツ */}
                <main className="py-10 sm:py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            {/* 目次 */}
                            <TableOfContentsGuide items={tocItems} />

                            {/* ===== セクション1: 進まない自分を責めない ===== */}
                            <section id="dont-blame-yourself" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-accent px-2.5 py-1 rounded shadow-sm">
                                        Message 01
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    「進まない」自分を責めないでください
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-loose mb-8">
                                    遺品を整理していると、写真一枚、手帳一冊で何時間も手が止まってしまうことがあります。それは、あなたが故人との思い出を丁寧に紐解いている証拠です。
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 sm:p-6 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/20">
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">「効率」を求めない</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            遺品整理には、仕事や家事のような効率は必要ありません。
                                        </p>
                                    </div>
                                    <div className="p-4 sm:p-6 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/20">
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">手が止まったら、それは休憩のサイン</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            思い出に浸る時間は、あなたにとって必要なプロセスです。「今日は思い出に浸る日だった」と、その時間を肯定してあげてください。
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ===== セクション2: 3つのルール ===== */}
                            <section id="physical-health" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-accent px-2.5 py-1 rounded shadow-sm">
                                        Message 02
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    心身の健康を守る「3つのルール」
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-loose mb-8">
                                    無理をして体や心を壊してしまっては、故人も悲しまれます。以下のルールを自分に許してあげてください。
                                </p>

                                <div className="space-y-6">
                                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-accent text-white font-bold rounded-full text-sm">①</span>
                                            「30分だけ」の小分け作業
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            一気に家全体を片付けようとすると、その物量の多さに圧倒されてしまいます。「今日はこの引き出し一段だけ」「今日はこの棚の半分だけ」と、小さな目標を積み重ねましょう。
                                        </p>
                                    </div>

                                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-accent text-white font-bold rounded-full text-sm">②</span>
                                            「判断しない箱」を作る
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            「捨てる」「残す」の判断は想像以上に脳を疲れさせます。迷ったものはすべて「保留箱」に入れ、判断を未来の自分に預けましょう。今、無理に答えを出さなくても良いのです。
                                        </p>
                                    </div>

                                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-accent text-white font-bold rounded-full text-sm">③</span>
                                            物理的な距離を置く
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            作業が終わったら、その場所から離れ、自分の日常（自宅や好きなカフェなど）に戻りましょう。故人の空間に長く居すぎると、心が過去に引っ張られすぎてしまいます。
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ===== セクション3: プロに頼る ===== */}
                            <section id="rely-on-others" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-accent px-2.5 py-1 rounded shadow-sm">
                                        Message 03
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    「プロに頼る」ことは、愛情の一つの形です
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-loose mb-6 sm:mb-8">
                                    すべてを自分の手でやり遂げることが、必ずしも正解ではありません。
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 sm:p-6 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20">
                                        <h4 className="font-bold text-primary mb-2">丸投げは「手抜き」ではありません</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            体力的・精神的に限界を感じた時、業者に依頼することは、自分の生活を守るための「賢明な決断」です。
                                        </p>
                                    </div>
                                    <div className="p-4 sm:p-6 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20">
                                        <h4 className="font-bold text-primary mb-2">専門家は「盾」になります</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            弁護士や司法書士などの専門家は、複雑な手続きからあなたを守る存在です。事務的なことをプロに任せることで、あなたは「心のお別れ」に集中する時間を作ることができます。
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ===== セクション4: 故人の願い ===== */}
                            <section id="message-from-dead" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-accent px-2.5 py-1 rounded shadow-sm">
                                        Message 04
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    故人が一番に願っていること
                                </h2>

                                <div className="p-5 sm:p-8 bg-slate-900 dark:bg-slate-900/50 rounded-2xl sm:rounded-3xl border border-slate-800 text-white">
                                    <p className="text-sm sm:text-base leading-loose italic opacity-90 text-center">
                                        「私の遺した物のために、あなたが苦しまないでほしい。
                                        <br />
                                        それよりも、あなたがこれから歩んでいく時間を、
                                        <br />
                                        穏やかな気持ちで過ごしてほしい。」
                                    </p>
                                </div>
                            </section>

                            {/* ===== セクション5: 最後に ===== */}
                            <section className="mb-16">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-accent px-2.5 py-1 rounded shadow-sm">
                                        Message 05
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                    最後に：今のあなたへ
                                </h2>

                                <div className="p-8 md:p-10 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 dark:from-accent/20 dark:via-primary/10 dark:to-accent/20 rounded-3xl border border-accent/20 text-center">
                                    <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
                                        あなたは、もう十分に頑張っています。
                                    </p>
                                    <p className="text-slate-600 dark:text-slate-400 leading-loose mb-6">
                                        全てを完璧にする必要はありません。<br />
                                        途中で止まってもいい、誰かに甘えてもいい。
                                    </p>
                                    <p className="text-slate-600 dark:text-slate-400 leading-loose mb-6">
                                        遺品整理の終わりは必ず来ますが、<br />
                                        <strong className="text-accent">あなたの心と体は代わりがききません。</strong>
                                    </p>
                                    <p className="text-lg font-medium text-slate-900 dark:text-white">
                                        今日はもう作業を切り上げて、<br />自分をたくさん労ってあげてください。
                                    </p>
                                </div>
                            </section>

                            {/* ===== まとめ ===== */}
                            <section id="conclusion" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="p-5 sm:p-8 bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 rounded-2xl sm:rounded-3xl border border-accent/20">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl sm:text-3xl">💡</span>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                                                まとめ：あなたは一人ではありません
                                            </h3>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                遺品整理は、故人との最後のお別れの儀式です。悲しみが癒えない中で作業を進めるのは、誰にとっても並大抵のことではありません。
                                            </p>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                もし一歩も前に進めないと感じたら、それはあなたの心が「助けが必要だ」とサインを出しているのかもしれません。そのサインを無視せず、プロの手を借りるという選択肢も、自分自身のケアの一つとして考えてみてください。
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
                                一人で悩まず、まずはご相談ください
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                私たちは、遺品整理の技術だけでなく、
                                <br className="hidden md:block" />
                                あなたの心に寄り添うサポートを大切にしています。
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href={affiliateLinks.quote}
                                    className="w-full sm:w-auto px-10 py-4 bg-accent hover:opacity-90 text-white font-bold text-lg rounded-2xl shadow-lg shadow-accent/20 transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    無料で相談する
                                </Link>
                                <Link
                                    href={affiliateLinks.phone}
                                    className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-lg rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                                >
                                    電話で話を聞いてもらう
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
