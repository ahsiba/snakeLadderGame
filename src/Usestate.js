import React from 'react'
import './input'

const Usestate = () => {

    const [number, setNumber] = Usestate("player1 chance")
    function playerPlayingTurn() {
        if (number === "player1 chance") {
            setNumber("player2 chance")
        } else {
            setNumber("player1 chance")
        }
    }
    const [playerz1, setplayer1] = Usestate(1)
    // const [playerz2, setplayer2] = Usestate(1)
    function playerMovingTurn() {
        playerPlayingTurn()
        if (number === "player1 chance") {
            setplayer1("player2 chance")
            let playerposition = playerz1 + dicespin
            if (snakeArr.includes(playerposition)) {
                let position = snakebite[snakeArr.indexOf(playerposition)]
                setplayer1(position)
            } else if (ladderArr.includes(playerposition)) {
                let position = ladderup[ladderArr.indexOf(playerposition)]
                setplayer1(position)
            } else {
                setplayer1(playerposition)
            }
        }
    }

return (
    <div>
        <div>{playerMovingTurn }</div>
    </div>
)
}


export default Usestate
