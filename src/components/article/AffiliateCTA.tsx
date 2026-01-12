import Link from "next/link";
import { AffiliateLink } from "@/types";
import { Zap, Truck, BadgePercent, ArrowRight } from "lucide-react";

interface AffiliateCTAProps {
    links?: AffiliateLink[];
    variant?: "intro" | "mid" | "outro";
    ctaUrl?: string;       // 新規: CTAボタンのURL（Airtableから上書き用）
    bannerHtml?: string;   // 新規: バナーHTML（Aタグ形式）
}

// マイクロコピーの設定
const microCopyConfig = {
    intro: {
        badge: "相続でお困りの方へ",
        heading: "専門の税理士に相談してみませんか？",
        description: "相続税申告や遺産分割に強い税理士が、あなたの状況に合わせてアドバイスします。",
        bullets: [],
    },
    mid: {
        badge: "専門家に相談したい方へ",
        heading: "相続専門の税理士に相談",
        description: "",
        bullets: [
            { icon: Zap, text: "初回相談無料" },
            { icon: Truck, text: "オンライン相談可能" },
            { icon: BadgePercent, text: "相続税申告の実績多数" },
        ],
    },
    outro: {
        badge: "まとめ",
        heading: "今すぐ税理士に相談する",
        description: "",
        bullets: [
            { icon: Zap, text: "初回相談無料" },
            { icon: Truck, text: "相続専門の税理士が対応" },
            { icon: BadgePercent, text: "全国対応" },
        ],
    },
};

/**
 * 収益化CTAコンポーネント
 */
export function AffiliateCTA({ links, variant = "mid", ctaUrl, bannerHtml }: AffiliateCTAProps) {
    if (!links || links.length === 0) {
        return null;
    }

    const config = microCopyConfig[variant];
    const isIntro = variant === "intro";
    const isMid = variant === "mid";
    const isOutro = variant === "outro";
    const primaryLink = links.find((link) => link.isPrimary) || links[0];
    const secondaryLinks = links.filter((link) => link.id !== primaryLink.id);

    // ctaUrlが指定されていればそれを使用、なければprimaryLinkのURLを使用
    const actualUrl = ctaUrl || primaryLink.url;

    // 自然な導入CTA (intro) 用の特別デザイン
    if (isIntro) {
        return (
            <div className="my-4 sm:my-8 px-0 md:px-0">
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 group">
                    <div className="flex items-start gap-4 md:gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-primary text-white rounded-md">
                                    {config.badge}
                                </span>
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                {config.heading}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                                {config.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-auto shrink-0 space-y-3">
                        <Link
                            href={actualUrl}
                            className="flex items-center justify-center gap-2 bg-accent hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent/20 active:scale-95 whitespace-nowrap"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {primaryLink.label}
                        </Link>
                        {secondaryLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-4 rounded-xl font-bold transition-all active:scale-95 whitespace-nowrap"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* バナー表示エリア（AタグHTMLを挿入） */}
                {bannerHtml && (
                    <div
                        className="affiliate-banner mt-4 flex justify-center"
                        dangerouslySetInnerHTML={{ __html: bannerHtml }}
                    />
                )}
            </div>
        );
    }

    // 標準のCTAデザイン (mid / outro)
    return (
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isMid ? "my-8" : "my-12"}`}>
            <div className="max-w-4xl lg:max-w-5xl mx-auto">
                <div
                    className={`rounded-none md:rounded-3xl p-5 md:p-8 border-y md:border-2 transition-all duration-300 ${isOutro
                        ? "bg-primary/5 border-primary/20 shadow-xl shadow-primary/5"
                        : "bg-primary/5 dark:bg-primary/10 border-primary/20"
                        }`}
                >
                    {/* ヘッダー */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                        <div>
                            <span
                                className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-2 ${isOutro
                                    ? "bg-primary text-white"
                                    : "bg-primary/10 text-primary"
                                    }`}
                            >
                                {config.badge}
                            </span>
                            <h3
                                className={`text-xl sm:text-2xl font-bold leading-tight ${isOutro ? "text-slate-900" : "text-slate-900 dark:text-white"
                                    }`}
                            >
                                {config.heading}
                            </h3>
                        </div>

                        {/* 特典・メリット */}
                        {config.bullets.length > 0 && (
                            <ul className="space-y-1.5">
                                {config.bullets.map((bullet, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`flex items-center gap-2 text-sm font-medium ${isOutro
                                                ? "text-slate-600"
                                                : "text-slate-600 dark:text-slate-400"
                                                }`}
                                        >
                                            <span className="text-primary">•</span>
                                            {bullet.text}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>

                    {/* アクションエリア */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={actualUrl}
                            className="group flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-12 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg bg-accent hover:opacity-90 text-white shadow-accent/20"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {primaryLink.label}
                        </Link>

                        {secondaryLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                className={`flex items-center justify-center w-full sm:w-auto py-4 px-10 rounded-2xl font-bold text-lg transition-all duration-300 border-2 ${isOutro
                                    ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                                    }`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {primaryLink.description && (
                        <p
                            className={`text-sm mt-4 ${isOutro ? "text-slate-500" : "text-slate-500 dark:text-slate-400"
                                }`}
                        >
                            {primaryLink.description}
                        </p>
                    )}

                    {/* outroバリアントの場合のみ、バナーをCTA内に表示 */}
                    {isOutro && bannerHtml && (
                        <div
                            className="affiliate-banner mt-6 flex justify-center"
                            dangerouslySetInnerHTML={{ __html: bannerHtml }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

