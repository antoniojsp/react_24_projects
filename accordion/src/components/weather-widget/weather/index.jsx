import Search from "../search";
import { useEffect, useState } from "react";

export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [temperature, setTemperature] = useState("");

    async function fetchData(location) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7109e1fbf4942308336c53d368902e3e`);
            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setTemperature(kelvinToCelsius(data?.main?.temp));
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        } finally {
            setLoading(false);
        }
    }

    const getCurrentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    function handleSearch() {
        fetchData(search);
    }

    useEffect(() => {
        fetchData("Lima");
    }, []);

    function kelvinToCelsius(kelvin) {
        return `${(kelvin - 273.15).toFixed(0)} °C`;
    } 
    function kelvinToFahrenheit(kelvin) {
        return `${(((kelvin - 273.15) * 9/5) + 32).toFixed(0)} °F`;

    }

    function convertTemp(unit) {
        if (unit === "c") {
            setTemperature(kelvinToCelsius(weatherData?.main?.temp));
        }else if(unit === "f"){
            setTemperature(kelvinToFahrenheit(weatherData?.main?.temp));
        }
    }

    return (
        <div className="weather-app">
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {
                loading && (<p>Loading...</p>)
            }
            {
                weatherData && weatherData.name ?
                (<div>
                    <div className="city-name">
                        <h2>
                            {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
                        </h2>
                    </div>
                    <div className="date">
                        <span>{getCurrentDate}</span>
                    </div>
                    <div className="temp">
                        <p> <span 
                                onClick={() =>convertTemp("c")}>
                                °C</span>  |  <span onClick={() =>convertTemp("f")}>°F</span></p>
                        <h1>{temperature}</h1>
                    </div>

                    <div className="weather-condition">
                        <span>{weatherData?.weather[0]?.main}</span>
                    </div>


                    <div className="weather-info">
                        <div className="wind">
                            <p> {weatherData?.wind?.speed} m/s</p>
                            <p>Wind Speed</p>
                        </div>
                        <div className="humidity">
                            <p>{weatherData?.main?.humidity} %</p>
                            <p>Humidity</p> 
                        </div>
                    </div>
                </div>):<div>
                    <p>No data found</p>
                </div>
            }
        </div>
    )

}
