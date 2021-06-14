import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import New from "./pages/New";
import Hot from "./pages/Hot";
import Products from "./pages/Products";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/new" component={New} />
        <Route path="/hot" component={Hot}></Route>
        <Route path="/products" component={Products}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
