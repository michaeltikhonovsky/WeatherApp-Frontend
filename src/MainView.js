import React, { useState } from 'react';

const MainView = () => {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('C');
    const [location, setLocation] = useState('');
    const [currentTemp, setCurrentTemp] = useState('');
    const [weatherDescription, setWeatherDescription] = useState('');
    const [weatherMin, setWeatherMin] = useState('');
    const [weatherMax, setWeatherMax] = useState('');
    const [pressure, setPressure] = useState('');
    const [humidity, setHumidity] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [feelsLike, setFeelsLike] = useState('');

    const handleSearch = async () => {
        if (city !== '') {
            try {
                const response = await fetch(`http://localhost:8080/weather/${city}?unit=${unit}`);
                const data = await response.json();
                setLocation(data.location);
                setCurrentTemp(data.currentTemp);
                setWeatherDescription(data.weatherDescription);
                setWeatherMin(data.weatherMin);
                setWeatherMax(data.weatherMax);
                setPressure(data.pressure);
                setHumidity(data.humidity);
                setWindSpeed(data.windSpeed);
                setFeelsLike(data.feelsLike);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Please enter the city');
        }
    };

    return (
        <div className="main-view">
            <div className="header">
                <h1>Weather Web App</h1>
            </div>
            <div className="logo">
                <img src="https://lh3.googleusercontent.com/proxy/xsHMx9xGm0BQmcoPVHjyn4U3dLcmPVX_5VazKGvIBpPmMyumkvx-YQEfy7UV17J139vRUHePYQ9hIsy-BgVLq8BV1T3WMD-4bqYbQCMNPdoeg4QGPU4" alt="Logo" width="500" height="340" />
            </div>
            <div className="form">
                <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                    <option value="C">Celsius</option>
                    <option value="F">Fahrenheit</option>
                </select>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="dashboard">
                <h2>Currently in {location}</h2>
                <img src={"/Icons/appIcon.png"} alt="Weather Icon" width="200" height="200" />
                <h1>{currentTemp}</h1>
            </div>
            <div className="description">
                <div className="weather-description">{weatherDescription}</div>
                <div className="weather-min">Min: {weatherMin}</div>
                <div className="weather-max">Max: {weatherMax}</div>
            </div>
            <div className="details">
                <div className="pressure">Pressure: {pressure} Pa</div>
                <div className="humidity">Humidity: {humidity}</div>
                <div className="wind-speed">Wind: {windSpeed} m/s</div>
                <div className="feels-like">FeelsLike: {feelsLike}</div>
            </div>
            <div className="footer">
                <p>
                    Weather App by Michael Tikhonovsky. Visit my GitHub Repo for the complete code of this project.
                    <a href="https://github.com/michaeltikhonovsky">https://github.com/michaeltikhonovsky</a>
                </p>
            </div>
        </div>
    );
};

export default MainView;
