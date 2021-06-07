import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "../css/game.css"

const Game = ({score,myChoice,setScore}) => {
  const [computer, setComputer] = useState("")
  const [playerWin, setPlayerWin ] = useState("")
  const [counter, setCounter] = useState(3)

  const newComputerPick=()=>{
    const choices=["rock","paper","scissors"]
    setComputer(choices[Math.floor(Math.random()*3)])
  }
  useEffect(() => {
    newComputerPick();
  }, [])

  const Result=()=>{
    if(myChoice==="rock"&& computer==="scissors")
      {
        setPlayerWin("win");
        setScore(score+1);
      }
      else if(myChoice==="paper"&& computer==="rock")
      {
        setPlayerWin("win");
        setScore(score+1);
      }
      else if(myChoice==="paper"&& computer==="scissors")
      {
        setPlayerWin("lose");
        setScore(score-1);
      }
      else if(myChoice==="scissors"&& computer==="paper")
      {
        setPlayerWin("win");
        setScore(score+1);
      }
      else if(myChoice==="scissors" && computer==="rock")
      {
        setPlayerWin("lose");
        setScore(score-1);
      }
      else if(myChoice==="rock" && computer==="papper")
      {
        setPlayerWin("lose");
        setScore(score-1);
      }else
      {
        setPlayerWin("draw")
      }
  }

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, computer]);
  
  return (
    <div className="game">
    <div className="game_you">
      <span className="text">YOU PICKED</span>
      <div
      className={ `icon-${myChoice} ${playerWin==="Win" ? `icon-${myChoice}--winner`:""}` }>
      </div>
    </div>
    {playerWin==="win" && <div className="result_play">
      <span className="text">YOU WIN</span>
      <Link to="/rock-paper-scissors/" className="play-again" onClick={()=>setComputer()}>Play Again</Link>
    </div>}
    {playerWin==="lose" && <div className="result_play">
      <span className="text">YOU LOSE</span>
      <Link to="/rock-paper-scissors/" className="play-again" onClick={()=>setComputer()}>Play Again</Link>
    </div>}
    {playerWin==="draw" && <div className="result_play">
      <span className="text">DRAW</span>
      <Link to="/rock-paper-scissors/" className="play-again" onClick={()=>setComputer()}>Play Again</Link>
    </div>}
    <div className="game_computer">
      <span className="text">COMPUTER PICKED</span>
      { counter === 0 ? <div className= {`icon-${computer} ${playerWin === "lose" ? `icon-${computer}--winner` : ""}`}>
            </div> : (<div className="counter">{counter}</div>)}
    </div>  
  </div>
      )
}

export default Game