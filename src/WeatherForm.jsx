// import React, { useState } from 'react';
//
// const WeatherForm = ({ onFormSubmit, onCityChange }) => {
//     const [city, setCity] = useState('');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onFormSubmit();
//     };
//
//     const handleCityChange = (e) => {
//         const newCity = e.target.value;
//         setCity(newCity);
//         onCityChange(newCity);
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={city}
//                 onChange={handleCityChange}
//             />
//             <button type="submit" className="card"></button>
//         </form>
//     );
// };
//
// export default WeatherForm;
