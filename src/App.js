
import React,{useState} from 'react'
import Usingprops from './props'
import './App.css'
import diceimg from './diceimg.jpg'

const App = () => {
  //declaring Input
  let gamenumber = []
  let snakeArr = [17, 62, 64, 54, 87, 94, 93, 98]
  let ladderArr = [4, 9, 21, 28, 51, 80, 72]
  let snakebite = [7, 19, 60, 34, 36, 75, 73, 79]
  let ladderup = [14, 31, 42, 84, 67, 99, 91]
  let dice = [1, 2, 3, 4, 5, 6]
  let dicespin = dice[Math.round(Math.random() * (dice.length - 1))]
  //Assigning value 1-100 in the gameboard
  for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
      for (let j = i; j > (i - 10); j--) {
        gamenumber.push(j)
      }
    } else {
      for (let j = (i - 9); j <= i; j++) {
        gamenumber.push(j)
      }
    }
  }
  // Using Usestate for player chances
  const [number, setNumber] = useState("player1 chance")
  function PlayerPlayingTurn() {
    if (number === "player1 chance") {
      setNumber("player2 chance")
    } else {
      setNumber("player1 chance")
    }
  }
  
  const [playerz1, setplayer1] = useState(0)
  const [playerz2, setplayer2] = useState(0)
  function PlayerMovingTurn() {
    PlayerPlayingTurn()
    if (number === "player1 chance") {
      setplayer1("player2 chance")
      if (snakeArr.includes(playerz1 + dicespin)) {
        setplayer1(snakebite[snakeArr.indexOf(playerz1 + dicespin)])
      } else if (ladderArr.includes(playerz1 + dicespin)) {
        setplayer1(ladderup[ladderArr.indexOf(playerz1 + dicespin)])
      } else {
        setplayer1(playerz1 + dicespin)
      }
    }
    else if (number === "player2 chance") {
      setplayer2("player1 chance")
      if (snakeArr.includes(playerz2 + dicespin)) {
        setplayer2(snakebite[snakeArr.indexOf(playerz2 + dicespin)])
      } else if (ladderArr.includes(playerz2 + dicespin)) {
        setplayer2(ladderup[ladderArr.indexOf(playerz2 + dicespin)])
      } else {
        setplayer2(playerz2 + dicespin)
      }
    }
  }
  //Displaying Winner
  if (playerz1 > 100) {
    setplayer1(playerz1 - dicespin)
  } else if (playerz2 > 100) {
    setplayer2(playerz2 - dicespin)
  } else if (playerz1 === 100) {
    alert("player 1 win the game")
  } else if (playerz2 === 100) {
    alert("player 2 is winner")
  }

  return (
    <div>
      <div className='gamestarting'>
        <h1 id="head">Snake Ladder</h1>
        <div id="game">
          <div id='gameboard'>{gamenumber.map(value => <div id={value.toString()}>
            <Usingprops
              number={value}
              snake={snakeArr.includes(value) ? '🐍' : ''}
              ladder={ladderArr.includes(value) ? '❤️' : ''}
              player1emoji={playerz1 == value ? 'P1🐼' : ''}
              player2emoji={playerz2 == value ? 'P2🐼' : ''}/></div>)}</div>
        </div>

        <div id="subparts">
          <img src={diceimg} alt="diceimgclicking" onClick={PlayerMovingTurn}  id="diceimg" />
          <h5>player1 position:{playerz1}</h5>
          <h5>player2 position:{playerz2}</h5>
          <h1>Random Number:{dicespin}</h1>
        </div>

      </div>
    </div>
  )
}

export default App