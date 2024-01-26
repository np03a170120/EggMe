"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-countdown-circle-timer";
import AlertPlayer from "../alert/AlertPlayer";

const Stopwatch = ({ eggType, stopTime }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [key, setKey] = useState(0);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setKey((prevKey) => prevKey + 1);
    setIsRunning(false);
    setTime(0);
    setAnnounceAlert(false);
  };

  const [announceAlert, setAnnounceAlert] = useState(false);

  return (
    <div>
      <h1 className=" text-center my-4">{eggType} Egg</h1>
      <CountdownCircleTimer
        onComplete={reset}
        key={key}
        isPlaying={isRunning}
        duration={stopTime}
        colors={["#000000", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
        onUpdate={(remainingTime) => {
          if (isRunning && remainingTime <= 10) {
            setAnnounceAlert(true);
          }
        }}
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
      <AlertPlayer isRunning={isRunning} announceAlert={announceAlert} />
    </div>
  );
};

export default Stopwatch;
