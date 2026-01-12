import Link from "next/link";
import { AffiliateLink } from "@/types";
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";

interface SideAffiliateBannerProps {
    links: AffiliateLink[];
    linkUrl?: string;      // 新規: CTAボタンのURL（Airtableから）
    bannerHtml?: string;   // 新規: バナーHTML（Aタグ形式）
}

export function SideAffiliateBanner({ links, linkUrl, bannerHtml }: SideAffiliateBannerProps) {
    if (!links || links.length === 0) return null;

    const primaryLink = links.find(l => l.isPrimary) || links[0];
    const secondaryLinks = links.filter(l => l.id !== primaryLink.id);

    // linkUrlが指定されていればそれを使用、なければprimaryLinkのURLを使用
    const ctaUrl = linkUrl || primaryLink.url;

    return (
        <div className="sticky top-24 space-y-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm overflow-hidden relative group">
                {/* 装飾用の背景 */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl transition-all group-hover:bg-primary/20" />

                <div className="relative">
                    <span className="inline-block px-2 py-1 bg-primary text-white text-[10px] font-black rounded-lg mb-4 tracking-widest uppercase shadow-sm">
                        PICK UP
                    </span>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 leading-tight tracking-tight">
                        相続のお悩み<br />専門家が解決
                    </h3>

                    <ul className="space-y-2.5 mb-8">
                        <li className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                            <span className="text-primary">•</span>
                            初回相談無料
                        </li>
                        <li className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                            <span className="text-primary">•</span>
                            相続税申告の実績多数
                        </li>
                        <li className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                            <span className="text-primary">•</span>
                            オンライン相談可能
                        </li>
                    </ul>

                    <div className="space-y-3">
                        <Link
                            href={ctaUrl}
                            className="flex items-center justify-center gap-2 w-full bg-accent hover:opacity-90 text-white py-4 px-6 rounded-2xl font-black text-base transition-all shadow-lg shadow-accent/25 active:scale-95 group/btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {primaryLink.label}
                        </Link>

                        {secondaryLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="flex items-center justify-center w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 py-3.5 px-6 rounded-2xl font-bold text-sm transition-all active:scale-95"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {primaryLink.description && (
                        <p className="text-[10px] text-slate-400 mt-4 text-center">
                            {primaryLink.description}
                        </p>
                    )}
                </div>
            </div>

            {/* バナー表示エリア（AタグHTMLを挿入） */}
            {bannerHtml && (
                <div
                    className="affiliate-banner rounded-2xl overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: bannerHtml }}
                />
            )}
        </div>
    );
}

