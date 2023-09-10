import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const url = request.nextUrl;

    if (url.searchParams.has("user_id")) {
        const id = url.searchParams.get("user_id") as string;
        try {
            const cart = await db.select().from(cartTable).where(eq(cartTable.user_id, id))
            return NextResponse.json( cart )
        } catch ( err ) {
            return NextResponse.json({ err });
        }
    } else {
        try {
            const cart = await db.select().from(cartTable);
            console.log(cart);
            return NextResponse.json( cart );
        } catch(error) {
            return NextResponse.json({ error });
        }
    }
}

export async function POST(request: NextRequest) {
    const req = await request.json();

    const uid = uuid();
    const setcookies = cookies()
    const user_id = cookies().get("user_id")?.value

    if (!user_id) {
        setcookies.set("user_id", uid);
    }

    try {
        await db.insert(cartTable).values({
            user_id: user_id as string,
            product_id: req.product_id ,
            quantity: req.quantity,
        }).execute();

        return NextResponse.json({ "message" : "Your item has been added to the cart" });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}

// export async function DELETE(request: NextRequest) {
//     const url = request.nextUrl

//     if (url.searchParams.has("id")) {
//         const id: number = url.searchParams.get("id");

//         try {
//             await db.delete(cartTable).where(eq(cartTable.id, id));
    
//             return NextResponse.json({ "message": "Item has been removed from cart" });
//         } catch (error) {
//             return NextResponse.json({ error });
//         }
//     } else {
//         return NextResponse.json({ "message": "Please enter the id field in the parameters" });
//     }
// }