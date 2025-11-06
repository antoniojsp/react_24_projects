import "./styles.css"
import {useState} from "react"
function Square({val, onClick}){
    return(
        <button onClick={onClick}className="square">{val}</button>
    )
}


export default function TicTacToe(){

    const [squares, setSquares] = useState([...Array(9)].map(() => ''))
    const [isXTurn, setIsXTurn] = useState(true);
    function handleClick(index){
        setSquares(x => );
    }


    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square  onClick={()=>handleClick(0)}/> 
                <Square  onClick={()=>handleClick(1)}/>
                <Square  onClick={()=>handleClick(2)}/>
            </div>
            <div className="row">
                <Square onClick={()=>handleClick(3)}/>
                <Square onClick={()=>handleClick(4)}/>
                <Square onClick={()=>handleClick(5)}/>
            </div>            
            <div className="row">
                <Square  onClick={()=>handleClick(6)}/>
                <Square  onClick={()=>handleClick(7)}/>
                <Square  onClick={()=>handleClick(9)}/>
            </div>

        </div>
    )
}