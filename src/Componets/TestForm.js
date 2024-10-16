import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TestForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { questions } = location.state;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [score, setScore] = useState(0);
    
    const handleOptionSelect = (option) => {
        console.log("option ==", option);
        console.log("answer==", questions[currentIndex].Answer);
    
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentIndex] = option;
        setUserAnswers(updatedAnswers);
    
        // Check if the selected option is correct
        if (option === questions[currentIndex].Answer) {
            setScore((prevScore) => prevScore + 1);
        }
    
        // Automatically move to the next question
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {

            // Final score is already managed above, so no need to calculate again
            alert(`Your score: ${score + (option === questions[currentIndex].Answer ? 1 : 0)}/${questions.length}`  );
            // Optionally navigate to a results page
            // navigate('/results', { state: { score: score + (option === questions[currentIndex].CorrectOption ? 1 : 0), total: questions.length } });
        }
    };
    

    return (
        <div>
            <h1>Test Form</h1>
            <div>
                <h3>{questions[currentIndex].Question}</h3>

                <div>
                    {['Option1', 'Option2', 'Option3', 'Option4'].map((option, index) => (
                        <div key={index}>
                            <button onClick={() => handleOptionSelect(questions[currentIndex][option])}>
                                {questions[currentIndex][option]}
                                {console.log(questions[currentIndex][option])}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestForm;
