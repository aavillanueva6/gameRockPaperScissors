//Declaring global variables
var userChoice;
var compChoice; 
let winCount = 0;
let loseCount = 0;
let tieCount = 0;
let gameCount = 0;

// These variables are used to make calling IDs easier later
let rockBtn = document.getElementById("userRockBtn");
let paperBtn = document.getElementById("userPaperBtn");
let scissorsBtn = document.getElementById("userScissorsBtn");
let cheatBtn = document.getElementById("sneakyCheatBtn");
let resetBtn = document.getElementById("resetBtn");
let clearStatsBtn = document.getElementById("clearStatsBtn");


//Defining functions
// styleReset hides all items that can be unhidden by any of the other functions / buttons
function styleReset () {
    document.getElementById("compRock").style.display='none';
    document.getElementById("compPaper").style.display='none';
    document.getElementById("compScissors").style.display='none';
    document.getElementById("userRock").style.display='none';
    document.getElementById("userPaper").style.display='none';
    document.getElementById("userScissors").style.display='none';
    document.getElementById("tie").style.display='none';
    document.getElementById("loser").style.display='none';
    document.getElementById("winner").style.display='none';
    
    document.getElementById("resetBtn").style.display='none';
}

// clearStats resets the count of wins, losses, ties and total games to zero, and hides the stat block
function clearStats () {
    winCount = 0;
    loseCount = 0;
    tieCount = 0;
    gameCount = 0;
    document.getElementById("clearStatsBtn").style.display='none';
    document.getElementById("gamesWon").value = 0;
    document.getElementById("gamesLost").value = 0;
    document.getElementById("gamesTied").value = 0;
    document.getElementById("gamesPlayed").value = 0;
    document.getElementById("cheatMsg").style.display='none';
}

// getResult checks the user choice against the computer choice and determines the result
function getResult () {
    if (userChoice === 'Rock') {
        if (compChoice === 'Rock') {
            // tie
            tieResult();
        } else if (compChoice === 'Paper') {
            // lose
            loseResult();
        } else if (compChoice === 'Scissors') {
            // win
            winResult();
        } else {
            console.log('error in getResult')
        }
    } else if (userChoice === 'Paper') {
        if (compChoice === 'Rock') {
            // win
            winResult();
        } else if (compChoice === 'Paper') {
            // tie
            tieResult();
        } else if (compChoice === 'Scissors') {
            // lose
            loseResult();
        } else {
            console.log('error in getResult')
        }
    } else if (userChoice === 'Scissors') {
        if (compChoice === 'Rock') {
            // lose
            loseResult();
        } else if (compChoice === 'Paper') {
            // win
            winResult();
        } else if (compChoice === 'Scissors') {
            // tie
            tieResult();
        } else {
            console.log('error in getResult')
        }
    }
}

/**
 * Disables buttons
 */
function disableButtons () {
    rockBtn.disabled=true;
    paperBtn.disabled=true;
    scissorsBtn.disabled=true;
    cheatBtn.disabled=true;
    resetBtn.disabled=true;
    clearStatsBtn.disabled=true;
}

function enableButtons () {
    rockBtn.disabled=false;
    paperBtn.disabled=false;
    scissorsBtn.disabled=false;
    cheatBtn.disabled=false;
    resetBtn.disabled=false;
    clearStatsBtn.disabled=false;
}


// winResult, loseResult, tieResult are all called from the getResult function.  They print the result to the window.  first revision of the code had these in the getResult function, but then to change the output/styling that is applied, I had to change it in three places for each result.  By breaking it out, they only need to get changed once per result.
function winResult () {
    document.getElementById("winner").style.display='block';
    winCount++;
    gameCount++;
    console.log(`wins = ${winCount}`)
    console.log(`games = ${gameCount}`)
    document.getElementById("gamesWon").value = winCount;
    document.getElementById("gamesPlayed").value = gameCount;

}
function loseResult () {
    document.getElementById("loser").style.display='block';
    loseCount++;
    gameCount++;
    console.log(`losses = ${loseCount}`)
    console.log(`games = ${gameCount}`)
    document.getElementById("gamesLost").value = loseCount;
    document.getElementById("gamesPlayed").value = gameCount;
}
function tieResult () {
    document.getElementById("tie").style.display='block';
    tieCount++;
    gameCount++;
    console.log(`ties = ${tieCount}`)
    console.log(`games = ${gameCount}`)
    document.getElementById("gamesTied").value = tieCount;
    document.getElementById("gamesPlayed").value = gameCount;
}

