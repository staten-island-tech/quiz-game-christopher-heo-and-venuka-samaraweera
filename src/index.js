const progress = document.querySelector("#progress");
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("#choice"));

let counter = 1;
let score = 0;

let questions = [
  {
    image: "./img/kakashi.jpeg",
    choice1: "Kakashi",
    choice2: "Jiraiya",
    choice3: "Tsunade",
    choice4: "Obito",
    answer: 1,
  },
  {
    image: "./img/itachi.jpeg",
    choice1: "Madara",
    choice2: "Itachi",
    choice3: "Kisame",
    choice4: "Pain",
    answer: 2,
  },
  {
    image: "./img/minato.png",
    choice1: "Jiraiya",
    choice2: "Naruto",
    choice3: "Hiruzen",
    choice4: "Minato",
    answer: 4,
  },
  {
    image: "./img/naruto.jpeg",
    choice1: "Naruto",
    choice2: "Obito",
    choice3: "Nagato",
    choice4: "Deidara",
    answer: 1,
  },
  {
    image: "./img/sasuke.png",
    choice1: "Gaara",
    choice2: "Shisui",
    choice3: "Sasuke",
    choice4: "Tobirama",
    answer: 3,
  },
];

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
}

function setNextQuestion() {}

function selectAnswer() {}
