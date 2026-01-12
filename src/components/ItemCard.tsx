import Link from "next/link";
import { RegionalItem } from "@/types";

interface ItemCardProps {
    item: RegionalItem;
}

// 7:2:1の法則に基づく統一カラースキーム
// 70%: 白/グレー背景、20%: slate系、10%: blueアクセント
const unifiedColors = {
    bg: "bg-white dark:bg-slate-900/50",
    text: "text-primary dark:text-primary",
    badge: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
};

export function ItemCard({ item }: ItemCardProps) {
    return (
        <Link href={`/${item.regionSlug}/${item.itemSlug}`} className="block group">
            <article
                className={`h-full p-3 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 ${unifiedColors.bg} transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1`}
            >
                {/* ヘッダー */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        {/* カテゴリー名はRegionalItemに直接含まれていないため、必要ならLookup追加か、Propsで渡すか。
                            一旦、regionNameを表示。カテゴリー名は親コンポーネントから渡す設計も考えられるが、
                            RegionalItem単体で完結させるなら、Airtable側でCategoryNameもLookupしておくと良い。
                            現状の型定義では categoryName はない。
                            とりあえず regionName を表示する。
                         */}
                        <span className={`w-fit px-2 py-0.5 text-[9px] sm:text-xs font-bold rounded-full ${unifiedColors.badge}`}>
                            {item.regionName}
                        </span>
                    </div>
                    <span className="text-[9px] sm:text-xs text-slate-400 font-medium">
                        {new Date(item.createdAt).toLocaleDateString("ja-JP")}
                    </span>
                </div>

                {/* タイトル */}
                <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                </h3>

                {/* 説明 - 2列モバイルでは非表示にして高さを抑える */}
                <p className="hidden sm:block text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                    {item.description}
                </p>

                {/* リンクテキスト */}
                <span className={`inline-flex items-center text-[11px] sm:text-sm font-semibold ${unifiedColors.text} group-hover:translate-x-1 transition-transform duration-200`}>
                    詳しく見る
                </span>
            </article>
        </Link>
    );
}

