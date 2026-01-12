import Link from "next/link";
import { guidePages } from "@/lib/siteConfig";

interface RelatedGuidesProps {
    /** 現在のページのパスを除外するため */
    currentPath: string;
}

const allGuides = [
    {
        path: guidePages.firstTime.path,
        title: "初めての遺品整理",
        description: "法的手続きと片付けの実践ガイド",
    },
    {
        path: guidePages.choosingCompany.path,
        title: "業者選びのコツ",
        description: "相見積もりと質問チェックリスト",
    },
    {
        path: guidePages.precautions.path,
        title: "気を付けるポイント",
        description: "メンタルケア・空き家リスク対策",
    },
    {
        path: guidePages.selfCare.path,
        title: "あなたへ",
        description: "心と体を守りながら進めるガイド",
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
