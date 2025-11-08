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
    const [tilesLight, setTilesLight] = useState([]);
    const [isTie, setIsTie] = useState(false);
    const [isWon, setIsWon] = useState(false);


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
                setTilesLight(prev => [a, b, c])
                return [a, b, c];
            }
        }
        return [];
    }

    function handleClick(index) {
        if (moves == 9) {
            return;
        }
        if (squares[index]) {
            return;
        }
        setMoves(prev => prev + 1)
        setSquares(prev => prev.map((x, i) => i === index ? turn : x));
        setTurn(x => x === "X" ? "O" : "X")
    }

    function resetBoard() {
        setSquares(prev => prev.map(() => ""));
        setWinnerTurn("");
        setGameOver(false);
        setMoves(0);
        setTurn("X");
        setIsTie(false);
        setIsWon(false);
    }

    useEffect(() => {
        const result = CheckGame();
        if (result.length > 0) {
            setWinnerTurn(result);
            setGameOver(true);
            setIsWon(true)
        }
        else if (moves == 9) {
            setIsTie(true);
            setGameOver(true);
        }

    }, [squares])


    const className = clsx({
        "square": winnerTurn == "",
        "square disable": winnerTurn != "" || gameOver,
    })

    return (
        <div className="tic-tac-toe-container">
            <h1>Tic-Tac-Toe! </h1>
            {!gameOver &&
                <h3>
                    It's {turn} time!
                </h3>
            }
            <div className="row">
                {
                    squares.map((x, i) => {
                        const class_name = clsx(className, { light: winnerTurn && tilesLight.includes(i) })
                        return [0, 1, 2].includes(i) ? <Square
                            key={i}
                            onClick={() => handleClick(i)}
                            val={squares[i]}
                            className={class_name}
                        /> : null
                    }
                    )
                }
            </div>
            <div className="row">
                {
                    squares.map((x, i) => {
                        const class_name = clsx(className, { light: winnerTurn && tilesLight.includes(i) })
                        return [3, 4, 5].includes(i) ? <Square
                            key={i}
                            onClick={() => handleClick(i)}
                            val={squares[i]}
                            className={class_name}
                        /> : null
                    }
                    )
                }
            </div>
            <div className="row">
                {
                    squares.map((x, i) => {
                        const class_name = clsx(className, { light: winnerTurn && tilesLight.includes(i) })
                        return [6, 7, 8].includes(i) ? <Square
                            key={i}
                            onClick={() => handleClick(i)}
                            val={squares[i]}
                            className={class_name}
                        /> : null
                    }
                    )
                }

            </div>


            {isWon ?
                <div className="result">
                    <p>The winner is {turn === "X" ? "O" : "X"}!</p>
                </div> : null
            }

            {isTie ?
                <div className="result">
                    <p>The game is a Tie</p>
                </div> : null
            }

            {(gameOver || isTie) &&
                <div className="result">
                    <button onClick={resetBoard}>Click to play again</button>
                </div>
            }
        </div>
    )
}