import React, { useState } from 'react';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Make an API request to the backend
        fetch(`http://localhost:8080/weather?city=${city}`)
            .then((response) => response.json())
            .then((data) => {
                setTemperature(data.temperature);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <br />
                <button type="submit">Get Weather</button>
            </form>
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <p>City: {city}</p>
                <p>Temperature: {temperature}</p>
            </div>
        </div>
    );
}

export default WeatherApp;
