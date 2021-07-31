const buttons = document.querySelectorAll(".selection");
console.log(buttons.length);




let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let rpsChoice = [ "Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random()*rpsChoice.length);
    return rpsChoice[randomIndex];

}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    let result;



    if( (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper")
    || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") ){
        playerScore++;
        result = "You win!";
    }
    else if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        result = "It's a draw";
    }
    else{
        computerScore++;
        result = "You lose";
    }

    document.getElementById("display").innerHTML = result + " Player: " + playerScore + " Computer: " + computerScore;

    if(playerScore + computerScore == 5){
        document.getElementById("display").innerHTML = "The end! Time for a new match! Player: " + playerScore + " Computer: " + computerScore;
        playerScore = 0;
        computerScore = 0;
    }


}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
});
