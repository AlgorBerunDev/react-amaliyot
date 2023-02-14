import React, { useState } from "react";

export default function Main() {
  const [count, setCount] = useState({ value: 23 });

  const increment = () => {
    setCount(function (oldCount) {
      return { value: oldCount.value + 1 };
    });
  };

  const decrement = () => {
    setCount(function (oldCount) {
      return { value: oldCount.value - 1 };
    });
  };

  return (
    <div>
      <h1>Increment {count.value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
