import Airtable from "airtable";
import { Category, Item, Region, RegionalItem } from "@/types";

// Airtableが設定されているかチェック
const isAirtableConfigured =
    process.env.AIRTABLE_API_KEY &&
    process.env.AIRTABLE_API_KEY !== "your_api_key_here" &&
    process.env.AIRTABLE_BASE_ID &&
    process.env.AIRTABLE_BASE_ID !== "your_base_id_here";

// Airtable設定（設定されている場合のみ初期化）
const base = isAirtableConfigured
    ? new Airtable({
        apiKey: process.env.AIRTABLE_API_KEY,
    }).base(process.env.AIRTABLE_BASE_ID!)
    : null;

// テーブル名
const CATEGORIES_TABLE = "Categories";
const ITEMS_TABLE = "Items";
const REGIONS_TABLE = "Regions";
const REGIONAL_ITEMS_TABLE = "RegionalItems";

// フィールド名
// フィールド名
// フィールド名
const FIELDS = {
    // Common
    NAME: "name",
    DESCRIPTION: "description",
    STATUS: "Status",
    CREATED_AT: "createdAt",
    UPDATED_AT: "Last Modified Time",

    // Categories
    CATEGORY_TBL_SLUG: "slug",
    ITEM_COUNT: "itemCount",
    META_TITLE: "metaTitle",
    META_DESCRIPTION: "metaDescription",

    // Items (Master)
    ITEM_TBL_SLUG: "Slug",
    ITEM_NAME: "ItemName",
    CATEGORY_SLUG: "categorySlug",
    CATEGORY_NAME: "categoryName",
    PROMPT: "prompt",
    // CTA & Affiliate
    AFFILIATE_URL: "AffiliateURL",
    SIDEBAR_LINK_URL: "SidebarLinkUrl",
    SIDEBAR_BANNER_HTML: "SidebarBannerHtml",
    INTRO_CTA_URL: "IntroCtaUrl",
    INTRO_BANNER_HTML: "IntroBannerHtml",
    OUTRO_CTA_URL: "OutroCtaUrl",
    OUTRO_BANNER_HTML: "OutroBannerHtml",

    // Regions
    REGION_TBL_SLUG: "slug",
    PREFECTURE: "prefecture",
    MUNICIPALITY_URL: "MunicipalityURL",

    // RegionalItems (Content)
    ITEM_SLUG: "slug (from Items)",
    REGION_SLUG: "slug (from Regions)",
    REGION_NAME: "name (from Region)",
    TITLE: "Title",
    MAIN_CONTENT: "MainContent",
};

/**
 * 全カテゴリーを取得
 */
/**
 * 全カテゴリーを取得
 */
export async function getCategories(): Promise<Category[]> {
    if (!base) return getMockCategories();

    try {
        const records = await base(CATEGORIES_TABLE).select().all();
        return records.map((record) => ({
            id: record.id,
            slug: record.get(FIELDS.CATEGORY_TBL_SLUG) as string,
            name: record.get(FIELDS.NAME) as string,
            description: record.get(FIELDS.DESCRIPTION) as string | undefined,
            itemCount: record.get(FIELDS.ITEM_COUNT) as number | undefined,
            metaTitle: record.get(FIELDS.META_TITLE) as string | undefined,
            metaDescription: record.get(FIELDS.META_DESCRIPTION) as string | undefined,
        }));
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        return getMockCategories();
    }
}

/**
 * スラッグでカテゴリーを取得
 */
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
    if (!base) return getMockCategories().find((c) => c.slug === slug) || null;

    try {
        const records = await base(CATEGORIES_TABLE)
            .select({
                filterByFormula: `{${FIELDS.CATEGORY_TBL_SLUG}} = "${slug}"`,
                maxRecords: 1,
            })
            .all();

        if (records.length === 0) return null;

        const record = records[0];
        return {
            id: record.id,
            slug: record.get(FIELDS.CATEGORY_TBL_SLUG) as string,
            name: record.get(FIELDS.NAME) as string,
            description: record.get(FIELDS.DESCRIPTION) as string | undefined,
            itemCount: record.get(FIELDS.ITEM_COUNT) as number | undefined,
            metaTitle: record.get(FIELDS.META_TITLE) as string | undefined,
            metaDescription: record.get(FIELDS.META_DESCRIPTION) as string | undefined,
        };
    } catch (error) {
        console.error("Failed to fetch category:", error);
        return null;
    }
}

/**
 * カテゴリー別に地域別記事を取得
 * RegionalItemsテーブルのLookupフィールド「categorySlug (from Items)」を使用して直接フィルタリング
 */
