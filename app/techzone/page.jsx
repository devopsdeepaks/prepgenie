"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrashIcon } from "lucide-react";
import TweetPopup from "./_component/tweetpopup";
import {FloatingDockDemo} from "./_component/flaotingdock";
import { SpotlightN } from '@/components/spotlight-new'
import { StickyScrollRevealDemo } from "./_component/stickyscrollrevealdemo";

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

const GridBackgroundDemo = () => {
  return (
    <div className="h-full w-full absolute inset-0 bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:40px_40px]">
        {" "}
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const [tweets, setTweets] = useState(() => initialTweets);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const savedTweets = JSON.parse(localStorage.getItem("tweets"));
    if (savedTweets && savedTweets.length > 0) {
      setTweets(savedTweets);
    }
  }, []);

  useEffect(() => {
    if (tweets.length > 0) {
      localStorage.setItem("tweets", JSON.stringify(tweets));
    }
  }, [tweets]);

  const addTweet = (newTweet) => {
    setTweets((prevTweets) => [...prevTweets, { id: Date.now(), ...newTweet }]);
  };

  const deleteTweet = (id) => {
    setTweets((prevTweets) => prevTweets.filter((tweet) => tweet.id !== id));
  };

  return (
    <div className="flex min-h-screen text-white">
     
      <SpotlightN />
      {/* Left Side - Tweet Feed */}
      <div className="w-1/2 min-h-screen text-white p-5 pt-32 flex flex-col mt-20">
        <div className="space-y-4">
          {tweets.length > 0 ? (
            tweets.map((tweet) => (
              <motion.div
                key={tweet.id}
                className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg flex justify-between items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div>
                  <h3 className="font-bold">
                    {tweet.user}{" "}
                    <span className="text-gray-400">{tweet.handle}</span>
                  </h3>
                  <p>{tweet.content}</p>
                </div>
                <button
                  onClick={() => deleteTweet(tweet.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">No tweets found!</p>
          )}

           {/* Floating Dock */}
        <div className="relative bottom-40 ">
          <FloatingDockDemo onAddTweet={() => setIsPopupOpen(true)} />
        </div>


         
        </div>

       
      
       
      </div>


       {/* Right Side - Sticky Scroll */}
       <div className="w-1/2 p-5 h-screen mt-40">
        <StickyScrollRevealDemo className="sticky top-20" />
      </div>

       {/* Tweet Popup */}
       <TweetPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onSubmit={addTweet}
        />

        <SpotlightN />
    </div>
  );
};

export default DashboardPage;
