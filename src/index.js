import { questions } from "./questions";

const choices = document.querySelectorAll("[id=choice]");
let score = 0;
let progress = 0;

const choiceContainer = document.querySelectorAll("[id=choice-container]");
console.log(choiceContainer[0].children[0]);
console.log(choiceContainer[1].children.length);

choiceContainer[1].children[1].setAttribute("data-value", 1);

console.log(choiceContainer[1].children[1].dataset.value);

// for (let i = 0; i < choiceContainer[0].children.length; i++) {
//   let value = i + 1;
//   console.log(value);
//   choiceContainer[0].children[i].setAttribute("data-value", value);
//   addEventListener("click", function () {
//     let dataValue = choiceContainer[0].children[i].dataset.value;
//     console.log(dataValue);
//   });
// }

//every time a button is clicked, store the string of the input in an array
//compare the string to the actual answer at the end

const userAnswers = [];

console.log(choice[1].innerHTML);

for (let i = 0; i < choiceContainer[0].children.length; i++) {
  addEventListener("click", function () {
    userAnswers.push(choice[i].innerHTML);
    console.log(userAnswers);
  });
}
