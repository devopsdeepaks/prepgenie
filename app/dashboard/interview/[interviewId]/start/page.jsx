"use client";

import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import { useParams } from 'next/navigation';
import RecordAnswerSection from './_components/RecordAnswerSection';

function StartInterview() {
  const params = useParams();  // Use the useParams hook
  const interviewId = params?.interviewId;  // Extract interviewId safely
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
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
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions */}
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        {/* Video and audio secion*/}
        <RecordAnswerSection />
      </div>
    </div>
  )
}

export default StartInterview