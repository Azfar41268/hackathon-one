"use client";

export async function getCartApi() {
    // const res = await fetch("http://localhost:3000/api/cart")
    const res = await fetch("http://hackathon-one-pi.vercel.app/api/cart")

    if (!res.ok) {
        console.log("Error")
    };

    return res.json();
}

export async function postCartApi(id: string, quantity: number) {
    // const res = await fetch("http://localhost:3000/api/cart", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         product_id: id,
    //         quantity: quantity,
    //     })
    // })
    const res = await fetch("http://hackathon-one-pi.vercel.app/api/cart", {
        method: "POST",
        body: JSON.stringify({
            product_id: id
        })
    })

    if (!res.ok) {
        console.log("Error")
    };

    // return res.json();
}