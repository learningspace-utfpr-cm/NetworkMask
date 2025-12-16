import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConceptsPage from '../pages/ConceptsPage';
import SimulatorPage from '../pages/SimulatorPage';
import QuizPage from '../pages/QuizPage';
import ClasslessPage from '../pages/Classless/ClasslessPage';
import MaskCalculationPage from '../pages/MaskCalc/MaskCalcPage';
import AddressingPage from '../pages/Adressing/AdressingPage';
import ClassfulPage from '../pages/Classful/ClassfulPage';
import IPv4Page from '../pages/IPv4/IPv4Page';
import AddressingQuizPage from '../pages/Adressing/AdressingQuizPage';
import IPv4QuizPage from '../pages/IPv4/IPv4QuizPage';
import ClassfulQuizPage from '../pages/Classful/ClassfulQuizPage';
import ClasslessQuizPage from '../pages/Classless/ClasslessQuizPage';
import MaskCalcQuizPage from '../pages/MaskCalc/MaskCalcQuizPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ConceptsPage />} />
      <Route path="/simulator" element={<SimulatorPage />} />
      <Route path="/quiz" element={<QuizPage />} />

      <Route path="/concepts" element={<ConceptsPage />} />
      <Route path="/concepts/addressing" element={<AddressingPage />} />
      <Route path="/concepts/ipv4" element={<IPv4Page />} />
      <Route path="/concepts/classful" element={<ClassfulPage />} />
      <Route path="/concepts/classless" element={<ClasslessPage />} />
      <Route path="/concepts/mask-calc" element={<MaskCalculationPage />} />
      <Route path="/quiz/addressing" element={<AddressingQuizPage />} />
      <Route path="/quiz/ipv4" element={<IPv4QuizPage />} />
      <Route path="/quiz/classful" element={<ClassfulQuizPage />} />
      <Route path="/quiz/classless" element={<ClasslessQuizPage />} />
      <Route path="/quiz/mask-calc" element={<MaskCalcQuizPage />} />
    </Routes>
  );
};

export default AppRoutes;