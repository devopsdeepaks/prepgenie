import React from 'react'
import Header from './_component/Header'

const DashboadLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='p-10'>
                {children} {/* This will render only the specific page content */}
            </div>
        </div>
    )
}

export default DashboadLayout
