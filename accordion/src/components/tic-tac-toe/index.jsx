import "./styles.css"
import { useEffect, useState } from "react"
import clsx from "clsx"

function Square({ val, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {val}
        </button>
    )
}

export default function TicTacToe() {
    const [squares, setSquares] = useState([...Array(9)].map(() => ''));
    const [turn, setTurn] = useState("X");
    const [moves, setMoves] = useState(0);
    const [winnerTurn, setWinnerTurn] = useState("");
    const [gameOver, setGameOver] = useState(false);

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
        ];

        for (const [a, b, c] of winners) {
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }
        return "";
    }

    function handleClick(index) {
        if (winnerTurn != "") {
            return;
        }
        if (squares[index]) {
            return;
        }
        setMoves(prev => prev + 1)
        setSquares(prev => prev.map((x, i) => i === index ? turn : x));
        setTurn(x => x === "X" ? "O" : "X")
    }

    function resetBoard(){
        setSquares(prev => prev.map(() => ""));
        setWinnerTurn("");
        setGameOver(false);
        setMoves(0)
        setTurn("X")
    }

    useEffect(() => {
        const result = CheckGame();
        if (result) {
            setWinnerTurn(result);
            setGameOver(true);
        }
        else if(moves == 9){
            setGameOver(true);
        }

    }, [squares])

    const className = clsx({
        "square": winnerTurn == "",
        "square disable": winnerTurn != "" || gameOver
    })

    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                {
                    squares.map((x, i) => [0, 1, 2].includes(i) ? <Square
                        key={i}
                        onClick={() => handleClick(i)}
                        val={squares[i]}
                        className={className}
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
                        className={className}

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
                        className={className}

                    /> : null
                    )
                }
            </div>

            {winnerTurn ? <div className="result">
                <p>The winner is {winnerTurn}!</p>
            </div>:null}

            {gameOver && !winnerTurn ?<div className="result">
                <p>The game is a Tie</p>
            </div>:null}
            
            {(gameOver || winnerTurn) && <div className="result">
                <p>Wanna play again? </p>
                <button onClick={resetBoard}>Yes</button>
            </div>}
        </div>
    )
}