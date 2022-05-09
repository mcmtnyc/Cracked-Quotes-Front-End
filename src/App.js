import "./App.css";
import React from "react";
import { useRef, useEffect, useState } from "react";
import cocktailData from "./Data";

function App() {

  const [cocktailName, setCocktailName] = useState([]);
  const [cocktailImg, setCocktailImg] = useState([]);
  let [index, setIndex] = useState(1)

  const nextSlide = () => {
    if (index === 10) {
      setIndex(0)
    }
    else
    setIndex(index + 1)
    setCocktailName(cocktailData[index].strDrink)
    setCocktailImg(cocktailData[index].strDrinkThumb)
    console.log('nextslide')
  }
  const prevSlide = () => {
    if (index === 0) {
      setIndex(10)
    }
    else
    setIndex(index - 1)
    setCocktailName(cocktailData[index].strDrink)
    setCocktailImg(cocktailData[index].strDrinkThumb)
    console.log('prevslide')
    console.log(index)
  }
  const restartSlides = () => {
    setIndex(0)
    setCocktailName(cocktailData[index].strDrink)
    setCocktailImg(cocktailData[index].strDrinkThumb)
    console.log('restartslides')
    console.log(index)
  }

  useEffect(() => {
    restartSlides()
  }, []);
  
  return (
    <div className="App">
      <div class="mainBox">
        <div class="cocktails">
        <img src={require("./logo.png")} className="logo"></img>
    <h4 className="cocktailName">{cocktailName}</h4>
      <img className="img" src={cocktailImg}></img>
      <div onClick={restartSlides} className="restart">
        Restart
      </div>
      <div onClick={nextSlide} className="next">
       🥃 Next 🍸 
      </div>
      <div onClick={prevSlide} className="prev">
       🍹 Previous 🍷 
      </div>
        </div>
      </div>
      </div>
  )
}

export default App;