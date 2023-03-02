import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ClassroomPage() {
  const { count } = useSelector(state => state);

  const {
    count: { increment, incrementAsync },
  } = useDispatch();

  return (
    <>
      <h1>Counter {count} </h1>
      <button onClick={() => incrementAsync(1)}>Increment Async</button>
      <button onClick={() => increment(1)}>Increment</button>
    </>
  );
}

export default ClassroomPage;
