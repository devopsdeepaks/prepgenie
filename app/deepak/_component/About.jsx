"use client"
import React from 'react'
import { SparklesCore } from "@/components/ui/Sparkles";
import { motion } from 'framer-motion'
import { SparklesPreview } from './demo';

const About = () => {
    return (
        <div >

            {/* lamp my favourtite  */}
            <div className=' flex flex-col items-center justify-center bg-black '>
                <motion.div>
                    <motion.img
                        className='items-center justify-center w-2/3 mx-auto'
                        src='/logo.png'

                    >
                    </motion.img>

                </motion.div>
                <SparklesPreview />





            </div>
        </div >
    )
}

export default About