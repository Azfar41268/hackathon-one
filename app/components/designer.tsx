import Wrapper from "./wrapper";
import Design from 'public/products/women/imperial-alpacca-hoodie.png';
import Image from "next/image";


export default function Designer() {
    return(
        <div className="flex w-full justify-center items-center my-10">
            <Wrapper>
                <div className="flex flex-col lg:flex-row justify-around items-center">
                    {/* First Section */}
                    <div className="flex flex-wrap gap-y-16 gap-x-12 lg:gap-x-20 lg:w-[43%] pt-40 relative mb-3">
                        {/* First */}
                        <div className="text-xl font-semibold flex flex-col gap-5 w-[40%]">
                            <h1>Using Good Quality Materials</h1>
                            <h1 className="font-normal text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit</h1>
                        </div>
                        {/* Second */}
                        <div className="text-xl font-semibold flex flex-col gap-5 w-[40%]">
                            <h1>100% HandMade Products</h1>
                            <h1 className="font-normal text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit</h1>
                        </div>
                        {/* Third */}
                        <div className="text-xl font-semibold flex flex-col gap-5 w-[40%]">
                            <h1>Modern Fashion Design</h1>
                            <h1 className="font-normal text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit</h1>
                        </div>
                        {/* Fourth */}
                        <div className="text-xl font-semibold flex flex-col gap-5 w-[40%]">
                            <h1>Discount For Bulk Orders</h1>
                            <h1 className="font-normal text-lg">Lorem ipsum dolor sit amt, consectetur adipiscing elit</h1>
                        </div>
                        <div className="absolute text-[80px] lg:text-9xl font-extrabold opacity-10">
                            Different From Others
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="flex flex-col justify-between items-center w-[43%] h-full">
                        <h1 className="text-5xl font-bold mb-4 w-screen lg:w-auto">
                            Unique and Authentic Vintage Designer Jewellery
                        </h1>
                        <div className="flex flex-col lg:flex-row justify-between items-center w-screen lg:w-full h-full gap-x-5">
                            <Image src={Design} width={300} height={720} alt="" />
                            <div className="flex flex-col justify-between items-center gap-y-4">
                                <h2 className="text-lg text-gray-400 dark:text-gray-100">
                                    This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                                </h2>
                                <button className="w-24 bg-gray-900 dark:bg-slate-200 text-white dark:text-gray-950 rounded-md hover:scale-105 duration-200 py-2">
                                    See All Products
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}