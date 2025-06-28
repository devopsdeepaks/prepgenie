"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { animate, motion } from 'framer-motion'

const Header = () => {
    const path = usePathname();
    const { user } = useUser();
    const router = useRouter();

    return (
        <div >
            <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className=' flex abso justify-between items-center p-3 bg-black border mx-80 rounded-2xl my-10 shadow-sm'>
                <Image
                    src={'/logo.png'}
                    width={160}
                    height={100}
                    alt="PrepGenie"
                    color='white' />
                <ul
                    className='hidden items-center md:flex space-x-6'>
                    <motion.li
                        className={`hover:text-white hover:font-bold transition-all text-gray-300 cursor-pointer border-white
                        ${path == '/dashboard' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'}`
                        }
                        whileHover={{ scale: 1.1 }}>
                        Dashboard
                    </motion.li>
                    <motion.li
                        className={`hover:text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/dashboard/questions' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'}`
                        }
                        whileHover={{ scale: 1.1 }}
                    >Questions
                    </motion.li>
                    <motion.li
                        className={`hover:text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/dashboard/upgrade' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'}`
                        }
                        whileHover={{ scale: 1.1 }}>
                        Upgrade</motion.li>
                    <motion.li
                        className={`hover:text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/dashboard/howitworks' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'}`
                        } whileHover={{ scale: 1.1 }}>
                        Contact Us</motion.li>
                </ul>
                {user ? <motion.div className='bg-[#131315] py-2 px-4 items-center justify-center font-bold rounded-full m-2' whileHover={{ scale: 1.2 }}><UserButton

                /></motion.div> :
                    <motion.button
                        className='bg-white py-4 px-8 font-bold rounded-lg'
                        whileHover={{ scale: 1.1 }}
                        onClick={() => router.push("/sign-in")}>
                        Sign In</motion.button>}
            </motion.div >
        </div >
    )
}

export default Header