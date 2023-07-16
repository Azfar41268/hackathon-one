import { NextResponse, NextRequest } from "next/server";
import { db, itemsTable, Item } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
    const products = await db.select().from(itemsTable).execute();

    return NextResponse.json({ products });
}