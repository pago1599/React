import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoFilters from "./TodoFilters";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("appTodos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appTodos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center my-8">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          QUANTUM TASKS
        </h1>
        <p className="text-gray-400 mt-2">The future of task management</p>
      </div>
      {/*Contenitore principale app */}
      <div className="backdrop-blur bg-white/10 rounded-2xl shadow-xl border border-white/20 overflow-hidden">
        {/*FORM - TodoForm*/}
        <TodoForm addTodo={addTodo} />
        {/*Sezione filtri - TodoFilters */}
        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />

        {/*Sezione con le todos - TodoList */}
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        {/*Footer di todoapp con riepilogo*/}
        <div className="p-4 text-center text-gray-400 text-sm">
          Qui andranno le stats delle todos
        </div>
      </div>
    </div>
  );
}
