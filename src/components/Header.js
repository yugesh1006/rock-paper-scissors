import React from 'react'
import "../css/header.css"

const Header = ({score}) => {
    return (
        <div className="header">
            <div className="text">
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </div>
            <div className="score-box">
                <span>Score</span>
                <div className="score-box_score">{score}</div>
            </div>
        </div>
    )
}

export default Header
