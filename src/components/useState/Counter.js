import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  // console.log(counter);
  const { counter1, counter2 } = counter;
  return (
    <div>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>

      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter({
            ...counter, // esto es para que cuando se seteo el estado del counter uno, no elimine el counter dos
            counter1: counter1 + 1,
          });
        }}
      >
        {" "}
        +1
      </button>
    </div>
  );
}
