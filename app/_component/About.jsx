"use client"
import React from 'react'
import { SparklesCore } from "@/components/ui/Sparkles";
import { motion } from 'framer-motion'
import { CodeBlock } from '@/components/ui/code-block';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { InfiniteLogoScroll } from '@/components/ui/infinite-logo';
import { SparklesPreview } from './SparklesPreview';

const About = () => {
    const code = `function prepForSuccess(candidate) { 
        let skills = ["AI Mock Interviews", "Roadmaps", "Tech Trends"];
        let confidence = Math.random() > 0.5 ? "High" : "Needs Work";
    
        console.log('👋 Hey candidate, welcome to PrepGenie!');
    
        if (confidence === "High" && skills.includes("AI Mock Interviews")) {
            console.log("🎉 Congrats! You’re ready to ace your interview! 🚀");
        } else {
            console.log("😬 Uh-oh! Interview in 2 days? Time to grind! 💻");
            console.log("🔄 Generating AI questions... 📜");
            console.log("📌 Opening roadmap... 🗺️");
            console.log("🔥 Fetching latest tech trends... ⚡");
    
            setTimeout(() => {
                console.log("✨ Confidence +10, Skills +5! Nail that interview! 💪");
            }, 3000);
        }
    }
    
    prepForSuccess("Future Tech Rockstar");
    
    `;
    return (
        <div className='pt-5 bg-black' id='about'>

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

                {/* <EvervaultCardDemo /> */}
                <motion.div className='flex text-left items-center justify-center  p-4'>
                    <div className='p-4'>
                        <TextGenerateEffect
                            className={'text-xl   text-left sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
                            words="Empowering Careers with AI" />
                        <p className='text-xl mt-5  text-left  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>PrepGenie is your all-in-one platform for AI-driven interview prep, career roadmaps, and the latest in tech. Whether you're gearing up for your dream job or exploring new tech opportunities, we’ve got you covered.</p>

                        <ul>
                            <li className='text-2xl mt-2 font-bold  text-left  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'> 🛠️ Personalized AI Insights</li>
                            <li className='text-2xl mt-2 font-bold text-left  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>🚀 Career-Boosting Roadmaps</li>
                            <li className='text-2xl mt-2 font-bold text-left  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>🌍 Stay Ahead with TechZon</li>

                        </ul>

                        <motion.button className="bg-white text-black no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg px-8 py-4 text-lg font-semibold leading-6   inline-block mt-5 mb-2"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            Start Preparing Today
                        </motion.button>
                    </div>
                    <div>
                        <div className="max-w-3xl mx-auto  border-gray-700 w-full">
                            <CodeBlock
                                language="jsx"
                                filename="PrepGenie.jsx"
                                highlightLines={[5, 8, 21]}
                                code={code} />
                        </div>

                    </div>


                </motion.div>

                {/* logo section  moving  */}
                <div className='flex justify-center my-8 items-center flex-col'>
                    <p className='text-xl mt-5  text-center  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>Powering PrepGenie with Cutting-Edge Technology</p>
                    <InfiniteLogoScroll className={'fill-white'} logos={["/logo1.svg", "/logo2.svg", "/logo3.svg", "/logo4.svg", "logo5.svg"]} />
                </div>


            </div>
        </div >
    )
}

export default About