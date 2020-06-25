import React from "react";
import "./Main.css";
import { useState } from "react";
import Quote from "../quote/Quote";
import { useEffect } from "react";

const Main = () => {
  const [quote, saveQuote] = useState({});

  useEffect( () => {
    getApi();
  },[])

  const getApi = async () => {
    const promise = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await promise.json();
    saveQuote(quote[0]);
  };

  return (
    <div className="container">
      <Quote quote = {quote}></Quote>
      <button className="button" onClick={getApi}>
        {" "}Get Quote{" "}
      </button>
    </div>
  );
};

export default Main;
