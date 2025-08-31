import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import React, { useState, useEffect } from "react";

function App() {
  const [inputTime, setInputTime] = useState("");       // Time user types
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem("timeLeft");
    return savedTime ? Number(savedTime) : 0;
  });
  const [isRunning, setIsRunning] = useState(() => {
    return localStorage.getItem("isRunning") === "true";
  });

  // Update the timer every second
  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    // Stop timer when time ends
    if (timeLeft === 0) {
      setIsRunning(false);
    }

    // Clean up
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Save time and status to localStorage
  useEffect(() => {
    localStorage.setItem("timeLeft", timeLeft);
    localStorage.setItem("isRunning", isRunning);
  }, [timeLeft, isRunning]);

  // Start button
  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  // Stop button
  const handleStop = () => {
    setIsRunning(false);
  };

  // Reset button
  const handleReset = () => {
    const seconds = Number(inputTime);
    if (!isNaN(seconds) && seconds > 0) {
      setTimeLeft(seconds);
      setIsRunning(false);
    }
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      <input
        type="number"
        placeholder="Enter seconds"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
      />

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>

      <h2>
        {timeLeft > 0 ? `${timeLeft} seconds left` : "Time's up!"}
      </h2>
    </div>
  );
}

export default App;
