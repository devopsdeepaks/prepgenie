"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Fullscreen, SmileIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SparklesPreview } from "./SparklesPreview";


export function Testimonials() {
    return (
        (
            <div>
                <div className="bg-black -mt-56  flex justify-center items-center  flex-col">
                    <img src="/heartimage.png" alt="dil ka  photo" />
                    <p className='text-2xl -mt-48 w-1/2 text-center  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'><SmileIcon className="text-white inline-block " /> Testimonials</p>
                    <TextGenerateEffect
                        className={'text-xl  w-3/5 text-center sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
                        words="What Our Users Say" />
                </div>

                <div
                    className="h-[40rem] -mt-28 rounded-md flex flex-col antialiased bg-white dark:bg-black  items-center justify-center relative overflow-hidden">

                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>
            </div>)
    );
}

const testimonials = [
    {
        quote:
            "PrepGenie’s AI interviews were a game-changer! The instant feedback helped me refine my answers, and I landed my dream job at Google!",
        name: "John Carter",
        title: "Software Engineer",
    },
    {
        quote:
            "The structured roadmaps made learning so much easier. I followed the Data Science roadmap, built projects, and now I’m working at Tesla!",
        name: "Sarah Williams",
        title: "Data Scientist",
    },
    {
        quote: "I was struggling with technical interviews until I found PrepGenie. The mock interviews and coding prep gave me the confidence to crack Microsoft’s interview!",
        name: "Rahul Mehta",
        title: "Full-Stack Developer",
    },
    {
        quote:
            "The TechZone feature is amazing! I stayed updated with the latest industry trends, which helped me impress interviewers and get hired at Amazon!",
        name: "Emily Roberts",
        title: "Product Manager ",
    },
    {
        quote:
            "PrepGenie is a must-have for anyone serious about their career. The AI-driven approach makes interview prep efficient and fun!",
        name: "David Kim",
        title: "Cybersecurity Analyst",
    },
];
