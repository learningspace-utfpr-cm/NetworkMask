import React, { useState } from 'react';
import { QuizData } from '../data/quizzes';
import '../styles/pages.css';

interface QuizProps {
  quizData: QuizData;
}

const Quiz: React.FC<QuizProps> = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(quizData.questions.length).fill(false)
  );

  const handleAnswerClick = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;

    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === quizData.questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(quizData.questions.length).fill(false));
  };

  if (showResult) {
    return (
      <div className="quiz-container">
        <h2>Resultado Final</h2>
        <p className="quiz-score">
          Você acertou {score} de {quizData.questions.length} questões
        </p>
        <p className="quiz-percentage">
          Aproveitamento: {Math.round((score / quizData.questions.length) * 100)}%
        </p>
        <button onClick={handleRestart} className="quiz-button">
          Refazer Quiz
        </button>
      </div>
    );
  }

  const question = quizData.questions[currentQuestion];
  const isAnswered = answeredQuestions[currentQuestion];

  return (
    <div className="quiz-container">
      <h2>{quizData.title}</h2>
      <div className="quiz-progress">
        Questão {currentQuestion + 1} de {quizData.questions.length}
      </div>
      
      <div className="quiz-question">
        <h3>{question.question}</h3>
        
        <div className="quiz-options">
          {question.options.map((option, index) => {
            const isCorrectAnswer = index === question.correctAnswer;
            const isSelected = index === selectedAnswer;
            
            let buttonClass = 'quiz-option';
            let emoji = '';
            
            if (isAnswered) {
              if (isCorrectAnswer) {
                buttonClass += ' correct';
                emoji = ' ✅';
              } else if (isSelected) {
                buttonClass += ' incorrect';
                emoji = ' ❌';
              }
            }
            
            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswered}
                className={buttonClass}
              >
                {option}{emoji}
              </button>
            );
          })}
        </div>

        {isAnswered && question.explanation && (
          <div className="quiz-explanation">
            <strong>Explicação:</strong> {question.explanation}
          </div>
        )}

        {isAnswered && (
          <button onClick={handleNextQuestion} className="quiz-button quiz-next">
            {currentQuestion < quizData.questions.length - 1 ? 'Próxima' : 'Ver Resultado'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;