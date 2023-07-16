import Wrapper from "./wrapper";
import Image from "next/image";
import First from 'public/SalePic.png'
import Second from 'public/SalePic2.png';
import Third from 'public/SalePic3.png';

export default function Promotions() {
    return(
        <div className="flex w-full justify-center items-center mt-10">
            <Wrapper>
                <div className="flex flex-col w-full justify-between items-center">
                    <h1 className="text-lg tracking-widest text-blue-500 dark:text-blue-200 font-bold mb-6">
                        PROMOTIONS
                    </h1>
                    <h1 className="text-3xl lg:text-4xl font-extrabold mb-8">
                        Our Promotions Events
                    </h1>
                    <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-7">
                        {/* Right Side */}
                        <div className="flex flex-col justify-between items-center w-3/6 gap-5">
                            {/* Upper Side */}
                            <div className="flex justify-around items-center w-[80vw] px-5 lg:px-0 lg:w-full bg-gray-600 dark:bg-gray-800 text-white py-9 rounded-md">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold">
                                        GET UP TO 60%
                                    </h2>
                                    <h3 className="text-xl font-medium">
                                        For the summer season
                                    </h3>
                                </div>
                                <div>
                                    <Image src={First} alt="" width={200} height={200} />
                                </div>
                            </div>
                            {/* Lower Side */}
                            <div className="justify-between items-center flex flex-col py-12 w-[80vw] px-5 lg:px-0 lg:w-full bg-gray-800 dark:bg-gray-900 text-white rounded-lg">
                                <h1 className="text-4xl font-bold">
                                    GET 30% OFF
                                </h1>
                                <div className="mt-3 flex flex-col justify-between items-center">
                                    <h3 className="font-semibold text-xl mb-2">
                                        USE PROMO CODE
                                    </h3>
                                    <button className="bg-gray-500 dark:bg-gray-300 dark:text-black font-semibold rounded-md px-5 py-2">
                                        D I N E W E E K E N D S A L E
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Left Side */}
                        <div className="flex flex-col lg:flex-row gap-5 h-full w-3/6 justify-between items-center">
                            {/* Left Side */}
                            <div className="h-full">
                                <div className="flex flex-row lg:flex-col lg:py-10 justify-between w-[80vw] lg:w-auto items-center px-2 rounded-md h-full text-black dark:text-white bg-orange-300 dark:bg-amber-700">
                                    <div className="flex flex-col">
                                        <h3 className="text-base lg:text-lg font-medium mb-1 lg:mb-0">
                                            Flex SweatShirt
                                        </h3>
                                        <div className="flex gap-x-2">
                                            <h4 className="line-through">
                                                $100.00
                                            </h4>
                                            <h4 className="font-medium text-lg">
                                                $75.00
                                            </h4>
                                        </div>
                                    </div>
                                    <Image src={Second} alt="" />
                                </div>
                            </div>
                            {/* Right Side */}
                            <div className="h-full">
                                <div className="flex flex-row lg:flex-col lg:py-9 justify-between w-[80vw] lg:w-auto items-center px-2 rounded-md h-full text-black dark:text-white bg-gray-300 dark:bg-gray-900">
                                    <div className="flex flex-col">
                                        <h3 className="text-base lg:text-lg font-medium mb-1 lg:mb-0">
                                            Flex Push Button Bomber
                                        </h3>
                                        <div className="flex gap-x-2">
                                            <h4 className="line-through">
                                                $225.00
                                            </h4>
                                            <h4 className="font-medium text-lg">
                                                $190.00
                                            </h4>
                                        </div>
                                    </div>
                                    <Image src={Third} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}