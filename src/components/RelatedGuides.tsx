import Link from "next/link";
import { guidePages } from "@/lib/siteConfig";

interface RelatedGuidesProps {
    /** 現在のページのパスを除外するため */
    currentPath: string;
}

const allGuides = [
    {
        path: guidePages.firstTime.path,
        title: "初めての相続",
        description: "相続の基礎知識と手続きの流れ",
    },
    {
        path: guidePages.choosingCompany.path,
        title: "税理士選びのポイント",
        description: "相続専門税理士の選び方",
    },
    {
        path: guidePages.precautions.path,
        title: "相続手続きの注意点",
        description: "期限・書類・トラブル対策",
    },
    {
        path: guidePages.costBreakdown.path,
        title: "税理士費用の相場",
        description: "相続税申告の費用目安",
    },
    {
        path: guidePages.digitalLegacy.path,
        title: "デジタル資産の相続",
        description: "暗号資産・電子マネーの扱い",
    },
];

/**
 * 関連ガイドリンクセクション
 */
export function RelatedGuides({ currentPath }: RelatedGuidesProps) {
    const relatedGuides = allGuides.filter(
        (guide) => guide.path !== currentPath
    );

    return (
        <section className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                関連ガイド
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedGuides.map((guide) => (
                    <Link
                        key={guide.path}
                        href={guide.path}
                        className="group p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all"
                    >
                        <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                            {guide.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {guide.description}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
