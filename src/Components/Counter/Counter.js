import React, { useState, useEffect } from "react";
import "./Counter.css";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  function adjustCount(amount) {
    setCount((currentAmount) => {
      return currentAmount + amount;
    });
  }

  return (
    <React.Fragment>
      <button onClick={() => adjustCount(-1)}>-</button>
      <span> {count}</span>
      <button onClick={() => adjustCount(1)}>+</button>
    </React.Fragment>
  );
}
