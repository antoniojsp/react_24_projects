import "./styles.css"
import SearchBar from "./search-bar"
import { useState } from "react"

export default function WeatherWidget() {

    const [city, setCity] = useState("London");
    const [temp, setTemp] = useState(10);
    const [weather, setWeather] = useState("Cloudy");
    const [wind_speed, setWindSpeed] = useState(null);
    const [humidity, setHumidity] = useState(null);

    const today = new Date();
    const options ={
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'  
    }

    return <div className="weather-container">
                <div className="weather-board">
                    <SearchBar />
                    <div className="vertical">
                        {city}
                        {today.toLocaleDateString("en-US", options)}
                        {temp}
                        {weather}
                    </div>
                    <div className="horizontal">
                        {wind_speed} 
                        {humidity} 
                    </div>
                </div>
           </div>
            

}