"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Fullscreen, SmileIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SparklesPreview } from "./demo";


export function InfiniteMovingCardsDemo() {
    return (
        (
            <div>
                <div className="bg-black -mt-48  flex justify-center items-center  flex-col">
                    <img src="/heartimage.png" alt="dil ka  photo" />
                    <p className='text-2xl -mt-48 w-1/2 text-center  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'><SmileIcon className="text-white inline-block " /> Testimonials</p>
                    <TextGenerateEffect
                        className={'text-xl  w-3/5 text-center sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
                        words="What Our Users Say" />
                </div>

                <div
                    className="h-[40rem] -mt-20 rounded-md flex flex-col antialiased bg-white dark:bg-black  items-center justify-center relative overflow-hidden">

                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>
            </div>)
    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
