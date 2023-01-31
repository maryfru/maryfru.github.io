let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  console.log("WIN");
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_class = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `YES! ${"&#128568"} ${converToWord(
    userChoice
  )}${smallUserWord} beats ${converToWord(
    computerChoice
  )}${smallCompWord} . Well done, You win! ${"&#128571"}`;
  userChoice_class.classList.add("green-glow");
  setTimeout(() => userChoice_class.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
  console.log("LOST");
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_class = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `YIKES! ${"&#128576"} ${converToWord(
    userChoice
  )}${smallUserWord} loses to ${converToWord(
    computerChoice
  )}${smallCompWord} . You loose... ${"&#128575"} Try again!`;
  userChoice_class.classList.add("red-glow");
  setTimeout(() => userChoice_class.classList.remove("red-glow"), 300);
}
function draw(userChoice, computerChoice) {
  console.log("DRAWW");
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_class = document.getElementById(userChoice);
  result_p.innerHTML = `HAHAHA! ${"&#128572"} ${converToWord(
    userChoice
  )}${smallUserWord} equals ${converToWord(
    computerChoice
  )}${smallCompWord} . It's a draw ${"&#128569"}`;
  userChoice_class.classList.add("grey-glow");
  setTimeout(() => userChoice_class.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();
