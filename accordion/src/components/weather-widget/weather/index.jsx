import Search from "../search";
import { useEffect, useState } from "react";

export default function Weather() {
    const [search, setSearch] = useState("Lima");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchData(location) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7109e1fbf4942308336c53d368902e3e`);
            const data = await response.json();
            console.log(data);
            if (data) {
                setWeatherData(data);
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
                        <h1>{weatherData?.main?.temp} K</h1>
                    </div>
                    <div className="weather-condition">
                        <span>{weatherData?.weather[0]?.main}</span>
                    </div>


                    <div className="weather-info">
                        <div className="wind">
                            <p>Wind Speed</p>
                            <p> {weatherData?.wind?.speed} m/s</p>
                        </div>
                        <div className="humidity">
                            <p>Humidity</p> 
                            <p>{weatherData?.main?.humidity} %</p>
                        </div>
                    </div>
                </div>):<div>
                    <p>No data found</p>
                </div>
            }
        </div>
    )

}
