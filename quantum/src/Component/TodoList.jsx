import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(null);
  return (
    <div className="divide-y divide-white/10">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            isEditing={isEditing === todo.id}
            setIsEditing={setIsEditing}
          />
        ))
      ) : (
        <div className="text-center mt-4 min-h-48">
          <p className="text-lg">Nessun task trovato</p>
          <p className="text-sm mt-1">Aggiungi un task per cominciare</p>
        </div>
      )}
    </div>
  );
}

export default TodoList;
