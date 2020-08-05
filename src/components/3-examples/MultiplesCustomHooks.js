import React from "react";
import "../styles.css";
import { useFetch } from "../customHooks/getFetch";
import { useCounter } from "../customHooks/useCounterState";
const MultiplesCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  console.log(state);

  const { loading, data } = state;

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking bad quotes</h1>

      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p>{quote}</p>
          <footer className=" blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-warning color-white" onClick={increment}>
        Siguiente
      </button>
    </div>
  );
};

export default MultiplesCustomHooks;
