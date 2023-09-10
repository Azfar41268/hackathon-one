import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest ) {
    const id = cookies().get("user_id")?.value

    const res = await db.select().from(cartTable).where(eq(cartTable.user_id, (id as unknown as string)))

    return NextResponse.json( res )
}