export async function getRegionalItemsByCategory(categorySlug: string, regionSlug?: string): Promise<RegionalItem[]> {
    if (!base) {
        let items = getMockRegionalItems();
        // モックデータではカテゴリー紐付けが簡易的なため、itemSlugから推測する等の処理が必要だが、
        // ここでは単純に全件返すか、実装に合わせて調整
        return items;
    }

    try {
        // RegionalItemsテーブルのLookupフィールドを直接使用
        let filterFormula = `AND({categorySlug (from Items)} = "${categorySlug}", {${FIELDS.STATUS}} = "Published")`;

        if (regionSlug) {
            filterFormula = `AND({categorySlug (from Items)} = "${categorySlug}", {${FIELDS.REGION_SLUG}} = "${regionSlug}", {${FIELDS.STATUS}} = "Published")`;
        }

        const records = await base(REGIONAL_ITEMS_TABLE)
            .select({
                filterByFormula: filterFormula,
                sort: [{ field: FIELDS.CREATED_AT, direction: "desc" }],
            })
            .all();

        return records.map(mapRecordToRegionalItem);
    } catch (error) {
        console.error("Failed to fetch regional items by category:", error);
        return [];
    }
}

/**
 * 地域別記事の詳細を取得
 */
export async function getRegionalItem(
    itemSlug: string,
    regionSlug: string
): Promise<RegionalItem | null> {
    if (!base) {
        return getMockRegionalItems().find(
            (ri) => ri.itemSlug === itemSlug && ri.regionSlug === regionSlug
        ) || null;
    }

    try {
        const records = await base(REGIONAL_ITEMS_TABLE)
            .select({
                filterByFormula: `AND({${FIELDS.ITEM_SLUG}} = "${itemSlug}", {${FIELDS.REGION_SLUG}} = "${regionSlug}", {${FIELDS.STATUS}} = "Published")`,
                maxRecords: 1,
            })
            .all();

        if (records.length === 0) return null;

        return mapRecordToRegionalItem(records[0]);
    } catch (error) {
        console.error("Failed to fetch regional item:", error);
        return null;
    }
}

/**
 * 最新の地域別記事を取得
 */
export async function getLatestRegionalItems(limit: number = 6, regionSlug?: string): Promise<RegionalItem[]> {
    if (!base) return getMockRegionalItems().slice(0, limit);

    try {
        let filterFormula = `{${FIELDS.STATUS}} = "Published"`;
        if (regionSlug) {
            filterFormula = `AND({${FIELDS.STATUS}} = "Published", {${FIELDS.REGION_SLUG}} = "${regionSlug}")`;
        }

        const records = await base(REGIONAL_ITEMS_TABLE)
            .select({
                filterByFormula: filterFormula,
                maxRecords: limit,
                sort: [{ field: FIELDS.CREATED_AT, direction: "desc" }],
            })
            .all();

        return records.map(mapRecordToRegionalItem);
    } catch (error) {
        console.error("Failed to fetch latest regional items:", error);
        return [];
    }
}

/**
 * 全地域別記事を取得（サイトマップ用）
 */
export async function getAllRegionalItems(): Promise<RegionalItem[]> {
    if (!base) return getMockRegionalItems();

    try {
        const records = await base(REGIONAL_ITEMS_TABLE)
            .select({
                filterByFormula: `{${FIELDS.STATUS}} = "Published"`,
                sort: [{ field: FIELDS.CREATED_AT, direction: "desc" }],
            })
            .all();

        return records.map(mapRecordToRegionalItem);
    } catch (error) {
        console.error("Failed to fetch all regional items:", error);
        return [];
    }
}

/**
 * 全カテゴリーのスラッグを取得（静的パス生成用）
 */
/**
 * 全カテゴリーのスラッグを取得（静的パス生成用）
 */
export async function getAllCategorySlugs(): Promise<string[]> {
    if (!base) return getMockCategories().map((cat) => cat.slug);

    try {
        const records = await base(CATEGORIES_TABLE)
            .select({
                fields: [FIELDS.CATEGORY_TBL_SLUG],
            })
            .all();

        return records.map((record) => record.get(FIELDS.CATEGORY_TBL_SLUG) as string);
    } catch (error) {
        console.error("Failed to fetch category slugs:", error);
        return getMockCategories().map((cat) => cat.slug);
    }
}

/**
 * アイテムマスター情報を取得（CTA情報などの取得用）
 */
export async function getItemMaster(slug: string): Promise<Item | null> {
    if (!base) return getMockItems().find(i => i.slug === slug) || null;

    try {
        const records = await base(ITEMS_TABLE)
            .select({
                filterByFormula: `{${FIELDS.ITEM_TBL_SLUG}} = "${slug}"`,
                maxRecords: 1,
            })
            .all();

        if (records.length === 0) return null;

        return mapRecordToItem(records[0]);
    } catch (error) {
        console.error("Failed to fetch item master:", error);
        return null;
    }
}

/**
 * 全地域を取得
 */
export async function getRegions(): Promise<Region[]> {
    if (!base) return getMockRegions();

    try {
        const records = await base(REGIONS_TABLE).select().all();
        return records.map((record) => ({
            id: record.id,
            slug: record.get(FIELDS.REGION_TBL_SLUG) as string,
            name: record.get(FIELDS.NAME) as string,
            prefecture: record.get(FIELDS.PREFECTURE) as string,
            municipalityUrl: record.get(FIELDS.MUNICIPALITY_URL) as string | undefined,
            description: record.get(FIELDS.DESCRIPTION) as string | undefined,
        }));
    } catch (error) {
        console.error("Failed to fetch regions:", error);
        return getMockRegions();
    }
}

