import QRCode from "react-qr-code";
import { useState } from "react";
import "./styles.css"
export default function QRcode() {
    const [message, setMessage] = useState("");
    const [qrResult, setQRresult] = useState("")

    function handleGenerator(){
        setQRresult(message)
        setMessage("")
    }

    return (<div className="container-qr">
                    <h1>QR Code Generator</h1>
                    
                    <div className="qr-elements">
                        <input 
                                onChange={x => setMessage(x.target.value)}
                                type="text" 
                                name=""
                                value={message}
                        />
                        <button disabled={message.length > 0 ? false:true}onClick={() => handleGenerator()}>Generate</button>
                    </div>

                    <div className="qr-result">
                        {qrResult && <h2>QR for: {qrResult}</h2>}
                        <QRCode size={300} value={qrResult} />
                    </div>
            </div>)
}