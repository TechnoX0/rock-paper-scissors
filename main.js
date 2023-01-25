let playerScore = computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)+1;
    switch(choice) {
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissor'
        default:
            break
    }
}

function playRound(playerSelection, computerSelection) {
    let pSelect = playerSelection.toUpperCase()
    console.log(`Player: ${pSelect}\nComputer: ${computerSelection}`)
    if(pSelect == computerSelection.toUpperCase()) {
        return 'It\'s a draw!'
    } else if(pSelect == 'ROCK' && computerSelection == 'Scissor' ||
        pSelect == 'PAPER' && computerSelection == 'Rock' ||
        pSelect == 'SCISSOR' && computerSelection == 'Paper') {
        playerScore++
        return `You win! ${pSelect} beats ${computerSelection}.`
    } else {
        computerScore++
        return `You lost! ${pSelect} beats ${computerSelection}.`
    }
}

function game() {
    let score;
    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt('Enter you choice: ')
        playRound(playerChoice, getComputerChoice())
    }
    playerScore > computerScore ? console.log(`Player wins with ${playerScore} points!`) : console.log(`Computer wins with ${computerScore} points!`)
    playerScore = computerScore = 0
}

game()