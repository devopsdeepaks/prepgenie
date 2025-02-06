"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { animate, motion } from 'framer-motion'
import { Spotlight } from '@/components/ui/Spotlight'
import { SpotlightN } from '@/components/spotlight-new'
import { BoxesCore } from '@/components/ui/background-boxes'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { AlertOctagonIcon, ArrowRight, ArrowUpLeftFromSquareIcon } from 'lucide-react'
import { InfiniteLogoScroll } from '@/components/ui/infinite-logo'
import { LampContainer } from '@/components/ui/lamp'
import { ContainerScroll } from '@/components/ui/container-scroll'
import HeroSection from './_component/hero'
import About from './_component/About'
import { GlowingEffectDemoSecond } from './_component/Services'
import { InfiniteMovingCardsDemo } from './_component/Testimonial'
import Pricing from './_component/Pricing'
import Footer from './_component/Footer'
import { WorldMapDemo } from './_component/contact'
import { SparklesPreview } from './_component/demo'
import PricingCard from './_component/PricingCard'
// import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'

// import { AnimatePresence, motion } from "framer-motion";

const DeepakPage = () => {


    return (
        <div>
            <HeroSection />
            <About />
            <GlowingEffectDemoSecond />
            <InfiniteMovingCardsDemo />
            <Pricing />
            <Footer />
            <div>

            </div>
        </div>
    )
}

export default DeepakPage