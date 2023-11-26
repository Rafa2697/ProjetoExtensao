


const questions = [
  {
    question: "O que é aduana?", //questão 01
    answers: [
      { option: "A aduana é uma agência de aolicação de lei.", correct: false},
      { option: "A aduaba tem poder de prender ou processar criminisos.", correct: false },
      { option: "A aduaba é o órgão responsavel por controla a entrada e saída de mercadorias e pessoas em um país.", correct: true },
    ],
  },
  {
    question: "O que é contrabando?", //questão 02
    answers: [
      { option: "Importar mercadorias autorizadas no País.", correct: false },
      { option: "Importar ou exportar mercadorias proibidas no País.", correct: true },
      { option: "Exportar mercadorias autorizadas no País.", correct: false },

    ],
  },
  {
    question: "O que é descaminho?",  //questão 03
    answers: [
      { option: "Importar, exportar ou consumir mercadorias permitidas no País, mas sem o pagamento dos impostos.", correct: true },
      { option: "Consumir mercadorias permitidas no País.", correct: false },
      { option: "Importar mercadorias permitidas no País, mas com o pagamento dos impostos.", correct: false },

    ],
  },
  {
    question: "O que é contrafação?", //questão 04
    answers: [
      { option: "Bens legítimos, que são fabricados e distribuídos com a autorização dos detentores dos direitos de propriedade intelectual.", correct: false },
      { option: "Qualquer reprodução ou uso não autorizado de marcas registradas, conhecido como pirataria.", correct: true },
      { option: "Qualquer reprodução ou uso autorizado de marcas registradas", correct: false }

    ],
  },
  {
    question: "Onde se dá a principal atuação da Aduana?", //questão 05
    answers: [
      { option: "Sua principal atuação é nas fronteiras do país, sendo elas terrestres, aéreas ou portuárias, chamadas de zonas primárias.", correct: true },
      { option: "A aduana geralmente atua em embarcações em alto-mar.", correct: false },
      { option: "A aduana de um país atua em territórios que não fazem parte do seu próprio território nacional.", correct: false },

    ],
  },
  {
    question: "O que faz a Aduana?", //questão 06
    answers: [
      {option: "A aduana pode violar os direitos humanos dos indivíduos que estão sendo inspecionados ou controlados. ", correct: false},
      { option: "A aduana pode controlar e fiscalizar o fluxo internacional de bens, mercadorias e veículos. ", correct: false },
      { option: "A aduana pode confiscar bens ou mercadorias sem uma base legal válida, como provas de que as regulamentações alfandegárias foram violadas.", correct: false },

    ],
  },
  {
    question: "Quais são as principais consequências da pirataria?", //Questão 07
    answers: [
      { option: "A pirataria aumenta a receita de criadores e detentores de direitos autorais, ajudando sua capacidade de criar e produzir conteúdo de qualidade.", correct: false },
      { option: "Não há consequências na pirataria, só há benefícios. ", correct: false },
      { option: "Pode causar danos à saúde, prejudicar o mercado de trabalho formal e interferir no crescimento e na valorização do produto original.", correct: true },

    ],
  },
  {
    question: "Pirata é crime?", //questão 08
    answers: [
      { option: "Sim, podendo estar relacionada a outros crimes como sonegação de impostos, lavagem de dinheiro, corrupção, dentre outros.", correct: true },
      { option: "Não, pirataria envolve a reprodução autorizada, distribuição e venda de produtos protegidos por direitos autorais, como músicas, filmes, software, livros e outros tipos de conteúdo intelectual.", correct: false },
      { option: "Não, a pirataria ajuda a economia, os criadores de conteúdo e a indústria, além de contribuir para ratificação de produtos de alta qualidade.", correct: false },

    ],
  },
  {
    question: "Qual o destino das mercadorias apreendidas?", //questão 09
    answers: [
      { option: "Mercadorias que representam uma ameaça à saúde, segurança ou direitos de propriedade intelectual podem ser confiscadas e devolvidas aos remetentes.", correct: false },
      { option: "Podem ter quatro destinos, sendo: leilão, doação, incorporação e, no caso das mercadorias impróprias, destruição", correct: true },
      { option: "As mercadorias apreendidas podem ser devolvidas ao remetente ou ao exportador é eles não precisam cumprir as regulamentações aduaneiras.", correct: false }

    ],
  },
  {
    question: "Como a aduana protege um país?", //questão 10
    answers: [
      { option: "A aduana protege o país verificando o que entra e sai para garantir que nada perigoso ou ruim entre.", correct: true },
      { option: "A aduana protege o país verificando o que, somente, entra para garantir que nada perigoso entre.", correct: false },
      { option: "A aduana protege o país verificando o que, somente, sai para garantir que nada perigoso saia.", correct: false },

    ],
  },
  //geral
  {
    question: "Quais são os itens proibidos de serem importados em muitos países?", //questão 01
    answers: [
      { option: "Vestuário, tecidos e produtos têxteis em geral.", correct: false },
      { option: "Livros, filmes, música e obras de arte.", correct: false },
      { option: "Drogas ilegais, armas de fogo, produtos falsificados e materiais obscenos geralmente são proibidos de serem importados na maioria dos países.", correct: true },

    ],
  },
  {
    question: "O que é CND?", //questão 02
    answers: [
      { option: "Certidão Negativa de Débitos, documento que certifica não constarem pendências em nome da pessoa física ou jurídica.", correct: true },
      { option: "Comprovação Não Debitada, documento que comprova que o pagamento foi realizado.", correct: false },
      { option: "Certidão Negativa Dele, documento que certifica que constam pendências em nome da pessoa física ou jurídica.", correct: false },

    ],
  },
  {
    question: "Crianças podem ter CPF?", //questão 03
    answers: [
      { option: "Sim. De qualquer idade, inclusive recém-nascidos", correct: true },
      { option: "Não. Somente maiores de 18 anos.", correct: false },
      { option: "Não. Somente maiores de 10 anos. ", correct: false },

    ],
  },
  {
    question: "A receita federal é um órgão do poder legislativo, executivo ou judiciário ?", //questão 04
    answers: [
      { option: "Poder Legislativo.", correct: false },
      { option: "Poder judiciário ", correct: false },
      { option: "Poder executivo.", correct: true },
    ],
  },
  {
    question: "A qual órgão a receita federal é subordinada?",//questão 05
    answers: [
      { option: "Ministério da Economia.", correct: true },
      { option: "Ministério da Educação.", correct: false },
      { option: "Ministério do Trabalho e Previdência Social.", correct: false },
    ],
  },
  {
    question: "Quais as principais funções da Receita Federal do Brasil?",//questão 06
    answers: [
      { option: "A Receita Federal pode discriminar contribuintes com base em raça, religião, nacionalidade, gênero ou qualquer outra característica pessoal protegida por leis antidiscriminação.", correct: false },
      { option: "A administração dos tributos federais, inclusive os previdenciários e os incidentes sobre o comércio exterior.", correct: true },
      { option: "A Receita Federal pode realizar monitoramento ou vigilância sem a devida autorização legal.", correct: false },
    ],
  },

  {
    question: "Como é feita a divisão administrativa da Receita Federal?", //questão 07
    answers: [
      { option: "É dividido em auditoria e movimentações", correct: false },
      { option: "Não há divisão administrativa.", correct: false },
      { option: "Em dez regiões fiscais, exemplo: O estado de São Paulo corresponde à 8ª região fiscal. Algumas regiões são compostas por mais de um estado.", correct: true }
    ],
  },
  {
    question: "O que é CNPJ e qual a sua importância?", //questão 08
    answers: [
      { option: "Cadastro nacional de pessoa jurídica, obrigatório para o exercício das atividades da empresa.", correct: true },
      { option: "Cadastro nacional de pessoa jurídica, utilizados para comprovar estado civil e nascimento.", correct: false },
      { option: "Cadastro nacional de pessoa jurídica, é usada para registro de emprego.", correct: false }
    ],
  },
  {
    question: "Qual a importância do CNPJ para o consumidor?", //questão 09
    answers: [
      { option: "O CNPJ permite aos consumidores verificar informações privadas sobre a empresa, como saldo da conta do comerciante.", correct: false },
      { option: "Adquirir produtos e serviços de empresas devidamente formalizadas ajuda a garantir seus direitos de consumidor.", correct: true },
      { option: "O principal papel do CNPJ é não regularizar a identificação e a tributação de empresas e outras entidades jurídicas no Brasil.", correct: false},
    ],
  },
  {
    question: "O que é MEI?", //questão 10
    answers: [
      { option: "Microempreendedor individual, um pequeno empresário que se formaliza, tendo um CNPJ.", correct: true },
      { option: "SO MEI é não é exclusivo para microempreendedores individuais, ou seja, indivíduos que atuam sozinhos em atividades econômicas.", correct: false },
      { option: "O MEI pode ter vários empregados contratados. Se você pretende atuar individualmente precisará adotar outras formas jurídicas, como a ME ou a EIRELI.", correct: false },
    ],
  },
  //tributos
  {
    question: "O que significa 'tributo' ?", //questão 01
    answers: [
      { option: "TTributo são benéficos de seguro de vida.", correct: false },
      { option: "Multa que o contribuinte recebe quando erra em sua declaração.", correct: false },
      { option: "Tributo é um valor ou imposto que as pessoas e empresas devem pagar ao governo.", correct: true}
    ],
  },
  {
    question: "Qual é a função dos tributos?", //questão 02
    answers: [
      { option: "Realização de políticas sociais de saúde, educação, segurança, seguridade social e investimentos em infraestrutura.", correct: true },
      { option: "Distribuem rendas as empresas e comércios.", correct: false },
      {option: "Estimular ou desacelerar a atividade econômica.", correct: false}
    ],
  },
  {
    question: "Qual a diferença entre tributo e imposto?", //questão 03
    answers: [
      { option: "Taxa é um tipo de imposto e tributo é o valor total.", correct: false },
      { option: "Tributo é gênero, imposto é espécie, ou seja, imposto é um tipo de tributo", correct: true },
      { option: "Tributo é espécie, imposto é o valor, ou seja, imposto é um tipo de conta. ", correct: false}
    ],
  },
  {
    question: "O que é sonegação?", //questão 04
    answers: [
      { option: "Cometer erros ou equívocos na declaração de impostos, desde que sejam honestos e não intencionais", correct: false },
      { option: "Utilizar estratégias legais para minimizar sua carga tributária, como aproveitar deduções fiscais, incentivos fiscais ou estruturar suas finanças de acordo com a lei.", correct: false },
      { option: "Omitir ou fazer declaração incorreta com intenção de deixar de pagar os tributos devidos, sendo essa conduta um crime", correct: true}
    ],
  },
  {
    question: "Qual é a função da nota fiscal?", //questão 05
    answers: [
      { option: "Garantir que a venda do produto será declarada, evitando a sonegação, além de garantir os direitos do consumidor", correct: true },
      { option: "Não serve para regularização e fiscalização das operações comerciais para combater a sonegação de impostos.", correct: false },
      { option: "Não comprova a garantia do produto", correct: false}
    ],
  },
  {
    question: "O que é malha fiscal?", //questão 06
    answers: [
      {option: "Não é uma ação específica realizada pelo fisco para garantir o cumprimento das obrigações fiscais e pode resultar em ajustes.", correct: false},
      { option: "É quando uma declaração apresenta pendências, por informações incorretas, omissão de dados ou necessidade de apresentação de documentos", correct: true},
      { option: "São atividades ou processos que não envolvem análise de conformidade fiscal", correct: false},
    ]
  },
  {
    question: "O que é orçamento público?", //questão 07
    answers: [
      { option: "Empresas elaboram orçamentos financeiros para planejar suas operações e atividades, controlando receitas e despesas, bem como investimentos e estratégias de crescimento.", correct: false },
      { option: "Projetos de construção, reparo ou expansão de estruturas físicas podem ter orçamentos específicos para controlar os custos e recursos envolvidos.", correct: false },
      { option: "É um compromisso, por meio de lei, entre governo e sociedade, com a previsão de receitas e despesas públicas.", correct: true},
    ],
  },
  {
    question: "O que é restituição?", //questão 08
    answers: [
      { option: "É o valor que o contribuinte recebe quando, na entrega da declaração, é constatado que pagou mais do que deveria no período declarado.", correct: true },
      { option: "Um empréstimo envolve a transferência de dinheiro de um credor para um devedor", correct: false },
      { option: "Quando se recebe dinheiro por bens ou serviços prestados", correct: false},
    ],
  },
  {
    question: "O que é carga tributária? ", //questão 09
    answers: [
      { option: "Os juros e multas aplicados a atrasos no pagamento de tributos são parte da carga tributária, mas não são penalidades adicionais", correct: false },
      { option: "É a relação entre a soma da arrecadação total e o Produto Interno Bruto, e visa analisar o fluxo de recursos financeiros da sociedade para o Estado.", correct: true },
      { option: "O custo de bens e serviços que inclui impostos indiretos, como o Imposto sobre Valor Adicionado (IVA).", correct: false},
    ],
  },
  {
    question: "Quem pode destinar parte de seu imposto para os fundos do Direito da Criança e do Adolescente?    ", //questão 10
    answers: [
      { option: "EQualquer pessoa física ou jurídica pode destinar parte do seu imposto devido para os fundos do Direito da Criança e do Adolescente.", correct: true },
      { option: "Aqueles que optam pela declaração simplificada, que não permite deduções de impostos, podem não ter o valor devido necessário para fazer a destinação", correct: false },
      { option: "Nenhuma pessoa física ou jurídica pode destinar parte do seu imposto devido para os fundos do Direito da Criança e do Adolescente. ", correct: false},
    ],
  },

];



