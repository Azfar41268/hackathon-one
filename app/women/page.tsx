import Imperial_Alpacca_Hoodie from 'public/products/women/imperial-alpacca-hoodie.png'
import Brushed_Raglan_Sweatshirt from 'public/products/women/brushed-raglan-sweatshirt.png';
import Cameryn_Sash_Tie_Dress from 'public/products/women/cameryn-sash-tie-dress.png';
import Flex_SweatShirt from 'public/products/women/flex-sweatshirt.png';
import Flex_Sweatpants from 'public/products/women/flex-sweatpants.png';
import Pink_Fleece_SweatPants from 'public/products/women/pink-fleece-sweatpants.png';
import Lite_SweatPants from 'public/products/women/lite-sweatpants.png';
import Muscle_Tank from 'public/products/women/muscle-tank.png';
import Brushed_Bomber from 'public/products/women/brushed-bomber.png';
import Wrapper from '../components/wrapper';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct, getProductData } from '../product/page';
import { urlForImage } from '@/sanity/lib/image';

export default async function Women() {
    const products: IProduct[] = await getProductData();
    return(
        <div className='flex justify-center items-center my-16'>
            <Wrapper>
                <div className='flex flex-wrap gap-48'>
                    {products.map((item) => {
                        if (item.category.category === "Female") {
                            return(
                                <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
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