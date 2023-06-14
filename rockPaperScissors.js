let userWin = 0;
let computerWin = 0;



function getUserChoice(userChoice) {

    
    let computerChoice = getComputerChoice();
    
    
    let yourChoice = document.querySelector('#yourChoice');
    let docComputerChoice = document.querySelector('#computerChoice')
    yourChoice.innerHTML = `Player:  ${settingStickers(userChoice)}`;
    docComputerChoice.innerHTML = `Computer:  ${settingStickers(computerChoice)}`
    let actualResult = check(userChoice, computerChoice);
    
  
   

}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
        return 'ROCK'
        case 1:
        return 'PAPER'
        case 2:
        return 'SCISSORS'
    }
}

function settingStickers(userChoice) {
let st='';
switch(userChoice){
    case 'ROCK':
        return '<i class="fa-solid fa-hand-back-fist"></i>';
    case 'SCISSORS':
        return '<i class="fa-solid fa-hand-scissors">';
    case 'PAPER':
        return '<i class="fa-solid fa-hand"></i>'
}
}
function check(u, c){
    let result;
    
    if ((u == 'ROCK' && c == 'ROCK') || (u == 'SCISSORS' && c == 'SCISSORS') || (u == 'PAPER' && c == 'PAPER')){
        result  = 'Tie';
        
    }
        
    else if ((u == 'ROCK' && c == 'SCISSORS') || (u == 'SCISSORS' && c == 'PAPER') || (u == 'PAPER' && c == 'ROCK')) {
        result = 'you won!';
        ++userWin;
        if(isGameOver()){
            
            alert('Congratulations. You won!')
            userWin = 0;
            computerWin = 0;
            computerScoreBoard.textContent = computerWin;
            
        }
        let userScoreBoard = document.querySelector('#userScoreBoard');
        userScoreBoard.textContent = userWin;
       
        
    }
    else if ((u == 'ROCK' && c == 'PAPER') || (u == 'SCISSORS' && c == 'ROCK') || (u == 'PAPER' && c == 'SCISSORS')) {
        result = 'you lose!';
        ++computerWin;
        if(isGameOver()){
            
            alert('you lost the game ');
            userWin = 0;
            computerWin = 0;
            userScoreBoard.textContent = userWin;
            
        }
        let computerScoreBoard = document.querySelector('#computerScoreBoard');
        computerScoreBoard.textContent = computerWin;
    }
   
        

    let resultBoard = document.querySelector('#resultBoard');
    resultBoard.textContent =result;
    return result;

    
}


function isGameOver() {
    if(userWin >= 5 || computerWin >= 5){
        return true;
    }
else return false;
     
}
function game() {
    
        let btnRock = document.querySelector('#btnRock');
        let btnPaper = document.querySelector('#btnPaper');
        let btnScissors = document.querySelector('#btnScissors');

        btnPaper.addEventListener('click', () => getUserChoice('PAPER'));
        btnRock.addEventListener('click', () => getUserChoice('ROCK'));
        btnScissors.addEventListener('click', () => getUserChoice('SCISSORS'));
    
    
}

    game();
    
    



   

