import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Router, Route, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import Loadable from "react-loadable";

const Loading = () => <span>Loading...</span>;

const Home = Loadable({
  loader: () => import("./home"),
  loading: Loading
});

const About = Loadable({
  loader: () => import("./about"),
  loading: Loading
});

const App = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

render(<App />, document.querySelector("[data-app]"));C
