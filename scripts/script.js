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

// global variables
let userScore;
let compScore;
let result;
// functions
const getCompChoice = () => {
  weapons = [`rock`, `paper`, `scissors`];
  const randomNumber = Math.trunc(Math.random() * weapons.length);
  return weapons[randomNumber];
};

const getResult = function (userSelect) {
  const computerSelect = getCompChoice();
  if (userSelect === computerSelect) {
    result = `game draw`;
  } else if (
    (userSelect === `rock` && computerSelect === `scissors`) ||
    (userSelect === `paper` && computerSelect === `rock`) ||
    (userSelect === `scissors` && computerSelect === `paper`)
  ) {
    result = `game won`;
  } else {
    result = `game lost`;
  }
};
// event listeners
btnRockEl.addEventListener(`click`, () => {
  // console.log(getResult(rock));
  const output = getResult(`rock`);
  console.log(output);
  console.log(`user selected: ${userSelect}`);
  console.log(`computer selected: ${computerSelect}`);
});


// init settings
