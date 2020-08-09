import React, { useState, useCallback } from "react";
import "../styles.css";

import { ShowIncrement } from "./ShowIncrement";

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );
  return (
    <div>
      <h1>HOLA call</h1>
      <p>{counter}</p>
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallBackHook;
