"use client";

import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import { useParams } from 'next/navigation';
import RecordAnswerSection from './_components/RecordAnswerSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function StartInterview() {
  const params = useParams();  // Use the useParams hook
  const interviewId = params?.interviewId;  // Extract interviewId safely
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const questions = mockInterviewQuestion || [];

  useEffect(() => {
    getInterviewDetails();
  }, [])

  const getInterviewDetails = async () => {
    // Fetch interview details
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));

    let jsonMockResp = [];
    if (result[0]?.jsonMockResp) {
      try {
        jsonMockResp = JSON.parse(result[0].jsonMockResp);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
    console.log("newResponse", jsonMockResp)
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  return (
    <div className='dark p-4 pt-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions */}
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        {/* Video and audio secion*/}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className='flex justify-end gap-6'>
        {activeQuestionIndex > 0 &&
          <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>Previous Question</Button>}
        {activeQuestionIndex != questions.length - 1 && <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>Next Question</Button>}
        {activeQuestionIndex == questions.length - 1 &&
          <Link href={'/dashboard/interview/' + interviewData?.mockId + '/feedback'}>
            <Button>End Interview</Button>
          </Link>
        }
      </div>
    </div>
  )
}

export default StartInterview