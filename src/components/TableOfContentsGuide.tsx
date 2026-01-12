"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface TOCItem {
    id: string;
    title: string;
    level: number;
}

interface TableOfContentsGuideProps {
    /** 目次に含めるセクションのid一覧 */
    items: TOCItem[];
}

/**
 * ガイドページ用目次コンポーネント
 */
export function TableOfContentsGuide({ items }: TableOfContentsGuideProps) {
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
            {
                rootMargin: "-100px 0px -80% 0px",
            }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [items]);

    if (items.length === 0) return null;

    return (
        <nav className="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 mb-8">
            <h2 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-widest">
                目次
            </h2>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li
                        key={item.id}
                        style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
                    >
                        <Link
                            href={`#${item.id}`}
                            className={`block text-sm py-1 transition-colors ${activeId === item.id
                                    ? "text-primary font-medium"
                                    : "text-slate-600 dark:text-slate-400 hover:text-primary"
                                }`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
