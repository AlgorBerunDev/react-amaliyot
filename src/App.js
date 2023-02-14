import React, { useState } from "react";
import Main from "./pages/Main";

export default function App() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {visible && <Main />}
      <button onClick={toggleVisibility}>toggle</button>
    </div>
  );
}
