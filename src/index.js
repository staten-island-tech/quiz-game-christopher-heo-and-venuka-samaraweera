//answer key
let answers = ["Kakashi", "Itachi", "Minato", "Naruto", "Sasuke"];

const MAXQUESTIONS = 5;
const finalScore = document.getElementById("score"); //HTML score (what's being displayed)
const images = document.querySelectorAll("[id=image]"); //array of all the images
const submitBtn = document.getElementById("submit-btn");
const choices = document.querySelectorAll("[id=choice]"); //array of every single choice
let score = 0;

//nested array of all the choice containers that each contain the 4 choices
const choiceContainer = document.querySelectorAll("[id=choice-container]");

let userAnswers = []; //empty list for user answer inputs

// loop to attribute event listener (when pressed, push the displayed HTML to userAnswers array) to every choice
for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function () {
    userAnswers.push(choices[i].innerHTML); //append the displayed text of the choice to the userAnswers array
    for (let j = 0; j < choiceContainer.length; j++) {
      //whenever a choice is selected, its parent container and image gets deleted
      if (choiceContainer[j] === choices[i].parentElement) {
        choiceContainer[j].classList.add("hidden");
        images[j].classList.add("hidden");
      }

      //once all the questions are answered, hide the last image and container, calculate score, reveal submit button, and end the game
      if (userAnswers.length === MAXQUESTIONS) {
        choiceContainer[MAXQUESTIONS - 1].classList.add("hidden");
        images[MAXQUESTIONS - 1].classList.add("hidden");
        getScore();
        submitBtn.classList.remove("hidden");
        break;
      }
    }
  });
}

<<<<<<< Updated upstream
for (let i = 0; i < choiceContainer.length; i++) {
  for (let j = 0; j < choiceContainer[0].length; j++) {
    addEventListener("click", function () {
      userAnswers.push(choiceContainer[i].children[j].innerHTML);
      console.log(userAnswers);
    });
  }
}
=======
//compare for equality
function getScore() {
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < userAnswers.length; j++) {
      //iterate through all values of userAnswers array to compare to the answers array, increment score if equal
      if (answers[i] === userAnswers[j]) {
        score++;
      }
    }
  }
}

submitBtn.addEventListener("click", function () {
  submitBtn.classList.add("hidden"); //hide the submit button upon clicking
  finalScore.classList.remove("hidden"); //reveal the score h1
  finalScore.innerHTML = `Score: ${score}`; //reveal the calculated score
});
>>>>>>> Stashed changes
