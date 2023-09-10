"use client";

import Image from 'next/image';
import Wrapper from '../../components/wrapper';
import Button from '@/app/components/button';
import { client } from '@/lib/sanityClient';
import { IProduct } from '../page';
import { urlForImage } from '@/sanity/lib/image';
import { Suspense, useState } from 'react';

export default async function ProductDetail( { params }: { params: { id: string | number } } ) {
    const [num, setNum] = useState(1);
    const [size, setSize] = useState("");
    const sizes = [
        {
            size: "XS",
            id: 1
        },
        {
            size: "S",
            id: 2
        },
        {
            size: "M",
            id: 3
        },
        {
            size: "L",
            id: 4
        },
        {
            size: "XL",
            id: 5
        },
    ];
    const { id } = params;
    async function getProductData() {
        const res = await client.fetch(`*[_type=="product" && url=="${id}"]{
            _id,
            title,
            image,
            price,
            type,
            category -> {
                category
            }
        }`)
        return res
    };
    const products: IProduct[] = await getProductData();
    // create an array of objects in sizes with size and border property then use it in map function to create the border without the need of useState.

    return(
        <div className='flex items-center justify-center w-full py-10'>
            <Wrapper>
                {products.map((product) => (
                    <div key={product._id} className='flex flex-col items-center justify-between'>
                        <div className='flex items-center justify-between gap-x-5'>
                            <div className='flex gap-x-10'>
                                <div className='w-fit h-fit'>
                                    <Image src={urlForImage(product.image).url()} alt="" height={100} width={90} />
                                </div>
                                <div>
                                    <Image src={urlForImage(product.image).url()} alt="" height={900} width={480} />
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-between w-fit'>
                                <h2 className='mb-2 text-2xl'>
                                    {product.title}
                                </h2>
                                <h3 className='mb-12 text-lg font-bold opacity-25'>
                                    {product.type}
                                </h3>
                                <h3 className='mb-3 text-xl'>
                                    Select Size
                                </h3>
                                <Suspense>
                                <div className='flex items-center justify-between gap-x-3'>
                                    {sizes.map((item) => (
                                        <button key={item.id} onClick={() => setSize(item.size)} className='w-10 h-10 font-bold text-gray-800 duration-300 bg-white rounded-full dark:bg-black dark:text-gray-100 hover:shadow-xl hover:dark:shadow-lg hover:dark:shadow-gray-50 hover:scale-105'>
                                            {item.size}
                                        </button>
                                    ))}
                                </div>
                                </Suspense>
                                <div className='flex items-center justify-between mt-5 gap-x-7'>
                                    <h2 className='text-lg font-medium'>
                                        Quantity
                                    </h2>
                                    <div className='flex items-center justify-between gap-x-3'>
                                        <button onClick={() => {
                                            if (num > 1) {
                                                setNum(num - 1);
                                            }
                                        }} className='w-12 h-12 text-lg bg-gray-200 rounded-full dark:bg-slate-950'>
                                            -
                                        </button>
                                        <h3 className='text-lg'>
                                            {num}
                                        </h3>
                                        <button onClick={() => setNum(num + 1)} className='w-12 h-12 text-lg bg-gray-200 rounded-full dark:bg-slate-950'>
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between w-full mt-7'>
                                    <Button product={product} quantity={num} />
                                    <h1 className='text-2xl font-semibold'>
                                        ${product.price}.00
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-between w-full pb-16 my-20 border-b-2 border-b-black dark:border-b-white'>
                            <div className='relative items-center justify-center w-full'>
                                <h2 className='text-xl font-bold'>
                                    Product Information
                                </h2>
                                <h1 className='absolute left-0 font-extrabold text-black/5 dark:text-white/5 text-8xl -top-7'>
                                    OVERVIEW
                                </h1>
                            </div>
                        </div>
                        <div className='flex gap-x-16'>
                            <h3 className='text-xl font-bold tracking-wider dark:text-gray-300 text-slate-500'>
                                Product Details
                            </h3>
                            <h3 className='text-lg lg:w-9/12'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </h3>
                        </div>
                        <div className='flex w-full mt-5 gap-x-24'>
                            <h3 className='text-xl font-bold tracking-wider dark:text-gray-300 text-slate-500'>
                                Product Care
                            </h3>
                            <ul className='flex flex-col ml-2 text-xl font-semibold list-disc text-slate-600 dark:text-gray-300'>
                                <li>Hand wash using cold water.</li>
                                <li>Do not using bleach.</li>
                                <li>Hang it to dry.</li>
                                <li>Iron on low temperature.</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </Wrapper>
        </div>
    )
}