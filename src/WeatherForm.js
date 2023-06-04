import React, { useState } from 'react';

const WeatherForm = ({ onFormSubmit }) => {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('C');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call the onFormSubmit function from the parent component
        onFormSubmit(city, unit);

        setCity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default WeatherForm;
