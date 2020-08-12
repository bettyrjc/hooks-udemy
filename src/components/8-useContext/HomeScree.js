import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div className="container">
      <h1>Home HomeScreen</h1>

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default HomeScreen;
