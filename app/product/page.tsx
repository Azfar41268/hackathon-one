"use client";

import Image from 'next/image';
import Wrapper from '../components/wrapper';
import Picture from "public/products/men/flex-push-button-bomber.png"
import Link from 'next/link';
import { client } from '@/lib/sanityClient';
import { Image as IImage } from 'sanity';
import { urlForImage } from '@/sanity/lib/image';
import { postCartApi } from '../components/cartApi';
import { toast } from 'react-hot-toast';

export interface IProduct {
    title: string,
    _id: number,
    price: number,
    type: string,
    url: string,
    image: IImage,
    category: {
        category: string
    },
}

export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"] {
        title,
        _id,
        price,
        type,
        image,
        url,
        category -> {
          category
        }
      }`)

      return res
};

export default async function Products() {
    // const { products } = await ApiCall("products");
    const products: IProduct[] = await getProductData();
    return(
        <div className='flex items-center justify-center pt-10'>
            <Wrapper>
                <div className='flex flex-col items-center justify-between gap-y-10'>
                    <div className='flex flex-col items-center justify-between w-full lg:flex-row'>
                        <div className='flex flex-wrap gap-x-52 gap-y-10'>
                            {products.map((item) => {

                                return(
                                    <div key={item._id} className='flex flex-col items-center justify-between gap-y-5'>
                                        <div className='flex flex-col items-center justify-between mx-auto duration-300 hover:scale-105'>
                                            <Link href={`./product/${item.url}`}>
                                                <Image src={urlForImage(item.image).url()} width={230} height={470} alt="" />
                                            </Link>
                                            <h2 className='text-xl font-semibold'>
                                                {item.title}
                                            </h2>
                                            <h3 className='text-lg font-semibold opacity-60'>
                                                {item.type}
                                            </h3>
                                            <h2 className='text-xl font-bold'>
                                                ${item.price}
                                            </h2>
                                        </div>
                                        <button onClick={() => {
                                            postCartApi(`${item._id}`, 1);
                                            toast.success(`${item.title} has been added to the cart`)
                                        }} className='px-4 py-2 text-lg font-medium text-white transition-all bg-black border-black rounded-md dark:bg-white border-1 dark:text-black hover:shadow-lg dark:hover:sahdow-white hover:invert hover:scale-105'>Add to Cart</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}