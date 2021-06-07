import React from 'react'
import { Link } from 'react-router-dom'
import "../css/play.css"
import Triangle from "../img/bg-triangle.svg"

const Play = ({setMyChoice}) => {
        const setChoice=(e)=>{
            setMyChoice(e.target.dataset.id);
        }
    return (
        <div className="play">
            <img src={Triangle} alt="my_triangle" className="triangle"/>
            <div className="items">
                <Link to="/rock-paper-scissors/game">
                    <div data-id="paper" onClick={setChoice} className="icon icon--paper">
                    </div>
                </Link>
                <Link to="/rock-paper-scissors/game">
                    <div data-id="scissors" onClick={setChoice} className="icon icon--scissors"> 
                    </div>
                </Link>
                <Link to="/rock-paper-scissors/game">
                    <div data-id="rock" onClick={setChoice} className="icon icon--rock">
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Play;