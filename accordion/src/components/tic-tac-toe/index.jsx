import "./styles.css"

function Square({val}){
    return(
        <button className="square">{val}</button>
    )
}


export default function TicTacToe(){

    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square  val={""}/>
                <Square  val={""}/>
                <Square  val={""}/>
            </div>
            <div className="row">
                <Square  val={""}/>
                <Square  val={""}/>
                <Square  val={""}/>
            </div>            
            <div className="row">
                <Square  val={""}/>
                <Square  val={""}/>
                <Square  val={""}/>
            </div>

        </div>
    )
}