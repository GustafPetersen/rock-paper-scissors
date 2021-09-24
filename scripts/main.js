// Rock, Paper, Scissors Game

/* Function with input from user and a random function that generates between 0-2,
which corresponds to either rock paper or scissors.

*/

function computerPlay() {
    // creating an array that corresponds to computer choices
    const unitArray = ["rock", "paper", "scissors"];
    // creating random function to choose between 0, 1 and 2.
    let computerChoice = Math.floor(Math.random()*unitArray.length);
    /* return the index of unitArray of the integers ranging from 0-2 
    from the random computerChoice variable.
     */
    return unitArray[computerChoice]
    // console.log(unitArray[computerChoice])
}

// creating a function where the player inputs their choice and calls the computerPla
function gamePlay(userSelect, computerPlay) {
    // userSelect = prompt("Select Rock, Paper or Scissors: ")
    const unitArray = ["rock", "paper", "scissors"];
    userSelect = unitArray[Math.floor(Math.random()*unitArray.length)];
    // userSelect = userSelect.toLowerCase()
    let scoreComp;
    let scoreUser;

    /*
    If, else if, and else statements determining whether the user or the computer wins.
    if the computer wins its score increments with one.
    if the user wins, their score increments with one.
    */
    
    if (userSelect === "rock" && computerPlay === "paper") {
        scoreComp += 1
        console.log("the score is: " + "user score: " + scoreUser + " and " + "computer score: " + scoreComp)
    } else if (userSelect === "rock" && computerPlay === "scissors") {
        scoreUser += 1
        console.log("the score is: " + "user score: " + scoreUser + " and " + "computer score: " + scoreComp)
    } else if(userSelect === "scissors" && computerPlay === "rock") {
        scoreComp += 1
        console.log("the score is: " + "user score: " + scoreUser + " and " + "computer score: " + scoreComp)
    } else if (userSelect === "scissors" && computerPlay === "paper") {
        scoreUser += 1
        console.log("the score is: " + "user score: " + scoreUser + " and " + "computer score: " + scoreComp)
    } else if (userSelect === "paper" && computerPlay === "rock") {
        scoreUser += 1
        console.log("the score is: " + "user score: " + scoreUser + " and " + "computer score: " + scoreComp)
    } else if (userSelect === "paper" && computerPlay === "scissor") {
        scoreComp += 1
        console.log("the score is: " + "user score: " + scoreUser + " and " + "computer score: " + scoreComp)
    } else {
        scoreComp += 0;
        scoreUser += 0;
    }

    console.log(scoreComp, scoreUser)
}

gamePlay()
/* 
while function to loop the gamePlay function while the score (i) is still below 5 (?) 
for any player
*/


