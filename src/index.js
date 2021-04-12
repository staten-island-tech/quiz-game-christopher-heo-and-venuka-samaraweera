import { questions } from "./questions"

const progress = document.querySelector("#progress");
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("#choice"));

let counter = 1;
let score = 0;

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
}

function setNextQuestion() {}

function selectAnswer() {}
