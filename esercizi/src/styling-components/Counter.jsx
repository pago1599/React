import React, { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + incrementAmount);
  };

  const handleDecrement = () => {
    setCounter((prevCount) => prevCount - incrementAmount);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
