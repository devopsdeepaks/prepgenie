"use client"
import { LampContainer } from '@/components/ui/lamp'
import React from 'react'
import { motion } from 'framer-motion'
import { ContainerScroll } from '@/components/ui/container-scroll'
import Image from 'next/image'
const About = () => {
    return (
        <div>

            {/* lamp my favourtite  */}
            <div className='mb-0 pb-0 bg-black overflow-hidden'>
                <LampContainer >
                    <motion.div>
                        <motion.img
                            className='items-center justify-center w-1/3 mx-auto'
                            src='/logo.png'

                        >
                        </motion.img>
                        <p className='text-2xl w-2/3 text-center mx-auto   relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>Create a clear roadmap, track progress, and smoothly guide your project from idea to successful launch.</p>
                    </motion.div>
                </LampContainer>

                <h1 className=' text-white items-center justify-center'>Hello world</h1>



            </div>
        </div>
    )
}

export default About