

function Tile({ className, value, onClick, playerTurn }) {
    return (
        <div onClick={onClick} className={`tile ${className} ${value == null ? playerTurn : ""}-hover`}>{value}</div>
    )
}

export default Tile