import React, { useRef } from "react";
import "../styles.css";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <div>
      <h1>focus</h1>

      <input ref={inputRef} className="form-control" />

      <button className=" mt-5 btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
export default FocusScreen;
