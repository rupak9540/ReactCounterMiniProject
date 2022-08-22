import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      change: 0
    };
  }
  handleChange = () => {
    let { change } = this.state;
    //  let count = 0;
    change += 1;
    //  console.log(count1)
    this.setState({
      change: change
    });
  };
  render() {
    const { change } = this.state;
    return (
      <div className="container">
        <div className="button">
          <button onClick={this.handleChange} style={styles.button}></button>
        </div>
        <div className="text">
          <p style={styles.p}>
            Click on image
            <span className="spantext" style={styles.span}>
              {" "}
              {change}
            </span>{" "}
            Times
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    height: 70,
    width: 70,
    background: "yellow",
    margin: 30,
    borderRadius: 10,
    cursor: "pointer"
  },
  span: {
    fontWeight: "bold"
  },
  p: {
    fontSize: 20
  }
};
export default Counter;
