const quizData = [
  {
    question: "Which method converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    answer: "JSON.parse()"
  },
  {
    question: "Which language runs in browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language","Hyper Text Markup Language","Hyper Text Machine Language","High Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "CSS stands for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<scripting>"],
    answer: "<script>"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "styles"],
    answer: "style"
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["bgcolor", "background-color", "color", "backgroundColor"],
    answer: "background-color"
  },
  {
    question: "Which operator is used to assign a value in JavaScript?",
    options: ["=", "==", "===", ":"],
    answer: "="
  },
  {
    question: "Which function is used to log output in JavaScript?",
    options: ["console.log()", "print()", "log()", "output()"],
    answer: "console.log()"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  }
];

let currentIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const restartBtn = document.getElementById("restartBtn");
const instructions = document.getElementById("instructions");

const questionEl = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");
const bestScoreEl = document.getElementById("bestScore");


let bestScore = localStorage.getItem("bestScore") || 0;
bestScoreEl.innerText = "Best Score: " + bestScore;


startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  instructions.style.display = "none";
  restartBtn.style.display = "none";
  currentIndex = 0;
  score = 0;
  loadQuestion();
});


function startTimer() {
  timeLeft = 10;
  timerEl.innerText = "Time: " + timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = "Time: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      currentIndex++;
      loadQuestion();
    }
  }, 1000);
}


function loadQuestion() {
  clearInterval(timer);

  if (currentIndex === quizData.length) {
    questionEl.innerText = "Quiz Finished!";
    optionsDiv.innerHTML = "";
    timerEl.innerText = "";
    
   
    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem("bestScore", bestScore);
    }

    resultEl.innerText = "Your Score: " + score;
    bestScoreEl.innerText = "Best Score: " + bestScore;

    restartBtn.style.display = "block";
    return;
  }

  questionEl.innerText = quizData[currentIndex].question;
  optionsDiv.innerHTML = "";

  quizData[currentIndex].options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => {
      clearInterval(timer);

      const allButtons = optionsDiv.querySelectorAll("button");
      allButtons.forEach(b => b.disabled = true);

      if (option === quizData[currentIndex].answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
        
        allButtons.forEach(b => {
          if (b.innerText === quizData[currentIndex].answer) {
            b.classList.add("correct");
          }
        });
      }

      setTimeout(() => {
        currentIndex++;
        loadQuestion();
      }, 1000); 
    };

    optionsDiv.appendChild(btn);
  });

  startTimer();
}


restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  resultEl.innerText = "";
  restartBtn.style.display = "none";
  quizScreen.style.display = "block";
  loadQuestion();
});
