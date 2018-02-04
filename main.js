//@ts-check

//Computer Choices in array
const choices = ["rock", "paper", "scissors"];


// Game Score
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
  let input = document.getElementById('button').value;
  //let lower = input.toLowerCase();
  //console.log(lower);
  if (input == "rock" || input == "paper" || input == "scissors") {
    let output = input.charAt(0).toUpperCase() + input.slice(1);
    return output;
  } else {
    console.log("Please select a valid item from 'Rock', 'Paper' or 'Scissors'.");
  }
}


function playRound() {
  let player = playerSelection();
  let computer = computerPlay();
  const container = document.getElementById('message');
  if (player === computer) {
    draw++;
    let para=document.createElement('p');
    let text=para.textContent="Draw! The computer and you both selected " + player + ".";
    container.appendChild(para);
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    playerScore++;
    let para=document.createElement('p');
    let text=para.textContent="You win this round! " + player + " beats " + computer + ".";
    container.appendChild(para);
  } else {
    computerScore++;
    let para=document.createElement('p');
    let text=para.textContent="You lose this round.." + computer + " beats " + player + ".";
    container.appendChild(para);
  }
  game();
}


function scoreCalculator(){
  let humanScore=playerScore;
  let botScore=computerScore;
  const container = document.getElementById('message');
  if(humanScore==botScore){
    let para=document.createElement('p');
    let text=para.textContent="This game is draw.";
    container.appendChild(para);
  }
  else if(humanScore<botScore){
    let para=document.createElement('p');
    let text=para.textContent="You lose this game! :'(";
    container.appendChild(para);
  }
  else if(humanScore>botScore){
    let para=document.createElement('p');
    let text=para.textContent="Yay!, you won this game! :)";
    container.appendChild(para);
  }
}


function game() {
  const container = document.getElementById('message');
if(games==5){
    scoreCalculator();
    let para=document.createElement('p');
    let text=para.textContent="You: "+ playerScore +" Computer: "+ computerScore +" Draw: "+ draw;
    container.appendChild(para);
  }
  else{
    games++;
  //  playRound();
  }
}
