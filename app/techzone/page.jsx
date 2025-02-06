"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Twitter, PlusCircle } from "lucide-react";
import TweetPopup from './_component/tweetpopup';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { FloatingDockDemo } from './_component/flaotingdock';
import { SparklesPreview } from '../deepak/_component/demo';

// Sample tweets data
const initialTweets = [
    {
        id: 1,
        user: "TechGuru",
        handle: "@techguru",
        content: "AI is evolving at a rapid pace! What are your thoughts on GPT-4?",
    },
    {
        id: 2,
        user: "CodeMaster",
        handle: "@codemaster",
        content: "Just deployed my latest Next.js app. 🚀 #WebDev",
    },
];


const TechPage = () => {
    const [tweets, setTweets] = useState(initialTweets);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Function to add more tweets (for demo purposes, it adds dummy tweets)
    const handleAddTweet = (newTweet) => {

        setTweets((prev) => [...prev, { id: prev.length + 1, ...newTweet }]);
    };
    return (
        <div>
            <div className="flex h-screen bg-black text-white ">
                {/* Sidebar - Recent Tweets & Add Tweet */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-1/4 bg-gradient-to-r from-[#1a1a1a] to-[#222] p-4 border-r border-gray-700 shadow-lg rounded-3xl md:block hidden"
                >
                    <h2 className="text-xl p-6 font-bold text-white flex items-center gap-2 transform transition duration-300 hover:scale-105">
                        <Twitter size={24} className="text-blue-500" /> Recent Tech Tweets
                    </h2>
                    {tweets.slice(-5).map((tweet) => (
                        <motion.div
                            key={tweet.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-3 bg-[#333] rounded-lg mb-3 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <p className="font-semibold text-white">
                                {tweet.user} <span className="text-gray-400">{tweet.handle}</span>
                            </p>
                            <p className="text-sm text-gray-300">{tweet.content}</p>
                        </motion.div>
                    ))}


                    {/* Open Popup Button */}
                    {/* <motion.button
                        onClick={() => setIsPopupOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 flex items-center gap-2 w-full bg-cyan-500 hover:bg-cyan-600 rounded-lg py-2 px-4 text-white font-semibold transition"
                    >
                        <PlusCircle size={20} /> Add Tweet
                    </motion.button> */}
                </motion.div>

                {/* Main Content - Display All Tweets */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 p-6 items-center justify-center"
                >
                    <TextGenerateEffect
                        className={'text-xl text-center w-3/5 sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
                        words="TechZone" />
                    <SparklesPreview className="items-center justify-center" />
                    <div className="space-y-4">
                        {tweets.map((tweet) => (
                            <motion.div
                                key={tweet.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-gradient-to-r from-[#2a2a2a] to-[#1e1e1e] p-5 rounded-lg shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105"
                            >
                                <p className="text-lg font-semibold text-white">{tweet.user}</p>
                                <p className="text-gray-400">{tweet.content}</p>
                            </motion.div>

                        ))}
                        <FloatingDockDemo />
                    </div>
                </motion.div>

                {/* Tweet Popup */}
                <TweetPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onSubmit={handleAddTweet} />

            </div>
        </div>
    )
}

export default TechPage