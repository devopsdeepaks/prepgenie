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
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


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
    <div className='p-5'>

      {feedbackList?.length == 0 ?
        <h2 className='text-red-500 font-bold text-xl'>No feedback available</h2>
        :
        <>
          <h2 className='text-4xl font-bold text-green-500'>Congratulations!</h2>
          <h2 className='font-bold text-2xl mt-2'>Here is your Interview Feedback!!</h2>
          <h2 className='text-gray-500 text-lg my-3'>Your overall Interview Rating : <strong>7/10</strong></h2>

          <h2 className='text-sm text-gray-500'>Find below Question, your answer, correct answer and Improvement feedback from the AI</h2>
          {feedbackList && feedbackList.map((item, index) => (
            <Collapsible key={index} className='m-7'>
              <CollapsibleTrigger className='p-2 bg-secondary rounded my-2 text-left flex justify-between'>{item.question}<ChevronsUpDown className='gap-7 items-center h-5 w-5 justify-center' /></CollapsibleTrigger>
              <CollapsibleContent className='mt-7'>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-yellow-900 bg-yellow-50 p-2 border rounded-lg '><strong>Rating : </strong>{item.rating}</h1>
                  <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-500'><strong>Your Answer : </strong>{item.userAns}</h2>
                  <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-500'><strong>Correct Answer : </strong>{item.correctAns}</h2>
                  <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-blue-500'><strong>Feedback : </strong>{item.feedback}</h2>
                </div>
              </CollapsibleContent>
            </Collapsible>

          ))}
        </>}
      <Button onClick={() => router.replace('/dashboard')} variant='outline' className='my-5'>Go Home</Button>
    </div>
  )
}

export default Feedback