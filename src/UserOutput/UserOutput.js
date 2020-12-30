import React from "react";

const UserOutput = (props) => {
    return <div className="output">
        <p>
            Username: {props.username}
        </p>
        <p>
            Alias: {props.alias}
        </p>
    </div>
}

export default UserOutput;
