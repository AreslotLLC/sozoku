/**
 * カテゴリー (Categories Table)
 */
export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  itemCount?: number;
  metaTitle?: string;
  metaDescription?: string;
}

/**
 * 品目マスター (Items Table)
 * 地域別記事生成のための設定・CTA管理用マスター
 * ※このテーブル自体が記事ページになることはありません
 */
export interface Item {
  id: string;
  slug: string; // e.g. "sofa"
  itemName: string; // e.g. "ソファ"
  categorySlug: string;
  categoryName: string;
  prompt?: string; // AI生成用プロンプト

  // CTA & Affiliate Settings (一括管理用)
  affiliateUrl?: string;
  sidebarLinkUrl?: string;
  sidebarBannerHtml?: string;
  introCtaUrl?: string;
  introBannerHtml?: string;
  outroCtaUrl?: string;
  outroBannerHtml?: string;

  createdAt: string;
  updatedAt: string;
}

/**
 * 地域マスター (Regions Table)
 * 自治体ごとの情報を管理
 */
export interface Region {
  id: string;
  slug: string; // e.g. "kobe-shi"
  name: string; // e.g. "神戸市"
  prefecture: string; // e.g. "兵庫県"
  municipalityUrl?: string; // 自治体HP
  description?: string;
}

/**
 * 地域別記事 (RegionalItems Table)
 * Item x Region の掛け合わせコンテンツ
 */
export interface RegionalItem {
  id: string;
  itemSlug: string; // Link to Items
  regionSlug: string; // Link to Regions
  regionName: string; // Lookup from Regions
  title: string; // Generated Title e.g. "神戸市でのソファの処分方法"
  content: string; // Generated Content
  description: string;
  affiliateUrl?: string; // Override Affiliate URL
  status: "Draft" | "Published";
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Airtable Record Types
 */
export interface AirtableCategoryRecord {
  id: string;
  fields: {
    slug: string;
    name: string;
    description?: string;
    itemCount?: number;
    metaTitle?: string;
    metaDescription?: string;
  };
}

export interface AirtableItemRecord {
  id: string;
  fields: {
    Slug: string;
    ItemName: string;
    categorySlug: string; // Lookup or Text
    categoryName: string; // Lookup or Text
    prompt?: string;
    AffiliateURL?: string;
    SidebarLinkUrl?: string;
    SidebarBannerHtml?: string;
    IntroCtaUrl?: string;
    IntroBannerHtml?: string;
    OutroCtaUrl?: string;
    OutroBannerHtml?: string;
  };
}

export interface AirtableRegionRecord {
  id: string;
  fields: {
    slug: string;
    name: string;
    prefecture: string;
    MunicipalityURL?: string;
    description?: string;
  };
}

export interface AirtableRegionalItemRecord {
  id: string;
  fields: {
    itemSlug: string; // Lookup from Items
    regionSlug: string; // Lookup from Regions
    regionName: string; // Lookup from Regions
    title: string;
    MainContent: string;
    description: string;
    AffiliateURL?: string;
    Status?: "Draft" | "Published";
    metaTitle?: string;
    metaDescription?: string;
  };
}

/**
 * アフィリエイトリンク
 */
export interface AffiliateLink {
  id: string;
  label: string;
  url: string;
  description?: string;
  isPrimary?: boolean;
}

/**
 * 記事表示用Props（View層の統一インターフェース）
 */
export interface ArticleProps {
  title: string;
  description: string;
  content: string;
  categorySlug: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  affiliateLinks?: AffiliateLink[];
  regionName?: string;
  // CTA Props
  sidebarCta?: { url: string; html: string };
  introCta?: { url: string; html: string };
  outroCta?: { url: string; html: string };
}
