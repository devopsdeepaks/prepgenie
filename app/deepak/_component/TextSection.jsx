import { TextRevealCard } from '@/components/ui/text-reveal-card'
import React from 'react'

const TextSection = () => {
    return (
        <div className="flex text-white text-5xl items-center justify-center bg-black h-[20rem]  w-full">
            <TextRevealCard
                text="Your career, your path?"
                revealText="PrepGenie guides the way!"
            />

        </div>
    )
}

export default TextSection