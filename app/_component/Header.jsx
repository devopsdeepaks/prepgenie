"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { animate, motion } from 'framer-motion'
import React from 'react'

const Header = () => {
    const path = usePathname();
    const router = useRouter();
    const { user } = useUser();
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
                        ${path == '/' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                        }
                        whileHover={{ scale: 1.1 }}
                        onClick={() => router.push("/")}>
                        Home
                    </motion.li>
                    {user ? <motion.li
                        className={`hover: text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/dashboard' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                        }
                        whileHover={{ scale: 1.1 }}
                        onClick={() => router.push("/dashboard")}>Interview
                    </motion.li> :
                        <motion.li
                            className={`hover: text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                    ${path == '/dashboard/questions' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                            }
                            whileHover={{ scale: 1.1 }}
                            onClick={() => router.push("/#about")}>About Us
                        </motion.li>}
                    {user ? <motion.li
                        className={`hover: text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/techzone' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                        }
                        whileHover={{ scale: 1.1 }}
                        onClick={() => router.push("/techzone")}>
                        TechZone</motion.li> : <motion.li
                            className={`hover: text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/techzone' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                            }
                            whileHover={{ scale: 1.1 }}
                            onClick={() => router.push("/#services")}>
                        Services</motion.li>}
                    {user ? <motion.li
                        className={`hover: text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/techzone' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                        }
                        whileHover={{ scale: 1.1 }}
                        onClick={() => router.push("/roadmap")}>
                        RoadMaps</motion.li> :
                        <motion.li
                            className={`hover: text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/techzone' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                            }
                            whileHover={{ scale: 1.1 }}
                            onClick={() => router.push("/roadmap")}>
                            Contact Us</motion.li>}

                </ul>

                {user ? <motion.div className='bg-[#131315] py-2 px-4 items-center justify-center font-bold rounded-full m-2' whileHover={{ scale: 1.2 }}><UserButton

                /></motion.div> :
                    <motion.button
                        className='bg-white text-black py-4 px-8 font-bold rounded-lg'
                        whileHover={{ scale: 1.1 }}
                        onClick={() => router.push("/sign-in")}>
                        Sign In</motion.button>}
            </motion.div >
        </motion.div>
    )
}

export default Header