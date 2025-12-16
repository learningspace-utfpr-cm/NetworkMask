import React from 'react';
import Quiz from '../../components/Quiz';
import { addressingQuiz } from '../../data/quizzes';
import NextButton from '../../components/NextButton';

const AddressingQuizPage: React.FC = () => {
  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <p className="quiz-info">{addressingQuiz.questions.length} questões</p>
      </div>
      <Quiz quizData={addressingQuiz} />
      <div className="page-nav-sides" style={{ marginTop: '2rem' }}>
        <NextButton 
          to="/concepts/addressing" 
          direction="left" 
          label="Voltar: Endereçamento" 
          variant="secondary" 
          ariaLabel="Voltar para Endereçamento" 
        />
        <NextButton 
          to="/concepts/ipv4" 
          label="Próximo: IPv4" 
          variant="primary" 
          ariaLabel="Ir para IPv4" 
        />
      </div>
    </div>
  );
};

export default AddressingQuizPage;