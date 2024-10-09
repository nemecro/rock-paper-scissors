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

function playGame(){
    // display result
    const resultDisplay = document.querySelector('#result');
    const mainElem = document.querySelector('main');
    const winnerAnnouncement = document.createElement('p');

    // VARIABLES to track the score
    let humanScore = 0;
    let computerScore = 0;

    function getWinner(humanChoice, computerChoice){
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

    function playRound(humanChoice, computerChoice){
        // take two arguments respective for human and computer choice
        let winner = getWinner(humanChoice, computerChoice);
        if (winner === "human"){
            humanScore++;
        } else if (winner === "computer"){
            computerScore++;
        }
        resultDisplay.textContent = `Human score: ${humanScore}, computer score ${computerScore}`;
        console.log(`Human choice: ${humanChoice}, computer choice: ${computerChoice} \n Human score: ${humanScore}, computer score ${computerScore}`);
        
        function displayWinner(winner){
            winnerAnnouncement.textContent = `${winner} has won!`;
            mainElem.appendChild(winnerAnnouncement);
        }
        if (humanScore >= 5){
            displayWinner(humanScore);

        } else if (computerScore >= 5){
            displayWinner(computerScore);
        }
    }

    // get user's choice via the button clicked
    const gameButtons = document.querySelectorAll('.selection');
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id == "rock"){
                playRound("rock", getComputerChoice());
            } else if (button.id == "paper"){
                playRound("paper", getComputerChoice());
            } else {
                playRound("scissors", getComputerChoice());
            }
        });
    });
}

playGame();
