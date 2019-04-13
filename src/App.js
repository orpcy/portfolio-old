import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} exact />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
