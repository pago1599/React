import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function FilteredList() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Fabio",
      age: 25,
    },
    {
      id: 2,
      name: "Luca",
      age: 16,
    },
    {
      id: 3,
      name: "Matteo",
      age: 28,
    },
    {
      id: 4,
      name: "Davide",
      age: 17,
    },
  ]);

  // memorizza un valore
  const filteredList = useMemo(() => {
    return list.filter((item) => {
      return item.age > 18;
    });
  }, [list]);
  return (
    <div>
      <h2>Filtered List</h2>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
            {item.name}, {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
