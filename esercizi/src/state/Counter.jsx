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
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
      <CounterDisplay count={counter} />
      <div>
        <button
          className="px-2 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="px-2 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

// Quando chiamiamo la funzione setter per incrementare il valore di counter, il parametro passato alla funzione deve essere una funzione, questo perchè si ha la sicurezza che lo state cambierà in modo corretto ogni volta che lo useremo, evitando potenziali errori con incrementi multipli