// getComputerChoice randomly assigns a choice to the compChoice variable.  It uses Math.floor(Math.random()) as a way to define a random number and keys the choice off of the random number that is picked.
function getComputerChoice () {
    var randNum = Math.floor(Math.random()*3);
    console.log(randNum);
    if (randNum === 0) {
        console.log('Rock')
        document.getElementById("compRock").style.display='inline';
        compChoice='Rock'
        // return 'Rock'
        
    } else if (randNum === 1) {
        console.log('Paper')
        document.getElementById("compPaper").style.display='inline';
        compChoice='Paper'
        // return 'Paper'
        
    } else {
        console.log('Scissors')
        document.getElementById("compScissors").style.display='inline';
        compChoice='Scissors'
        // return 'Scissors'
        
    }
}

// provides an automatic win to the user.  First it calls the getComptureChoice function to determine the computer choice.  Then, it determines what the user needs in order to win, and makes that choice for the user.  It also displays the resetBtn in order to provide the ability for the user to reinitialize the game.
function cheatBtnFunction () {
    getComputerChoice();
        if (compChoice==='Rock') {
            userChoice='Paper'
            document.getElementById("userPaper").style.display='inline';
        } else if (compChoice ==='Paper') {
            userChoice='Scissors'
            document.getElementById("userScissors").style.display='inline';
        } else if (compChoice === 'Scissors') {
            userChoice='Rock'
            document.getElementById("userRock").style.display='inline';
        } else {
            console.log('error in cheat button')
        }
    getResult();
    document.getElementById("resetBtn").style.display='inline';
    document.getElementById("clearStatsBtn").style.display='inline';
    document.getElementById("cheatMsg").style.display='block';
    console.log('userChoice:');
    console.log(userChoice);
    console.log('compChoice:');
    console.log(compChoice);
    enableButtons();
}

// the rockBtnFunction, paperBtnFunction, and scissorsBtnFunction have similar functionality for each.  First they define the user choice, and display that choice.  Then the run the getComputerChoice function and determine the result by running the getResult function. They also display the resetBtn in order to provide the ability for the user to reinitialize the game.
function rockBtnFunction () {
    userChoice='Rock';
    document.getElementById("userRock").style.display='inline';
    getComputerChoice();
    getResult();
    document.getElementById("resetBtn").style.display='inline';
    document.getElementById("clearStatsBtn").style.display='inline';
    console.log('userChoice:');
    console.log(userChoice);
    console.log('compChoice:');
    console.log(compChoice);
    enableButtons();
}

function paperBtnFunction () {
    userChoice='Paper';
    document.getElementById("userPaper").style.display='inline';
    getComputerChoice();
    document.getElementById("resetBtn").style.display='inline';
    document.getElementById("clearStatsBtn").style.display='inline';
    console.log('userChoice:');
    console.log(userChoice);
    console.log('compChoice:');
    console.log(compChoice);
    getResult();
    enableButtons();
}

function scissorsBtnFunction () {
    userChoice='Scissors';
    document.getElementById("userScissors").style.display='inline';
    getComputerChoice();
    document.getElementById("resetBtn").style.display='inline';
    document.getElementById("clearStatsBtn").style.display='inline';
    console.log('userChoice:');
    console.log(userChoice);
    console.log('compChoice:');
    console.log(compChoice);
    getResult();
    enableButtons();
}

//Add functionality for button clicks

/* 
current functionality is to immediately reset the game. It then does a 500ms delay before calling in the function listed in the setTimeout method.

Additional desired functionality is to use the 500ms time to animate the appearance of the user choice and the computer choice.  maybe just use a fade in transition for the user choice.  For the computer choice, I want to "roll" through the options and have it "land" on the computer choice.
I have heard about setting classes in JS, and will try to use that to execute these animations.

*/

//reinitializes the game upon resetBtn click
document.getElementById("resetBtn").addEventListener("click",function(){
    styleReset();
});

rockBtn.addEventListener("click",function(){
    disableButtons();
    styleReset();
    setTimeout(rockBtnFunction,500)
    // sleep(1000);

});

paperBtn.addEventListener("click",function(){
    disableButtons();
    styleReset();
    setTimeout(paperBtnFunction,500)
});

scissorsBtn.addEventListener("click",function(){
    disableButtons();
    styleReset();
    setTimeout(scissorsBtnFunction,500)
});

cheatBtn.addEventListener("click",function(){
    disableButtons();
    styleReset();
    setTimeout(cheatBtnFunction,500)
});
document.getElementById("clearStatsBtn").addEventListener("click",function(){
    styleReset();
    clearStats();
});

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }