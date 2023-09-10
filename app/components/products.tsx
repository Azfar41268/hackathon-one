import Wrapper from "./wrapper";
import Image from "next/image";
import First from 'public/products/women/brushed-raglan-sweatshirt.png';
import Second from 'public/products/women/cameryn-sash-tie-dress.png';
import Third from 'public/products/women/flex-sweatshirt.png';
import Fourth from 'public/products/women/flex-sweatpants.png';
import Link from "next/link";

export default function Products() {
    return(
        <div className="w-full flex flex-col justify-between items-center mt-20">
            <Wrapper>
                <div className="flex flex-col justify-between items-center w-full">
                    <div className="w-full justify-between items-center flex flex-col">
                        <h2 className="text-lg text-blue-400 dark:text-blue-200 font-bold tracking-wider mb-2">
                            PRODUCTS
                        </h2>
                        <h1 className="text-5xl font-bold mb-8">
                            Check What We Have
                        </h1>
                    </div>
                    <div className="flex flex-col lg:flex-row p-10 gap-5 items-center">
                        <Link href={"/product/brushed-raglan-sweatshirt"} className="flex flex-col justify-between items-center hover:scale-110 duration-300 transition-all">
                            <Image src={First} alt="" width={400} height={900} />
                            <h1 className="font-medium text-[19px] mt-3 mb-2">
                                Brushed Raglan Sweatshirt
                            </h1>
                            <h1 className="font-semibold text-xl">
                                $195
                            </h1>
                        </Link>
                        <Link href={"/product/cameryn-sash-tie-dress"} className="flex flex-col justify-between items-center hover:scale-110 duration-300 transition-all">
                            <Image src={Second} alt="" width={400} height={900} />
                            <h1 className="font-medium text-[19px] mt-3 mb-2">
                                Cameryn Sash Tie Dress
                            </h1>
                            <h1 className="font-semibold text-xl">
                                $545
                            </h1>
                        </Link>
                        <Link href={"/product/flex-sweatshirt"} className="flex flex-col justify-between items-center hover:scale-110 duration-300 transition-all">
                            <Image src={Third} alt="" width={400} height={900} />
                            <h1 className="font-medium text-[19px] mt-3 mb-2">
                                Flex Sweatshirt
                            </h1>
                            <h1 className="font-semibold text-xl">
                                $175
                            </h1>
                        </Link>
                        <Link href={"/product/flex-sweatpants"} className="flex flex-col justify-between items-center hover:scale-110 duration-300 transition-all">
                            <Image src={Fourth} alt="" width={400} height={900} />
                            <h1 className="font-medium text-[19px] mt-3 mb-2">
                                Flex Sweatpants
                            </h1>
                            <h1 className="font-semibold text-xl">
                                $175
                            </h1>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}