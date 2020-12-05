import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false,
      failure: false
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }

  increment() {
    this.setState(
      {
        score: this.state.score + 1
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true });
          this.setState({ failure: false });
        }
      }
    );
  }

  decrement() {
    this.setState(
      {
        score: this.state.score - 1
      },
      () => {
        if (this.state.score <= 340) {
          this.setState({ failure: true });
          this.setState({ success: false });
        }
      }
    );
  }

  render() {
    const isSuccess = this.state.success;
    const isFailure = this.state.failure;
    let message;
    if (isSuccess) {
      message = <span className="success">SUCCESS</span>;
    } else if (isFailure) {
      message = (
        <span span className="failure">
          FAILURE
        </span>
      );
    } else {
      message = "";
    }

    return (
      <div className="student">
        <div className="left">
          <h2 className="studentName">
            {this.props.name}
            <button className="increment" onClick={() => this.increment()}>
              +
            </button>
            <button className="decrement" onClick={() => this.decrement()}>
              -
            </button>
          </h2>
          <p className="universityName">
            {this.props.university} {message}
          </p>
        </div>
        <div className="right">
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default Student;
