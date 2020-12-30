// If you see errors about react being out of scope
// its because you haven't imported ths!
import React from "react";

const ValidationComponent = (props) => {
  let textOutput = null;
  let textLength = props.textLength;
  if (textLength > 0) {
    if (textLength > 5) {
      textOutput = "Text long enough";
    }
    if (textLength < 5) {
      textOutput = "Text too short";
    }
  }
  return (
    <div className="ValidationComponent">
      <p>{textOutput}</p>
    </div>
  );
};

export default ValidationComponent;
