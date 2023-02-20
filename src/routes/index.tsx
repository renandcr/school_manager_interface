import { Route, Switch } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import * as React from "react";

const Routes = () => {
  return (
    <Switch>
      <Route component={HomeScreen} path="/home-screen" />
    </Switch>
  );
};

export default Routes;
