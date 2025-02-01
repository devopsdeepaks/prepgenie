import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const DeepakPage = () => {
    return (
        <div className='bg-black text-white p-72 m-0 relative'>
            <h1>This is my page</h1>
            <Spotlight className={'-top-40 left-0  '} fill={'white'} />
            <Spotlight
                className="absolute top-28 left-full h-[80vh] w-[40vw] "
                fill="white"
            />
            {/* <Spotlight
                className="absolute -right-40 top-1/2 w-72 h-72 bg-white/10 rounded-full blur-[120px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                fill={'white'}
            /> */}


        </div>
    )
}

export default DeepakPage