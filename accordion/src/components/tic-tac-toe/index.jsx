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
    const [squares, setSquares] = useState([...Array(9)].fill(''));
    const [turn, setTurn] = useState("X");
    const [tilesLight, setTilesLight] = useState([]);
    const [isTie, setIsTie] = useState(false);
    const [isWon, setIsWon] = useState(false);
    const [winner, setWinner] = useState(null);

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
                return [a, b, c];
            }
        }
        return null;
    }

    function handleClick(index) {
        if (isWon || isTie || squares[index] !== "") {
            return;
        }
        setTurn(x => x === "X" ? "O" : "X")
        setSquares(prev => prev.map((x, i) => i === index ? turn : x));
    }

    function resetBoard() {
        setSquares(Array(9).fill(""));
        setTurn("X");// start with X
        setIsTie(() => false);
        setIsWon(() => false);
        setWinner(() => null);
    }

    useEffect(() => {
        const result = CheckGame();
        if (result) {
            setTilesLight(result)
            setIsWon(true)
            setWinner(turn === "X"?"O":"X")
        }
        else if (squares.filter(x => x !== "").length === 9) {
            setIsTie(true);
        }
    }, [squares])

    return (
        <div className="tic-tac-toe-container">
            <h1>Tic-Tac-Toe! </h1>

            {!isWon && !isTie &&
                <h3>
                    It's {turn} time!
                </h3>
            }

            {[0, 3, 6].map((start) => {
                return <div className="row" key={start}>
                    {
                        [start, start + 1, start + 2].map(x => {
                            const class_name = clsx("square",
                                {
                                    light: isWon && tilesLight.includes(x),
                                    disable: isWon || isTie || squares[x]
                                })
                            return <Square
                                key={x}
                                onClick={() => handleClick(x)}
                                val={squares[x]}
                                className={class_name}
                            />
                        })
                    }
                </div>
            })
            }

            {isWon ?
                <div className="result">
                    <p>The winner is {winner}!</p>
                </div> : null
            }

            {isTie ?
                <div className="result">
                    <p>The game is a Tie</p>
                </div> : null
            }

            {(isWon || isTie) &&
                <div className="result">
                    <button onClick={resetBoard}>Click to play again</button>
                </div>
            }
        </div>
    )
}