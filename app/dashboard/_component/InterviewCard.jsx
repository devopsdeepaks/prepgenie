import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const InterviewCard = ({ interview }) => {
    const router = useRouter();
    const onStart = () => {
        router.push('/dashboard/interview/' + interview?.mockId)
    }
    const onFeedback = () => {
        router.push('dashboard/interview/' + interview?.mockId + "/feedback")
    }
    return (
        <div className='border bg-gradient-to-br from-[#0C0C0D] to-black shadow-sm rounded-lg p-3 '>
            <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
            <h2 className='text-sm text-gray-500'>{interview?.jobExperience} Years of Experience</h2>
            <h2 className='text-xs text-gray-500'>Creted At : {interview?.createdAt}</h2>

            <div className='flex justify-between my-2 gap-5'>

                <Button onClick={onFeedback} className="w-full bg-[#0C0C0D] text-white" size="sm" variant="outline"  >Feedback</Button>
                <Button onClick={onStart} className="w-full" size="sm">Start</Button>

            </div>
        </div>
    )
}

export default InterviewCard