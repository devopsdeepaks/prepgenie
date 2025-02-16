"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { animate, motion } from 'framer-motion'
import { Spotlight } from '@/components/ui/Spotlight'
import { SpotlightN } from '@/components/spotlight-new'
import { BoxesCore } from '@/components/ui/background-boxes'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { AlertOctagonIcon, ArrowRight, ArrowUpLeftFromSquareIcon } from 'lucide-react'
import { InfiniteLogoScroll } from '@/components/ui/infinite-logo'
const HeroSection = () => {
    const router = useRouter();
    return (
        <div className='bg-black' >
            {/* Hero Section */}

            {/* Spotlight  */}
            <SpotlightN />

            {/* Boxes Core */}
            <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute flex  items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            {/* Content of hero Section  */}
            <motion.div className='flex p-16 justify-center items-center h-screen flex-col'>

                {/* Floating Left Images  */}
                <motion.img
                    src="/img1.png"
                    alt="Floating Left Image"
                    className="absolute top-[0%] left-[-10%] w-[400px] opacity-80"
                    initial={{ x: -10, y: -10 }}
                    animate={{ x: 10, y: 10 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    whileHover={{ scale: 1.05 }}
                />


                <motion.img
                    src="/img2.svg"
                    alt="Floating Left Image"
                    className="absolute top-[30%] left-[-0%] w-[400px] opacity-80"
                    initial={{ x: -10, y: -10 }}
                    animate={{ x: 10, y: 10 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    whileHover={{ scale: 1.05 }}
                />

                <motion.img
                    src="/img4.png"
                    alt="Floating Left Image"
                    className="absolute top-[60%] left-[10%] w-[400px] opacity-80 h-[300px]"
                    initial={{ rotate: 0, y: 0 }}
                    animate={{ rotate: [0, 2, -2, 0], y: [-5, 0, 5] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    whileHover={{ scale: 1.05 }}
                />

                {/* Floating Right Images  */}
                <motion.img
                    src="/img5.svg"
                    alt="Floating Right Image"
                    className="absolute top-[2%] right-[-5%] w-[200px] h-[200px] opacity-80"
                    initial={{ x: 20, y: 0 }}
                    animate={{ x: 0, y: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    whileHover={{ scale: 1.05 }}
                />
                <motion.img
                    src="/img3.png"
                    alt="Floating Right Image"
                    className="absolute top-[0%] right-[10%] w-[200px] h-[200px] opacity-80"
                    initial={{ x: -10, y: 0 }}
                    animate={{ x: [10, -10, 10], y: 0 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    whileHover={{ scale: 1.05 }}
                />

                <motion.img
                    src="/img6.svg"
                    alt="Floating Right Image"
                    className="absolute top-[30%] right-[-4%] w-[400px] opacity-80"
                    initial={{ x: 20, y: 0, scale: 1 }}
                    animate={{ x: 0, y: [0, 5, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    whileHover={{ scale: 1.05 }}
                />

                <motion.img
                    src="/img7.png"
                    alt="Floating Right Image"
                    className="absolute top-[75%] right-[-1%] w-[300px] opacity-80"
                    initial={{ x: 20, y: 0, scale: 1 }}
                    animate={{ x: 0, y: [0, 5, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    whileHover={{ scale: 1.05 }}
                />


                {/* Button with Gradient and Arrow */}
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block mt-10">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-8 ring-1 ring-white/10 ">
                        <span className='text-lg'>
                            Manage projects end-to-end
                        </span>
                        <ArrowRight className="w-6 h-6" />
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>

                {/* Text with Gradient */}
                <TextGenerateEffect
                    className={'text-4xl w-3/5 text-center sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
                    words="Your AI-Powered Guide to Tech Success" />

                <p className='text-2xl w-1/2 text-center  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>Master interviews, follow expert roadmaps, and stay ahead in tech trends—all in one place.</p>

                {/* cta button  */}
                <motion.button className="bg-white text-black no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg px-8 py-4 text-lg font-semibold leading-6   inline-block mt-5 mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => router.push('/dashboard')}
                >
                    Start Preparing Today
                </motion.button>
                <p className='text-md w-1/2 text-center  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '>No Credit Card Required</p>
            </motion.div>



        </div>
    )
}

export default HeroSection