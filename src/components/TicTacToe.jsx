import { useState, useEffect } from "react"
import Board from "./Board"
import Gameover from './Gameover';
import GameState from "./Gamestate"
import Reset from "./Reset";
import GameoverSoubdAsset from "../sounds/src_sounds_game_over.wav"
import clickSoundAsset from "../sounds/src_sounds_click.wav"

const gameoversound = new Audio(GameoverSoubdAsset);
const clickSound = new Audio(clickSoundAsset);
gameoversound.volume = 0.2;
clickSound.volume = 0.2;
const PLAYER_X = "X";
const PLAYER_O = "O";


const winningcombinations = [
    //rows
    { combo: [0, 1, 2], strikeclass: "strike-row-1" },
    { combo: [3, 4, 5], strikeclass: "strike-row-2" },
    { combo: [6, 7, 8], strikeclass: "strike-row-3" },

    //columns
    { combo: [0, 3, 6], strikeclass: "strike-column-1" },
    { combo: [1, 4, 7], strikeclass: "strike-column-2" },
    { combo: [2, 5, 8], strikeclass: "strike-column-3" },

    //diogonal
    { combo: [0, 4, 8], strikeclass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeclass: "strike-diagonal-2" },

];

function checkwinner(tiles, setStrikeclass, setGamestate) {
    for (const { combo, strikeclass } of winningcombinations) {
        const val1 = tiles[combo[0]];
        const val2 = tiles[combo[1]];
        const val3 = tiles[combo[2]];
        if (val1 !== null && val1 === val2 && val1 === val3) {
            setStrikeclass(strikeclass);
            if (val1 === PLAYER_X) {
                setGamestate(GameState.playerXwins);
            }
            else {
                setGamestate(GameState.playerOwins);
            }
            return;
        }

    }
    const allTilesFilledin = tiles.every((tile) => tile !== null);
    // console.log("hello false")
    if (allTilesFilledin) {
        // console.log("hello true")
        setGamestate(GameState.draw);
    }

}
function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [strikeclass, setStrikeclass] = useState();
    const [gamestate, setGamestate] = useState(GameState.inprogress);

    useEffect(() => {
        checkwinner(tiles, setStrikeclass, setGamestate)
    }, [tiles]);

    useEffect(() => {
        if (tiles.some((tile) => tile !== null)) {
            clickSound.play();
        }
    }, [tiles])

    useEffect(() => {
        if (gamestate !== GameState.inprogress) {
            gameoversound.play();
        }
    }, [gamestate])
    const TileclickHandler = (index) => {
        if (tiles[index] != null) {
            return;
        }
        if (gamestate !== GameState.inprogress) {
            return;
        }
        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if (playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        }
        else {
            setPlayerTurn(PLAYER_X);
        }

    };
    const resetHandler = () => {
        setTiles(Array(9).fill(null));
        setPlayerTurn(PLAYER_X);
        setGamestate(GameState.inprogress);
        setStrikeclass(null);

    }
    return (
        <>
            <h1>TicTacToe</h1>
            <Board strikeclass={strikeclass} playerTurn={playerTurn} tiles={tiles} onClickHandler={TileclickHandler} />
            <Gameover gamestate={gamestate} />
            <Reset gamestate={gamestate} resetHandler={resetHandler} />
        </>
    )
}

export default TicTacToe;