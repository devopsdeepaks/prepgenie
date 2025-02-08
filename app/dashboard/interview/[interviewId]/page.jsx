"use client";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Flag, Lightbulb, WebcamIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

//used to get interview details by mockinterview database by mockid

const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnable, setWebCamEnable] = useState(false);
  useEffect(() => {
    console.log(params?.interviewId);
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    // Fetch interview details
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
    console.log(result[0]);
  };

  return (
    <div className="dark min-h-screen py-32 p-4 ">
      <TextGenerateEffect
        className={'text-xl w-3/5 text-left sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 '}
        words="Let's Get Started!!" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex bg-gradient-to-br from-[#0C0C0D] to-black flex-col my-5 p-5 rounded-lg border gap-5">
          <h2 className="text-lg text-white">
            <strong>Job Role/Position: </strong>
            {interviewData?.jobPosition}
          </h2>
          <h2 className="text-lg text-white">
            <strong>Job Desc/Tech Stack: </strong>
            {interviewData?.jobDesc}
          </h2>
          <h2 className="text-lg text-white">
            <strong>Job Experience: </strong>
            {interviewData?.jobExperience}
          </h2>
          <div className="p-5 border rounded-lg border-cyan-300 bg-cyan-100">
            <h2 className="flex gap-2 tems-center text-black">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-black">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>

        <div>
          {webCamEnable ? (
            <Webcam
              onUserMedia={() => setWebCamEnable(true)}
              onUserMediaError={() => setWebCamEnable(false)}
              mirrored={true}

              style={{
                height: 500,
                width: 600,
                borderRadius: 20,
              }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 text-white bg-gradient-to-br from-[#0C0C0D] to-black rounded-lg border" fill='black' />
              <Button
                variant="ghost"
                className="w-full bg-[#0c0c0d] text-white"
                onClick={() => setWebCamEnable(true)}
              >
                Enable Microphone and Camera
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <Link href={'/dashboard/interview/' + params.interviewId + '/start'}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
