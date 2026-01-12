import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema, HowToSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.choosingCompany.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "遺品整理業者をうまく使うコツと質問チェックリスト | 遺品整理ガイド.jp",
    description:
        "遺品整理業者の選び方を徹底解説。相見積もりの取り方、見積もり時に聞くべき10の質問、危ない業者のサインなど、失敗しない業者選びのポイントを紹介します。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "遺品整理業者をうまく使うコツと質問チェックリスト",
        description:
            "相見積もりの取り方、見積もり時に聞くべき10の質問、危ない業者のサインなど、失敗しない業者選びのポイントを紹介。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.choosingCompany.publishedDate,
        images: [
            {
                url: `${siteConfig.baseUrl}/images/guide/遺品整理業者をうまく使うコツ.png`,
                width: 1200,
                height: 675,
                alt: "遺品整理業者をうまく使うコツ",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [`${siteConfig.baseUrl}/images/guide/遺品整理業者をうまく使うコツ.png`],
    },
    keywords: [
        "遺品整理業者",
        "選び方",
        "相見積もり",
        "悪徳業者",
        "質問",
        "チェックリスト",
    ],
};

const tocItems = [
    { id: "tips", title: "3つのコツ", level: 1 },
    { id: "checklist", title: "質問チェックリスト（10選）", level: 1 },
    { id: "warning-signs", title: "危ない業者のサイン", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function ChoosingCompanyGuidePage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="遺品整理業者をうまく使うコツと質問チェックリスト"
                description="遺品整理業者の選び方を徹底解説。相見積もりの取り方、見積もり時に聞くべき10の質問、危ない業者のサインなどを紹介。"
                url={FULL_URL}
                publishedTime={guidePages.choosingCompany.publishedDate}
                images={[`${siteConfig.baseUrl}/images/guide/遺品整理業者をうまく使うコツ.png`]}
                categoryName="遺品整理ガイド"
            />
            <HowToSchema
                name="遺品整理業者の選び方"
                description="失敗しない遺品整理業者選びの手順"
                steps={[
                    { name: "相見積もりを取る", text: "2〜3社に見積もりを依頼し、比較検討します" },
                    { name: "許認可を確認", text: "古物商許可など必要な資格を確認します" },
                    { name: "口コミをチェック", text: "Googleランキングやレビューを確認します" },
                    { name: "見積もり内容を確認", text: "追加料金の有無、内訳を確認します" },
                    { name: "契約を結ぶ", text: "書面で契約を結び、キャンセル規定を確認します" },
                ]}
                totalTime="P7D"
            />
            <div className="min-h-screen bg-white dark:bg-slate-950">
                {/* ヒーローセクション */}
                <section className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden">
                    {/* 背景画像 */}
                    <Image
                        src="/images/guide/遺品整理業者をうまく使うコツ.png"
                        alt="遺品整理業者をうまく使うコツ"
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
                                    Professional Guide
                                </span>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-6 drop-shadow-lg">
                                    遺品整理<span className="text-accent">業者</span>を
                                    <br className="hidden sm:block" />
                                    うまく使うコツ
                                </h1>

                                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow">
                                    業者選びは「料金」だけでなく、「信頼性」と「作業の丁寧さ」をいかに見極めるかがポイントです。
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="#tips"
                                        className="w-full sm:w-auto px-8 py-4 bg-accent hover:opacity-90 text-white font-bold rounded-2xl shadow-lg shadow-accent/20 transition-all"
                                    >
                                        3つのコツを読む
                                    </Link>
                                    <Link
                                        href="#checklist"
                                        className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/30 transition-all"
                                    >
                                        質問チェックリストへ
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
                        { name: "業者選びのコツ", path: PAGE_PATH },
                    ]}
                />

                {/* メインコンテンツ */}
                <main className="py-10 sm:py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            {/* 目次 */}
                            <TableOfContentsGuide items={tocItems} />

                            {/* ===== セクション1: 3つのコツ ===== */}
                            <section id="tips" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 01
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
                                    業者をうまく使うための3つのコツ
                                </h2>

                                <div className="space-y-6">
                                    <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary text-white font-bold rounded-full text-sm">①</span>
                                            可能な範囲で「貴重品の自己捜索」を済ませる
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                            業者に丸投げする場合でも、通帳、現金、貴金属、重要な契約書類（保険・不動産）などは、自分たちで事前に探しておきましょう。
                                        </p>
                                        <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-700">
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                <strong className="text-primary">理由:</strong> 盗難トラブルの防止になるだけでなく、業者の仕分けの手間が減り、見積もり金額が下がる可能性があります。
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary text-white font-bold rounded-full text-sm">②</span>
                                            「相見積もり」は3社程度に絞る
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                            多すぎても比較が大変になり、決断が揺らぎます。電話対応やメールの丁寧さで3社に絞り、現地見積もりを依頼しましょう。
                                        </p>
                                    </div>
                                    <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary text-white font-bold rounded-full text-sm">③</span>
                                            「思い出の品」は最後に残さない
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                            家具や家電などの「大物」をプロに任せ、自分たちは写真や手紙などの「心に向き合う作業」に集中できるよう、役割分担を明確にします。
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ===== セクション2: 10の質問チェックリスト ===== */}
                            <section id="checklist" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 02
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
                                    見積もり時に聞くべき「10の質問」
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    見積もり担当者の回答が曖昧な場合は注意が必要です。以下の項目を確認しましょう。
                                </p>

                                {/* 料金・契約 */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
                                        料金・契約について
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            { q: "Q1. 追加料金の有無", desc: "「作業当日、荷物量などの理由で追加請求されることはありますか？」" },
                                            { q: "Q2. キャンセル規定", desc: "「いつからキャンセル料が発生しますか？」" },
                                            { q: "Q3. 買取の可否", desc: "「価値があるものが見つかった場合、その場で買い取りや値引きは可能ですか？」" },
                                        ].map((item, i) => (
                                            <label key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-accent focus:ring-accent" />
                                                <div>
                                                    <span className="font-bold text-slate-900 dark:text-white">{item.q}</span>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* 法律・安心面 */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
                                        法律・安心面について
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            { q: "Q4. 一般廃棄物収集運搬業の許可", desc: "「家庭ゴミを運ぶ許可（または提携先の明示）はありますか？」" },
                                            { q: "Q5. 損害賠償保険", desc: "「作業中に建物や共用部を傷つけた場合の保険に加入していますか？」" },
                                            { q: "Q6. 遺品整理士の有無", desc: "「専門知識を持つ『遺品整理士』の資格者は在籍していますか？」" },
                                        ].map((item, i) => (
                                            <label key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-accent focus:ring-accent" />
                                                <div>
                                                    <span className="font-bold text-slate-900 dark:text-white">{item.q}</span>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* 作業内容 */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
                                        作業内容について
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            { q: "Q7. 貴重品の捜索", desc: "「封筒の中やポケットの中まで確認し、写真や印鑑などを探してもらえますか？」" },
                                            { q: "Q8. 清掃の範囲", desc: "「作業後の清掃はどこまで含まれますか？（掃き掃除のみか、洗剤を使った清掃か）」" },
                                            { q: "Q9. 当日の立ち会い", desc: "「作業当日は最初から最後まで立ち会う必要がありますか？」" },
                                            { q: "Q10. 供養の対応", desc: "「仏壇や写真など、そのまま捨てるのが忍びない品の供養（お焚き上げ）は可能ですか？」" },
                                        ].map((item, i) => (
                                            <label key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-accent focus:ring-accent" />
                                                <div>
                                                    <span className="font-bold text-slate-900 dark:text-white">{item.q}</span>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* ===== セクション3: 危ない業者のサイン ===== */}
                            <section id="warning-signs" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 03
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
                                    危ない業者のサイン（レッドフラッグ）
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    以下の項目に当てはまる業者は、慎重に検討するか、避けることをお勧めします。
                                </p>

                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "1. 現地を見ずに見積もりを出す",
                                            a: "荷物量を見ずに正確な金額は出せません。後で高額請求される典型的なパターンです。",
                                        },
                                        {
                                            q: "2. 見積書が「一式」のみ",
                                            a: "内訳（人件費、廃棄物処理費、車両費）が不明瞭な業者は避けましょう。",
                                        },
                                        {
                                            q: "3. 契約を急かしてくる",
                                            a: "「今すぐ決めれば半額にする」といった強引な営業トークには注意してください。",
                                        },
                                        {
                                            q: "4. 領収書を発行したがらない",
                                            a: "税務処理やトラブル時の証拠として必須です。",
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="p-4 sm:p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4"
                                        >
                                            <div className="w-8 h-8 shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.q}</h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">{item.a}</p>
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
                                                まとめ：信頼は「小さな違和感」のなさから
                                            </h3>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                遺品整理は、大切な人の最後を任せる仕事です。どれだけ安くても、対応に少しでも不安を感じるなら、その業者に任せるべきではありません。
                                            </p>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                見積もり時の丁寧さ、質問への明確な回答、そして何より故人と遺族に対する敬意。それらを感じられる業者を選ぶことが、結果として最も満足度の高い遺品整理に繋がります。
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
                                信頼できる業者をお探しの方へ
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                当サイトがおすすめする遺品整理業者は、上記のチェック項目をすべてクリアしています。
                                <br className="hidden md:block" />
                                まずは無料見積もりからお気軽にどうぞ。
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
