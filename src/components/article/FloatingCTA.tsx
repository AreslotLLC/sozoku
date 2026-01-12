"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AffiliateLink } from "@/types";

interface FloatingCTAProps {
    link?: AffiliateLink;
    showAfterScroll?: number;
}

/**
 * モバイル固定フローティングCTA
 * 画面下部に固定表示、スクロールで表示/非表示
 */
export function FloatingCTA({
    link,
    showAfterScroll = 500,
}: FloatingCTAProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > showAfterScroll) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [showAfterScroll]);

    if (!link || isDismissed || !isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent dark:from-slate-950 dark:via-slate-950 md:hidden">
            <div className="relative bg-accent rounded-2xl p-4 shadow-2xl">
                {/* 閉じるボタン */}
                <button
                    onClick={() => setIsDismissed(true)}
                    className="absolute -top-2 -right-2 w-7 h-7 bg-slate-900 border-2 border-white rounded-full flex items-center justify-center shadow-lg"
                    aria-label="閉じる"
                >
                    <X className="w-4 h-4 text-white" />
                </button>

                {/* マイクロコピー */}
                <p className="text-white/95 text-[10px] font-bold tracking-tight text-center mb-1.5 flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    重い家電の運び出しも全部お任せ！
                </p>

                {/* CTAボタン */}
                <Link
                    href={link.url}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-accent font-black rounded-xl hover:bg-slate-50 transition-colors shadow-inner"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link.label}
                </Link>

                {/* 補足情報 */}
                {link.description && (
                    <p className="text-white/80 text-xs text-center mt-2">
                        {link.description}
                    </p>
                )}
            </div>
        </div>
    );
}
