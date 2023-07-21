import { NextRequest, NextResponse } from "next/server";
import { cartTable, db, itemsTable } from "@/app/lib/drizzle";
import { eq } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
    try {
        const cart = await db.select().from(cartTable).execute();
        return NextResponse.json({ cart });
    } catch(error) {
        return NextResponse.json({ error });
    }
}

export async function POST(request: NextRequest) {
    const req = await request.json();

    const cart = await db.select().from(cartTable).execute();
    for (let i = 1; i > cart.length; i++) {
        const itemName = cart[i].name;
        if (req.name !== itemName) {
            break;
        } else if (itemName === req.name) {
            cart[i].quantity++
            return NextResponse.json({ "message" : "Your item is already in the cart" });
        }
    }
    try {
        const cartItem = await db.insert(cartTable).values({
            ...req,
            name: req.name,
            type: req.type,
            price: req.price,
            quantity: req.quantity,
        }).execute();

        return NextResponse.json({ "message" : "Your item has been added to the cart" });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}

export async function DELETE(request: NextRequest) {
    const url = request.nextUrl

    if (url.searchParams.has("id")) {
        const id: number = url.searchParams.get("id");

        try {
            await db.delete(cartTable).where(eq(cartTable.id, id));
    
            return NextResponse.json({ "message": "Item has been removed from cart" });
        } catch (error) {
            return NextResponse.json({ error });
        }
    } else {
        return NextResponse.json({ "message": "Please enter the id field in the parameters" });
    }
}