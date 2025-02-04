import React from 'react'
import Header from './_component/Header'

const DeepakLayout = ({ children }) => {
    return (
        <div>
            {/* <div className='dark bg-[#0c0c0d] h-screen w-screen' > */}
            <div className='dark bg-black h-screen w-screen' >

                <Header />
                {children} {/* This will render only the specific page content */}
            </div>
        </div>
    )
}

export default DeepakLayout
