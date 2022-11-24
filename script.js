
let totalScore = {computerScore: 0, playerScore: 0}


const getComputerChoice = () =>{
  
const rpsChoice = ["Rock", "Paper", "Scissor"]
const randomNumber = Math.floor(Math.random() * 3)
return rpsChoice[randomNumber]

}
// console.log(getComputerChoice())

function getResult(playerChoice, computerChoice) {
  let score = 0

  if (playerChoice === computerChoice) {
    score = 0
  } else if (playerChoice === "Rock" && computerChoice === "Scissor"){
    score = 1
  } else if (playerChoice === "Paper" && computerChoice === "Rock"){
    score = 1
  } else if (playerChoice === "Scissor" && computerChoice === "Paper"){
    score = 1
  } else {
    score = -1
  }
  return score

}

function showResult(score, playerChoice, computerChoice){

  const ChooseRPCdiv = document.getElementById("ChooseRPC")
  const resultdiv = document.getElementById("result")
  const pointsdiv = document.getElementById("points")

  if (score <= -1) {
    resultdiv.innerText = "You chose Lose!"
  } else if (score == 0){
    resultdiv.innerText = "It's a tie!"
  } else  {
    resultdiv.innerText = "You chose Won!"
  }

 ChooseRPCdiv.innerText = `You Chose ${playerChoice} & Bot Chose ${computerChoice}`

  pointsdiv.innerText =  `Your Score : ${totalScore['playerScore']}`
}

function onClickRPS (playerChoice){
  console.log({playerChoice})
  const computerChoice = getComputerChoice()
  console.log({computerChoice})
  const score = getResult(playerChoice, computerChoice)
  totalScore["playerScore"] += score
  showResult(score, playerChoice, computerChoice)
  console.log({totalScore})
  console.log({score})

}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton")

  rpsButtons.forEach( rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  const endGameButton = document.getElementById("endGameButton")
  endGameButton.onclick = () => endGame(totalScore)

}

function endGame(totalScore){
  totalScore["playerScore"] = 0
  totalScore["computerScore"] = 0

  const ChooseRPCdiv = document.getElementById("ChooseRPC")
  const resultdiv = document.getElementById("result")
  const pointsdiv = document.getElementById("points")

  ChooseRPCdiv.innerText = ``
  resultdiv.innerText = ``
  pointsdiv.innerText = `Points`
}

playGame()