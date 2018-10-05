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
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps of App");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate of App");
    return true;
  }

  render() {
    console.log("render of app");
    return (
      <A data={this.state.propsA}>
        <B data={this.state.propsB}>
          <C data={this.state.propsC}> </C>
        </B>
      </A>
    );
  }
}

class A extends Component {
  constructor(props) {
    super(props);
    // this.state ={};

    console.log("constructor of A");
  }
  componentWillMount() {
    console.log("componentWillMount of A");
  }

  render() {
    console.log("render of A");
    return (
      <div>
        <h1>{this.props.data + 1}</h1>
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    // this.setState({
    //   stateA: this.props.data + 1
    // })
    console.log("componentDidMount of A");
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   stateA: nextProps.data + 1
    // })
    console.log("componentWillReceiveProps of A");
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate of A");
  }
  

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate of A");
    return true;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount of A");
  }
}

class B extends Component {
  constructor() {
    super();
    console.log("constructor of B");
  }
  componentWillMount() {
    console.log("componentWillMount of B");
  }

  render() {
    console.log("render of B");
    return this.props.children;
  }

  componentDidMount() {
    console.log("componentDidMount of B");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps of B");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    console.log(prevProps);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount of B");
  }
}

class C extends Component {
  constructor() {
    super();
    console.log("constructor of C");
  }
  componentWillMount() {
    console.log("componentWillMount of C");
  }

  render() {
    console.log("render of C");
    return this.props.children;
  }

  componentDidMount() {
    console.log("componentDidMount of C");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps of C");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate of C");
    return true;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount of C");
  }
}

export default App;
