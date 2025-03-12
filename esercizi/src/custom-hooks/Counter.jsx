import { useCounter } from "./hooks/useCounter";

function Counter() {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
      <p>{counter}</p>
      <div className="flex gap-2">
        <button
          className="px-2 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-2 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-2 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
