import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages.css';
import NextButton from '../../components/NextButton';

const AddressingPage: React.FC = () => {
  return (
    <div className="concepts-page">
      <h2>Endereçamento IP</h2>

      <p>
        Endereço definido na camada de rede da arquitetura TCP/IP para
        identificar, de forma única, cada interface de rede conectada
        (computadores, servidores, roteadores, switches, smartphones).
      </p>

      <blockquote className="quote">
        "Na Internet, cada host e cada roteador tem um endereço IP que codifica seu número de rede e seu
número de host. A combinação é exclusiva: em princípio, duas máquinas na Internet nunca têm o
mesmo endereço IP." (TANENBAUM)
      </blockquote>

      <p>
        Existem duas versões principais do protocolo IP:
      </p>

      <ul>
        <li>
          <strong>IPv4:</strong> Endereços de 32 bits (4 bytes). É a versão mais utilizada atualmente.
        </li>
        <li>
          <strong>IPv6:</strong> Endereços de 128 bits. Resolve muitas limitações do IPv4 — porém não será abordado nesta aplicação.
        </li>
      </ul>

      <h3>Subredes</h3>
      <p>
        Para organizar e otimizar o uso de endereços IP, redes podem ser
        subdivididas em redes menores.
      </p>
      <p>
        Para um melhor entendimento são necessários conceitos como máscaras de
        rede, classful, classless e CIDR.
      </p>
      
      <div className="page-nav-sides">
        <NextButton to="/" direction="left" label="Início" variant="secondary" ariaLabel="Voltar para Início" />
        <NextButton to="/quiz/addressing" label="Quiz: Endereçamento" variant="primary" ariaLabel="Ir para Quiz de Endereçamento" />
      </div>
    </div>
  );
};

export default AddressingPage;