import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    // We should not change the states using
    // this.state.persons[0].name = ''
    // This will only set the state for persons
    // not for otherstate
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Manu", age: 29 },
      ],
    });
    console.log("Was clicked");
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 42 },
        { name: "Max", age: 25 },
        // Assign a new name
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* onClick to show this is a react button not Javascript*/}
        <button onClick={this.switchNameHandler.bind(this, "Maximilian")}>
          Switch Name
        </button>
        <Person
          name="Ben"
          age="21"
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Bound click")}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
