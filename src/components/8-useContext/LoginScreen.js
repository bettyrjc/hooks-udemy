import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>

      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({ name: "betty", email: "corre.com" });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
