import React, { Component } from "react";
import Keyboard from "./components/Keyboard";
import Panel from "./components/Panel";
import "./sass/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel />
        <Keyboard />
      </div>
    );
  }
}

export default App;
