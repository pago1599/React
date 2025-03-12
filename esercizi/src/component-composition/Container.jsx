import React from "react";
import { useState } from "react";

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="container">
      <h1 onClick={handleCollapsed}>{title}</h1>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}

export default Container;
