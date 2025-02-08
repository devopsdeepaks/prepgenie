"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewCard from './InterviewCard';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const InterviewList = () => {
    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);

    useEffect(() => {
        user && getInterviewList();
    }, [user])

    const getInterviewList = async () => {
        const result = await db.select()
            .from(MockInterview)
            .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(MockInterview.id));
        console.log(result);
        setInterviewList(result);
    }

    return (
        <div className='mt-10'>
            <TextGenerateEffect
                className={'text-xl w-3/5 text-left sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
                words="Previous Mock Interview" />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-5'>
                {interviewList && interviewList.map((interview, index) => (
                    <InterviewCard interview={interview} key={index} />
                ))}
            </div>
        </div>
    )
}

export default InterviewList