import { Route, Switch } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import SchoolPage from "../pages/SchoolPage";
import HomePage from "../pages/HomePage";
import * as React from "react";

const Routes = () => {
  return (
    <Switch>
      <Route component={SchoolPage} path="/school_page" />
      <Route component={HomePage} path="/home_page" />
      <Route component={HomeScreen} exact path="/" />
    </Switch>
  );
};

export default Routes;
