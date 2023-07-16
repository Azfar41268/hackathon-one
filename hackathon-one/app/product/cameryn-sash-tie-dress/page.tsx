'use client';

import Picture from 'public/products/women/cameryn-sash-tie-dress.png';
import Image from 'next/image';
import Wrapper from '../../components/wrapper';
import { BsCart } from 'react-icons/bs';
import Button from '@/app/components/button';

export default async function ProductDetail() {
    return(
        <div className='flex justify-center items-center w-full py-10'>
            <Wrapper>
                <div className='flex flex-col justify-between items-center'>
                    <div className='flex justify-between items-center gap-x-5'>
                        <div className='flex gap-x-10'>
                            <div className='w-fit h-fit'>
                                <Image src={Picture} alt="" height={100} width={90} />
                            </div>
                            <div>
                                <Image src={Picture} alt="" height={900} width={480} />
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center w-fit'>
                            <h2 className='text-2xl mb-2'>
                                Cameryn Sash Tie Dress
                            </h2>
                            <h3 className='text-lg font-bold mb-12 opacity-25'>
                                Dress
                            </h3>
                            <h3 className='text-xl mb-3'>
                                Select Size
                            </h3>
                            <div className='flex justify-between items-center gap-x-3'>
                                <button className='w-10 h-10 bg-white dark:bg-black text-gray-800 dark:text-gray-100 rounded-full hover:shadow-xl hover:dark:shadow-lg hover:dark:shadow-gray-50 hover:scale-105 duration-300 font-bold'>
                                    XS
                                </button>
                                <button className='w-10 h-10 bg-white dark:bg-black text-gray-800 dark:text-gray-100 rounded-full hover:shadow-xl hover:dark:shadow-lg hover:dark:shadow-gray-50 hover:scale-105 duration-300 font-bold'>
                                    S
                                </button>
                                <button className='w-10 h-10 bg-white dark:bg-black text-gray-800 dark:text-gray-100 rounded-full hover:shadow-xl hover:dark:shadow-lg hover:dark:shadow-gray-50 hover:scale-105 duration-300 font-bold'>
                                    M
                                </button>
                                <button className='w-10 h-10 bg-white dark:bg-black text-gray-800 dark:text-gray-100 rounded-full hover:shadow-xl hover:dark:shadow-lg hover:dark:shadow-gray-50 hover:scale-105 duration-300 font-bold'>
                                    L
                                </button>
                                <button className='w-10 h-10 bg-white dark:bg-black text-gray-800 dark:text-gray-100 rounded-full hover:shadow-xl hover:dark:shadow-lg hover:dark:shadow-gray-50 hover:scale-105 duration-300 font-bold'>
                                    XL
                                </button>
                            </div>
                            <div className='flex justify-between items-center gap-x-7 mt-5'>
                                <h2 className='text-lg font-medium'>
                                    Quantity
                                </h2>
                                <div className='flex justify-between items-center gap-x-3'>
                                    <button className='w-12 h-12 rounded-full text-lg bg-gray-200 dark:bg-slate-950'>
                                        -
                                    </button>
                                    <h3 className='text-lg'>
                                        1
                                    </h3>
                                    <button className='w-12 h-12 rounded-full text-lg bg-gray-200 dark:bg-slate-950'>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='flex w-full justify-between items-center mt-7'>
                                <Button />
                                <h1 className='text-2xl font-semibold'>
                                    $525.00
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='my-20 flex flex-col justify-between items-center pb-16 border-b-2 border-b-black dark:border-b-white w-full'>
                        <div className='w-full justify-center items-center relative'>
                            <h2 className='font-bold text-xl'>
                                Product Information
                            </h2>
                            <h1 className='absolute text-black/5 dark:text-white/5 text-8xl font-extrabold -top-7 left-0'>
                                OVERVIEW
                            </h1>
                        </div>
                    </div>
                    <div className='flex gap-x-16'>
                        <h3 className='text-xl font-bold dark:text-gray-300 text-slate-500 tracking-wider'>
                            Product Details
                        </h3>
                        <h3 className='text-lg lg:w-9/12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h3>
                    </div>
                    <div className='flex gap-x-24 w-full mt-5'>
                        <h3 className='text-xl font-bold dark:text-gray-300 text-slate-500 tracking-wider'>
                            Product Care
                        </h3>
                        <ul className='flex flex-col list-disc text-xl font-semibold text-slate-600 dark:text-gray-300 ml-2'>
                            <li>Hand wash using cold water.</li>
                            <li>Do not using bleach.</li>
                            <li>Hang it to dry.</li>
                            <li>Iron on low temperature.</li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}