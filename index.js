function getRandomIntInclusive(min, max) {
    // take two integers to set the range boundary and generate a random number inclusive the boundary points
    return Math.round(Math.random() * (max - min) + min);
}


function getComputerChoice() {
    // randomly return "rock", "paper" or "scissors"
    let randomNumber = getRandomIntInclusive(1, 3);
    if (randomNumber === 1){
        return "rock";
    } else if (randomNumber === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

const resultDisplay = document.querySelector('#result');
const mainElem = document.querySelector('main');
const winnerAnnouncement = document.createElement('p');
// get user's choice via the button clicked
const gameButtons = document.querySelectorAll('.selection');
gameButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "rock"){
            playGame("rock", getComputerChoice());
        } else if (button.id == "paper"){
            playGame("paper", getComputerChoice());
        } else {
            playGame("scissors", getComputerChoice());
        }
    });
});

// VARIABLES to track the score
let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice, computerChoice){
    function displayPlayAgain(){
        const playAgainDiv = document.createElement('div');
        playAgainDiv.id = "play-again";
        playAgainDiv.textContent = 'Play again?';
        const playAgainButton = document.createElement('button');
        playAgainButton.classList.add("selection");
        playAgainButton.classList.add("play-again-button");
        playAgainButton.textContent = 'RESET';
        playAgainDiv.appendChild(playAgainButton);
        document.body.appendChild(playAgainDiv);
        playAgainButton.addEventListener('click', () => {
            playAgainDiv.remove();
            humanScore = 0;
            computerScore = 0;
            resultDisplay.textContent = `Human score: ${humanScore}, computer score ${computerScore}`;
            winnerAnnouncement.remove();
        })
    }

    function playRound(){
        // take two arguments respective for human and computer choice
        let winner = getWinner(humanChoice, computerChoice);
        if (winner === "human"){
            humanScore++;
        } else if (winner === "computer"){
            computerScore++;
        }
        resultDisplay.textContent = `Human score: ${humanScore}, computer score ${computerScore}`;
        console.log(`Human choice: ${humanChoice}, computer choice: ${computerChoice} \n Human score: ${humanScore}, computer score ${computerScore}`);
        if (humanScore == 5){
            displayTotalWinner("Human");
            displayPlayAgain();
        } else if (computerScore == 5){
            displayTotalWinner("Computer");
            displayPlayAgain();
        }
    }

    function displayTotalWinner(winner){
        winnerAnnouncement.textContent = `${winner} has won!`;
        mainElem.appendChild(winnerAnnouncement);
    }

    if (humanScore < 5 && computerScore < 5){
        playRound();
    }

    function getWinner(){
        // this function checks the winner in each round
        if (humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "paper" && computerChoice === "rock" || 
            humanChoice === "scissors" && computerChoice === "paper"){
                return "human";
        } else if (humanChoice === computerChoice) {
            return "tie";
        } else {
            return "computer";
        }
    }
}

playGame();
