"use client";
import React, { useState, useEffect, useMemo } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Stopwatch = ({ eggType, stopTime }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning && time < stopTime * 100) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    } else if (time >= stopTime * 100) {
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time, stopTime]);

  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setKey((prevKey) => prevKey + 1);
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    if (seconds === stopTime) {
      setIsRunning(false);
    }
  }, [seconds, stopTime]);

  return (
    <div>
      <h1 className=" text-center my-4">{eggType} Egg</h1>
      <CountdownCircleTimer
        onComplete={reset}
        key={key}
        isPlaying={isRunning}
        duration={stopTime}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
      <button
        className=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={startAndStop}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
