import React from 'react'
import Header from '../_component/Header'
const DashboadLayout = ({ children }) => {
    return (

        <div className='dark bg-black bg-grid-white/[0.1]'>
            <Header />
            <div >
                {children} {/* This will render only the specific page content */}
            </div>
        </div>
    )
}

export default DashboadLayout
