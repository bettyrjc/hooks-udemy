import React, { useState } from "react";
import { useCounter } from "../customHooks/useCounterState";

export default function CounterUseCustomHooks() {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <div className="m-1">
      <h1>Counter with hooks {state}</h1>

      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button
        className="btn btn-secondary ml-1 mr-1"
        onClick={() => decrement(2)}
      >
        -1
      </button>
      <button className="btn btn-danger" onClick={() => reset()}>
        reset
      </button>
    </div>
  );
}
