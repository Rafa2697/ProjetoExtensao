const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

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
    finish();
  }
}
// essa função atribui ao span a quantidade de acertos da quantidade de questões. 
function finish() { 
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

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
