"use client";
import { useEffect, useState } from "react";
import Stopwatch from "./stopwatch/StopWatch";

const EggMe = () => {
  const [activeEgg, setActiveEgg] = useState("Soft");
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [totalSec, setTotalSec] = useState(0);

  const converMinToSec = () => {
    return setTotalSec(min * 60 + parseInt(sec));
  };

  useEffect(() => {
    converMinToSec();
  }, [sec, min]);

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="">
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
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setActiveEgg("Custom")}
        >
          Custom
        </button>
        {activeEgg == "Custom" && (
          <>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="min">Min</label>
              <input
                min={0}
                value={min}
                onChange={(e) => setMin(e.target.value)}
                className="border"
                type="number"
              />
              <label htmlFor="sec">Second</label>
              <input
                min={0}
                value={sec}
                onChange={(e) => setSec(e.target.value)}
                className="border"
                type="number"
              />
            </form>
          </>
        )}
        {activeEgg === "Soft" && <Stopwatch eggType="Soft" stopTime={15} />}
        {activeEgg === "Hard" && <Stopwatch eggType="Medium" stopTime={20} />}
        {activeEgg === "Custom" && (
          <Stopwatch eggType="Custom" stopTime={totalSec} />
        )}
      </div>
    </div>
  );
};

export default EggMe;
