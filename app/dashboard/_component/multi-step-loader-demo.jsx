"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
    {
        text: "Analyzing your profile...",
    },
    {
        text: "Fetching real-world interview scenarios... 🌍",
    },
    {
        text: "Optimizing AI responses... ⚡",
    },
    {
        text: "Polishing the final details... ✨",
    },
    {
        text: "AI is set! Get ready to ace this! 🎤",
    },
    {
        text: "AI is thinking... Give it a second! 🧠",
    },
    {
        text: "Last-minute prep... Stay confident! 😎",
    },
    {
        text: "Ready? Let's start the interview! 🚀",
    },
];

export function MultiStepLoaderDemo() {
    const loading = true;
    return (
        (<div className="dark w-full h-[60vh] flex items-center justify-center">
            {/* Core Loader Modal */}
            <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
            {/* The buttons are for demo only, remove it in your actual code ⬇️ */}

            {loading && (
                <button
                    className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                    onClick={() => setLoading(false)}>
                    <IconSquareRoundedX className="h-10 w-10" />
                </button>
            )}
        </div>)
    );
}
