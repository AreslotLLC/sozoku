/**
 * サイト全体の設定
 */
export const siteConfig = {
    name: "遺品整理ガイド.jp",
    baseUrl: "https://ihin-guide.jp",
    description: "あらゆるモノの処分方法データベース",
    publisher: "遺品整理ガイド.jp編集部",
};

/**
 * ガイドページの設定
 */
export const guidePages = {
    firstTime: {
        path: "/guide/first-time",
        title: "初めての遺品整理",
        publishedDate: "2026-01-07",
    },
    choosingCompany: {
        path: "/guide/choosing-company",
        title: "業者選びのコツ",
        publishedDate: "2026-01-07",
    },
    precautions: {
        path: "/guide/precautions",
        title: "注意点",
        publishedDate: "2026-01-07",
    },
    selfCare: {
        path: "/guide/self-care",
        title: "あなたへ",
        publishedDate: "2026-01-07",
    },
    digitalLegacy: {
        path: "/guide/digital-legacy",
        title: "デジタル遺品",
        publishedDate: "2026-01-08",
    },
    costBreakdown: {
        path: "/guide/cost-breakdown",
        title: "費用相場",
        publishedDate: "2026-01-09",
    },
};

/**
 * アフィリエイトリンク設定
 */
export const affiliateLinks = {
    quote: "https://ihin-guide.jp/quote", // 見積もりページ
    phone: "tel:0120-000-000", // 電話番号
};

/**
 * 法的ページの設定
 */
export const legalPages = {
    about: {
        path: "/about",
        title: "運営者情報",
    },
    privacyPolicy: {
        path: "/privacy-policy",
        title: "プライバシーポリシー",
    },
    disclaimer: {
        path: "/disclaimer",
        title: "免責事項",
    },
};
