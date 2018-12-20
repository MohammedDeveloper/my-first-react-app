import React, { Component } from "react";

class MyFirst extends Component {
  state = {
    counter: 1
  };

  styles = {
    displayNone: {
      display: "none"
    },
    displayBlock: {
      display: "block"
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="display-2">Hello! My First React Project!</h1>
        <h3 className="display-4 text-center">github.com/MohammedDeveloper</h3>
        <br />
        <br />
        <div className="container mx-auto text-center">
          <button
            onClick={() => this.addDelete("+")}
            className="btn btn-primary btn-lg"
          >
            + Add
          </button>
          <h2 className="d-inline-block ml-4 mr-4">
            <span className="badge badge-dark p-3">{this.formatValue()}</span>
          </h2>
          <button
            onClick={() => this.addDelete("-")}
            className="btn btn-danger btn-lg"
          >
            - Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  addDelete = operator => {
    let { counter } = this.state;
    switch (operator) {
      case "+":
        counter++;
        break;
      case "-":
        if (counter <= 0) counter = 0;
        else counter--;
        break;
      default:
        break;
    }

    /// set the state
    this.setState({ counter: counter });
  };

  formatValue() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default MyFirst;
