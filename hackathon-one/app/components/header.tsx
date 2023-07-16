'use client';

import Image from "next/image";
import Wrapper from "./wrapper";
import Link from "next/link";
import { useTheme } from 'next-themes';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import Black from 'public/Dine_Market(Black).png';
import White from 'public/Dine_Market(White).png';
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Header() {
    const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);
    const [ menuOpen, setMenuOpen ] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    };

    function handleThemeClick() {
        setTheme( theme === 'dark' ? 'light' : 'dark' );
    }
    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }
    return(
        <div className="pb-24">
            <div className="flex z-10 h-24 bg-white dark:bg-black dark:bg-opacity-40 bg-opacity-40 backdrop-blur-lg w-screen justify-center items-center shadow-xl fixed">
                <Wrapper>
                    <div className="flex justify-between items-center h-full">
                        <Link href="/" className="left-0 w-fit justify-between items-center flex">
                            {
                                theme === 'dark' ?
                                (
                                    <Image src={White} width={200} height={200} alt="" />
                                ) :
                                (
                                    <Image src={Black} width={200} height={200} alt="" />
                                )
                            }
                        </Link>
                        <div className="hidden text-lg font-medium md:flex justify-between items-center right-0 gap-x-8">
                            <Link href='./men'>Men</Link>
                            <Link href='./women'>Women</Link>
                            <Link href='./kids'>Kids</Link>
                            <Link href='./product'>All Products</Link>
                            <div className="flex items-center">
                                <AiOutlineSearch size={20} />
                                <input className="py-1 px-3 rounded-lg bg-slate-100 dark:bg-gray-900" placeholder="What do you want?" type="text" />
                            </div>
                            <Link href="./cart" className="relative rounded-full p-4 bg-gray-100 dark:bg-gray-900 text-lg font-medium hover:scale-105 duration-200">
                                <BsCart2 />
                                <div className="absolute -top-3 -right-3 w-6 h-6 flex justify-center items-center rounded-full bg-red-600 text-white text-xs">{cartValue}</div>
                            </Link>
                            <button onClick={handleThemeClick} className="text-purple-600 text-lg p-3 bg-slate-100 dark:bg-gray-900 rounded-full dark:text-yellow-400">
                                { theme === 'dark' ?
                                (
                                    <BsFillSunFill />
                                ) :
                                (
                                    <BsFillMoonFill />
                                )}
                            </button>
                        </div>
                        <button onClick={handleMenuClick} className="flex md:hidden transition-all ease-in duration-500">
                            {
                                menuOpen === true ?
                                (
                                    <AiOutlineClose size={20} />
                                ) :
                                (
                                    <AiOutlineMenu size={20} />
                                )
                            }
                        </button>
                    </div>
                </Wrapper>
            </div>
            <div className={
                menuOpen === true
                ? "fixed md:hidden ease-in duration-500 flex flex-col justify-center gap-7 bg-white dark:bg-black items-center transition-all left-0 h-full w-[65%]"
                : "flex md:hidden flex-col justify-center gap-7 items-center ease-in duration-500 fixed left-[-100%] transtion-all h-full w-[65%]"
            }>
                <Link href='./men' className="text-lg">Men</Link>
                <Link href='./women' className="text-lg">Women</Link>
                <Link href='./kids' className="text-lg">Kids</Link>
                <Link href='./products' className="text-lg">All Products</Link>
                <button className="relative rounded-full px-2 py-1 text-lg hover:scale-105 duration-200">
                    Cart
                    <div className="absolute top-0 -right-4 p-2 rounded-full bg-red-600"></div>
                    <div className="absolute text-xs top-0 -right-3 text-white">0</div>
                </button>
                <button onClick={handleThemeClick} className="text-purple-600 text-lg p-3 font-semibold bg-slate-100 dark:bg-gray-900 rounded-full dark:text-amber-300">
                    { theme === 'dark' ?
                    (
                        <h1>Light Mode</h1>
                    ) :
                    (
                        <h1>Dark Mode</h1>
                    )}
                </button>
            </div>
        </div>
    )
}