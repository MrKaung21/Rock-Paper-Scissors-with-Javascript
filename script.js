// getting computer choice randomly
function getComputerChoice(){
    const rpsChoice = ["Rock","Paper","Scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    
    return rpsChoice[randomNumber]
    
}   

//getting result with 0,1,-1
function getResult(playerChoice , computerChoice){
    let score
    if(playerChoice === computerChoice){
        score = 0
    }else if(playerChoice === 'Rock' && computerChoice === 'Scissors'){
        score = 1
    }else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
        score = 1
    }else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
        score = 1
    }else{
        score = -1
    }
    
    return score
}


//showing result with DOM Manipulation
function showResult(score,playerChoice,computerChoice){

    let result = document.querySelector("#result")
    switch (score){
        case -1:
            result.innerText = `You Lose!`
            break;
        case 0:
            result.innerText = `Its a draw!`
            break;
        case 1:
            result.innerText = `You Win!`
            break;

    }

    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `Your Score: ${score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`

}

//getting choice with button value
function onClickRps(playerChoice){
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice , computerChoice)
    showResult(score,playerChoice,computerChoice)
    
}


//playing the game by clicking buttons
function playGame(){
    let rpsButtons = document.querySelectorAll(".rpsButton")
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRps(rpsButton.value)
        
    })

    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
    
}

function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()
