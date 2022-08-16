let userWin = 0;
    let computerWin = 0;
function playRound () {
    
    let user = prompt("Select your choice\(Rock, Paper or Scissors\) :");
    let userChoice = (user.charAt(0)).toUpperCase() + (user.substring(1)).toLowerCase();
    let computerChoice = getComputeChoice();
    console.log('you chose : ' + userChoice);
    console.log('computer chose :'+computerChoice);

let actualResult = check(userChoice, computerChoice);
console.log(actualResult);
}
function getComputeChoice(){
    let choice = Math.floor(Math.random() * 3);
    let a;
    if (choice == 0)
        a = 'Rock';
    if (choice == 1)
        a = 'Scissors';
    if (choice == 2)
        a = 'Paper';    
    return a;
}
function check(u, c){
    let result;
    
    if ((u == 'Rock' && c == 'Rock') || (u == 'Scissors' && c == 'Scissors') || (u == 'Paper' && c == 'Paper'))
        result  = 'Tie';
    else if ((u == 'Rock' && c == 'Scissors') || (u == 'Scissors' && c == 'Paper') || (u == 'Paper' && c == 'Rock')) {
        result = 'you won!';
        userWin ++;
       
        
    }
    else if ((u == 'Rock' && c == 'Paper') || (u == 'Scissors' && c == 'Rock') || (u == 'Paper' && c == 'Scissors')) {
        result = 'you lose!';
        computerWin ++;
    }
    else
        result = 'something went wrong';
    return result;
}

function game(){
    let round = 1;
    for(let i = 0; i<5; i++) {
        console.log('round no: '+ round);
        playRound();
        if(userWin == 3){
            print("you won the game! congrats.");
            break;
        }
        if (computerWin== 3){
            print("you lose! Better luck next time");
            break;
        }
        round ++
        
    }
}

console.log("Starting the game");
console.log("This is Rock Paper Scissors Game");
game();
