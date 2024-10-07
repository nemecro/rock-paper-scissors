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
    // return valid choice
    return choice;
}

// TESTS

console.log(getRandomIntInclusive(1, 3));
console.log(getComputerChoice());
console.log(getUserChoice());