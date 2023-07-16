import Wrapper from "./wrapper";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from "next/image";
import Her from 'public/hero.png';

export default function Hero() {
    return(
        <div className="flex w-full justify-center items-center">
            <Wrapper>
                <div className="flex flex-col lg:flex-row items-center justify-between mt-28">
                    {/* First Section */}
                    <div className="w-[50%] flex flex-col justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="bg-sky-100 rounded-lg py-3 px-4 text-blue-600 dark:bg-cyan-100 dark:text-sky-500 font-bold w-[106px]">
                                Sale 70%
                            </h2>
                            <h1 className="text-7xl font-bold mt-7">
                                An Industrial Take on Streetwear
                            </h1>
                            <h4 className="text-lg text-gray-600 dark:text-gray-100 mt-10">
                                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                            </h4>
                        </div>
                        <button className="flex mt-10 items-center justify-between text-lg gap-x-2 bg-black rounded-lg text-white dark:text-black dark:bg-white px-4 py-3">
                            <AiOutlineShoppingCart />
                            <div className="flex flex-col justify-between items-center w-full" >
                                <h1 className="font-semibold">
                                    Start
                                </h1>
                                <h1 className="font-semibold">
                                    Shopping
                                </h1>
                            </div>
                        </button>
                        {/* Images */}
                        <div className="mt-9 mb-10">
                            Images will be added soon
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="w-3/6">
                        <Image src={Her} alt="" />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}