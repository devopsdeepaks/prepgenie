import React from 'react'
import AddNewInterview from './_component/AddNewInterview'

const DashboadPage = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl'>Dashboard</h1>
            <h2 className='text-gray-500'>Create and start your AI MockUP Interview</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-4'>
                <AddNewInterview /> {/* This appears only on `/dashboard` */}
            </div>
        </div>
    )
}

export default DashboadPage
