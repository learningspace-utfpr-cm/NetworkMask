export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizData {
  title: string;
  questions: QuizQuestion[];
}

export const addressingQuiz: QuizData = {
  title: "Quiz - Endereçamento IP",
  questions: [
    {
      id: 1,
      question: "Qual é o tamanho em bits de um endereço IPv4?",
      options: ["16 bits", "32 bits", "64 bits", "128 bits"],
      correctAnswer: 1,
      explanation: "IPv4 utiliza endereços de 32 bits (4 bytes)."
    },
    {
      id: 2,
      question: "Qual versão do IP resolve as limitações do IPv4?",
      options: ["IPv3", "IPv5", "IPv6", "IPv7"],
      correctAnswer: 2,
      explanation: "IPv6 foi desenvolvido para resolver limitações do IPv4, usando endereços de 128 bits."
    },
    {
      id: 3,
      question: "Por que dividimos redes em sub-redes?",
      options: [
        "Para aumentar a velocidade da internet",
        "Para organizar e otimizar o uso de endereços IP",
        "Para reduzir o custo de hardware",
        "Para melhorar a segurança física"
      ],
      correctAnswer: 1,
      explanation: "Sub-redes ajudam a organizar e otimizar o uso de endereços IP."
    }
  ]
};

export const ipv4Quiz: QuizData = {
  title: "Quiz - IPv4",
  questions: [
    {
      id: 1,
      question: "Qual é o formato da notação decimal pontuada do IPv4?",
      options: ["xxx-xxx-xxx-xxx", "xxx.xxx.xxx.xxx", "xxx:xxx:xxx:xxx", "xxx/xxx/xxx/xxx"],
      correctAnswer: 1,
      explanation: "IPv4 usa notação decimal pontuada: xxx.xxx.xxx.xxx"
    },
    {
      id: 2,
      question: "Qual é o valor máximo de um octeto no IPv4?",
      options: ["127", "255", "256", "512"],
      correctAnswer: 1,
      explanation: "Cada octeto tem 8 bits, permitindo valores de 0 a 255."
    },
    {
      id: 3,
      question: "Qual destes endereços IPv4 é válido?",
      options: ["256.100.50.25", "192.168.1", "192.168.1.1", "abc.def.ghi.jkl"],
      correctAnswer: 2,
      explanation: "192.168.1.1 é válido. Os outros possuem octetos inválidos, faltam octetos ou não são numéricos."
    }
  ]
};

export const classfulQuiz: QuizData = {
  title: "Quiz - Endereçamento Classful",
  questions: [
    {
      id: 1,
      question: "Quantas classes principais existem no endereçamento Classful?",
      options: ["3", "5", "7", "10"],
      correctAnswer: 0,
      explanation: "As três classes principais são A, B e C. Classes D e E têm usos especiais."
    },
    {
      id: 2,
      question: "Qual classe de endereço IP inicia com bits '110'?",
      options: ["Classe A", "Classe B", "Classe C", "Classe D"],
      correctAnswer: 2,
      explanation: "Classe C inicia com os bits 110."
    },
    {
      id: 3,
      question: "Qual é a máscara de rede padrão da Classe A?",
      options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
      correctAnswer: 0,
      explanation: "Classe A usa máscara 255.0.0.0 (/8)."
    }
  ]
};

export const classlessQuiz: QuizData = {
  title: "Quiz - Endereçamento Classless (CIDR)",
  questions: [
    {
      id: 1,
      question: "O que significa CIDR?",
      options: [
        "Class Internet Domain Routing",
        "Classless Inter-Domain Routing",
        "Combined IP Domain Resolution",
        "Centralized Internet Data Registry"
      ],
      correctAnswer: 1,
      explanation: "CIDR significa Classless Inter-Domain Routing."
    },
    {
      id: 2,
      question: "No CIDR, o que indica a notação /24?",
      options: [
        "24 hosts disponíveis",
        "24 bits para a parte de rede",
        "24 sub-redes",
        "24 roteadores"
      ],
      correctAnswer: 1,
      explanation: "/24 indica que os primeiros 24 bits são usados para identificar a rede."
    },
    {
      id: 3,
      question: "Qual é a vantagem principal do CIDR sobre o Classful?",
      options: [
        "Maior velocidade de conexão",
        "Uso mais eficiente de endereços IP",
        "Melhor segurança",
        "Menor custo de equipamentos"
      ],
      correctAnswer: 1,
      explanation: "CIDR permite uso mais eficiente de endereços IP ao não seguir classes fixas."
    }
  ]
};

export const maskCalcQuiz: QuizData = {
  title: "Quiz - Cálculo de Máscara",
  questions: [
    {
      id: 1,
      question: "Quantos hosts válidos existem em uma rede /30?",
      options: ["0", "2", "4", "6"],
      correctAnswer: 1,
      explanation: "Uma rede /30 tem 2^2 - 2 = 2 hosts válidos (excluindo network e broadcast)."
    },
    {
      id: 2,
      question: "Qual é a máscara decimal de uma rede /26?",
      options: ["255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224"],
      correctAnswer: 2,
      explanation: "/26 = 11111111.11111111.11111111.11000000 = 255.255.255.192"
    },
    {
      id: 3,
      question: "Para ter pelo menos 50 hosts, qual prefixo mínimo é necessário?",
      options: ["/24", "/25", "/26", "/27"],
      correctAnswer: 2,
      explanation: "/26 fornece 2^6 - 2 = 62 hosts válidos, suficiente para 50 hosts."
    }
  ]
};
