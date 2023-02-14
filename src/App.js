import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log("useEffect", { visible, count });

    return () => {
      console.log("cleanup");
    };
  }, [visible, count]);

  return (
    <>
      <Main visible={visible} count={count}>
        <p>Paragraph</p>
        <p>Paragraph</p>
        <p>Paragraph</p>
        <p>Paragraph</p>
      </Main>
      <button onClick={toggleVisibility}>toggle</button>
      <button onClick={incrementCount}>increment</button>
    </>
  );
}
