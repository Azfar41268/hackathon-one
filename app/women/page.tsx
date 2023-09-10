'use server';

import Wrapper from '../components/wrapper';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct, getProductData } from '../product/page';
import { urlForImage } from '@/sanity/lib/image';

export default async function Women() {
    const products: IProduct[] = await getProductData();
    return(
        <div className='flex items-center justify-center my-16'>
            <Wrapper>
                <div className='flex flex-wrap gap-48'>
                    {products.map((item) => {
                        if (item.category.category === "Female") {
                            return(
                                <div key={item._id} className='flex flex-col items-center justify-between duration-300 hover:scale-105'>
                                    <Link href={`../product/${item.url}`}>
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
                            )
                        }
                    })}
                </div>
            </Wrapper>
        </div>
    )
}