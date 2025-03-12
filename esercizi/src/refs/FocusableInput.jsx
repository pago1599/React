import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function FocusableInput() {
  const mountedRef = useRef(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Primo montaggio");
    } else {
      console.log("Secondo montaggio");
    }
    inputRef.current.focus();
  }, []);

  return (
    <form className="flex flex-col gap-2">
      <h1>InputRef</h1>
      <input ref={inputRef} type="text" className="border-2 border-gray-400" />
    </form>
  );
}

export default FocusableInput;
