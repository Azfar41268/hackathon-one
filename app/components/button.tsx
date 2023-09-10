'use client';

import { BsCart } from "react-icons/bs";
import toast from "react-hot-toast";
import { postCartApi } from "./cartApi";


export default function Button({ product, quantity } : { product: any, quantity: number }) {
    return(
        <button onClick={() => {
            postCartApi(`${product._id}`, quantity);
            toast.success(`${product.title} has been added to the cart`)
        }} className='flex items-center px-3 py-2 text-white duration-300 bg-gray-900 rounded-md gap-x-2 hover:scale-105 dark:text-black/90 dark:bg-slate-50'>
            <BsCart /> <h1>Add To Cart</h1>
        </button>
    )
}