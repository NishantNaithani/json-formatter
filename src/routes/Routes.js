import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { NotFound } from "../components/NotFound";

import { Home } from "../containers/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/json-formatter" />
        <Route exact path={"/json-formatter"} component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
