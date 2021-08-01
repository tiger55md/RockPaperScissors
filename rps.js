const buttons = document.querySelectorAll(".selection"); //Used to choose all of the input elements
console.log(buttons.length); //just verifying the length, to check if everything works fine




let playerScore = 0;
let computerScore = 0;

//this function randomly chooses what the computer is going to play
function computerPlay(){
    let rpsChoice = [ "Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random()*rpsChoice.length);
    return rpsChoice[randomIndex];

}


//the main function, evaluates everything that is played
function playRound(playerSelection){
    let computerSelection = computerPlay();
    let result;
    changeImage(playerSelection, computerSelection);
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

function changeImage(playerSelection, computerSelection){
    let playerImg = document.getElementsByClassName("player")[0];
    let computerImg = document.getElementsByClassName("computer")[0];
    if(playerSelection.toUpperCase() === 'ROCK'){
        playerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png";
        if(computerSelection.toUpperCase() === "ROCK"){
            computerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png";
        }
        else if(computerSelection.toUpperCase() === "PAPER"){
            computerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/paper.png";
        }
        else{
            computerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/scissors.png";
        }
    }
    else if(playerSelection.toUpperCase() === "PAPER"){
        playerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/paper.png";
        if(computerSelection.toUpperCase() === "ROCK"){
            computerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png";
        }
        else if(computerSelection.toUpperCase() === "PAPER"){
            computerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/paper.png";
        }
        else{
            computerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/scissors.png";
        }
    }
    else{
        playerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/scissors.png";
        if(computerSelection.toUpperCase() === "ROCK"){
            computerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png";
        }
        else if(computerSelection.toUpperCase() === "PAPER"){
            computerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/paper.png";
        }
        else{
            computerImg.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/scissors.png";
        }

    }
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
});
