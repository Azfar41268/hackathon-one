import Flex_Push_Button_Bomber from 'public/products/men/flex-push-button-bomber.png'
import Raglan_SweatShirt from 'public/products/men/raglan-sweatshirt.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Men() {
    return(
        <div className="flex justify-center items-center my-16">
            <div className='flex flex-col md:flex-row gap-24'>
                <Link href="../product/flex-push-button-bomber" className='flex flex-col hover:scale-105 transition-all active:scale-95 justify-between items-center'>
                    <Image src={Flex_Push_Button_Bomber} width={250} height={470} alt="" />
                    <h2 className='text-xl font-semibold'>
                        Flex Push Button Bomber
                    </h2>
                    <h3 className='text-lg font-semibold opacity-60'>
                        Jackets
                    </h3>
                    <h2 className='text-xl font-bold'>
                        $225
                    </h2>
                </Link>
                <Link href="../product/raglan-sweatshirt" className='flex flex-col hover:scale-105 transition-all active:scale-95 justify-between items-center'>
                    <Image src={Raglan_SweatShirt} width={250} height={470} alt="" />
                    <h2 className='text-xl font-semibold'>
                        Raglan Sweatshirt
                    </h2>
                    <h3 className='text-lg font-semibold opacity-60'>
                        Sweater
                    </h3>
                    <h2 className='text-xl font-bold'>
                        $195
                    </h2>
                </Link>
            </div>
        </div>
    )
}