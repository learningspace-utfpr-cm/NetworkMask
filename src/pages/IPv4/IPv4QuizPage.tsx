import React from 'react';
import Quiz from '../../components/Quiz';
import { ipv4Quiz } from '../../data/quizzes';
import NextButton from '../../components/NextButton';

const IPv4QuizPage: React.FC = () => {
  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <p className="quiz-info">{ipv4Quiz.questions.length} questões</p>
      </div>
      <Quiz quizData={ipv4Quiz} />
      <div className="page-nav-sides" style={{ marginTop: '2rem' }}>
        <NextButton 
          to="/concepts/ipv4" 
          direction="left" 
          label="Voltar: IPv4" 
          variant="secondary" 
          ariaLabel="Voltar para IPv4" 
        />
        <NextButton 
          to="/concepts/classful" 
          label="Próximo: Classful" 
          variant="primary" 
          ariaLabel="Ir para Classful" 
        />
      </div>
    </div>
  );
};

export default IPv4QuizPage;