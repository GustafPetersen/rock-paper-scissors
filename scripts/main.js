// Rock, Paper, Scissors Game

/* Function with input from user and a random function that generates between 0-2,
which corresponds to either rock paper or scissors.

*/
const gameState = {
    SCORECOMP: 0,
    SCOREUSER: 0
    // scoreTotal: scoreUser + scoreComp
}

const gameOutcome = {
	USERWIN: "userwin",
	COMPUTERWIN: "computerwin",
	TIE: "tie",
}

const userImageSelect = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}


function computerPlay() {
    // creating an array that corresponds to computer choices
    const unitArray = ["rock", "paper", "scissors"];
    // creating random function to choose between 0, 1 and 2.
    const computerChoice = Math.floor(Math.random()*unitArray.length);
    /* return the index of unitArray of the integers ranging from 0-2 
    from the random computerChoice variable.
     */
    return unitArray[computerChoice]
    // console.log(unitArray[computerChoice])
}


// creating a function where the player inputs their choice and calls the computerPla
function gamePlay(userInput) {
    const userSelect = userInput
    console.log("You chose : " + userSelect)
    // const unitArray = ["rock", "paper", "scissors"];
    // userSelect = unitArray[Math.floor(Math.random()*unitArray.length)];
    const computerSelect = computerPlay();
    console.log("The computer chose: " + computerSelect)

    /*
    If, else if, and else statements determining whether the user or the computer wins.
    if the computer wins its score increments with one.
    if the user wins, their score increments with one.
    */

    const containerUserScore = document.getElementById("user-score");
    const containerComputerScore = document.getElementsById("computer-score");
    const containerGamesLeft = document.getElementsById("games-left")
    
    if (userSelect === "rock" && computerSelect === "paper") {
        console.log(gameOutcome.COMPUTERWIN)
        gameState.SCORECOMP += 1
        containerUserScore.innerHTML = "Your score: " + gameState.SCOREUSER;
        containerComputerScore.innerHTML = "Alien score: " + gameState.SCORECOMP;
        containerGamesLeft.innerHTML = "Your score: " + (5 - (gameState.SCORECOMP + gameState.SCOREUSER));
        return gameOutcome.COMPUTERWIN;
    } else if (userSelect === "rock" && computerSelect === "scissors") {
        console.log(gameOutcome.USERWIN)
        gameState.SCOREUSER += 1
        document.getElementsByClassName("user-score").innerHTML = "Your score: " + gameState.SCOREUSER;
        containerComputerScore.innerHTML = "Alien score: " + gameState.SCORECOMP;
        containerGamesLeft.innerHTML = "Your score: " + (5 - (gameState.SCORECOMP + gameState.SCOREUSER));
        return gameOutcome.USERWIN
    } else if(userSelect === "scissors" && computerSelect === "rock") {
        console.log(gameOutcome.COMPUTERWIN)
        gameState.SCOREUSER += 1
        document.getElementsByClassName("user-score").innerHTML = "Your score: " + gameState.SCOREUSER;
        containerComputerScore.innerHTML = "Alien score: " + gameState.SCORECOMP;
        containerGamesLeft.innerHTML = "Your score: " + (5 - (gameState.SCORECOMP + gameState.SCOREUSER));
        return gameOutcome.COMPUTERWIN
    } else if (userSelect === "scissors" && computerSelect === "paper") {
        console.log(gameOutcome.USERWIN)
        gameState.SCOREUSER += 1
        document.getElementsByClassName("user-score").innerHTML = "Your score: " + gameState.SCOREUSER;
        containerComputerScore.innerHTML = "Alien score: " + gameState.SCORECOMP;
        containerGamesLeft.innerHTML = "Your score: " + (5 - (gameState.SCORECOMP + gameState.SCOREUSER));
        return gameOutcome.USERWIN
    } else if (userSelect === "paper" && computerSelect === "rock") {
        console.log(gameOutcome.USERWIN)
        gameState.SCOREUSER += 1
        document.getElementsByClassName("user-score").innerHTML = "Your score: " + gameState.SCOREUSER;
        containerComputerScore.innerHTML = "Alien score: " + gameState.SCORECOMP;
        containerGamesLeft.innerHTML = "Your score: " + (5 - (gameState.SCORECOMP + gameState.SCOREUSER));
        return gameOutcome.USERWIN
    } else if (userSelect === "paper" && computerSelect === "scissors") {
        console.log(gameOutcome.COMPUTERWIN)
        gameState.SCOREUSER += 1
        document.getElementsByClassName("user-score").innerHTML = "Your score: " + gameState.SCOREUSER;
        containerComputerScore.innerHTML = "Alien score: " + gameState.SCORECOMP;
        containerGamesLeft.innerHTML = "Your score: " + (5 - (gameState.SCORECOMP + gameState.SCOREUSER));
        return gameOutcome.COMPUTERWIN
    } else {
        console.log(gameOutcome.TIE)
        return gameOutcome.TIE
    }
}

/* while(true) {
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
    alert("the score is: " + "user score: " + gameState.scoreUser + " and " + "computer score: " + gameState.scoreComp)
}
*/

// initiating the gameplay function when a user clicks on one of the rock, paper, and scissor images.
// document.getElementById("rock").onclick = gamePlay(userImageSelect.ROCK)
// document.getElementById("paper").onclick = gamePlay(userImageSelect.PAPER)
// document.getElementById("scissors").onclick = gamePlay(userImageSelect.SCISSORS)


/* 
while function to loop the gamePlay function while the score (i) is still below 5 (?) 
for any player
*/


