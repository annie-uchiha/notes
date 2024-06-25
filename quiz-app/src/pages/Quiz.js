import React, { useState, useEffect } from "react";
import questionsData from "../data/questionsData";
import "./Quiz.scss";

const Quiz = ({ theme }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const modules = ["HTML", "CSS", "JavaScript", "React"];

  useEffect(() => {
    const shuffledQuestions = shuffleQuestions(questionsData);
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleQuestions = (questions) => {
    let shuffled = [];
    modules.forEach((module) => {
      const moduleQuestions = questions.filter((q) => q.module === module);
      shuffled = [
        ...shuffled,
        ...moduleQuestions.sort(() => 0.5 - Math.random()).slice(0, 10),
      ];
    });
    return shuffled;
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    const questionsPerModule = 10;

    if (nextIndex < (currentModuleIndex + 1) * questionsPerModule) {
      setCurrentQuestionIndex(nextIndex);
    } else if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentQuestionIndex((currentModuleIndex + 1) * questionsPerModule);
    } else {
      setIsQuizComplete(true);
    }
  };

  if (isQuizComplete) {
    const correctAnswers = questions.reduce((total, question) => {
      if (answers[question.id] === question.correct) {
        return total + 1;
      }
      return total;
    }, 0);

    return (
      <div className={`quiz-container ${theme}`}>
        <h1>Results</h1>
        <p>You got {correctAnswers} out of 40 correct.</p>
        <h2>Questions and Correct Answers</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <p>
                <strong>Question:</strong> {question.question}
              </p>
              <p>
                <strong>Your Answer:</strong>{" "}
                {answers[question.id] || "No answer provided"}
              </p>
              <p>
                <strong>Correct Answer:</strong> {question.correct}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={`quiz-container ${theme}`}>
      {questions.length > 0 && (
        <div className="quiz-content">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="answers-container">
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <div key={index} className="answer-option">
                <input
                  type="radio"
                  id={`question-${questions[currentQuestionIndex].id}-answer-${index}`}
                  name={`question-${questions[currentQuestionIndex].id}`}
                  value={answer}
                  checked={
                    answers[questions[currentQuestionIndex].id] === answer
                  }
                  onChange={() =>
                    handleAnswer(questions[currentQuestionIndex].id, answer)
                  }
                />
                <label
                  htmlFor={`question-${questions[currentQuestionIndex].id}-answer-${index}`}
                >
                  {answer}
                </label>
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNext}>
            {currentQuestionIndex < 39 ? "Next" : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
