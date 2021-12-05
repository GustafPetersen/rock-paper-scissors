// Rock, Paper, Scissors Game

/* Function with input from user and a random function that generates between 0-2,
which corresponds to either rock paper or scissors.

*/

const gameState = {
    SCORECOMP: 0,
    SCOREUSER: 0,
    SCORETOTAL: 5
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

const gameUpdateText = {
    COMPUTERWONMESSAGE: "The Aliens won that round...",
    USERWONMESSAGE: "You won that round! Great job",
    TIEMESSAGE: "That was a tie!"
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


// creating a function where the player inputs their choice and calls the computerPlay
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

    //const selectRock = () => document.querySelector("rock").addEventListener(click, userImageSelect.ROCK)
    var containerGameUpdate = document.querySelector(".game-update");
    var containerUserScore = document.querySelector(".user-score");
    var containerComputerScore = document.querySelector(".computer-score");
    var containerGamesLeft = document.querySelector(".games-left");
    
    if (gameState.SCORETOTAL > 0) {
        if (userSelect === "rock" && computerSelect === "paper") {
            gameOutcome.COMPUTERWIN
            gameState.SCORECOMP += 1
            gameState.SCORETOTAL -= 1
            containerUserScore.textContent = "Your Score: " + gameState.SCOREUSER;
            containerComputerScore.textContent = "Alien Score: " + gameState.SCORECOMP;
            containerGamesLeft.textContent = "Games Left: " + (gameState.SCORETOTAL);
            containerGameUpdate.textContent = gameUpdateText.COMPUTERWONMESSAGE;
            return gameOutcome.COMPUTERWIN;
        } else if (userSelect === "rock" && computerSelect === "scissors") {
            gameOutcome.USERWIN
            gameState.SCOREUSER += 1
            gameState.SCORETOTAL -= 1
            containerUserScore.textContent = "Your Score: " + gameState.SCOREUSER;
            containerComputerScore.textContent = "Alien Score: " + gameState.SCORECOMP;
            containerGamesLeft.textContent = "Games Left: " + (gameState.SCORETOTAL);
            containerGameUpdate.textContent = gameUpdateText.USERWONMESSAGE
            return gameOutcome.USERWIN
        } else if(userSelect === "scissors" && computerSelect === "rock") {
            gameOutcome.COMPUTERWIN
            gameState.SCORECOMP += 1
            gameState.SCORETOTAL -= 1
            containerUserScore.textContent = "Your Score: " + gameState.SCOREUSER;
            containerComputerScore.textContent = "Alien Score: " + gameState.SCORECOMP;
            containerGamesLeft.textContent = "Games Left: " + (gameState.SCORETOTAL);
            containerGameUpdate.textContent = gameUpdateText.USERWONMESSAGE
            return gameOutcome.COMPUTERWIN
        } else if (userSelect === "scissors" && computerSelect === "paper") {
            gameOutcome.USERWIN
            gameState.SCOREUSER += 1
            gameState.SCORETOTAL -= 1
            containerUserScore.textContent = "Your Score: " + gameState.SCOREUSER;
            containerComputerScore.textContent = "Alien Score: " + gameState.SCORECOMP;
            containerGamesLeft.textContent = "Games Left: " + (gameState.SCORETOTAL);
            containerGameUpdate.textContent = gameUpdateText.USERWONMESSAGE
            return gameOutcome.USERWIN
        } else if (userSelect === "paper" && computerSelect === "rock") {
            gameOutcome.USERWIN
            gameState.SCOREUSER += 1
            gameState.SCORETOTAL -= 1
            containerUserScore.textContent = "Your Score: " + gameState.SCOREUSER;
            containerComputerScore.textContent = "Alien Score: " + gameState.SCORECOMP;
            containerGamesLeft.textContent = "Games Left: " + (gameState.SCORETOTAL);
            containerGameUpdate.textContent = gameUpdateText.USERWONMESSAGE
            return gameOutcome.USERWIN
        } else if (userSelect === "paper" && computerSelect === "scissors") {
            gameOutcome.COMPUTERWIN
            gameState.SCORECOMP +=1
            gameState.SCORETOTAL -= 1
            containerUserScore.textContent = "Your Score: " + gameState.SCOREUSER;
            containerComputerScore.textContent = "Alien Score: " + gameState.SCORECOMP;
            containerGamesLeft.textContent = "Games Left: " + (gameState.SCORETOTAL);
            containerGameUpdate.textContent = gameUpdateText.COMPUTERWONMESSAGE
            return gameOutcome.COMPUTERWIN
        } else {
            gameOutcome.TIE
            containerGameUpdate.textContent = gameUpdateText.TIEMESSAGE;
            return gameOutcome.TIE
        }
    } else if (gameState.SCORETOTAL === 0 && gameState.SCOREUSER > gameState.SCORECOMP) {
        // window.alert("You won! Thanks for saving humanity! Your name will be etched into scrolls of history and remain a legend until the dawn of time.")
        if(confirm("You won! Thanks for saving humanity! Your name will be etched into scrolls of history and remain a legend until the dawn of time.")){
            window.location.reload();
        }
    } else {
            // window.alert("You lost... because of you, humanity will be wiped out of existence...")
        if(confirm("You lost... because of you, humanity will be wiped out of existence...")){
            window.location.reload();
            }
    }}