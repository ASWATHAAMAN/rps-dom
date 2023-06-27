`use strict`;
// select elements
const userScoreEl = document.getElementById(`user-score`);
const compScoreEl = document.getElementById(`comp-score`);
const btnRockEl = document.getElementById(`btn-rock`);
const btnPaperEl = document.getElementById(`btn-paper`);
const btnScissorsEl = document.getElementById(`btn-scissors`);
const userChoiceEl = document.getElementById(`user-choice`);
const compChoiceEl = document.getElementById(`computer-choice`);
const resultEl = document.getElementById(`result`);
const displayContainerEl = document.getElementById(`display-container`);

// global variables
let userScore;
let compScore;
let result;
let computerSelect;
// functions
const getCompChoice = () => {
  weapons = [`rock`, `paper`, `scissors`];
  const randomNumber = Math.trunc(Math.random() * weapons.length);
  return weapons[randomNumber];
};

const getResult = function (userSelect) {
  computerSelect = getCompChoice();
  if (userSelect === computerSelect) {
    result = `draw`;
  } else if (
    (userSelect === `rock` && computerSelect === `scissors`) ||
    (userSelect === `paper` && computerSelect === `rock`) ||
    (userSelect === `scissors` && computerSelect === `paper`)
  ) {
    result = `won`;
  } else {
    result = `lost`;
  }
  userChoiceEl.innerText = userSelect;
  compChoiceEl.innerText = computerSelect;
  resultEl.innerText = `you ${result}`;
  resultEl.style.display = `flex`;
  return result;
};
// event listeners
btnRockEl.addEventListener(`click`, function () {
  displayContainerEl.classList.remove(`close`);
  displayContainerEl.classList.add(`open`);
  const userSelect = this.value;
  // console.log(getResult(rock));
  const output = getResult(userSelect);
  console.log(`user selected: ${userSelect}`);
  console.log(`computer selected: ${computerSelect}`);
  console.log(`Result: ${output}`);
});

btnPaperEl.addEventListener(`click`, function () {
  displayContainerEl.classList.remove(`close`);
  displayContainerEl.classList.add(`open`);
  const userSelect = this.value;
  // console.log(getResult(rock));
  const output = getResult(userSelect);
  console.log(`user selected: ${userSelect}`);
  console.log(`computer selected: ${computerSelect}`);
  console.log(`Result: ${output}`);
});

btnScissorsEl.addEventListener(`click`, function () {
  displayContainerEl.classList.remove(`close`);
  displayContainerEl.classList.add(`open`);
  const userSelect = this.value;
  // console.log(getResult(rock));
  const output = getResult(userSelect);
  console.log(`user selected: ${userSelect}`);
  console.log(`computer selected: ${computerSelect}`);
  console.log(`Result: ${output}`);
});

// init settings
