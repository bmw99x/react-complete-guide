import React, { Component } from "react";
import "./App.css";

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    username: "",
  };
  userNameChangedHandler = (event) => {
    console.log('Event target value is ' + event.target.value)
    this.setState({username: event.target.value});
  };
  render() {
    return (
      <div className="App">
        <h1>Main Header</h1>
        <p>This part will output multiple UserOutput components!</p>
        <UserInput
          changed={this.userNameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput username="bmw99x" alias="Ben" />
        <UserOutput username="abc123" alias="Mr ABC" />
        <UserOutput username={this.state.username} alias="The State Component" />
      </div>
    );
  }
}


export default App;
