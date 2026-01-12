import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getItemMaster } from "@/lib/airtable";

/**
 * Makeなどの外部サービスからキャッシュ更新をトリガーするためのWebhookエンドポイント
 * GET /api/revalidate?secret=TOKEN&slug=sofa&region=kobe-shi
 */
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const secret = searchParams.get("secret");
    const slug = searchParams.get("slug"); // itemSlug
    const region = searchParams.get("region"); // regionSlug

    // トークンチェック
    if (secret !== process.env.REVALIDATION_TOKEN) {
        return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    if (!slug || !region) {
        return NextResponse.json({ message: "Slug and Region are required" }, { status: 400 });
    }

    try {
        // アイテムマスター情報を取得してカテゴリーを特定
        const itemMaster = await getItemMaster(slug);

        // 記事詳細、カテゴリー、トップページを再生成
        const path = `/${region}/${slug}`;
        revalidatePath(path);
        revalidatePath("/"); // 最新記事一覧を更新するため
        revalidatePath("/sitemap.xml"); // サイトマップを更新

        if (itemMaster) {
            revalidatePath(`/category/${itemMaster.categorySlug}`);
        }

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            path: path,
            categoryPath: itemMaster ? `/category/${itemMaster.categorySlug}` : "item master not found"
        });
    } catch (err) {
        console.error("Revalidation error:", err);
        return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
    }
}
