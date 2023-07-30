'use client'

import { UserButton } from '@clerk/nextjs';
import React, { useState } from 'react';

import NavBar from '@/components/navbar'
import { LuMenu, LuX } from 'react-icons/lu';

const Layout = ({ children }: { children: React.ReactNode }) => {

    const [isNavBarOpen, setIsNavBarOpen] = useState(false)

    let navbar_class = 'hidden absolute bg-gray-900 md:w-72 md:flex md:flex-col gap-20 md:h-screen text-white p-2 z-30 '
    if(isNavBarOpen){
        navbar_class = "absolute bg-gray-900 w-72 flex flex-col gap-20 h-screen text-white p-2 z-30 "
    }

    return (
        <div className='relative'>
            <div className={navbar_class}>
                Logo
                <NavBar />
            </div>
            {!isNavBarOpen && <a onClick={() => setIsNavBarOpen(!isNavBarOpen)} className='absolute cursor-pointer left-2 top-2 md:hidden z-40 text-3xl'>
                <LuMenu />
            </a>}

            {isNavBarOpen && <a onClick={() => setIsNavBarOpen(!isNavBarOpen)} className='absolute cursor-pointer left-64 text-white top-2 md:hidden z-40 text-3xl'>
                <LuX />
            </a>}

            <div className='absolute right-0 p-2 h-12 bg-red-100 w-full flex justify-end'>
                <UserButton afterSignOutUrl='/' />
            </div>
            <div className='md:ml-72 md:flex pt-12 h-screen w-fit text-black'>
                {children}
            </div>
        </div>
    );
};

export default Layout;