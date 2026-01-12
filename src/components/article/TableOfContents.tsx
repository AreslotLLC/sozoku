"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    items: TOCItem[];
    title?: string;
}

/**
 * 目次コンポーネント
 * コンパクトなデザインの目次（常時表示）
 */
export function TableOfContents({
    items,
    title = "目次",
}: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-10% 0px -80% 0px" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    if (!items || items.length === 0) {
        return null;
    }

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <nav
            aria-label="目次"
            className="bg-slate-50/80 dark:bg-slate-900/40 rounded-xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
        >
            <div className="flex items-center gap-2 p-4 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/50">
                <span className="text-base font-bold tracking-wider">{title}</span>
            </div>

            <ul className="px-4 py-3 space-y-1">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={cn(
                            "transition-all duration-200 border-l-2",
                            activeId === item.id
                                ? "border-primary bg-primary/5"
                                : "border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                        )}
                        style={{ paddingLeft: item.level > 2 ? `${(item.level - 2) * 1}rem` : '0.75rem' }}
                    >
                        <button
                            onClick={() => handleClick(item.id)}
                            className={cn(
                                "flex items-start text-left transition-colors text-sm py-1.5 w-full",
                                activeId === item.id
                                    ? "text-primary font-bold"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                            )}
                        >
                            {item.text}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

