import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const App = () => {
    const [searched, setSearched] = useState(false);
    const [temperature, setTemperature] = useState('');
    const [city, setCity] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [humidity, setHumidity] = useState('');
    const [weather, setWeatherStatus] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const cityInput = document.querySelector('#city-input');
        const cityName = cityInput.value;

        fetch(`http://localhost:8080/weather?city=${cityName}`)
            .then((response) => response.json())
            .then((data) => {
                setTemperature(((data.temperature - 273.15) * 9 / 5 + 32).toFixed(0));
                setCity(data.city);
                setHumidity(data.humidity);
                setWindSpeed(data.wind);
                setWeatherStatus(data.weatherStatus);

                // Set searched to true after fetching data
                setSearched(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        cityInput.value = '';
    };

    return (
        <div className="card">
            <div className="search">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" id="city-input" placeholder="Enter a city" spellCheck="false" />
                    <button type="submit" className="butt">
                        <img src="/Icons/search.png" alt="Search" />
                    </button>
                </form>
            </div>

            <CSSTransition in={searched} classNames="card-expand" timeout={300} unmountOnExit>
                <div className="expanded-content">
                    {weather === 'Rain' && <img src="/images/rainy.png" className="weather-icon" alt="Rain" />}
                    {weather === 'Haze' && <img src="/images/haze.png" className="weather-icon" alt="Haze" />}
                    {weather === 'Snow' && <img src="/images/snow.png" className="weather-icon" alt="Snow" />}
                    {weather === 'Clear' && <img src="/images/clear.png" className="weather-icon" alt="Clear" />}
                    {weather === 'Clouds' && <img src="/images/cloudy.png" className="weather-icon" alt="Clouds" />}
                    <div className="temp">{temperature}°F</div>
                    <div className="city">{city}</div>
                    <div className="details">
                        <div className="col">
                            <img src="/images/humidity.png" alt="Humidity" />
                            <div className="div">
                                <p className="humidity">{humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="/images/wind.png" alt="Wind Speed" />
                            <div className="div">
                                <p className="wind">{windSpeed} mph</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default App;
