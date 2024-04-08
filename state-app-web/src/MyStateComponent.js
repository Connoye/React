import React from "react";

class MyStateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };

  decrement = () => {
    this.setState({
      count: this.state.count === 0 ? 0 : this.state.count - 1,
    });
    console.log(this.state.count);
  };

  reset = () => {
    this.setState({
      count: 0,
    });
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <div style={{ fontSize: "40px", fontWeight: "bold", color: "orange" }}>
          {this.state.count}
        </div>
        <button style={{backgroundColor: 'lightgreen'}} onClick={this.increment}>Increase</button>
        <button style={{backgroundColor: 'orange'}} onClick={this.decrement}>Decrease</button>
        <button style={{backgroundColor: 'lightblue'}}  onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default MyStateComponent;
