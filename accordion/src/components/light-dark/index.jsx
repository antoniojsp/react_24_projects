import { useEffect } from "react"       
import useLocalStorage from "./useLocalStorage"
import "./styles.css"

export default function LightDarkTheme(){
    const [theme, setTheme] = useLocalStorage("theme","light")
    function handleToggleTheme() {            
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    const nextTheme = theme === "light" ? "'Dark'" : "'Light'";              

    return(<div className="light-dark-mode" data-theme={theme}>
                <div className="container">
                    <h1>Hello World! </h1>
                    <button onClick={handleToggleTheme}>Change theme to {nextTheme} theme</button>
                </div>
            </div>)
} 