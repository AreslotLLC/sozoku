import Link from "next/link";
import { Category } from "@/types";

interface CategoryCardProps {
    category: Category;
}

// 統一されたカラースキーム
const unifiedColors = {
    color: "text-primary dark:text-primary",
    bgColor: "bg-white dark:bg-slate-900/50",
};

export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link href={`/category/${category.slug}`} className="block group">
            <div
                className={`h-full p-4 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 ${unifiedColors.bgColor} transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1`}
            >
                {/* ヘッダーエリア */}
                <div className="mb-3 sm:mb-6">
                    <div className="w-8 h-1 bg-primary/20 group-hover:bg-primary group-hover:w-12 transition-all duration-300 mb-2 sm:mb-4" />
                    <h3 className="text-base sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                        {category.name}
                    </h3>
                </div>

                {/* 記事数 */}
                {category.itemCount !== undefined && (
                    <div className="flex items-center gap-1.5 mb-3 sm:mb-4">
                        <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-widest text-primary/60 dark:text-primary/40 px-2 py-0.5 border border-primary/20 dark:border-primary/30 rounded">
                            Guides
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500">
                            {category.itemCount}<span className="text-[10px] ml-0.5">件</span>
                        </p>
                    </div>
                )}

                {/* 説明 - モバイルでは非表示にしてコンパクト化 */}
                <p className="hidden sm:block text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 leading-relaxed">
                    {category.description}
                </p>

                {/* 詳しく見るリンク - モバイルではさらに小さく */}
                <span className={`inline-flex items-center text-xs sm:text-sm font-bold ${unifiedColors.color} group-hover:translate-x-1 transition-transform duration-200`}>
                    詳しく見る
                </span>
            </div>
        </Link>
    );
}
