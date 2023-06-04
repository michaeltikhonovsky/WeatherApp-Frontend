import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import './App.css'; // Import the CSS file for styling
const App = () => {
    const [temperature, setTemperature] = useState('');

    const handleFormSubmit = (city, unit) => {
        fetch(`http://localhost:8080/weather?city=${city}`)
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data based on the selected unit
                if (unit === 'C') {
                    setTemperature((data.temperature - 273.15).toFixed(2));
                } else if (unit === 'F') {
                    // Convert the temperature to Fahrenheit and set it in state
                    const temperatureInFahrenheit = ((data.temperature - 273.15) * 9 / 5 + 32).toFixed(2);
                    setTemperature(temperatureInFahrenheit);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="app-container">
            <div className="header">
                <h1>Weather App</h1>
                <img src="/Icons/appIcon.png" alt="Logo" className="logo" />
            </div>
            <WeatherForm onFormSubmit={handleFormSubmit} />
            <div>
                <p>Temperature: {temperature}</p>
            </div>
        </div>
    )
};

export default App;
