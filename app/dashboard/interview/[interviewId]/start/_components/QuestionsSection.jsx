import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
    const [isClient, setIsClient] = useState(false);
    const questions = mockInterviewQuestion?.interview_questions || [];

    useEffect(() => {
        setIsClient(true);
    }, []);

    const textToSpeech = (text) => {
        if (isClient && typeof window !== "undefined" && 'speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        } else {
            alert('Sorry, your browser does not support speech synthesis.');
        }
    };

    return mockInterviewQuestion && (
        <div className="dark p-5 border rounded-lg my-5 bg-gradient-to-br from-[#0C0C0D] to-black">
            <div className='grid m-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {questions.length > 0 ? (
                    questions.map((item, index) => (
                        <h2 key={index}
                            className={`p-2 bg-cyan-500 text-white rounded-full text-xs md:text-sm text-center cursor-pointer 
                            ${activeQuestionIndex === index ? 'bg-green-500 text-white' : ''}`}>
                            Ques #{index + 1}
                        </h2>
                    ))
                ) : (
                    <p className='text-white'>No questions available</p>
                )}
            </div>

            {questions.length > 0 && activeQuestionIndex >= 0 && activeQuestionIndex < questions.length ? (
                <>
                    <h2 className='my-5 text-white text-md md:text-lg'>{questions[activeQuestionIndex].question}</h2>
                    <Volume2 className='cursor-pointer  w-10 h-10 text-white' onClick={() => textToSpeech(questions[activeQuestionIndex].question)} />
                </>
            ) : (
                <h2 className='my-5 text-md md:text-lg'>No question selected</h2>
            )}

            <div className='border rounded-lg p-5 bg-gray-100 mt-10'>
                <h2 className='flex gap-2 items-center text-gray-700'>
                    <Lightbulb />
                    <strong>Note : </strong>
                </h2>
                <h2 className='text-sm text-gray-700 py-2'>
                    {process.env.NEXT_PUBLIC_INFORMATION || "No additional information available"}
                </h2>
            </div>
        </div>
    );
}

export default QuestionsSection;
