import { cartItem } from "@/lib/drizzle";
import { product } from "../store/slice/cartSlice";

export default async function ApiCall(url: string, method?: string, body?: product | cartItem) {
    if (body && method) {
        const res = await fetch(`https://hackathon-one-pi.vercel.app/api/${url}`, {
            cache: "no-store",
            method: method,
            body: JSON.stringify(body),
        });
        // const res = await fetch(`http://localhost:3000/api/${url}`, {
        //     cache: "no-store",
        //     method: method,
        //     body: JSON.stringify(body),
        // });
        // if (!res.ok) {
        //     throw new Error("Failed to fetch data!");
        // }
    
        return res.json();
    } else {
        const res = await fetch(`https://hackathon-one-pi.vercel.app/api/${url}`, {
            cache: "no-store",
        });
        // const res = await fetch(`http://localhost:3000/api/${url}`, {
        //     cache: "no-store",
        // });
        // if (!res.ok) {
        //     throw new Error("Failed to fetch data!");
        // }
    
        return res.json();
    }
}
