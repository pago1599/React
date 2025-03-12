import React from "react";
import { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-6xl border-2 p-4 rounded-lg shadow-md">{time}</h2>
    </div>
  );
}
