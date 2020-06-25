import React from "react";
import "./Quote.css";

const Quote = ({ quote }) => {
  return quote.quote ? (
    <div className="quote">
      <h1>{quote.quote}</h1>
      <p>- {quote.author}</p>
    </div>
  ) : null;
};

export default Quote;
