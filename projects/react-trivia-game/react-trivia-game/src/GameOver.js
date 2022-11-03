import React from 'react';

function GameOver(props) {
    return (
        <div id="gameOver" style={{display: "none"}} >
            <h2>Game Over</h2>
            <button className="button_submit_lg" onClick={() => window.location.reload()}>Start a New Game!</button>
        </div>
    )
}

export default GameOver;