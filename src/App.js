import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage";
import NotFoundPage from "./components/notFoundPage";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
    return (
      <Fragment>
        <Fragment>{routes}</Fragment>
      </Fragment>
    );
  }
}

export default App;
