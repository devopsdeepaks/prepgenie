"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteLogoScroll = ({
    logos = [], // Array of image URLs
    direction = "right",
    speed = "fast",
    pauseOnHover = true,
    className
}) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (logos.length > 0) {
            setupAnimation();
        }
    }, [logos]); // Runs when logos array changes

    function setupAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            // Duplicate images for infinite scrolling effect
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current.appendChild(duplicatedItem);
            });

            applyStyles();
            setStart(true);
        }
    }

    function applyStyles() {
        if (containerRef.current) {
            // Direction of animation
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );

            // Speed of animation
            let duration = "40s"; // Default speed
            if (speed === "fast") duration = "20s";
            if (speed === "slow") duration = "80s";
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <div
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {logos.map((logo, idx) => (
                    <div key={idx} className="w-32 h-32 flex-shrink-0">
                        <img
                            src={logo}
                            alt={`logo-${idx}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
