import Script from "next/script";

interface WebSiteSchemaProps {
    name: string;
    url: string;
    description: string;
    searchUrl?: string;
}

interface ArticleSchemaProps {
    title: string;
    description: string;
    url: string;
    publishedTime: string;
    modifiedTime?: string;
    authorName?: string;
    images?: string[];
    categoryName?: string;
}

interface FAQSchemaProps {
    questions: { question: string; answer: string }[];
}

interface BreadcrumbSchemaProps {
    items: { name: string; url: string }[];
}

interface OrganizationSchemaProps {
    name: string;
    url: string;
    logo?: string;
    sameAs?: string[];
}

/**
 * Organization 構造化データ（サイト運営者情報用）
 */
export function OrganizationSchema({
    name,
    url,
    logo,
    sameAs = [],
}: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        url,
        ...(logo && {
            logo: {
                "@type": "ImageObject",
                url: logo,
            },
        }),
        ...(sameAs.length > 0 && { sameAs }),
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * WebSite 構造化データ（サイトトップ用）
 */
export function WebSiteSchema({
    name,
    url,
    description,
    searchUrl,
}: WebSiteSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        url,
        description,
        inLanguage: "ja-JP",
        ...(searchUrl && {
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${searchUrl}?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
            },
        }),
    };

    return (
        <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * Article 構造化データ（記事ページ用）
 * - aboutプロパティで「遺品整理」というトピックを明示
 */
export function ArticleSchema({
    title,
    description,
    url,
    publishedTime,
    modifiedTime,
    authorName = "遺品整理ガイド.jp編集部",
    images = [],
    categoryName,
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
            "@type": "Organization",
            name: authorName,
        },
        publisher: {
            "@type": "Organization",
            name: "遺品整理ガイド.jp",
            logo: {
                "@type": "ImageObject",
                url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/logo.png`,
            },
        },
        // 遺品整理に関する記事であることを明示
        about: [
            {
                "@type": "Thing",
                "name": "遺品整理",
                "sameAs": "https://ja.wikipedia.org/wiki/%E9%81%BA%E5%93%81%E6%95%B4%E7%90%86"
            },
            ...(categoryName ? [{
                "@type": "Thing",
                "name": categoryName
            }] : [])
        ],
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url
        },
        inLanguage: "ja-JP",
        ...(images.length > 0 && { image: images }),
    };

    return (
        <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * FAQPage 構造化データ（FAQ用）
 */
export function FAQSchema({ questions }: FAQSchemaProps) {
    if (!questions || questions.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: q.answer,
            },
        })),
    };

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * BreadcrumbList 構造化データ（パンくず用）
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    if (!items || items.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
interface HowToSchemaProps {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
    totalTime?: string; // ISO 8601 duration
}

/**
 * HowTo 構造化データ（ハウツー手順用）
 */
export function HowToSchema({
    name,
    description,
    steps,
    totalTime,
}: HowToSchemaProps) {
    if (!steps || steps.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        totalTime,
        step: steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.name,
            itemListElement: [
                {
                    "@type": "HowToDirection",
                    text: step.text,
                },
            ],
        })),
    };

    return (
        <Script
            id="howto-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ItemListSchemaProps {
    items: { name: string; url: string }[];
}

/**
 * ItemList 構造化データ（一覧ページ用）
 */
export function ItemListSchema({ items }: ItemListSchemaProps) {
    if (!items || items.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: item.url,
        })),
    };

    return (
        <Script
            id="itemlist-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
