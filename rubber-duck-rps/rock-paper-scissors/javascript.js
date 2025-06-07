function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerChoice;

function getComputerChoice() { 
    let randomNumber = getRandomNumber(1, 3);
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else if (randomNumber === 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let playerChoice;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        return "You both chose rock. It's a tie!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "Paper beats rock. You lose.";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "Rock beats scissors. You win!";
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        return "You both chose paper. It's a tie!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "Paper beats rock. You win!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "Scissors beats paper. You lose.";
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        return "You both chose scissors. It's a tie!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "Scissors beats paper. You win!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "Rock beats scissors. You lose.";
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        let roundResult = playRound(playerChoice, computerChoice);
        if (roundResult.includes("win")) {
            console.log(roundResult);
            playerScore++;
            console.log(`Score - Player: ${playerScore} Computer: ${computerScore}`);
        } else if (roundResult.includes("tie")) {
            console.log(roundResult);
            playerScore++;
            computerScore++;
            console.log(`Score - Player: ${playerScore} Computer: ${computerScore}`);
        } else if (roundResult.includes("lose")) {
            console.log(roundResult);
            computerScore++;
            console.log(`Score - Player: ${playerScore} Computer: ${computerScore}`);
        }
        }
        if (playerScore === computerScore) {
            console.log("Game over. It's a tie!");
        } else if (playerScore > computerScore) {
            console.log("Game over. You won!");
        } else if (playerScore < computerScore) {
            console.log("Game over. You lost."); 
        } 
    }

game();