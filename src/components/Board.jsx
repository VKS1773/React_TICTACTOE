
import Tile from "./Tile"
import Strike from "./Strike"
function Board({ tiles, onClickHandler, playerTurn, strikeclass }) {
    return (
        <div className="board">
            <Tile playerTurn={playerTurn} onClick={() => onClickHandler(0)} value={tiles[0]} className="bottom-border right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onClickHandler(1)} value={tiles[1]} className="bottom-border right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onClickHandler(2)} value={tiles[2]} className="bottom-border " />
            <Tile playerTurn={playerTurn} onClick={() => onClickHandler(3)} value={tiles[3]} className="bottom-border right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onClickHandler(4)} value={tiles[4]} className="bottom-border right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onClickHandler(5)} value={tiles[5]} className="bottom-border " />
            <Tile playerTurn={playerTurn} onClick={() => onClickHandler(6)} value={tiles[6]} className=" right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onClickHandler(7)} value={tiles[7]} className=" right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onClickHandler(8)} value={tiles[8]} />
            <Strike strikeclass={strikeclass} />
        </div>
    )
}

export default Board