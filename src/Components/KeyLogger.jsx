import React, { useState } from "react";
import "./KeyLogger.css";

function KeyLogger() {
  const [keyPress, setKeyPress] = useState(
    "PRESS A KEY INSIDE THE INPUT FIELD."
  );

  //  Define the event handler function
  const handleOnBeforeInput = (event) => {
    //'event' is the synthetic event object
    console.log("Key Pressed:", event.data);

    // Update the state to show the last key pressed
    if (event.data === " ") {
      setKeyPress(`LAST KEY PRESSED IS: " SPACEBAR " `);
    } else setKeyPress(`LAST KEY PRESSED IS: " ${event.data} " `);
  };

  return (
    <div className="key-logger-container">
      <h2 className="key-logger-heading">Key Down Event Example ⌨️</h2>

      {/* 2. Attach the onKeyDown handler to the input element */}
      <input
        className="key-logger-input"
        type="text"
        placeholder="Type here..."
        onBeforeInput={handleOnBeforeInput}
      />

      <p className="key-logger-result">{keyPress}</p>
    </div>
  );
}

export default KeyLogger;
