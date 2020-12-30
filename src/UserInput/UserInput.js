import React from "react";

const UserInput = (props) => {
    // Inline styling
    // We can also do: const inputStyle = {
    // color: "grey"
    // };
    return <input type="text" value={props.currentName} onChange={props.changed} style={{color:"grey"}}/>
}

export default UserInput;
