let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()*9)
}

function compareGuesses(human, computer, target){
  var humanResult = Math.abs(human - target)
  var computerResult = Math.abs(computer - target)
  return humanResult<=computerResult
}

function updateScore(winner){
 if (winner === 'human'){
   humanScore ++
 } else {
   computerScore ++
 }
 }

const advanceRound = () => {
  currentRoundNumber ++
}
