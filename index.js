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
    // return Math.floor(Math.random() * (max - min + 1) + min); // + 1 causes the max number to be inclusive, since floor returns LESS THAN or EQUAL TO
}

// TESTS
console.log(getRandomIntInclusive(1, 3));
console.log(getComputerChoice());