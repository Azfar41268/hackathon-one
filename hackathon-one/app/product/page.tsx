import Imperial_Alpacca_Hoodie from 'public/products/women/imperial-alpacca-hoodie.png'
import Brushed_Raglan_Sweatshirt from 'public/products/women/brushed-raglan-sweatshirt.png';
import Cameryn_Sash_Tie_Dress from 'public/products/women/cameryn-sash-tie-dress.png';
import Flex_SweatShirt from 'public/products/women/flex-sweatshirt.png';
import Flex_Sweatpants from 'public/products/women/flex-sweatpants.png';
import Pink_Fleece_SweatPants from 'public/products/women/pink-fleece-sweatpants.png';
import Lite_SweatPants from 'public/products/women/lite-sweatpants.png';
import Muscle_Tank from 'public/products/women/muscle-tank.png';
import Brushed_Bomber from 'public/products/women/brushed-bomber.png';
import Flex_Push_Button_Bomber from 'public/products/men/flex-push-button-bomber.png';
import Raglan_SweatShirt from 'public/products/men/raglan-sweatshirt.png';
import Image from 'next/image';
import Wrapper from '../components/wrapper';
import Link from 'next/link';

export default function Products() {
    return(
        <div className='flex justify-center items-center pt-10'>
            <Wrapper>
                <div className='flex flex-col justify-between gap-y-10 items-center'>
                    <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
                        {/* 1 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/brushed-raglan-sweatshirt'>
                                <Image src={Brushed_Raglan_Sweatshirt} width={230} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Brushed Raglan Sweatshirt
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Sweater
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $195
                            </h2>
                        </div>
                        {/* 2 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/cameryn-sash-tie-dress'>
                                <Image src={Cameryn_Sash_Tie_Dress} width={230} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Cameryn Sash Tie Dress
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Dress
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $545
                            </h2>
                        </div>
                        {/* 3 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/flex-sweatshirt'>
                                <Image src={Flex_SweatShirt} width={230} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Flex Sweatshirt
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Sweater
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $175
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
                        {/* 4 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/flex-sweatpants'>
                                <Image src={Flex_Sweatpants} width={230} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Flex SweatPants
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Pants
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $175
                            </h2>
                        </div>
                        {/* 5 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/pink-fleece-sweatpants'>
                                <Image src={Pink_Fleece_SweatPants} width={230} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Pink Fleece SweatPants
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Pants
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $195
                            </h2>
                        </div>
                        {/* 6 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/lite-sweatpants'>
                                <Image src={Lite_SweatPants} width={230} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Lite SweatPants
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Pants
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $150
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
                        {/* 7 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/imperial-alpacca-hoodie'>
                                <Image src={Imperial_Alpacca_Hoodie} width={230} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Imperial Alpacca Hoodie
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Sweater
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $525
                            </h2>
                        </div>
                        {/* 8 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/flex-push-button-bomber'>
                                <Image src={Flex_Push_Button_Bomber} width={250} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Flex Push Button Bomber
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Jackets
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $225
                            </h2>
                        </div>
                        {/* 9 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/muscle-tank'>
                                <Image src={Muscle_Tank} width={230} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Muscle Tank
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                T-Shirts
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $75
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-x-56 w-full'>
                        {/* 10 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/brushed-bomber'>
                                <Image src={Brushed_Bomber} width={230} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Brushed Bomber
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Sweater
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $225
                            </h2>
                        </div>
                        {/* 11 */}
                        <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                            <Link href='./product/raglan-sweatshirt'>
                                <Image src={Raglan_SweatShirt} width={250} height={470} alt="" />
                            </Link>
                            <h2 className='text-xl font-semibold'>
                                Raglan Sweatshirt
                            </h2>
                            <h3 className='text-lg font-semibold opacity-60'>
                                Sweater
                            </h3>
                            <h2 className='text-xl font-bold'>
                                $195
                            </h2>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}