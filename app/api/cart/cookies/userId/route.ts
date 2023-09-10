import { client } from "@/lib/sanityClient";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest ) {
    const url = request.nextUrl;
    
    const id = url.searchParams.get("id");

    const res = await client.fetch(`*[_type=="product" && _id=="${id}"]{
        category -> {
          category
        },
        type,
        image,
        price,
        url,
        title
      }`);
    
    return NextResponse.json( res );
}