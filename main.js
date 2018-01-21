//@ts-check
const choices = ["rock", "paper", "scissors"];
let playerScore=0;
let computerScore=0;
let draw=0;
let games=0;
function computerPlay() {
  let randomString = Math.floor(Math.random() * choices.length);
  let randomChoice = choices[randomString];
  let output = randomChoice.charAt(0).toUpperCase() + randomChoice.slice(1);
  return output;
}
function playerSelection() {
  let input = prompt("Enter your Choice.");
  let lower = input.toLowerCase();
  if (lower == "rock" || lower == "paper" || lower == "scissors") {
    let output = lower.charAt(0).toUpperCase() + lower.slice(1);
    return output;
  } else {
    console.log(
      "Please enter a valid item from 'Rock', 'Paper' or 'Scissors'."
    );
  }
}
function playRound() {
  let player = playerSelection();
  let computer = computerPlay();
  if (player === computer) {
    draw++;
    return console.log(
      "Draw! The computer and you both selected " + player + "."
    );
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    playerScore++;
    return console.log(
      "You win this round! " + player + " beats " + computer + "."
    );
  } else {
    computerScore++;
    return console.log(
      "You lose this round.." + computer + " beats " + player + "."
    );
  }
}
function scoreCalculator(){
  let humanScore=playerScore;
  let botScore=computerScore;
  if(humanScore==botScore){
    return console.log("This game is tie.");
  }
  else if(humanScore<botScore){
    return console.log("You lose this game! :'(");
  }
  else if(humanScore>botScore){
    return console.log("Yay!, you won this game! :)");
  }
}
function game() {
  if(games==5){
    scoreCalculator();
    return console.log("You: "+ playerScore +" Computer: "+ computerScore +" Draw: "+ draw);
  }
  else{
    games++;
    playRound();
  }
}
