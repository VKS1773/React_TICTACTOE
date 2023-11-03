

import Gamestate from "./Gamestate"
function Gameover({ gamestate }) {
    switch (gamestate) {
        case Gamestate.inprogress:
            return (<div></div>)
        case Gamestate.playerXwins:
            return (<div className="game-over">X-Wins</div>)
        case Gamestate.playerOwins:
            return (<div className="game-over">O-wins</div>)
        case Gamestate.draw:
            return (<div className="game-over">draw</div>)
        default:
            return (<></>);
    }

}

export default Gameover