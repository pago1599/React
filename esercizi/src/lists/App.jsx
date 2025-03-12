import React from "react";
import Colors from "./Colors";

function App() {
  return (
    <div>
      <Colors
        colors={[
          { id: 1, name: "white" },
          { id: 2, name: "black" },
          { id: 3, name: "red" },
          { id: 4, name: "blue" },
          { id: 5, name: "green" },
        ]}
      />
    </div>
  );
}

export default App;
