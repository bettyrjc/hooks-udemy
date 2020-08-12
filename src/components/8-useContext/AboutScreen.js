import React, { useContext } from "react";
import { UserContext } from "./UserContext";
const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };
  return (
    <div>
      <h1>about</h1>

      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button onClick={handleClick} className="btn btn-warning">
        Logout
      </button>
    </div>
  );
};

export default AboutScreen;
