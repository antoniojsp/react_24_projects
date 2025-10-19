
import "./styles.css"

export default function LightDarkTheme(){

    localStorage.setItem("key", JSON.stringify({first:"light"}))
    console.log(localStorage.getItem("maria"))
    console.log(localStorage.getItem("key"))

  


    return(<div className="container-light-dark">
                <div className="container">
                    <h1>Hello World</h1>
                    <button>Change Theme</button>
                </div>
            </div>)
} 