// cuando se ejecuta el return en el useEffect como un unmount component

import React, { useEffect, useState } from "react";

import "../styles.css";
const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;
  // efecto unmount
  useEffect(() => {
    console.log("mount");
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      // fase de limpieza
      console.log("Unmount");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres genial</h3>
      <p>x: {x}</p>
      <p>y:{y}</p>
    </div>
  );
};

export default Message;
