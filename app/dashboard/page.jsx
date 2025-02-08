import React from 'react'
import AddNewInterview from './_component/AddNewInterview'
import InterviewList from './_component/InterviewList'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { SparklesPreview } from '../_component/SparklesPreview'
import { SpotlightN } from '@/components/spotlight-new'

const DashboadPage = () => {

    return (
        <div className='p-5 pt-32 min-h-screen '>
            <SpotlightN />
            <TextGenerateEffect
                className={'text-xl w-3/5 text-left sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
                words="Create a New Interview" />



            <p className='text-xl w-1/2 text-left  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>Create and start your AI MockUP Interview</p>


            <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-4'>
                <AddNewInterview /> {/* This appears only on `/dashboard` */}
            </div>

            {/* Previous Questions List  */}
            <InterviewList />

        </div>
    )
}

export default DashboadPage
