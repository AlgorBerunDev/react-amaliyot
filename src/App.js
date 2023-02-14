import React, { useState } from "react";
import Main from "./pages/Main";

export default function App() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Main visible={visible} count={count} />
      <button onClick={toggleVisibility}>toggle</button>
      <button onClick={incrementCount}>increment</button>
    </div>
  );
}
