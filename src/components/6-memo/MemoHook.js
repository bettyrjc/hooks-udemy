import React, { useState, useMemo } from "react";
import "../styles.css";

import { useCounter } from "../customHooks/useCounterState";
import { procesoPesado } from "../helpers/procesoPesado";
const Memo = () => {
  const { counter, increment } = useCounter(30);
  const [show, setShow] = useState(true);

  // funcion y las dependencias
  const memoProceso = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <div>
        <h1>hola Memorize hook </h1>
      </div>
      <hr />
      {/* <p>{procesoPesado(counter)}</p>
       */}
      <p>{memoProceso}</p>
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
