import clsx from "clsx";
import { useEffect } from "react";
import { useRef, useState } from "react";

/* button:hover { <-- Qui vogliamo hover ed effetto sullo steso bottone
    backround: red;
}

.contenitore:hover button { <-- Qui vogliamo hover sul contenitore ed effetto su un elemento figlio
    backround: red;
} */

function ToDoItem({
  todo,
  isEditing,
  setIsEditing,
  deleteTodo,
  toggleTodo,
  editTodo,
}) {
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);

  const handleUpdate = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText.trim()); // funzione ricevuta tramite props, che immaginiamo riceva l'id ed il testo e lo salvi
      setIsEditing(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    } else if (e.key === "Escape") {
      setIsEditing(null);
      setEditText(todo.text);
    }
  };

  const handleEdit = (id) => {
    setIsEditing(id);
    setEditText(todo.text);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div
      className={clsx(
        "px-6 py-4 flex items-center transition-all duration-200 group",
        todo.completed && "bg-gray-800/30"
      )}
    >
      {/* Elemento button con lo stato di completamento checked/unchecked */}
      <button
        onClick={() => toggleTodo(todo.id)}
        className={clsx(
          "w-6 h-6 rounded-full border-2 mr-4 flex-shrink-0 flex items-center justify-center transition-all",
          todo.completed
            ? "bg-gradient-to-r from-cyan-500 to-purple-500 border-transparent"
            : "border-gray-600 hover:border-cyan-500"
        )}
      >
        {todo.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        )}
      </button>

      {/* Elemento span che contiene il testo della nostra todo */}
      {isEditing ? (
        <input
          type="text"
          className="flex-grow bg-gray-800 border border-gray-700 rounded px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={editText}
          ref={inputRef}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className="flex-grow" onDoubleClick={() => handleEdit(todo.id)}>
          {todo.text}
        </span>
      )}

      {/* Elemento conteniroe che conterrà le nostre azioni di eliminazione/edit */}
      <div className="flex-shrink-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all">
        {!isEditing && (
          <button
            className="text-gray-500 hover:text-cyan-400 transition-colors"
            onClick={() => handleEdit(todo.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        )}

        <button
          className="text-gray-500 hover:text-cyan-400 transition-colors"
          onClick={() => deleteTodo(todo.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
