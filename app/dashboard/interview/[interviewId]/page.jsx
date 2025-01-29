"use client";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Flag, Lightbulb, WebcamIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

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
    <div className="my-10 ">
      <h2 className="font-bold text-2xl">Let's Get Started!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 p-5 rounded-lg border gap-5">
          <h2 className="text-lg">
            <strong>Job Role/Position: </strong>
            {interviewData?.jobPosition}
          </h2>
          <h2 className="text-lg">
            <strong>Job Desc/Tech Stack: </strong>
            {interviewData?.jobDesc}
          </h2>
          <h2 className="text-lg">
            <strong>Job Experience: </strong>
            {interviewData?.jobExperience}
          </h2>
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 tems-center text-yellow-600">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-500">
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
                height: 300,
                width: 300,
              }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
              <Button
                variant="ghost"
                className="w-full"
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
