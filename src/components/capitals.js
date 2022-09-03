import React, { useState } from "react";
import questions from "../data/data";
import '../stylesheets/capitals.css';

function Capitals(){

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [points, setPoints] = useState(0);

    const handleAnswerButton = (correct) => {
        const nextQuestion = currentQuestion + 1;
        if(correct === true){
            setPoints(points + 1);
        }

        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true)
        }
    }

    return (
        <>
            <h1 className='title'>ENGLAND COUNTY TOWNS</h1>
            <div className='container'>
            {
                showScore ? (
                    <div className='final-message'>
                        <h1>You score {points} out {questions.length}</h1>
                    </div>
                ):(
                    <>
                        <div className='question-container'>
                            <div className='question-count'>
                                <span className='question-number'>Question {currentQuestion + 1} </span><span>/{questions.length}</span>
                            </div>
                            <div className='question-text'>
                                {
                                    questions[currentQuestion].questionText
                                }
                            </div>
                        </div>
                        <div className='answer-container'>
                            {
                                questions[currentQuestion].answerOptions.map((answerOption) =>
                                    (<button onClick={() => handleAnswerButton(answerOption.correct)}>{answerOption.answerText}</button>))
                            }
                        </div>
                    </>
                )
            }
            </div>
        </>
    );
}

export default Capitals;