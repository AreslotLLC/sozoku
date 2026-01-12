import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedGuides } from "@/components/RelatedGuides";
import { TableOfContentsGuide } from "@/components/TableOfContentsGuide";
import { ArticleSchema, HowToSchema } from "@/components/seo/JsonLd";
import { siteConfig, guidePages, affiliateLinks } from "@/lib/siteConfig";

const PAGE_PATH = guidePages.digitalLegacy.path;
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "デジタル遺品整理ガイド｜スマホのロックとサブスク解約への対応 | 遺品整理ガイド.jp",
    description:
        "スマートフォンのパスワードが分からない場合の対処法を解説。サブスクの停止方法、スマホのロック解除の現実、代替案まで、デジタル遺品整理の実践的なガイドです。",
    alternates: {
        canonical: FULL_URL,
    },
    openGraph: {
        title: "デジタル遺品整理ガイド｜スマホのロックとサブスク解約への対応",
        description:
            "スマホのパスワードが分からなくてもサブスクを止める方法、ロック解除の現実、代替案を解説。",
        url: FULL_URL,
        type: "article",
        publishedTime: guidePages.digitalLegacy.publishedDate,
        images: [
            {
                url: `${siteConfig.baseUrl}/images/guide/デジタル遺品.png`,
                width: 1200,
                height: 675,
                alt: "デジタル遺品整理ガイド",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [`${siteConfig.baseUrl}/images/guide/デジタル遺品.png`],
    },
    keywords: [
        "デジタル遺品",
        "スマホ",
        "ロック解除",
        "サブスク",
        "解約",
        "パスワード",
        "遺品整理",
    ],
};

const tocItems = [
    { id: "stop-subscriptions", title: "サブスクを止める3つのルート", level: 1 },
    { id: "smartphone-lock", title: "スマホのロックへの向き合い方", level: 1 },
    { id: "alternatives", title: "スマホを開けない場合の代替案", level: 1 },
    { id: "conclusion", title: "まとめ", level: 1 },
];

export default function DigitalLegacyGuidePage() {
    return (
        <>
            {/* 構造化データ */}
            <ArticleSchema
                title="デジタル遺品整理ガイド｜スマホのロックとサブスク解約への対応"
                description="スマートフォンのパスワードが分からない場合の対処法。サブスクの停止方法、スマホのロック解除の現実、代替案を解説。"
                url={FULL_URL}
                publishedTime={guidePages.digitalLegacy.publishedDate}
                images={[`${siteConfig.baseUrl}/images/guide/デジタル遺品.png`]}
                categoryName="遺品整理ガイド"
            />
            <HowToSchema
                name="デジタル遺品整理の手順"
                description="スマホが開けない場合のサブスク停止とデジタル遺品の整理手順"
                steps={[
                    { name: "クレジットカードの停止", text: "故人のカードを停止し、サブスクを一括停止します" },
                    { name: "通信キャリアの解約", text: "キャリア店舗で回線解約とキャリア決済を停止します" },
                    { name: "Apple/Googleへの申請", text: "必要に応じてアカウントの閉鎖を申請します" },
                    { name: "代替手段の検討", text: "PCやアルバムから写真・連絡先を探します" },
                ]}
                totalTime="P14D"
            />
            <div className="min-h-screen bg-white dark:bg-slate-950">
                {/* ヒーローセクション */}
                <section className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden">
                    {/* 背景画像 */}
                    <Image
                        src="/images/guide/デジタル遺品.png"
                        alt="デジタル遺品整理ガイド"
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
                                    Digital Legacy Guide
                                </span>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-6 drop-shadow-lg">
                                    <span className="text-accent">デジタル遺品</span>整理ガイド
                                    <br className="hidden sm:block" />
                                    スマホのロックとサブスク解約
                                </h1>

                                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow">
                                    スマートフォンのパスワードが分からない場合でも、金銭的な負担を止めることは可能です。
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="#stop-subscriptions"
                                        className="w-full sm:w-auto px-8 py-4 bg-accent hover:opacity-90 text-white font-bold rounded-2xl shadow-lg shadow-accent/20 transition-all"
                                    >
                                        サブスク停止方法を見る
                                    </Link>
                                    <Link
                                        href="#alternatives"
                                        className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/30 transition-all"
                                    >
                                        代替案を確認する
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
                        { name: "デジタル遺品", path: PAGE_PATH },
                    ]}
                />

                {/* メインコンテンツエリア */}
                <main className="py-10 sm:py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            {/* 目次 */}
                            <TableOfContentsGuide items={tocItems} />

                            {/* ===== セクション1: サブスクを止める3つのルート ===== */}
                            <section id="stop-subscriptions" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 01
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    サブスク（月額課金）を止める3つのルート
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    スマホの画面が開けなくても、以下の方法で支払いを停止できます。
                                </p>

                                <div className="space-y-6">
                                    {/* ルート① */}
                                    <div className="p-4 sm:p-6 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary text-white font-bold rounded-full text-sm">①</span>
                                            クレジットカード・銀行口座を止める（推奨）
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                            故人のカードや口座を解約・停止すれば、紐付いているサブスク（動画配信、音楽、アプリ課金等）は「決済不能」となり、自動的に解約されます。
                                        </p>
                                        <div className="grid gap-3 sm:grid-cols-2">
                                            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                                <span className="text-xs font-bold text-primary">メリット</span>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">各サービスへ個別に連絡する手間が省ける</p>
                                            </div>
                                            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                                <span className="text-xs font-bold text-accent">注意点</span>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">公共料金や通信費の引き落としも止まるため、タイミングは慎重に</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ルート② */}
                                    <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary text-white font-bold rounded-full text-sm">②</span>
                                            通信キャリア（携帯電話会社）の回線解約
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                            ドコモ、au、ソフトバンク等の店舗で回線の解約手続きを行います。これにより「キャリア決済」で支払っていたサブスクも同時に停止されます。
                                        </p>
                                        <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-700">
                                            <span className="text-xs font-bold text-primary">必要書類</span>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">死亡診断書の写し、除籍謄本、来店者の本人確認書類など（各社HPで事前確認を推奨）</p>
                                        </div>
                                    </div>

                                    {/* ルート③ */}
                                    <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary text-white font-bold rounded-full text-sm">③</span>
                                            各プラットフォームへの依頼
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                            AppleやGoogleに直接、アカウントの閉鎖を依頼する方法です。
                                        </p>
                                        <div className="grid gap-3 sm:grid-cols-2">
                                            <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-700">
                                                <span className="text-xs font-bold text-slate-900 dark:text-white">Apple</span>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                                    「故人アカウント管理連絡先」が設定されていない場合、死亡診断書とともにアカウントの削除を申請可能
                                                </p>
                                            </div>
                                            <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-700">
                                                <span className="text-xs font-bold text-slate-900 dark:text-white">Google</span>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                                    「アカウント無効化管理ツール」の設定がない場合でも、親族からの申請でアカウント閉鎖が可能
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ===== セクション2: スマホのロックへの向き合い方 ===== */}
                            <section id="smartphone-lock" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 02
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    スマホ本体のロックへの向き合い方
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    現代のスマホはセキュリティが非常に高く、専門業者でも解除できないことが増えています。
                                </p>

                                {/* テーブル */}
                                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 mb-8">
                                    <table className="w-full text-sm">
                                        <thead className="bg-slate-50 dark:bg-slate-900">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">種類</th>
                                                <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">特徴と対応</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                            <tr className="bg-white dark:bg-slate-950">
                                                <td className="px-4 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">iPhone</td>
                                                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">
                                                    パスワードを10回間違えるとデータが消去される設定があるため、適当な入力は厳禁。「デジタルレガシー」の設定がない場合、解除は極めて困難。
                                                </td>
                                            </tr>
                                            <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                                                <td className="px-4 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">Android</td>
                                                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">
                                                    メーカーやOSのバージョンによるが、基本的にはApple同様に強固。Googleアカウント側からデータの操作ができないかまず検討する。
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* 警告 */}
                                <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-2xl">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">⚠️</span>
                                        <div>
                                            <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">
                                                警告：闇雲なパスワード入力は避ける
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                何度も入力を失敗すると、スマホに永久的なロックがかかったり、自動で初期化されたりします。大切な写真などを取り出したい場合は、まず入力を止めて専門家に相談してください。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ===== セクション3: 代替案 ===== */}
                            <section id="alternatives" className="mb-12 sm:mb-20 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-2.5 py-1 rounded shadow-sm">
                                        Section 03
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    「スマホを開けない」場合の代替案
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    中身が見られないストレスを軽減するための実務的な知恵です。
                                </p>

                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "写真を探す",
                                            desc: "故人が使っていたパソコン（PCはスマホよりログインの壁が低いことが多い）や、共有のデジカメ、外付けHDD、印刷されたアルバムなどを先に探します。",
                                            icon: "📷"
                                        },
                                        {
                                            title: "連絡先を知りたい",
                                            desc: "年賀状、紙の住所録、仕事の名刺入れ、固定電話の着信履歴など、アナログな情報を頼る方が確実な場合が多いです。",
                                            icon: "📇"
                                        },
                                        {
                                            title: "SNSの処理",
                                            desc: "FacebookやInstagramは、スマホが開けなくても「追悼アカウント」への移行や削除を公式フォームから申請できます。",
                                            icon: "📱"
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                                            <span className="text-2xl">{item.icon}</span>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
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
                                                最後に：無理をしないという選択
                                            </h3>
                                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                デジタル遺品は物理的な遺品と違い、解決策が見つからないことも多々あります。「サブスクさえ止まれば、中身は諦める」という決断も、あなたの心を守るためには大切な選択肢です。
                                            </p>
                                            <div className="space-y-2 mt-4">
                                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                    <span className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 flex-shrink-0"></span>
                                                    クレジットカードの利用明細を確認し、不要な引き落としを特定する
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                    <span className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 flex-shrink-0"></span>
                                                    通信キャリアの店舗へ行く準備をする
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                    <span className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 flex-shrink-0"></span>
                                                    パソコンが残っているなら、そちらのログインを試みる
                                                </div>
                                            </div>
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
                                デジタル遺品でお困りの方へ
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                遺品整理のプロが、デジタル遺品を含めた総合的なサポートをご提供いたします。
                                相談・見積もりは無料です。
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
