import React from 'react';
import '../../styles/pages.css';
import NextButton from '../../components/NextButton';

const IPv4Page: React.FC = () => {
  return (
    <div className="concepts-page">
      <h2>IPv4 — Endereçamento de 32 bits</h2>

      <p>
        No IPv4 o endereço possui 32 bits (4 bytes). Em vez da notação binária, 
        normalmente usa-se a notação decimal pontuada (dot-decimal). Cada byte do 
        endereço é representado por um número decimal (0–255) e os quatro octetos 
        são separados por pontos.
      </p>

      <ul>
        <li>Exemplos de endereços: 130.132.9.31, 200.241.16.8, 10.0.0.0</li>
        <li>
          Formato: 4 octetos → <em>xxx.xxx.xxx.xxx</em> (cada octeto 0–255)
        </li>
      </ul>

      <h3>Exemplos — IPs válidos e inválidos</h3>
      <ul>
        <li>
          ✅ Válidos:
          <ul>
            <li>192.168.0.1</li>
            <li>10.0.0.5</li>
            <li>8.8.8.8</li>
          </ul>
        </li>
        <li>
          ❌ Inválidos:
          <ul>
            <li>256.100.50.25 &nbsp;(octeto &gt;255)</li>
            <li>
              192.168.1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(faltam
              octetos)
            </li>
            <li>192.168.1.1.5 &nbsp;&nbsp;(octetos demais)</li>
            <li>abc.def.ghi.jkl &nbsp;&nbsp;(não numérico)</li>
            <li>192.168.-1.5 &nbsp;&nbsp;&nbsp;&nbsp;(valor negativo)</li>
          </ul>
        </li>
      </ul>
      
      <div className="page-nav-sides">
        <NextButton to="/quiz/addressing" direction="left" label="Anterior: Quiz Endereçamento" variant="secondary" ariaLabel="Voltar para Quiz de Endereçamento" />
        <NextButton to="/quiz/ipv4" label="Quiz: IPv4" variant="primary" ariaLabel="Ir para Quiz de IPv4" />
      </div>
    </div>
  );
};

export default IPv4Page;