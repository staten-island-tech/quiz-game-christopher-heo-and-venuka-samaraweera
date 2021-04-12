import { questions } from "./questions";

const progress = document.querySelector("#progress");
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("#choice"));

let counter = 1;
let score = 0;
