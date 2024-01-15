"use client";
import React, { useState } from "react";
import Stopwatch from "./stopwatch/StopWatch";

const EggMe = () => {
  const [activeEgg, setActiveEgg] = useState("Soft");

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setActiveEgg("Soft")}
        >
          SoftEgg
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setActiveEgg("Hard")}
        >
          HardEgg
        </button>
        {activeEgg == "Soft" && <Stopwatch eggType="Soft" stopTime={300} />}
        {activeEgg == "Hard" && <Stopwatch eggType="Medium" stopTime={540} />}
      </div>
    </div>
  );
};

export default EggMe;