// Rock, Paper, Scissors Game

/* Function with input from user and a random function that generates between 0-2,
which corresponds to either rock paper or scissors.

*/
const gameState = {
    scoreComp: 0,
    scoreUser: 0
}

const gameOutcome = {
	USERWIN: "userwin",
	COMPUTERWIN: "computerwin",
	TIE: "tie",
}


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
function gamePlay() {
    const userSelect = prompt("Select Rock, Paper or Scissors: ").toLowerCase()
    // const unitArray = ["rock", "paper", "scissors"];
    // userSelect = unitArray[Math.floor(Math.random()*unitArray.length)];
    const computerSelect = computerPlay();

    console.log(computerSelect)
    /*
    If, else if, and else statements determining whether the user or the computer wins.
    if the computer wins its score increments with one.
    if the user wins, their score increments with one.
    */
    
    if (userSelect === "rock" && computerSelect === "paper") {
        return gameOutcome.COMPUTERWIN;
    } else if (userSelect === "rock" && computerSelect === "scissors") {
        return gameOutcome.USERWIN
    } else if(userSelect === "scissors" && computerSelect === "rock") {
        return gameOutcome.COMPUTERWIN
    } else if (userSelect === "scissors" && computerSelect === "paper") {
        return gameOutcome.USERWIN
    } else if (userSelect === "paper" && computerSelect === "rock") {
        return gameOutcome.USERWIN
    } else if (userSelect === "paper" && computerSelect === "scissor") {
        return gameOutcome.COMPUTERWIN
    } else {
        scoreComp += 0;
        scoreUser += 0;
    }

    console.log(scoreComp, scoreUser)
}

while(true) {
    const result = gamePlay()
    switch (result){
        case gameOutcome.COMPUTERWIN:
            gameState.scoreComp += 1;
            break;
        case gameOutcome.USERWIN:
            gameState.scoreUser += 1;
            break;
    
    }
    console.log("the score is: " + "user score: " + gameState.scoreUser + " and " + "computer score: " + gameState.scoreComp)
}
/* 
while function to loop the gamePlay function while the score (i) is still below 5 (?) 
for any player
*/


