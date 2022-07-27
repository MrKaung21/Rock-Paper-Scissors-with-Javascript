function getComputerChoice(){
    const rpsChoice = ["Rock","Paper","Scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}   

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