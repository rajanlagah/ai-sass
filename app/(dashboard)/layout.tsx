import { UserButton } from '@clerk/nextjs';
import React from 'react';

import NavBar from '@/components/navbar'

const Layout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className='relative'>
            <div className='hidden absolute bg-gray-900 md:w-72 md:flex md:flex-col gap-20 md:h-screen text-white p-2 z-30'>
                Logo
                <NavBar/>
            </div>
            <div className='absolute right-0 p-2 h-12 bg-red-100 w-full flex justify-end'>
                <UserButton afterSignOutUrl='/'/>
            </div>
            <div className='md:ml-72 md:flex pt-12 h-screen w-fit text-black'>
                {children}
            </div>
        </div>
    );
};

export default Layout;