import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    );
  }
}

export default App;