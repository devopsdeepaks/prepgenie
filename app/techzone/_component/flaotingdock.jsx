"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { PhoneCallIcon, PlusCircleIcon } from "lucide-react";

const  FloatingDockDemo=({onAddTweet})=> {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Interview",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Add Tweet",
            icon: (
                <PlusCircleIcon className="h-full w-full text-neutral-500 dark:text-neutral-300"
                onClick={onAddTweet}
                />
            ),
            href: "#",
        },
        {
            title: "Roadmap",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Contact Us",
            icon: (
                <PhoneCallIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },


    ];
    return (
        (<div className="flex items-center justify-center h-[35rem] w-full">
            <FloatingDock
                // only for demo, remove for production
                mobileClassName="translate-y-20"
                items={links} />
        </div>)
    );
}

export default FloatingDockDemo;
