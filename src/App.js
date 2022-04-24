import "./App.css";
import React from "react";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import quotes from "./tenquotes.json"

function App() {

  /// Give state to loaded quote
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);

  // /// Get quote function
  // let getQuote = async () => {
  //   let result = await axios.get(
  //     "https://cracked-wisdom.herokuapp.com/quotes/random"
  //   );
  //   setQuote(result.data[0].quote);
  //   setAuthor(result.data[0].author)
  // };

  // /// On load get quote
  // useEffect(() => {
  //   console.log('useEffect')
  //   getQuote()

  // }, []);
  
  let random = Math.floor(Math.random() * 10)
  let getQuote = () => {
    setQuote(quotes[random].quote)
    setAuthor(quotes[random].author)
}

    /// On load get quote
  useEffect(() => {
    getQuote()
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Cracked Quotes Front-End</h1>
      <h5>Click to grab a quote from the Cracked Quote API</h5>
      <button onClick={getQuote} class="quoteButton">
        Grab a Quote
      </button>
      <div className="quoteContainer">
      <h2 className="authorName">{author}</h2>
        <div className="overlayContainer">
        <img className="img" src={require("./Quote-BG.png")}></img>
          <h3 className="quoteBody">{quote}</h3>
        </div>
        
        
       
      </div>
    </div>
  )
}

export default App;