import React from 'react';
import Quiz from '../../components/Quiz';
import { maskCalcQuiz } from '../../data/quizzes';
import NextButton from '../../components/NextButton';

const MaskCalcQuizPage: React.FC = () => {
  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <p className="quiz-info">{maskCalcQuiz.questions.length} questões</p>
      </div>
      <Quiz quizData={maskCalcQuiz} />
      <div className="page-nav-sides" style={{ marginTop: '2rem' }}>
        <NextButton 
          to="/concepts/mask-calc" 
          direction="left" 
          label="Voltar: Cálculo de máscara" 
          variant="secondary" 
          ariaLabel="Voltar para Cálculo de máscara" 
        />
        <NextButton 
          to="/simulator" 
          label="Próximo: Simulador" 
          variant="primary" 
          ariaLabel="Ir para Simulador" 
        />
      </div>
    </div>
  );
};

export default MaskCalcQuizPage;