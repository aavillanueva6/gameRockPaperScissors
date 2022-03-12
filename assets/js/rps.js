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
function styleReset() {
  document.getElementById("compRock").style.opacity = 0;
  document.getElementById("compPaper").style.opacity = 0;
  document.getElementById("compScissors").style.opacity = 0;
  document.getElementById("userRock").style.opacity = 0;
  document.getElementById("userPaper").style.opacity = 0;
  document.getElementById("userScissors").style.opacity = 0;
  document.getElementById("tie").style.display = "none";
  document.getElementById("loser").style.display = "none";
  document.getElementById("winner").style.display = "none";
  document.getElementById("resetBtn").style.display = "none";
  document.getElementById("cheatMsg").style.display = "none";
}

// clearStats resets the count of wins, losses, ties and total games to zero, and hides the stat block
function clearStats() {
  winCount = 0;
  loseCount = 0;
  tieCount = 0;
  gameCount = 0;
  document.getElementById("clearStatsBtn").style.display = "none";
  document.getElementById("gamesWon").textContent = 0;
  document.getElementById("gamesLost").textContent = 0;
  document.getElementById("gamesTied").textContent = 0;
  document.getElementById("gamesPlayed").textContent = 0;
  // document.getElementById("cheatMsg").style.display = "none";
  document.getElementById("cheatAsterisk").style.display = "none";
}

// getResult checks the user choice against the computer choice and determines the result
function getResult() {
  if (userChoice === "userRock") {
    if (compChoice === "compRock") {
      // tie
      tieResult();
    } else if (compChoice === "compPaper") {
      // lose
      loseResult();
    } else if (compChoice === "compScissors") {
      // win
      winResult();
    } else {
      console.log("error in getResult");
    }
  } else if (userChoice === "userPaper") {
    if (compChoice === "compRock") {
      // win
      winResult();
    } else if (compChoice === "compPaper") {
      // tie
      tieResult();
    } else if (compChoice === "compScissors") {
      // lose
      loseResult();
    } else {
      console.log("error in getResult");
    }
  } else if (userChoice === "userScissors") {
    if (compChoice === "compRock") {
      // lose
      loseResult();
    } else if (compChoice === "compPaper") {
      // win
      winResult();
    } else if (compChoice === "compScissors") {
      // tie
      tieResult();
    } else {
      console.log("error in getResult");
    }
  }
}

/**
 * Disables buttons
 */
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  cheatBtn.disabled = true;
  resetBtn.disabled = true;
  clearStatsBtn.disabled = true;
}

function enableButtons() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  cheatBtn.disabled = false;
  resetBtn.disabled = false;
  clearStatsBtn.disabled = false;
}

function rollIcons() {
  document.getElementById("userRockRoll").classList.add("rollIconRock");
  document.getElementById("userPaperRoll").classList.add("rollIconPaper");
  document.getElementById("userScissorsRoll").classList.add("rollIconScissors");
  document.getElementById("compRockRoll").classList.add("rollIconRock");
  document.getElementById("compPaperRoll").classList.add("rollIconPaper");
  document.getElementById("compScissorsRoll").classList.add("rollIconScissors");
  document.getElementById("userChoiceText").classList.add("bounceBox");
  document.getElementById("compChoiceText").classList.add("bounceBox");
  document.getElementById(userChoice).classList.add("rollIconChoice");
  document.getElementById(compChoice).classList.add("rollIconChoice");
}
function resetRoll() {
  document.getElementById("userRockRoll").classList.remove("rollIconRock");
  document.getElementById("userPaperRoll").classList.remove("rollIconPaper");
  document
    .getElementById("userScissorsRoll")
    .classList.remove("rollIconScissors");
  document.getElementById("compRockRoll").classList.remove("rollIconRock");
  document.getElementById("compPaperRoll").classList.remove("rollIconPaper");
  document
    .getElementById("compScissorsRoll")
    .classList.remove("rollIconScissors");
  document.getElementById("userChoiceText").classList.remove("bounceBox");
  document.getElementById("compChoiceText").classList.remove("bounceBox");
  document.getElementById(userChoice).classList.remove("rollIconChoice");
  document.getElementById(compChoice).classList.remove("rollIconChoice");
}

// winResult, loseResult, tieResult are all called from the getResult function.  They print the result to the window.  first revision of the code had these in the getResult function, but then to change the output/styling that is applied, I had to change it in three places for each result.  By breaking it out, they only need to get changed once per result.
function winResult() {
  document.getElementById("winner").style.display = "block";
  winCount++;
  gameCount++;
  console.log(`wins = ${winCount}`);
  console.log(`games = ${gameCount}`);
  document.getElementById("gamesWon").textContent = winCount;
  document.getElementById("gamesPlayed").textContent = gameCount;
}
function loseResult() {
  document.getElementById("loser").style.display = "block";
  loseCount++;
  gameCount++;
  console.log(`losses = ${loseCount}`);
  console.log(`games = ${gameCount}`);
  document.getElementById("gamesLost").textContent = loseCount;
  document.getElementById("gamesPlayed").textContent = gameCount;
}
function tieResult() {
  document.getElementById("tie").style.display = "block";
  tieCount++;
  gameCount++;
  console.log(`ties = ${tieCount}`);
  console.log(`games = ${gameCount}`);
  document.getElementById("gamesTied").textContent = tieCount;
  document.getElementById("gamesPlayed").textContent = gameCount;
}

