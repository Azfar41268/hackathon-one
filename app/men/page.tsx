import Flex_Push_Button_Bomber from 'public/products/men/flex-push-button-bomber.png'
import Raglan_SweatShirt from 'public/products/men/raglan-sweatshirt.png'
import Image from 'next/image'
import Link from 'next/link'
import { getProductData, IProduct } from '../product/page'
import { urlForImage } from '@/sanity/lib/image'

export default async function Men() {
    const products: IProduct[] = await getProductData();
    return(
        <div className="flex justify-center items-center my-16">
            <div className='flex flex-col md:flex-row gap-24'>
                {products.map((item) => {
                    if (item.category.category === "Male") {
                        return(
                            <Link href={`../product/${item.url}`} className='flex flex-col mx-auto hover:scale-105 transition-all active:scale-95 justify-between items-center'>
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