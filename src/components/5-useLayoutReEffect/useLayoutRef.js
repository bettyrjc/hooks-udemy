import React, { useLayoutEffect, useState, useRef } from "react";
import "../styles.css";
import { useFetch } from "../customHooks/getFetch";
import { useCounter } from "../customHooks/useCounterState";
const Layout = () => {
  const { counter, increment } = useCounter(1);
  const [box, setbox] = useState({});
  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { data } = state;

  const { quote } = !!data && data[0];
  const pTag = useRef();

  // para sacar mediciones cuando alguien cambie cuando se necesite
  useLayoutEffect(() => {
    setbox(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>Layout Breaking bad quotes</h1>

      <blockquote className="blockquote text-right">
        <p ref={pTag}>{quote}</p>
      </blockquote>
      <pre>{JSON.stringify(box, null, 3)}</pre>
      <button className="btn btn-warning color-white" onClick={increment}>
        Siguiente
      </button>
    </div>
  );
};

export default Layout;
