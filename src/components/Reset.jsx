import React from 'react'
import GameState from "./Gamestate"
function Reset({ gamestate, resetHandler }) {

    if (GameState.inprogress === gamestate) {
        return;
    }
    else {
        return (
            <div className="reset">
                <button className="reset-btn" onClick={resetHandler}>Play Again</button>
            </div>
        )

    }


}

export default Reset;