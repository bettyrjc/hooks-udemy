import React, { memo } from "react";

const Small = memo(({ value }) => {
  console.log("hola");

  return <small>{value}</small>;
});

export default Small;
