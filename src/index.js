//answer key
let answers = ["Kakashi", "Itachi", "Minato", "Naruto", "Sasuke"];

const maxQuestions = answers.length;
const finalScore = document.getElementById("score"); //HTML score (what's being displayed)
const images = Array.from(document.querySelectorAll("[id=image]")); //array of all the images
const submitBtn = document.getElementById("submit-btn");
const choices = Array.from(document.querySelectorAll("[id=choice]")); //array of every single choice
let score = 0;

//nested array of all the choice containers that each contain the 4 choices
const choiceContainer = Array.from(
  document.querySelectorAll("[id=choice-container]")
);

let userAnswers = []; //empty list for user answer inputs

choices.forEach(function (choice) {
  choice.addEventListener("click", function () {
    userAnswers.push(choice.innerHTML); //append the displayed text of the choice to the userAnswers array
    choice.parentElement.classList.add("hidden");
    choice.parentElement.previousElementSibling.classList.add("hidden");
    endGame();
  });
});

//compare for equality
function getScore() {
  answers.forEach(function (answer) {
    userAnswers.forEach(function (userAnswer) {
      if (answer === userAnswer) {
        score++;
      }
    });
  });
}

function endGame() {
  if (userAnswers.length === maxQuestions) {
    submitBtn.classList.remove("hidden");
    getScore();
  }
}

submitBtn.addEventListener("click", function () {
  submitBtn.classList.add("hidden"); //hide the submit button upon clicking
  finalScore.classList.remove("hidden"); //reveal the score h1
  finalScore.innerHTML = `Score: ${score}`; //reveal the calculated score
});
