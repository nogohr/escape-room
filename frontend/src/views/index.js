import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// views
import Home from "views/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

function NotFound() {
  return <h1>404</h1>;
}
