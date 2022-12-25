import React, { useState } from "react";
import Data from "./Data";

function Generator() {
  const [currentQuote, setCurrentQuote] = useState(null);

  function selectRandomQuote() {
    const randomIndex = Math.floor(Math.random() * Data.length);
    setCurrentQuote(Data[randomIndex]);
  }

  return (
    <div className="Generator">
      <button onClick={selectRandomQuote}>Get a new quote</button>
      {currentQuote && (
        <p>
          {currentQuote.quote}
          {currentQuote.author && <span> - {currentQuote.author}</span>}
        </p>
      )}
    </div>
  );
}

export default Generator;
