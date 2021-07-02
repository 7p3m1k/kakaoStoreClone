import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Today from "./pages/Today";
import New from "./pages/New";
import Hot from "./pages/Hot";
import My from "./pages/My";
import Detail from "./pages/Detail/Detail";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Today} />
        <Route path="/new" component={New} />
        <Route path="/hot" component={Hot} />
        <Route path="/my" component={My} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default Routes;