// Helper Mappers

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapRecordToItem(record: any): Item {
    return {
        id: record.id,
        slug: record.get(FIELDS.ITEM_TBL_SLUG) as string,
        itemName: record.get(FIELDS.ITEM_NAME) as string,
        categorySlug: record.get(FIELDS.CATEGORY_SLUG) as string,
        categoryName: record.get(FIELDS.CATEGORY_NAME) as string,
        prompt: record.get(FIELDS.PROMPT) as string | undefined,
        affiliateUrl: record.get(FIELDS.AFFILIATE_URL) as string | undefined,
        sidebarLinkUrl: record.get(FIELDS.SIDEBAR_LINK_URL) as string | undefined,
        sidebarBannerHtml: record.get(FIELDS.SIDEBAR_BANNER_HTML) as string | undefined,
        introCtaUrl: record.get(FIELDS.INTRO_CTA_URL) as string | undefined,
        introBannerHtml: record.get(FIELDS.INTRO_BANNER_HTML) as string | undefined,
        outroCtaUrl: record.get(FIELDS.OUTRO_CTA_URL) as string | undefined,
        outroBannerHtml: record.get(FIELDS.OUTRO_BANNER_HTML) as string | undefined,
        createdAt: record._rawJson.createdTime,
        updatedAt: record.get(FIELDS.UPDATED_AT) || record._rawJson.createdTime,
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapRecordToRegionalItem(record: any): RegionalItem {
    // Lookup fields might be arrays or single values depending on Airtable configuration
    const itemSlug = record.get(FIELDS.ITEM_SLUG);
    const regionSlug = record.get(FIELDS.REGION_SLUG);
    const regionName = record.get(FIELDS.REGION_NAME);

    // Helper to extract string from potential array
    const extractString = (val: any): string => {
        if (Array.isArray(val)) return val[0] || "";
        return val || "";
    };

    return {
        id: record.id,
        itemSlug: extractString(itemSlug),
        regionSlug: extractString(regionSlug),
        regionName: extractString(regionName),
        title: record.get(FIELDS.TITLE) as string,
        content: record.get(FIELDS.MAIN_CONTENT) as string,
        description: record.get(FIELDS.DESCRIPTION) as string,
        affiliateUrl: record.get(FIELDS.AFFILIATE_URL) as string | undefined,
        status: record.get(FIELDS.STATUS) as "Draft" | "Published",
        metaTitle: record.get(FIELDS.META_TITLE) as string | undefined,
        metaDescription: record.get(FIELDS.META_DESCRIPTION) as string | undefined,
        createdAt: record._rawJson.createdTime,
        updatedAt: record.get(FIELDS.UPDATED_AT) || record._rawJson.createdTime,
    };
}

// ========================================
// モックデータ（開発用）
// ========================================

function getMockCategories(): Category[] {
    return [
        { id: "cat1", slug: "furniture", name: "家具", description: "家具の処分", itemCount: 10 },
        { id: "cat2", slug: "electronics", name: "家電", description: "家電の処分", itemCount: 15 },
    ];
}

function getMockItems(): Item[] {
    return [
        {
            id: "item1",
            slug: "sofa",
            itemName: "ソファ",
            categorySlug: "furniture",
            categoryName: "家具",
            createdAt: "2024-01-01",
            updatedAt: "2024-01-01",
        },
        {
            id: "item2",
            slug: "fridge",
            itemName: "冷蔵庫",
            categorySlug: "electronics",
            categoryName: "家電",
            createdAt: "2024-01-01",
            updatedAt: "2024-01-01",
        },
    ];
}

function getMockRegions(): Region[] {
    return [
        { id: "reg1", slug: "kobe-shi", name: "神戸市", prefecture: "兵庫県" },
        { id: "reg2", slug: "osaka-shi", name: "大阪市", prefecture: "大阪府" },
    ];
}

function getMockRegionalItems(): RegionalItem[] {
    return [
        {
            id: "ri1",
            itemSlug: "sofa",
            regionSlug: "kobe-shi",
            regionName: "神戸市",
            title: "神戸市でのソファの処分方法",
            content: "# 神戸市でのソファ処分\n\n神戸市では...",
            description: "神戸市でのソファの捨て方解説",
            status: "Published",
            createdAt: "2024-01-01",
            updatedAt: "2024-01-01",
        },
        {
            id: "ri2",
            itemSlug: "fridge",
            regionSlug: "osaka-shi",
            regionName: "大阪市",
            title: "大阪市での冷蔵庫の処分方法",
            content: "# 大阪市での冷蔵庫処分\n\n大阪市では...",
            description: "大阪市での冷蔵庫の捨て方解説",
            status: "Published",
            createdAt: "2024-01-02",
            updatedAt: "2024-01-02",
        },
    ];
}

