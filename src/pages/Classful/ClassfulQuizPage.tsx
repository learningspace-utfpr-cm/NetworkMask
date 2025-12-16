import React from 'react';
import Quiz from '../../components/Quiz';
import { classfulQuiz } from '../../data/quizzes';
import NextButton from '../../components/NextButton';

const ClassfulQuizPage: React.FC = () => {
  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <p className="quiz-info">{classfulQuiz.questions.length} questões</p>
      </div>
      <Quiz quizData={classfulQuiz} />
      <div className="page-nav-sides" style={{ marginTop: '2rem' }}>
        <NextButton 
          to="/concepts/classful" 
          direction="left" 
          label="Voltar: Classful" 
          variant="secondary" 
          ariaLabel="Voltar para Classful" 
        />
        <NextButton 
          to="/concepts/classless" 
          label="Próximo: Classless" 
          variant="primary" 
          ariaLabel="Ir para Classless" 
        />
      </div>
    </div>
  );
};

export default ClassfulQuizPage;