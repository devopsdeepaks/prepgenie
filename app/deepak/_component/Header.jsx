"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { animate, motion } from 'framer-motion'
import React from 'react'

const Header = () => {
    const path = usePathname();
    const router = useRouter();
    return (
        <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}>
            <motion.div
                className='fixed transform translate-x-1/2 z-50 top-0 left-0 w-1/2 text-white flex abso justify-between items-center p-3 bg-black border  rounded-2xl my-7 shadow-sm'


            >

                <Image
                    src={'/logo.png'}
                    width={160}
                    height={100}
                    alt="PrepGenie"
                    color='white' />
                <ul
                    className='hidden items-center md:flex space-x-6'>
                    <motion.li
                        className={`hover:text-primary hover:font-bold transition-all text-gray-300 cursor-pointer border-white
                        ${path == '/deepak' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                        }
                        whileHover={{ scale: 1.1 }}>
                        Home
                    </motion.li>
                    <motion.li
                        className={`hover: text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/dashboard/questions' && 'text-white bg-gray-900 rounded-lg p-4 font-bold'} `
                        }
                        whileHover={{ scale: 1.1 }}
                    >Dashboard
                    </motion.li>
                    <motion.li
                        className={`hover: text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/techzone' && 'text-white bg-gray-900 rounded-lg p-4 font-bold'} `
                        }
                        whileHover={{ scale: 1.1 }}>
                        TechZone</motion.li>
                    <motion.li
                        className={`hover: text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/dashboard/howitworks' && 'text-white bg-gray-900 rounded-lg p-4 font-bold'} `
                        } whileHover={{ scale: 1.1 }}>
                        Contact Us</motion.li>
                </ul>
                <motion.button
                    className='bg-white text-black py-4 px-8 font-bold rounded-lg'
                    whileHover={{ scale: 1.0 }}
                    onClick={() => router.push("/sign-in")}>
                    Sign In</motion.button>
            </motion.div >
        </motion.div>
    )
}

export default Header