import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./AboutScreen";
import Login from "./LoginScreen";
import Home from "./HomeScree";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
