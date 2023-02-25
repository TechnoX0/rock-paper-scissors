const BUTTONS = document.querySelectorAll(".btn")
const PLAYER_PICK = document.querySelector("#player > .pick")
const PLAYER_SCORE = document.querySelector("#player > .score")
const COMPUTER_PICK = document.querySelector("#computer > .pick")
const COMPUTER_SCORE = document.querySelector("#computer > .score")
const WIN_DISPLAY = document.getElementById("winner")
let plScore = comScore = 0, win = false;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)+1;
    switch(choice) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissor'
        default:
            break
    }
}

function playRound(el) {
    let pSelect = el.dataset.hand
    let computerSelection = getComputerChoice()
    
    if(pSelect == computerSelection) {
        return 'It\'s a draw!'
    } else if(pSelect == 'rock' && computerSelection == 'scissor' ||
        pSelect == 'paper' && computerSelection == 'sock' ||
        pSelect == 'scissor' && computerSelection == 'paper') {
        plScore++
        PLAYER_SCORE.innerText = `Player: ${plScore}`
        return `You win! ${pSelect} beats ${computerSelection}.`
    } else {
        comScore++
        COMPUTER_SCORE.innerText = `Computer: ${comScore}`
        return `You lost! ${pSelect} beats ${computerSelection}.`
    }
}

function game(el) {
    if(win) {
        return;
    }
    let result = playRound(el)
    console.log(result)
    if(plScore >= 5) {
        WIN_DISPLAY.innerText = "Player Won!"
        win = true
    } else if(comScore >= 5) {
        WIN_DISPLAY.innerText = "Computer Won!"
        win = true
    }
}

BUTTONS.forEach(el => el.addEventListener("click", function(){game(el)}))