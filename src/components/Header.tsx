// Header.tsx
import React from 'react';
import Image from 'next/image';
import Nav from '@/components/NavMenu';

export default function Header() {
    return (
    <header className="flex items-left p-4 bg-orange-200 shadow-md">
        <Image src="/dbdm.svg" alt="Logo" width={30} height={15} priority />
        <h1 className="text-xl font-bold ml-3 items-left self-center">OutThere Social Club</h1>
        <div className="flex-grow"></div>
            <Nav />
        <div className="pb-4"></div>
        
    </header>
    );
}