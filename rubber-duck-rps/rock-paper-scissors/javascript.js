let playerScore = 0;
let computerScore = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerChoice;

function getComputerChoice() { 
    let randomNumber = getRandomNumber(1, 3);
    if (randomNumber === 1) {
        computerChoice = "duck";
    } else if (randomNumber === 2) {
        computerChoice = "coder";
    } else if (randomNumber === 3) {
        computerChoice = "code";
    }
    return computerChoice;
}

let playerChoice;

function playRound(playerChoice, computerChoice) {
    let result;
    if (playerChoice === "duck" && computerChoice === "duck") {
        result = "You both chose rubber duck. It's a tie!";
    } else if (playerChoice === "duck" && computerChoice === "coder") {
        result = "Coder beats rubber duck. You lose.";
    } else if (playerChoice === "duck" && computerChoice === "code") {
        result = "Rubber duck beats code. You win!";
    } else if (playerChoice === "coder" && computerChoice === "coder") {
        result = "You both chose coder. It's a tie!";
    } else if (playerChoice === "coder" && computerChoice === "duck") {
        result = "Coder beats rubber duck. You win!";
    } else if (playerChoice === "coder" && computerChoice === "code") {
        result = "Code beats coder. You lose.";
    } else if (playerChoice === "code" && computerChoice === "code") {
        result = "You both chose code. It's a tie!";
    } else if (playerChoice === "code" && computerChoice === "coder") {
        result = "Code beats coder. You win!";
    } else if (playerChoice === "code" && computerChoice === "duck") {
        result = "Rubber duck beats code. You lose.";
    } 
    return result;
}

function handlePlayerChoice(choice) {
    playerChoice = choice;
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    document.getElementById("result-text").innerText = result;

    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    //Hide the buttons and show the results
    document.getElementById("buttons").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");
}

function playAgain() {
    document.getElementById("results").classList.add("hidden");
    document.getElementById("buttons").classList.remove("hidden");
} 

// Event listeners
document.getElementById("play-again").addEventListener("click", () => playAgain());
document.getElementById("duck").addEventListener("click", () => handlePlayerChoice("duck"));
document.getElementById("coder").addEventListener("click", () => handlePlayerChoice("coder"));
document.getElementById("code").addEventListener("click", () => handlePlayerChoice("code"));
