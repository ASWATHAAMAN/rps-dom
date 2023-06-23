`use strict`;
// select elements
const userScoreEl = document.getElementById(`user-score`);
const compScoreEl = document.getElementById(`comp-score`);
const btnRockEl = document.getElementById(`btn-rock`);
const btnPaperEl = document.getElementById(`btn-paper`);
const btnScissorsEl = document.getElementById(`btn-scissors`);
const ansEl = document.getElementById(`ans`);
const resultEl = document.getElementById(`result`);

// global variables
let userScore;
let compScore;
// functions
const getCompChoice = () => {
  weapons = [`rock`, `paper`, `scissors`];
  const randomNumber = Math.trunc(Math.random() * weapons.length);
  return weapons[randomNumber];
};
// event listeners
btnRockEl.addEventListener(`click`, () => {
  const computerChoice = getCompChoice();
  if (btnRockEl === computerChoice) {
    return `game draw`;
  } else if (btnRockEl && computerChoice === `scissors`) {
    return `game won`;
  } else {
    return `game lost`;
  }
});

// init settings
