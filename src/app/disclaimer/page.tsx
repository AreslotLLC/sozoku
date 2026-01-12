import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";

const PAGE_PATH = "/disclaimer";
const FULL_URL = `${siteConfig.baseUrl}${PAGE_PATH}`;

export const metadata: Metadata = {
    title: "免責事項 | 遺品整理ガイド.jp",
    description: "遺品整理ガイド.jpの免責事項です。当サイトの情報利用に関する注意事項、アフィリエイト広告の使用について説明しています。",
    alternates: {
        canonical: FULL_URL,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* ヒーローセクション */}
            <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            免責事項
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400">
                            当サイトのご利用にあたって
                        </p>
                    </div>
                </div>
            </section>

            {/* パンくず */}
            <Breadcrumbs
                items={[
                    { name: "ホーム", path: "/" },
                    { name: "免責事項", path: PAGE_PATH },
                ]}
            />

            {/* メインコンテンツ */}
            <main className="py-10 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10">
                            {/* 1. 情報の正確性・最新性について */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    1. 情報の正確性・最新性について
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    遺品整理ガイド.jp（以下「当サイト」といいます）では、掲載する情報について、作成時点において可能な限り正確であるよう努めております。しかしながら、当サイトが提供するコンテンツの内容について、その正確性、完全性、最新性、妥当性、および特定の目的への適合性を保証するものではありません。
                                </p>
                                <div className="p-4 sm:p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl">
                                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                                        <strong>ご注意：</strong>当サイトの掲載情報は、時間の経過による変化や、各地域・自治体の独自の条例・規則等によって内容が異なる場合があります。実際のアクションにあたっては、必ず当該自治体の公式サイトや、各専門業者、関係機関等へ直接ご確認いただき、最新かつ正確な情報を取得してください。
                                    </p>
                                </div>
                            </section>

                            {/* 2. 情報利用に関する免責 */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    2. 情報利用に関する免責
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    当サイトに掲載された情報の利用により、万一、利用者または第三者に損害やトラブル（直接的・間接的を問いません）が生じた場合であっても、当サイト運営者は一切の責任を負いかねます。
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    情報のご利用は、訪問者ご自身の判断と責任において行っていただきますようお願いいたします。特に遺品整理に伴う法的手続き、不用品回収の契約、多額の費用が発生するサービス、および税務等に関しては、必ず有資格者や専門家への相談を強くお勧めいたします。
                                </p>
                            </section>

                            {/* 3. アフィリエイト広告および外部リンクについて */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    3. アフィリエイト広告および外部リンクについて
                                </h2>
                                <div className="p-4 sm:p-5 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl mb-4">
                                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                                        当サイトは、第三者配信の広告サービスや<strong>アフィリエイトプログラム</strong>に参加しています。当サイト経由で商品やサービスを購入・成約された場合、当サイト運営者に広告収入が発生する場合があります。
                                    </p>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    当サイトで紹介している商品・サービスは、当サイトが販売・提供しているものではありません。お客様とリンク先の販売店・提供業者との間で直接取引されるものです。
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    そのため、特定商取引法に基づく表記や、サービス内容の詳細、キャンセル・返品等については、リンク先の公式サイトを必ずご確認ください。当サイトは、外部サイトの内容や提供されるサービス、およびそこで発生したトラブル等について、一切の責任を負いません。
                                </p>
                            </section>

                            {/* 4. 著作権・肖像権について */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    4. 著作権・肖像権について
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    当サイトに掲載されている文章、画像、デザイン、その他のコンテンツの著作権は、当サイト運営者または正当な権利を有する第三者に帰属します。
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    無断での複製、転載、改変等は著作権法により禁じられています。適切な範囲内での引用（引用元の明記など）を除き、承諾なく当サイトのコンテンツを利用することはできません。著作権に関して問題がございましたら、
                                    <a
                                        href="https://www.areslot.jp/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        運営会社のお問い合わせ窓口
                                    </a>
                                    までご連絡ください。
                                </p>
                            </section>

                            {/* 5. コンテンツの変更・削除 */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    5. コンテンツの変更・削除
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    当サイトは、予告なく掲載内容の変更、修正、または削除を行うことがあります。また、当サイトの公開を一時中断または中止することがあります。これらによって生じたいかなる損害についても、当サイト運営者は一切の責任を負いません。
                                </p>
                            </section>

                            {/* 6. 免責事項の変更 */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    6. 免責事項の変更
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    当サイトは、必要に応じて本免責事項の内容を変更することがあります。変更後の免責事項は、当ページにて公開した時点から効力を生じるものとします。
                                </p>
                            </section>

                            {/* 制定日 */}
                            <section className="pt-6 border-t border-slate-200 dark:border-slate-800">
                                <p className="text-sm text-slate-500 dark:text-slate-500">
                                    制定日：2026年1月9日
                                </p>
                            </section>

                            {/* 関連リンク */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    関連ページ
                                </h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/about"
                                            className="text-primary hover:underline"
                                        >
                                            運営者情報
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/privacy-policy"
                                            className="text-primary hover:underline"
                                        >
                                            プライバシーポリシー
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
