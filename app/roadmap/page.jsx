import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React from 'react'
import { RoadMaps } from './_component/Roadmaps'

const DeepakPage = () => {
    return (
        <div className='text-white pt-32 p-8 flex flex-col '>
            <TextGenerateEffect
                className={'text-4xl w-full text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
                words="RoadMaps" />
            {/* <SparklesPreview /> */}
            <div className='flex-row'>
                <RoadMaps />
            </div>
        </div>
    )
}

export default DeepakPage