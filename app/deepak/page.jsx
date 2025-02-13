import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React from 'react'
import { SparklesPreview } from '../_component/SparklesPreview'
import { AddContainer } from './_component/AddContainer'

const DeepakPage = () => {
    return (
        <div className='text-white pt-32 p-8 flex flex-col '>
            <TextGenerateEffect
                className={'text-4xl w-full text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
                words="RoadMaps" />
            {/* <SparklesPreview /> */}
            <div className='flex-row'>
                <AddContainer />
            </div>
        </div>
    )
}

export default DeepakPage