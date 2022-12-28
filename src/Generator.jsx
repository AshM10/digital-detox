import React, { useState } from "react";
import Data from "./Data";
import "./Generator.css";

// This code defines a function called Generator that is a React component.
// The Generator function uses the useState hook to define a state variable called currentQuote
// and a function called setCurrentQuote to update the value of currentQuote.

function Generator() {
  const [currentQuote, setCurrentQuote] = useState(null);

  // The Generator component renders a button element that, when clicked, calls the
  // selectRandomQuote function. The selectRandomQuote function generates a random number
  // between 0 and the length of the Data array, and uses the setCurrentQuote function to
  // set the value of currentQuote to the element at the randomly generated index of the
  // Data array.

  function selectRandomQuote() {
    const randomIndex = Math.floor(Math.random() * Data.length);
    setCurrentQuote(Data[randomIndex]);
  }

  // The Generator component also renders a p element that displays the quote and author
  // properties of the currentQuote object, if it exists. The currentQuote object and
  // its properties are imported from a separate file called Data.

  return (
    <div className="Generator">
      <button onClick={selectRandomQuote}>Click for Detox</button>
      {currentQuote && (
        <img
          src={currentQuote.image}
          alt={`Picture of ${currentQuote.altkey}`}
        />
      )}
      {currentQuote && (
        <p>
          {/* <img
            src={currentQuote.image}
            alt={`Picture of ${currentQuote.author}`}
          /> */}
          {currentQuote.quote}
        </p>
      )}
    </div>
  );
}

// Finally, the Generator component is exported, so that it can be used in other
// parts of the application.

export default Generator;
