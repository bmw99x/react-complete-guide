import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Max", age: 28 },
      { id: '2', name: "Manu", age: 29 },
      { id: '3', name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    //  Get the personIndex at which the person is equal
    // to the person with the provided id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // To avoid mutating state, we use spread operator
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons: persons})
  };

  deletePersonsHandler = (personIndex) => {
    // We shouldn't update state using byVal this.state.persons
    // instead, we slice().
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // Not operator : !
    this.setState({ showPersons: !doesShow });
  };


  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    // Implicitly check if showPersons===true
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Map every single element in persons array with an arrow function
           */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                // to prevent React from re-rendering elements
                // We can cache these but we need a key.
                // Use something unique to define key
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.togglePersonsHandler()}>
          Toggle Persons
        </button>
        {/* Ternary expression to render if showPersons=True */}
        {/* Output persons only if showPersons===true */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
