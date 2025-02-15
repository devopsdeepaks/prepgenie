import React from 'react'

const DeepakLayout = ({ children }) => {
    return (
        <div>
            {/* <div className='dark bg-[#0c0c0d] h-screen w-screen' > */}
            <div className='dark bg-black bg-grid-white/[0.1] h-screen w-screen' >

                {children} {/* This will render only the specific page content */}
            </div>
        </div>
    )
}

export default DeepakLayout
