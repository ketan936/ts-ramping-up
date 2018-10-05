import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      propsA: "hello",
      propsB: "helloB",
      propsC: "helloB",
      otherProps: "helloB",
      dataToRender: "helloB"
    };
    window.changeStateOfApp = this.setState.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps of App");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate of App");
    return true;
  }

  onMouseDown(e) {
    
    document
      .getElementById("dummyParent")
      .addEventListener("mouseup", this.onMouseUp);
    document
      .getElementById("dummyParent")
      .addEventListener("mousemove", this.onMouseMove);
  }

  onMouseUp(e) {
    // window.getSelection().empty()
    document
      .getElementById("dummyParent")
      .removeEventListener("mouseup", this.onMouseUp);
    document
      .getElementById("dummyParent")
      .removeEventListener("mousemove", this.onMouseMove);
  }
  onMouseMove(e) {
    const classlist = document.getElementById(e.target.id).classList;
      classlist.add("dummyHigh");
  }

  render() {
    console.log("render of app");
    var arr = [];

    for (let index = 0; index < 1000; index++) {
      arr.push(index);
    }
    return (
      <div
        className="dummyParent"
        id="dummyParent"
        onMouseDown={this.onMouseDown}
      >
        {arr.map(x => (
          <div id={x.toString()} className="dummy" unselectable="on">
          {x}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
