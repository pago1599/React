import React from "react";

export function CounterDisplay({ count }) {
  return (
    <div>
      <h2 className="text-3xl p-4">{count}</h2>
    </div>
  );
}
