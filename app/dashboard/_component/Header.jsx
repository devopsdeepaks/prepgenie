"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
    const path = usePathname();
    useEffect(() => {
        console.log('path changed')
        console.log(path)
    }, [path])
    return (
        <div className='flex justify-between items-center p-4 bg-secondary shadow-sm'>
            <Image src={'/logo.svg'} width={100} height={40} alt="PrepGenie" />
            <ul className='hidden md:flex space-x-6'>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
${path == '/dashboard' && 'text-primary font-bold'}`
                }>Dashboard</li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
${path == '/dashboard/questions' && 'text-primary font-bold'}`
                }>Questions</li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
${path == '/dashboard/upgrade' && 'text-primary font-bold'}`
                }>Upgrade</li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
${path == '/dashboard/howitworks' && 'text-primary font-bold'}`
                }>How it Works?</li>
            </ul>
            <UserButton />
        </div >
    )
}

export default Header