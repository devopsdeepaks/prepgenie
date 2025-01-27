import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Header from './_component/Header'
import AddNewInterview from './_component/AddNewInterview'

const DashboadLayout = () => {
    return (
        <div >
            <Header />
            <div className='p-10'>
                <h1 className='font-bold text-2xl '>Dashboard</h1>
                <h2 className='text-gray-500'>Create and start your Ai MockUP Interview</h2>

                <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-4 '>
                    <AddNewInterview />
                </div>

            </div>
        </div>
    )
}

export default DashboadLayout