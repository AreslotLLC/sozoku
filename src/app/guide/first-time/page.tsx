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
    title: "初めての遺品整理ガイド｜法的手続きと片付けの実践 | 遺品整理ガイド.jp",
    description:
        "遺品整理が初めての方へ。相続登記の義務化、相続放棄の期限など法的手続きから、業者選び、デジタル遺品、タンス預金の探し方まで、必要な情報を専門家監修で解説します。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "初めての遺品整理ガイド｜法的手続きと片付けの実践",
        description:
            "相続登記の義務化、相続放棄の期限など法的手続きから、業者選び、デジタル遺品対策まで解説。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.firstTime.publishedDate,
        images: [
            {
                url: `${siteConfig.baseUrl}/images/guide/初めての遺品整理.png`,
                width: 1200,
                height: 675,
                alt: "初めての遺品整理ガイド",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [`${siteConfig.baseUrl}/images/guide/初めての遺品整理.png`],
    },
    keywords: [
        "遺品整理",
        "初めて",
        "相続登記",
        "相続放棄",
        "遺品整理業者",
        "デジタル遺品",
        "タンス預金",
    ],
};

const tocItems = [
    { id: "legal-procedures", title: "法的手続き編", level: 1 },
    { id: "practical-cleanup", title: "具体的な片付け編", level: 1 },
    { id: "first-actions", title: "まず最初に行うべきアクション", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function FirstTimeGuidePage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="初めての遺品整理ガイド｜法的手続きと片付けの実践"
                description="遺品整理が初めての方へ。相続登記の義務化、相続放棄の期限など法的手続きから、業者選び、デジタル遺品、タンス預金の探し方まで解説。"
                url={FULL_URL}
                publishedTime={guidePages.firstTime.publishedDate}
                images={[`${siteConfig.baseUrl}/images/guide/初めての遺品整理.png`]}
                categoryName="遺品整理ガイド"
            />
            <HowToSchema
                name="初めての遺品整理ガイド"
                description="遺品整理を円滑に進めるための法的手続きと物理的な片付けの手順"
                steps={[
                    { name: "死亡届の提出", text: "市区町村に死亡届を提出します（7日以内）" },
                    { name: "相続人の確定", text: "戸籍を取得し、相続人全員を確定します" },
                    { name: "相続放棄の検討", text: "必要な場合は3ヶ月以内に相続放棄を申述します" },
                    { name: "相続登記", text: "不動産がある場合は3年以内に相続登記を行います" },
                    { name: "遺品の仕分け", text: "貴重品・必要書類・形見分け・処分品に分類します" },
                    { name: "業者選び", text: "必要に応じて遺品整理業者に依頼します" },
                ]}
                totalTime="P30D"
            />
            <div className="min-h-screen bg-white dark:bg-slate-950">
                {/* ヒーローセクション */}
                <section className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden">
                    {/* 背景画像 */}
                    <Image
                        src="/images/guide/初めての遺品整理.png"
                        alt="初めての遺品整理"
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
                                    Beginner&apos;s Guide
                                </span>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-6 drop-shadow-lg">
                                    初めての<span className="text-accent">遺品整理</span>
                                    <br className="hidden sm:block" />
                                    法的手続きと片付けの実践
                                </h1>

                                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow">
                                    遺品整理を円滑に進めるためには、「法律面での権利・義務の整理」と「物理的な物の整理」を並行して行う必要があります。
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="#legal-procedures"
                                        className="w-full sm:w-auto px-8 py-4 bg-accent hover:opacity-90 text-white font-bold rounded-2xl shadow-lg shadow-accent/20 transition-all"
                                    >
                                        法的手続き編を読む
                                    </Link>
                                    <Link
                                        href="#practical-cleanup"
                                        className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/30 transition-all"
                                    >
                                        片付け編を読む
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
                        { name: "初めての遺品整理", path: PAGE_PATH },
                    ]}
                />

                {/* メインコンテンツエリア */}
                <main className="py-10 sm:py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            {/* 目次 */}
                            <TableOfContentsGuide items={tocItems} />

                            {/* ===== セクション1: 法的手続き編 ===== */}
                            <section id="legal-procedures" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 01
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    【法的手続き編】専門家の活用と法律のルール
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                                    相続や不動産の名義変更など、法律が絡む手続きは「誰に何を頼むか」を整理することが重要です。
                                </p>

                                {/* ① 4つの士業の役割 */}
                                <div className="mb-10 sm:mb-12">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                                        <span className="text-primary">①</span> 4つの士業の役割と使い分け
                                    </h3>
                                    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                                        <table className="w-full text-sm">
                                            <thead className="bg-slate-50 dark:bg-slate-900">
                                                <tr>
                                                    <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">専門家</th>
                                                    <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">主な役割（独占業務）</th>
                                                    <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">相談すべきケース</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                                <tr className="bg-white dark:bg-slate-950">
                                                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white">弁護士</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">紛争解決・交渉</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">親族間で遺産分割に<strong className="text-accent">揉めている</strong>場合。</td>
                                                </tr>
                                                <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                                                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white">税理士</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">相続税の申告</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">遺産が基礎控除を超え、<strong className="text-accent">税金が発生</strong>する場合。</td>
                                                </tr>
                                                <tr className="bg-white dark:bg-slate-950">
                                                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white">司法書士</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">不動産登記</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400"><strong className="text-accent">家や土地の名義変更</strong>をしたい場合。</td>
                                                </tr>
                                                <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                                                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white">行政書士</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">書類作成</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">遺産分割協議書や<strong className="text-accent">車の名義変更</strong>などの代行。</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* ② 期限と義務 */}
                                <div className="mb-8">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                                        <span className="text-primary">②</span> 必ず知っておくべき「期限」と「義務」
                                    </h3>
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-2xl">
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                                                相続登記の義務化（2024年4月〜）
                                            </h4>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                不動産の名義変更は義務です。相続を知った日から<strong className="text-accent font-bold">3年以内</strong>に行わないと、過料（罰金）の対象になる可能性があります。
                                            </p>
                                        </div>
                                        <div className="p-4 sm:p-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-2xl">
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                                                相続放棄の「3ヶ月ルール」
                                            </h4>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                                故人に借金がある場合、相続放棄ができるのは「亡くなったことを知った日から<strong className="text-accent font-bold">3ヶ月以内</strong>」です。
                                            </p>
                                            <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-medium">
                                                ※遺品を勝手に処分・売却すると「相続を認めた」とみなされ、放棄できなくなる（単純承認）リスクがあるため注意してください。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ===== セクション2: 具体的な片付け編 ===== */}
                            <section id="practical-cleanup" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 02
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    【具体的な片付け編】進め方と陥りやすい落とし穴
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                                    物の整理は「時間・予算・体力」のバランスを見て、3つのパターンから選びます。
                                </p>

                                {/* ① 3つの進め方比較 */}
                                <div className="mb-10 sm:mb-12">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                                        <span className="text-primary">①</span> 3つの進め方比較
                                    </h3>
                                    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                                        <table className="w-full text-sm">
                                            <thead className="bg-slate-50 dark:bg-slate-900">
                                                <tr>
                                                    <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">方法</th>
                                                    <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">特徴</th>
                                                    <th className="px-4 py-3 text-left font-bold text-primary">メリット</th>
                                                    <th className="px-4 py-3 text-left font-bold text-accent">デメリット</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                                <tr className="bg-white dark:bg-slate-950">
                                                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">自分でやる (DIY)</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">費用は処分費のみ</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">じっくり偲ぶことができる</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">終わりの見えない疲労</td>
                                                </tr>
                                                <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                                                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">業者に丸投げ</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">短期間（1〜2日）で完了</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">精神的・体力的負担が最小</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">費用が高額（数万〜数十万）</td>
                                                </tr>
                                                <tr className="bg-white dark:bg-slate-950">
                                                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">業者にスポット依頼</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">重い物や処分困難物のみ外注</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">納得感と効率を両立できる</td>
                                                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">事前の仕分けに時間がかかる</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* ② 注意すべき特殊な遺品 */}
                                <div className="mb-10 sm:mb-12">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                                        <span className="text-primary">②</span> 注意すべき特殊な遺品
                                    </h3>
                                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                                        <div className="p-4 sm:p-6 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20">
                                            <h4 className="font-bold text-primary mb-1.5 sm:mb-2 text-base sm:text-lg">デジタル遺品</h4>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                スマホの解約、SNSの削除、サブスクの停止など。パスワードが不明な場合は早めに専門業者へ。
                                            </p>
                                        </div>
                                        <div className="p-4 sm:p-6 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/20">
                                            <h4 className="font-bold text-accent mb-1.5 sm:mb-2 text-base sm:text-lg">「タンス預金」の捜索</h4>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                本の間、着物の裏地、仏壇の奥など。気づかずに捨ててしまう「廃棄損」を防ぎましょう。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* ③ 遺品整理で直面する「5つの盲点」 */}
                                <div className="mb-8">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                                        <span className="text-primary">③</span> 遺品整理で直面する「5つの盲点」
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            {
                                                title: "デジタル遺品",
                                                desc: "スマホのロック解除、サブスク（月額サービス）の解約、ネット銀行の確認が必要です。",
                                            },
                                            {
                                                title: "隠れた資産（タンス預金）",
                                                desc: "封筒に入った現金が、衣類のポケット、本の間、冷蔵庫の奥などから見つかることがあります。",
                                            },
                                            {
                                                title: "処分困難物と供養",
                                                desc: "消火器や金庫などは自治体で捨てられないことが多いです。仏壇や人形は「お焚き上げ」を検討します。",
                                            },
                                            {
                                                title: "親族間の感情対立",
                                                desc: "「勝手に捨てた」というトラブルを防ぐため、写真は共有して合意を取りながら進めましょう。",
                                            },
                                            {
                                                title: "近隣への配慮",
                                                desc: "搬出時の騒音、エレベーターの占有、放置空き家の害虫・悪臭対策が必須です。",
                                            },
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className="p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4"
                                            >
                                                <div className="w-10 h-10 shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}</div>
                                </div>
                            </section>

                            {/* ===== セクション3: 業者選び編 ===== */}
                            <section id="choosing-company" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 03
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    【業者選び編】後悔しないための3つのチェック
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        { title: "遺品整理士の在籍", desc: "専門知識と倫理観を持つ「遺品整理士」が在籍しているか確認しましょう。" },
                                        { title: "廃棄物処理の適正さ", desc: "一般廃棄物収集運搬業許可の保有、または許可業者との提携が明確か確認します。" },
                                        { title: "損害賠償保険の加入", desc: "搬出時に壁や床を傷つけた際のトラブルに備え、保険加入の有無を確認しましょう。" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                                            <div className="w-10 h-10 shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* ===== セクション4: まず最初に行うべきアクション ===== */}
                            <section id="first-actions" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-accent px-2.5 py-1 rounded shadow-sm">
                                        Action
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                    まず最初に行うべきアクション
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex gap-4 p-5 sm:p-6 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/20">
                                        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-accent text-white font-bold rounded-full text-sm">1</span>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">重要書類の捜索</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">遺言書、通帳、保険証券、不動産権利証を確保する。</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-5 sm:p-6 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/20">
                                        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-accent text-white font-bold rounded-full text-sm">2</span>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">期限の確認</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">賃貸なら退去日、不動産があるなら3年の登記期限を意識する。</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-5 sm:p-6 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/20">
                                        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-accent text-white font-bold rounded-full text-sm">3</span>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">30分だけ手を動かす</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">どこか一箇所（引き出し一つなど）を片付けてみて、自力で可能か業者を呼ぶべきかを判断する。</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ===== まとめ ===== */}
                            <section id="conclusion" className="mb-10 sm:mb-16 scroll-mt-24">
                                <div className="p-5 sm:p-8 bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 rounded-2xl sm:rounded-3xl border border-accent/20">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl sm:text-3xl">💡</span>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                                                まとめ：一歩ずつ、納得できる形へ
                                            </h3>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                遺品整理に「正解」はありません。しかし、法的な義務を怠らず、物理的な整理を無理のないペースで進めることで、必ず心に踏ん切りがつく時が来ます。
                                            </p>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                一人で抱え込まず、必要であれば専門家や業者の手を借りることは、故人との最後の大切な時間を守ることにも繋がります。まずは無料相談などを通じて、最初の一歩を踏み出してみましょう。
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
                                相続・片付けにお悩みの方へ
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                遺品整理のプロが、お客様の状況に合わせた最適なプランをご提案いたします。
                                相談・見積もりは無料です。まずはお気軽にお問い合わせください。
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href={affiliateLinks.quote}
                                    className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
                                >
                                    <span>無料相談・見積もりを依頼する</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
