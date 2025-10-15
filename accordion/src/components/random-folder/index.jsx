import { useEffect, useState } from "react";
import "./styles.css"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState("#000000")

    const randomVal = (upperLimit) => Math.floor(Math.random() * upperLimit)
    function generateNewColor() {
        let newColor;
        if(typeOfColor === "rgb"){
            const red = randomVal(256);
            const green = randomVal(256);
            const blue = randomVal(256);
            newColor = `rgb(${red}, ${green}, ${blue})`;
        }else{
            const decimalColor = randomVal(1677721);
            newColor = "#" + decimalColor.toString(16).padStart(6, "0");
        }
        setColor(newColor);
    }

    useEffect(() =>{
        generateNewColor();
    }, [typeOfColor])

    return (
        <div className="container"
            style={
                {
                    background: color,
                }
            }>
            <div className="button-row">
                <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
                <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
                <button onClick={generateNewColor}>Generate Random Color</button>
            </div>
            <div className="color-generated">
                <h3>{typeOfColor === "rgb"? "RGB Color":"Hex Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}