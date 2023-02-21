import { Route, Switch } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import HomePage from "../pages/HomePage";
import * as React from "react";

const Routes = () => {
  return (
    <Switch>
      <Route component={HomeScreen} exact path="/" />
      <Route component={HomePage} path="/home-page" />
    </Switch>
  );
};

export default Routes;
