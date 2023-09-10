import Flex_Push_Button_Bomber from 'public/products/men/flex-push-button-bomber.png'
import Raglan_SweatShirt from 'public/products/men/raglan-sweatshirt.png'
import Image from 'next/image'
import Link from 'next/link'
import { getProductData, IProduct } from '../product/page'
import { urlForImage } from '@/sanity/lib/image'

export default async function Men() {
    const products: IProduct[] = await getProductData();
    return(
        <div className="flex items-center justify-center my-16">
            <div className='flex flex-col gap-24 md:flex-row'>
                {products.map((item) => {
                    if (item.category.category === "Male") {
                        return(
                            <Link key={item._id} href={`../product/${item.url}`} className='flex flex-col items-center justify-between mx-auto transition-all hover:scale-105 active:scale-95'>
                                <Image src={urlForImage(item.image).url()} width={250} height={470} alt="" />
                                <h2 className='text-xl font-semibold'>
                                    {item.title}
                                </h2>
                                <h3 className='text-lg font-semibold opacity-60'>
                                    {item.type}
                                </h3>
                                <h2 className='text-xl font-bold'>
                                    ${item.price}
                                </h2>
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}