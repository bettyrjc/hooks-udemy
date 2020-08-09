import React, { useState } from "react";
import "../styles.css";

import { useCounter } from "../customHooks/useCounterState";
import Small from "./Small";

const Memo = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <div>
        <h1>hola Memorize</h1>
        <Small value={counter} />
      </div>
      <hr />
      <button className="btn btn-primary " onClick={increment}>
        {" "}
        +1
      </button>

      <button
        className="btn ml-3 btn-warning "
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
export default Memo;
