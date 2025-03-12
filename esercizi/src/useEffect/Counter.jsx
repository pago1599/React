import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Clock } from "./Clock";

function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + incrementAmount);
  };

  useEffect(() => {
    console.log(`The counter is ${counter}`);
  }, [counter]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Clock />
      <h2 className="text-4xl p-4">{counter}</h2>
      <button
        onClick={handleIncrement}
        className="bg-blue-500 text-white rounded-lg border-1 border-blue-800 p-2"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
