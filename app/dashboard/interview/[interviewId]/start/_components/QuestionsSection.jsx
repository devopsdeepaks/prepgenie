import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {

    const textToSpeech = (text) => {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        }
        else {
            alert('sorry your browser does not support!!');
        }
    }


    console.log("newQuestions", mockInterviewQuestion);
    const questions = mockInterviewQuestion?.interview_questions || [];
    console.log("questions", questions);

    console.log("mockInterviewQuestion", questions);
    return mockInterviewQuestion && (
        <div className="p-5 border rounded-lg my-5">
            <div className='grid m-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {Array.isArray(mockInterviewQuestion?.interview_questions) &&
                    mockInterviewQuestion.interview_questions.length > 0 ? (
                    mockInterviewQuestion.interview_questions.map((item, index) => (
                        // <h2 key={index} className="mb-2">
                        //     <strong>Question #{index + 1}:</strong> {item.question}
                        // </h2>
                        <h2 key={index} className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex == index && 'bg-yellow text-red-500'}`}>Ques #{index + 1}:</h2>
                    ))
                ) : (
                    <p>No questions available</p>
                )}



            </div>
            <h2 className='my-5 text-md md:text-lg'>{questions[activeQuestionIndex]?.question}</h2>
            <Volume2 className='cursor-pointer w-10 h-10 text-gray-700' onClick={() => textToSpeech(questions[activeQuestionIndex]?.question)} />

            <div className='border rounded-lg p-5 bg-gray-100 mt-20'>
                <h2 className='flex gap-2 items-center text-gray-700'>
                    <Lightbulb />
                    <strong>Note : </strong>
                </h2>
                <h2 className='text-sm text-gray-700 py-2'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
            </div>
        </div >
    );
}

export default QuestionsSection;
