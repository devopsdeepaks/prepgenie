"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
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
            console.log("✨ Confidence +10, Skills +5! Now go nail that interview! 💪");
        }, 3000);
    }
}

prepForSuccess("Future Tech Rockstar");

`;

    return (
        (<div className="max-w-3xl mx-auto  border-gray-700 w-full">
            <CodeBlock
                language="jsx"
                filename="PrepGenie.jsx"
                highlightLines={[5, 8, 21]}
                code={code} />
        </div>)
    );
}
