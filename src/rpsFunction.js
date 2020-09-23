
let playerChosen
let computerChosen

const displayResult = document.getElementById('result')
const playerChoice = document.getElementById('player-choice')

var result = results()

const possibleChoices = document.querySelectorAll('.choice')
const computerChoice = document.getElementById('computer-choice')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChosen = e.target.id

  generatedComputerChoice()
  results()

  playerChoice.innerHTML = playerChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
}))

// Function for computers choice
function generatedComputerChoice() {
    let randomChoice = Math.floor(Math.random()*3)

    if (randomChoice === 0) {
      return computerChosen = 'rock'
    } 
    else if (randomChoice === 1) {
      return computerChosen = 'paper'
    } 
    else if (randomChoice === 2) {
      return computerChosen = 'scissor'
    }
}

// Function for player hands with results
function results() {
    if (computerChosen == playerChosen) {
      return result = 'It is a TIE!'
    } 
    else if (computerChosen === 'rock' && playerChosen === 'paper') {
      return result = 'You Win!'
    } 
    else if (computerChosen === 'rock' && playerChosen === 'scissors') {
      return result = 'You Lose!'
    } 
    else if (computerChosen === 'paper' && playerChosen === 'rock') {
      return result = 'You Lose!'
    } 
    else if (computerChosen === 'paper' && playerChosen === 'scissors') {
      return result = 'You Win!'
    } 
    else if (computerChosen === 'scissor' && playerChosen === 'rock') {
      return result = 'You Win!'
    } 
    else if (computerChosen === 'scissor' && playerChosen === 'paper') {
      return result = 'You Lost!'
    }
}
  