const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish .reiniciar");
const btnGuardarNome = document.querySelector(".finish .guardar");
const nomePrimeiro = document.querySelector('#nome_01');
const scorePrimero = document.querySelector('#score_01');






let currentIndex = 0; //index da questão atual
let questionsCorrect = 0; //quantidade de acertos

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

// essa função vai verificar se cada botão é igual a true, se sim ela irá atribuir na variavel questionsCorrect.
function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) { // vai verificar se não é a ultima questão e atribuir mais 1 na varivael contadora, e chamar a função LoadQuestion() se for a ultima é chamado a função finish()
    currentIndex++;
    loadQuestion();
  } else {
    finish()
  }
}


// essa função atribui ao span a quantidade de acertos da quantidade de questões. 
function finish() {

  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";

}
function inicio(){
  window.location.href = 'index.js'
}

//quando o usuario clicar em finalizae essa função fica responsavel pelo evento do clique e retorna o nome e a quantidade de respotas corretas
function nomeJogador() {

  btnGuardarNome.addEventListener('click', function () {
    const nome = document.getElementById('nome').value

    
    alert(`Parabens ${nome}, sua pontuação foi ${questionsCorrect}`)

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      numero: questionsCorrect,
      string: nome
    }));
    fetch('/teste', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({valor: nome}),
    })
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('erro:', error);
    })
  })

}
nomeJogador()



function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
          <button class="answer" data-correct="${answer.correct}">
            ${answer.option}
          </button>
      `;

    answers.appendChild(div);
  });

  //verifica cada botão e chama a função nextQuestion
  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();

