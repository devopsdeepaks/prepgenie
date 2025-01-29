import React from 'react';

function QuestionsSection({ mockInterviewQuestion }) {
    return (
        <div className="p-5 border rounded-lg">
            <h2 className="font-bold mb-3">Interview Questions</h2>
            <div>
                {Array.isArray(mockInterviewQuestion) && mockInterviewQuestion.length > 0 ? (
                    mockInterviewQuestion.map((question, index) => (
                        <h2 key={index} className="mb-2">
                            <strong>Question #{index + 1}:</strong> {question}
                        </h2>
                    ))
                ) : (
                    <p>No questions available</p>
                )}
            </div>
        </div>
    );
}

export default QuestionsSection;
