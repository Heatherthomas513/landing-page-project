function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerChoice;

function getComputerChoice() { 
    let randomNumber = getRandomNumber(1, 3);
    if (randomNumber === 1) {
        computerChoice = "rubberDuck";
    } else if (randomNumber === 2) {
        computerChoice = "coder";
    } else if (randomNumber === 3) {
        computerChoice = "code";
    }
    return computerChoice;
}

let playerChoice;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rubberDuck" && computerChoice === "rubberDuck") {
        return "You both chose rubber duck. It's a tie!";
    } else if (playerChoice === "rubberDuck" && computerChoice === "coder") {
        return "Coder beats rubber duck. You lose.";
    } else if (playerChoice === "rubberDuck" && computerChoice === "code") {
        return "Rubber duck beats code. You win!";
    } else if (playerChoice === "coder" && computerChoice === "coder") {
        return "You both chose coder. It's a tie!";
    } else if (playerChoice === "coder" && computerChoice === "rubberDuck") {
        return "Coder beats rubber duck. You win!";
    } else if (playerChoice === "coder" && computerChoice === "code") {
        return "Code beats coder. You lose.";
    } else if (playerChoice === "code" && computerChoice === "code") {
        return "You both chose code. It's a tie!";
    } else if (playerChoice === "code" && computerChoice === "coder") {
        return "Code beats coder. You win!";
    } else if (playerChoice === "code" && computerChoice === "rubberDuck") {
        return "Rubber duck beats code. You lose.";
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        playerChoice = prompt("Rubber duck, coder, or code?").toLowerCase();
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