/**
 * 信頼性セクション - アイコンを排除したスマートなデザイン
 */
const trustItems = [
    {
        tag: "Safety",
        title: "自治体ルール準拠",
        description: "各自治体の最新処分ルールに基づいた正確な情報を掲載",
    },
    {
        tag: "Expert",
        title: "専門家監修",
        description: "遺品整理士・廃棄物処理の専門家が内容を監修",
    },
    {
        tag: "Latest",
        title: "定期的な情報更新",
        description: "法改正や制度変更に合わせて情報を随時アップデート",
    },
    {
        tag: "Quality",
        title: "実績に基づく知見",
        description: "数千件の遺品整理実績から得た実践的なノウハウ",
    },
];

export function TrustSignals() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <span className="text-[10px] font-black uppercase tracking-tighter text-white bg-primary px-2 py-0.5 rounded shadow-sm">
                                {item.tag}
                            </span>
                            <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
