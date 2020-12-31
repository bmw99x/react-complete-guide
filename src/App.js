import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    input: '',
  };
  onChangeLenHandler = (event) => {
    this.setState({input: event.target.value});
  };

  deleteHandler = (index) => {
    const input = [...this.state.input];
    // Remove character component associated
    input.splice(index, 1);
    // Reform the string as it was an 
    // const updated = input.join('');
    // Update the state of the input
    // as it was a list
    this.setState({input: input});
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.onChangeLenHandler}
          value={this.state.input}
        />
        <p>The text above has a length of {this.state.input.length}</p>
  
        <ValidationComponent textLength={this.state.input.length} />
        {this.state.input.split('').map((c, index) => {
          return <CharComponent 
          singleChar={this.state.input[index]}
          click={() => this.deleteHandler(index)}
          key={index}
          />;
        })}
      </div>
    );
  }
}

export default App;
