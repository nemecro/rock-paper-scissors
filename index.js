function getComputerChoice() {
    // randomly return "rock", "paper" or "scissors"
    // generate a random number ranging from 1 to 3
    let randomNumber = getRandomIntInclusive(1, 3);
    // if the generated random number is 1, return "rock"
    // if the generated random number is 2, return "paper"
    // if the generated random number is 3, return "scissors"
    if (randomNumber === 1){
        return "rock";
    } else if (randomNumber === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function getRandomIntInclusive(min, max) {
    // take two integers to set the range boundary and generate a random number inclusive the boundary points
    return Math.round(Math.random() * (max - min) + min);
    /*
    ALTERNATIVE CODE FOR THE FUNCTION PER MDN
    return Math.floor(Math.random() * (max - min + 1) + min);
    */
}

function getUserChoice(){
    // get user's choice via prompt
    let choice = prompt("Enter your choice: [rock, paper, scissors]");
    // if the user's choice is neither of the allowed strings, run the function again
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        alert("You entered an invalid choice, choose again");
        getUserChoice();
    }
    // make choice case insensitive
    choice = choice.toLowerCase();
    // return valid choice
    return choice;
}

function playGame(){
    // this function calls the playRound 5 times
    // VARIABLES to track the score
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        // take two arguments respective for human and computer choice
        let winner = getWinner(humanChoice, computerChoice);
        if (winner === "human"){
            // if winner is human, increment humanScore
            humanScore++;
        } else if (winner === "computer"){
            // if winner is computer, increment computerScore
            computerScore++;
        }
        // if a tie, don't increment
    }

    function getWinner(humanChoice, computerChoice){
        // this function checks the winner in each round
        // returns the winner as a string
        if (humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "paper" && computerChoice === "rock" || 
            humanChoice === "scissors" && computerChoice === "paper"){
                // if human is "rock" AND computer is "scissors"
                // if human is "paper" AND computer is "rock"
                // if human is "scissors" AND computer is "paper"
                return "human";
        } else if (humanChoice === computerChoice) {
            // if human AND computer are EQUAL 
            return "tie";
        } else {
            return "computer";
        }
    }

    // play five rounds
    let n = 0;
    while (n < 5){
        playRound(getUserChoice(), getComputerChoice());
        console.log(`User win: ${humanScore}, computer win: ${computerScore}`);
        n++;
    }
}

playGame();

// TESTS

// console.log(getRandomIntInclusive(1, 3));
// console.log(getComputerChoice());
// console.log(getUserChoice());

