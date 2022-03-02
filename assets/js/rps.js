var userChoice;
var compChoice; 

const styleReset = () => {
    document.getElementById("compRock").style.display='none';
    document.getElementById("compPaper").style.display='none';
    document.getElementById("compScissors").style.display='none';
    document.getElementById("userRock").style.display='none';
    document.getElementById("userPaper").style.display='none';
    document.getElementById("userScissors").style.display='none';
    document.getElementById("tie").style.display='none';
    document.getElementById("loser").style.display='none';
    document.getElementById("winner").style.display='none';
}

const getResult = () => {
    if (userChoice === 'Rock') {
        if (compChoice === 'Rock') {
            // tie
            document.getElementById("tie").style.display='inline';
        } else if (compChoice === 'Paper') {
            // lose
            document.getElementById("loser").style.display='inline';
        } else if (compChoice === 'Scissors') {
            // win
            document.getElementById("winner").style.display='inline';
        } else {
            console.log('error')
        }
    } else if (userChoice === 'Paper') {
        if (compChoice === 'Rock') {
            // win
            document.getElementById("winner").style.display='inline';
        } else if (compChoice === 'Paper') {
            // tie
            document.getElementById("tie").style.display='inline';
        } else if (compChoice === 'Scissors') {
            // lose
            document.getElementById("loser").style.display='inline';
        } else {
            console.log('error')
        }
    } else if (userChoice === 'Scissors') {
        if (compChoice === 'Rock') {
            // lose
            document.getElementById("loser").style.display='inline';
        } else if (compChoice === 'Paper') {
            // win
            document.getElementById("winner").style.display='inline';
        } else if (compChoice === 'Scissors') {
            // tie
            document.getElementById("tie").style.display='inline';
        } else {
            console.log('error')
        }
    }
}

const getComputerChoice = () => {
    var randNum = Math.floor(Math.random()*3);
    console.log(randNum);
    if (randNum === 0) {
        console.log('Rock')
        document.getElementById("compRock").style.fontSize='larger';
        document.getElementById("compRock").style.display='inline';
        compChoice='Rock'
        // return 'Rock'
        
    } else if (randNum === 1) {
        console.log('Paper')
        document.getElementById("compPaper").style.fontSize='larger';
        document.getElementById("compPaper").style.display='inline';
        compChoice='Paper'
        // return 'Paper'
        
    } else {
        console.log('Scissors')
        document.getElementById("compScissors").style.fontSize='larger';
        document.getElementById("compScissors").style.display='inline';
        compChoice='Scissors'
        // return 'Scissors'
        
    }
}

document.getElementById("resetBtn").addEventListener("click",function(){
    styleReset();
    document.getElementById("resetBtn").style.display='none';
});

document.getElementById("userRockBtn").addEventListener("click",function(){
    styleReset();
    userChoice='Rock';
    document.getElementById("userRock").style.display='inline';
    getComputerChoice();
    getResult();
    document.getElementById("resetBtn").style.display='inline';
    console.log('userChoice:');
    console.log(userChoice);
    console.log('compChoice:');
    console.log(compChoice);
    
});


document.getElementById("userPaperBtn").addEventListener("click",function(){
    styleReset();
    userChoice='Paper';
    document.getElementById("userPaper").style.display='inline';
    getComputerChoice();
    document.getElementById("resetBtn").style.display='inline';
    console.log('userChoice:');
    console.log(userChoice);
    console.log('compChoice:');
    console.log(compChoice);
    getResult();
});


document.getElementById("userScissorsBtn").addEventListener("click",function(){
    styleReset();
    userChoice='Scissors';
    document.getElementById("userScissors").style.display='inline';
    getComputerChoice();
    document.getElementById("resetBtn").style.display='inline';
    console.log('userChoice:');
    console.log(userChoice);
    console.log('compChoice:');
    console.log(compChoice);
    getResult();
});

