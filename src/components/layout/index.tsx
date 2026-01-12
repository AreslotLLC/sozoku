"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/guide/first-time", label: "初めての相続" },
    { href: "/guide/cost-breakdown", label: "税理士費用の相場" },
    { href: "/guide/choosing-company", label: "税理士選びのポイント" },
    { href: "/guide/precautions", label: "相続手続きの注意点" },
    { href: "/guide/digital-legacy", label: "デジタル資産の相続" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-800 dark:bg-slate-950/95 dark:supports-[backdrop-filter]:bg-slate-950/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* ロゴ */}
                <Link href="/" className="group flex items-center space-x-2">
                    <span className="text-xl sm:text-2xl font-bold text-primary group-hover:opacity-80 transition-all duration-300">
                        相続相談ナビ
                    </span>
                </Link>

                {/* デスクトップナビ */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* モバイルメニューボタン */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="メニュー"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* モバイルメニュー */}
            {isMenuOpen && (
                <nav className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                    <div className="container mx-auto px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* ブランド */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-lg font-bold text-primary">
                            相続相談ナビ
                        </Link>
                        <span className="hidden md:block text-xs text-slate-500">|</span>
                        <p className="hidden md:block text-xs text-slate-500">
                            相続でお困りの方へ
                        </p>
                    </div>

                    {/* ガイドリンク */}
                    <nav className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                        {[
                            { href: "/guide/first-time", label: "初めての相続" },
                            { href: "/guide/cost-breakdown", label: "税理士費用の相場" },
                            { href: "/guide/choosing-company", label: "税理士選びのポイント" },
                            { href: "/guide/precautions", label: "相続手続きの注意点" },
                            { href: "/guide/digital-legacy", label: "デジタル資産の相続" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-500 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* 法的ページリンク */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                    <Link
                        href="/about"
                        className="text-slate-500 hover:text-primary transition-colors"
                    >
                        運営者情報
                    </Link>
                    <Link
                        href="/privacy-policy"
                        className="text-slate-500 hover:text-primary transition-colors"
                    >
                        プライバシーポリシー
                    </Link>
                    <Link
                        href="/disclaimer"
                        className="text-slate-500 hover:text-primary transition-colors"
                    >
                        免責事項
                    </Link>
                </div>

                {/* コピーライト */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-center md:text-left">
                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} あなたの街の相続相談ナビ All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

