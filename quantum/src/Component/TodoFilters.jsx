import React from "react";
import FilterButton from "./FilterButton";

export default function TodoFilters({ clearCompleted, filter, setFilter }) {
  return (
    <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-white/10">
      <div className="flex gap-2">
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          Tutti
        </FilterButton>
        <FilterButton
          active={filter === "active"}
          onClick={() => setFilter("active")}
        >
          Attivi
        </FilterButton>
        <FilterButton
          active={filter === "completed"}
          onClick={() => setFilter("completed")}
        >
          Completati
        </FilterButton>
      </div>
      <div>
        <button
          className="text-sm text-gray-500 hover:text-white transition-all"
          onClick={clearCompleted}
        >
          Cancella completati
        </button>
      </div>
    </div>
  );
}
