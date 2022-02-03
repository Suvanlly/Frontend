import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: true,
    };
  }
  toggleShowHide = () => {
    this.setState({ isDisplayed: !state.isDisplayed });
  };

  render() {
    const hello = "Welcome to React";
    return (
      <div>
        <HelloReact hello={hello} isDisplayed={this.state.isDisplayed} />
        <button onClick={this.toggleShowHide} type="button">
          Toggle Show/Hide
        </button>
      </div>
    );
  }
}

// Child Component

const HelloReact = ({ hello, isDisplayed }) => {
  isDisplayed ? <h1>{hello}</h1> : null;
};

export default App;
