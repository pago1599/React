import { useCallback } from "react";
import { useState } from "react";

export function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  // memorizza una funzione
  const handleIncrement = useCallback(() => {
    setCounter((prevCount) => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((prevCount) => prevCount - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return {
    counter: counter,
    increment: handleIncrement,
    decrement: handleDecrement,
    reset: handleReset,
  };
}
