import React, { useState } from "react";
import "./KeyLogger.css";

function KeyLogger() {
  const [keyPress, setKeyPress] = useState(
    "PRESS A KEY INSIDE THE INPUT FIELD."
  );

  //  Define the event handler function
  const handleKeyDown = (event) => {
    // 'event' is the synthetic event object
    console.log("Key Pressed:", event.key);
    console.log("Key Code:", event.keyCode);

    // Update the state to show the last key pressed
    if (event.key === " ") {
      setKeyPress(`LAST KEY PRESSED IS: " SPACEBAR " (Code: ${event.keyCode})`);
    } else
      setKeyPress(
        `LAST KEY PRESSED IS: " ${event.key} " (Code: ${event.keyCode})`
      );

    // Example: Prevent default action for the spacebar
    // if (event.key === " ") {
    //   event.preventDefault();
    //   console.log("Spacebar press prevented!");
    // }
  };

  return (
    <div className="key-logger-container">
      <h2 className="key-logger-heading">Key Down Event Example ⌨️</h2>

      {/* 2. Attach the onKeyDown handler to the input element */}
      <input
        className="key-logger-input"
        type="text"
        placeholder="Type here..."
        onKeyDown={handleKeyDown}
      />

      <p className="key-logger-result">{keyPress}</p>
    </div>
  );
}

export default KeyLogger;
