// Header.tsx
import React from 'react';
import Image from 'next/image';
import Nav from '@/components/NavMenu';
import Link from 'next/link';

export default function Header() {
    return (
    <header className="flex items-left p-4 bg-orange-200 shadow-md">
        <Image src="/dbdm.svg" alt="Logo" width={30} height={15} priority />
        <h1 className="text-xl font-bold ml-3 mr-6 items-left self-center">OutThere Social Club</h1>
        <Link href="/docs" className="group inline-flex mr-6 h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <div className="text-sm font-medium leading-none">Members</div></Link>
        <Link href="/docs" className="group inline-flex mr-6 h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <div className="text-sm font-medium leading-none">Services</div></Link>    
        <Link href="/docs" className="group inline-flex mr-6 h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <div className="text-sm font-medium leading-none">Resources</div></Link>    
                    
        <div className="flex-grow"></div>
            <Nav />
        <div className="pb-4"></div>
        
    </header>
    );
}