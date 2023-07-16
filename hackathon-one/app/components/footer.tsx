'use client';

import Link from "next/link";
import Wrapper from "./wrapper";
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { useTheme } from "next-themes";
import Image from "next/image";
import Black from 'public/Dine_Market(Black).png';
import White from 'public/Dine_Market(White).png';


export default function Footer() {
    const { theme, setTheme } = useTheme();
    return(
        <div className="w-full h-96 flex justify-center items-center pt-16 mt-8 border-t-2 border-t-black dark:border-t-white">
            <Wrapper>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-28">
                    {/* First Section */}
                    <div className="flex flex-col items-start w-full lg:w-4/12 gap-y-5">
                        <Link href="/">
                        { theme === 'dark' ?
                            (
                                <Image src={White} alt="" height={50} width={180} />
                            ) :
                            (
                                <Image src={Black} alt="" height={50} width={180} />
                            )}
                        </Link>
                        <h1 className="text-lg text-slate-600 dark:text-gray-100">
                            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                        </h1>
                        <div className="flex justify-between items-center w-full">
                            <button className="px-6 py-5 rounded-lg bg-gray-200 dark:bg-black/75 text-black dark:text-white hover:scale-105 duration-200 hover:shadow-xl active:scale-95">
                                <BsTwitter />
                            </button>
                            <button className="px-6 py-5 rounded-lg bg-gray-200 dark:bg-black/75 text-black dark:text-white hover:scale-105 duration-200 hover:shadow-xl active:scale-95">
                                <FaFacebookF />
                            </button>
                            <button className="px-6 py-5 rounded-lg bg-gray-200 dark:bg-black/75 text-black dark:text-white hover:scale-105 duration-200 hover:shadow-xl active:scale-95">
                                <FaLinkedinIn />
                            </button>
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="flex w-full justify-around">
                        {/* Company */}
                        <div className="flex flex-col gap-y-5 justify-start items-center">
                            <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-200">
                                Company
                            </h1>
                            <div className="flex flex-col gap-y-3 justify-between items-center">
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    About
                                </button>
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    Terms of Use
                                </button>
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    Privacy Policy
                                </button>
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    How it Works
                                </button>
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                        {/* Support */}
                        <div className="flex flex-col gap-y-5 justify-start items-center">
                            <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-200">
                                Support
                            </h1>
                            <div className="flex flex-col gap-y-3 justify-between items-center">
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    Support Carrer
                                </button>
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    24th Service
                                </button>            
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    Quick Chat
                                </button>            
                            </div>
                        </div>
                        {/* Contact */}
                        <div className="flex flex-col gap-y-5 justify-start items-center">
                            <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-200">
                                Contact
                            </h1>
                            <div className="flex flex-col gap-y-3 justify-between items-center">
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    Whatsapp
                                </button>
                                <button className="text-gray-400 font-medium text-lg dark:text-gray-100 hover:scale-105 duration-200">
                                    Support 24h
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}