import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NotFound } from "../components/NotFound";

import { JSONFormatter } from "../containers/JSONFormatter";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={JSONFormatter} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
