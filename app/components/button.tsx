'use client';

import { BsCart } from "react-icons/bs";
import { cartActions } from "../store/slice/cartSlice";
import type { product } from "../store/slice/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";


export default function Button({ product } : { product: product }) {
    const { addToCart } = cartActions;
    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(addToCart({ quantity: 1, product: product }));
    }
    return(
        <button onClick={addItem} className='flex gap-x-2 items-center px-3 py-2 rounded-md hover:scale-105 duration-300 text-white dark:text-black/90 bg-gray-900 dark:bg-slate-50'>
            <BsCart /> <h1>Add To Cart</h1>
        </button>
    )
}