// getComputerChoice randomly assigns a choice to the compChoice variable.  It uses Math.floor(Math.random()) as a way to define a random number and keys the choice off of the random number that is picked.
function getComputerChoice() {
  var randNum = Math.floor(Math.random() * 3);
  console.log(randNum);
  if (randNum === 0) {
    console.log("Rock");
    compChoice = "compRock";
  } else if (randNum === 1) {
    console.log("Paper");
    compChoice = "compPaper";
  } else {
    console.log("Scissors");
    compChoice = "compScissors";
  }
}

// provides an automatic win to the user.  First it calls the getComptureChoice function to determine the computer choice.  Then, it determines what the user needs in order to win, and makes that choice for the user.  It also displays the resetBtn in order to provide the ability for the user to reinitialize the game.
function cheatBtnFunction() {
  document.getElementById(userChoice).style.opacity = 1;
  document.getElementById(compChoice).style.opacity = 1;
  document.getElementById("resetBtn").style.display = "inline";
  document.getElementById("clearStatsBtn").style.display = "inline";
  document.getElementById("cheatMsg").style.display = "block";
  document.getElementById("cheatAsterisk").style.display = "inline";
  console.log("userChoice:");
  console.log(userChoice);
  console.log("compChoice:");
  console.log(compChoice);
  getResult();
  enableButtons();
  resetRoll();
}

// the rockBtnFunction, paperBtnFunction, and scissorsBtnFunction have similar functionality for each.  First they define the user choice, and display that choice.  Then the run the getComputerChoice function and determine the result by running the getResult function. They also display the resetBtn in order to provide the ability for the user to reinitialize the game.
function rockBtnFunction() {
  document.getElementById(userChoice).style.opacity = 1;
  document.getElementById(compChoice).style.opacity = 1;
  document.getElementById("resetBtn").style.display = "inline";
  document.getElementById("clearStatsBtn").style.display = "inline";
  console.log("userChoice:");
  console.log(userChoice);
  console.log("compChoice:");
  console.log(compChoice);
  getResult();
  enableButtons();
  resetRoll();
}

function paperBtnFunction() {
  document.getElementById(userChoice).style.opacity = 1;
  document.getElementById(compChoice).style.opacity = 1;
  document.getElementById("resetBtn").style.display = "inline";
  document.getElementById("clearStatsBtn").style.display = "inline";
  console.log("userChoice:");
  console.log(userChoice);
  console.log("compChoice:");
  console.log(compChoice);
  getResult();
  enableButtons();
  resetRoll();
}

function scissorsBtnFunction() {
  document.getElementById(userChoice).style.opacity = 1;
  document.getElementById(compChoice).style.opacity = 1;
  document.getElementById("resetBtn").style.display = "inline";
  document.getElementById("clearStatsBtn").style.display = "inline";
  console.log("userChoice:");
  console.log(userChoice);
  console.log("compChoice:");
  console.log(compChoice);
  getResult();
  enableButtons();
  resetRoll();
}

//Add functionality for button clicks

//reinitializes the game upon resetBtn click
document.getElementById("resetBtn").addEventListener("click", function () {
  styleReset();
});

rockBtn.addEventListener("click", function () {
  disableButtons();
  styleReset();
  getComputerChoice();
  userChoice = "userRock";
  rollIcons();
  setTimeout(scissorsBtnFunction, 2000);
});

paperBtn.addEventListener("click", function () {
  disableButtons();
  styleReset();
  getComputerChoice();
  userChoice = "userPaper";
  rollIcons();
  setTimeout(scissorsBtnFunction, 2000);
});

scissorsBtn.addEventListener("click", function () {
  disableButtons();
  styleReset();
  getComputerChoice();
  userChoice = "userScissors";
  rollIcons();
  setTimeout(scissorsBtnFunction, 2000);
});

cheatBtn.addEventListener("click", function () {
  disableButtons();
  styleReset();
  getComputerChoice();
  if (compChoice === "compRock") {
    userChoice = "userPaper";
  } else if (compChoice === "compPaper") {
    userChoice = "userScissors";
  } else if (compChoice === "compScissors") {
    userChoice = "userRock";
  } else {
    console.log("error in cheat button");
  }
  rollIcons();
  setTimeout(cheatBtnFunction, 2000);
});
document.getElementById("clearStatsBtn").addEventListener("click", function () {
  styleReset();
  clearStats();
});
