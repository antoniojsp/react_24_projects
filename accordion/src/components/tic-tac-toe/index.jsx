import "./styles.css"
import { useEffect, useState } from "react"

function Square({ val, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            className="square"
            disabled={disabled}
        >
            {val}
        </button>
    )
}

export default function TicTacToe() {

    const [squares, setSquares] = useState([...Array(9)].map(() => ''))
    const [turn, setTurn] = useState("X")

    function CheckGame() {
        const winners = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for ()
    }

    function handleClick(index) {
        setSquares(prev => prev.map((x, i) => i === index ? turn : x));
        setTurn(x => x === "X" ? "O" : "X")
    }
    useEffect(x => {
        console.log(squares)
    }, [squares])

    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                {
                    squares.map((x, i) => [0, 1, 2].includes(i) ? <Square
                        key={i}
                        onClick={() => handleClick(i)}
                        val={squares[i]}
                        disabled={squares[i] != ""}
                    /> : null
                    )
                }
            </div>
            <div className="row">
                {
                    squares.map((x, i) => [3, 4, 5].includes(i) ? <Square
                        key={i}
                        onClick={() => handleClick(i)}
                        val={squares[i]}
                        disabled={squares[i] != ""}
                    /> : null
                    )
                }
            </div>
            <div className="row">
                {
                    squares.map((x, i) => [6, 7, 8].includes(i) ? <Square
                        key={i}
                        onClick={() => handleClick(i)}
                        val={squares[i]}
                        disabled={squares[i] != ""}
                    /> : null
                    )
                }
            </div>

        </div>
    )
}