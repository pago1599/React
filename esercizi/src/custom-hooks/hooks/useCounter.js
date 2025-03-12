import { useState } from "react";

export function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    increment: handleIncrement,
    decrement: handleDecrement,
    reset: handleReset,
  };
}
