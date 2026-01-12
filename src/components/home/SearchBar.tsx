"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
    placeholder?: string;
    className?: string;
}

/**
 * 検索バーコンポーネント
 * ファーストビューに配置する大きな検索入力
 */
export function SearchBar({
    placeholder = "お住まいの地域を入力（例：東京都、大阪市）",
    className = "",
}: SearchBarProps) {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`w-full max-w-2xl ${className}`}>
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className="w-full h-12 sm:h-14 md:h-16 pl-4 sm:pl-6 pr-20 sm:pr-24 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl border-2 border-slate-200 bg-white shadow-lg focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-200 placeholder:text-slate-400"
                />
                <button
                    type="submit"
                    className="absolute inset-y-1.5 sm:inset-y-2 right-1.5 sm:right-2 px-4 sm:px-6 text-sm sm:text-base bg-accent text-white font-bold rounded-lg sm:rounded-xl hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    検索
                </button>
            </div>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-500 text-center">
                地域名を入力して、相続に強い税理士を検索できます
            </p>
        </form>
    );
}

