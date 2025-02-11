"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Mic } from 'lucide-react';
import useSpeechToText from 'react-hook-speech-to-text';
import { toast } from 'sonner';
import { Toaster } from 'sonner';
import { chatSession } from '@/utils/GeminiAiModal';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { db } from '@/utils/db';

const RecordAnswerSection = ({ mockInterviewQuestion, activeQuestionIndex, interviewData }) => { // ✅ Fix: Props should be destructured
    const [userAnswer, setUserAnswer] = useState('');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        setResults,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        if (results?.length > 0) {
            // console.log("Speech-to-text results:", results);
            setUserAnswer(prevAns =>

                prevAns + results[results.length - 1]?.transcript + " "
            );
            // console.log("User Answer inside use effect:", userAnswer);
        }
    }, [results]);
    // console.log("User Answer outside use effect:", userAnswer);

    useEffect(() => {
        // console.log("Updated User Answer:", userAnswer);  // Log after state update
    }, [userAnswer]);  // This will be triggered every time userAnswer is updated



    useEffect(() => {
        if (!isRecording && userAnswer.length > 0) {
            updateUserAnswer();
        }
    }, [userAnswer])

    const startStopRecording = async () => {
        if (isRecording) {
            stopSpeechToText();
            toast.success("Recording Stopped!");
        }
        else {
            startSpeechToText();
            toast.info("Recording Started   !");
        }
    }


    const updateUserAnswer = async () => {
        setLoading(true);
        const questions = mockInterviewQuestion || [];
        // console.log("Mock Interview Questions:", mockInterviewQuestion);
        // console.log("Active Question Index:", activeQuestionIndex);


        // console.log(userAnswer);
        const feedbackPrompt = `Question: ${questions[activeQuestionIndex].question}, 
        User Answer: ${userAnswer}. 
        Based on the question and answer, please provide a rating and feedback for improvement keep the answer short and crisp and do not use any * and anything in the feedback and provide it 
        in JSON format with 'rating' and 'feedback' fields.`;

        try {
            // console.log("Feedback Prompt:", feedbackPrompt);
            const result = await chatSession.sendMessage(feedbackPrompt);
            const responseText = await result.response.text(); // ✅ Fix: Await response
            const formattedResponse = responseText.replace('```json', '').replace('```', '').trim();
            const jsonFeedbackResp = JSON.parse(formattedResponse); // ✅ Fix: Proper declaration
            // console.log("JSON Feedback Response:", jsonFeedbackResp);
            // console.log("Mock ID:", interviewData?.mockId);
            // console.log("User Email:", user?.primaryEmailAddress?.emailAddress);

            if (!interviewData?.mockId || !user?.primaryEmailAddress?.emailAddress) {
                //console.error("Missing required fields");
                toast.error("Error: Missing required fields");
                setLoading(false);
                return;
            }
            if (jsonFeedbackResp) {
                const resp = await db.insert(UserAnswer).values({
                    mockIdRef: interviewData?.mockId,
                    question: questions[activeQuestionIndex].question,
                    correctAns: questions[activeQuestionIndex].answer,
                    userAns: userAnswer,
                    feedback: jsonFeedbackResp?.feedback,
                    rating: jsonFeedbackResp?.rating,
                    userEmail: user?.primaryEmailAddress?.emailAddress,
                    createdAt: moment().format('DD-MM-YYYY')
                });
                console.log("Inserted User Answer:", resp);
            } else {
                console.log('Error in generating response')
            }

            if (resp) {
                toast.success("User answer recorded successfully!");
            }

        } catch (error) {
            console.error("Error fetching AI response:", error);
            toast.error("User Answer Recorded Successfully!");
        }
        setResults([]);
        setUserAnswer('');
        setLoading(false);
    };


    return (
        <div className='dark flex flex-col items-center justify-center'>
            <Toaster />
            <div className='flex flex-col items-center justify-center bg-gradient-to-br from-[#0C0C0D] to-black border rounded-lg p-5 mt-5'>
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
                variant="outline" className="my-10 text-white " onClick={startStopRecording}>
                {isRecording ?
                    <h2 className='text-white flex gap-2'><Mic /> Recording...</h2>
                    : 'Record Answer'}
            </Button>

        </div>
    );
};

export default RecordAnswerSection;
