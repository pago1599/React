import React from "react";
import { useState } from "react";

const list = ["studiare", "esercizi", "palestra", "spesa"];

function TodoList() {
  const [todos, setTodos] = useState(list);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const removeTodo = (itemToRemove) => {
    setTodos(todos.filter((item) => item !== itemToRemove));
  };

  const resetTodos = () => {
    setTodos(list);
  };
  return (
    <form className="flex flex-col gap-2">
      <ul className="list-disc">
        {todos.map((todo, index) => (
          <React.Fragment key={index}>
            <li>{todo}</li>
            <button
              className="bg-red-500 rounded text-white"
              onClick={() => removeTodo(todo)}
            >
              Remove
            </button>
          </React.Fragment>
        ))}
      </ul>
      <input
        className="border-2 border-gray-300 rounded"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className="bg-blue-500 rounded text-white" onClick={addTodo}>
        Add
      </button>

      <button className="bg-gray-500 rounded text-white" onClick={resetTodos}>
        Reset
      </button>
    </form>
  );
}

export default TodoList;
