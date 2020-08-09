import React, { useState } from "react";
import "../styles.css";
import MultipleCustom from "../3-examples/MultiplesCustomHooks";
const RealExampleRef = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <h4> real example dev</h4>
      <hr />
      {show && <MultipleCustom />}

      <button className="btn btn-primary mt-5" onClick={() => setshow(!show)}>
        Show/shite
      </button>
    </div>
  );
};
export default RealExampleRef;
