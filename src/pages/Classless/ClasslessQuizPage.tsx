import React from 'react';
import Quiz from '../../components/Quiz';
import { classlessQuiz } from '../../data/quizzes';
import NextButton from '../../components/NextButton';

const ClasslessQuizPage: React.FC = () => {
  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <p className="quiz-info">{classlessQuiz.questions.length} questões</p>
      </div>
      <Quiz quizData={classlessQuiz} />
      <div className="page-nav-sides" style={{ marginTop: '2rem' }}>
        <NextButton 
          to="/concepts/classless" 
          direction="left" 
          label="Voltar: Classless" 
          variant="secondary" 
          ariaLabel="Voltar para Classless" 
        />
        <NextButton 
          to="/concepts/mask-calc" 
          label="Próximo: Cálculo de máscara" 
          variant="primary" 
          ariaLabel="Ir para Cálculo de máscara" 
        />
      </div>
    </div>
  );
};

export default ClasslessQuizPage;