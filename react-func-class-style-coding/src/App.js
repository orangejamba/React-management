import "./App.css";
import React, { Component, useState } from "react";

function App() {
  return (
    <div className="container">
      <h1>Hello React!!</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  let numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number:{number}</p>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
  };
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number:{this.state.number}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
