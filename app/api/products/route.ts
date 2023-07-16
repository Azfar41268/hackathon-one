import { NextResponse, NextRequest } from "next/server";
import { db, itemsTable, Item } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
    const url = request.nextUrl

    if (url.searchParams.has("url")) {
        const link = url.searchParams.get("url");
        const product = await sql`SELECT * FROM items WHERE url = '${link}';`;
        const products = product.rows;

        return NextResponse.json({ products });
    } else {
        const product = await sql`SELECT * FROM items;`;
        const products = product.rows;

        return NextResponse.json({ products });
    }
}