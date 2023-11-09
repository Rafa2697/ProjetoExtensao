 export default [
  {
    question: "O que é contrabando?", //questão 01
    answers: [
      { option: "Cadastro de pessoas nacionais, armazena informações apenas de brasileiros", correct: true },
      { option: "Cadastro de pessoas físicas, registro que armazena informações cadastrais de todos os cidadãos inscritos e é gerenciado pela receita federal.", correct: false },
      { option: "Documento de Identidade, que garante os direitos ao cidadão.", correct: false },
    ],
  },
  {
    question: "O que é a aduana?", //questão 02
    answers: [
      { option: "Importar mercadorias autorizadas no País.", correct: false },
      { option: "Importar ou exportar mercadorias proibidas no País.", correct: true },
      { option: "Exportar mercadorias autorizadas no País.", correct: false},
      
    ],
  },
  {
    question: "O que é descaminho?",  //questão 03
    answers: [
      { option: "Importar, exportar ou consumir mercadorias permitidas no País, mas sem o pagamento dos impostos", correct: true },
      { option: "Consumir mercadorias permitidas no País", correct: false },
      { option: "Importar mercadorias permitidas no País, mas com o pagamento dos impostos.", correct: false},
      
    ],
  },
  {
    question: "Qual a importancia do CNPJ para o consumidor?", //questão 04
    answers: [
      { option: "Bens legítimos, que são fabricados e distribuídos com a autorização dos detentores dos direitos de propriedade intelectual.", correct: false },
      { option: "Qualquer reprodução ou uso não autorizado de marcas registradas, conhecido como pirataria.", correct: true },
      { option: "Qualquer reprodução ou uso autorizado de marcas registradas", correct: false}
      
    ],
  },
  {
    question: "Onde se dá a principal atuação da Aduana?",
    answers: [
      { option: "Sua principal atuação é nas fronteiras do país, sendo elas terrestres, aéreas ou portuárias, chamadas de zonas primárias.", correct: true },
      { option: "A aduana geralmente atua em embarcações em alto-mar.", correct: false },
      { option: "A aduana de um país atua em territórios que não fazem parte do seu próprio território nacional.", correct: false},
      
    ],
  },
  {
    question: "O que faz a Aduana?",
    answers: [
      { option: "A aduana pode controlar e fiscalizar o fluxo internacional de bens, mercadorias e veículos. ", correct: true },
      { option: "A aduana pode confiscar bens ou mercadorias sem uma base legal válida, como provas de que as regulamentações alfandegárias foram violadas.", correct: false },
      
    ],
  },
  {
    question: "Quais são as principais consequências da pirataria?", //Questão 07
    answers: [
      { option: "A pirataria aumenta a receita de criadores e detentores de direitos autorais, ajudando sua capacidade de criar e produzir conteúdo de qualidade.", correct: false },
      { option: "Não há consequências na pirataria, só há benefícios. ", correct: false },
      { option: "Pode causar danos à saúde, prejudicar o mercado de trabalho formal e interferir no crescimento e na valorização do produto original.", correct: true},
      
    ],
  },
  {
    question: "Pirata é crime?", //questão 08
    answers: [
      { option: "Sim, podendo estar relacionada a outros crimes como sonegação de impostos, lavagem de dinheiro, corrupção, dentre outros.", correct: true },
      { option: "Não, pirataria envolve a reprodução autorizada, distribuição e venda de produtos protegidos por direitos autorais, como músicas, filmes, software, livros e outros tipos de conteúdo intelectual.", correct: false },
      { option: "Não, a pirataria ajuda a economia, os criadores de conteúdo e a indústria, além de contribuir para ratificação de produtos de alta qualidade.", correct: false},
      
    ],
  },
  {
    question: "Qual o destino das mercadorias apreendidas?", //questão 09
    answers: [
      { option: "Mercadorias que representam uma ameaça à saúde, segurança ou direitos de propriedade intelectual podem ser confiscadas e devolvidas aos remetentes.", correct: false },
      { option: "Podem ter quatro destinos, sendo: leilão, doação, incorporação e, no caso das mercadorias impróprias, destruição", correct: true },
      { option: "As mercadorias apreendidas podem ser devolvidas ao remetente ou ao exportador é eles não precisam cumprir as regulamentações aduaneiras.", correct: false}
      
    ],
  },
  {
    question: "Como a aduana protege um país?", //questão 10
    answers: [
      { option: "A aduana protege o país verificando o que entra e sai para garantir que nada perigoso ou ruim entre.", correct: true },
      { option: "A aduana protege o país verificando o que, somente, entra para garantir que nada perigoso entre.", correct: false },
      { option: "A aduana protege o país verificando o que, somente, sai para garantir que nada perigoso saia.", correct: false},
      
    ],
  },
  //geral
  {
    question: "Quais são os itens proibidos de serem importados em muitos países?", //questão 01
    answers: [
      { option: "Vestuário, tecidos e produtos têxteis em geral.", correct: false },
      { option: "Livros, filmes, música e obras de arte.", correct: false },
      { option: "Drogas ilegais, armas de fogo, produtos falsificados e materiais obscenos geralmente são proibidos de serem importados na maioria dos países.", correct: true},
      
    ],
  },
  {
    question: "O que é CND?", //questão 02
    answers: [
      { option: "Certidão Negativa de Débitos, documento que certifica não constarem pendências em nome da pessoa física ou jurídica.", correct: true },
      { option: "Comprovação Não Debitada, documento que comprova que o pagamento foi realizado.", correct: false },
      { option: "Certidão Negativa Dele, documento que certifica que constam pendências em nome da pessoa física ou jurídica.", correct: false},
      
    ],
  },
  {
    question: "Crianças podem ter CPF?", //questão 03
    answers: [
      { option: "Sim. De qualquer idade, inclusive recém-nascidos", correct: true},
      { option: "Não. Somente maiores de 18 anos.", correct: false },
      {option: "Não. Somente maiores de 10 anos. ", correct: false},
      
    ],
  },
  {
    question: "A receita federal é um órgão do poder legislativo, executivo ou judiciário ?", //questão 04
    answers: [
      { option: "Poder Legislativo.", correct: false},
      { option: "Poder judiciário ", correct: false },
      { option: "Poder executivo.", correct: true},
    ],
  },
  {
    question: "A qual órgão a receita federal é subordinada?",//questão 05
    answers: [
      { option: "Ministério da Economia.", correct: false},
      { option: "Ministério da Educação.", correct: true },
      { option: "Ministério do Trabalho e Previdência Social.", correct: false},
    ],
  },
  {
    question: "Quais as principais funções da Receita Federal do Brasil?",//questão 06
    answers: [
      { option: "A Receita Federal pode discriminar contribuintes com base em raça, religião, nacionalidade, gênero ou qualquer outra característica pessoal protegida por leis antidiscriminação.", correct: false},
      { option: "A administração dos tributos federais, inclusive os previdenciários e os incidentes sobre o comércio exterior.", correct: true },
      { option: "A Receita Federal pode realizar monitoramento ou vigilância sem a devida autorização legal.", correct: false},
    ],
  },
 
  {
    question: "Como é feita a divisão administrativa da Receita Federal?", //questão 07
    answers: [
      { option: "É dividido em auditoria e movimentações", correct: false },
      { option: "Não há divisão administrativa.", correct: false },
      { option: "Em dez regiões fiscais, exemplo: O estado de São Paulo corresponde à 8ª região fiscal. Algumas regiões são compostas por mais de um estado.", correct: true}
    ],
  },
  {
    question: "O que é CNPJ e qual a sua importância?", //questão 08
    answers: [
      { option: "Cadastro nacional de pessoa jurídica, obrigatório para o exercício das atividades da empresa.", correct: true },
      { option: "Cadastro nacional de pessoa jurídica, utilizados para comprovar estado civil e nascimento.", correct: false },
      { option: "Cadastro nacional de pessoa jurídica, é usada para registro de emprego.", correct: false}
    ],
  },
  {
    question: "Qual a importância do CNPJ para o consumidor?", //questão 09
    answers: [
      { option: "O CNPJ permite aos consumidores verificar informações privadas sobre a empresa, como saldo da conta do comerciante.", correct: false },
      { option: "Adquirir produtos e serviços de empresas devidamente formalizadas ajuda a garantir seus direitos de consumidor.", correct: true },
      { option: "O principal papel do CNPJ é não regularizar a identificação e a tributação de empresas e outras entidades jurídicas no Brasil.", correct: true},
    ],
  },
  {
    question: "O que é MEI?", //questão 10
    answers: [
      { option: "Microempreendedor individual, um pequeno empresário que se formaliza, tendo um CNPJ.", correct: true },
      { option: "SO MEI é não é exclusivo para microempreendedores individuais, ou seja, indivíduos que atuam sozinhos em atividades econômicas.", correct: false },
      { option: "O MEI pode ter vários empregados contratados. Se você pretende atuar individualmente precisará adotar outras formas jurídicas, como a ME ou a EIRELI.", correct: false},
    ],
  },
  //tributos
  {
    question: "O que é restituição?", //questão 01
    answers: [
      { option: "É o valor que o contribuinte recebe quando, na entrega da declaração, é constatado que pagou mais do que deveria no período declarado.", correct: true },
      { option: "Multa que o contribuinte recebe quando erra em sua declaração.", correct: false },
    ],
  },
  {
    question: "O que é CND?",
    answers: [
      { option: "Certidão Negativa de Débitos, documento que certifica não constarem pendências (por isso o termo negativa) em nome da pessoa física ou jurídica.", correct: true },
      { option: "Cadastro Nacional de Deficientes, documento que garante a qualquer portador de deficiencia física seus direitos.", correct: false },
    ],
  },
  {
    question: "Qual o destino das mercadorias apreendidas?",
    answers: [
      { option: "São destruidas.", correct: false },
      { option: "Podem ter quatro destinos, sendo: leilão, doação, incorporação e, no caso das mercadorias impróprias, destruição..", correct: true },
    ],
  },
  {
    question: "O que é renuncia fiscal?",
    answers: [
      { option: "Quando o poder público começa a arrecadar tributos através de isenções de diminuição de alíquotas (percentual), dentre outros.", correct: false },
      { option: "Quando o poder público deixa de arrecadar tributos através de isenções de diminuição de alíquotas (percentual), dentre outros.", correct: true },
    ],
  },
  {
    question: "O que é MEI?",
    answers: [
      { option: "Micro Empresa Independente, uma empresa de pequeno porte.", correct: false },
      { option: "Microempreendedor individual, um pequeno empresário que se formaliza, tendo um CNPJ.", correct: true },
    ],
  },
  //inserir pergunta e respostas.
  {
    question: "Qual é a cota de isenção de impostos na bagagem em viagens terrestres?",
    answers: [
      { option: "US$500, caso os itens estejam dentro do conceito de bagagem.", correct: true },
      { option: "US$300, caso os itens estejam dentro do conceito de bagagem.", correct: false },
    ],
  },
  
];
