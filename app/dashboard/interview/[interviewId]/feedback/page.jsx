"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown, StarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'



const Feedback = ({ params }) => {
  const router = useRouter();
  const [feedbackList, setFeedbackList] = useState([]);
  useEffect(() => {
    getFeedback();
  }, [])
  const getFeedback = async () => {
    // Fetch feedback
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    console.log("result", result);
    setFeedbackList(result);
  }
  return (
    <div className='dark flex flex-col p-10 pt-32'>

      {feedbackList?.length == 0 ?
        <h2 className='text-red-500 font-bold text-xl'>No feedback available</h2>
        :
        <>
          <TextGenerateEffect
            className={'text-xl w-3/5 text-left sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
            words="Congratulations!!" />

          <div className='bg-gradient-to-br from-[#0C0C0D] to-black border m-4 w-1/3 items-center justify-center p-4 rounded-lg flex gap-3'>
            <StarIcon className='h-32 w-32 items-center justify-center text-yellow-500' fill='yellow' />
            <TextGenerateEffect
              className={'text-xl w-3/5 text-left sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
              words="Your overall Rating: 7" />
          </div>




          <div className='flex flex-col'>
            {feedbackList && feedbackList.map((item, index) => (
              <Collapsible key={index} className='m-7'>
                <CollapsibleTrigger className={`p-4 bg-cyan-500 text-white rounded-full text-xs md:text-sm text-center cursor-pointer 
              }`}>Ques #{index + 1}<ChevronsUpDown className='gap-7 items-center h-5 w-5 justify-center inline' /></CollapsibleTrigger>
                <CollapsibleContent className='mt-7'>
                  <div className='flex flex-col gap-3 bg-gradient-to-br from-[#0C0C0D] to-black border p-4 rounded-lg'>
                    <h1 className=' p-2  text-xl text-white '><strong>Question : </strong>{item.question}</h1>
                    <h2 className='p-2 text-gray-200'><strong>Your Answer : </strong>{item.userAns}</h2>
                    <h2 className='p-2 border rounded-lg bg-cyan-100 text-md text-black'><strong>Correct Answer : </strong>{item.correctAns}</h2>
                    <h1 className='text-yellow-900 bg-yellow-50 p-2 border rounded-lg '><strong>Rating : </strong>{item.rating}</h1>
                    {/* <div>
                      <div className='bg-gradient-to-br from-[#0C0C0D] to-black border m-4  items-center justify-center p-4 rounded-lg flex gap-3'>{item.feedback.positive}</div>
                      <div></div>
                      <div></div>
                    </div> */}
                    <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-blue-500'><strong>Feedback : </strong>{item.feedback}</h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>

            ))}</div>
        </>}
      <Button onClick={() => router.replace('/dashboard')} variant='outline' className='my-5'>Go Home</Button>
    </div>
  )
}

export default Feedback