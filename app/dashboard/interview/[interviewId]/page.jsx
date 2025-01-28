"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Flag, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';

//used to get interview details by mockinterview database by mockid

const Interview = ({ params }) => {

  const [interviewData, setInterviewData] = useState();
  const [webCamEnable, setWebCamEnable] = useState(false);
  useEffect(() => {
    console.log(params.interviewId);
    getInterviewDetails();
  }, [])

  const getInterviewDetails = async () => {
    // Fetch interview details
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId))
    setInterviewData(result[0]);
    console.log(result[0]);
  }



  return (

    <div className='my-6 flex justify-center flex-col items-center'>
      <h2 className='font-bold text-2xl'>Let's Get Started!</h2>
      <div>
        {webCamEnable ? <Webcam
          onUserMedia={() => setWebCamEnable(true)}
          onUserMediaError={() => setWebCamEnable(false)}
          mirrored={true}
          style={{
            height: 300,
            width: 300
          }}
        /> :
          <>
            <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border' />
            <Button className="justify-center items-center" onClick={() => setWebCamEnable(true)}>Enable Microphone and Camera</Button>

          </>
        }

      </div>
      <div>
        <h2><strong>Job Role/Position:</strong></h2>
      </div>
    </div>
  )
}


export default Interview;