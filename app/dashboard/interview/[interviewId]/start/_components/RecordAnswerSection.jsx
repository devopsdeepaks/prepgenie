"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Mic } from 'lucide-react';
import useSpeechToText from 'react-hook-speech-to-text';
import { toast } from "sonner";
import { Toaster } from 'sonner'; 
import { chatSession } from '@/utils/GeminiAiModal';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { db } from '@/utils/db';

const RecordAnswerSection = ({ mockInterviewQuestion, activeQuestionIndex,interviewData }) => { // ✅ Fix: Props should be destructured
    const [userAnswer, setUserAnswer] = useState('');
    const {user}=useUser();
    const [loading, setLoading] = useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        if (results?.length > 0) {
            setUserAnswer(prevAns => prevAns + results[results.length - 1]?.transcript + " ");
        }
    }, [results]);

    useEffect(() => {
       if(!isRecording && userAnswer.length>10){
           updateUserAnswer();
       }
    },[userAnswer])

    const startStopRecording = async () => {
        if (isRecording) {
           
            stopSpeechToText();
           

            toast.success("Recording Stopped!");

        } else {
            startSpeechToText();
            toast.info("Recording Started!");
        }
    };

    const updateUserAnswer = async () => {
    setLoading(true);
    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, 
    User Answer: ${userAnswer}. 
    Based on the question and answer, please provide a rating and feedback for improvement 
    in JSON format with 'rating' and 'feedback' fields.`;

    try {
        const result = await chatSession.sendMessage(feedbackPrompt);
        const responseText = await result.response.text(); // ✅ Fix: Await response
        const formattedResponse = responseText.replace('```json', '').replace('```', '').trim();
        
        console.log("AI Response:", formattedResponse);
        const jsonFeedbackResp = JSON.parse(formattedResponse); // ✅ Fix: Proper declaration

        console.log("Mock ID:", interviewData?.mockId);
        console.log("User Email:", user?.primaryEmailAddress?.emailAddress);

        if (!interviewData?.mockId || !user?.primaryEmailAddress?.emailAddress) {
            console.error("Missing required fields");
            toast.error("Error: Missing required fields");
            setLoading(false);
            return;
        }

        const resp = await db.insert(UserAnswer).values({
            mockIdRef: interviewData?.mockId,
            question: mockInterviewQuestion[activeQuestionIndex]?.question,
            correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
            userAns: userAnswer,
            feedback: jsonFeedbackResp?.feedback,
            rating: jsonFeedbackResp?.rating,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD-MM-YYYY')
        });

        if (resp) {
            toast.success("User answer recorded successfully!");
        }

    } catch (error) {
        console.error("Error fetching AI response:", error);
        toast.error("Failed to get feedback from AI");
    }
    setUserAnswer('');
    setLoading(false);
};


    return (
        <div className='flex flex-col items-center justify-center'>
            <Toaster />
            <div className='flex flex-col items-center justify-center bg-secondary rounded-lg p-5 mt-5'>
                <Image src={'/webcamm.png'} width={200} height={200} className='absolute' alt='This is an Image' />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: '100%',
                        zIndex: 10,
                    }}
                />
            </div>
            <Button 
            disabled={loading}
            variant="outline" className="my-10" onClick={startStopRecording}>
                {isRecording ? 
                    <h2 className='text-red-500 flex gap-2'><Mic /> Recording...</h2> 
                    : 'Record Answer'}
            </Button>
            <Button onClick={() => console.log(userAnswer)}>Show User Answer</Button>
        </div>
    );
};

export default RecordAnswerSection;
