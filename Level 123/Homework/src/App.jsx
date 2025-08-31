import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// Presentational Component

// Focuses on how things look (UI)

// Receives data via props and displays it

// Contains little or no logic

// Can be stateless or stateful, but is mainly for rendering

// Example:

// // Presentational Component
// // Only responsible for showing the UI based on props
// function WeatherCard({ city, temperature, description }) {
//   return (
//     <div>
//       <h2>{city}</h2>
//       <p>{temperature}°C</p>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default WeatherCard;

// 2. Container Component

// Focuses on how things work (logic, data fetching, state)

// Retrieves data (e.g., from an API) and manages state

// Passes data down to presentational components via props

// Usually contains useState, useEffect, API calls, and event handlers

// Example:

// import React, { useState } from "react";
// import WeatherCard from "./WeatherCard";

// function WeatherContainer() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);

//   const API_KEY = "YOUR_API_KEY";

//   const fetchWeather = async () => {
//     if (!city) return;
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     );
//     const data = await res.json();
//     setWeather({
//       city: data.name,
//       temperature: data.main.temp,
//       description: data.weather[0].description,
//     });
//   };

//   return (
//     <div>
//       <input
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city name..."
//       />
//       <button onClick={fetchWeather}>Get Weather</button>

//       {weather && (
//         <WeatherCard
//           city={weather.city}
//           temperature={weather.temperature}
//           description={weather.description}
//         />
//       )}
//     </div>
//   );
// }

// export default WeatherContainer;

// Why this is good practice

// Separation of concerns – Logic and UI are kept separate, making code easier to read.

// Reusability – The presentational component can be reused in multiple places with different data.

// Testability – It’s easier to test UI separately from logic.

// Maintainability – You can change the UI without touching the data logic, and vice versa.

// If you want, I can merge this Weather Fetcher idea into a full working project using this separation so you have a clean, production-ready structure.