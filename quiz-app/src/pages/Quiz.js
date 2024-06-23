import React, { useState, useEffect } from "react";
import questionsData from "../data/questionsData";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffleQuestions(questionsData);
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleQuestions = (questions) => {
    let shuffled = [];
    ["HTML", "CSS", "JavaScript", "React"].forEach((module) => {
      const moduleQuestions = questions.filter((q) => q.module === module);
      shuffled = [
        ...shuffled,
        ...moduleQuestions.sort(() => 0.5 - Math.random()).slice(0, 10),
      ];
    });
    return shuffled.sort(() => 0.5 - Math.random());
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setIsQuizComplete(true);
  };

  if (isQuizComplete) {
    const correctAnswers = questions.reduce((total, question) => {
      if (answers[question.id] === question.correct) {
        return total + 1;
      }
      return total;
    }, 0);

    return (
      <div>
        <h1>Results</h1>
        <p>You got {correctAnswers} out of 40 correct.</p>
      </div>
    );
  }

  return (
    <div>
      {questions.length > 0 && (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() =>
                handleAnswer(questions[currentQuestionIndex].id, answer)
              }
            >
              {answer}
            </button>
          ))}
          {currentQuestionIndex < 39 && (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            >
              Next
            </button>
          )}
          {currentQuestionIndex === 39 && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
