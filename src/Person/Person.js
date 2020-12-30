import React from 'react';
import './Person.css';
// props is all the properties for the component
const person = (props) => {
    // Return some jsx!
    return (
        <div className="Person">
            {/* Add an onClick to the actual functional component <p>*/}
            <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* When the value input changes,  */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;